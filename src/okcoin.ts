import * as path from 'path';
import * as url from 'url';
import { assign } from 'lodash';
import { Logger, LoggerInstance, transports } from 'winston';
import { request } from 'urllib';

interface IOkcoin {
  apiKey: string;
  secretKey: string;
  logger: LoggerInstance;
}

const Request = Symbol('NODE-OKCOIN#REQUEST');

export default class Okcoin implements IOkcoin {
  public apiKey;
  public secretKey;
  public logger;
  constructor(apiKey, secretKey) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.logger = new Logger({
      transports: [
        new transports.Console({
          colorize: true
        })
      ]
    });
  }

  [Request](uri, query, customOption) {
    const urlObj: url.URL = {
      protocol: 'https',
      host: 'www.okcoin.com',
      pathname: path.join('/api/v1', uri),
      query: query
    };
    const endpoint: string = url.format(urlObj);
    const defaultOption = {
      contentType: 'json',
      dataType: 'json',
      timeout: 5000,
      timing: true
    };
    let option = defaultOption;
    if (customOption) option = assign(defaultOption, customOption);
    return request(endpoint, option)
      .catch((err: Error) => {
        this.logger.warn(err);
      })
      .then(res => {
        this.logger.info(uri, res.res.timing);
        return res.data;
      });
  }
}

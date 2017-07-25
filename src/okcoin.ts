import { Logger, LoggerInstance, transports } from 'winston';

interface IOkcoin {
  apiKey: string;
  secretKey: string;
  logger: LoggerInstance;
}

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
}

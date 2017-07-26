"use strict";
const path = require("path");
const url = require("url");
const lodash_1 = require("lodash");
const winston_1 = require("winston");
const urllib_1 = require("urllib");
const Request = Symbol('NODE-OKCOIN#REQUEST');
class Okcoin {
    constructor(apiKey, secretKey) {
        this.apiKey = apiKey;
        this.secretKey = secretKey;
        this.logger = new winston_1.Logger({
            transports: [
                new winston_1.transports.Console({
                    colorize: true
                })
            ]
        });
    }
    [Request](uri, search, customOption) {
        const urlObj = {
            protocol: 'https',
            host: 'www.okcoin.com',
            pathname: path.join('/api/v1', uri),
            search: search
        };
        const endpoint = url.format(urlObj);
        const defaultOption = {
            contentType: 'json',
            dataType: 'json',
            timeout: 5000,
            timing: true
        };
        let option = defaultOption;
        if (customOption)
            option = lodash_1.assign(defaultOption, customOption);
        return urllib_1.request(endpoint, option)
            .catch((err) => {
            this.logger.warn(err);
        })
            .then(res => {
            this.logger.info(uri, res.res.timing);
            return res.data;
        });
    }
    getTicker(symbol) {
        if (!symbol)
            return Promise.reject('market symbol is required');
        const search = JSON.stringify(symbol);
        return this[Request](`/ticker.do`, search);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Okcoin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tjb2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL29rY29pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQixtQ0FBZ0M7QUFDaEMscUNBQTZEO0FBQzdELG1DQUFpQztBQVFqQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUU5QztJQUlFLFlBQVksTUFBTSxFQUFFLFNBQVM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUM7WUFDdkIsVUFBVSxFQUFFO2dCQUNWLElBQUksb0JBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ3JCLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7YUFDSDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsWUFBWTtRQUNqQyxNQUFNLE1BQU0sR0FBWTtZQUN0QixRQUFRLEVBQUUsT0FBTztZQUNqQixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUM7WUFDbkMsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxNQUFNLGFBQWEsR0FBRztZQUNwQixXQUFXLEVBQUUsTUFBTTtZQUNuQixRQUFRLEVBQUUsTUFBTTtZQUNoQixPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUNGLElBQUksTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsZ0JBQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO2FBQzdCLEtBQUssQ0FBQyxDQUFDLEdBQVU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLEdBQUc7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDaEUsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7O0FBL0NELHlCQStDQyJ9
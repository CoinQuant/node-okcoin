"use strict";
const lodash_1 = require("lodash");
const crypto = require("crypto");
function signature(params, secretKey) {
    if (!secretKey)
        throw new Error('secretKey must be provided');
    const sortedParamKeys = lodash_1.sortBy(lodash_1.keys(params));
    let signedStr = lodash_1.reduce(sortedParamKeys, (accu, el) => {
        lodash_1.isEmpty(accu)
            ? (accu += `${el}=${params[el]}`)
            : (accu += `&${el}=${params[el]}`);
        return accu;
    }, '');
    signedStr += `&secret_key=${secretKey}`;
    const hashedStr = crypto.createHash('md5').update(signedStr).digest('hex');
    return hashedStr;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = signature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2lnbmF0dXJlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBdUQ7QUFDdkQsaUNBQWlDO0FBVWpDLG1CQUNFLE1BQTRCLEVBQzVCLFNBQWlCO0lBRWpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzlELE1BQU0sZUFBZSxHQUFHLGVBQU0sQ0FBQyxhQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3QyxJQUFJLFNBQVMsR0FBRyxlQUFNLENBQ3BCLGVBQWUsRUFDZixDQUFDLElBQVksRUFBRSxFQUFVO1FBQ3ZCLGdCQUFPLENBQUMsSUFBSSxDQUFDO2NBQ1QsQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Y0FDL0IsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQyxFQUNELEVBQUUsQ0FDSCxDQUFDO0lBQ0YsU0FBUyxJQUFJLGVBQWUsU0FBUyxFQUFFLENBQUM7SUFDeEMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDbkIsQ0FBQzs7QUFuQkQsNEJBbUJDIn0=
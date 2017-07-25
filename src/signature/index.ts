import { keys, isEmpty, reduce, sortBy } from 'lodash';
import * as crypto from 'crypto';

interface ISignatureParameters {
  api_key: string;
  symbol?: string;
  type?: string;
  price?: number;
  amount?: number;
}

export default function signature(
  params: ISignatureParameters,
  secretKey: string
) {
  if (!secretKey) throw new Error('secretKey must be provided');
  const sortedParamKeys = sortBy(keys(params));
  let signedStr = reduce(
    sortedParamKeys,
    (accu: string, el: string) => {
      isEmpty(accu)
        ? (accu += `${el}=${params[el]}`)
        : (accu += `&${el}=${params[el]}`);
      return accu;
    },
    ''
  );
  signedStr += `&secret_key=${secretKey}`;
  const hashedStr = crypto.createHash('md5').update(signedStr).digest('hex');
  return hashedStr;
}

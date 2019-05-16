import { InvokeOutput } from '@aws-sdk/client-lambda-node';
import { RawRoll, RollResponse } from '../model/roll';

export const parseResponse = (response: InvokeOutput): string => {
  return 'yay'
}

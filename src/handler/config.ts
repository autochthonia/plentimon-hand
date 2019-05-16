import { LambdaConfiguration } from '@aws-sdk/client-lambda-node';

export const clientConfig: LambdaConfiguration = {
  region: 'us-east-1'
};

export const functionName: string = 'plentimon-dice';

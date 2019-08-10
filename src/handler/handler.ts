import { InvokeAsyncInput, InvokeOutput, Lambda } from '@aws-sdk/client-lambda-node';
import { clientConfig, functionName } from './config';

const lambda: Lambda = new Lambda(clientConfig);

export const getRoll= async (rollRequestJson: string): Promise<InvokeOutput> => {
  const request: InvokeAsyncInput = {
    FunctionName: functionName,
    InvokeArgs: rollRequestJson
  }

  return await lambda.invoke(request);
}

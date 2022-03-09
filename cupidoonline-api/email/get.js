import handler from '../libs/Handler-lib';
import dynamoDb from '../libs/Dynamodb-lib';

export const getEmail = handler(async (event, context) => {
  const { email } = JSON.parse(event.body); //verify how to get

  const params = {
    TableName: process.env.tableName,
    Key: {
      email,
    },
  };

  const res = await dynamoDb.get(params);
  if (!res.Item) throw new Error("messages not found");
  return res.Item;
});
import handler from '../libs/Handler-lib';
import dynamoDb from '../libs/Dynamodb-lib';

export const createMessage = handler(async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      // The attributes of the item to be created
      name,
      email,
      message,
      createdAt: Date.now(),
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});
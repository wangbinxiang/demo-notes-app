import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

export const main = handler(async() => {
    const parms = {
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": "123",
        },
    };

    const result = await dynamoDb.query(parms);

    return result.Items;
})
import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

export const main = handler(async() => {
    const parms = {
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.authorizer.iam.cognitoIdentity.identityId,
        },
    };
    
    const result = await dynamoDb.query(parms);

    return result.Items;
})
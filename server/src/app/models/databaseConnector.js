import AWS from "aws-sdk";
import uuid from "uuid";
const dynamoDB = new AWS.DynamoDB();

const messageParams = {
  TableName: "message",
  Item: {
    id: uuid(),
    user_id: uuid(),
    message: String,
    timestamp: new Date(),
  },
};

const users = {
  TableName: "users",
  user: {
    id: uuid(),
    name: String,
    surname: String,
  },
};

dynamoDB.putItem(messageParams, (err, data) => {
  if (err) {
    console.error("Error adding message:", err);
  } else {
    console.log("Message added:", data);
  }
});

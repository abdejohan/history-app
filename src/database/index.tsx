import DynamoDB from "aws-sdk/clients/dynamodb";
import { HistoryEvent } from "../types";

const dynamodb = new DynamoDB.DocumentClient({
	region: import.meta.env.VITE_REGION,
	accessKeyId: import.meta.env.VITE_ACCESS_KEY,
	secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
});

// Fetch data from DynamoDB
const fetchCenturyEvents = async (century: string, start: number, stop: number) => {
	const params = {
		TableName: "Event",
		KeyConditionExpression: "#c = :c and #eY between :start and :end",
		ExpressionAttributeNames: {
			"#c": "century",
			"#eY": "eventYear",
		},
		ExpressionAttributeValues: {
			":c": century,
			":start": start,
			":end": stop,
		},
	};
	try {
		const fetchedData = await dynamodb.query(params).promise();
		console.log("Successfully fetched data: ", fetchedData);
		return fetchedData;
	} catch (error) {
		console.log("Failed to fetch data", error);
		return error;
	}
};

// Add data to DynamoDB
const saveEventToDB = async (tableName: string, data: HistoryEvent) => {
	var params = {
		TableName: tableName,
		Item: data,
	};

	try {
		const savedData = await dynamodb.put(params).promise();
		console.log("Successfully saved data: ", savedData);
		return savedData;
	} catch (error) {
		console.log("Failed to saved data", error);
		return error;
	}
};

export { fetchCenturyEvents, saveEventToDB };

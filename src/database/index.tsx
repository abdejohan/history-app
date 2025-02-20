import { AWSError } from "aws-sdk";
import DynamoDB, { QueryOutput } from "aws-sdk/clients/dynamodb";
import { HistoryEvent } from "../types";

const dynamodb = new DynamoDB.DocumentClient({
	region: import.meta.env.VITE_REGION,
	accessKeyId: import.meta.env.VITE_ACCESS_KEY,
	secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
});

// Fetch data from DynamoDB
const fetchCenturyEvents = async (century: string): Promise<QueryOutput | AWSError> => {
	const params = {
		TableName: "HistoricalEvents",
		KeyConditionExpression: "#c = :century",
		ExpressionAttributeNames: {
			"#c": "century",
		},
		ExpressionAttributeValues: {
			":century": century,
		},
	};

	try {
		const fetchedData = await dynamodb.query(params).promise();
		return fetchedData;
	} catch (error) {
		throw error;
	}
};

// Fetch data from DynamoDB
// const fetchCenturyEventsInterval = async (
// 	century: string,
// 	start: number,
// 	stop: number
// ) => {
// 	const params = {
// 		TableName: "HistoricalEvents",
// 		KeyConditionExpression: "#c = :century and eventYearHash between :start and :end",
// 		ExpressionAttributeNames: {
// 			"#c": "century",
// 		},
// 		ExpressionAttributeValues: {
// 			":century": "1st century CE",
// 			":start": "1",
// 			":end": "10",
// 		},
// 	};
// 	try {
// 		const fetchedData = await dynamodb.query(params).promise();
// 		console.log("Successfully fetched data: ", fetchedData);
// 		return fetchedData;
// 	} catch (error) {
// 		console.log("Failed to fetch data", error);
// 		return error;
// 	}
// };

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

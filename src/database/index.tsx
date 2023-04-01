import { AWSError } from "aws-sdk";
import DynamoDB, { QueryOutput } from "aws-sdk/clients/dynamodb";
import { Story } from "../types";

const tableName = "HistoricalStories";
const dynamodb = new DynamoDB.DocumentClient({
	region: import.meta.env.VITE_REGION,
	accessKeyId: import.meta.env.VITE_ACCESS_KEY,
	secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
});

// Fetch data from DynamoDB
const fetchCenturyStories = async (century: string): Promise<QueryOutput | AWSError> => {
	const params = {
		TableName: tableName,
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
const fetchCenturyStoriesInterval = async (
	century: string,
	start: number,
	stop: number
) => {
	const params = {
		TableName: tableName,
		KeyConditionExpression: "#c = :century and storyYearHash between :start and :end",
		ExpressionAttributeNames: {
			"#c": "century",
		},
		ExpressionAttributeValues: {
			":century": "1st century CE",
			":start": "1",
			":end": "10",
		},
	};
	try {
		const fetchedData = await dynamodb.query(params).promise();
		console.log("Successfully fetched data: ", fetchedData);
		return fetchedData;
	} catch (error) {
		console.log("Failed to fetch data", error);
		throw error;
	}
};

// Add data to DynamoDB
const saveStoryToDB = async (data: Story) => {
	var params = { TableName: tableName, Item: data };

	try {
		const savedData = await dynamodb.put(params).promise();
		console.log("Successfully saved data: ", savedData);
		return savedData;
	} catch (error) {
		console.log("Failed to saved data", error);
		throw error;
	}
};

const deleteStory = async (partitionKey: string, sortKey: string) => {
	console.log(partitionKey, sortKey);
	const params = {
		TableName: tableName,
		Key: { century: partitionKey, storyYearHash: sortKey },
	};

	try {
		const deletedData = await dynamodb.delete(params).promise();
		console.log("Successfully deleted item: ", partitionKey, sortKey);
		return deletedData;
	} catch (error) {
		console.log("Failed to delete item: ", error);
		throw error;
	}
};

export { fetchCenturyStories, saveStoryToDB, deleteStory };

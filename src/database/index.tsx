import * as AWS from "aws-sdk";
import { DynamoDB } from "aws-sdk";
import { HistoryEvent } from "../types";

const docClient = new DynamoDB.DocumentClient({
	region: import.meta.env.VITE_REGION,
	accessKeyId: import.meta.env.VITE_ACCESS_KEY,
	secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
});

// Fetch data from DynamoDB
const fetchData = (tableName: string) => {
	var params = {
		TableName: tableName,
	};

	docClient.scan(params, function (err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			console.log(data);
		}
	});
};

// Add data to DynamoDB
const putData = (tableName: string, data: HistoryEvent) => {
	var params = {
		TableName: tableName,
		Item: data,
	};

	docClient.put(params, function (err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			console.log("Success", data);
		}
	});
};

export { fetchData, putData };

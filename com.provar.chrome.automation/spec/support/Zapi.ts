import * as jwt from 'atlassian-jwt';
import * as moment from 'moment';
import * as request from 'request';

export class ZAPI {

	private accessKey: string = require('electron').remote.process.argv[2];
	private secretKey: string = require('electron').remote.process.argv[3];
	private username: string = require('electron').remote.process.argv[4];

	private JWTLife = 20; // Lifespan of JSON web token in minutes, which is used to authenticate requests made to Zephyr servers
	private debug: boolean;
	constructor(debug: boolean) {
		this.debug = debug;
	}
	// zapiRequest method make all the rest calls to zephyr, debug can be set to true whenever required.
	public async zapiRequest(params): Promise<any> {
		return new Promise((resolve, reject) => {
			request(params, (error, response, body) => {
				if (error) {
					// console.log(response.statusCode);
					return reject(error);
				}
				if (this.debug) {
					console.log(params);
					console.log(body);
					console.log(response.statusCode);
					console.log(response);
				}
				resolve(body);
			});
		}).catch(e => { console.log('An error had occured with the api call: ', e); });
	}
	// generates the JSON web token for a given method name and resourceURL of the API
	public async generateJWT(methodName: any, resourceURL: string): Promise<string> {
		let JWT: string;
		const now = moment().utc();
		const req: jwt.Request = jwt.fromMethodAndUrl(methodName, resourceURL);
		const tokenData = {
			sub: this.username,
			iss: this.accessKey,
			iat: now.unix(),
			exp: now.add(this.JWTLife, 'minutes').unix(),
			qsh: jwt.createQueryStringHash(req),
		};
		JWT = jwt.encode(tokenData, this.secretKey);
		// console.log('JWT ' + JWT);
		return JWT;
	}
	public async createCycle(projectId: number, versionId: number, cycleName: string, referenceCycleId?: string): Promise<string> {

		const methodName = 'POST';
		let resourceURL: string;
		if (referenceCycleId) {
			resourceURL = 'public/rest/api/1.0/cycle?clonedCycleId=' + referenceCycleId;
		} else {
			resourceURL = 'public/rest/api/1.0/cycle';
		}
		const payload = {
			name: cycleName,
			description: 'This contains the zephyr tests for a version',
			versionId,
			clearCustomFieldsFlag: true,
			projectId,
		};
		const JWT: string = await this.generateJWT(methodName, resourceURL);
		let newcycleId: string;

		const options = {
			method: methodName,
			url: 'https://prod-api.zephyr4jiracloud.com/connect/' + resourceURL,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + JWT,
				'zapiAccessKey': this.accessKey,
			},
			body: JSON.stringify(payload),
		};
		const responseBody = await this.zapiRequest(options);
		const parsedBody = JSON.parse(responseBody);
		newcycleId = parsedBody.id;
		console.log('The new cycle id is ' + newcycleId);

		return newcycleId;
	}
	// the getCycleId method will fetch the cycleId for a given cycleName within the given version and if the testcycle is not present, it makes a call to create it
	public async getCycleId(projectId: number, versionId: number, cycleName: string) {
		const methodName = 'GET';
		const resourceURL = 'public/rest/api/1.0/cycles/search?versionId=' + versionId + '&projectId=' + projectId;
		const JWT: string = await this.generateJWT(methodName, resourceURL);
		let cycleId: any;
		const options = {
			method: methodName,
			url: 'https://prod-api.zephyr4jiracloud.com/connect/' + resourceURL,
			headers: {
				'Content-Type': 'text/plain',
				'Authorization': 'JWT ' + JWT,
				'zapiAccessKey': this.accessKey,
			},
		};
		const responseBody = await this.zapiRequest(options);
		const cycleList = JSON.parse(responseBody);
		const count = cycleList.length;
		for (let i = 0; i < count; i++) {
			if (cycleList[i].name === cycleName) {
				cycleId = cycleList[i].id;
				// console.log('cycle id for the test cycle:', cycleName, ' is : ', cycleId);
				break; // return the cycle id
			}
		}

		if (!cycleId) {
			console.log('Given test cycle not found, therefore creating a new cycle');
			cycleId = await this.createCycle(projectId, versionId, cycleName); // return the cycle id
		}
		return cycleId;

	}
	public async createFolder(projectId: number, versionId: number, cycleId: string, folderName: string): Promise<string> {
		const methodName = 'POST';
		const resourceURL: string = 'public/rest/api/1.0/folder';
		const payload = {
			name: folderName,
			cycleId,
			versionId,
			projectId,
		};
		const JWT: string = await this.generateJWT(methodName, resourceURL);
		let newFolderId: string;
		const options = {
			method: methodName,
			url: 'https://prod-api.zephyr4jiracloud.com/connect/' + resourceURL,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + JWT,
				'zapiAccessKey': this.accessKey,
			},
			body: JSON.stringify(payload),
		};
		const responseBody = await this.zapiRequest(options);
		const parsedBody = JSON.parse(responseBody);
		newFolderId = parsedBody.id;
		console.log('The new folder id is ' + newFolderId);
		return newFolderId;
	}
	// the getFolderId method will fetch the folderId for a given folder within the given cycle and if the folder is not present, it makes a call to create it
	public async getFolderId(projectId: number, versionId: number, cycleId: string, folderName: string): Promise<string> {
		const methodName = 'GET';
		const resourceURL = 'public/rest/api/1.0/folders?versionId=' + versionId + '&cycleId=' + cycleId + '&projectId=' + projectId;
		const JWT: string = await this.generateJWT(methodName, resourceURL);
		let folderId: string;
		const options = {
			method: methodName,
			url: 'https://prod-api.zephyr4jiracloud.com/connect/' + resourceURL,
			headers: {
				'Content-Type': 'text/plain',
				'Authorization': 'JWT ' + JWT,
				'zapiAccessKey': this.accessKey,
			},
		};
		const responseBody = await this.zapiRequest(options);
		const folderList = JSON.parse(responseBody);
		const count = folderList.length;
		for (let i = 0; i < count; i++) {
			if (folderList[i].name === folderName) {
				folderId = folderList[i].id;
				// console.log('Folder id for the test folder: ', folderName, ' is : ', folderId);
				break; // return the folder id
			}
		}
		if (!folderId) {
			console.log('Given folder not found within the testcycle, therefore creating a new folder');
			folderId = await this.createFolder(projectId, versionId, cycleId, folderName); // return the folder id
		}
		return folderId;
	}
	public async addTestcaseIntoCycle(projectId: number, versionId: number, cycleId: string, issueKey: string, folderId?: string) {
		const methodName = 'POST';
		let resourceURL: string;
		let payload: any;
		if (folderId) {
			resourceURL = 'public/rest/api/1.0/executions/add/folder/' + folderId;
			payload = {
				issues: [issueKey],
				method: 1,
				versionId,
				projectId,
				cycleId,
			};
		} else {
			resourceURL = 'public/rest/api/1.0/executions/add/cycle/' + cycleId;
			payload = {
				issues: [issueKey],
				method: 1,
				versionId,
				projectId,
			};
		}
		const JWT: string = await this.generateJWT(methodName, resourceURL);
		const options = {
			method: methodName,
			url: 'https://prod-api.zephyr4jiracloud.com/connect/' + resourceURL,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + JWT,
				'zapiAccessKey': this.accessKey,
			},
			body: JSON.stringify(payload),
		};
		const responseBody = await this.zapiRequest(options);
		console.log(responseBody);
	}
	// the getExecutionInfo method will fetch the executionId for a given testcase within the given cycle and if the testcase is not present in it, it makes a call to create it
	public async getExecutionInfo(projectId: number, versionId: number, cycleId: string, issueKey: string, folderId?: string): Promise<any> {
		const methodName = 'GET';
		let resourceURL: string;
		if (folderId) {
			resourceURL = 'public/rest/api/2.0/executions/search/folder/' + folderId + '?projectId=' + projectId + '&versionId=' + versionId + '&cycleId=' + cycleId + '&offset=0';
		} else {
			resourceURL = 'public/rest/api/2.0/executions/search/cycle/' + cycleId + '?projectId=' + projectId + '&versionId=' + versionId + '&offset=0';
		}
		const JWT: string = await this.generateJWT(methodName, resourceURL);
		let executionId: string;
		let issueId: number;
		let executionInfo: any;
		const options = {
			method: methodName,
			url: 'https://prod-api.zephyr4jiracloud.com/connect/' + resourceURL,
			headers: {
				'Content-Type': 'text/plain',
				'Authorization': 'JWT ' + JWT,
				'zapiAccessKey': this.accessKey,
			},
		};
		const responseBody = await this.zapiRequest(options);
		const response = JSON.parse(responseBody);
		const totalCount = response.searchResult.totalCount;
		const issueList = response.searchResult.searchObjectList;
		const count = issueList.length;
		let testCaseAdded: boolean = false;

		for (let i = 0; i < count; i++) {
			if (issueList[i].issueKey === issueKey) {
				executionId = issueList[i].execution.id;
				issueId = issueList[i].execution.issueId;
				console.log('execution id is : ', executionId, ' and issue id is : ', issueId, 'for the issue key: ', issueKey);
				executionInfo = [executionId, issueId];
				console.log(executionInfo);
				break; 
			}
		}
		if (totalCount > 50 && !executionId) {
			for(let offset = 50; offset < totalCount; offset += 50){
				if (folderId) {
					resourceURL = 'public/rest/api/2.0/executions/search/folder/' + folderId + '?projectId=' + projectId + '&versionId=' + versionId + '&cycleId=' + cycleId  + '&offset=' + offset;
				} else {
					resourceURL = 'public/rest/api/2.0/executions/search/cycle/' + cycleId + '?projectId=' + projectId + '&versionId=' + versionId  + '&offset=' + offset;
				}
				const JWT: string = await this.generateJWT(methodName, resourceURL);
				const options = {
					method: methodName,
					url: 'https://prod-api.zephyr4jiracloud.com/connect/' + resourceURL,
					headers: {
						'Content-Type': 'text/plain',
						'Authorization': 'JWT ' + JWT,
						'zapiAccessKey': this.accessKey,
					},
				};
				const responseBody = await this.zapiRequest(options);
				const response = JSON.parse(responseBody);
				const issueList = response.searchResult.searchObjectList;
				const count = issueList.length;
				for (let i = 0; i < count; i++) {
					if (issueList[i].issueKey === issueKey) {
						executionId = issueList[i].execution.id;
						issueId = issueList[i].execution.issueId;
						console.log('execution id is : ', executionId, ' and issue id is : ', issueId, 'for the issue key: ', issueKey);
						executionInfo = [executionId, issueId];
						console.log(executionInfo);
						break; 
					}
				}
				if(executionId){
					break;
				}
			}
		}
		if (!executionId && !testCaseAdded) {
			console.log('Provided test case: ', issueKey, ' is not present in the testcycle, therefore, adding it to the testcycle');
			if (folderId) {
				await this.addTestcaseIntoCycle(projectId, versionId, cycleId, issueKey, folderId);
				testCaseAdded = true;
				executionInfo = await this.getExecutionInfo(projectId, versionId, cycleId, issueKey, folderId);
			} else {
				await this.addTestcaseIntoCycle(projectId, versionId, cycleId, issueKey);
				testCaseAdded = true;
				executionInfo = await this.getExecutionInfo(projectId, versionId, cycleId, issueKey);
			}
		}
		return executionInfo;

	}
	// the updateZephyrExecution method updates the execution status for a given testcase name into Zephyr
	public async updateZephyrExecution(projectId: number, versionId: number, path: string, issueKey: string, statusId: number, filepath: string, filename: string, comment: string) {
		// console.log('Updating the testcase status in Zephyr with following info: ', projectId, versionId, path, issueKey, status, comment);
		if (!this.accessKey || !this.secretKey || !this.username) {
			console.log("Zapi credentials are missing, therefore skipping the zephyr updates");
			return;
		}
		const testcycleInfo: string[] = path.split('/'); // splitting the path to get the testcycle name and the folder name
		// const testcycleName: string = testcycleInfo[0]; // PROT-2215
		var utc = new Date().toJSON().slice(5,10).replace(/-/g,'');
		const testcycleName: string = 'AutomationAPI_' + utc.toString();
		const cycleId = await this.getCycleId(projectId, versionId, testcycleName);
		let executionInfo: any;
		let executionId: string;
		let issueId: number;
		let payload: any;
		if (testcycleInfo.length === 2) { // if folder name is given the path then length will be 2
			const folderName: string = testcycleInfo[1];
			const folderId = await this.getFolderId(projectId, versionId, cycleId, folderName);
			executionInfo = await this.getExecutionInfo(projectId, versionId, cycleId, issueKey, folderId);
			executionId = executionInfo[0];
			issueId = executionInfo[1];
			payload = {
				projectId,
				versionId,
				cycleId,
				issueId,
				id: executionId,
				folderId,
				status: { id: statusId },
				comment,
			};
		} else {
			executionInfo = await this.getExecutionInfo(projectId, versionId, cycleId, issueKey);
			executionId = executionInfo[0];
			issueId = executionInfo[1];
			payload = {
				projectId,
				versionId,
				cycleId,
				issueId,
				id: executionId,
				status: { id: statusId },
				comment,
			};
		}
		const methodName = 'PUT';
		const resourceURL = 'public/rest/api/1.0/execution/' + executionId;
		const JWT: string = await this.generateJWT(methodName, resourceURL);
		const options = {
			method: methodName,
			url: 'https://prod-api.zephyr4jiracloud.com/connect/' + resourceURL,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + JWT,
				'zapiAccessKey': this.accessKey,
			},
			body: JSON.stringify(payload),
		};
		const responseBody = await this.zapiRequest(options);
		console.log('response from updateZephyrExecution method: ', JSON.parse(responseBody).execution.status.description);
		await this.addAttachment(projectId, versionId, cycleId, issueId, executionId, filepath, filename, comment);
	}
	// this method attaches the result file to the test execution in Zephyr
	public async addAttachment(projectId: number, versionId: number, cycleId: string, issueId: number, executionId: string, filepath: string, filename: string, comment: string) {
		const fs = require('fs');
		var form = {
			files:
			{
				value: fs.createReadStream(filepath),
				options: {
					filename: filename,
					contentType: 'text\\plain',
				}
			}
		};
		console.log(form);
		const methodName = 'POST';
		const resourceURL = 'public/rest/api/1.0/attachment?entityName=execution&projectId=' + projectId + '&versionId=' + versionId + '&cycleId=' + cycleId + '&issueId=' + issueId + '&entityId=' + executionId + '&comment=' + comment;
		// const resourceURL = 'public/rest/api/1.0/attachment?entityId=bc035a52-4ff1-438b-ab72-1939f357271c&entityName=execution&comment=abc&projectId=17705&issueId=43203&cycleId=7b87a582-d86e-4163-b2ba-13dc5e9a2b06&versionId=19042';
		const JWT: string = await this.generateJWT(methodName, resourceURL);
		const options = {
			method: methodName,
			url: 'https://prod-api.zephyr4jiracloud.com/connect/' + resourceURL,
			headers: {
				'X-Atlassian-Token': 'nocheck',
				'Content-Type': 'multipart/form-data',
				'Authorization': 'JWT ' + JWT,
				'zapiAccessKey': this.accessKey,
				'Connection': 'keep-alive',
			},
			formData: form,
		};
		const responseBody = await this.zapiRequest(options);
		console.log('response from add attachment method: ', JSON.parse(responseBody));
	}
}

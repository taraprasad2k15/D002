import { WebDriver } from 'selenium-webdriver';
import { AutomationSocketClient } from './AutomationSocketClient';
import { IAutomationAPI } from './IAutomationAPI';
import { RemoteWebDriver } from './RemoteWebDriver';
import { BeginAddToTestCaseMessage } from './messages/BeginAddToTestCaseMessage';
import { CompleteAddToTestCaseMessage } from './messages/CompleteAddToTestCaseMessage';
import { CreateSessionMessage } from './messages/CreateSessionMessage';
import { CreateTestCaseMessage } from './messages/CreateTestCaseMessage';
import { EndTestSessionMessage } from './messages/EndTestSessionMessage';
import { ExportTestRunDetailsMessage } from './messages/ExportTestRunDetailsMessage';
import { GetInternalConnectionDetailsMessage } from './messages/GetInternalConnectionDetailsMessage';
import { ModifyAddToTestCaseMessage } from './messages/ModifyAddToTestCaseMessage';
import { RunTestCaseMessage } from './messages/RunTestCaseMessage';
import { CompleteAction } from './messages/enum/CompleteAction';
import { RunMode } from './messages/enum/RunMode';
import { APIResponse } from './messages/response/APIResponse';
import { BeginAddToTestCaseResponse } from './messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from './messages/response/CompleteAddToTestCaseResponse';
import { CreateSessionResponse } from './messages/response/CreateSessionResponse';
import { CreateTestCaseResponse } from './messages/response/CreateTestCaseResponse';
import { GetInternalConnectionDetailsResponse } from './messages/response/GetInternalConnectionDetailsResponse';
import { ModifyTestCaseResponse } from './messages/response/ModifyTestCaseResponse';
import { RunTestCaseResponse } from './messages/response/RunTestCaseResponse';
import { GetVariableStackMessage } from './messages/GetVariableStackMessage';
import { GetVariableStackResponse } from './messages/response/GetVariableStackResponse';

export class AutomationAPI implements IAutomationAPI {

	private automationSocketClient: AutomationSocketClient;
	private port: string;
	private path: string;
	constructor(port: string, path: string) {
		this.port = port;
		this.path = path;
	}
	public async startServerConnection(): Promise<void> {
		return new Promise<void>(async (resolve, reject) => {
			this.automationSocketClient = new AutomationSocketClient(this.port, this.path);
			this.automationSocketClient.AutomationSocketOpen.on(() => {
				resolve();
			});
			this.automationSocketClient.AutomationSocketError.on(() => {
				reject();
			});
			this.automationSocketClient.open();
		});
	}
	public async createSession(): Promise<CreateSessionResponse> {
		console.log('Sending request to Provar to create session');
		const requestMessage = new CreateSessionMessage();
		requestMessage.testProjectPath = './';
		requestMessage.workspacePath = './Mylocation';
		const response: CreateSessionResponse = await this.automationSocketClient.sendWithResponse(requestMessage);
		console.log('Response create session---' + JSON.stringify(response));
		return response;
	}
	public async createTestCase(sessionId: string, testCasePath: string): Promise<CreateTestCaseResponse> {
		console.log('Sending request to Provar to create Testcase');
		const requestMessage = new CreateTestCaseMessage();
		requestMessage.automationSessionId = sessionId;
		requestMessage.testCasePath = testCasePath;
		const response: CreateTestCaseResponse = await this.automationSocketClient.sendWithResponse(requestMessage);
		console.log('Response create testcase---' + JSON.stringify(response));
		return response;
	}
	public async runTestCase(sessionId: string, testCasePath: string, runMode: RunMode): Promise<RunTestCaseResponse> {
		console.log('Sending request to Provar to run Testcase');
		const requestMessage = new RunTestCaseMessage();
		requestMessage.testCaseName = testCasePath;
		requestMessage.automationSessionId = sessionId;
		requestMessage.runMode = runMode;
		const response: RunTestCaseResponse = await this.automationSocketClient.sendWithResponse(requestMessage);
		return response;
	}
	public async beginAddToTestCase(sessionId: string, testRunId: number, targetElementSelector: string, frameXpaths?: string[], windowUrl?: string, windowTitle?: string): Promise<BeginAddToTestCaseResponse> {
		console.log('Sending request to Provar to begin Add To Testcase');
		const requestMessage = new BeginAddToTestCaseMessage();
		requestMessage.automationSessionId = sessionId;
		requestMessage.testRunId = testRunId;
		requestMessage.targetElementSelector = targetElementSelector;
		requestMessage.frameXpaths = frameXpaths ? frameXpaths : undefined;
		requestMessage.windowUrl = windowUrl ? windowUrl: undefined;
		requestMessage.windowTitle = windowTitle ? windowTitle: undefined;

		const response: BeginAddToTestCaseResponse = await this.automationSocketClient.sendWithResponse(requestMessage);
		return response;
	}
	public async completeAddToTestCase(sessionId: string, testRunId: number, completeAction: CompleteAction): Promise<CompleteAddToTestCaseResponse> {
		console.log('Sending request to Provar to complete Add To Testcase');
		const requestMessage = new CompleteAddToTestCaseMessage();
		requestMessage.automationSessionId = sessionId;
		requestMessage.testRunId = testRunId;
		requestMessage.completeAction = completeAction;
		const response: CompleteAddToTestCaseResponse = await this.automationSocketClient.sendWithResponse(requestMessage);
		return response;
	}
	public async modifyAddToTestCase(sessionId: string, testRunId: number, interactionParameters: any): Promise<ModifyTestCaseResponse> {
		console.log('Sending request to Provar to modify Add To Testcase');
		const requestMessage = new ModifyAddToTestCaseMessage();
		requestMessage.automationSessionId = sessionId;
		requestMessage.testRunId = testRunId;
		requestMessage.parameters = interactionParameters;
		const response: ModifyTestCaseResponse = await this.automationSocketClient.sendWithResponse(requestMessage);
		return response;
	}
	public async getRemoteWebDriver(sessionId: string, testRunId: number, connectionName: any): Promise<WebDriver> {
		console.log('Sending request to Provar to get webdriver details');
		const requestMessage = new GetInternalConnectionDetailsMessage();
		requestMessage.automationSessionId = sessionId;
		requestMessage.testRunId = testRunId;
		requestMessage.connectionName = connectionName;
		const response: GetInternalConnectionDetailsResponse = await this.automationSocketClient.sendWithResponse(requestMessage);
		const result: any[] = response.result;
		if (!response.successful) {
			throw new Error(response.failureCause);
			// return null; 
		}
		const remoteDriver: WebDriver = new RemoteWebDriver().getRemoteWebDriverInstance(result.find(e => e.name === 'webDriverUrl').value, result.find(e => e.name === 'webDriverSessionId').value);
		return remoteDriver;
	}
	public async endTestSession(sessionId: string, options?: {}): Promise<APIResponse> {
		console.log('Sending request to Provar to end test run session');
		const requestMessage = new EndTestSessionMessage();
		requestMessage.automationSessionId = sessionId;
		requestMessage.options = options;
		const response: APIResponse = await this.automationSocketClient.sendWithResponse(requestMessage);
		return response;
	}
	public async exportTestRunDetails(sessionId: string, testRunId: number, options?: {}): Promise<APIResponse> {
		console.log('Sending request to Provar to export Test Run Details');
		const requestMessage = new ExportTestRunDetailsMessage();
		requestMessage.automationSessionId = sessionId;
		requestMessage.options = options || {};
		requestMessage.testRunId = testRunId;
		const response: APIResponse = await this.automationSocketClient.sendWithResponse(requestMessage);
		return response;
	}
	public async getVariableStack(sessionId: string, testRunId: number, variableName: string): Promise<APIResponse> {
		console.log('Sending request to Provar to get Variable Stack');
		const requestMessage = new GetVariableStackMessage();
		requestMessage.automationSessionId = sessionId;
		requestMessage.testRunId = testRunId;
		requestMessage.variableName = variableName;
		const response: GetVariableStackResponse = await this.automationSocketClient.sendWithResponse(requestMessage);
		return response;
	}
}
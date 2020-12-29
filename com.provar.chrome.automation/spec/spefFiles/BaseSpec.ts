import * as fs from 'fs';
import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { AutomationAPI } from '../../App/automationApi/AutomationAPIs';
import { IAutomationAPI } from '../../App/automationApi/IAutomationAPI';
import { CompleteAction } from '../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../App/automationApi/messages/enum/RunMode';
import { APIResponse } from '../../App/automationApi/messages/response/APIResponse';
import { BeginAddToTestCaseResponse } from '../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { CreateSessionResponse } from '../../App/automationApi/messages/response/CreateSessionResponse';
import { CreateTestCaseResponse } from '../../App/automationApi/messages/response/CreateTestCaseResponse';
import { ModifyTestCaseResponse } from '../../App/automationApi/messages/response/ModifyTestCaseResponse';
import { RunTestCaseResponse } from '../../App/automationApi/messages/response/RunTestCaseResponse';
import { TestBuilderState } from '../../App/automationApi/messages/response/TestBuilderState';
import { ExpectedResultSupport } from '../support/ExpectedResultSupport';
import { MiscUtils } from '../support/MiscUtil';
import { ErrorMessage } from '../../App/automationApi/messages/ErrorMessage';

export class BaseSpec {
	protected sessionId: string;
	protected testCasePath: string;
	protected testRunId: number;
	protected miscUtils: MiscUtils;
	protected comparisonUtils: ExpectedResultSupport;
	protected automationApi: IAutomationAPI;
	protected executionStatusTemplate: any;
	protected testCaseXMLStringTemplate: string;
	protected testCaseXMLJsonTemplate: any;
	protected failTestCase: string;
	constructor() {
		this.comparisonUtils = new ExpectedResultSupport();
		this.miscUtils = new MiscUtils(this.comparisonUtils);
	}

	public zephyrTest(path: string, zephyrTestCaseId: string, expectation: string, assertion) {
		const suite: any = describe(expectation, () => {
			assertion();
		});
		if (zephyrTestCaseId.toLowerCase() === "dummy") {
			console.log("Dummy zephyr Ids are provided");
		} else {
			suite.result.id = zephyrTestCaseId;
			suite.result.testCycle = path;
		}
	}

	public step(expectation: string, assertion, timeout?: number) {
		const spec: any = it(expectation, async done => {
			try {
				if (!this.failTestCase) {
					await assertion();
				} else {
					fail("Skipping the test case because the previous step has failed with error: " + this.failTestCase);
				};

			} catch (e) {
				this.failTestCase = 'Spec failed due to exception: ' + e;
				fail(e);
			} finally {
				done();
			}
		}, timeout);
	}

	public beforeEach(timeout?: number): void {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout ? timeout : 100000;
	}

	public async beforeAll(debug: boolean, absPathForTC: string, testCaseName: string, runMode: RunMode, done): Promise<void> {
		try {
			await this.startServerConnection();
			if (debug) {
				this.sessionId = "Session0003";
				this.testCasePath = "C:/Users/sharm/Provar/Testbuilder Testing/AutomationAPI/tests/Session0001/" + testCaseName;
				this.testRunId = 3;
				this.executionStatusTemplate = {};
				this.testCaseXMLStringTemplate = fs.readFileSync(this.testCasePath, 'utf8');
				this.testCaseXMLJsonTemplate = await this.miscUtils.convertXMLToJSON(this.testCaseXMLStringTemplate);
			}
			else {
				await this.createSession();
				await this.createTestCase(absPathForTC);
				await this.runTestCase(testCaseName, runMode);
				this.failTestCase = '';
			}
		} finally {
			done();
		}
	}

	public async startServerConnection() {
		try {
			this.automationApi = new AutomationAPI('2345', '/provar/automation');
			await this.automationApi.startServerConnection();
		} catch (e) {
			this.failTestCase = ErrorMessage.connectionError + '2345';
			throw new Error(this.failTestCase);
		}
	}

	public async getRemoteWebDriver(connectionName: string): Promise<WebDriver> {
		if(!this.testRunId){
			throw new Error("testRunId is missing, this could be because it was not provided or runTestCase API have not returned response yet.")
		}
		try {
			const remoteWebdriver: WebDriver = await this.automationApi.getRemoteWebDriver(this.sessionId, this.testRunId, connectionName);
			return remoteWebdriver;
		} catch (e) {
			throw new Error("getRemoteWebDriver due to exception: " + e);
		}
	}

	public async findElement(remoteWebDriver: WebDriver, elementXpath: string, timeout?: number): Promise<WebElement> {
		try {
			const elements: WebElement[] = await remoteWebDriver.wait(until.elementsLocated(By.xpath(elementXpath)), timeout ? timeout : 10000);
			return elements[0];
		} catch (e) {
			throw new Error("findElement failed due to exception: " + e);
		}
	}

	public async elementIsNotVisible(remoteWebDriver: WebDriver, element: WebElement, timeout?: number) {
		try {
			await remoteWebDriver.wait(until.elementIsNotVisible(element), timeout ? timeout : 10000);
			console.log("element found");
		} catch (e) {
			throw new Error("elementIsNotVisible failed due to exception: " + e);
		}
	}

	public async createSession(): Promise<void> {
		console.log('Creating a new session');
		const response: CreateSessionResponse = await this.automationApi.createSession();
		if (!response.successful) {
			this.failTestCase = response.failureCause;
			throw new Error(response.failureCause);
		} else {
			this.sessionId = response.automationSessionId;
		}
	}

	public async createTestCase(absPathForTC: string): Promise<void> {
		console.log('Creating a new test case');
		const response: CreateTestCaseResponse = await this.automationApi.createTestCase(this.sessionId, absPathForTC);
		if (!response.successful) {
			this.failTestCase = response.failureCause;
			throw new Error(response.failureCause);
		} else {
			this.testCasePath = response.testCasePath;
		}
	}

	public async runTestCase(testCaseName: string, runMode: RunMode): Promise<void> {
		console.log('Running test case');
		const response: RunTestCaseResponse = await this.automationApi.runTestCase(this.sessionId, testCaseName, runMode);
		if (!response.successful) {
			this.failTestCase = response.failureCause;
			throw new Error(response.failureCause);
		} else {
			this.testRunId = response.runId;
			this.executionStatusTemplate = response.runExecutionStatus.currentTestCase;
			this.testCaseXMLStringTemplate = fs.readFileSync(this.testCasePath, 'utf8');
			this.testCaseXMLJsonTemplate = await this.miscUtils.convertXMLToJSON(this.testCaseXMLStringTemplate);
		}
	}

	public async beginAddToTestCase(targetElementSelector: string, frameXpaths?: string[], windowUrl?: string, windowTitle?: string): Promise<BeginAddToTestCaseResponse> {
		let response: BeginAddToTestCaseResponse;
		response = await this.automationApi.beginAddToTestCase(this.sessionId, this.testRunId, targetElementSelector, frameXpaths ? frameXpaths : undefined, windowUrl ? windowUrl : undefined, windowTitle ? windowTitle : undefined);
		if (!response.successful) {
			this.failTestCase = response.failureCause;
			throw new Error(response.failureCause);
		}
		return response;
	}

	public async modifyAddToTestCase(interactionParameters: any): Promise<ModifyTestCaseResponse> {
		const response: ModifyTestCaseResponse = await this.automationApi.modifyAddToTestCase(this.sessionId, this.testRunId, interactionParameters);
		if (!response.successful) {
			this.failTestCase = response.failureCause;
			throw new Error(response.failureCause);
		}
		return response;
	}

	public async completeAddToTestCase(completeAction: CompleteAction): Promise<CompleteAddToTestCaseResponse> {
		return new Promise((resolve, reject) => {
			setTimeout(async () => {
				const response: CompleteAddToTestCaseResponse = await this.automationApi.completeAddToTestCase(this.sessionId, this.testRunId, completeAction);
				if (!response.successful) {
					this.failTestCase = response.failureCause;
					throw new Error(response.failureCause);
				};
				resolve(response);
			}, 1000);
		});
	}

	public assertTestBuilderState(pageStructureItems: any[], fieldDetails: any, interaction: any, applicableInteractions: string[], actualTBState: TestBuilderState, rowLocators?: any[]): void {
		const expectedTBState: TestBuilderState = new TestBuilderState();
		expectedTBState.pageStructureItems = pageStructureItems;
		expectedTBState.targetField = fieldDetails;
		expectedTBState.interaction = interaction;
		if (rowLocators) {
			expectedTBState.whereColumns = rowLocators;
		};
		const comparisonResult = this.comparisonUtils.compareObjects(null, actualTBState, expectedTBState);
		expect(comparisonResult).toBe(null, 'Invalid TestBuilder State');
	}

	public async assertTestCaseXML(testItemId: string, testCaseXML: any): Promise<void> {
		const testCaseXmlString: string = fs.readFileSync(this.testCasePath, 'utf8');
		const testCaseXmlJson: any = await this.miscUtils.convertXMLToJSON(testCaseXmlString);
		// console.log('JSON of XML : ', JSON.stringify(testCaseXmlJson, null, 4));
		const expectedData: any = this.miscUtils.appendToXMLJson(this.testCaseXMLJsonTemplate, testCaseXML, testItemId);
		const comparisonResult: any = this.comparisonUtils.compareObjects({ ignoreAttributes: ['created', 'updated'] }, [testCaseXmlJson.testCase.steps], expectedData.testCase.steps);
		expect(comparisonResult[0]).toBe(null, 'Invalid Test Case XML');
		this.testCaseXMLJsonTemplate = testCaseXmlJson;
		this.testCaseXMLStringTemplate = testCaseXmlString;
	}

	public assertExecutionStatus(testItemId: string, executionStatus: any, currentTestCase: any): void {
		// console.log('Execution Status : ', JSON.stringify(currentTestCase, null, 4));
		const expectedTestCase: any = this.miscUtils.appendToTestCaseJson(this.executionStatusTemplate, executionStatus, testItemId);
		const comparisonResult: any = this.comparisonUtils.compareObjects({ ignoreAttributes: ['childNodesUpdated', 'icon'] }, currentTestCase, expectedTestCase);
		expect(comparisonResult).toBe(null, 'One of the test step has failed');
		this.executionStatusTemplate = currentTestCase;
	}

	public async endTestSession(done, options?: any): Promise<void> {
		try {
			// await this.exportPDF();
			let response: APIResponse;
			response = await this.automationApi.endTestSession(this.sessionId, { deleteSessionFolder: false });
			if (!response.successful) {
				fail(response.failureCause);
			} else {
				expect(response.successful).toBeTruthy();
			}
		} catch (e) {
			fail(e);
		} finally {
			done();
		}
	}

	public async exportPDF(): Promise<any> {
		const optionsForExportPDF: any = {
			includeSkippedTestSteps: true,
		};
		const response = await this.automationApi.exportTestRunDetails(this.sessionId, this.testRunId, optionsForExportPDF);
		console.log('Response from export PDF:', response);
	}

	public async getVariableStack(variable_name: string): Promise<APIResponse> {
		const response = await this.automationApi.getVariableStack(this.sessionId, this.testRunId, variable_name);
		if (!response.successful) {
			this.failTestCase = response.failureCause;
			throw new Error(response.failureCause);
		}
		return response;
	}

	public async verifyElement(remoteWebDriver: WebDriver, elementXpath: string, timeout?: number): Promise<WebElement> {
		try {
			const elements: WebElement[] = await remoteWebDriver.wait(until.elementsLocated(By.xpath(elementXpath)), timeout ? timeout : 10000);
			return elements[0];
		} catch (e) {
			return null;
		}
	}
}
import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from './messages/enum/CompleteAction';
import { RunMode } from './messages/enum/RunMode';
import { APIResponse } from './messages/response/APIResponse';
import { BeginAddToTestCaseResponse } from './messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from './messages/response/CompleteAddToTestCaseResponse';
import { CreateSessionResponse } from './messages/response/CreateSessionResponse';
import { CreateTestCaseResponse } from './messages/response/CreateTestCaseResponse';
import { ModifyTestCaseResponse } from './messages/response/ModifyTestCaseResponse';
import { RunTestCaseResponse } from './messages/response/RunTestCaseResponse';

export interface IAutomationAPI {
	startServerConnection(): Promise<void>;
	createSession(): Promise<CreateSessionResponse>;
	createTestCase(sessionId: string, testCasePath: string): Promise<CreateTestCaseResponse>;
	runTestCase(sessionId: string, testCasePath: string, runMode: RunMode): Promise<RunTestCaseResponse>;
	beginAddToTestCase(sessionId: string, testRunId: number, targetElementSelector: string, frameXpaths?: string[], windowUrl?: string, windowTitle?: string): Promise<BeginAddToTestCaseResponse>;
	completeAddToTestCase(sessionId: string, testRunId: number, completeAction: CompleteAction): Promise<CompleteAddToTestCaseResponse>;
	modifyAddToTestCase(sessionId: string, testRunId: number, interactionParameters: any): Promise<ModifyTestCaseResponse>;
	getRemoteWebDriver(sessionId: string, testRunId: number, connectionName: any): Promise<WebDriver>;
	endTestSession(sessionId: string, options?: {}): Promise<APIResponse>;
	exportTestRunDetails(sessionId: string, testRunId: number, options?: {}): Promise<APIResponse>;
	getVariableStack(sessionId: string, testRunId: number, variableName: string): Promise<APIResponse>; 
}
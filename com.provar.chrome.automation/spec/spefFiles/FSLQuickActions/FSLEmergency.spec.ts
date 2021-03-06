import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { FSLBookAppointmentData } from './FSLBookAppointment.data';
import { join } from 'path';

export class FSLEmergencySpec extends BaseSpec {
	public runTest() {
		const connectionName: string = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[];
		const iframeXpath = "//iframe";
		
		const assertInteractionParameters = {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				},
			}
		};
		const executionStatusAssert = [{
			"name": "UiAssert",
			"type": "Icon-Successful",
			"text": "UI Assert",
			"executionStatus": "Executed",
		}];
		this.zephyrTest('AutomationAPI', 'PROT-2048', 'FS_MAP_SF_FSL_WO_QA_Emergency', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'FSLEmergency.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [FSLBookAppointmentData.PSIEmergency];
			}, 200 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Map Service Field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLBookAppointmentData.service.xpath, [iframeXpath]);
				this.assertTestBuilderState(pageStructureInfo, FSLBookAppointmentData.service.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do Service Field', async () => {
				await this.modifyAddToTestCase(FSLBookAppointmentData.service.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLBookAppointmentData.service.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLBookAppointmentData.service.executionStatus, response.runExecutionStatus.currentTestCase);
			});			
			this.step('Map address Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLBookAppointmentData.address.xpath, [iframeXpath]);
				this.assertTestBuilderState(pageStructureInfo, FSLBookAppointmentData.address.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do address Field', async () => {
				await this.modifyAddToTestCase(FSLBookAppointmentData.address.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLBookAppointmentData.address.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLBookAppointmentData.address.executionStatus, response.runExecutionStatus.currentTestCase);
			});	
			this.step('Map territory Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLBookAppointmentData.territory.xpath, [iframeXpath]);
				this.assertTestBuilderState(pageStructureInfo, FSLBookAppointmentData.territory.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do territory Field', async () => {
				await this.modifyAddToTestCase(FSLBookAppointmentData.territory.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLBookAppointmentData.territory.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLBookAppointmentData.territory.executionStatus, response.runExecutionStatus.currentTestCase);
			});	
			this.step('Map Service Field for Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLBookAppointmentData.service.xpath, [iframeXpath]);
				this.assertTestBuilderState(pageStructureInfo, FSLBookAppointmentData.service.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do Service Field for Assertion', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});	
			this.step('Map territory Field for Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLBookAppointmentData.territory.xpath, [iframeXpath]);
				this.assertTestBuilderState(pageStructureInfo, FSLBookAppointmentData.territory.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do territory Field for Assertion', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});	
			this.step('Map address Field for Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLBookAppointmentData.address.xpath, [iframeXpath]);
				this.assertTestBuilderState(pageStructureInfo, FSLBookAppointmentData.address.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});	
			this.step('Add & Do address Field for Assertion', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map dispatchBt Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLBookAppointmentData.dispatchBt.xpath, [iframeXpath]);
				this.assertTestBuilderState(pageStructureInfo, FSLBookAppointmentData.dispatchBt.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
			});
			this.step('Add & Do dispatchBt Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, FSLBookAppointmentData.dispatchBt.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}; 
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { Angular } from './Angular.data';
import { join } from 'path';
import { WebDriver } from 'selenium-webdriver';

export class Angular_VFSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let pageStructureInfo: any[] = [Angular.PSI.existing];
		const VFframeId = ["(//iframe)[1]"];
		const assertionParameters = {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				}
			}
		};
		const ExecutionStatusAssert = [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed'
		}];
		let remoteWebdriver: WebDriver;
		const connectionName: string = 'Regression';

		this.zephyrTest('AutomationAPI', 'PROT-2572', 'FS_MAP_SF_LAYOUT_VF_AngularInsideVF', () => {
			beforeAll(async done => {
				const tcName = 'Angular.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping firstName field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, VFframeId[0], 30 * 1000);
				await remoteWebdriver.switchTo().frame(0)
				await this.findElement(remoteWebdriver, Angular.firstName.Xpath, 30 * 1000)
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Angular.firstName.Xpath, VFframeId);
				this.assertTestBuilderState([Angular.PSI.new], Angular.firstName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do firstName field', async () => {
				await this.modifyAddToTestCase(Angular.firstName.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", Angular.firstName.testCaseXML);
				this.assertExecutionStatus("0", Angular.firstName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping lastName field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Angular.lastName.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, Angular.lastName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do lastName field', async () => {
				await this.modifyAddToTestCase(Angular.lastName.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Angular.lastName.testCaseXML);
				this.assertExecutionStatus(testItemId, Angular.lastName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping mobile field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Angular.mobile.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, Angular.mobile.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do mobile field', async () => {
				await this.modifyAddToTestCase(Angular.mobile.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Angular.mobile.testCaseXML);
				this.assertExecutionStatus(testItemId, Angular.mobile.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping email field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Angular.email.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, Angular.email.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do email field', async () => {
				await this.modifyAddToTestCase(Angular.email.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Angular.email.testCaseXML);
				this.assertExecutionStatus(testItemId, Angular.email.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Angular.description.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, Angular.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do description field', async () => {
				await this.modifyAddToTestCase(Angular.description.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Angular.description.testCaseXML);
				this.assertExecutionStatus(testItemId, Angular.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			// Assertions
			this.step('Mapping firstName field Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Angular.firstName.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, {disposition: "Existing"}, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do firstName field Assertions', async () => {
				await this.modifyAddToTestCase(assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping lastName field Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Angular.lastName.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, {disposition: "Existing"}, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do lastName field Assertions', async () => {
				await this.modifyAddToTestCase(assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping mobile field Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Angular.mobile.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, {disposition: "Existing"}, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do mobile field Assertions', async () => {
				await this.modifyAddToTestCase(assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping email field Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Angular.email.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, {disposition: "Existing"}, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do email field Assertions', async () => {
				await this.modifyAddToTestCase(assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping description field Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Angular.description.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, {disposition: "Existing"}, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do description field Assertions', async () => {
				await this.modifyAddToTestCase(assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}

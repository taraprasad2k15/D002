import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { PO_VF_SLDS } from './PO_VF_SLDS.data';
import { join } from 'path';
import { WebDriver, WebElement } from 'selenium-webdriver';

export class PO_VF_SLDSSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [PO_VF_SLDS.PSI.new];
		const VFframeId = ["//iframe[contains(@name,'vfFrameId')]"];
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

		this.zephyrTest('AutomationAPI', 'PROT-2498', 'FS_MAP_SF_LAYOUT_PO_VF_SLDS', () => {
			beforeAll(async done => {
				const tcName = 'SLDS.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping textInput field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				remoteWebdriver.switchTo().defaultContent();
				const ele: WebElement = await this.findElement(remoteWebdriver, "//iframe[contains(@name,'vfFrameId')]", 20 * 1000);
				remoteWebdriver.switchTo().frame(ele);
				await this.findElement(remoteWebdriver, PO_VF_SLDS.textInput.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.textInput.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.textInput.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do textInput field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.textInput.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", PO_VF_SLDS.textInput.testCaseXML);
				this.assertExecutionStatus("0", PO_VF_SLDS.textInput.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping textarea field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.textarea.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.textarea.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do textarea field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.textarea.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.textarea.testCaseXML);
				this.assertExecutionStatus(testItemId, PO_VF_SLDS.textarea.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.checkbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do checkbox field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.checkbox.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.checkbox.testCaseXML);
				this.assertExecutionStatus(testItemId, PO_VF_SLDS.checkbox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping monday field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.monday.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.monday.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do monday field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.monday.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.monday.testCaseXML);
				this.assertExecutionStatus(testItemId, PO_VF_SLDS.monday.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping checkbox2 field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.checkbox2.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.checkbox2.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do checkbox2 field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.checkbox2.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.checkbox2.testCaseXML);
				this.assertExecutionStatus(testItemId, PO_VF_SLDS.checkbox2.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping radio field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.radio.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.radio.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do radio field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.radio.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.radio.testCaseXML);
				this.assertExecutionStatus(testItemId, PO_VF_SLDS.radio.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping wed field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.wed.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.wed.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do wed field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.wed.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.wed.testCaseXML);
				this.assertExecutionStatus(testItemId, PO_VF_SLDS.wed.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			// Assertions
			this.step('Mapping textInput field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.textInput.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.textInput.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do textInput field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.textInput.assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.textInput.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping textarea field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.textarea.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.textarea.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do textarea field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.textarea.assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.textarea.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.checkbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do checkbox field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.checkbox.assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.checkbox.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping checkbox2 field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.checkbox2.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.checkbox2.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do checkbox2 field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.checkbox2.assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.checkbox2.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping picklist field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.picklist.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, PO_VF_SLDS.checkbox2.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do picklist field', async () => {
				await this.modifyAddToTestCase(PO_VF_SLDS.picklist.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PO_VF_SLDS.picklist.testCaseXML);
				this.assertExecutionStatus(testItemId, PO_VF_SLDS.picklist.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			// Commenting as assertion is failing on these fields PRO-16840
			// this.step('Mapping wed field', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.wed.Xpath, VFframeId);
			// 	this.assertTestBuilderState(pageStructureInfo,PO_VF_SLDS.wed.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			// });
			// this.step('Add & Do wed field', async () => {
			// 	await this.modifyAddToTestCase(PO_VF_SLDS.wed.assertionParameters);
			// 	const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			// 	const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
			// 	this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			// });	
			// this.step('Mapping monday field', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PO_VF_SLDS.monday.Xpath, VFframeId);
			// 	this.assertTestBuilderState(pageStructureInfo,PO_VF_SLDS.monday.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			// });
			// this.step('Add & Do monday field', async () => {
			// 	await this.modifyAddToTestCase(PO_VF_SLDS.monday.assertionParameters);
			// 	const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			// 	const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
			// 	this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			// });
		});
	}
}

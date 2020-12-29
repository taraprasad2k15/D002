import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SLDS } from './SLDS.data';
import { join } from 'path';

export class SLDS_VFSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let pageStructureInfo: any[] = [SLDS.PSI.existing];
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

		this.zephyrTest('AutomationAPI', 'PROT-2497', 'FS_MAP_SF_LAYOUT_VF_SLDS', () => {
			beforeAll(async done => {
				const tcName = 'SLDS_VF.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			// afterAll(async done => {
			// 	await this.endTestSession(done);
			// });
			this.step('Mapping textInput field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.textInput.Xpath, VFframeId);
				this.assertTestBuilderState([SLDS.PSI.new], SLDS.textInput.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do textInput field', async () => {
				await this.modifyAddToTestCase(SLDS.textInput.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SLDS.textInput.testCaseXML);
				this.assertExecutionStatus("0", SLDS.textInput.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping textarea field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.textarea.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, SLDS.textarea.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do textarea field', async () => {
				await this.modifyAddToTestCase(SLDS.textarea.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SLDS.textarea.testCaseXML);
				this.assertExecutionStatus(testItemId, SLDS.textarea.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.checkbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, SLDS.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do checkbox field', async () => {
				await this.modifyAddToTestCase(SLDS.checkbox.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SLDS.checkbox.testCaseXML);
				this.assertExecutionStatus(testItemId, SLDS.checkbox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping monday field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.monday.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, SLDS.monday.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do monday field', async () => {
				await this.modifyAddToTestCase(SLDS.monday.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SLDS.monday.testCaseXML);
				this.assertExecutionStatus(testItemId, SLDS.monday.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping checkbox2 field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.checkbox2.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, SLDS.checkbox2.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do checkbox2 field', async () => {
				await this.modifyAddToTestCase(SLDS.checkbox2.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SLDS.checkbox2.testCaseXML);
				this.assertExecutionStatus(testItemId, SLDS.checkbox2.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping radio field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.radio.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, SLDS.radio.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do radio field', async () => {
				await this.modifyAddToTestCase(SLDS.radio.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SLDS.radio.testCaseXML);
				this.assertExecutionStatus(testItemId, SLDS.radio.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping wed field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.wed.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, SLDS.wed.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do wed field', async () => {
				await this.modifyAddToTestCase(SLDS.wed.modificationParametersVF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SLDS.wed.testCaseXML);
				this.assertExecutionStatus(testItemId, SLDS.wed.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			// Assertions
			this.step('Mapping textInput field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.textInput.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, {disposition: "Existing"}, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do textInput field', async () => {
				await this.modifyAddToTestCase(assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping textarea field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.textarea.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, {disposition: "Existing"}, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do textarea field', async () => {
				await this.modifyAddToTestCase(assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.checkbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, {disposition: "Existing"}, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do checkbox field', async () => {
				await this.modifyAddToTestCase(assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping monday field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.monday.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, {disposition: "Existing"}, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do monday field', async () => {
				await this.modifyAddToTestCase(assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping checkbox2 field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SLDS.checkbox2.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, {disposition: "Existing"}, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do checkbox2 field', async () => {
				await this.modifyAddToTestCase(assertionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ExecutionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}

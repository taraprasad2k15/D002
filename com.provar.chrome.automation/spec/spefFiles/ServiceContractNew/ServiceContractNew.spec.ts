import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { ServiceContractNewData } from './ServiceContractNew.data';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class ServiceContractNewSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let pageStructureInfo: any[] = [{
			itemDefinition: {
				itemClass: 'Page',
				itemTypeId: 'SfLayoutUiTargetExtension',
			},
			pageDetails: {
				title: 'Service Contract New screen',
			},
		}];

		this.zephyrTest('AutomationAPI', 'PROT-2495', 'FS_MAP_SF_LX_NEW SERVICE CONTRACT', () => {
			beforeAll(async done => {
				const tcName = 'ServiceContractNew.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				done;
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Start Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractNewData.startDate.Xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractNewData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceContractNewData.startDate.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractNewData.startDate.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractNewData.startDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save & New button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveAndNewButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveAndNewButton2, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save & New button field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveAndNewButton2.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveAndNewButton2.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			}, 5 * 1000);
			this.step('Mapping Page Errors', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.pageError.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.pageError, Standard.interaction.readAssert, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do Page Errors field', async () => {
				await this.modifyAddToTestCase(SfCommonFIeld.pageError.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.pageError.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.pageError.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name field for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractNewData.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractNewData.name.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Name field for Assertions', async () => {
				await this.modifyAddToTestCase(ServiceContractNewData.name.interactionParametersAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractNewData.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceContractNewData.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractNewData.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractNewData.name.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Name field', async () => {
				await this.modifyAddToTestCase(ServiceContractNewData.name.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractNewData.name.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractNewData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractNewData.description.Xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractNewData.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(ServiceContractNewData.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractNewData.description.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractNewData.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Account Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractNewData.accountName.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractNewData.accountName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Account Name field', async () => {
				await this.modifyAddToTestCase(ServiceContractNewData.accountName.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractNewData.accountName.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractNewData.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping billingStreet field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractNewData.billingStreet.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractNewData.billingStreet.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do billingStreet field', async () => {
				await this.modifyAddToTestCase(ServiceContractNewData.billingStreet.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractNewData.billingStreet.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractNewData.billingStreet.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Mapping Cancel button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Mapping Save button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save button field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
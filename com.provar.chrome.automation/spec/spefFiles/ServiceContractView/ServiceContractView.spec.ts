import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { ServiceContractView } from './ServiceContractView';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';

export class ServiceContractViewSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [ServiceContractView.contractViewPSI];
		this.zephyrTest('AutomationAPI', 'PROT-2496', 'FS_MAP_SF_LX_SERVICECONTRACT_ILE', () => {
			beforeAll(async done => {
				const tcName = 'ServiceContract.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Contract Start Date field on View Screen', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.contractStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.contractStartDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Activate Inline Edit on Contract Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.contractStartDate.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.contractStartDate.testCaseXMLILE);
				this.assertExecutionStatus(testItemId, ServiceContractView.contractStartDate.executionStatusILE, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Start Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.contractStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.contractStartDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Contract Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.contractStartDate.setInteraction);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.contractStartDate.testCaseXMLSet);
				this.assertExecutionStatus(testItemId, ServiceContractView.contractStartDate.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Term field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.contractTerm.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.contractTerm.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Contract Term field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.contractTerm.modificationParameter.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.contractTerm.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractView.contractTerm.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton1, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractView.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Account Name field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.accountName.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.accountName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label, Value and Message Assertion on Account Name field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.accountName.interactionParameters.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.accountName.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Account Name field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.accountName.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.accountName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing SF Lookup Interaction on Account Name field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.accountName.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ServiceContractView.accountName.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractView.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name field from Lookup Screen', async () => {
				await this.findElement(remoteWebdriver, ServiceContractView.name.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.name.xpath);
				this.assertTestBuilderState([ServiceContractView.PSIlookup], ServiceContractView.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, ServiceContractView.name.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractView.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.description.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Description field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.description.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdLookupOnscreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdLookupOnscreen);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ServiceContractView.description.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceContractView.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Billing Country field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.billingCountry.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.billingCountry.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interation on Billing Country field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.billingCountry.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.billingCountry.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractView.billingCountry.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Start Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.contractStartDate.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.contractStartDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Contract Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.contractStartDate.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ServiceContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Term field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.contractTerm.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.contractTerm.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value on Contract Term field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.contractTerm.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.contractTerm.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ServiceContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.description.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Description field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.description.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ServiceContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Billing Country field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.billingCountry.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.billingCountry.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Billing Country field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.billingCountry.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ServiceContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Number field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.contractNumber.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.contractNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Contract Number field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.contractNumber.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Shipping Street field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.shippingStreet.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.shippingStreet.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Performing Label and Blank Value Assertion on Shipping Street field', async () => {
				await this.modifyAddToTestCase(ServiceContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.shippingStreet.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Page Errors on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.pageError.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.pageError.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Assertion on Page Errors', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.pageError.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel Button on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceContractView.cancel.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceContractView.cancel.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Assertion on Cancel Button', async () => {
				await this.modifyAddToTestCase(ServiceContractView.cancel.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.cancel.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton1, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceContractView.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceContractView.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
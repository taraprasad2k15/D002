import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { NewContract } from './ContractNew';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';

export class NewContractSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [NewContract.newContractPSI];
		this.zephyrTest('AutomationAPI', "PROT-1876", 'FS_MAP_SF_LX_NEW CONTRACT', () => {
			beforeAll(async done => {
				const tcName = 'New Contract.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the AccountName field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, NewContract.accountName.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.accountName.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.accountName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Account Name field', async () => {
				await this.modifyAddToTestCase(NewContract.accountName.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.accountName.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Status field', async () => {
				await this.findElement(remoteWebdriver, NewContract.status.xpath, 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.status.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Status field', async () => {
				await this.modifyAddToTestCase(NewContract.status.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.status.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Term field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.contractTerm.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.contractTerm.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
			});
			this.step('Add & Do Contract Term field', async () => {
				await this.modifyAddToTestCase(NewContract.contractTerm.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.contractTerm.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.contractTerm.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Start Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.contractStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.contractStartDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Contract Start Date field', async () => {
				await this.modifyAddToTestCase(NewContract.contractStartDate.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.contractStartDate.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.contractStartDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Owner Expiration Notice  field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.ownerExpirationNotice.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.ownerExpirationNotice.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Owner Expiration Notice field', async () => {
				await this.modifyAddToTestCase(NewContract.ownerExpirationNotice.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.ownerExpirationNotice.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.ownerExpirationNotice.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Special Terms field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.specialTerms.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.specialTerms.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Special Terms field', async () => {
				await this.modifyAddToTestCase(NewContract.specialTerms.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.specialTerms.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.specialTerms.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Company Signed Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.companySignedDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.companySignedDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Company Signed Date field', async () => {
				await this.modifyAddToTestCase(NewContract.companySignedDate.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.companySignedDate.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.companySignedDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Customer Signed By field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.customerSignedBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.customerSignedBy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Customer Signed By field', async () => {
				await this.modifyAddToTestCase(NewContract.customerSignedBy.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, NewContract.customerSignedBy.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.customerSignedBy.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name field', async () => {
				await this.findElement(remoteWebdriver, NewContract.name.xpath, 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.name.xpath);
				this.assertTestBuilderState([NewContract.name.psi], NewContract.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, NewContract.name.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Term field for value Assertion', async () => {
				await this.findElement(remoteWebdriver,NewContract.contractTerm.xpath, 20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.contractTerm.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.contractTerm.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
			});
			this.step('Add & Do Contract Term field', async () => {
				await this.modifyAddToTestCase(NewContract.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, NewContract.contractTerm.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, NewContract.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Start Date field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.contractStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.contractStartDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Contract Start Date field', async () => {
				await this.modifyAddToTestCase(NewContract.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.contractStartDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, NewContract.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Owner Expiration Notice  field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.ownerExpirationNotice.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.ownerExpirationNotice.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Owner Expiration Notice field', async () => {
				await this.modifyAddToTestCase(NewContract.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.ownerExpirationNotice.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, NewContract.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Special Terms field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.specialTerms.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.specialTerms.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Special Terms field', async () => {
				await this.modifyAddToTestCase(NewContract.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.specialTerms.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, NewContract.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Customer Signed By field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.customerSignedBy.xpath1);
				this.assertTestBuilderState(pageStructureInfo, NewContract.customerSignedBy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Customer Signed By field', async () => {
				await this.modifyAddToTestCase(NewContract.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.customerSignedBy.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, NewContract.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Owner field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.contractOwner.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.contractOwner.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Contract Owner field', async () => {
				await this.modifyAddToTestCase(NewContract.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.contractOwner.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Company Signed By field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.companySignedBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.companySignedBy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Company Signed By field', async () => {
				await this.modifyAddToTestCase(NewContract.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.companySignedBy.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Customer Signed Date field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.customerSignedDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.customerSignedDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
			});
			this.step('Add & Do Customer Signed Date field', async () => {
				await this.modifyAddToTestCase(NewContract.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.customerSignedDate.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Billing Street field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewContract.billingStreet.xpath);
				this.assertTestBuilderState(pageStructureInfo, NewContract.billingStreet.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Billing Street field', async () => {
				await this.modifyAddToTestCase(NewContract.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewContract.billingStreet.testCaseXML);
				this.assertExecutionStatus(testItemId, NewContract.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Cancel button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {disposition: 'Existing',text: 'Cancel (cancel)',}, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Cancel Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.cancelButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.cancelButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
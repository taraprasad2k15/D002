import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { ContractView } from './ContractView';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';

export class ContractViewSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [ContractView.contractViewPSI];
		this.zephyrTest('AutomationAPI', "PROT-1944", 'FS_MAP_SF_LX_CONTRACT_VIEW', () => {
			beforeAll(async done => {
				const tcName = 'Contract View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Contract Owner field for value Assertion', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, "//header[@role='banner']//div[normalize-space()='Contract']", 30*1000);
				await this.findElement(remoteWebdriver, ContractView.contractOwner.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractOwner.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractOwner.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Contract Owner field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.contractOwner.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Number field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractNumber.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Add & Do Contract Number field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.contractNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Account Name field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.accountName.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.accountName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
			});
			this.step('Add & Do Account Name field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.accountName.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Status field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.status.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.status.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Add & Do Status field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.status.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Special Terms field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.specialTerms.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.specialTerms.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
			});
			this.step('Add & Do Special Terms field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.specialTerms.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Customer Signed By field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.customerSignedBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.customerSignedBy.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
			});
			this.step('Add & Do Customer Signed By field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.customerSignedBy.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Shipping Address field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.shippingAddress.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.shippingAddress.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
			});
			this.step('Add & Do Shipping Address field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.shippingAddress.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Term field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractTerm.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractTerm.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Add & Do Contract Term field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.contractTerm.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Start Date field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractStartDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Contract Start Date field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.contractStartDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Activated By field for blank value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.activatedBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.activatedBy.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Add & Do Activated By field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.activatedBy.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Owner Expiration Notice  field for value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.ownerExpirationNotice.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.ownerExpirationNotice.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Add & Do Owner Expiration Notice field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.ownerExpirationNotice.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Company Signed Date field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.companySignedDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.companySignedDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Company Signed Date field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.companySignedDate.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.description.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.description.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Customer Signed Title for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.customerSignedTitle.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.customerSignedTitle.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Add & Do Customer Signed Title field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.customerSignedTitle.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "PROT-1945", 'FS_MAP_SF_LX_CONTRACT_ILE', () => {
			beforeAll(async done => {
				const tcName = 'Contract View.testcase';
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
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractStartDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Activate Inline Edit on Contract Start Date field', async () => {
				await this.modifyAddToTestCase(ContractView.contractStartDate.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.contractStartDate.testCaseXMLILE);
				this.assertExecutionStatus(testItemId, ContractView.contractStartDate.executionStatusILE, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Start Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractStartDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Contract Start Date field', async () => {
				await this.modifyAddToTestCase(ContractView.contractStartDate.setInteraction);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.contractStartDate.testCaseXMLSet);
				this.assertExecutionStatus(testItemId, ContractView.contractStartDate.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Owner Expiration Notice field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.ownerExpirationNotice.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.ownerExpirationNotice.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index on Owner Expiration Notice field', async () => {
				await this.modifyAddToTestCase(ContractView.ownerExpirationNotice.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.ownerExpirationNotice.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.ownerExpirationNotice.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Term field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractTerm.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractTerm.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Clear Interaction on Contract Term field', async () => {
				await this.modifyAddToTestCase(ContractView.contractTerm.modificationParameter.clear);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.contractTerm.testCaseXML1);
				this.assertExecutionStatus(testItemId, ContractView.contractTerm.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Term field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractTerm.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractTerm.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Contract Term field', async () => {
				await this.modifyAddToTestCase(ContractView.contractTerm.modificationParameter.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.contractTerm.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.contractTerm.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Status field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.status.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Status field', async () => {
				await this.modifyAddToTestCase(ContractView.status.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.status.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Customer Signed By field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.customerSignedBy.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.customerSignedBy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Customer Signed By field', async () => {
				await this.modifyAddToTestCase(ContractView.customerSignedBy.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.customerSignedBy.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.customerSignedBy.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.description.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Description field', async () => {
				await this.modifyAddToTestCase(ContractView.description.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.description.testCaseXML1);
				this.assertExecutionStatus(testItemId, ContractView.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Billing Country field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.billingCountry.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.billingCountry.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interation on Billing Country field', async () => {
				await this.modifyAddToTestCase(ContractView.billingCountry.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.billingCountry.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.billingCountry.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Company Signed By field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.companySignedBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.companySignedBy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing SF Lookup Interation on Company Signed By field', async () => {
				await this.modifyAddToTestCase(ContractView.companySignedBy.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ContractView.companySignedBy.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.companySignedBy.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the User field on Lookup Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.user.xpath);
				this.assertTestBuilderState([ContractView.userPSI], ContractView.user.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Performing Click Interaction on User field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdLookupOnscreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemIdLookupOnscreen, ContractView.user.testCaseXML);
				this.assertExecutionStatus(testItemIdLookupOnscreen, ContractView.user.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Start Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractStartDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Contract Start Date field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
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
				await this.assertTestCaseXML(testItemId, ContractView.contractStartDate.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Term field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractTerm.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractTerm.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label, Value and Message Assertion on Contract Term field', async () => {
				await this.modifyAddToTestCase(ContractView.contractTerm.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.contractTerm.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Owner Expiration Notice field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.ownerExpirationNotice.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.ownerExpirationNotice.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Owner Expiration Notice field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.ownerExpirationNotice.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Status field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.status.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Status field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.status.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Customer Signed By field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.customerSignedBy.xpath2);
				this.assertTestBuilderState(pageStructureInfo, ContractView.customerSignedBy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Customer Signed By field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.customerSignedBy.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.description.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Description field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.description.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Billing Country field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.billingCountry.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.billingCountry.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Billing Country field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.billingCountry.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Company Signed By field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.companySignedBy.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.companySignedBy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Company Signed By field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.companySignedBy.testCaseXMLILEAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Activated Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.activatedDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.activatedDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.readMode, response.testbuilderState);
			});
			this.step('Performing Label and Blank Value Assertion on Activated Date field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.activatedDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contract Number field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.contractNumber.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.contractNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Performing Label and Blank Value Assertion on Contract Number field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.contractNumber.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Shipping Street field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.shippingStreet.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.shippingStreet.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Performing Label and Blank Value Assertion on Shipping Street field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.shippingStreet.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Customer Signed Title field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.customerSignedTitle.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.customerSignedTitle.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Performing Label and Blank Value Assertion on Customer Signed Title field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.customerSignedTitle.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Company Signed Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.companySignedDate.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ContractView.companySignedDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Performing Label and Blank Value Assertion on Company Signed Date field', async () => {
				await this.modifyAddToTestCase(ContractView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.companySignedDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Page Errors on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.pageError.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.pageError.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Assertion on Page Errors', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.pageError.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel Button on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ContractView.cancel.xpath);
				this.assertTestBuilderState(pageStructureInfo, ContractView.cancel.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Assertion on Cancel Button', async () => {
				await this.modifyAddToTestCase(ContractView.cancel.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ContractView.cancel.testCaseXML);
				this.assertExecutionStatus(testItemId, ContractView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
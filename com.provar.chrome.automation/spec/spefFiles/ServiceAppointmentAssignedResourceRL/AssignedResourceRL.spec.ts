import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { AssignedResourceRL } from './AssignedResourceRL';

export class AssignedResourceRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [AssignedResourceRL.serviceAppointmentViewPSI];
		const pageStructureInfoAR: any[] = [AssignedResourceRL.assignedResourceNewPSI];
		this.zephyrTest('AutomationAPI', "PROT-1959", 'FS_MAP_SF_FSL_SA_RL.AssignedResource', () => {
			beforeAll(async done => {
				const tcName = 'Service Appointment.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the New Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const element: WebElement =await this.findElement(remoteWebdriver, "//span[(contains(@class,'title')) and (normalize-space()='Related')]", 20 * 1000);
				element.click();
				await this.findElement(remoteWebdriver,AssignedResourceRL.newButton.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.newButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, AssignedResourceRL.newButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Resource field on Assigned Resource New Screen', async () => {
				await this.findElement(remoteWebdriver,AssignedResourceRL.serviceResource.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.serviceResource.xpath);
				this.assertTestBuilderState(pageStructureInfoAR, AssignedResourceRL.serviceResource.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Service Resource field', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.serviceResource.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", AssignedResourceRL.serviceResource.testCaseXML);
				this.assertExecutionStatus("0", AssignedResourceRL.serviceResource.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoAR, {disposition: 'Existing',text: 'Save (save)',}, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for RL to get loaded', async done => {
				expect(true).toEqual(true);
					setTimeout(async () => {
			 		done();
				 	}, 3*1000);
				 });
			this.step('Mapping Service Resource field of Assigned Resource RL', async () => {
				await this.findElement(remoteWebdriver,AssignedResourceRL.serviceResource.xpath1,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.serviceResource.xpath1);
				this.assertTestBuilderState(pageStructureInfo,AssignedResourceRL.serviceResource.fieldDetails1, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,AssignedResourceRL.rowLocators);
			});
			this.step('Performing value assertion on Service Resource field', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.interactionParametersValueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);		
				await this.assertTestCaseXML("0", AssignedResourceRL.serviceResource.testCaseXMLAssert);
				this.assertExecutionStatus("0", AssignedResourceRL.serviceResource.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Assigned Resource Number field of Assigned Resource RL', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.assignedResourceNumber.xpath);
				this.assertTestBuilderState(pageStructureInfo,AssignedResourceRL.assignedResourceNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,AssignedResourceRL.rowLocators);
			});
			this.step('Performing click interaction on Service Resource Number field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.assignedResourceNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.assignedResourceNumber.executionStatus, response.runExecutionStatus.currentTestCase);
				remoteWebdriver.navigate().back();
			});
			it('Waiting for page to get loaded', async done => {
				expect(true).toEqual(true);
					setTimeout(async () => {
			 		done();
				 	}, 3*1000);
				 });
			this.step('Mapping Estimated Travel Time field of Assigned Resource RL', async () => {
				this.findElement(remoteWebdriver,AssignedResourceRL.estimatedTravelTime.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.estimatedTravelTime.xpath);
				this.assertTestBuilderState(pageStructureInfo,AssignedResourceRL.estimatedTravelTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,AssignedResourceRL.rowLocators);
			});
			this.step('Performing value assertion on Estimated Travel Time field', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.interactionParametersValueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.estimatedTravelTime.testCaseXML);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Approximate Travel Time field of Assigned Resource RL', async () => {
				this.findElement(remoteWebdriver,AssignedResourceRL.approximateTravelTime.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.approximateTravelTime.xpath);
				this.assertTestBuilderState(pageStructureInfo,AssignedResourceRL.approximateTravelTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, AssignedResourceRL.rowLocators);
			});
			this.step('Performing value assertion on Approximate Travel Time field', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.interactionParametersValueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.approximateTravelTime.testCaseXML);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Action button of Assigned Resource RL', async () => {
				const element : WebElement = await this.findElement(remoteWebdriver,"//span[contains(@title,'Assigned Resources')]/ancestor::article//span[normalize-space()='Show Actions']/ancestor::lightning-icon",20*1000);
				element.click();
				await this.findElement(remoteWebdriver,"//a[contains(@title,'Edit') and contains(@role,'menuitem')]",20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//a[contains(@title,'Edit') and contains(@role,'menuitem')]");
				this.assertTestBuilderState(pageStructureInfo, AssignedResourceRL.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, AssignedResourceRL.rowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.interactionParametersValueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.editButton.testCaseXML);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Action button of Assigned Resource RL', async () => {
				await this.findElement(remoteWebdriver,"//a[contains(@title,'Delete') and contains(@role,'menuitem')]",20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//a[contains(@title,'Delete') and contains(@role,'menuitem')]");
				this.assertTestBuilderState(pageStructureInfo, AssignedResourceRL.deleteActionButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, AssignedResourceRL.rowLocators);
			});
			this.step('Performing Click and Cancel on Delete Button', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.deleteActionButton.clickAndCancel);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.deleteActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.deleteActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Resource field of Assigned Resource RL', async () => {
				await this.findElement(remoteWebdriver,AssignedResourceRL.serviceResource.xpath1,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.serviceResource.xpath1);
				this.assertTestBuilderState(pageStructureInfo,AssignedResourceRL.serviceResource.fieldDetails1, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Performing column assertion on Service Resource field', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.serviceResource.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');	
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId1);	
				await this.assertTestCaseXML(testItemId1, AssignedResourceRL.serviceResource.testCaseXMLColumnAssert);
				this.assertExecutionStatus(testItemId1, AssignedResourceRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Assigned Resource Number field of Assigned Resource RL', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.assignedResourceNumber.xpath);
				this.assertTestBuilderState(pageStructureInfo,AssignedResourceRL.assignedResourceNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Performing column assertion on Assigned Resource Number field', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.assignedResourceNumber.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.assignedResourceNumber.testCaseXML1);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Estimated Travel Time field of Assigned Resource RL', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.estimatedTravelTime.xpath);
				this.assertTestBuilderState(pageStructureInfo,AssignedResourceRL.estimatedTravelTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Performing column assertion on Estimated Travel Time field', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.estimatedTravelTime.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.estimatedTravelTime.testCaseXML1);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Approximate Travel Time field of Assigned Resource RL', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.approximateTravelTime.xpath);
				this.assertTestBuilderState(pageStructureInfo,AssignedResourceRL.approximateTravelTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Performing value assertion on Approximate Travel Time field', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.approximateTravelTime.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.approximateTravelTime.testCaseXML1);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading of Assigned Resource RL', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.heading.xpath);
				this.assertTestBuilderState(pageStructureInfo,AssignedResourceRL.heading.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Performing row count assertion', async () => {
				await this.modifyAddToTestCase(AssignedResourceRL.heading.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.heading.testCaseXML);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All link of Assigned Resource RL', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AssignedResourceRL.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfo,AssignedResourceRL.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Performing click on View All link', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, AssignedResourceRL.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, AssignedResourceRL.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfFlexiActionsRecommendation } from './SfFlexiActionsRecommendation';
import { join } from 'path';

export class SfFlexiActionsRecommendationSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [SfFlexiActionsRecommendation.ActionPSI];
		let pageStructureInfoQA: any[] = [SfFlexiActionsRecommendation.EventPSI];
		let pageStructureInfoLookup: any[] = [SfFlexiActionsRecommendation.contactLookupPSI];
		let pageStructureInfoQANC: any[] = [SfFlexiActionsRecommendation.NewCaseViewPSI];
		let rowLocatorLaC = [
			{
				"label": "Flow (openActionButton)",
				"selected": true,
				"value": "Log a Call"
			},
		];
		let rowLocatorNeV = [
			{
				"label": "Flow (openActionButton)",
				"selected": true,
				"value": "New Event"
			},
		];
		this.zephyrTest('AutomationAPI', 'PROT-1480', 'FS_MAP_SF_RP_HR_Action&Recommendation.RA', () => {
			beforeAll(async done => {
				const tcName = 'FlexiAction&Recommendation.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Add button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const button: WebElement = await this.findElement(remoteWebdriver, "//div[@class='slds-tabs_default__content slds-show']/button[(.)='Add']", 20 * 1000);
				console.log(button);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.addButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.addButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Assert Add button', async () => {
				await this.modifyAddToTestCase(SfFlexiActionsRecommendation.addButton);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfFlexiActionsRecommendation.addButton.testCaseXMLAssert);
				this.assertExecutionStatus("0", SfFlexiActionsRecommendation.addButton.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Log a Call field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const button: WebElement = await this.findElement(remoteWebdriver, SfFlexiActionsRecommendation.logAcall.Xpath, 20 * 1000);
				console.log(button);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.logAcall.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.logAcall.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocatorLaC);
			});
			this.step('Assert Log a Call field', async () => {
				await this.modifyAddToTestCase(SfFlexiActionsRecommendation.logAcall);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.logAcall.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.logAcall.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping New Event field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const button: WebElement = await this.findElement(remoteWebdriver, SfFlexiActionsRecommendation.newEvent.Xpath, 20 * 1000);
				console.log(button);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.newEvent.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.newEvent.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocatorNeV);
			});
			this.step('Assert New Event field', async () => {
				await this.modifyAddToTestCase(SfFlexiActionsRecommendation.newEvent);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.newEvent.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.newEvent.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1477', 'FS_MAP_SF_RP_HR_Action&Recommendation.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping New Event field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.newEvent.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.newEvent.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocatorNeV);
			});
			this.step('Add & Do New Event field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.newEvent.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.newEvent.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1063', 'FS_MAP_SF_QA_AF_LX_NEW EVENT.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Subject field', async () => {
				const subject: WebElement = await this.findElement(remoteWebdriver, SfFlexiActionsRecommendation.subject.Xpath, 20000);
				console.log(subject);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfFlexiActionsRecommendation.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field to Email', async () => {
				await this.modifyAddToTestCase(SfFlexiActionsRecommendation.subject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML('0', SfFlexiActionsRecommendation.subject.testCaseXML);
				this.assertExecutionStatus('0', SfFlexiActionsRecommendation.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.description.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfFlexiActionsRecommendation.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Set the Description field', async () => {
				await this.modifyAddToTestCase(SfFlexiActionsRecommendation.description.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.description.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Start Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.startDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfFlexiActionsRecommendation.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Set the Start Date field', async () => {
				await this.modifyAddToTestCase(SfFlexiActionsRecommendation.startDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.startDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.startDate.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the End Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.endDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfFlexiActionsRecommendation.endDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Set the End Date field', async () => {
				await this.modifyAddToTestCase(SfFlexiActionsRecommendation.endDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.endDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.endDate.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name Lookup field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.contactName.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfFlexiActionsRecommendation.contactName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
			});
			this.step('SF Lookup the Name Lookup field', async () => {
				await this.modifyAddToTestCase(SfFlexiActionsRecommendation.contactName.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.contactName.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.contactName.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contact Name', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.contactID.Xpath);
				const rowLocators = [
					{
						"label": "Name (Name)",
						"selected": true,
						"value": /.*/,
					},
					{
						"label": "Account Name (ACCOUNT_NAME)",
						"selected": false,
						"value": "",
					},
					{
						"label": "Phone (CONTACT_PHONE1)",
						"selected": false,
					},
					{
						"label": "Email (CONTACT_EMAIL)",
						"selected": false,
						"value": /.*/,
					},
					{
						"label": "Contact Owner Alias (CORE_USERS_ALIAS)",
						"selected": false,
						"value": /.*/,
					}
				];
				this.assertTestBuilderState(pageStructureInfoLookup, SfFlexiActionsRecommendation.contactID.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Click the Contact Name', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.contactID.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.contactID.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Related To field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.relatedTo.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfFlexiActionsRecommendation.relatedTo.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Related To field', async () => {
				await this.modifyAddToTestCase(SfFlexiActionsRecommendation.relatedTo.interactionParameters.readAssert);
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
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.relatedTo.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.relatedTo.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfFlexiActionsRecommendation.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1083', 'FS_MAP_SF_QA_B_LX_NEW CASE.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Add button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.addButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.addButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Add button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfFlexiActionsRecommendation.addButton.testCaseXML);
				this.assertExecutionStatus("0", SfFlexiActionsRecommendation.addButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click the New Case button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const newCase: WebElement = await this.findElement(remoteWebdriver, SfFlexiActionsRecommendation.newCase.Xpath, 20000);
				newCase.click();
				const status: WebElement = await this.findElement(remoteWebdriver, SfFlexiActionsRecommendation.status.Xpath, 20000);
				console.log(status);
			});
			this.step('Mapping the Status picklist', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.status.Xpath);
				this.assertTestBuilderState(pageStructureInfoQANC, SfFlexiActionsRecommendation.statusField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Set the Status picklist to Closed', async () => {
				await this.modifyAddToTestCase(SfFlexiActionsRecommendation.status.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfFlexiActionsRecommendation.status.testCaseXML);
				this.assertExecutionStatus("0", SfFlexiActionsRecommendation.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.saveButton.XpathQA);
				this.assertTestBuilderState(pageStructureInfoQANC, SfFlexiActionsRecommendation.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1478', 'FS_MAP_SF_RP_HR_Action&Recommendation.ViewAction', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			it('Wait for page to redirect to view screen', async done => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4000);
			});
			this.step('Mapping the View Action button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const viewAction: WebElement = await this.findElement(remoteWebdriver, "//button//span[contains((.),'Log a Call')]/../../following-sibling::div//button", 20000);
				await viewAction.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.viewAction.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.viewAction.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocatorLaC);
			});
			this.step('Click the View Action Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML('0', SfFlexiActionsRecommendation.viewAction.testCaseXML);
				this.assertExecutionStatus('0', SfFlexiActionsRecommendation.viewAction.executionStatus, response.runExecutionStatus.currentTestCase);
				const cancel: WebElement = await this.findElement(remoteWebdriver, SfFlexiActionsRecommendation.cancelButton.Xpath, 50000);
				await cancel.click();
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1479', 'FS_MAP_SF_RP_HR_Action&Recommendation.REMOVE', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Remove button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const removeAction: WebElement = await this.findElement(remoteWebdriver, SfFlexiActionsRecommendation.remove.XpathDrop, 20000);
				await removeAction.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.remove.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.remove.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocatorLaC);
			});
			this.step('Click the Remove Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.Cancel);
				const removeAction: WebElement = await this.findElement(remoteWebdriver, SfFlexiActionsRecommendation.remove.XpathDrop, 20000);
				await remoteWebdriver.executeScript('arguments[0].click();', removeAction);
				const remove: WebElement = await this.findElement(remoteWebdriver, SfFlexiActionsRecommendation.remove.Xpath, 20000);
				await remoteWebdriver.executeScript('arguments[0].click();', remove);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2250', 'FS_MAP_SF_RP_HR_Action&Recommendation.History', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			const historyrow = [
				{
					"label": "Action State (actionHistoryState)",
					"selected": true,
					"value": /.*/
				},
				{
					"label": "Action Logged Time (actionHistoryLoggedTime)",
					"selected": false,
					"value": /.*/
				},
				{
					"label": "Action Label (actionHistoryDefinitionLabel)",
					"selected": false,
					"value": /.*/
				},
				{
					"label": "Action User (actionHistoryUser)",
					"selected": false,
					"value": /.*/
				}
			]
			const assertParams = {
				interactionParameters: {
					id: "Read/Assert",
					settings: {
						extractValue: true,
						assertValue: true
					}
				}
			}
			this.step('Mapping the actionHistoryState button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				await remoteWebdriver.navigate().refresh();
				const historyTab: WebElement = await this.findElement(remoteWebdriver, "//*[(.)='History' and @role='tab']", 20000);
				await remoteWebdriver.executeScript("arguments[0].click();", historyTab);
				await this.findElement(remoteWebdriver, SfFlexiActionsRecommendation.actionHistoryState.Xpath, 20000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.actionHistoryState.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.actionHistoryState.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState, historyrow);
			});
			this.step('Click the actionHistoryState Button', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.actionHistoryState.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.actionHistoryState.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the actionHistoryLoggedTime button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.actionHistoryLoggedTime.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.actionHistoryLoggedTime.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState, historyrow);
			});
			this.step('Click the actionHistoryLoggedTime Button', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.actionHistoryLoggedTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.actionHistoryLoggedTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the actionHistoryDefinitionLabel button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.actionHistoryDefinitionLabel.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.actionHistoryDefinitionLabel.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState, historyrow);
			});
			this.step('Click the actionHistoryDefinitionLabel Button', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.actionHistoryDefinitionLabel.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.actionHistoryDefinitionLabel.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the actionHistoryUser button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiActionsRecommendation.actionHistoryUser.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfFlexiActionsRecommendation.actionHistoryUser.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState, historyrow);
			});
			this.step('Click the actionHistoryUser Button', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfFlexiActionsRecommendation.actionHistoryUser.testCaseXML);
				this.assertExecutionStatus(testItemId, SfFlexiActionsRecommendation.actionHistoryUser.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
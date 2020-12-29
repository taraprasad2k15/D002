import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCaseOpenActivitiesRL } from './SfCaseOpenActivitiesRL';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfCaseOpenActivitiesRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [Case.caseViewPsi];
		let pageStructureInfoTask: any[] = [SfCaseOpenActivitiesRL.NewTaskViewPSI];
		let pageStructureInfoEvent: any[] = [SfCaseOpenActivitiesRL.NewEventViewPSI];
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
			"successfulCount": 1,
		}];
		const rowLocatorsTask: any[] = [
			{
				"label": "Subject (TASK_SUBJECT)",
				"selected": true,
				"value": 'Call'
			},
			{
				"label": "Name (TASK_WHO_NAME)",
				"selected": false,
				"value": /AutomationContact.*/
			},
			{
				"label": "Task (ACTIVITY_TASK)",
				"selected": false,
				"value": 'true',
			},
			{
				"label": "Due Date (TASK_DUE_DATE)",
				"selected": false,
				"value": "30/11/2019"
			}
		];
		const rowLocatorsEvent: any[] = [
			{
				"label": "Subject (TASK_SUBJECT)",
				"selected": true,
				"value": 'Meeting'
			},
			{
				"label": "Name (TASK_WHO_NAME)",
				"selected": false,
				"value": /AutomationContact*/
			},
			{
				"label": "Task (ACTIVITY_TASK)",
				"selected": false,
				"value": 'false',
			},
			{
				"label": "Due Date (TASK_DUE_DATE)",
				"selected": false,
				"value": "07/05/2020"
			}
		];
		const rowLocators: any[] = [
			{
				"label": "Name (Name)",
				"selected": true,
				"value": /AutomationContact.*/,
			},
			{
				"label": "Account Name (ACCOUNT_NAME)",
				"selected": false,
				"value": /.*/,
			},
			{
				"label": "Phone (CONTACT_PHONE1)",
				"selected": false,
				"value": "9990000999",
			},
			{
				"label": "Email (CONTACT_EMAIL)",
				"selected": false,
				"value": /automation.*@contact.com/,
			},
			{
				"label": "Contact Owner Alias (CORE_USERS_ALIAS)",
				"selected": false,
				"value": /.*/,
			},
		];

		this.zephyrTest('AutomationAPI', 'PROT-1565', 'FS_MAP_SF_RL_LX_ACTION BUTTONS.NEWTASK', () => {
			beforeAll(async done => {
				const tcName = 'Case View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping New Task Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const relatedTabWE: WebElement = await this.findElement(remoteWebdriver, "//a/span[(.)='Related'] | //a[(.)='Related']", 10 * 1000);
				await relatedTabWE.click()
				const newButtonWE: WebElement = await this.findElement(remoteWebdriver, SfCaseOpenActivitiesRL.newTaskButton.Xpath, 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.newTaskButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCaseOpenActivitiesRL.newTaskButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.newTaskButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.newTaskButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4000);
			});
			this.step('Mapping the Subject field', async () => {
				const subjectField: WebElement = await this.findElement(remoteWebdriver, SfCaseOpenActivitiesRL.taskSubject.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.taskSubject.Xpath);
				this.assertTestBuilderState(pageStructureInfoTask, SfCaseOpenActivitiesRL.taskSubject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.taskSubject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML('0', SfCaseOpenActivitiesRL.taskSubject.testCaseXML);
				this.assertExecutionStatus('0', SfCaseOpenActivitiesRL.taskSubject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Due Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.taskDueDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoTask, SfCaseOpenActivitiesRL.taskDueDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Set the Due Date field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.taskDueDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.taskDueDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.taskDueDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Assigned To field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.taskAssignedTo.Xpath);
				this.assertTestBuilderState(pageStructureInfoTask, SfCaseOpenActivitiesRL.taskAssignedTo.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Assigned To field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.taskAssignedTo.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.taskAssignedTo.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.taskAssignedTo.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Comments field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.taskComments.Xpath);
				this.assertTestBuilderState(pageStructureInfoTask, SfCaseOpenActivitiesRL.taskComments.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the Comments field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.taskComments.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.taskComments.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.taskComments.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.taskName.xpath);
				this.assertTestBuilderState(pageStructureInfoTask, SfCaseOpenActivitiesRL.taskName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
			});
			this.step('SF lookup Contact field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.taskName.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.taskName.testCaseXML.lookup);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.taskName.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contact Name', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.conName.contactLookup);
				this.assertTestBuilderState([SfCaseOpenActivitiesRL.contactLookupPSI], SfCaseOpenActivitiesRL.conName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Click the Contact Name', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.conName.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.conName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Status field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.taskStatus.Xpath);
				this.assertTestBuilderState(pageStructureInfoTask, SfCaseOpenActivitiesRL.taskStatus.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Status field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.taskStatus.interactionParameters.set);
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
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.taskStatus.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.taskStatus.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});

			this.step('Mapping the Priority field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.taskPriority.Xpath);
				this.assertTestBuilderState(pageStructureInfoTask, SfCaseOpenActivitiesRL.taskPriority.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Set By Index on Priority field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.taskPriority.interactionParameters.setbyIndex);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.taskPriority.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.taskPriority.executionStatus.setByIndex, response.runExecutionStatus.currentTestCase);
			});

			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoTask, SfCaseOpenActivitiesRL.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for Related List to get updated', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10*1000);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1566', 'FS_MAP_SF_RL_LX_ACTION BUTTONS.NEWEVENT', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping New Event Button', async () => {
				await this.findElement(remoteWebdriver, "//a/span[(.)='Open Activities']/../../../../../following-sibling::div//tbody/tr[1]/td/span/img", 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.newEventButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCaseOpenActivitiesRL.newEventButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseOpenActivitiesRL.newEventButton.testCaseXML);
				this.assertExecutionStatus("0", SfCaseOpenActivitiesRL.newEventButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4000);
			});
			this.step('Mapping the Event_Subject field', async () => {
				const subjectField: WebElement = await this.findElement(remoteWebdriver, SfCaseOpenActivitiesRL.eventSubject.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.eventSubject.Xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.eventSubject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do the Event_Subject field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.eventSubject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML('0', SfCaseOpenActivitiesRL.eventSubject.testCaseXML);
				this.assertExecutionStatus('0', SfCaseOpenActivitiesRL.eventSubject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Event_Assigned To field', async () => {
				const deleteIcon: WebElement = await this.findElement(remoteWebdriver, "//span[normalize-space(.)='Assigned To']/../following-sibling::div//span[contains(@class, 'deleteIcon')]", 15000);
				deleteIcon.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.eventAssignedTo.xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.eventAssignedTo.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Event_Assigned To field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.eventAssignedTo.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.eventAssignedTo.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.eventAssignedTo.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Event_Related To field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.eventRelatedTo.xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.eventRelatedTo.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Event_Related To field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.eventRelatedTo.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.eventRelatedTo.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.eventRelatedTo.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Event_Start Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.eventStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.eventStartDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Event_Start Date To field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.eventStartDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.eventStartDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.eventStartDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Event_End Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.eventEndDate.xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.eventEndDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Event_End Date To field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.eventEndDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.eventEndDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.eventEndDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping All-Day Event field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.allDayEventCheckbox.xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.allDayEventCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do All-Day Event field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.allDayEventCheckbox.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.allDayEventCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Event_Description  field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.eventDescription.xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.eventDescription.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Event_Description field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.eventDescription.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.eventDescription.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.eventDescription.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Event_Location field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.eventLocation.xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.eventLocation.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Event_Location field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.eventLocation.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.eventLocation.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.eventLocation.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Event_Show Time As field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.eventShowTimeAs.xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.eventShowTimeAs.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Time.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Event_Show Time As field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.eventShowTimeAs.interactionParameters.setbyIndex);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.eventShowTimeAs.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.eventShowTimeAs.executionStatus.setByIndex, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Event_Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.eventName.xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.eventName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
			});
			this.step('SF lookup Contact field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.eventName.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.eventName.testCaseXML.lookup);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.eventName.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contact Name', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.conName.contactLookup);
				this.assertTestBuilderState([SfCaseOpenActivitiesRL.contactLookupPSI], SfCaseOpenActivitiesRL.conName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Click the Contact Name', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.conName.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.conName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoEvent, SfCaseOpenActivitiesRL.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
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
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.saveButton.testCaseXMLEvent);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for Related List to get updated', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10*1000);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1567', 'FS_MAP_SF_RL_LX_REFERENCE FIELDS.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject Field from Related List', async () => {
				await this.findElement(remoteWebdriver, SfCaseOpenActivitiesRL.caseRLSubject.xpath, 15 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.caseRLSubject.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCaseOpenActivitiesRL.caseRLSubject.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorsTask);
			});
			this.step('Add & Do Subject Field', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.caseRLSubject.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseOpenActivitiesRL.caseRLSubject.testCaseXML);
				this.assertExecutionStatus("0", SfCaseOpenActivitiesRL.caseRLSubject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name field from Related List', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.caseRLName.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCaseOpenActivitiesRL.caseRLName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorsTask);
			});
			this.step('Add & Do Name Field from Related List', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.caseRLName.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.caseRLName.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.caseRLName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1568', 'FS_MAP_SF_RL_LX_CHECKBOX.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Task checkbox from Related List', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.caseRLTask.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCaseOpenActivitiesRL.caseRLTask.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorsTask);
			});
			this.step('Add & Do Task checkbox from Related List', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.caseRLTask.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				 const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.caseRLTask.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.caseRLTask.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		 });
		this.zephyrTest('AutomationAPI', 'PROT-1569', 'FS_MAP_SF_RL_LX_TEXT_FIELDS.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Due Date from Related List', async () => {
			const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.caseRLDueDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCaseOpenActivitiesRL.caseRLDueDate.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorsTask);
			});
			this.step('Add & Do Due Date from Related List', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.caseRLDueDate.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.caseRLDueDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.caseRLDueDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1570', 'FS_MAP_SF_RL_LX_ROW DROPDOWN.EDIT', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Edit Button', async () => {
				const showmoreactionWE: WebElement = await this.findElement(remoteWebdriver, "(//span[@title='Open Activities']/../../../../../following-sibling::div//a[@role='button'])[1]",10*1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", showmoreactionWE);
        		await remoteWebdriver.executeScript("arguments[0].click();", showmoreactionWE);
				await this.findElement(remoteWebdriver, SfCaseOpenActivitiesRL.editButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.editButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCaseOpenActivitiesRL.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocatorsTask);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.editButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath2, 15000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath2);
				this.assertTestBuilderState([SfCaseOpenActivitiesRL.EditPsi], SfCaseOpenActivitiesRL.cancelButtonOnEdit.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Cancel button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValueswithrow: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValueswithrow, testItemIdwithrow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseOpenActivitiesRL.cancelButtonOnEdit.testCaseXML);
				this.assertExecutionStatus("0", SfCaseOpenActivitiesRL.cancelButtonOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1571', 'FS_MAP_SF_RL_LX_ROW DROPDOWN.DEL', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Delete Button', async () => {
				const showmoreactionWE: WebElement = await this.findElement(remoteWebdriver, "(//span[@title='Open Activities']/../../../../../following-sibling::div//a[@role='button'])[1]",10*1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", showmoreactionWE);
        await remoteWebdriver.executeScript("arguments[0].click();", showmoreactionWE);
				await this.findElement(remoteWebdriver, SfCaseOpenActivitiesRL.deleteButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.deleteButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCaseOpenActivitiesRL.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocatorsTask);
			});
			this.step('Add & Do Delete Button', async () => { 
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.deleteButton.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseOpenActivitiesRL.deleteButton.testCaseXML);
				this.assertExecutionStatus("0", SfCaseOpenActivitiesRL.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1572', 'FS_MAP_SF_RL_LX_HEADING HYPERLINKS.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping RL Heading', async () => {
				await this.findElement(remoteWebdriver, "//span[@title='Open Activities']");
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//span[@title='Open Activities']");
				this.assertTestBuilderState(pageStructureInfo, {disposition:"Existing", text:"Open Activities (OpenActivities)"}, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do RL Heading', async () => { 
				const assertRowcount = {
					interactionParameters: {
						id: 'Read/Assert',
						settings: {
							assertTableAttributes: true,
							extractTableAttributes: true,
							expectedAttributes: {
								displayRowCount: {
									value: 1,
								},
								totalRowCount: {
									value: 1,
								},
							},
						}
					},	
				};
				await this.modifyAddToTestCase(assertRowcount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValueswithrow: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValueswithrow, testItemIdwithrow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-ExecutingPaused',
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.rowcountAssertionXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1573', 'FS_MAP_SF_RL_LX_COLUMN_ASSERTION', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject Field ', async () => {
				await this.findElement(remoteWebdriver,SfCaseOpenActivitiesRL.caseRLSubject.xpath, 15 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.caseRLSubject.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCaseOpenActivitiesRL.caseRLSubject.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorsTask);
				});
			this.step('Add & Do Subject Field ', async () => {
				await this.modifyAddToTestCase(SfCaseOpenActivitiesRL.caseRLSubject.assertColumnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.caseRLSubject.assertColumntestcaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1574', 'FS_MAP_SF_RL_LX_ROW.VIEWALLBUTTON.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			// afterAll(async done => {
			// 	await this.endTestSession(done);
			// });
			this.step('Mapping ViewAll button', async () => {
				await this.findElement(remoteWebdriver, SfCaseOpenActivitiesRL.viewAllButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseOpenActivitiesRL.viewAllButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCaseOpenActivitiesRL.viewAllButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
		this.step('Add & Do ViewAll button', async () => {
			const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
			await this.assertTestCaseXML(testItemId, SfCaseOpenActivitiesRL.viewAllButton.testCaseXML);
			this.assertExecutionStatus(testItemId, SfCaseOpenActivitiesRL.viewAllButton.executionStatus, response.runExecutionStatus.currentTestCase);
		});
		}); 
	}
}

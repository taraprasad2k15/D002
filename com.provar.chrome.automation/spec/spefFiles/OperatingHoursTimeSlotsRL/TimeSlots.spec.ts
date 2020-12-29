import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { TimeSlotsData } from './TimeSlots';

export class TimeSlotsSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoOH: any[] = [TimeSlotsData.operatingHoursViewPSI];
		const pageStructureInfoNewTS: any[] = [TimeSlotsData.timeSlotsNewPSI];
		this.zephyrTest('AutomationAPI', "PROT-2044", 'FS_MAP_SF_FSL_OH_RL.TimeSlots', () => {
			beforeAll(async done => {
				const tcName = 'Time Slots.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the New Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const relatedTabWE: WebElement = await this.findElement(remoteWebdriver, "//a[@class='tabHeader']//span[text()='Related']", 20 * 1000);
				await relatedTabWE.click();
				await this.findElement(remoteWebdriver, TimeSlotsData.newButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.newButton.xpath);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.newButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode1, response.testbuilderState);
			});
			this.step('Add & Do New field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, TimeSlotsData.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, TimeSlotsData.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Day Of Week Field from TimeSlot New Screen', async () => {
				await this.findElement(remoteWebdriver, TimeSlotsData.dayOfWeek.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.dayOfWeek.xpath);
				this.assertTestBuilderState(pageStructureInfoNewTS, TimeSlotsData.dayOfWeek.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Day Of Week Field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.dayOfWeek.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", TimeSlotsData.dayOfWeek.testCaseXML);
				this.assertExecutionStatus("0", TimeSlotsData.dayOfWeek.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type field from TimeSlot New Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.type.xpath);
				this.assertTestBuilderState(pageStructureInfoNewTS, TimeSlotsData.type.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index Interaction on Type field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.type.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, TimeSlotsData.type.testCaseXML);
				this.assertExecutionStatus(testItemId, TimeSlotsData.type.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Time field from TimeSlot New Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.startTime.xpath);
				this.assertTestBuilderState(pageStructureInfoNewTS, TimeSlotsData.startTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Time.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Start Time field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.startTime.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, TimeSlotsData.startTime.testCaseXML);
				this.assertExecutionStatus(testItemId, TimeSlotsData.startTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping End Time field from TimeSlot New Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.endTime.xpath);
				this.assertTestBuilderState(pageStructureInfoNewTS, TimeSlotsData.endTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Time.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index Interaction on End Time field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.endTime.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, TimeSlotsData.endTime.testCaseXML);
				this.assertExecutionStatus(testItemId, TimeSlotsData.endTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoNewTS, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Day Of Week Field', async () => {
				await this.findElement(remoteWebdriver, TimeSlotsData.dayOfWeek.xpathRL, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.dayOfWeek.xpathRL);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.dayOfWeek.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Value Assertion on Day Of Week Field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", TimeSlotsData.dayOfWeek.testCaseXMLRL1);
				this.assertExecutionStatus("0", TimeSlotsData.dayOfWeek.executionStatusRL1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.startTime.xpathRL);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.startTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Value Assertion on Start Time field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, TimeSlotsData.startTime.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, TimeSlotsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping End Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.endTime.xpathRL);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.endTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Value Assertion on End Time field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, TimeSlotsData.endTime.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, TimeSlotsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.type.xpathRL);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.type.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Value Assertion on Type field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, TimeSlotsData.type.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, TimeSlotsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				const element : WebElement = await this.findElement(remoteWebdriver,"//td[4]//lightning-icon",20*1000);
				element.click();
				await this.findElement(remoteWebdriver,TimeSlotsData.editButton.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.editButton.xpath);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, TimeSlotsData.editButton.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, TimeSlotsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Click and Cancel Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.deleteButton.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, TimeSlotsData.deleteButton.testCaseXML);
				this.assertExecutionStatus(testItemId, TimeSlotsData.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
				const element : WebElement = await this.findElement(remoteWebdriver,"//td[4]//a",20*1000);
				element.click();
			});
			it('Waiting for Related List Records', async done => {
				expect(true).toEqual(true);
					setTimeout(async () => {
			 		done();
				 	}, 3*1000);
				 });
			this.step('Mapping Clone Button', async () => {
				await this.findElement(remoteWebdriver,TimeSlotsData.cloneButton.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.cloneButton.xpath);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.cloneButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Click Interaction on Clone Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, TimeSlotsData.cloneButton.testCaseXML);
				this.assertExecutionStatus(testItemId, TimeSlotsData.cloneButton.executionStatus, response.runExecutionStatus.currentTestCase);
				const element: WebElement=await this.findElement(remoteWebdriver,"//span[text()='Cancel']",20*1000);
				element.click();
			});
			this.step('Mapping Day Of Week Field', async () => {
				await this.findElement(remoteWebdriver, TimeSlotsData.dayOfWeek.xpathRL, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.dayOfWeek.xpathRL);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.dayOfWeek.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Column Assertion on Day Of Week Field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.dayOfWeek.columnAssertion);
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
				await this.assertTestCaseXML(testItemId1, TimeSlotsData.dayOfWeek.testCaseXMLRL2);
				this.assertExecutionStatus(testItemId1, TimeSlotsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.startTime.xpathRL);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.startTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Column Assertion on Start Time field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.startTime.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, TimeSlotsData.startTime.testCaseXMLRL2);
				this.assertExecutionStatus(testItemId, TimeSlotsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping End Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.endTime.xpathRL);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.endTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Column Assertion on End Time field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.endTime.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, TimeSlotsData.endTime.testCaseXMLRL2);
				this.assertExecutionStatus(testItemId, TimeSlotsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.type.xpathRL);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.type.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,TimeSlotsData.rowLocators);
			});
			this.step('Performing Column Assertion on Type field', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.type.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, TimeSlotsData.type.testCaseXMLRL2);
				this.assertExecutionStatus(testItemId, TimeSlotsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.heading.xpath);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.heading.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Row Count Assertion', async () => {
				await this.modifyAddToTestCase(TimeSlotsData.heading.interactionParametersRowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, TimeSlotsData.heading.testCaseXML);
				this.assertExecutionStatus(testItemId, TimeSlotsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All Link', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(TimeSlotsData.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfoOH, TimeSlotsData.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click Interaction on View All Link', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, TimeSlotsData.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, TimeSlotsData.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
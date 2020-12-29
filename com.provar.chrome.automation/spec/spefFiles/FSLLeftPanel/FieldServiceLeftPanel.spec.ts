import { WebDriver, WebElement, TouchSequence } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { FieldServiceLeftPanelData } from './FieldServiceLeftPanelData';

export class FieldServiceLeftPanelSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [FieldServiceLeftPanelData.dispatcherConsoleAppPSI];
		this.zephyrTest('AutomationAPI', "PROT-2323", 'leftPanel - ', () => {
			beforeAll(async done => {
				const tcName = 'Field Service Left Panel.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Policy Field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const elementFrame: WebElement = await this.findElement(remoteWebdriver, "//div[@id='serviceExpertApp']", 20 * 1000);
				const text2: String = await elementFrame.getAttribute("class");
				console.log("Getting class attribute  = " + text2);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.policy.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.policy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Policy field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.policy.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.policy.testCaseXML);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.policy.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Appointment List View Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.appointmentListView.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.appointmentListView.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index Interaction on Appointment List View field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.appointmentListView.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.appointmentListView.testCaseXML);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.appointmentListView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Horizon Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.horizon.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.horizon.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Horizon field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.horizon.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.horizon.testCaseXML);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.horizon.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Match Gantt Dates Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.matchGanttDates.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.matchGanttDates.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Check Interaction on Match Gantt Dates field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.matchGanttDates.testCaseXML);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.matchGanttDates.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Match Gantt Dates Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.matchGanttDates.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.matchGanttDates.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Uncheck Interaction on Match Gantt Dates field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.matchGanttDates.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.matchGanttDates.testCaseXML1);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.matchGanttDates.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Search Values Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.searchValue.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.searchValue.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Search Values field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.searchValue.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.searchValue.testCaseXML);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.searchValue.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Policy Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.policy.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.policy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Policy field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.policy.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Appointment List View Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.appointmentListView.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.appointmentListView.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Appointment List View field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.appointmentListView.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Horizon Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.horizon.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.horizon.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Horizon field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.horizon.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Match Gantt Dates Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.matchGanttDates.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.matchGanttDates.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Match Gantt Dates field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.matchGanttDates.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Search Values Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.searchValue.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.searchValue.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Search Values field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.searchValue.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Appointment Number From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.appointmentNumber.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.appointmentNumber.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Value Assertion on Appointment Number field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.appointmentNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.appointmentNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.status.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Value Assertion on Appointment Number field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.status.testCaseXML);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Earliest Start Permitted Date From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.earliestStartPermitted.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.earliestStartPermitted.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Value Assertion on Earliest Start Permitted Date field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.earliestStartPermitted.testCaseXML);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.status.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Click Interaction on Status field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.status.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.status.testCaseXMLClick);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.status.executionStatusClick, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Account ID From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.accountId.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.accountId.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Value Assertion on Account ID field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.accountId.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.accountId.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Parent Record Type From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.parentRecordType.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.parentRecordType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Value Assertion on Parent Record Type field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.parentRecordType.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Parent Record ID From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.parentRecordID.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.parentRecordID.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Value Assertion on Parent Record ID field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.parentRecordID.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Due Date From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.dueDate.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.dueDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Value Assertion on Due Date field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.dueDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Flag From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.flag.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.flag.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Value Assertion on Flag field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.flag.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Schedule From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.schedule.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.schedule.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Value Assertion on Schedule field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.schedule.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Candidates From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.candidates.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.candidates.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Value Assertion on Candidates field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.candidates.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			// this.step('Mapping Edit From Appointment Table', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.edit.xpath, [FieldServiceLeftPanelData.frame]);
			// 	this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.edit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			// });
			// this.step('Performing Value Assertion on Edit field', async () => {
			// 	await this.modifyAddToTestCase(FieldServiceLeftPanelData.assertInteractionParameters);
			// 	const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			// 	const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
			// 	await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.edit.testCaseXMLAssert);
			// 	this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			// });
			this.step('Mapping Flag From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.flag.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.flag.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Click Interaction on Flag field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.flag.testCaseXMLClick);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.flag.executionStatusClick, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Unflag From Appointment Table', async () => {
				await this.findElement(remoteWebdriver, FieldServiceLeftPanelData.unflag.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.unflag.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.unflag.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Click Interaction on Unflag field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.unflag.testCaseXMLClick);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.unflag.executionStatusClick, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Candidates From Appointment Table', async () => {
				await this.findElement(remoteWebdriver, FieldServiceLeftPanelData.candidates.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.candidates.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.candidates.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Click Interaction on Candidates field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.candidates.testCaseXMLClick);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.candidates.executionStatusClick, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Hide Slots Button', async () => {
				await this.findElement(remoteWebdriver, FieldServiceLeftPanelData.hideSlots.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.hideSlots.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.hideSlots.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Hide Slots field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdWithRow);
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.hideSlots.testCaseXMLClick);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.hideSlots.executionStatusClick, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Appointment Number Field From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.appointmentNumber.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.appointmentNumber.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Column Assertion on Appointment Number field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.appointmentNumber.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.appointmentNumber.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.status.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Column Assertion on Status field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.status.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.status.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Earliest Start Permitted Date From Appointment Table', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.earliestStartPermitted.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.earliestStartPermitted.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState, FieldServiceLeftPanelData.rowLocators);
			});
			this.step('Performing Column Assertion on Earliest Start Permitted Date field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.earliestStartPermitted.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.earliestStartPermitted.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Search Values Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.searchValue.xpath, [FieldServiceLeftPanelData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.searchValue.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Search Values field', async () => {
				await this.modifyAddToTestCase(FieldServiceLeftPanelData.searchValue.modificationParameters1);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.searchValue.testCaseXML1);
				this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.searchValue.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			// this.step('Mapping Search All Records Field', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FieldServiceLeftPanelData.searchAllRecords.xpath, [FieldServiceLeftPanelData.frame]);
			// 	this.assertTestBuilderState(pageStructureInfo, FieldServiceLeftPanelData.searchAllRecords.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			// });
			// this.step('Performing Set Interaction on Search Values field', async () => {
			// 	const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			// 	const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
			// 	await this.assertTestCaseXML(testItemId, FieldServiceLeftPanelData.searchAllRecords.testCaseXML);
			// 	this.assertExecutionStatus(testItemId, FieldServiceLeftPanelData.searchAllRecords.executionStatus, response.runExecutionStatus.currentTestCase);
			// });
		});
	};
}
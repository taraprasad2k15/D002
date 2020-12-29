import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { ServiceAppointmentView } from './ServiceAppointmentView';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';

export class ServiceAppointmentViewSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [ServiceAppointmentView.ServiceAppointmentNewPSI];
		this.zephyrTest('AutomationAPI', "PROT-1734", 'FS_MAP_SF_FSL_SA_VIEW', () => {
			beforeAll(async done => {
				const tcName = 'Service Appointment.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Parent Record field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, ServiceAppointmentView.parentRecord.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.parentRecord.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.parentRecord.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode1, response.testbuilderState);
			});
			this.step('Add & Do Parent Records field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.parentRecord.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Status field ', async () => {
				await this.findElement(remoteWebdriver, ServiceAppointmentView.status.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.status.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.status.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Add & Do Status Name field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.status.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Earliest Start Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.earliestStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.earliestStartDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.DateTime.readMode, response.testbuilderState);
			});
			this.step('Add & Do Earliest Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.earliestStartDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Due Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.dueDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.dueDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.DateTime.readMode, response.testbuilderState);
			});
			this.step('Add & Do Due Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.dueDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Duration Type field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.durationType.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.durationType.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Add & Do Duration Type field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.durationType.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Address field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.address.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.address.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
			});
			this.step('Add & Do Address field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.address.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Internal SLR Geolocation field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.address.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.address.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
			});
			this.step('Add & Do Internal SLR Geolocation field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.address.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Is Multi field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.isMultiDay.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.isMultiDay.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
			});
			this.step('Add & Do Is Multi field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.isMultiDay.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Appointment Number field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.appointmentNumber.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.appointmentNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Add & Do Appointment Number field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.appointmentNumber.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Gantt Color field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.ganttColor.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.ganttColor.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Add & Do Gantt Color field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.ganttColor.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Actual Start Date field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.actualStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.actualStartDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.DateTime.readMode, response.testbuilderState);
			});
			this.step('Add & Do Actual Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.actualStartDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Schedule Over Lower Priority Appointment field for blank assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.scheduleOverLowerPriorityAppointment.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.scheduleOverLowerPriorityAppointment.fieldDetails, Standard.interaction.uncheck, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Schedule Over Lower Priority Appointment field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.scheduleOverLowerPriorityAppointment.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Actual Duration(Minutes) for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.actualDurationMinutes.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.actualDurationMinutes.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode1, response.testbuilderState);
			});
			this.step('Add & Do Actual Duration(Minutes) field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.actualDurationMinutes.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "PROT-1946", 'FS_MAP_SF_FSL_SA_IL', () => {
			beforeAll(async done => {
				const tcName = 'Service Appointment.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Status field on View Screen', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, ServiceAppointmentView.status.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.status.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.status.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Performing Activate Inline Edit on Status field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.status.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.status.testCaseXMLILE);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.status.executionStatusILE, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Status field on Inline Edit Screen', async () => {
				await this.findElement(remoteWebdriver, ServiceAppointmentView.status.xpath1, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.status.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Status Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.status.setInteraction);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.status.testCaseXMLSet);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.status.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.description.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Description Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.description.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.description.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Latitude field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.latitude.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.latitude.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Latitude Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.latitude.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.latitude.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.latitude.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Scheduled Start Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.scheduledStart.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.scheduledStart.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Date Interaction on Scheduled Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.scheduledStart.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.scheduledStart.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.scheduledStart.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Scheduled End Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.ScheduledEnd.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.ScheduledEnd.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Date Interaction on Scheduled End Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.ScheduledEnd.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.ScheduledEnd.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.ScheduledEnd.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Actual Start Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.actualStartDate.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.actualStartDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Time Interaction on Actual Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.actualStartDate.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.actualStartDate.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.actualStartDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Duration Type field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.durationType.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.durationType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index Interaction on Duration Type field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.durationType.setByIndexParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.durationType.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.durationType.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the In Jeopardy field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.inJeopardy.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.inJeopardy.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Check Interaction on In Jeopardy field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.inJeopardy.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.inJeopardy.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Is MultiDay field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.isMultiDay.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.isMultiDay.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Uncheck Interaction on Is MultiDay field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.isMultiDay.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.isMultiDay.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.isMultiDay.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Use Async Logic field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.useAsyncLogic.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.useAsyncLogic.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Toggle Interaction on Use Async Logic field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.useAsyncLogic.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.useAsyncLogic.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.useAsyncLogic.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Gantt Color field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.ganttColor.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.ganttColor.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Gantt Color field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.ganttColor.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.ganttColor.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.ganttColor.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.serviceTerritory.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.serviceTerritory.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Sf Lookup Interaction on Service Territory field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.serviceTerritory.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.serviceTerritory.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.serviceTerritory.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name field on Lookup Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.name.xpath);
				this.assertTestBuilderState([ServiceAppointmentView.LookupPSI], ServiceAppointmentView.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.name.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Appointment Number Field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.appointmentNumber.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.appointmentNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode1, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Appointment Number field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
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
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.appointmentNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Parent Record Type Field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.parentRecordType.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.parentRecordType.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode1, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Parent Record Type field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.parentRecordType.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Scheduled End Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.ScheduledEnd.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.ScheduledEnd.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Asserion on Scheduled End Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.ScheduledEnd.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Actual Start Date field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.actualStartDate.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.actualStartDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Actual Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.actualStartDate.testCaseXML2);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Status field on Inline Edit Screen', async () => {
				await this.findElement(remoteWebdriver, ServiceAppointmentView.status.xpath1, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.status.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Status Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.status.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.description.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Description Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.description.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Latitude field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.latitude.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.latitude.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Latitude Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.latitude.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Is MultiDay field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.isMultiDay.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.isMultiDay.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Is MultiDay field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.isMultiDay.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Gantt Color field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.ganttColor.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.ganttColor.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Gantt Color field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.ganttColor.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.serviceTerritory.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.serviceTerritory.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Service Territory field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.serviceTerritory.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Actual Duration(Minutes) on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.actualDurationMinutes.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.actualDurationMinutes.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode1, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Actual Duration(Minutes) field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.actualDurationMinutes.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Actual End Date on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.actualEndDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.actualEndDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.readMode1, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Actual End Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.actualEndDate.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Schedule Over Lower Priority Appointment field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.scheduleOverLowerPriorityAppointment.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.scheduleOverLowerPriorityAppointment.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on Schedule Over Lower Priority Appointment field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.scheduleOverLowerPriorityAppointment.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping In Jeopardy Reason field on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentView.inJeopardyReason.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentView.inJeopardyReason.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Label and Value Assertion on In Jeopardy Reason field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentView.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentView.inJeopardyReason.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentView.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel Button on Inline Edit Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Cancel Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.cancelButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.cancelButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
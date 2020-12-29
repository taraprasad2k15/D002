import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { ServiceAppointmentNew } from './ServiceAppointmentNew';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';

export class ServiceAppointmentNewSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [ServiceAppointmentNew.ServiceAppointmentNewPSI];
		this.zephyrTest('AutomationAPI', "PROT-1432", 'FS_MAP_SF_FSL_SA_NEW', () => {
			beforeAll(async done => {
				const tcName = 'Service Appointment New.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Status field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, ServiceAppointmentNew.status.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.status.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Status field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.status.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.status.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Service Territory field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.serviceTerritory.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.serviceTerritory.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Service Territory field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.serviceTerritory.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.serviceTerritory.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.serviceTerritory.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Latitude field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.latitude.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.latitude.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
			});
			this.step('Add & Do Latitude field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.latitude.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.latitude.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.latitude.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Street field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.street.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.street.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Street field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.street.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.street.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.street.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Schedule Over Lower Priority Appointment field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.scheduleOverLowerPriorityAppointment.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.scheduleOverLowerPriorityAppointment.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Schedule Over Lower Priority Appointment field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.scheduleOverLowerPriorityAppointment.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.scheduleOverLowerPriorityAppointment.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Earliest Start Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.earliestStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.earliestStartDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Earliest Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.earliestStartDate.modificationParameter)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.earliestStartDate.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.earliestStartDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Due Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.dueDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.dueDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Due Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.dueDate.modificationParameter)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.dueDate.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.dueDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Duration Type field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.durationType.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.durationType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Duration Type field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.durationType.modificationParameter)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.durationType.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.durationType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Actual Start Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.actualStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.actualStartDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Actual Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.actualStartDate.modificationParameter)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.actualStartDate.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.actualStartDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Gantt Label field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.ganttLabel.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.ganttLabel.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Gantt Label field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.ganttLabel.modificationParameter)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.ganttLabel.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.ganttLabel.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Emergency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.emergency.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.emergency.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Emergency field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.emergency.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.emergency.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Gantt Color field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.ganttColor.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.ganttColor.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Gantt Color field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.ganttColor.modificationParameter)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.ganttColor.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.ganttColor.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Parent Record field to change reference type', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.parentRecord.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.parentRecord.fieldDetails, Standard.interaction.sfReferenceType, Standard.applicableInteractions.Reference.enterableMode2, response.testbuilderState);
			});
			this.step('Add & Do Parent Records field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.parentRecord.modificationParameter.reference)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.parentRecord.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.parentRecord.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Parent Record field for Set Interaction', async () => {
				const element: WebElement =await this.findElement(remoteWebdriver,ServiceAppointmentNew.parentRecord.xpath1, 20*1000);
				element.sendKeys("00000");
				const element1: WebElement =await this.findElement(remoteWebdriver, "//div[contains(@class,'uiAutocompleteList uiInput uiAutocomplete ')]//span[normalize-space()='\"00000\" in Work Orders']", 20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//div[contains(@class,'uiAutocompleteList uiInput uiAutocomplete ')]//span[normalize-space()='\"00000\" in Work Orders']");
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.parentRecord.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Parent Records field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.parentRecord.modificationParameter.lookup)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.parentRecord.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.parentRecord.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Work Order Number on Lookup Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.WorkOrderNumber.xpath);
				this.assertTestBuilderState([ServiceAppointmentNew.LookupWorkOrderPSI], ServiceAppointmentNew.WorkOrderNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, ServiceAppointmentNew.WorkOrderNumber.rowlocators);
			});
			this.step('Add & Do Work Order Number field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.WorkOrderNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.WorkOrderNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Longitude field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.longitude.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.longitude.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
			});
			this.step('Add & Do Longitude field', async () => {
				await this.modifyAddToTestCase({
					interactionParameters: {
						id: 'Read/Assert',
						settings: {
							extractValue: true,
							assertValue: true,
							extractLabel: true,
							assertLabel: true,
							expectedLabel: {
								value: 'Longitude',
								caseSensitive: true,
								normalise: true,
							},
						},
					}
				});
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
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.longitude.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Scheduled Start field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.scheduledStart.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.scheduledStart.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Scheduled Start field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.scheduledStart.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping In Jeopardy Reason field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.inJeopardyReason.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.inJeopardyReason.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do In Jeopardy Reason field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.inJeopardyReason.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Pinned field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.pinned.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.pinned.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Pinned Reason field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.pinned.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contact field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.contact.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.contact.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Contact field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.contact.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Status field for value assertion', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, ServiceAppointmentNew.status.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.status.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Status Name field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.status.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Service Territory field for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.serviceTerritory.xpath1);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.serviceTerritory.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Service Territory field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.serviceTerritory.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Latitude field for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.latitude.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.latitude.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
			});
			this.step('Add & Do Latitude field', async () => {
				await this.modifyAddToTestCase({
					interactionParameters: {
						id: 'Read/Assert',
						settings: {
							extractValue: true,
							assertValue: true,
							extractLabel: true,
							assertLabel: true,
							expectedLabel: {
								value: 'Latitude',
								caseSensitive: true,
								normalise: true,
							},
						},
					}
				})
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.latitude.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Street field for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.street.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.street.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Street field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.street.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Schedule Over Lower Priority Appointment field for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.scheduleOverLowerPriorityAppointment.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.scheduleOverLowerPriorityAppointment.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Schedule Over Lower Priority Appointment field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.scheduleOverLowerPriorityAppointment.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Earliest Start Date field for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.earliestStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.earliestStartDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Earliest Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.earliestStartDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Due Date field for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.dueDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.dueDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Due Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.dueDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Duration Type field for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.durationType.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.durationType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Duration Type field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.durationType.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Actual Start Date field for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.actualStartDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.actualStartDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Actual Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.actualStartDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Gantt Label field for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.ganttLabel.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.ganttLabel.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Gantt Label field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.ganttLabel.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Emergency field for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.emergency.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.emergency.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Emergency field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.emergency.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Parent Record field to change reference for value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentNew.parentRecord.xpath2);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentNew.parentRecord.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode2, response.testbuilderState);
			});
			this.step('Add & Do Parent Records field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentNew.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentNew.parentRecord.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Cancel button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, { disposition: 'Existing', text: 'Cancel (cancel)', }, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
import { WebDriver, WebElement, TouchSequence } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { FlexiAppMCSRecentItems } from '../FlexiAppPageMCSRecentItems/FlexiAppMCSRecentItems';
import { ServiceAppointmentLightboxData } from './ServiceAppointmentLightboxData';
import { remote } from 'electron';
import { WorkOrder } from 'spec/testdata/sfObjects/WorkOrder';

export class ServiceAppointmentLightboxSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		var windowURL: string;
		var windowTitle: string;
		const pageStructureSAInfo: any[] = [ServiceAppointmentLightboxData.appointmentDetailsPSI];
		const pageStructureWOInfo: any[] = [ServiceAppointmentLightboxData.workOrderDetailsPSI];
		const pageStructureRLInfo: any[] = [ServiceAppointmentLightboxData.workOrderRLPSI];
		this.zephyrTest('AutomationAPI', "PROT-2326", 'SA Lightbox - Details - EDIT ', () => {
			beforeAll(async done => {
				const tcName = 'Service Appointment Lightbox.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Edit Button from Appointment Details Lightbox', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.edit.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.edit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click on Edit Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.edit.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.edit.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.edit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.status.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction Status Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.status.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.status.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.serviceTerritory.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.serviceTerritory.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Performing SF Lookup Interaction Service Territory Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.serviceTerritory.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.serviceTerritory.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.serviceTerritory.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name field from Lookup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.name.xpath, ["//frame[@id='resultsFrame']"]);
				this.assertTestBuilderState([ServiceAppointmentLightboxData.stLookupPSI], ServiceAppointmentLightboxData.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, ServiceAppointmentLightboxData.lookupST);
			});
			this.step('Performing Click Interaction on Name Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.name.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Emergency Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.emergency.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.emergency.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Check Interaction on Emergency Field', async () => {
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
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.emergency.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.emergency.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Description Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.description.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Description Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.description.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.description.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Arrival Window Start Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.arrivalWindowStart.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.arrivalWindowStart.fieldDetails, Standard.interaction.sfToday, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Arrival Window Start Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.arrivalWindowStart.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.arrivalWindowStart.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Actual Start Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.actualStart.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.actualStart.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Actual Start Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.actualStart.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.actualStart.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.actualStart.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Actual Duration (Minutes) Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.actualDuration.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.actualDuration.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Actual Duration (Minutes) Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.actualDuration.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.actualDuration.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.actualDuration.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Street Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.street.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.street.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Street Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.street.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.street.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.street.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Parent Record Type Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.parentRecordType.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.parentRecordType.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Parent Record Type Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.parentRecordType.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contact Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.contact.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.contact.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Contact Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.contact.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Gantt Label Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.ganttLabel.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.ganttLabel.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Gantt Label Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.ganttLabel.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Arrival Window End Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.arrivalWindowEnd.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.arrivalWindowEnd.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Arrival Window End Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.arrivalWindowEnd.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.status.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion Status Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.status.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.serviceTerritory.xpath1, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.serviceTerritory.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion Service Territory Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.serviceTerritory.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Emergency Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.emergency.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.emergency.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Emergency Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.emergency.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Description Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.description.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Description Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.description.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Actual Start Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.actualStart.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.actualStart.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Actual Start Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.actualStart.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Actual Duration (Minutes) Field from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.actualDuration.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.actualDuration.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Actual Duration (Minutes) Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.actualDuration.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Changes Button from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.saveChanges.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.saveChanges.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click on Save Changes Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.saveChanges.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.saveChanges.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		//view all
		this.zephyrTest('AutomationAPI', "dummy", 'SA Lightbox - Details - View Only ', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Emergency Field from Appointment Details Lightbox (Non- Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.emergency.xpath1, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.emergency.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Emergency Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.emergency.testCaseXMLAssertion1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field from Appointment Details Lightbox (Non- Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.status.xpath1, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.status.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Status Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.status.testCaseXMLAssertion1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory Field from Appointment Details Lightbox (Non- Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.serviceTerritory.xpath2, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.serviceTerritory.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Service Territory Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.serviceTerritory.testCaseXMLAssertion1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Street Field from Appointment Details Lightbox (Non- Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.street.xpath1, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.street.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Street Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.street.testCaseXMLAssertion1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Earliest Start Permitted Field from Appointment Details Lightbox (Non- Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.earliestStartPermitted.xpath1, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.earliestStartPermitted.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Earliest Start Permitted Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.earliestStartPermitted.testCaseXMLAssertion1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping City Field from Appointment Details Lightbox (Non- Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.city.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.city.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on City Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.city.testCaseXMLAssertion1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contact Field from Appointment Details Lightbox (Non- Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.contact.xpath1, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.contact.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Contact Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.contact.testCaseXMLAssertion1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Actual End Field from Appointment Details Lightbox (Non- Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.actualEnd.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.lightboxIframe]);
				this.assertTestBuilderState(pageStructureSAInfo, ServiceAppointmentLightboxData.actualEnd.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Actual End Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.actualEnd.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "dummy", 'SA Lightbox - WO EDIT ', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			//work order
			this.step('Mapping Edit Button from Work Order Details Lightbox (Non- Editable)', async () => {
				remoteWebdriver.switchTo().defaultContent();
				const frame: WebElement = await this.findElement(remoteWebdriver, ServiceAppointmentLightboxData.iframe, 20 * 1000);
				remoteWebdriver.switchTo().frame(frame);
				const workOrder: WebElement = await this.findElement(remoteWebdriver, "//div[text()='Work Order']", 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", workOrder);
				workOrder.click();
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.edit.xpathWO, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.edit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", ServiceAppointmentLightboxData.edit.testCaseXMLWO);
				this.assertExecutionStatus("0", ServiceAppointmentLightboxData.edit.executionStatusWO, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Priority Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.priority.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.priority.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index Interaction on Priority Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.priority.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.priority.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.priority.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Work Type Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.workType.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.workType.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Performing SF Lookup Interaction on Work Type Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.workType.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.workType.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.workType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name field from Lookup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.workTypeName.xpath, ["//frame[@id='resultsFrame']"]);
				this.assertTestBuilderState([ServiceAppointmentLightboxData.wtLookupPSI], ServiceAppointmentLightboxData.workTypeName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, ServiceAppointmentLightboxData.workTypeName.workTypeRowLocators);
			});
			this.step('Performing Click Interaction on Name Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.workTypeName.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.workTypeName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Address Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.address.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.address.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Address Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.address.modificationParameters);
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
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.address.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.address.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.subject.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Subject Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.subject.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.serviceTerritoryWO.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.serviceTerritoryWO.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Service Territory Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.serviceTerritoryWO.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.serviceTerritoryWO.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.serviceTerritoryWO.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Asset Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.asset.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.asset.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Asset Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.asset.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping City Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.city.xpathWO, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.city.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on City Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.city.testCaseXMLAssertionWO);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Priority Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.priority.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.priority.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Priority Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.priority.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Work Type Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.workType.xpath1, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.workType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Work Type Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.workType.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Address Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.address.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.address.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Address Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.address.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject Field from Work Order Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.subject.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Subject Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.subject.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Changes Button from Appointment Details Lightbox (Edit)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.saveChanges.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.saveChanges.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click on Save Changes Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.saveChanges.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.saveChanges.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "dummy", 'SA Lightbox - WO -View Only', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			//view only
			this.step('Mapping Asset Field from Work Order Details Lightbox (Non-Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.asset.xpath1, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.asset.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Asset Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.asset.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Work Type Field from Work Order Details Lightbox (Non-Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.workType.xpath2, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.workType.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Hover Interaction on Work Type Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.workType.modificationParameters2);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.workType.testCaseXML2);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.workType.executionStatus2, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field from Work Order Details Lightbox (Non-Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.status.xpathWO, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.status.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Status Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.status.testCaseXMLAssertionWO);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Account Field from Work Order Details Lightbox (Non-Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.account.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.account.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Account Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.account.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Refresh Button from Work Order Details Lightbox (Non-Editable)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.refresh.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.workOrderIframe]);
				this.assertTestBuilderState(pageStructureWOInfo, ServiceAppointmentLightboxData.refresh.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Refresh Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.refresh.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.refresh.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "dummy", 'SA Lightbox - Related - WOLI ', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			//related list WOLI
			this.step('Mapping Work Order Line Item Number Field from Related Lightbox (WorkOrderLineItem)', async () => {
				remoteWebdriver.switchTo().defaultContent();
				const frame: WebElement = await this.findElement(remoteWebdriver, ServiceAppointmentLightboxData.iframe, 20 * 1000);
				remoteWebdriver.switchTo().frame(frame);
				const workOrder: WebElement = await this.findElement(remoteWebdriver, "//button[contains(normalize-space(),'Related')]", 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", workOrder);
				workOrder.click();
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.workOrderLineItemRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.workOrderLineItemRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.woliRowLocators);
			});
			this.step('Performing Value Assertion on Work Order Line Item Number Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", ServiceAppointmentLightboxData.workOrderLineItemRL.testCaseXML);
				this.assertExecutionStatus("0", ServiceAppointmentLightboxData.workOrderLineItemRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Work type from Related Lightbox (WorkOrderLineItem)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.workTypeRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.workTypeRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.woliRowLocators);
			});
			this.step('Performing Value Assertion on Work Type Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.workTypeRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Asset Field from Related Lightbox (WorkOrderLineItem)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.assetRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.assetRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.woliRowLocators);
			});
			this.step('Performing Value Assertion on Asset Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assetRL.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.assetRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.assetRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit from Related Lightbox (WorkOrderLineItem)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.editButton.xpathWOLI, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.woliRowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.editButton.testCaseXMLWOLI);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Work Order Line Item Number Field from Related Lightbox (WorkOrderLineItem)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.workOrderLineItemRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.workOrderLineItemRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.woliRowLocators);
			});
			this.step('Performing Column Assertion on Work Order Line Item Number Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.workOrderLineItemRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.workOrderLineItemRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Work Type Field from Related Lightbox (WorkOrderLineItem)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.workTypeRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.workTypeRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.woliRowLocators);
			});
			this.step('Performing Column Assertion on Work Type Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.workTypeRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.workTypeRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Asset Field from Related Lightbox (WorkOrderLineItem)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.assetRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.assetRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.woliRowLocators);
			});
			this.step('Performing Column Assertion on Asset Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assetRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.assetRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading from Related Lightbox (WorkOrderLineItem)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.headingWOLI.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.headingWOLI.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Row Count Assertion on Heading Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.headingWOLI.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.headingWOLI.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete from Related Lightbox (WorkOrderLineItem)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.deleteWOLI.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.deleteWOLI.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.woliRowLocators);
			});
			this.step('Performing Click and Confirm Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.deleteWOLI.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.deleteWOLI.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.deleteWOLI.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "dummy", 'SA Lightbox - Related - Skill', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			//Skill Requirement - SR
			this.step('Mapping Skill Required Field from Related Lightbox (SkillRequirements)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.skillRequired.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.skillRequired.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.skillRowLocators);
			});
			this.step('Performing Value Assertion on Skill Required Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.skillRequired.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.skillRequired.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Skill Level from Related Lightbox (SkillRequirements)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.skillLevel.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.skillLevel.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.skillRowLocators);
			});
			this.step('Performing Value Assertion on Skill level Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.skillLevel.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit from Related Lightbox (SkillRequirements)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.editButton.xpathSR, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.skillRowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.editButton.testCaseXMLSR);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Skill Required Field from Related Lightbox (SkillRequirements)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.skillRequired.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.skillRequired.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.skillRowLocators);
			});
			this.step('Performing Column Assertion on Skill Required Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.skillRequired.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.skillRequired.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Skill Level Field from Related Lightbox (SkillRequirements)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.skillLevel.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.skillLevel.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.skillRowLocators);
			});
			this.step('Performing Column Assertion on Skill Level Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.skillLevel.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.skillLevel.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading from Related Lightbox (SkillRequirements)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.headingSR.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.headingSR.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Row Count Assertion on Heading Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.headingSR.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.headingSR.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete from Related Lightbox (SkillRequirements)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.deleteSR.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.deleteSR.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.skillRowLocators);
			});
			this.step('Performing Click and Confirm Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.deleteSR.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.deleteSR.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.deleteSR.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "dummy", 'SA Lightbox - Related - ResourcePreferences', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			//reource prefernces
			this.step('Mapping Service Resource Field from Related Lightbox (ResourcePreferences)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.serviceResource.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.serviceResource.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.resourcePreferencesRowLocators);
			});
			this.step('Performing Hover Interaction on Service Resource Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.serviceResource.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.serviceResource.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.serviceResource.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Preference type from Related Lightbox (ResourcePreferences)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.preferenceType.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.preferenceType.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.resourcePreferencesRowLocators);
			});
			this.step('Performing Value Assertion on Preference type Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.preferenceType.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit from Related Lightbox (ResourcePreferences)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.editButton.xpathRP, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.resourcePreferencesRowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.editButton.testCaseXMLRP);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Resource Field from Related Lightbox (ResourcePreferences)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.serviceResource.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.serviceResource.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.resourcePreferencesRowLocators);
			});
			this.step('Performing Column Assertion on Service Resource Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.serviceResource.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.serviceResource.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Preference Type Field from Related Lightbox (ResourcePreferences)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.preferenceType.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.preferenceType.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.resourcePreferencesRowLocators);
			});
			this.step('Performing Column Assertion on Preference Type Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.preferenceType.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.preferenceType.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading from Related Lightbox (ResourcePreferences)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.headingRP.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.headingRP.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Row Count Assertion on Heading Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.headingRP.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.headingRP.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete from Related Lightbox (ResourcePreferences)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.deleteRP.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.deleteRP.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.resourcePreferencesRowLocators);
			});
			this.step('Performing Click and Confirm Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.deleteRP.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.deleteRP.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.deleteRP.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "dummy", 'SA Lightbox - Related - SA ', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Appointment Number Field from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.appointmentNumber.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.appointmentNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Hover Interaction on Appointment Number Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.appointmentNumber.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.appointmentNumber.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.appointmentNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contact from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.contactRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.contactRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Value Assertion on Contact Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.contactRL.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Account from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.accountRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.accountRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Value Assertion on Account Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.accountRL.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.statusRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.statusRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Value Assertion on Status Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.statusRL.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Scheduled Start from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.scheduledStart.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.scheduledStart.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Value Assertion on Scheduled Start Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.scheduledStart.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Scheduled End from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.scheduledEnd.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.scheduledEnd.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Value Assertion on Scheduled End Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.scheduledEnd.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Earliest Start Permitted from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.earliestStartPermittedRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.earliestStartPermittedRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Value Assertion on Earliest Start Permitted Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.earliestStartPermittedRL.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.editButton.xpathSA, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentLightboxData.editButton.testCaseXMLSA);
				this.assertExecutionStatus(testItemId, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Appointment Number Field from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.appointmentNumber.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.appointmentNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Column Assertion on Appointment Number Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.appointmentNumber.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.appointmentNumber.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contact Field from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.contactRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.contactRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Column Assertion on Contact Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.contactRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.contactRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Account Field from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.accountRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.accountRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Column Assertion on Account Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.accountRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.accountRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.statusRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.statusRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Column Assertion on Status Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.statusRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.statusRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Scheduled Start Field from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.scheduledStart.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.scheduledStart.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Column Assertion on Scheduled Start Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.scheduledStart.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.scheduledStart.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Scheduled End Field from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.scheduledEnd.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.scheduledEnd.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Column Assertion on Scheduled End Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.scheduledEnd.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.scheduledEnd.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Earliest Start Permitted Field from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.earliestStartPermittedRL.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.earliestStartPermittedRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Column Assertion on Earliest Start Permitted  Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.earliestStartPermittedRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.earliestStartPermittedRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.headingSA.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.headingSA.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Row Count Assertion on Heading Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.headingSA.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.headingSA.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete from Related Lightbox (ServiceAppointment)', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentLightboxData.deleteSA.xpath, [ServiceAppointmentLightboxData.iframe, ServiceAppointmentLightboxData.relatedTabIframe]);
				this.assertTestBuilderState(pageStructureRLInfo, ServiceAppointmentLightboxData.deleteSA.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentLightboxData.serviceAppRowLocators);
			});
			this.step('Performing Click and Confirm Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentLightboxData.deleteSA.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentLightboxData.deleteSA.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentLightboxData.deleteSA.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
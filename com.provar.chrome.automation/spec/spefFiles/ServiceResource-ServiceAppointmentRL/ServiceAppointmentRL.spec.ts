import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { ServiceAppointmentRLData } from './ServiceAppointmentRL';

export class ServiceAppointmentRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [ServiceAppointmentRLData.operatingHoursViewPSI];
		const pageStructureInfoNewSA: any[] = [ServiceAppointmentRLData.timeSlotsNewPSI];
		this.zephyrTest('AutomationAPI', "PROT-2052", 'FS_MAP_SF_FSL_SR_RL.ServiceAppointments', () => {
			beforeAll(async done => {
				const tcName = 'Service Appointment RL.testcase';
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
				await this.findElement(remoteWebdriver, ServiceAppointmentRLData.newButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.newButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.newButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode1, response.testbuilderState);
			});
			this.step('Add & Do New field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Estimated Travel Time field from TimeSlot New Screen', async () => {
				await this.findElement(remoteWebdriver,ServiceAppointmentRLData.estimatedTravelTime.xpath, 20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.estimatedTravelTime.xpath);
				this.assertTestBuilderState(pageStructureInfoNewSA, ServiceAppointmentRLData.estimatedTravelTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Estimated Travel Time field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.estimatedTravelTime.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", ServiceAppointmentRLData.estimatedTravelTime.testCaseXML);
				this.assertExecutionStatus("0", ServiceAppointmentRLData.estimatedTravelTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Appointment Field from Assigned Resource New Screen', async () => {
				await this.findElement(remoteWebdriver, ServiceAppointmentRLData.serviceAppointment.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.serviceAppointment.xpath);
				this.assertTestBuilderState(pageStructureInfoNewSA, ServiceAppointmentRLData.serviceAppointment.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing SF Lookup Interaction on Service Appointment Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.serviceAppointment.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.serviceAppointment.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.serviceAppointment.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name Field from Lookup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.name.xpath);
				this.assertTestBuilderState([ServiceAppointmentRLData.lookupPSI], ServiceAppointmentRLData.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.name.rowLocators);
			});
			this.step('Performing Click Interaction on Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.name.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoNewSA, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				const testItemIdLookupOnscreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdLookupOnscreen);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for Screen to load', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 6 * 1000);
			});
			this.step('Mapping Service Appointment Field', async () => {
				await this.findElement(remoteWebdriver, ServiceAppointmentRLData.serviceAppointment.xpathRL, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.serviceAppointment.xpathRL);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.serviceAppointment.fieldDetailsRL, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.rowLocators);
			});
			this.step('Performing Value Assertion on Service Appointment Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", ServiceAppointmentRLData.serviceAppointment.testCaseXMLRL1);
				this.assertExecutionStatus("0", ServiceAppointmentRLData.serviceAppointment.executionStatusRL1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Estimated Travel Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.estimatedTravelTime.xpathRL);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.estimatedTravelTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.rowLocators);
			});
			this.step('Performing Value Assertion on Estimated Travel field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.estimatedTravelTime.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Approximate Travel Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.approxTravelTime.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.approxTravelTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.rowLocators);
			});
			this.step('Performing Value Assertion on Approximate Travel field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.approxTravelTime.testCaseXMLRL1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Assigned Resource Number field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.assignedResourceNumber.xpathRL);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.assignedResourceNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.rowLocators);
			});
			this.step('Performing Click Interaction on Assigned Resource Number field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.assignedResourceNumber.testCaseXMLRL1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.assignedResourceNumber.executionStatus, response.runExecutionStatus.currentTestCase);
				remoteWebdriver.navigate().back();
			});
			this.step('Mapping Edit Button', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, "//span[normalize-space()='Service Appointments']/ancestor::article//td[4]//lightning-icon", 20 * 1000);
				element.click();
				await this.findElement(remoteWebdriver, ServiceAppointmentRLData.editButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.editButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.rowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.editButton.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.rowLocators);
			});
			this.step('Performing Click and Cancel Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.deleteButton.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.deleteButton.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
				const element: WebElement = await this.findElement(remoteWebdriver, "//td[4]//a", 20 * 1000);
				element.click();
			});
			it('Waiting for Related List Records', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping Service Appointment Field', async () => {
				await this.findElement(remoteWebdriver, ServiceAppointmentRLData.serviceAppointment.xpathRL, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.serviceAppointment.xpathRL);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.serviceAppointment.fieldDetailsRL, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.rowLocators);
			});
			this.step('Performing Column Assertion on Service Appointment Field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.serviceAppointment.columnAssertion);
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
				await this.assertTestCaseXML(testItemId1, ServiceAppointmentRLData.serviceAppointment.testCaseXMLRL2);
				this.assertExecutionStatus(testItemId1, ServiceAppointmentRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Estimated Travel Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.estimatedTravelTime.xpathRL);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.estimatedTravelTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.rowLocators);
			});
			this.step('Performing Column Assertion on Estimated Travel field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.estimatedTravelTime.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.estimatedTravelTime.testCaseXMLRL2);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Approximate Travel Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.approxTravelTime.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.approxTravelTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.rowLocators);
			});
			this.step('Performing Column Assertion on Approximate Travel Time field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.approxTravelTime.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.approxTravelTime.testCaseXMLRL2);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Assigned Resource Number field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.assignedResourceNumber.xpathRL);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.assignedResourceNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceAppointmentRLData.rowLocators);
			});
			this.step('Performing Column Assertion on Assigned Resource Number field', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.assignedResourceNumber.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.assignedResourceNumber.testCaseXMLRL2);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			// this.step('Mapping Heading field', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.heading.xpath);
			// 	this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.heading.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			// });
			// this.step('Performing Row Count Assertion', async () => {
			// 	await this.modifyAddToTestCase(ServiceAppointmentRLData.heading.interactionParametersRowCount);
			// 	const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			// 	const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
			// 	await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.heading.testCaseXML);
			// 	this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			// });
			this.step('Mapping View All Link', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceAppointmentRLData.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click Interaction on View All Link', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
				remoteWebdriver.navigate().back();
				const element: WebElement = await this.findElement(remoteWebdriver, "//span[normalize-space()='Service Appointments']/ancestor::article//td[4]//lightning-icon", 20 * 1000);
				element.click();
			});
			it('Waiting for Related List Records', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping Delete Button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.deleteActionButton.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceAppointmentRLData.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click and Confirm Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceAppointmentRLData.deleteButton.modificationParameters1);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ServiceAppointmentRLData.deleteButton.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceAppointmentRLData.deleteButton.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
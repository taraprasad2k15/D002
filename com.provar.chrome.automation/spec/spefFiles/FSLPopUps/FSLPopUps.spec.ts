import { WebDriver, WebElement, TouchSequence } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { FSLPopUpsData } from './FSLPopUpData';
import { PassThrough } from 'form-data';

export class FSLPopUpsSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [FSLPopUpsData.appointmentPSI];
		const optimizePSI: any[] = [FSLPopUpsData.optimizePopUpPSI];
		const schedulePSI: any[] = [FSLPopUpsData.schedulePopUpPSI];
		const dispatchPSI: any[] = [FSLPopUpsData.dispatchPopUpPSI];
		const unschedulePSI: any[] = [FSLPopUpsData.unschedulePopUpPSI];
		this.zephyrTest('AutomationAPI', "PROT-2324", 'pop ups - ', () => {
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
			this.step('Mapping Select Row Checkbox from Service Appointment Table', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const elementFrame: WebElement = await this.findElement(remoteWebdriver, "//div[@id='serviceExpertApp']", 20 * 1000);
				const text2: String = await elementFrame.getAttribute("class");
				console.log("Getting class attribute  = " + text2);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectRow.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FSLPopUpsData.selectRow.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Check Interaction on Select Row field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.selectRow.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.selectRow.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Optimize Button', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, "//div[@id='ActionButton']", 20 * 1000);
				dropdown.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.optimizeButton.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FSLPopUpsData.optimizeButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Optimize Button', async () => {
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
				await this.assertTestCaseXML(testItemId1, FSLPopUpsData.optimizeButton.testCaseXML);
				this.assertExecutionStatus(testItemId1, FSLPopUpsData.optimizeButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Select Row from Territory Table - Optimize Popup', async () => {
				await this.findElement(remoteWebdriver, FSLPopUpsData.selectRowOptimize.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectRowOptimize.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.selectRowOptimize.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, FSLPopUpsData.selectRowOptimize.rowLocators);
			});
			this.step('Performing Check Interaction on Select Row', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", FSLPopUpsData.selectRowOptimize.testCaseXMLOptimize);
				this.assertExecutionStatus("0", FSLPopUpsData.selectRowOptimize.executionStatusOptimize, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Appointments Without Territory Field - Optimize Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.appointmentWithoutTerritory.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.appointmentWithoutTerritory.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Toggle Interaction on Appointments Without Territory Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.appointmentWithoutTerritory.modificationParameters);
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
				await this.assertTestCaseXML(testItemId1, FSLPopUpsData.appointmentWithoutTerritory.testCaseXML);
				this.assertExecutionStatus(testItemId1, FSLPopUpsData.appointmentWithoutTerritory.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field - Optimize Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startDate.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Start Date Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.startDate.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startDate.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.startDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Appointment Type Field - Optimize Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.appointmentType.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.appointmentType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Appointment Type Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.appointmentType.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.appointmentType.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.appointmentType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Policy Field - Optimize Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.policy.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.policy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index Interaction on Policy Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.policy.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.policy.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.policy.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Appointments Without Territory Field - Optimize Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.appointmentWithoutTerritory.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.appointmentWithoutTerritory.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Appointments Without Territory Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.appointmentWithoutTerritory.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field - Optimize Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startDate.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Start Date Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startDate.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Policy Field - Optimize Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.policy.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.policy.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Policy Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.policy.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Select Row from Territory Table - Optimize Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectRowOptimize.xpath1, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.selectRowOptimize.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, FSLPopUpsData.selectRowOptimize.rowLocators1);
			});
			this.step('Performing Blank Value Assetion on Select Row', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.selectRowOptimize.testCaseXMLOptimize1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.selectRowOptimize.executionStatusOptimize1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Optimize Button - Optimize Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.optimizeButtonPopUp.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.optimizeButtonPopUp.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assetion on Optimize Button', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.optimizeButtonPopUp.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Optimize Button - Optimize Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.optimizeButtonPopUp.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(optimizePSI, FSLPopUpsData.optimizeButtonPopUp.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Optimize Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.optimizeButtonPopUp.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.optimizeButtonPopUp.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Schedule Button ', async () => {
				await this.findElement(remoteWebdriver, FSLPopUpsData.scheduleButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.scheduleButton.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FSLPopUpsData.scheduleButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Schedule Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", FSLPopUpsData.scheduleButton.testCaseXML);
				this.assertExecutionStatus("0", FSLPopUpsData.scheduleButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for schedule pop up to get loaded', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 5 * 1000);
			});
			this.step('Mapping Schedule Message Field - Schedule Pop Up ', async () => {
				await this.findElement(remoteWebdriver, "//div[@id='SchedulingInProgress']/div[@class='ng-hide']/following-sibling::div//div[@class='HowManyWereScheduled']", 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.scheduleMessage.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(schedulePSI, FSLPopUpsData.scheduleMessage.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion Interaction on Schedule Message', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", FSLPopUpsData.scheduleMessage.testCaseXML);
				this.assertExecutionStatus("0", FSLPopUpsData.scheduleMessage.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View Service Appointments Field - Schedule Pop Up ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.viewServiceAppointments.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(schedulePSI, FSLPopUpsData.viewServiceAppointments.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion Interaction on View Service Appointments', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.viewServiceAppointments.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Close Field - Schedule Pop Up ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.close.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(schedulePSI, FSLPopUpsData.close.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Close Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.close.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.close.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Dispatch Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.dispatchButton.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FSLPopUpsData.dispatchButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Dispatch Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", FSLPopUpsData.dispatchButton.testCaseXML);
				this.assertExecutionStatus("0", FSLPopUpsData.dispatchButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Choose Service Territories Field - Dispatch Pop Up', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.chooseServiceTerritory.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.chooseServiceTerritory.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Check Interaction on Choose Service Territories Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", FSLPopUpsData.chooseServiceTerritory.testCaseXML);
				this.assertExecutionStatus("0", FSLPopUpsData.chooseServiceTerritory.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Select Row from Territory Table - Dispatch Popup', async () => {
				await this.findElement(remoteWebdriver, FSLPopUpsData.selectRowOptimize.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectRowOptimize.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.selectRowOptimize.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, FSLPopUpsData.selectRowOptimize.rowLocators);
			});
			this.step('Performing Check Interaction on Select Row', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.selectRowOptimize.testCaseXMLDispatch);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.selectRowOptimize.executionStatusDispatch, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startDate.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Start Date Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.startDate.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startDate.testCaseXMLDispatch);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.startDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Hour Field - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startHour.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.startHour.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Start Hour Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.startHour.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startHour.testCaseXMLDispatch);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.startHour.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Minute Field - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startMinute.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.startMinute.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set by Index Interaction on Start Minute Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.startMinute.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startMinute.testCaseXMLDispatch);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.startMinute.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startDate.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Start Date Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startDate.testCaseXMLDispatch1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Minute Field - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startMinute.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.startMinute.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Start Minute Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startMinute.testCaseXMLDispatch1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Selected Service Appointments Field - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectedServiceAppointment.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.selectedServiceAppointment.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Selected Service Appointments Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.selectedServiceAppointment.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Choose Service Territories Field - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.chooseServiceTerritory.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.chooseServiceTerritory.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Choose Service Territories Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.chooseServiceTerritory.testCaseXML1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Select Row from Territory Table - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectRowOptimize.xpath1, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.selectRowOptimize.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, FSLPopUpsData.selectRowOptimize.rowLocators1);
			});
			this.step('Performing Blank Value Assertion on Select Row', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.selectRowOptimize.testCaseXMLDispatch1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.selectRowOptimize.executionStatusDispatch1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Select Row from Territory Table - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectRowOptimize.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.selectRowOptimize.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, FSLPopUpsData.selectRowOptimize.rowLocators);
			});
			this.step('Performing Value Assertion on Select Row', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.selectRowOptimize.testCaseXMLDispatch2);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.selectRowOptimize.executionStatusDispatch2, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Dispatch Button - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.dispatchButton.xpath1, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.dispatchButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Dispatch Button', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.dispatchButton.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Dispatch Button - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.dispatchButton.xpath1, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.dispatchButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Dispatch Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.dispatchButton.testCaseXML1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.dispatchButton.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Close Icon - Dispatch Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.close.xpath1, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(dispatchPSI, FSLPopUpsData.close.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState,);
			});
			this.step('Performing Click Interaction on Close Icon', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.close.testCaseXMLDispatch);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.close.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Flag Unflag Button', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, "//div[@id='ActionButton']", 20 * 1000);
				dropdown.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.flagUnflagButton.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FSLPopUpsData.flagUnflagButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Flag Unflag Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", FSLPopUpsData.flagUnflagButton.testCaseXML);
				this.assertExecutionStatus("0", FSLPopUpsData.flagUnflagButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Unschedule Button', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, "//div[@id='ActionButton']", 20 * 1000);
				dropdown.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.unscheduleButton.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(pageStructureInfo, FSLPopUpsData.unscheduleButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Unschedule Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.unscheduleButton.testCaseXML);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.unscheduleButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Choose Service Territories Field - Unschedule Pop Up', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.chooseServiceTerritory.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.chooseServiceTerritory.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Check Interaction on Choose Service Territories Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", FSLPopUpsData.chooseServiceTerritory.testCaseXMLUnsch);
				this.assertExecutionStatus("0", FSLPopUpsData.chooseServiceTerritory.executionStatusUnsch, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Select Row from Territory Table - Unschedule Popup', async () => {
				await this.findElement(remoteWebdriver, FSLPopUpsData.selectRowOptimize.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectRowOptimize.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.selectRowOptimize.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, FSLPopUpsData.selectRowOptimize.rowLocators);
			});
			this.step('Performing Check Interaction on Select Row', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.selectRowOptimize.testCaseXMLUnsch);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.selectRowOptimize.executionStatusDispatch, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startDate.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Start Date Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.startDate.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startDate.testCaseXMLUnsch);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.startDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Hour Field - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startHour.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.startHour.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Start Hour Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.startHour.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startHour.testCaseXMLUnsch);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.startHour.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Minute Field - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startMinute.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.startMinute.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set by Index Interaction on Start Minute Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.startMinute.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startMinute.testCaseXMLUnsch);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.startMinute.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startDate.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Start Date Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startDate.testCaseXMLUnsch1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Minute Field - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.startMinute.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.startMinute.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Start Minute Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.startMinute.testCaseXMLUnsch1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Selected Service Appointments Field - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectedServiceAppointment.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.selectedServiceAppointment.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Selected Service Appointments Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.selectedServiceAppointment.testCaseXMLUnsch);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Choose Service Territories Field - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.chooseServiceTerritory.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.chooseServiceTerritory.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Choose Service Territories Field', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.chooseServiceTerritory.testCaseXMLUnsch1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Select Row from Territory Table - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectRowOptimize.xpath1, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.selectRowOptimize.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, FSLPopUpsData.selectRowOptimize.rowLocators1);
			});
			this.step('Performing Blank Value Assertion on Select Row', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.selectRowOptimize.testCaseXMLUnsch1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.selectRowOptimize.executionStatusDispatch1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Select Row from Territory Table - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.selectRowOptimize.xpath, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.selectRowOptimize.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, FSLPopUpsData.selectRowOptimize.rowLocators);
			});
			this.step('Performing Value Assertion on Select Row', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.selectRowOptimize.testCaseXMLUnsch2);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.selectRowOptimize.executionStatusDispatch2, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Unschedule Button - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.unscheduleButton.xpath1, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.unscheduleButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Unschedule Button', async () => {
				await this.modifyAddToTestCase(FSLPopUpsData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.unscheduleButton.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Unschedule Button - Unschedule Popup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.unscheduleButton.xpath1, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.unscheduleButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Unschedule Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.unscheduleButton.testCaseXML1);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.unscheduleButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Close Field - Unschedule Pop Up ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FSLPopUpsData.close.xpath2, [FSLPopUpsData.frame]);
				this.assertTestBuilderState(unschedulePSI, FSLPopUpsData.close.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Close Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, FSLPopUpsData.close.testCaseXMLUnschedule);
				this.assertExecutionStatus(testItemId, FSLPopUpsData.close.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { WorkOrderNew } from './WorkOrderNew';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { WorkOrder } from '../../testdata/sfObjects/WorkOrder';
import { Case } from '../../testdata/sfObjects/Case';

export class WorkOrderNewSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [WorkOrder.WorkOrderNewPSI];
		this.zephyrTest('AutomationAPI', "PROT-2022", 'FS_MAP_SF_FSL_WO_NEW', () => {
			beforeAll(async done => {
				const tcName = 'Work Order New.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Work Type field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, WorkOrderNew.workType.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.workType.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.workType, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing SF Lookup interaction on Work Type field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.workType.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, WorkOrderNew.workType.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderNew.workType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Work Type Name field from lookup screen', async () => {
				await this.findElement(remoteWebdriver, WorkOrderNew.workTypeName.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.workTypeName.xpath);
				this.assertTestBuilderState([WorkOrderNew.LookupWorkOrderPSI], WorkOrderNew.workTypeName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,WorkOrderNew.workTypeName.rowlocators);
			});
			this.step('Performing Click Interaction on Work Type Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen',true);
				await this.assertTestCaseXML(testItemId, WorkOrderNew.workTypeName.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderNew.workTypeName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.status.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.status, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Status field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.status.modificationParameter);
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
				await this.assertTestCaseXML(testItemId, WorkOrderNew.status.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderNew.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.serviceTerritory.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.serviceTerritory, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Service Territory field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.serviceTerritory.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.serviceTerritory.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderNew.serviceTerritory.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Priority Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.priority.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.priority, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index Interaction on Priority field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.priority.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.priority.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderNew.priority.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Address Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.address.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.street, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index Interaction on Priority field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.address.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.address.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderNew.address.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.subject.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.subject, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Subject field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.subject.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderNew.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.case.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.case, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing New in SF Lookup Interaction on Case field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.case.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.case.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderNew.case.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for New Screen to load', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			});
			this.step('Mapping Case Origin Field', async () => {
				await this.findElement(remoteWebdriver, WorkOrderNew.caseOrigin.xpath, 20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.caseOrigin.xpath);
				this.assertTestBuilderState([Case.caseNewPsi], WorkOrderNew.caseOrigin.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Case Origin field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.caseOrigin.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", WorkOrderNew.caseOrigin.testCaseXML);
				this.assertExecutionStatus("0", WorkOrderNew.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button on Case New Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.saveButton);
				this.assertTestBuilderState([Case.caseNewPsi], Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Save Button of Case New Screen', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for New Screen to load', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			});
			this.step('Mapping Owner field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.owner.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.owner, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Owner Field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", WorkOrderNew.owner.testCaseXML);
				this.assertExecutionStatus("0", WorkOrderNew.owner.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Asset field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.asset.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.asset, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Asset Field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.asset.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping City field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.city.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.city, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on City Field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.city.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.description.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.description, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Description Field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.description.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.status.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.status, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Status field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.status.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.serviceTerritory.xpath1);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.serviceTerritory, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Service Territory field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.serviceTerritory.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Priority Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.priority.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.priority, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Priority field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.priority.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Address Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.address.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.street, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Address field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.address.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.subject.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.subject, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Subject field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.subject.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.case.xpath1);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.case, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Case field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.case.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Work Type Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderNew.workType.xpath1);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.workType, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Work Type field', async () => {
				await this.modifyAddToTestCase(WorkOrderNew.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderNew.workType.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Cancel Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.cancelButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.cancelButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
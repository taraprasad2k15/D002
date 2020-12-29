import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { WorkOrderInlineEdit } from './WorkOrderInlineEdit';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { WorkOrder } from '../../testdata/sfObjects/WorkOrder';
import { Case } from '../../testdata/sfObjects/Case';

export class WorkOrderInlineEditSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [WorkOrder.WorkOrderViewPSI];
		this.zephyrTest('AutomationAPI', "PROT-2023", 'FS_MAP_SF_FSL_WO_ILE', () => {
			beforeAll(async done => {
				const tcName = 'Work Order View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Service Territory field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, WorkOrderInlineEdit.serviceTerritory.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.serviceTerritory.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.serviceTerritory, Standard.interaction.readAssert, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
			});
			this.step('Performing Start Inline Edit Interaction on Service Territory field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.serviceTerritory.modificationParameter.inlineEdit);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.serviceTerritory.testCaseXML1);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.serviceTerritory.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Work Type field', async () => {
				await this.findElement(remoteWebdriver, WorkOrderInlineEdit.workType.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.workType.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.workType, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing SF Lookup interaction on Work Type field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.workType.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.workType.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.workType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Work Type Name field from lookup screen', async () => {
				await this.findElement(remoteWebdriver, WorkOrderInlineEdit.workTypeName.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.workTypeName.xpath);
				this.assertTestBuilderState([WorkOrderInlineEdit.LookupWorkOrderPSI], WorkOrderInlineEdit.workTypeName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,WorkOrderInlineEdit.workTypeName.rowlocators);
			});
			this.step('Performing Click Interaction on Work Type Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen',true);
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.workTypeName.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.workTypeName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.status.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.status, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Status field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.status.modificationParameter);
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
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.status.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.serviceTerritory.xpath1);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.serviceTerritory, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Service Territory field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.serviceTerritory.modificationParameter.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.serviceTerritory.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.serviceTerritory.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Priority Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.priority.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.priority, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index Interaction on Priority field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.priority.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.priority.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.priority.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Address Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.address.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.street, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Address field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.address.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.address.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.address.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.subject.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.subject, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Subject field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.subject.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.case.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.case, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing New in SF Lookup Interaction on Case field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.case.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.case.testCaseXML);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.case.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for New Screen to load', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			});
			this.step('Mapping Case Origin Field', async () => {
				await this.findElement(remoteWebdriver, WorkOrderInlineEdit.caseOrigin.xpath, 20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.caseOrigin.xpath);
				this.assertTestBuilderState([Case.caseNewPsi], WorkOrderInlineEdit.caseOrigin.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Case Origin field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.caseOrigin.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", WorkOrderInlineEdit.caseOrigin.testCaseXML);
				this.assertExecutionStatus("0", WorkOrderInlineEdit.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button on Case New Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.saveButton);
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
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.owner.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.owner, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Owner Field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", WorkOrderInlineEdit.owner.testCaseXML);
				this.assertExecutionStatus("0", WorkOrderInlineEdit.owner.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Asset field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.asset.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.asset, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Asset Field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.asset.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping City field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.city.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.city, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on City Field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.city.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.description.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.description, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Description Field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.description.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.status.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.status, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Status field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.status.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.serviceTerritory.xpath2);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.serviceTerritory, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Service Territory field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.serviceTerritory.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Priority Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.priority.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.priority, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Priority field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.priority.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Address Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.address.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.street, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Address field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.address.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.subject.xpath);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.subject, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Subject field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.subject.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.case.xpath2);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.case, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Case field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.case.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Work Type Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(WorkOrderInlineEdit.workType.xpath2);
				this.assertTestBuilderState(pageStructureInfo, WorkOrder.workType, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Work Type field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.workType.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Cancel field', async () => {
				await this.modifyAddToTestCase(WorkOrderInlineEdit.cancel.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, WorkOrderInlineEdit.cancel.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, WorkOrderInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
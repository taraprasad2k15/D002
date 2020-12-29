import { BaseSpec } from '../BaseSpec';
import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { PCO } from '../../testdata/sfObjects/PCO';
import { CustomPathOnPCO } from './SfCustomPathOnPCO';
import { SfCommonFIeld } from '../SfCommonField';

export class CustomPathOnPCOSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		const connectionName = 'Regmain';
		let pageStructureInfo: any[] = [CustomPathOnPCO.PSI];

		this.zephyrTest('AutomationAPI', 'PROT-1777', 'FS_MAP_SF_STD_PATH.1Col.MCS', () => {
			beforeAll(async done => {
				const tcName = 'path.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Assigned Stage field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, CustomPathOnPCO.assignedStage.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.assignedStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.assignedStage.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Assigned Stage field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.assignedStage.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.assignedStage.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Mark as Current Status field', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.markAsCurrentStatus.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.markAsCurrentStatus.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.markAsCurrentStatus, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Mark as Current Status field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.markAsCurrentStatus.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.markAsCurrentStatus.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1778', 'FS_MAP_SF_STD_PATH.1Col.MC', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Mark as Complete field', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.markAsComplete.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.markAsComplete.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.markAsComplete, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Mark as Complete field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.markAsComplete.interactionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.markAsComplete.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.markAsComplete.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1779', 'FS_MAP_SF_STD_PATH.1Col.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Assigned field', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.assignedStage.xpath1, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.assignedStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.assignedStage.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Assigned field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.assignedStage.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Mark as Complete Button for Assertion', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.markAsComplete.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.markAsComplete.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.markAsComplete, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Mark as Complete Button', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.markAsComplete.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1802', 'FS_MAP_SF_STD_PATH.1Col.KEYFIELDS', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			})
			this.step('Mapping New field', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.newStage.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.newStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.newStage.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Hover on New field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.newStage.interactionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.newStage.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.newStage.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping New field', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.newStage.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.newStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.newStage.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing click on New field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.newStage.testCaseXML1);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.newStage.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Test Status field for blank value assertion', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, "//button[@title='Show More']", 20000);
				await remoteWebdriver.executeScript("arguments[0].click();", element);
				await this.findElement(remoteWebdriver, CustomPathOnPCO.testStatus.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.testStatus.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.testStatus.fieldDetails, Standard.interaction.uncheck, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
			});
			this.step('Add & Do on Test Status field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.testStatus.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Guidance for Success field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.guidanceNewStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.guidanceNewStage.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do on Guidance for Success field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.guidanceNewStage.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Test Status field for Activate Inline Edit', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.testStatus.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.testStatus.fieldDetails, Standard.interaction.uncheck, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
			});
			this.step('Add & Do on Test Status field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.testStatus.interactionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.testStatus.testCaseXML1);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.testStatus.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Test Status field for Check Interaction', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.testStatus.xpathILE);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.testStatus.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do on Test Status field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.testStatus.testCaseXML2);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.testStatus.executionStatus2, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Short Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.shortDescription.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.shortDescription.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do on Short Description field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.shortDescription.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.shortDescription.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.shortDescription.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Short Description field for assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.shortDescription.xpath1);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.shortDescription.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
			});
			this.step('Add & Do on Short Description field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.shortDescription.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Assigned Stage field', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.assignedStage.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.assignedStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.assignedStage.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Assigned Stage field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.assignedStage.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.assignedStage.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Record Type field for blank Value Assertion', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.recordType.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.recordType.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.recordType.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Record Type field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.recordType.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Linked Case field for Activating Inline Edit', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.linkCase.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.linkCase.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.linkCase.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Add & Do Linked Case field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.inlineEditInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.linkCase.testCaseXMLILE);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.linkCase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Linked Case field for Set Interaction', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.linkCase.xpath1, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.linkCase.xpath1);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.linkCase.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Linked Case field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.linkCase.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.linkCase.testCaseXMLSet);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.linkCase.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.saveButton.assignedFieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Linked Case field for Assertion', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.linkCase.xpath2, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.linkCase.xpath2);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.linkCase.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode2, response.testbuilderState);
			});
			this.step('Add & Do Linked Case field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.linkCase.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping In Progress Stage field', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.inProgressStage.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.inProgressStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.inProgressStage.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do In Progress Stage field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.inProgressStage.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.inProgressStage.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Test Date field to activate inline edit', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.testDate.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.testDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.testDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.DateTimeCX.readMode, response.testbuilderState);
			});
			this.step('Add & Do Test Date field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.inlineEditInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.testDate.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.testDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Test Date field on inline edit Screen', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.testDate.xpathDate, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.testDate.xpathDate);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.testDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Test Date field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.testDate.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.testDate.testCaseXMLILE);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.testDate.executionStatusILE, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.saveButton.inProgressFieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Test Date field for Assertion', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.testDate.xpath1, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.testDate.xpath1);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.testDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.DateTimeCX.readMode, response.testbuilderState);
			});
			this.step('Add & Do Test Date field', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.testDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Done Stage field', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.doneStage.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.doneStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.doneStage.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Done Stage field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.doneStage.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.doneStage.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Guidance for Success field on Done Stage', async () => {
				await this.findElement(remoteWebdriver, CustomPathOnPCO.guidanceDoneStage.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustomPathOnPCO.guidanceDoneStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, CustomPathOnPCO.guidanceDoneStage.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do on Guidance for Success field on Done Stage', async () => {
				await this.modifyAddToTestCase(CustomPathOnPCO.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustomPathOnPCO.guidanceDoneStage.testCaseXML);
				this.assertExecutionStatus(testItemId, CustomPathOnPCO.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { SkillRequirementsRLData } from './SkillsRequirementRL';

export class SkillRequirementsRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [SkillRequirementsRLData.workTypeViewPSI];
		const pageStructureInfoNewSR: any[] = [SkillRequirementsRLData.skillRequirementsNewPSI];
		this.zephyrTest('AutomationAPI', "PROT-2050", 'FS_MAP_SF_FSL_WT_RL.SkillRequirements', () => {
			beforeAll(async done => {
				const tcName = 'Work Type Skill Requirements RL.testcase';
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
				await this.findElement(remoteWebdriver, SkillRequirementsRLData.newButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.newButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, SkillRequirementsRLData.newButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode1, response.testbuilderState);
			});
			this.step('Add & Do New field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SkillRequirementsRLData.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SkillRequirementsRLData.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Skill Level Field from Skill Requirements New Screen', async () => {
				await this.findElement(remoteWebdriver, SkillRequirementsRLData.skillLevel.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.skillLevel.xpath);
				this.assertTestBuilderState(pageStructureInfoNewSR, SkillRequirementsRLData.skillLevel.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Skill Level Field', async () => {
				await this.modifyAddToTestCase(SkillRequirementsRLData.skillLevel.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SkillRequirementsRLData.skillLevel.testCaseXML);
				this.assertExecutionStatus("0", SkillRequirementsRLData.skillLevel.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Skill Required field from Skill Requirement New Screen', async () => {
				await this.findElement(remoteWebdriver, SkillRequirementsRLData.skillRequired.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.skillRequired.xpath);
				this.assertTestBuilderState(pageStructureInfoNewSR, SkillRequirementsRLData.skillRequired.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing SF Lookup Interaction on Skill Required field', async () => {
				await this.modifyAddToTestCase(SkillRequirementsRLData.skillRequired.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SkillRequirementsRLData.skillRequired.testCaseXML);
				this.assertExecutionStatus(testItemId, SkillRequirementsRLData.skillRequired.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name Field from Lookup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.name.xpath);
				this.assertTestBuilderState([SkillRequirementsRLData.lookupPSI], SkillRequirementsRLData.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,SkillRequirementsRLData.name.rowLocators);
			});
			this.step('Performing Click Interaction on Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen',true);
				await this.assertTestCaseXML(testItemId, SkillRequirementsRLData.name.testCaseXML);
				this.assertExecutionStatus(testItemId, SkillRequirementsRLData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoNewSR, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
			this.step('Mapping Skill Level field', async () => {
				await this.findElement(remoteWebdriver,SkillRequirementsRLData.skillLevel.xpathRL,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.skillLevel.xpathRL);
				this.assertTestBuilderState(pageStructureInfo, SkillRequirementsRLData.skillLevel.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,SkillRequirementsRLData.rowLocators);
			});
			this.step('Performing Value Assertion on Skill Level field', async () => {
				await this.modifyAddToTestCase(SkillRequirementsRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SkillRequirementsRLData.skillLevel.testCaseXMLRL1);
				this.assertExecutionStatus("0", SkillRequirementsRLData.skillLevel.executionStatusRL1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Skill Required Field Field', async () => {
				await this.findElement(remoteWebdriver, SkillRequirementsRLData.skillRequired.xpathRL, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.skillRequired.xpathRL);
				this.assertTestBuilderState(pageStructureInfo, SkillRequirementsRLData.skillRequired.fieldDetailsRL, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,SkillRequirementsRLData.rowLocators);
			});
			this.step('Performing Value Assertion on Skill Required Field', async () => {
				await this.modifyAddToTestCase(SkillRequirementsRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, SkillRequirementsRLData.skillRequired.testCaseRL1);
				this.assertExecutionStatus(testItemId, SkillRequirementsRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});	
			this.step('Mapping Edit Button', async () => {
				const element : WebElement = await this.findElement(remoteWebdriver,"//td[2]//lightning-icon",20*1000);
				element.click();
				await this.findElement(remoteWebdriver,SkillRequirementsRLData.editButton.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.editButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, SkillRequirementsRLData.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,SkillRequirementsRLData.rowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(SkillRequirementsRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, SkillRequirementsRLData.editButton.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SkillRequirementsRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SkillRequirementsRLData.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,SkillRequirementsRLData.rowLocators);
			});
			this.step('Performing Click and Cancel Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(SkillRequirementsRLData.deleteButton.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, SkillRequirementsRLData.deleteButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SkillRequirementsRLData.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for Related List Records', async done => {
				expect(true).toEqual(true);
					setTimeout(async () => {
			 		done();
				 	}, 3*1000);
				 });
			this.step('Mapping Skills Required Field', async () => {
				await this.findElement(remoteWebdriver, SkillRequirementsRLData.skillRequired.xpathRL, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.skillRequired.xpathRL);
				this.assertTestBuilderState(pageStructureInfo, SkillRequirementsRLData.skillRequired.fieldDetailsRL, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,SkillRequirementsRLData.rowLocators);
			});
			this.step('Performing Column Assertion on SKills Required Field', async () => {
				await this.modifyAddToTestCase(SkillRequirementsRLData.skillRequired.columnAssertion);
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
				await this.assertTestCaseXML(testItemId1, SkillRequirementsRLData.skillRequired.testCaseXMLRL2);
				this.assertExecutionStatus(testItemId1, SkillRequirementsRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Skill Level field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.skillLevel.xpathRL);
				this.assertTestBuilderState(pageStructureInfo, SkillRequirementsRLData.skillLevel.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,SkillRequirementsRLData.rowLocators);
			});
			this.step('Performing Column Assertion on Skill Level field', async () => {
				await this.modifyAddToTestCase(SkillRequirementsRLData.skillLevel.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SkillRequirementsRLData.skillLevel.testCaseXMLRL2);
				this.assertExecutionStatus(testItemId, SkillRequirementsRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.heading.xpath);
				this.assertTestBuilderState(pageStructureInfo, SkillRequirementsRLData.heading.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Row Count Assertion', async () => {
				await this.modifyAddToTestCase(SkillRequirementsRLData.heading.interactionParametersRowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SkillRequirementsRLData.heading.testCaseXML);
				this.assertExecutionStatus(testItemId, SkillRequirementsRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All Link', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SkillRequirementsRLData.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfo, SkillRequirementsRLData.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click Interaction on View All Link', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SkillRequirementsRLData.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, SkillRequirementsRLData.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
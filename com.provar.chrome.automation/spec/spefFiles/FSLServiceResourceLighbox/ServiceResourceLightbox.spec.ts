import { WebDriver, WebElement, TouchSequence } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { ServiceResourceLightboxData } from './ServiceResourceLightboxData';
import { FlexiAppMCSRecentItems } from '../FlexiAppPageMCSRecentItems/FlexiAppMCSRecentItems';

export class ServiceResourceLightboxSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		var windowURL: string;
		var windowTitle: string;
		const pageStructureKPIInfo: any[] = [ServiceResourceLightboxData.resourceKPIsPSI];
		const pageStructureDetailInfo: any[] = [ServiceResourceLightboxData.resourceDetailsPSI];
		const pageStructureRelatedInfo: any[] = [ServiceResourceLightboxData.resourceRelatedPSI];
		this.zephyrTest('AutomationAPI', "PROT-2327", 'service resource - KPIs ', () => {
			beforeAll(async done => {
				const tcName = 'Service Resource Lightbox.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});

			this.step('Mapping Total Scheduled Field from KPIs Lightbox', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				windowURL = await remoteWebdriver.getCurrentUrl();
				windowTitle = await remoteWebdriver.getTitle();
				const elementFrame: WebElement = await this.findElement(remoteWebdriver, "//div[@id='serviceExpertApp']", 20 * 1000);
				const text2: String = await elementFrame.getAttribute("class");
				console.log("Getting class attribute  = " + text2);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.totalScheduled.xpath, [ServiceResourceLightboxData.frame]);
				this.assertTestBuilderState(pageStructureKPIInfo, ServiceResourceLightboxData.totalScheduled.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Total Scheduled Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.totalScheduled.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Average Travel Field from KPIs Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.averageTravel.xpath, [ServiceResourceLightboxData.frame]);
				this.assertTestBuilderState(pageStructureKPIInfo, ServiceResourceLightboxData.averageTravel.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Average Travel Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.averageTravel.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Violations Field from KPIs Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.violations.xpath, [ServiceResourceLightboxData.frame]);
				this.assertTestBuilderState(pageStructureKPIInfo, ServiceResourceLightboxData.violations.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Violations Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.violations.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping In Jeopardy Field from KPIs Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.inJeopardy.xpath, [ServiceResourceLightboxData.frame]);
				this.assertTestBuilderState(pageStructureKPIInfo, ServiceResourceLightboxData.inJeopardy.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on In Jeopardy Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.inJeopardy.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Completed Field from KPIs Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.completed.xpath, [ServiceResourceLightboxData.frame]);
				this.assertTestBuilderState(pageStructureKPIInfo, ServiceResourceLightboxData.completed.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Completed Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.completed.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		//DETAILS LIGHTBOX
		this.zephyrTest('AutomationAPI', "dummy", 'service resource - Details ', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Name Field from Details Lightbox', async () => {
				const detailsFrame: WebElement = await this.findElement(remoteWebdriver, ServiceResourceLightboxData.detailsFrame, 20 * 1000);
				const id: String = await detailsFrame.getAttribute("id");
				console.log("Getting id attribute  = " + id);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.name.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.detailsFrame]);
				this.assertTestBuilderState(pageStructureDetailInfo, ServiceResourceLightboxData.name.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Name Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", ServiceResourceLightboxData.name.testCaseXML);
				this.assertExecutionStatus("0", ServiceResourceLightboxData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Resource Type Field from Details Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.resourceType.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.detailsFrame]);
				this.assertTestBuilderState(pageStructureDetailInfo, ServiceResourceLightboxData.resourceType.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Resource Type Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.resourceType.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Gantt Label Field from Details Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.ganttLabel.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.detailsFrame]);
				this.assertTestBuilderState(pageStructureDetailInfo, ServiceResourceLightboxData.ganttLabel.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Gantt Label Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.ganttLabel.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Description Field from Details Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.description.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.detailsFrame]);
				this.assertTestBuilderState(pageStructureDetailInfo, ServiceResourceLightboxData.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Description Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.description.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});

		//Related Tab
		this.zephyrTest('AutomationAPI', "dummy", 'service resource - Skills RL ', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Name Field from Skills - Related Lightbox', async () => {
				remoteWebdriver.switchTo().defaultContent();
				const frame: WebElement = await this.findElement(remoteWebdriver, ServiceResourceLightboxData.frame, 20 * 1000);
				remoteWebdriver.switchTo().frame(frame);
				const tab: WebElement = await this.findElement(remoteWebdriver, "//button[contains(text(),'Related')]", 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", tab);
				tab.click();
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.nameSkillsRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.nameSkillsRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.skillRowLocators);
			});
			this.step('Performing Value Assertion on Name Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", ServiceResourceLightboxData.nameSkillsRL.testCaseXML);
				this.assertExecutionStatus("0", ServiceResourceLightboxData.nameSkillsRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field from Skills - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.startDateSkillsRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.startDateSkillsRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.skillRowLocators);
			});
			this.step('Performing Value Assertion on Start Date Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.startDateSkillsRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Skill Field from Skills - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.skillsRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.skillsRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.skillRowLocators);
			});
			this.step('Performing Value Assertion on Skill Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.skillsRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping End Date Field from Skills - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.endDateSkillsRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.endDateSkillsRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.skillRowLocators);
			});
			this.step('Performing Value Assertion on End Date Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.endDateSkillsRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Skill Level Field from Skills - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.skillLevelRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.skillLevelRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.skillRowLocators);
			});
			this.step('Performing Value Assertion on Skill Level Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.skillLevelRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Resource Skill Number Field from Skills - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.resourceSkillNumberRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.resourceSkillNumberRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.skillRowLocators);
			});
			this.step('Performing Value Assertion on Resource Skill Number Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.resourceSkillNumberRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Resource Skill Number Field from Skills - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.resourceSkillNumberRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.resourceSkillNumberRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.skillRowLocators);
			});
			this.step('Performing Hover Interaction on Resource Skill Number Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.resourceSkillNumberRL.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.resourceSkillNumberRL.testCaseXMLClick);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.resourceSkillNumberRL.executionStatusClick, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit from Skills - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.editSkillRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.editSkillRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.skillRowLocators);
			});
			this.step('Performing Value Assertion on Edit Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.editSkillRL.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading Field from Skills - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.headingSkillsRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.headingSkillsRL.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Extract Value Interaction on Heading', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.headingSkillsRL.modificationParameters);
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
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.headingSkillsRL.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button from Skills - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.deleteSkillRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.deleteSkillRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.skillRowLocators);
			});
			this.step('Performing Click and Confirm Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.deleteSkillRL.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.deleteSkillRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.deleteSkillRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "dummy", 'service resource - STM RL ', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Member Number Field from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.memberNumberSTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.memberNumberSTRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Value Assertion on Member Number Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.memberNumberSTRL.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.memberNumberSTRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory Field from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.serviceTerritorySTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.serviceTerritorySTRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Hover on Service Territory Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.serviceTerritorySTRL.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.serviceTerritorySTRL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.serviceTerritorySTRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Territory Type Field from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.territoryTypeSTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.territoryTypeSTRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Value Assertion on Territory Type Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.territoryTypeSTRL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.startDateSTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.startDateSTRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Value Assertion on Start Date Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.startDateSTRL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping End Date Field from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.endDateSTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.endDateSTRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Value Assertion on End Date Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.endDateSTRL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.editSTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.editSTRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.editSTRL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.deleteRL.xpathSTR, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.deleteRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Click and Cancel Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.deleteRL.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.deleteRL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.deleteRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.headingSTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.headingSTRL.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Row Count Assertion on Heading', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.headingSTRL.modificationParameters);
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
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.headingSTRL.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Member Number Field from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.memberNumberSTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.memberNumberSTRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Column Assertion on Member Number Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.memberNumberSTRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.memberNumberSTRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Territory Field from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.serviceTerritorySTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.serviceTerritorySTRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Column on Service Territory Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.serviceTerritorySTRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.serviceTerritorySTRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Territory Type Field from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.territoryTypeSTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.territoryTypeSTRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Column Assertion on Territory Type Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.territoryTypeSTRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.territoryTypeSTRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.startDateSTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.startDateSTRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Column Assertion on Start Date Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.startDateSTRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.startDateSTRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping End Date Field from STM - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.endDateSTRL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.endDateSkillsRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceTerritoryRowLocators);
			});
			this.step('Performing Column Assertion on End Date Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.endDateSTRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.endDateSTRL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "dummy", 'service resource - Absence RL ', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Start Time Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.startTimeRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.startTimeRARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Value Assertion on Start Time Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
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
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.startTimeRARL.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.startTimeRARL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping End Time Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.endTimeRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.endTimeRARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Value Assertion on End Time Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.endTimeRARL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.typeRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.typeRARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Value Assertion on Type Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.typeRARL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Gantt Label Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.ganttLabelRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.ganttLabelRARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Value Assertion on Gantt Label Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.ganttLabelRARL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Absence Number Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.absenceLNumberRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.absenceLNumberRARL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Hover Interaction on Absence Number Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.absenceLNumberRARL.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.absenceLNumberRARL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.absenceLNumberRARL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.editRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.editRARL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.editRARL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.deleteRL.xpathAbsence, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.deleteRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Click and Cancel Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.deleteRL.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.deleteRL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.deleteRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Time Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.startTimeRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.startTimeRARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Column Assertion on Start Time Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.startTimeRARL.columnAssertion);
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
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.startTimeRARL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping End Time Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.endTimeRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.endTimeRARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Column Assertion on End Time Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.endTimeRARL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.endTimeRARL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.typeRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.typeRARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Column Assertion on Type Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.typeRARL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.typeRARL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Gantt Label Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.ganttLabelRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.ganttLabelRARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Column Assertion on Gantt Label Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.ganttLabelRARL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.ganttLabelRARL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Absence Number Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.absenceLNumberRARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.absenceLNumberRARL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.resourceAbsenceRowLocators);
			});
			this.step('Performing Column Assertion on Absence Number Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.absenceLNumberRARL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.absenceLNumberRARL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "dummy", 'service resource - Service Appointment RL ', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Service Appointment Field from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.serviceAppointmentSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.serviceAppointmentSARL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Value Assertion on Service Appointment Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
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
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.serviceAppointmentSARL.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.serviceAppointmentSARL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Assigned Resource Number Field from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.assignedResourceNumberSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.assignedResourceNumberSARL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Hover Interaction on Assigned Resource Number Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assignedResourceNumberSARL.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.assignedResourceNumberSARL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.assignedResourceNumberSARL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Estimated Travel Time Field from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.estimatedTravelTimeSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.estimatedTravelTimeSARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Value Assertion on Estimated Travel Time Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.estimatedTravelTimeSARL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Approximate Travel Time Field from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.approximateTravelTimeSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.approximateTravelTimeSARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Value Assertion on Approximate Travel Time Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.approximateTravelTimeSARL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Actual Travel Time Field from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.actualTravelTimeSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.actualTravelTimeSARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Value Assertion on Actual Travel Time Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.actualTravelTimeSARL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.editSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.editSARL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.editSARL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.deleteRL.xpathServiceAppointment, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.deleteRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Click and Cancel Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.deleteRL.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.deleteRL.testCaseXML);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.deleteRL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Appointment Field from Absences - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.serviceAppointmentSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.serviceAppointmentSARL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Column Assertion on Service Appointment Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.serviceAppointmentSARL.columnAssertion);
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
				await this.assertTestCaseXML(testItemId1, ServiceResourceLightboxData.serviceAppointmentSARL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Assigned Resource Number Field from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.assignedResourceNumberSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.assignedResourceNumberSARL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Column Assertion on Assigned Resource Number Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.assignedResourceNumberSARL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.assignedResourceNumberSARL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Estimated Travel Time Number Field from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.estimatedTravelTimeSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.estimatedTravelTimeSARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Column Assertion on Estimated Travel Time Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.estimatedTravelTimeSARL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.estimatedTravelTimeSARL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Approximate Travel Time Number Field from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.approximateTravelTimeSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.approximateTravelTimeSARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Column Assertion on Approximate Travel Time Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.approximateTravelTimeSARL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.approximateTravelTimeSARL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Actual Travel Time Number Field from Service Appointment - Related Lightbox', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.actualTravelTimeSARL.xpath, [ServiceResourceLightboxData.frame, ServiceResourceLightboxData.relatedFrame]);
				this.assertTestBuilderState(pageStructureRelatedInfo, ServiceResourceLightboxData.actualTravelTimeSARL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, ServiceResourceLightboxData.serviceAppointmentRowLocators);
			});
			this.step('Performing Column Assertion on Actual Travel Time Field', async () => {
				await this.modifyAddToTestCase(ServiceResourceLightboxData.actualTravelTimeSARL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceResourceLightboxData.actualTravelTimeSARL.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, ServiceResourceLightboxData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Close Icon of Lightbox', async () => {
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceResourceLightboxData.closeIcon.xpath, [ServiceResourceLightboxData.frame]);
				this.assertTestBuilderState([ServiceResourceLightboxData.closeIconPSI], ServiceResourceLightboxData.closeIcon.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Close Icon', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", ServiceResourceLightboxData.closeIcon.testCaseXML);
				this.assertExecutionStatus("0", ServiceResourceLightboxData.closeIcon.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
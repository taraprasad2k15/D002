import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfContactNewEvent } from './SfContactNewEvent';
import { join } from 'path';

export class SfContactNewEventSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [SfContactNewEvent.newEventPSI];
        const pageStructureInfoAT: any[] = [SfContactNewEvent.activityTimelinePSI];
        this.zephyrTest('AutomationAPI', "PROT-1063", 'FS_MAP_SF_QA_AF_LX_NEW EVENT.CLICK', () => {
            beforeAll(async done => {
                const tcName = 'Contact NewEvent.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Navigate to New Event on Feed Tab', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const feedTab: WebElement = await this.findElement(remoteWebdriver, SfContactNewEvent.newEventTab.Xpath, 10000);
                await remoteWebdriver.executeScript('arguments[0].click();', feedTab);
                // await feedTab.click();
                const subjectField: WebElement = await this.findElement(remoteWebdriver, SfContactNewEvent.subject.Xpath, 5000);
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactNewEvent.subject.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfContactNewEvent.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Set the Subject field to Email', async () => {
                await this.modifyAddToTestCase(SfContactNewEvent.subject.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML('0', SfContactNewEvent.subject.testCaseXML.set);
                this.assertExecutionStatus('0', SfContactNewEvent.subject.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Description field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactNewEvent.description.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfContactNewEvent.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Set the Description field', async () => {
                await this.modifyAddToTestCase(SfContactNewEvent.description.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfContactNewEvent.description.testCaseXML);
                this.assertExecutionStatus(testItemId, SfContactNewEvent.description.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Start Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactNewEvent.startDate.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfContactNewEvent.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
            });
            this.step('Set the Start Date field', async () => {
                await this.modifyAddToTestCase(SfContactNewEvent.startDate.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfContactNewEvent.startDate.testCaseXML);
                this.assertExecutionStatus(testItemId, SfContactNewEvent.startDate.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the End Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactNewEvent.endDate.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfContactNewEvent.endDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
            });
            this.step('Set the End Date field', async () => {
                await this.modifyAddToTestCase(SfContactNewEvent.endDate.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfContactNewEvent.endDate.testCaseXML);
                this.assertExecutionStatus(testItemId, SfContactNewEvent.endDate.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name Lookup field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactNewEvent.contactName.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfContactNewEvent.contactName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Name Lookup field', async () => {
                await this.modifyAddToTestCase(SfContactNewEvent.contactName.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfContactNewEvent.contactName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfContactNewEvent.contactName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Related To field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactNewEvent.relatedTo.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfContactNewEvent.relatedTo.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
            });
            this.step('Set the Related To field', async () => {
                await this.modifyAddToTestCase(SfContactNewEvent.relatedTo.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfContactNewEvent.relatedTo.testCaseXML);
                this.assertExecutionStatus(testItemId, SfContactNewEvent.relatedTo.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Save button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactNewEvent.saveButton.XpathProvar);
                this.assertTestBuilderState(pageStructureInfoQA, SfContactNewEvent.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfContactNewEvent.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SfContactNewEvent.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1064", 'FS_MAP_SF_QA_AF_LX_NEW EVENT.RA', () => {
			beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
			});
			this.step('Mapping the Activity Timeline entry', async() => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const activitySubject: WebElement = await this.findElement(remoteWebdriver, SfContactNewEvent.activityTabSubject.Xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactNewEvent.activityTabSubject.Xpath);
                this.assertTestBuilderState(pageStructureInfoAT, SfContactNewEvent.activityTabSubject.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
				});
			this.step('Assert the Activity Timeline entry', async() => {
				await this.modifyAddToTestCase(SfContactNewEvent.activityTabSubject.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML('0', SfContactNewEvent.activityTabSubject.testCaseXML);
				this.assertExecutionStatus('0', SfContactNewEvent.activityTabSubject.executionStatus, response.runExecutionStatus.currentTestCase);});
		});
    };
}
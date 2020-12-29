import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { NewEventData } from './NewEvent.data'
import { join } from 'path';

export class NewEventSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [NewEventData.newEventPSI];
        this.zephyrTest('AutomationAPI', "PROT-1790", 'FS_MAP_SF_GQA_LX_NEW EVENT', () => {
            beforeAll(async done => {
                const tcName = 'NewEvent.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done =>{
                await this.endTestSession(done);
            })
            this.step('Mapping the Subject field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, NewEventData.subject.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewEventData.subject.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, NewEventData.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Set the Subject field to Email', async () => {
                await this.modifyAddToTestCase(NewEventData.subject.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, NewEventData.subject.testCaseXML.set);
                this.assertExecutionStatus(testItemId, NewEventData.subject.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Description field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewEventData.description.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, NewEventData.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Set the Description field', async () => {
                await this.modifyAddToTestCase(NewEventData.description.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, NewEventData.description.testCaseXML);
                this.assertExecutionStatus(testItemId, NewEventData.description.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Start Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewEventData.startDate.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, NewEventData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
            });
            this.step('Set the Start Date field', async () => {
                await this.modifyAddToTestCase(NewEventData.startDate.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, NewEventData.startDate.testCaseXML);
                this.assertExecutionStatus(testItemId, NewEventData.startDate.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name Lookup field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewEventData.contactName.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, NewEventData.contactName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
            });
            this.step('Set the Name Lookup field', async () => {
                await this.modifyAddToTestCase(NewEventData.contactName.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, NewEventData.contactName.testCaseXML);
                this.assertExecutionStatus(testItemId, NewEventData.contactName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Related To field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewEventData.relatedTo.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, NewEventData.relatedTo.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
            });
            this.step('Set the Related To field', async () => {
                await this.modifyAddToTestCase(NewEventData.relatedTo.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, NewEventData.relatedTo.testCaseXML);
                this.assertExecutionStatus(testItemId, NewEventData.relatedTo.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Save button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewEventData.saveButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, NewEventData.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, NewEventData.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, NewEventData.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}
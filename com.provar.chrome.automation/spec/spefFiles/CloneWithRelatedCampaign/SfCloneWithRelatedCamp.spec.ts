import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCloneWithRelatedCamp } from './SfCloneWithRelatedCamp';
import { join } from 'path';

export class SfCloneWithRelatedCampSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [SfCloneWithRelatedCamp.cloneWithRelatedPSI];
        const pageStructureInfoView: any[] = [SfCloneWithRelatedCamp.campViewPSI];
        const pageStructureInfoClone: any[] = [SfCloneWithRelatedCamp.campClonePSI];
        this.zephyrTest('AutomationAPI', "PROT-1230", 'FS_MAP_SF_LAYOUT_LX_CLONE WITH RELATED_CAMPAIGN.SET', () => {
            beforeAll(async done => {
                const tcName = 'Clone With Related Campaign.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Click on Show more Actions button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const showMA: WebElement = await this.findElement(remoteWebdriver, SfCloneWithRelatedCamp.showMoreActions.Xpath);
                await remoteWebdriver.executeScript('arguments[0].click();', showMA);
            });
            this.step('Mapping the Clone with Related button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedCamp.cloneWithRelated.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfCloneWithRelatedCamp.cloneWithRelated.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Clone with Related button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedCamp.cloneWithRelated.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedCamp.cloneWithRelated.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Record Checkbox field', async () => {
                const rowLocators = [
                    {
                        "label": "Item to clone (itemToClone)",
                        "selected": true,
                        "value": "Campaign Member Status",
                    }
                ];
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const checkbox: WebElement = await this.findElement(remoteWebdriver, SfCloneWithRelatedCamp.campMemberStatus.XpathCheckbox, 10000);
                console.log(checkbox);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedCamp.campMemberStatus.XpathCheckbox);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedCamp.campMemberStatus.fieldDetails.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocators);
            });
            this.step('Check the first Record Checkbox field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCloneWithRelatedCamp.campMemberStatus.testCaseXML.check);
                this.assertExecutionStatus("0", SfCloneWithRelatedCamp.campMemberStatus.executionStatus.check, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the first Record Label', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedCamp.campMemberStatus.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedCamp.campMemberStatus.fieldDetails.text.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Assert the first Record Checkbox Label', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedCamp.campMemberStatus.testCaseXML.readAssert);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedCamp.campMemberStatus.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the PageMessage Label', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedCamp.pageMessage.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedCamp.pageMessage.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the PageMessage Label', async () => {
                await this.modifyAddToTestCase(SfCloneWithRelatedCamp.pageMessage.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedCamp.pageMessage.testCaseXML.readAssert);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedCamp.pageMessage.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Next button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedCamp.nextButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedCamp.nextButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Next button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedCamp.nextButton.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedCamp.nextButton.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Campaign Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const campName: WebElement = await this.findElement(remoteWebdriver, SfCloneWithRelatedCamp.campName.Xpath, 10000);
                console.log(campName);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedCamp.campName.Xpath);
                this.assertTestBuilderState(pageStructureInfoClone, SfCloneWithRelatedCamp.campName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Campaign Name field', async () => {
                await this.modifyAddToTestCase(SfCloneWithRelatedCamp.campName.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCloneWithRelatedCamp.campName.testCaseXML.readAssert);
                this.assertExecutionStatus("0", SfCloneWithRelatedCamp.campName.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Save button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedCamp.saveButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoClone, SfCloneWithRelatedCamp.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedCamp.saveButton.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedCamp.saveButton.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}
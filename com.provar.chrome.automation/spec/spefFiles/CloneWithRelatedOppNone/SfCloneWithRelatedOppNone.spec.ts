import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCloneWithRelatedOppNone } from './SfCloneWithRelatedOppNone';
import { join } from 'path';

export class SfCloneWithRelatedOppNoneSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [SfCloneWithRelatedOppNone.cloneWithRelatedPSI];
        const pageStructureInfoView: any[] = [SfCloneWithRelatedOppNone.oppViewPSI];
        const pageStructureInfoClone: any[] = [SfCloneWithRelatedOppNone.oppClonePSI];
        this.zephyrTest('AutomationAPI', "PROT-1232", 'FS_MAP_SF_LAYOUT_LX_CLONE WITH RELATED_OPPORTUNITY_NONE.RA', () => {
            beforeAll(async done => {
                const tcName = 'Clone With Related OppNone.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the PageMessage Label', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const pageMessage: WebElement = await this.findElement(remoteWebdriver, SfCloneWithRelatedOppNone.pageMessage.Xpath);
                console.log(pageMessage);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOppNone.pageMessage.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedOppNone.pageMessage.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the PageMessage Label', async () => {
                await this.modifyAddToTestCase(SfCloneWithRelatedOppNone.pageMessage.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCloneWithRelatedOppNone.pageMessage.testCaseXML.readAssert);
                this.assertExecutionStatus("0", SfCloneWithRelatedOppNone.pageMessage.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Next button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOppNone.nextButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedOppNone.nextButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Next button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOppNone.nextButton.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOppNone.nextButton.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const oppName: WebElement = await this.findElement(remoteWebdriver, SfCloneWithRelatedOppNone.oppName.Xpath, 10000);
                console.log(oppName);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOppNone.oppName.Xpath);
                this.assertTestBuilderState(pageStructureInfoClone, SfCloneWithRelatedOppNone.oppName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Opportunity Name field', async () => {
                await this.modifyAddToTestCase(SfCloneWithRelatedOppNone.oppName.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCloneWithRelatedOppNone.oppName.testCaseXML.readAssert);
                this.assertExecutionStatus("0", SfCloneWithRelatedOppNone.oppName.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOppNone.accName.Xpath);
                this.assertTestBuilderState(pageStructureInfoClone, SfCloneWithRelatedOppNone.accName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfCloneWithRelatedOppNone.accName.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOppNone.accName.testCaseXML.readAssert);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOppNone.accName.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Save button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOppNone.saveButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoClone, SfCloneWithRelatedOppNone.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOppNone.saveButton.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOppNone.saveButton.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}
import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfFlexiHomeVF } from './SfFlexiHomeVF';
import { join } from 'path';

export class SfFlexiHomeVFSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQAN: any[] = [SfFlexiHomeVF.PSI.new];
        const pageStructureInfoQA: any[] = [SfFlexiHomeVF.PSI.existing];
        this.zephyrTest('AutomationAPI', "PROT-1495", 'FS_MAP_SF_STD_VF.HP', () => {
            beforeAll(async done => {
                const tcName = 'FlexiHomeVF.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Enable mapping for VF fields', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const link: WebElement = await this.findElement(remoteWebdriver, SfFlexiHomeVF.link.Xpath, 20000);
                await remoteWebdriver.executeScript('arguments[0].click();', link);
                const iFrame: WebElement = await this.findElement(remoteWebdriver, SfFlexiHomeVF.iframe.Xpath, 20000);
                await remoteWebdriver.switchTo().frame(iFrame);
                const accName: WebElement = await this.findElement(remoteWebdriver, SfFlexiHomeVF.accountName.Xpath, 20000);
                console.log(accName);
                await remoteWebdriver.switchTo().defaultContent();
            });
            this.zephyrTest('AutomationAPI', 'PROT-1249', 'FS_MAP_SF_DT_CX_TEXT_VF_ONLY_INPUT.SET', () => {
                beforeEach(() => {
                    this.beforeEach();
                });
                this.step('Mapping Account Name field', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeVF.accountName.Xpath, [SfFlexiHomeVF.iframe.Xpath]);
                    this.assertTestBuilderState(pageStructureInfoQAN, SfFlexiHomeVF.accountName.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
                });
                this.step('Add & Do Account Name field', async () => {
                    await this.modifyAddToTestCase(SfFlexiHomeVF.accountName);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                    this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                    this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                    await this.assertTestCaseXML("0", SfFlexiHomeVF.accountName.testCaseXML);
                    this.assertExecutionStatus("0", SfFlexiHomeVF.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
                });
                this.step('Mapping Phone field', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeVF.phone.Xpath, [SfFlexiHomeVF.iframe.Xpath]);
                    this.assertTestBuilderState(pageStructureInfoQA, SfFlexiHomeVF.phone.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
                });
                this.step('Add & Do Phone field', async () => {
                    await this.modifyAddToTestCase(SfFlexiHomeVF.phone);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, SfFlexiHomeVF.phone.testCaseXML);
                    this.assertExecutionStatus(testItemId, SfFlexiHomeVF.phone.executionStatus, response.runExecutionStatus.currentTestCase);
                });
            });
            this.zephyrTest('AutomationAPI', 'PROT-1248', 'FS_MAP_SF_DT_CX_PICKLIST_VF_ONLY_INPUT.SETBYINDEX', () => {
                beforeEach(() => {
                    this.beforeEach();
                });
                this.step('Mapping Type field', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeVF.type.Xpath, [SfFlexiHomeVF.iframe.Xpath]);
                    this.assertTestBuilderState(pageStructureInfoQA, SfFlexiHomeVF.type.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
                });
                this.step('Add & Do Type field', async () => {
                    await this.modifyAddToTestCase(SfFlexiHomeVF.type);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, SfFlexiHomeVF.type.testCaseXML);
                    this.assertExecutionStatus(testItemId, SfFlexiHomeVF.type.executionStatus, response.runExecutionStatus.currentTestCase);
                });
            });
            this.zephyrTest('AutomationAPI', 'PROT-1496', 'FS_MAP_SF_DT_CX_VF BUTTON.SAVE.CLICK', () => {
                this.step('Mapping the Save button', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeVF.save.Xpath, [SfFlexiHomeVF.iframe.Xpath]);
                    this.assertTestBuilderState(pageStructureInfoQA, SfFlexiHomeVF.save.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
                });
                this.step('Assert the Save button', async () => {
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, SfFlexiHomeVF.save.testCaseXML);
                    this.assertExecutionStatus(testItemId, SfFlexiHomeVF.save.executionStatus, response.runExecutionStatus.currentTestCase);
                });
            });
        });
    };
}
import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfFlexiHomeAura } from './SfFlexiHomeAura';
import { join } from 'path';

export class SfFlexiHomeAuraSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQAN: any[] = [SfFlexiHomeAura.PSI.new];
        const pageStructureInfoQA: any[] = [SfFlexiHomeAura.PSI.existing];
        this.zephyrTest('AutomationAPI', "PROT-1497", 'FS_MAP_SF_STD_AURA.HP', () => {
            beforeAll(async done => {
                const tcName = 'FlexiHomeAura.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Enable mapping for Aura fields', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const link: WebElement = await this.findElement(remoteWebdriver, "//h3[(.)='Custom Aura Component']", 20000);
                console.log(link);
                const firstName: WebElement = await this.findElement(remoteWebdriver, SfFlexiHomeAura.firstName.Xpath, 20000);
                console.log(firstName);
            });
            this.step('Mapping First Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeAura.firstName.Xpath);
                console.log(response);
                this.assertTestBuilderState(pageStructureInfoQAN, SfFlexiHomeAura.firstName.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do First Name field', async () => {
                await this.modifyAddToTestCase(SfFlexiHomeAura.firstName);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfFlexiHomeAura.firstName.testCaseXML);
                this.assertExecutionStatus("0", SfFlexiHomeAura.firstName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Last Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeAura.lastName.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfFlexiHomeAura.lastName.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Last Name field', async () => {
                await this.modifyAddToTestCase(SfFlexiHomeAura.lastName);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiHomeAura.lastName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfFlexiHomeAura.lastName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Title field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeAura.title.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfFlexiHomeAura.title.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Title field', async () => {
                await this.modifyAddToTestCase(SfFlexiHomeAura.title);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiHomeAura.title.testCaseXML);
                this.assertExecutionStatus(testItemId, SfFlexiHomeAura.title.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeAura.phone.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfFlexiHomeAura.phone.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone Number field', async () => {
                await this.modifyAddToTestCase(SfFlexiHomeAura.phone);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiHomeAura.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, SfFlexiHomeAura.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeAura.email.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfFlexiHomeAura.email.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Email field', async () => {
                await this.modifyAddToTestCase(SfFlexiHomeAura.email);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiHomeAura.email.testCaseXML);
                this.assertExecutionStatus(testItemId, SfFlexiHomeAura.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Save Contact button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeAura.save.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfFlexiHomeAura.save.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Assert the Save Contact button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiHomeAura.save.testCaseXML);
                this.assertExecutionStatus(testItemId, SfFlexiHomeAura.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}
import { WebDriver, WebElement, Actions, Key } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCaseQACreateAccount} from './CaseQACreateAccount';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { remote } from 'electron';

export class SfCaseQACreateAccountSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
 

        this.zephyrTest('AutomationAPI', 'PROT-2732', 'QuickAction_Create Account', () => {
            beforeAll(async done => {
                const tcName = 'CaseQACreateAccount.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            /*
            afterAll(async done => {
				await this.endTestSession(done);
            });
            */
            this.step('Mapping Industry Picklist', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const feed: WebElement = await this.findElement(remoteWebdriver, "//span[(.)='Feed']", 20 * 1000);
                await remoteWebdriver.executeScript("arguments[0].click()",feed)
                const qa: WebElement = await this.findElement(remoteWebdriver, "//a[contains(@class, '')]/span[@class='iconContainer']/following-sibling::span[(.)='CreateAccountAction']", 20 * 1000);
                await remoteWebdriver.executeScript("arguments[0].click()",qa)
                await this.findElement(remoteWebdriver, SfCaseQACreateAccount.industryPicklist.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseQACreateAccount.industryPicklist.Xpath);
                this.assertTestBuilderState([SfCaseQACreateAccount.accountQAViewPsiCX], SfCaseQACreateAccount.industryPicklist.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Industry Picklist for "Set By Value" Interaction ', async () => {
                this.modifyAddToTestCase(SfCaseQACreateAccount.industryPicklist.interactionParameters.setByValue);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfCaseQACreateAccount.industryPicklist.testCaseXML.setByValue);
                this.assertExecutionStatus("0", SfCaseQACreateAccount.industryPicklist.executionStatus.setByValue, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Industry Picklist', async () => {
                await this.findElement(remoteWebdriver, SfCaseQACreateAccount.industryPicklist.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseQACreateAccount.industryPicklist.Xpath);
                this.assertTestBuilderState([SfCaseQACreateAccount.accountQAViewPsiCX], SfCaseQACreateAccount.industryPicklist.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Industry Picklist for "Set By Index" Interaction ', async () => {
                this.modifyAddToTestCase(SfCaseQACreateAccount.industryPicklist.interactionParameters.setByIndex);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseQACreateAccount.industryPicklist.testCaseXML.setByIndex);
                this.assertExecutionStatus(testItemId, SfCaseQACreateAccount.industryPicklist.executionStatus.setByIndex, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseQACreateAccount.accountName.Xpath);
                this.assertTestBuilderState([SfCaseQACreateAccount.accountQAViewPsiCX], SfCaseQACreateAccount.accountName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfCaseQACreateAccount.accountName.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseQACreateAccount.accountName.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfCaseQACreateAccount.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field', async () => {
                const des: WebElement = await this.findElement(remoteWebdriver,SfCaseQACreateAccount.description.Xpath,10*1000);
                des.sendKeys("This will be Cleared");
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseQACreateAccount.description.Xpath);
                this.assertTestBuilderState([SfCaseQACreateAccount.accountQAViewPsiCX], SfCaseQACreateAccount.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field for "Clear" interaction', async () => {
                this.modifyAddToTestCase(SfCaseQACreateAccount.description.interactionParameters.clear);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseQACreateAccount.description.testCaseXML.clear);
                this.assertExecutionStatus(testItemId, SfCaseQACreateAccount.description.executionStatus.clear, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseQACreateAccount.description.Xpath);
                this.assertTestBuilderState([SfCaseQACreateAccount.accountQAViewPsiCX], SfCaseQACreateAccount.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field for Value Assertion', async () => {
                this.modifyAddToTestCase(SfCaseQACreateAccount.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseQACreateAccount.description.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfCaseQACreateAccount.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseQACreateAccount.description.Xpath);
                this.assertTestBuilderState([SfCaseQACreateAccount.accountQAViewPsiCX], SfCaseQACreateAccount.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field for "Set" interaction', async () => {
                this.modifyAddToTestCase(SfCaseQACreateAccount.description.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseQACreateAccount.description.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfCaseQACreateAccount.description.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Date_Time Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseQACreateAccount.date.Xpath);
                this.assertTestBuilderState([SfCaseQACreateAccount.accountQAViewPsiCX], SfCaseQACreateAccount.date.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Date_Time Field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfCaseQACreateAccount.date.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseQACreateAccount.date.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfCaseQACreateAccount.date.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Date_Time Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseQACreateAccount.date.Xpath);
                this.assertTestBuilderState([SfCaseQACreateAccount.accountQAViewPsiCX], SfCaseQACreateAccount.date.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Date_Time Field for "SF Today" interaction ', async () => {
                this.modifyAddToTestCase(SfCaseQACreateAccount.date.interactionParameters.sfToday);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseQACreateAccount.date.testCaseXML.sfToday);
                this.assertExecutionStatus(testItemId, SfCaseQACreateAccount.date.executionStatus.sfToday, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Create Button', async () => {
                await this.findElement(remoteWebdriver, SfCaseQACreateAccount.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseQACreateAccount.create.Xpath);
                this.assertTestBuilderState([SfCaseQACreateAccount.accountQAViewPsiCX], SfCaseQACreateAccount.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Create Button for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfCaseQACreateAccount.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseQACreateAccount.create.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfCaseQACreateAccount.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Create Button', async () => {
                await this.findElement(remoteWebdriver, SfCaseQACreateAccount.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseQACreateAccount.create.Xpath);
                this.assertTestBuilderState([SfCaseQACreateAccount.accountQAViewPsiCX], SfCaseQACreateAccount.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            /*
            this.step('Add & Do Create Button for "Click" interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseQACreateAccount.create.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfCaseQACreateAccount.create.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            */
        });
     }
    
}

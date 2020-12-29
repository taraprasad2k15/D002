import { WebDriver, WebElement, Actions, Key } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfQuickLeadQA} from './ContactQAQuickLeadCX.';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { remote } from 'electron';

export class SfQuickLeadQACXSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;

        this.zephyrTest('AutomationAPI', 'PROT-2702', 'QuickAction_QuickLead', () => {
            beforeAll(async done => {
                const tcName = 'QuickLead.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
				await this.endTestSession(done);
			});
            this.step('Mapping Salutation Picklist', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfQuickLeadQA.salutationPicklist.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfQuickLeadQA.salutationPicklist.Xpath);
                this.assertTestBuilderState([SfQuickLeadQA.contactViewPsiCX], SfQuickLeadQA.salutationPicklist.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Salutation Picklist for "Set By Value" Interaction ', async () => {
                this.modifyAddToTestCase(SfQuickLeadQA.salutationPicklist.interactionParameters.setByValue);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfQuickLeadQA.salutationPicklist.testCaseXML.setByValue);
                this.assertExecutionStatus(testItemId, SfQuickLeadQA.salutationPicklist.executionStatus.setByValue, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Salutation Picklist', async () => {
                await this.findElement(remoteWebdriver, SfQuickLeadQA.salutationPicklist.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfQuickLeadQA.salutationPicklist.Xpath);
                this.assertTestBuilderState([SfQuickLeadQA.contactViewPsiCX], SfQuickLeadQA.salutationPicklist.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Salutation Picklist for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfQuickLeadQA.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfQuickLeadQA.salutationPicklist.testCaseXML.uiAssert);
                this.assertExecutionStatus(testItemId, SfQuickLeadQA.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping First Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfQuickLeadQA.firstName.Xpath);
                this.assertTestBuilderState([SfQuickLeadQA.contactViewPsiCX], SfQuickLeadQA.firstName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do First Name field for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfQuickLeadQA.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfQuickLeadQA.firstName.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfQuickLeadQA.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping First Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfQuickLeadQA.firstName.Xpath);
                this.assertTestBuilderState([SfQuickLeadQA.contactViewPsiCX], SfQuickLeadQA.firstName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do First Name field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfQuickLeadQA.firstName.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfQuickLeadQA.firstName.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfQuickLeadQA.firstName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Company field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfQuickLeadQA.company.Xpath);
                this.assertTestBuilderState([SfQuickLeadQA.contactViewPsiCX], SfQuickLeadQA.company.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Company field for "Set" interaction', async () => {
                this.modifyAddToTestCase(SfQuickLeadQA.company.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfQuickLeadQA.company.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfQuickLeadQA.company.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Create Button', async () => {
                await this.findElement(remoteWebdriver, SfQuickLeadQA.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfQuickLeadQA.create.Xpath);
                this.assertTestBuilderState([SfQuickLeadQA.contactViewPsiCX], SfQuickLeadQA.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Create Button for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfQuickLeadQA.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfQuickLeadQA.create.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfQuickLeadQA.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Create Button', async () => {
                const email: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'activeTemplate')]//input[@data-fieldname='email']", 10 * 1000);
                email.sendKeys("TestAuto@auto.com")
                const phone: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'activeTemplate')]//input[@data-fieldname='phone']", 10 * 1000);
                phone.sendKeys("23213212")
                const lastName: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'activeTemplate')]//input[@data-fieldname='lastname']", 10 * 1000);
                lastName.sendKeys("Automation")
                await this.findElement(remoteWebdriver, SfQuickLeadQA.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfQuickLeadQA.create.Xpath);
                this.assertTestBuilderState([SfQuickLeadQA.contactViewPsiCX], SfQuickLeadQA.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Create Button for "Click" interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfQuickLeadQA.create.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfQuickLeadQA.create.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
     }
    
}

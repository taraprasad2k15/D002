import { WebDriver, WebElement, Actions, Key } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfOppUpdateOpp} from './OppUpdateOppQA';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { remote } from 'electron';

export class SfOppQAUpdateOppCXSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;


        this.zephyrTest('AutomationAPI', 'PROT-2695', 'Opportunity_UpdateOpportunityQA', () => {
            beforeAll(async done => {
                const tcName = 'UpdateOppQA.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            /*
            afterAll(async done => {
				await this.endTestSession(done);
			});*/
            this.step('Mapping Sales Price field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfOppUpdateOpp.salesPrice.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppUpdateOpp.salesPrice.Xpath);
                this.assertTestBuilderState([SfOppUpdateOpp.oppViewPsiCX], SfOppUpdateOpp.salesPrice.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Sales Price field for "Set" interaction', async () => {
                this.modifyAddToTestCase(SfOppUpdateOpp.salesPrice.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfOppUpdateOpp.salesPrice.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfOppUpdateOpp.salesPrice.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field', async () => {
                await this.findElement(remoteWebdriver, SfOppUpdateOpp.quantity.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppUpdateOpp.quantity.Xpath);
                this.assertTestBuilderState([SfOppUpdateOpp.oppViewPsiCX], SfOppUpdateOpp.quantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Quantity for "Set" interaction', async () => {
                this.modifyAddToTestCase(SfOppUpdateOpp.quantity.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfOppUpdateOpp.quantity.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfOppUpdateOpp.quantity.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Date Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppUpdateOpp.date.Xpath);
                this.assertTestBuilderState([SfOppUpdateOpp.oppViewPsiCX], SfOppUpdateOpp.date.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Date Field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfOppUpdateOpp.date.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfOppUpdateOpp.date.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfOppUpdateOpp.date.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Date Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppUpdateOpp.date.Xpath);
                this.assertTestBuilderState([SfOppUpdateOpp.oppViewPsiCX], SfOppUpdateOpp.date.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Date Field for "Clear" interaction ', async () => {
                this.modifyAddToTestCase(SfOppUpdateOpp.date.interactionParameters.clear);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfOppUpdateOpp.date.testCaseXML.clear);
                this.assertExecutionStatus(testItemId, SfOppUpdateOpp.date.executionStatus.clear, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Date Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppUpdateOpp.date.Xpath);
                this.assertTestBuilderState([SfOppUpdateOpp.oppViewPsiCX], SfOppUpdateOpp.date.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Date Field for "SF Today" interaction ', async () => {
                this.modifyAddToTestCase(SfOppUpdateOpp.date.interactionParameters.sfToday);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfOppUpdateOpp.date.testCaseXML.sfToday);
                this.assertExecutionStatus(testItemId, SfOppUpdateOpp.date.executionStatus.sfToday, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppUpdateOpp.product.XpathText);
                this.assertTestBuilderState([SfOppUpdateOpp.oppViewPsiCX], SfOppUpdateOpp.product.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Product Field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfOppUpdateOpp.product.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfOppUpdateOpp.product.testCaseXML);
                this.assertExecutionStatus(testItemId, SfOppUpdateOpp.product.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Create Button', async () => {
                await this.findElement(remoteWebdriver, SfOppUpdateOpp.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppUpdateOpp.create.Xpath);
                this.assertTestBuilderState([SfOppUpdateOpp.oppViewPsiCX], SfOppUpdateOpp.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do create Button for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfOppUpdateOpp.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfOppUpdateOpp.create.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfOppUpdateOpp.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping create Button', async () => {
                await this.findElement(remoteWebdriver, SfOppUpdateOpp.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppUpdateOpp.create.Xpath);
                this.assertTestBuilderState([SfOppUpdateOpp.oppViewPsiCX], SfOppUpdateOpp.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do create Button for "Click" interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfOppUpdateOpp.create.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfOppUpdateOpp.create.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
     }
    
}

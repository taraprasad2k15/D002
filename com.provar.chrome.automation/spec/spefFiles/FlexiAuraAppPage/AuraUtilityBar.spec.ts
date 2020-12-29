import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { AuraAppPageData } from './AuraAppPageData';
import { join } from 'path';

export class AuraUtilityBarSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        this.zephyrTest('AutomationAPI', 'PROT-2148', 'FS_MAP_SF_STD_SLDS_UtilityBar', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'AuraUtilityBar.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [AuraAppPageData.Psi.scaffold, AuraAppPageData.Psi.new];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Map first name field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, AuraAppPageData.firstName.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AuraAppPageData.firstName.xpath);
                this.assertTestBuilderState(pageStructureInfo, AuraAppPageData.firstName.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do first name field', async () => {
                await this.modifyAddToTestCase(AuraAppPageData.firstName.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", AuraAppPageData.firstName.testCaseXML);
                this.assertExecutionStatus("0", AuraAppPageData.firstName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Last name field', async () => {
                pageStructureInfo = [AuraAppPageData.Psi.scaffold, AuraAppPageData.Psi.existing];
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AuraAppPageData.lastName.xpath);
                this.assertTestBuilderState(pageStructureInfo, AuraAppPageData.lastName.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Last name field', async () => {
                await this.modifyAddToTestCase(AuraAppPageData.lastName.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, AuraAppPageData.lastName.testCaseXML);
                this.assertExecutionStatus(testItemId, AuraAppPageData.lastName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Title field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AuraAppPageData.title.xpath);
                this.assertTestBuilderState(pageStructureInfo, AuraAppPageData.title.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Title field', async () => {
                await this.modifyAddToTestCase(AuraAppPageData.title.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, AuraAppPageData.title.testCaseXML);
                this.assertExecutionStatus(testItemId, AuraAppPageData.title.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map phone number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AuraAppPageData.phoneNumber.xpath);
                this.assertTestBuilderState(pageStructureInfo, AuraAppPageData.phoneNumber.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do phone number field', async () => {
                await this.modifyAddToTestCase(AuraAppPageData.phoneNumber.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, AuraAppPageData.phoneNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, AuraAppPageData.phoneNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AuraAppPageData.email.xpath);
                this.assertTestBuilderState(pageStructureInfo, AuraAppPageData.email.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Email field', async () => {
                await this.modifyAddToTestCase(AuraAppPageData.email.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, AuraAppPageData.email.testCaseXML);
                this.assertExecutionStatus(testItemId, AuraAppPageData.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Save Contact button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AuraAppPageData.save.Xpath);
                this.assertTestBuilderState(pageStructureInfo, AuraAppPageData.save.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Assert the Save Contact button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, AuraAppPageData.save.testCaseXML);
                this.assertExecutionStatus(testItemId, AuraAppPageData.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}
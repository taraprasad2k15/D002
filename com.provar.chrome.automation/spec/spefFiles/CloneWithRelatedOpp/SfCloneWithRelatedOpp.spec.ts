import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCloneWithRelatedOpp } from './SfCloneWithRelatedOpp';
import { join } from 'path';

export class SfCloneWithRelatedOppSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [SfCloneWithRelatedOpp.cloneWithRelatedPSI];
        const pageStructureInfoView: any[] = [SfCloneWithRelatedOpp.oppViewPSI];
        const pageStructureInfoClone: any[] = [SfCloneWithRelatedOpp.oppClonePSI];
        this.zephyrTest('AutomationAPI', "PROT-1228", 'FS_MAP_SF_LAYOUT_LX_CLONE WITH RELATED_OPPORTUNITY.SET', () => {
            beforeAll(async done => {
                const tcName = 'Clone With Related Opp.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Click on Show more Actions button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const showMA: WebElement = await this.findElement(remoteWebdriver, SfCloneWithRelatedOpp.showMoreActions.Xpath);
                await remoteWebdriver.executeScript('arguments[0].click();', showMA);
            });
            this.step('Mapping the Clone with Related button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.cloneWithRelated.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfCloneWithRelatedOpp.cloneWithRelated.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Clone with Related button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCloneWithRelatedOpp.cloneWithRelated.testCaseXML.click);
                this.assertExecutionStatus("0", SfCloneWithRelatedOpp.cloneWithRelated.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the first Record Checkbox field', async () => {
                const rowLocators = [
                    {
                        "label": "Item to clone (itemToClone)",
                        "selected": true,
                        "value": "Opportunity Contact Role",
                    }
                ];
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const checkbox: WebElement = await this.findElement(remoteWebdriver, SfCloneWithRelatedOpp.oppContactRole.XpathCheckbox, 10000);
                console.log(checkbox);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.oppContactRole.XpathCheckbox);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedOpp.oppContactRole.fieldDetails.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocators);
            });
            this.step('Check the first Record Checkbox field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCloneWithRelatedOpp.oppContactRole.testCaseXML.check);
                this.assertExecutionStatus("0", SfCloneWithRelatedOpp.oppContactRole.executionStatus.check, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the first Record Label', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.oppContactRole.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedOpp.oppContactRole.fieldDetails.text.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly3, response.testbuilderState);
            });
            this.step('Assert the first Record Checkbox Label', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOpp.oppContactRole.testCaseXML.readAssert);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOpp.oppContactRole.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the second Record Checkbox field', async () => {
                const rowLocators = [
                    {
                        "label": "Item to clone (itemToClone)",
                        "selected": true,
                        "value": "Opportunity Product",
                    }
                ];
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const checkbox: WebElement = await this.findElement(remoteWebdriver, SfCloneWithRelatedOpp.oppProduct.XpathCheckbox, 10000);
                console.log(checkbox);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.oppProduct.XpathCheckbox);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedOpp.oppProduct.fieldDetails.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocators);
            });
            this.step('Check the second Record Checkbox field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOpp.oppProduct.testCaseXML.check);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOpp.oppProduct.executionStatus.check, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the second Record Label', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.oppProduct.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedOpp.oppProduct.fieldDetails.text.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly3, response.testbuilderState);
            });
            this.step('Assert the second Record Checkbox Label', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOpp.oppProduct.testCaseXML.readAssert);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOpp.oppProduct.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the PageMessage Label', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.pageMessage.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedOpp.pageMessage.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the PageMessage Label', async () => {
                await this.modifyAddToTestCase(SfCloneWithRelatedOpp.pageMessage.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOpp.pageMessage.testCaseXML.readAssert);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOpp.pageMessage.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Next button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.nextButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCloneWithRelatedOpp.nextButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Next button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOpp.nextButton.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOpp.nextButton.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const oppName: WebElement = await this.findElement(remoteWebdriver, SfCloneWithRelatedOpp.oppName.Xpath, 10000);
                console.log(oppName);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.oppName.Xpath);
                this.assertTestBuilderState(pageStructureInfoClone, SfCloneWithRelatedOpp.oppName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Opportunity Name field', async () => {
                await this.modifyAddToTestCase(SfCloneWithRelatedOpp.oppName.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCloneWithRelatedOpp.oppName.testCaseXML.readAssert);
                this.assertExecutionStatus("0", SfCloneWithRelatedOpp.oppName.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.accName.Xpath);
                this.assertTestBuilderState(pageStructureInfoClone, SfCloneWithRelatedOpp.accName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfCloneWithRelatedOpp.accName.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOpp.accName.testCaseXML.readAssert);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOpp.accName.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Cancel button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.cancelButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoClone, SfCloneWithRelatedOpp.cancelButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Cancel Button', async () => {
                await this.modifyAddToTestCase({
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    }
                })
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOpp.cancelButton.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOpp.cancelButton.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Save button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCloneWithRelatedOpp.saveButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoClone, SfCloneWithRelatedOpp.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCloneWithRelatedOpp.saveButton.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfCloneWithRelatedOpp.saveButton.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}
import { WebDriver, WebElement, Actions, Key } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfConUpdateContactQA} from './ContactUpdateContactQA';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { remote } from 'electron';

export class SfContactUpdateContactQACXConsoleSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfo: any[] = [Standard.CurrentTabCXPsi, SfConUpdateContactQA.contactViewPsiCx];
        let windowUrl;
        let windowTitle;
        let windowHandles;
        let windowUrlMain;
        let windowTitleMain;
        let currHandle1;
        let frameId = ["(//iframe[contains(@name,'ext-comp')])[2]"];

        this.zephyrTest('AutomationAPI', 'PROT-2664', 'Console_QuickAction_VF', () => {
            beforeAll(async done => {
                const tcName = 'UpdateContactQA.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            // afterAll(async done => {
			// 	await this.endTestSession(done);
            // });
            it('Sleep for 10 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10 * 1000);
            }, 15 * 1000);
            this.step('Mapping Lead Source Picklist', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
               //const ele: WebElement = await this.findElement(remoteWebdriver, SfConUpdateContactQA.leadSource.Xpath, 20 * 1000);
                //await remoteWebdriver.executeScript("arguments[0].click()", ele);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.leadSource.Xpath,frameId);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.leadSource.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Lead Source Picklist for "Set By Value" Interaction ', async () => {
                this.modifyAddToTestCase(SfConUpdateContactQA.leadSource.interactionParameters.setByValue);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfConUpdateContactQA.leadSource.testCaseXML.setByValue);
                this.assertExecutionStatus("0", SfConUpdateContactQA.leadSource.executionStatus.setByValue, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Lead Source Picklist', async () => {
                await this.findElement(remoteWebdriver, SfConUpdateContactQA.leadSource.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.leadSource.Xpath,frameId);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.leadSource.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Lead Source Picklist for "Set By Index" Interaction ', async () => {
                this.modifyAddToTestCase(SfConUpdateContactQA.leadSource.interactionParameters.setByIndex);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.leadSource.testCaseXML.setByIndex);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.leadSource.executionStatus.setByIndex, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Lead Source Picklist', async () => {
                await this.findElement(remoteWebdriver, SfConUpdateContactQA.leadSource.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.leadSource.Xpath,frameId);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.leadSource.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Lead Source Picklist for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfConUpdateContactQA.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.leadSource.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping First Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.account.Xpath,frameId);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.account.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do First Name field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfConUpdateContactQA.account.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.account.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.account.executionStatus, response.runExecutionStatus.currentTestCase);
            });      
            this.step('Mapping Description field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.desc.Xpath,frameId);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.desc.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfConUpdateContactQA.desc.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.desc.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.desc.executionStatus, response.runExecutionStatus.currentTestCase);
            });  
            // this.step('Mapping Birth Date Field', async () => {
            //     const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.birthDate.Xpath,[SfConUpdateContactQA.primaryTab.Xpath]);
            //     this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.birthDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            // });
            // this.step('Add & Do Birth Date Field for "SF Today" interaction ', async () => {
            //     this.modifyAddToTestCase(SfConUpdateContactQA.birthDate.interactionParameters.sfToday);
            //     const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            //     const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
            //     await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.birthDate.testCaseXML.sfToday);
            //     this.assertExecutionStatus(testItemId, SfConUpdateContactQA.birthDate.executionStatus.sfToday, response.runExecutionStatus.currentTestCase);
            // });
            this.step('Mapping Birth Date Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.birthDate.Xpath,[SfConUpdateContactQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.birthDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Birth Date Field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfConUpdateContactQA.birthDate.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.birthDate.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.birthDate.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Mailing city field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.mailingcity.Xpath,frameId);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.mailingcity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Mailing City field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfConUpdateContactQA.mailingcity.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.mailingcity.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.mailingcity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name field', async () => {
                await this.findElement(remoteWebdriver, SfConUpdateContactQA.accountName.XpathText, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.accountName.XpathText,[SfConUpdateContactQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.accountName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field for "Set" Interaction ', async () => {
                await this.modifyAddToTestCase(SfConUpdateContactQA.accountName.interactionParameters.set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.accountName.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.accountName.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name field', async () => {
                await this.findElement(remoteWebdriver, SfConUpdateContactQA.accountName.XpathLookup, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.accountName.XpathLookup,[SfConUpdateContactQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.accountName.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field for "SF Lookup" Interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.accountName.testCaseXML.lookup);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.accountName.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account in Lookup', async () => {
                windowHandles = await remoteWebdriver.getAllWindowHandles();
                await remoteWebdriver.switchTo().window(windowHandles[1]);
                let windowUrl = await remoteWebdriver.getCurrentUrl();
                let windowTitle = await remoteWebdriver.getTitle();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.accountId.Xpath, ["//frame[@id='resultsFrame']"],windowUrl, windowTitle);
                const rowLocators = [
                        {
                                 "label": "Account Name (Name)",
                                 "selected": true,
                                 "value": /.*/,
                        },
                        {
                                "label": "Account Site (ACCOUNT_SITE)",
                                "selected": false,
                                "value": /.*/,
                        },
                        {
                                "label": "Account Owner Alias (CORE_USERS_ALIAS)",
                                "selected": false,
                                "value": /.*/,
                        },
                        {
                               "label": "Type (ACCOUNT_TYPE)",
                               "selected": false,
                               "value": /.*/,
                        },
                        
                ];
                this.assertTestBuilderState([Standard.notInAConsoleTabCXPsi, SfConUpdateContactQA.accountLookupPsiCX], SfConUpdateContactQA.accountId.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Account in Lookup', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                        'type': 'Icon-ExecutingChildPaused',
                        'executionStatus': 'Executing',
                        'successfulCount': 0
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.accountId.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.accountId.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Update Button', async () => {
                windowHandles = await remoteWebdriver.getAllWindowHandles();
                await remoteWebdriver.switchTo().window(windowHandles[0]);
                var windowUrl = await remoteWebdriver.getCurrentUrl();
                var windowTitle = await remoteWebdriver.getTitle();
               // await this.findElement(remoteWebdriver, SfConUpdateContactQA.update.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.update.Xpath,frameId,windowUrl, windowTitle);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.update.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Update Button for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfConUpdateContactQA.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
					'type': 'Icon-ExecutingPaused',
                    'executionStatus': 'Executing',
                    'successfulCount': 0
				};
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen',true)
                const newValues2: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues2, testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.update.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Update Button', async () => {
                //await this.findElement(remoteWebdriver, SfConUpdateContactQA.update.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConUpdateContactQA.update.Xpath,frameId,windowUrl, windowTitle);
                this.assertTestBuilderState(pageStructureInfo, SfConUpdateContactQA.update.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Update Button for "Click" interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConUpdateContactQA.update.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfConUpdateContactQA.update.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            
        });
    }
    
}

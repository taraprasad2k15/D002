import { WebDriver, WebElement, Browser } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { SfFlexiThreeRegionLV } from './SfFlexiThreeRegionLV';
import { remote } from 'electron';
import { RemoteWebDriver } from 'App/automationApi/RemoteWebDriver';

export class SfFlexiThreeRegionLVSpec extends BaseSpec {
    public runTest() {
        let remoteWebdriver: WebDriver;
        const debug: boolean = false;
        const assertInteractionParameters = {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        };
        let pageStructureInfoCase: any[] = [SfFlexiThreeRegionLV.casePSI];
        let pageStructureInfoContact: any[] = [SfFlexiThreeRegionLV.contactPSI];
        let rowLocatorCase = [
            {
                "label": "Case (CaseNumber)",
                "selected": true,
                "value": /[0-9]{8}/,
            },
            {
                "label": "Contact Name (ContactId)",
                "selected": false,
                "value": "",
            },
            {
                "label": "Subject (Subject)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Status (Status)",
                "selected": false,
                "value": "New"
            },
            {
                "label": "Priority (Priority)",
                "selected": false,
                "value": "High"
            },
            {
                "label": "Case Owner Alias (Owner_Alias)",
                "selected": false,
                "value": /.*/
            }
        ];
        let rowLocatorContact = [
            {
                "label": "Name (Name)",
                "selected": true,
                "value": "AutomationContact",
            },
            {
                "label": "Account Name (Account_Name)",
                "selected": false,
                "value": "AutomationAccount",
            },
            {
                "label": "Phone (Phone)",
                "selected": false,
                "value": "9990000999"
            },
            {
                "label": "Email (Email)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Title (Title)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Contact Owner Alias (Owner_Alias)",
                "selected": false,
                "value": /.*/
            }
        ];
        this.zephyrTest('AutomationAPI', 'PROT-1541', 'FS_MAP_SF_STD_LISTVIEW.AP_3REGION', () => {
            beforeAll(async done => {
                const tcName = 'FlexiThreeRegionLV.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            it('Sleep for 4 seconds for Page to Reload', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Mapping the Case Owner Alias Field for column assertion', async () => {
                remoteWebdriver = await this.getRemoteWebDriver('Regmain');
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiThreeRegionLV.caseOwnerAlias.Xpath);
                this.assertTestBuilderState(pageStructureInfoCase, SfFlexiThreeRegionLV.caseOwnerAlias.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorCase);
            });
            this.step('Add & Do Case Owner Alias field for column assertion', async () => {
                await this.modifyAddToTestCase(SfFlexiThreeRegionLV.caseOwnerAlias);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiThreeRegionLV.caseOwnerAlias.testCaseXML);
                this.assertExecutionStatus(testItemId, SfFlexiThreeRegionLV.caseOwnerAlias.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Case Number Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiThreeRegionLV.caseNumber.Xpath);
                this.assertTestBuilderState(pageStructureInfoCase, SfFlexiThreeRegionLV.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorCase);
            });
            this.step('Add & Do Case Number field', async () => {
                await this.modifyAddToTestCase(assertInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfFlexiThreeRegionLV.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfFlexiThreeRegionLV.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Name Field', async () => {
               await this.findElement(remoteWebdriver,SfFlexiThreeRegionLV.contactName.Xpath,20*1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiThreeRegionLV.contactName.Xpath);
                this.assertTestBuilderState(pageStructureInfoCase, SfFlexiThreeRegionLV.contactName.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorCase);
            });
            this.step('Add & Do Contact Name field', async () => {
                await this.modifyAddToTestCase(assertInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfFlexiThreeRegionLV.contactName.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfFlexiThreeRegionLV.contactName.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Priority Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiThreeRegionLV.priority.Xpath);
                this.assertTestBuilderState(pageStructureInfoCase, SfFlexiThreeRegionLV.priority.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorCase);
            });
            this.step('Add & Do Priority field', async () => {
                await this.modifyAddToTestCase(assertInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfFlexiThreeRegionLV.priority.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfFlexiThreeRegionLV.priority.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            //Commenting this section as the List View is not updating according to the newly created contact
            // this.step('Mapping the Contact Name Field', async () => {
            //     await this.findElement(remoteWebdriver,SfFlexiThreeRegionLV.name.Xpath,20*1000);
            //     const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiThreeRegionLV.name.Xpath);
            //     this.assertTestBuilderState(pageStructureInfoContact, SfFlexiThreeRegionLV.name.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorContact);
            // });
            // this.step('Add & Do Contact Name field', async () => {
            //     await this.modifyAddToTestCase(assertInteractionParameters);
            //     const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            //     const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
			// 	const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
			// 	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
			// 	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
			// 	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
			// 	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
			// 	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
			// 	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
            //     await this.assertTestCaseXML("0", SfFlexiThreeRegionLV.name.testCaseXML);
            //     this.assertExecutionStatus("0", SfFlexiThreeRegionLV.name.executionStatus, response.runExecutionStatus.currentTestCase);
            // });
            // this.step('Mapping the Phone Field', async () => {
            //     const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiThreeRegionLV.phone.Xpath);
            //     this.assertTestBuilderState(pageStructureInfoContact, SfFlexiThreeRegionLV.phone.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorContact);
            // });
            // this.step('Add & Do Phone field', async () => {
            //     await this.modifyAddToTestCase(assertInteractionParameters);
            //     const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            //     const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
            //     await this.assertTestCaseXML(testItemId, SfFlexiThreeRegionLV.phone.testCaseXML);
            //     this.assertExecutionStatus(testItemId, SfFlexiThreeRegionLV.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            // });
            // this.step('Mapping the Email Field', async () => {
            //     const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiThreeRegionLV.email.Xpath);
            //     this.assertTestBuilderState(pageStructureInfoContact, SfFlexiThreeRegionLV.email.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorContact);
            // });
            // this.step('Add & Do Email field', async () => {
            //     await this.modifyAddToTestCase(assertInteractionParameters);
            //     const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            //     const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
            //     await this.assertTestCaseXML(testItemId, SfFlexiThreeRegionLV.email.testCaseXML);
            //     this.assertExecutionStatus(testItemId, SfFlexiThreeRegionLV.email.executionStatus, response.runExecutionStatus.currentTestCase);
            // });
            // this.step('Mapping the Contact Owner Alias Field for column assertion', async () => {
            //     const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiThreeRegionLV.contactOwnerAlias.Xpath);
            //     this.assertTestBuilderState(pageStructureInfoContact, SfFlexiThreeRegionLV.contactOwnerAlias.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorContact);
            // });
            // this.step('Add & Do Contact Owner Alias field for column assertion', async () => {
            //     await this.modifyAddToTestCase(SfFlexiThreeRegionLV.contactOwnerAlias);
            //     const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            //     const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
			// 	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
            //     const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
			// 	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
			// 	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
			// 	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
            //     await this.assertTestCaseXML(testItemId, SfFlexiThreeRegionLV.contactOwnerAlias.testCaseXML);
            //     this.assertExecutionStatus(testItemId, SfFlexiThreeRegionLV.contactOwnerAlias.executionStatus, response.runExecutionStatus.currentTestCase);
            // });
      
        });
    }
}
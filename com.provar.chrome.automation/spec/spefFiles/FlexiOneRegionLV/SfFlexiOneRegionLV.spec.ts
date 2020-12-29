import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfFlexiOneRegionLV } from './SfFlexiOneRegionLV';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfFlexiOneRegionLVSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const assertInteractionParameters = {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        };
        let pageStructureInfo: any[] = [SfFlexiOneRegionLV.PSI];
        let pageStructureInfoEdit: any[] = [SfFlexiOneRegionLV.editPSI];
        let pageStructureInfoCO: any[] = [SfFlexiOneRegionLV.changeOwnerPSI];
        let rowLocator = [
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
        const assertColumnInteractionParameters = {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: false,
                    assertColumnAttributes: true,
                    extractColumnAttributes: true,
                    expectedAttributes: {
                        columnHeaderText: {
                            value: 'Case Number',
                            caseSensitive: true,
                            normalise: true,
                        },
                        columnVisible: {
                            value: true,
                        },
                    },
                },
            }
        };
        this.zephyrTest('AutomationAPI', 'PROT-1542', 'FS_MAP_SF_STD_LISTVIEW.AP_1REGION', () => {
            beforeAll(async done => {
                const tcName = 'FlexiOneRegionLV.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping New Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfCommonFIeld.newButton.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.newButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, SfFlexiOneRegionLV.newCase.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button,  response.testbuilderState);
            });
            this.step('Add & Do New Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiOneRegionLV.newCase.testCaseXML);
                this.assertExecutionStatus(testItemId, SfFlexiOneRegionLV.newCase.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Click Cancel via remotedriver', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
                await element.click();
                expect(true).toEqual(true);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Mapping List Search Box', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.listSearchBox.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.listSearchBox, Standard.interaction.set,Standard.applicableInteractions.Picklist.enterableMode,  response.testbuilderState);
            });
            this.step('Add & Do List Search Box', async () => {
                await this.modifyAddToTestCase(SfFlexiOneRegionLV.listSearchBox.interactionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiOneRegionLV.listSearchBox.testCaseXML);
                this.assertExecutionStatus(testItemId, SfFlexiOneRegionLV.listSearchBox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Case Number Field for column assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiOneRegionLV.caseNumber.Xpath);
                this.assertTestBuilderState(pageStructureInfo, SfFlexiOneRegionLV.caseNumber.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Case Number field for column assertion', async () => {
                await this.modifyAddToTestCase(assertColumnInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiOneRegionLV.caseNumber.testCaseXMLAssertColumn);
                this.assertExecutionStatus(testItemId, SfFlexiOneRegionLV.caseNumber.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select Row', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiOneRegionLV.selectRow.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.selectRow, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Select Row Checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiOneRegionLV.selectRow.testCaseXML);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                this.assertExecutionStatus(testItemId, SfFlexiOneRegionLV.selectRow.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Case Number Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiOneRegionLV.caseNumber.Xpath);
                this.assertTestBuilderState(pageStructureInfo, SfFlexiOneRegionLV.caseNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Case Number field', async () => {
                await this.modifyAddToTestCase(assertInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfFlexiOneRegionLV.caseNumber.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfFlexiOneRegionLV.caseNumber.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Name Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiOneRegionLV.contactName.Xpath);
                this.assertTestBuilderState(pageStructureInfo, SfFlexiOneRegionLV.contactName.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Contact Name field', async () => {
                await this.modifyAddToTestCase(assertInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfFlexiOneRegionLV.contactName.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfFlexiOneRegionLV.contactName.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Priority Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiOneRegionLV.priority.Xpath);
                this.assertTestBuilderState(pageStructureInfo, SfFlexiOneRegionLV.priority.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Priority field', async () => {
                await this.modifyAddToTestCase(assertInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfFlexiOneRegionLV.priority.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfFlexiOneRegionLV.priority.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Click on Show more actions dropdown', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                expect(true).toEqual(true);
                const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[(normalize-space(.)='Show More') or (normalize-space(.)='Show Actions')]//a)[1]");
				remoteWebdriver.executeScript("arguments[0].click();", element);
            });
            this.step('Mapping Edit action button', async () => {
                await this.findElement(remoteWebdriver, SfCommonFIeld.editActionButton.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.editActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Edit button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfCommonFIeld.editActionButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.editActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Mapping Cancel button', async () => {
                await this.findElement(remoteWebdriver, SfFlexiOneRegionLV.cancelButton.XpathEdit);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiOneRegionLV.cancelButton.XpathEdit);
                this.assertTestBuilderState(pageStructureInfoEdit, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button,  response.testbuilderState);
            });
            this.step('Add & Do Cancel button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfFlexiOneRegionLV.cancelButton.testCaseXMLEdit);
                this.assertExecutionStatus("0", SfFlexiOneRegionLV.cancelButton.executionStatusEdit, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Mapping Change Owner action button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver('Regmain');
                const element: WebElement = await this.findElement(remoteWebdriver, "//li[@class='oneActionsDropDown']//span[(.)='Show more actions']/ancestor::a", 15000);
                await remoteWebdriver.executeScript('arguments[0].click();', element);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiOneRegionLV.changeOwnerButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.changeOwnerActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Change Owner button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML('0', SfFlexiOneRegionLV.changeOwnerButton.testCaseXML);
                this.assertExecutionStatus('0', SfFlexiOneRegionLV.changeOwnerButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Mapping Cancel button', async () => {
                await this.findElement(remoteWebdriver, SfFlexiOneRegionLV.cancelButton.XpathCO);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiOneRegionLV.cancelButton.XpathCO);
                this.assertTestBuilderState(pageStructureInfoCO, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Cancel button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfFlexiOneRegionLV.cancelButton.testCaseXMLCO);
                this.assertExecutionStatus("0", SfFlexiOneRegionLV.cancelButton.executionStatusCO, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Mapping Delete action button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver('Regmain');
                const element: WebElement = await this.findElement(remoteWebdriver, "//li[@class='oneActionsDropDown']//span[(.)='Show more actions']", 15000);
                await remoteWebdriver.executeScript('arguments[0].click();', element);
                await this.findElement(remoteWebdriver, SfFlexiOneRegionLV.deleteButton.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiOneRegionLV.deleteButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.deleteActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Delete button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML('0', SfFlexiOneRegionLV.deleteButton.testCaseXML);
                this.assertExecutionStatus('0', SfFlexiOneRegionLV.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Click Cancel via remotedriver', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
                await element.click();
                expect(true).toEqual(true);
            });
        });
    }
}
import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfFlexiHomeLV } from './SfFlexiHomeLV';
import { SfCommonFIeld } from '../SfCommonField';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';

export class SfFlexiHomeLVSpec extends BaseSpec {
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
        let pageStructureInfo: any[] = [SfFlexiHomeLV.PSI];
        let pageStructureInfoEdit: any[] = [SfFlexiHomeLV.editPSI];
        let pageStructureInfoCO: any[] = [SfFlexiHomeLV.changeOwnerPSI];
        let rowLocator = [
            {
                "label": "Name (Name)",
                "selected": true,
                "value": /AutomationLead[a-zA-Z]{4}/,
            },
            {
                "label": "Company (Company)",
                "selected": false,
                "value": /AutomationCompany[a-zA-Z]{4}/,
            },
            {
                "label": "State/Province (State)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Phone (Phone)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Email (Email)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Rating (Rating)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Unread By Owner (IsUnreadByOwner)",
                "selected": false,
                "value": "true"
            },
            {
                "label": "Lead Status (Status)",
                "selected": false,
                "value": "New"
            }
        ];
        let rowLocatorPE = [
            {
                "label": "Name (Name)",
                "selected": true,
                "value": /AutomationLead[a-zA-Z]{4}/,
            },
            {
                "label": "Company (Company)",
                "selected": false,
                "value": /AutomationCompany[a-zA-Z]{4}/,
            },
            {
                "label": "State/Province (State)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Phone (Phone)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Email (Email)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Rating (Rating)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Unread By Owner (IsUnreadByOwner)",
                "selected": false,
                "value": "false"
            },
            {
                "label": "Lead Status (Status)",
                "selected": false,
                "value": "New"
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
                            value: 'Name',
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
        this.zephyrTest('AutomationAPI', 'PROT-1498', 'FS_MAP_SF_STD_LISTVIEW.HP', () => {
            beforeAll(async done => {
                const tcName = 'FlexiHomeLV.testcase';
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
                this.assertTestBuilderState(pageStructureInfo, Standard.newButton, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do New Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCommonFIeld.newButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
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
                this.assertTestBuilderState(pageStructureInfo, Standard.listSearchBox, Standard.interaction.set,Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do List Search Box', async () => {
                await this.modifyAddToTestCase(SfFlexiHomeLV.listSearchBox.interactionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiHomeLV.listSearchBox.testCaseXML);
                this.assertExecutionStatus(testItemId, SfFlexiHomeLV.listSearchBox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name Field for column assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeLV.name.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.name, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Name field for column assertion', async () => {
                await this.modifyAddToTestCase(assertColumnInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiHomeLV.name.testCaseXMLAssertColumn);
                this.assertExecutionStatus(testItemId, SfFlexiHomeLV.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select Row', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeLV.selectRow.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.selectRow, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Select Row Checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfFlexiHomeLV.selectRow.testCaseXML);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                this.assertExecutionStatus(testItemId, SfFlexiHomeLV.selectRow.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeLV.name.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.name, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Name field', async () => {
                await this.modifyAddToTestCase(assertInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfFlexiHomeLV.name.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfFlexiHomeLV.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Company Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeLV.company.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.company2, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Company field', async () => {
                await this.modifyAddToTestCase(assertInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfFlexiHomeLV.company.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfFlexiHomeLV.company.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeLV.email.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.email2, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Email field', async () => {
                await this.modifyAddToTestCase(assertInteractionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfFlexiHomeLV.email.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfFlexiHomeLV.email.executionStatusAssert, response.runExecutionStatus.currentTestCase);
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
                const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show More'])[1]|//span[text()='Show Actions']/..");
                await element.click();
            });
            this.step('Mapping Edit action button', async () => {
                await this.findElement(remoteWebdriver, SfCommonFIeld.editActionButton.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.editActionButton, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
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
                await this.findElement(remoteWebdriver, SfFlexiHomeLV.cancelButton.XpathEdit);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeLV.cancelButton.XpathEdit);
                this.assertTestBuilderState(pageStructureInfoEdit, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML("0", SfFlexiHomeLV.cancelButton.testCaseXMLEdit);
                this.assertExecutionStatus("0", SfFlexiHomeLV.cancelButton.executionStatusEdit, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Mapping Change Owner action button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver('Regmain');
                const element: WebElement = await this.findElement(remoteWebdriver, "//a[contains(@class,'rowActionsPlaceHolder')]//span[contains((.),'Show More') or text()='Show Actions']", 15000);
                await remoteWebdriver.executeScript('arguments[0].click();', element);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeLV.changeOwnerButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.changeOwnerActionButton, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState, rowLocatorPE);
            });
            this.step('Add & Do Change Owner button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML('0', SfFlexiHomeLV.changeOwnerButton.testCaseXML);
                this.assertExecutionStatus('0', SfFlexiHomeLV.changeOwnerButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4000);
            });
            this.step('Mapping Cancel button', async () => {
                await this.findElement(remoteWebdriver, SfFlexiHomeLV.cancelButton.XpathCO);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeLV.cancelButton.XpathCO);
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
                await this.assertTestCaseXML("0", SfFlexiHomeLV.cancelButton.testCaseXMLCO);
                this.assertExecutionStatus("0", SfFlexiHomeLV.cancelButton.executionStatusCO, response.runExecutionStatus.currentTestCase);
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
                await this.findElement(remoteWebdriver, SfFlexiHomeLV.deleteButton.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfFlexiHomeLV.deleteButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.deleteActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocatorPE);
            });
            this.step('Add & Do Delete button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML('0', SfFlexiHomeLV.deleteButton.testCaseXML);
                this.assertExecutionStatus('0', SfFlexiHomeLV.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
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
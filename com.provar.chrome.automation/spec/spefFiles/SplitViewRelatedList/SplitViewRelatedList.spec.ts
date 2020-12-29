import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { SpliModeRelatedListData } from './SplitViewRelatedListData';

export class SplitModeRelatedListSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoRecordType: any[];
        let rowLocator = [
            {
                "label": "Contact Name (FULL_NAME)",
                "selected": true,
                "value": "Contact1"
            },
            {
                "label": "Title (CONTACT_TITLE)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Email (CONTACT_EMAIL)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Phone (CONTACT_PHONE1)",
                "selected": false,
                "value": ""
            },
        ];
        let rowLocator1 = [
            {
                "label": "Contact Name (FULL_NAME)",
                "selected": true,
                "value": "Contact1"
            },
            {
                "label": "Title (CONTACT_TITLE)",
                "selected": false,
                "value": "Title1"
            },
            {
                "label": "Email (CONTACT_EMAIL)",
                "selected": false,
                "value": "mail@mail.com"
            },
            {
                "label": "Phone (CONTACT_PHONE1)",
                "selected": false,
                "value": "123456789"
            },
        ];
        this.zephyrTest('AutomationAPI', 'PROT-2621', 'FS_MAP_SF_CONSOLE_LX_RL.STD.SPLIT', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Account.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Standard.CurrentTabPsi, SpliModeRelatedListData.PSI];
                pageStructureInfoRecordType = [Standard.CurrentTabPsi,Standard.recordTypePsi];

            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
            	await this.endTestSession(done);
            });
            this.step('Mapping New Button', async () => {
                let value1: string
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const split: WebElement = await this.findElement(remoteWebdriver, "//button[contains(@class,'split-toggle')]/..", 20 * 1000);
                await split.getAttribute("class").then((expand) => {
                    value1 = expand;
                });
                if (value1 == "main-content active fullRight") {
                    const button: WebElement = await this.findElement(remoteWebdriver, "//button[contains(@class,'split-toggle')]", 20 * 1000);
                    await remoteWebdriver.executeScript("arguments[0].click();", button);
                } else {
                    console.log("The screen is already in split mode");
                }
                await remoteWebdriver.executeScript("arguments[0].click();", split);
                const relatedTab: WebElement = await this.findElement(remoteWebdriver, "//li[@title='Related']", 20 * 1000);
                await remoteWebdriver.executeScript("arguments[0].click();", relatedTab);
                await this.findElement(remoteWebdriver, SpliModeRelatedListData.newButton.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.newButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.newButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Perform Click on New Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SpliModeRelatedListData.newButton.testCaseXML);
                this.assertExecutionStatus("0", SpliModeRelatedListData.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Record Type', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, SpliModeRelatedListData.recordType.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.recordType.xpath);
                this.assertTestBuilderState(pageStructureInfoRecordType, SpliModeRelatedListData.recordType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do on Record Type', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.recordType.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SpliModeRelatedListData.recordType.testCaseXML);
                this.assertExecutionStatus("0", SpliModeRelatedListData.recordType.executionStatus, response.runExecutionStatus.currentTestCase);

            });
            this.step('Mapping Next Button ', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.nextButton.xpath);
                this.assertTestBuilderState(pageStructureInfoRecordType, SpliModeRelatedListData.nextButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do on Next Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.nextButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.nextButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Last Name field', async () => {
                await this.findElement(remoteWebdriver, SpliModeRelatedListData.lastName.xpath1, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.lastName.xpath1);
                this.assertTestBuilderState([Standard.CurrentTabPsi,SpliModeRelatedListData.PSIContactNew], SpliModeRelatedListData.lastName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Last Name field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.lastName.interactionParameters.Set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SpliModeRelatedListData.lastName.testCaseXML);
                this.assertExecutionStatus("0", SpliModeRelatedListData.lastName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button', async () => {
             //   await this.findElement(remoteWebdriver, SpliModeRelatedListData.saveButton.xpath, 20*1000)
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.saveButton.xpath1);
                this.assertTestBuilderState([Standard.CurrentTabPsi,SpliModeRelatedListData.PSIContactNew], Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Close Secondary Tab', async done => {
                expect(true).toEqual(true);
                const element: WebElement = await this.findElement(remoteWebdriver, "(//button[contains(@title,'Close')])[2]", 10000);
                await remoteWebdriver.executeScript("arguments[0].click();", element);
                setTimeout(async () => {
                    done();
                }, 4000);
            }); 
            this.step('Mapping Contact Name field', async () => {
                await this.findElement(remoteWebdriver, SpliModeRelatedListData.contactName.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.contactName.xpath);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.contactName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Add & Do Contact Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SpliModeRelatedListData.contactName.testCaseXML);
                this.assertExecutionStatus("0", SpliModeRelatedListData.contactName.executionStatus, response.runExecutionStatus.currentTestCase);
                remoteWebdriver.navigate().back();
            });
            it('Sleep for 3 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 3000);
            });
            this.step('Mapping Title field for blank value assertion', async () => {
                await this.findElement(remoteWebdriver, SpliModeRelatedListData.title.xpathViewScreen, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.title.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.title.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do blank title field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.title.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.title.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.title.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Email field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.email.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.email.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do blank email field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.email.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.email.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.phone.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.phone.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do blank phone', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.phone.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Edit Button', async () => {
                const dropDown: WebElement = await this.findElement(remoteWebdriver, SpliModeRelatedListData.dropdownXpath, 10000);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
                await this.findElement(remoteWebdriver, SpliModeRelatedListData.editButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.editButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assertion on Edit Button', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.editButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.editButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Button', async () => {
                const dropdown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'previewMode MEDIUM forceRelatedListPreview')]//a//lightning-icon/..", 20 * 1000);
                let value1:string;
                await dropdown.getAttribute("aria-expanded").then((expand) => {
                    value1 = expand;
                });
                if (value1 == "false") {
                    const button: WebElement = await this.findElement(remoteWebdriver, SpliModeRelatedListData.dropdownXpath, 20 * 1000);
                    await remoteWebdriver.executeScript("arguments[0].click();", button);
                } else {
                    console.log("The dropdown is already openned");
                }
                await this.findElement(remoteWebdriver, SpliModeRelatedListData.deleteButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.deleteButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assertion on Delete Button', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.deleteButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.deleteButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Add to Campaign Button', async () => {
                const dropdown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'previewMode MEDIUM forceRelatedListPreview')]//a//lightning-icon/..", 20 * 1000);
                let value1:string;
                await dropdown.getAttribute("aria-expanded").then((expand) => {
                    value1 = expand;
                });
                if (value1 == "false") {
                    const button: WebElement = await this.findElement(remoteWebdriver, SpliModeRelatedListData.dropdownXpath, 20 * 1000);
                    await remoteWebdriver.executeScript("arguments[0].click();", button);
                } else {
                    console.log("The dropdown is already openned");
                }
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.addToCampaignButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.addToCampaignButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Read Assertion on Add to Campaign Button', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.addToCampaignButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.addToCampaignButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.addToCampaignButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Button', async () => {
                const dropdown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'previewMode MEDIUM forceRelatedListPreview')]//a//lightning-icon/..", 20 * 1000);
                let value1:string;
                await dropdown.getAttribute("aria-expanded").then((expand) => {
                    value1 = expand;
                });
                if (value1 == "false") {
                    const button: WebElement = await this.findElement(remoteWebdriver, SpliModeRelatedListData.dropdownXpath, 20 * 1000);
                    await remoteWebdriver.executeScript("arguments[0].click();", button);
                } else {
                    console.log("The dropdown is already openned");
                }
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.deleteButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click and cancel on Delete Button', async () => {
                this.modifyAddToTestCase(SpliModeRelatedListData.deleteButton.interactionParameters.clickAndCancel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.deleteButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.deleteButton.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Add to Campaign Button', async () => {
                const dropDown: WebElement = await this.findElement(remoteWebdriver, SpliModeRelatedListData.dropdownXpath, 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
                const dropdown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'previewMode MEDIUM forceRelatedListPreview')]//a//lightning-icon/..", 20 * 1000);
                let value1:string;
                await dropdown.getAttribute("aria-expanded").then((expand) => {
                    value1 = expand;
                });
                if (value1 == "false") {
                    const button: WebElement = await this.findElement(remoteWebdriver, SpliModeRelatedListData.dropdownXpath, 20 * 1000);
                    await remoteWebdriver.executeScript("arguments[0].click();", button);
                } else {
                    console.log("The dropdown is already openned");
                }
                await this.findElement(remoteWebdriver, SpliModeRelatedListData.addToCampaignButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.addToCampaignButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.addToCampaignButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click on Add to Campaign Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.addToCampaignButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.addToCampaignButton.executionStatus1, response.runExecutionStatus.currentTestCase);
                const cancelButton: WebElement = await this.findElement(remoteWebdriver, "//span[normalize-space()='Cancel']", 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", cancelButton);
                await remoteWebdriver.executeScript("arguments[0].click();", cancelButton);
            });
            it('Sleep for 3 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 3000);
            });
            this.step('Mapping Edit Button', async () => {
                const dropDown: WebElement = await this.findElement(remoteWebdriver, SpliModeRelatedListData.dropdownXpath, 20000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);

                await this.findElement(remoteWebdriver, SpliModeRelatedListData.editButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.editButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click on Edit Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.editButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.editButton.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Title field', async () => {
                await this.findElement(remoteWebdriver, SpliModeRelatedListData.title.xpath1, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.title.xpath1);
                this.assertTestBuilderState([Standard.CurrentTabPsi,SpliModeRelatedListData.PSIContactEdit], SpliModeRelatedListData.title.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Title field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.title.interactionParameters.Set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
            	const newValueswithrow: any = {
            		'type': 'Icon-Successful',
            		'executionStatus': 'Executed',
            		'successfulCount': 1
            	};
            	this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValueswithrow, testItemIdwithrow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SpliModeRelatedListData.title.testCaseXML1);
                this.assertExecutionStatus("0", SpliModeRelatedListData.title.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.email.xpath1);
                this.assertTestBuilderState([Standard.CurrentTabPsi,SpliModeRelatedListData.PSIContactEdit], SpliModeRelatedListData.email.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Email field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.email.interactionParameters.Set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.email.testCaseXML1);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.email.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.phone.xpath1);
                this.assertTestBuilderState([Standard.CurrentTabPsi,SpliModeRelatedListData.PSIContactEdit], SpliModeRelatedListData.phone.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.phone.interactionParameters.Set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.phone.testCaseXML1);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.phone.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button on Edit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.saveButton.xpath1);
                this.assertTestBuilderState([Standard.CurrentTabPsi,SpliModeRelatedListData.PSIContactEdit], Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Title field', async () => {
                await this.findElement(remoteWebdriver, SpliModeRelatedListData.title.xpathViewScreen, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.title.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.title.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing Value Assertion on Title field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.title.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SpliModeRelatedListData.title.testCaseXML2);
                this.assertExecutionStatus("0", SpliModeRelatedListData.title.executionStatus2, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.email.xpathViewScreen1);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.email.fieldDetails1, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing value assertion on email field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.email.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.email.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.phone.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.phone.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing value assertion on phone field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.phone.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Title field', async () => {
                await this.findElement(remoteWebdriver, SpliModeRelatedListData.title.xpathViewScreen, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.title.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.title.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on title field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.title.interactionParameters.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdwithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithRow);
                const testItemIdwithScreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues1: any = {
                    'type': 'Icon-ExecutingPaused',
                    'executionStatus': 'Executing',
                    'successfulCount': 0
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues1, testItemIdwithScreen);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.title.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.title.executionStatus, response.runExecutionStatus.currentTestCase);
            });  
            this.step('Mapping Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.email.xpathViewScreen1);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.email.fieldDetails1, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on email field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.email.interactionParameters.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.email.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.phone.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.phone.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on phone field', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.phone.interactionParameters.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.phone.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Header Link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.headerText.xpath);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.headerText.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
            });
            this.step('Performing total and display row count assertion', async () => {
                await this.modifyAddToTestCase(SpliModeRelatedListData.headerText.interactions);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.headerText.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.headerText.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping View All Link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SpliModeRelatedListData.viewAll.xpath);
                this.assertTestBuilderState(pageStructureInfo, SpliModeRelatedListData.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Add & Do on View All', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SpliModeRelatedListData.viewAll.testCaseXML);
                this.assertExecutionStatus(testItemId, SpliModeRelatedListData.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
                const button: WebElement = await this.findElement(remoteWebdriver, "//button[contains(@class,'split-toggle')]", 20 * 1000);
                await remoteWebdriver.executeScript("arguments[0].click();", button);
            });
        });
    }
};

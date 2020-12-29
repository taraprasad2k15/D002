import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { Flexi3ColRelatedListSingle } from './Flexi3ColRelatedListSingle';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';

export class Flexi3ColRelatedListSingleSpec extends BaseSpec {
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
        this.zephyrTest('AutomationAPI', 'PROT-1708', 'FS_MAP_SF_STD_RLS.RP.3Col', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'FlexiRelatedListSingle.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Flexi3ColRelatedListSingle.PSI];
                pageStructureInfoRecordType = [Standard.recordTypePsi];

            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
				await this.endTestSession(done);
			});
            this.step('Mapping New Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element: WebElement = await this.findElement(remoteWebdriver, "//span[normalize-space(.)='Show actions for this object']/..", 20*1000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
                await remoteWebdriver.executeScript("arguments[0].click();", element);
                await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.newButton.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.newButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.newButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML("0", Flexi3ColRelatedListSingle.newButton.testCaseXML);
                this.assertExecutionStatus("0", Flexi3ColRelatedListSingle.newButton.executionStatus, response.runExecutionStatus.currentTestCase);

            });
            this.step('Mapping Record Type', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.recordType.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.recordType.xpath);
                this.assertTestBuilderState(pageStructureInfoRecordType, Flexi3ColRelatedListSingle.recordType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do on Record Type', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", Flexi3ColRelatedListSingle.recordType.testCaseXML);
                this.assertExecutionStatus("0", Flexi3ColRelatedListSingle.recordType.executionStatus, response.runExecutionStatus.currentTestCase);

            });
            this.step('Mapping Next Button ', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.nextButton.xpath);
                this.assertTestBuilderState(pageStructureInfoRecordType, Flexi3ColRelatedListSingle.nextButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do on Next Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.nextButton.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.nextButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Last Name field', async () => {
                await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.lastName.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.lastName.xpath);
                this.assertTestBuilderState([Flexi3ColRelatedListSingle.PSIContactNew], Flexi3ColRelatedListSingle.lastName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Last Name field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.lastName.interactionParameters.Set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", Flexi3ColRelatedListSingle.lastName.testCaseXML);
                this.assertExecutionStatus("0", Flexi3ColRelatedListSingle.lastName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button', async () => {
             //   await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.saveButton.xpath, 20*1000)
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.saveButton.xpath);
                this.assertTestBuilderState([Flexi3ColRelatedListSingle.PSIContactNew], Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Contact Name field', async () => {
                await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.contactName.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.contactName.xpath);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.contactName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
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
                await this.assertTestCaseXML("0", Flexi3ColRelatedListSingle.contactName.testCaseXML);
                this.assertExecutionStatus("0", Flexi3ColRelatedListSingle.contactName.executionStatus, response.runExecutionStatus.currentTestCase);
                remoteWebdriver.navigate().back();
            });
            it('Sleep for 3 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 3000);
            });
            this.step('Mapping Title field for blank value assertion', async () => {
                await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.title.xpathViewScreen, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.title.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.title.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do blank title field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.title.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.title.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.title.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Email field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.email.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.email.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do blank email field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.email.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.email.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.phone.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.phone.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do blank phone', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.phone.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Edit Button', async () => {
                const dropDown: WebElement = await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.dropdownXpath, 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
                await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.editButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.editButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assertion on Edit Button', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.editButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.editButton.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.deleteButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assertion on Delete Button', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.deleteButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.deleteButton.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Add to Campaign Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.addToCampaignButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.addToCampaignButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Read Assertion on Add to Campaign Button', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.addToCampaignButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.addToCampaignButton.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.addToCampaignButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.deleteButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click and cancel on Delete Button', async () => {
                this.modifyAddToTestCase(Flexi3ColRelatedListSingle.deleteButton.interactionParameters.clickAndCancel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.deleteButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.deleteButton.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Add to Campaign Button', async () => {
                const dropDown: WebElement = await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.dropdownXpath, 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
                await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.addToCampaignButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.addToCampaignButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.addToCampaignButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click on Add to Campaign Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.addToCampaignButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.addToCampaignButton.executionStatus1, response.runExecutionStatus.currentTestCase);
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
                const dropDown: WebElement = await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.dropdownXpath, 20000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);

                await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.editButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.editButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click on Edit Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.editButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.editButton.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Title field', async () => {
                await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.title.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.title.xpath);
                this.assertTestBuilderState([Flexi3ColRelatedListSingle.PSIContactEdit], Flexi3ColRelatedListSingle.title.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Title field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.title.interactionParameters.Set)
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
                await this.assertTestCaseXML("0", Flexi3ColRelatedListSingle.title.testCaseXML1);
                this.assertExecutionStatus("0", Flexi3ColRelatedListSingle.title.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.email.xpathEditScreen);
                this.assertTestBuilderState([Flexi3ColRelatedListSingle.PSIContactEdit], Flexi3ColRelatedListSingle.email.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Email field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.email.interactionParameters.Set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.email.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.email.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.phone.xpathEditScreen);
                this.assertTestBuilderState([Flexi3ColRelatedListSingle.PSIContactEdit], Flexi3ColRelatedListSingle.phone.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.phone.interactionParameters.Set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.phone.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.phone.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button on Edit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.saveButton.xpath);
                this.assertTestBuilderState([Flexi3ColRelatedListSingle.PSIContactEdit], Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Title field', async () => {
                await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.title.xpathViewScreen, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.title.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.title.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing Value Assertion on Title field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.title.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", Flexi3ColRelatedListSingle.title.testCaseXML2);
                this.assertExecutionStatus("0", Flexi3ColRelatedListSingle.title.executionStatus2, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.email.xpathViewScreen1);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.email.fieldDetails1, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing value assertion on email field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.email.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.email.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.phone.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.phone.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing value assertion on phone field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.phone.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Title field', async () => {
                await this.findElement(remoteWebdriver, Flexi3ColRelatedListSingle.title.xpathViewScreen, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.title.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.title.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on title field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.title.interactionParameters.columnAssertion);
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
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.title.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.title.executionStatus, response.runExecutionStatus.currentTestCase);
            });  
            this.step('Mapping Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.email.xpathViewScreen1);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.email.fieldDetails1, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on email field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.email.interactionParameters.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.email.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.phone.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.phone.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on phone field', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.phone.interactionParameters.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.phone.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Header Link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.headerText.xpath);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.headerText.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
            });
            this.step('Performing total and display row count assertion', async () => {
                await this.modifyAddToTestCase(Flexi3ColRelatedListSingle.headerText.interactions);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.headerText.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.headerText.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping View All Link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColRelatedListSingle.viewAll.xpath);
                this.assertTestBuilderState(pageStructureInfo, Flexi3ColRelatedListSingle.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Add & Do on View All', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColRelatedListSingle.viewAll.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColRelatedListSingle.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
};

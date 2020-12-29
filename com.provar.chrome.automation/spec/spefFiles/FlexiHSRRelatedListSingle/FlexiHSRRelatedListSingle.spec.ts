import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { FlexiHSRRelatedListSingle } from './FlexiHSRRelatedListSingle';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';

export class FlexiHSRRelatedListSingleSpec extends BaseSpec {
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
        this.zephyrTest('AutomationAPI', 'PROT-1740', 'FS_MAP_SF_STD_RLS.RP.HSR', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'FlexiRelatedListSingle.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [FlexiHSRRelatedListSingle.PSI];
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
                const element1: WebElement = await this.findElement(remoteWebdriver, "//a[normalize-space()='Related Single']",10*1000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element1);
                await remoteWebdriver.executeScript("arguments[0].click();", element1);
                await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.newButton.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.newButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.newButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML("0", FlexiHSRRelatedListSingle.newButton.testCaseXML);
                this.assertExecutionStatus("0", FlexiHSRRelatedListSingle.newButton.executionStatus, response.runExecutionStatus.currentTestCase);

            });
            this.step('Mapping Record Type', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.recordType.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.recordType.xpath);
                this.assertTestBuilderState(pageStructureInfoRecordType, FlexiHSRRelatedListSingle.recordType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
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
                await this.assertTestCaseXML("0", FlexiHSRRelatedListSingle.recordType.testCaseXML);
                this.assertExecutionStatus("0", FlexiHSRRelatedListSingle.recordType.executionStatus, response.runExecutionStatus.currentTestCase);

            });
            this.step('Mapping Next Button ', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.nextButton.xpath);
                this.assertTestBuilderState(pageStructureInfoRecordType, FlexiHSRRelatedListSingle.nextButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do on Next Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.nextButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.nextButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Last Name field', async () => {
                await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.lastName.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.lastName.xpath);
                this.assertTestBuilderState([FlexiHSRRelatedListSingle.PSIContactNew], FlexiHSRRelatedListSingle.lastName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Last Name field', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.lastName.interactionParameters.Set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiHSRRelatedListSingle.lastName.testCaseXML);
                this.assertExecutionStatus("0", FlexiHSRRelatedListSingle.lastName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button', async () => {
             //   await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.saveButton.xpath, 20*1000)
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.saveButton.xpath);
                this.assertTestBuilderState([FlexiHSRRelatedListSingle.PSIContactNew], Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Contact Name field', async () => {
                await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.contactName.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.contactName.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.contactName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
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
                await this.assertTestCaseXML("0", FlexiHSRRelatedListSingle.contactName.testCaseXML);
                this.assertExecutionStatus("0", FlexiHSRRelatedListSingle.contactName.executionStatus, response.runExecutionStatus.currentTestCase);
                remoteWebdriver.navigate().back();
            });
            it('Sleep for 3 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 3000);
            });
            this.step('Mapping Title field for blank value assertion', async () => {
                await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.title.xpathViewScreen, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.title.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.title.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do blank title field', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.title.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.title.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.title.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Email field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.email.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.email.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do blank email field', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.email.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.email.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.phone.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.phone.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do blank phone', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.phone.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Edit Button', async () => {
                const dropDown: WebElement = await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.dropdownXpath, 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
                await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.editButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.editButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assertion on Edit Button', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.editButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.editButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.deleteButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assertion on Delete Button', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.deleteButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.deleteButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Add to Campaign Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.addToCampaignButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.addToCampaignButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Read Assertion on Add to Campaign Button', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.addToCampaignButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.addToCampaignButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.addToCampaignButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.deleteButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click and cancel on Delete Button', async () => {
                this.modifyAddToTestCase(FlexiHSRRelatedListSingle.deleteButton.interactionParameters.clickAndCancel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.deleteButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.deleteButton.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 3 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 3000);
            });
            this.step('Mapping Add to Campaign Button', async () => {
                const dropDown: WebElement = await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.dropdownXpath, 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
                await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.addToCampaignButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.addToCampaignButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.addToCampaignButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click on Add to Campaign Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.addToCampaignButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.addToCampaignButton.executionStatus1, response.runExecutionStatus.currentTestCase);
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
                const dropDown: WebElement = await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.dropdownXpath, 20000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);

                await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.editButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.editButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click on Edit Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.editButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.editButton.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Title field on Edit Screen', async () => {
                await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.title.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.title.xpath);
                this.assertTestBuilderState([FlexiHSRRelatedListSingle.PSIContactEdit], FlexiHSRRelatedListSingle.title.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Title field on Edit Screen', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.title.interactionParameters.Set)
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
                await this.assertTestCaseXML("0", FlexiHSRRelatedListSingle.title.testCaseXML1);
                this.assertExecutionStatus("0", FlexiHSRRelatedListSingle.title.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Email field on Edit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.email.xpathEditScreen);
                this.assertTestBuilderState([FlexiHSRRelatedListSingle.PSIContactEdit], FlexiHSRRelatedListSingle.email.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Email field on Edit Screen', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.email.interactionParameters.Set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.email.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.email.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field on Edit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.phone.xpathEditScreen);
                this.assertTestBuilderState([FlexiHSRRelatedListSingle.PSIContactEdit], FlexiHSRRelatedListSingle.phone.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone field on Edit Screen', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.phone.interactionParameters.Set)
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.phone.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.phone.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button on Edit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.saveButton.xpath);
                this.assertTestBuilderState([FlexiHSRRelatedListSingle.PSIContactEdit], Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button on Edit Screen', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 3 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 3000);
            });
            this.step('Mapping Title field', async () => {
                await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.title.xpathViewScreen, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.title.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.title.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing Value Assertion on Title field', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.title.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiHSRRelatedListSingle.title.testCaseXML2);
                this.assertExecutionStatus("0", FlexiHSRRelatedListSingle.title.executionStatus2, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.email.xpathViewScreen1);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.email.fieldDetails1, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing value assertion on email field', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.email.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.email.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.phone.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.phone.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing value assertion on phone field', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.phone.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Title field', async () => {
                await this.findElement(remoteWebdriver, FlexiHSRRelatedListSingle.title.xpathViewScreen, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.title.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.title.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on title field', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.title.interactionParameters.columnAssertion);
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
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.title.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.title.executionStatus, response.runExecutionStatus.currentTestCase);
            });  
            this.step('Mapping Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.email.xpathViewScreen1);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.email.fieldDetails1, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on email field', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.email.interactionParameters.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.email.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.phone.xpathViewScreen);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.phone.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on phone field', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.phone.interactionParameters.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.phone.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Header Link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.headerText.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.headerText.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
            });
            this.step('Performing total and display row count assertion', async () => {
                await this.modifyAddToTestCase(FlexiHSRRelatedListSingle.headerText.interactions);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.headerText.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.headerText.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping View All Link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSRRelatedListSingle.viewAll.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSRRelatedListSingle.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Add & Do on View All', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSRRelatedListSingle.viewAll.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSRRelatedListSingle.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
};

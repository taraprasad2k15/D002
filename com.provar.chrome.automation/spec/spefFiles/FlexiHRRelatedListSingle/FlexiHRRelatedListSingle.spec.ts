import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { FlexiHRRelatedListSingle } from './FlexiHRRelatedListSingle';
import { join } from 'path';
import { Opportunity } from '../../testdata/sfObjects/Opportunity';

export class FlexiHRRelatedListSingleSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoNew: any[];
        let rowLocator = [
            {
                "label": "Opportunity Name (OPPORTUNITY_NAME)",
                "selected": true,
                "value": "oppName"
            },
            {
                "label": "Stage (OPPORTUNITY_STAGE_NAME)",
                "selected": false,
                "value": "Qualification"
            },
            {
                "label": "Amount (OPPORTUNITY_AMOUNT)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Close Date (OPPORTUNITY_CLOSE_DATE)",
                "selected": false,
                "value": "01/06/2020"
            },
        ];
        let rowLocator1 = [
            {
                "label": "Opportunity Name (OPPORTUNITY_NAME)",
                "selected": true,
                "value": "oppName"
            },
            {
                "label": "Stage (OPPORTUNITY_STAGE_NAME)",
                "selected": false,
                "value": "Qualification"
            },
            {
                "label": "Amount (OPPORTUNITY_AMOUNT)",
                "selected": false,
                "value": "£23.00"
            },
            {
                "label": "Close Date (OPPORTUNITY_CLOSE_DATE)",
                "selected": false,
                "value": "01/06/2020"
            },
        ];
        this.zephyrTest('AutomationAPI', 'PROT-1760', 'FS_MAP_SF_STD_RLS.RP.HR', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'FlexiRelatedListSingle.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [FlexiHRRelatedListSingle.PSI];
                pageStructureInfoNew = [Opportunity.opportunityNewPsi];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
				await this.endTestSession(done);
			});
            this.step('Mapping New Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element1: WebElement = await this.findElement(remoteWebdriver, "//span[normalize-space()='Custom Links']",20*1000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element1);
                await this.findElement(remoteWebdriver, FlexiHRRelatedListSingle.newButton.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.newButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.newButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML("0", FlexiHRRelatedListSingle.newButton.testCaseXML);
                this.assertExecutionStatus("0", FlexiHRRelatedListSingle.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Opportunity Name Field on New Screen', async () => {
                await this.findElement(remoteWebdriver, FlexiHRRelatedListSingle.opportunityName.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.opportunityName.xpath);
                this.assertTestBuilderState(pageStructureInfoNew,Opportunity.opportunityNameField , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Opportunity Name field on New Screen', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.opportunityName.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiHRRelatedListSingle.opportunityName.testCaseXML);
                this.assertExecutionStatus("0", FlexiHRRelatedListSingle.opportunityName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Stage Field on New Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.stage.xpath);
                this.assertTestBuilderState(pageStructureInfoNew,Opportunity.stageField , Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Stage field on New Screen', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.stage.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.stage.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.stage.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Close Date Field on New Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.closeDate.xpath);
                this.assertTestBuilderState(pageStructureInfoNew,Opportunity.closeDateField , Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Close Date field  on New Screen', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.closeDate.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.closeDate.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.closeDate.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button on New Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.saveButton.xpath);
                this.assertTestBuilderState(pageStructureInfoNew, Standard.saveButtonField , Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button on New Screen', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Opportunity Name field on RLS', async () => {
                const element1: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'forceRelatedListCardHeader')]",20*1000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element1);
                await this.findElement(remoteWebdriver, FlexiHRRelatedListSingle.opportunityName.xpathRL, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.opportunityName.xpathRL);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.opportunityName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Performing Value Assertion on Opportunity Name field', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.opportunityName.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiHRRelatedListSingle.opportunityName.testCaseXML1);
                this.assertExecutionStatus("0", FlexiHRRelatedListSingle.opportunityName.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Stage field on RLS', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.stage.xpathRL);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.stage.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Performing Value Assertion on Stage field', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.stage.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.stage.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.stage.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping CloseDate field on RLS', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.closeDate.xpathRL);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.closeDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Performing Value Assertion on CloseDate field', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.closeDate.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.closeDate.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.closeDate.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Amount field on RLS', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.amount.xpathRL);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.amount.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Performing Value Assertion on Blank Amount field', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.amount.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.amount.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.amount.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Edit Button', async () => {
                const dropDown: WebElement = await this.findElement(remoteWebdriver, "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//span[text()='Show More' or text()='Show more actions' or text()='Show Actions']/..", 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
                await this.findElement(remoteWebdriver, FlexiHRRelatedListSingle.editButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.editButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Assertion on Edit Button', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.editButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.editButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.deleteButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Assertion on Delete Button', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.deleteButton.interactionParameters.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.deleteButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.deleteButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click and cancel on Delete Button', async () => {
                this.modifyAddToTestCase(FlexiHRRelatedListSingle.deleteButton.interactionParameters.clickAndCancel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.deleteButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.deleteButton.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Edit Button', async () => {
                const dropDown: WebElement = await this.findElement(remoteWebdriver, "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//span[text()='Show More' or text()='Show more actions' or text()='Show Actions']/..", 20000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
                await remoteWebdriver.executeScript("arguments[0].click();", dropDown);

                await this.findElement(remoteWebdriver, FlexiHRRelatedListSingle.editButton.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.editButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click on Edit Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.editButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.editButton.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Amount field on Edit Screen', async () => {
                await this.findElement(remoteWebdriver, FlexiHRRelatedListSingle.amount.xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.amount.xpath);
                this.assertTestBuilderState([Opportunity.opportunityEditPsi], Opportunity.amountField, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do Amount field on Edit Screen', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.amount.interactionParameters.set)
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
                await this.assertTestCaseXML("0", FlexiHRRelatedListSingle.amount.testCaseXML);
                this.assertExecutionStatus("0", FlexiHRRelatedListSingle.amount.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button on Edit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.saveButton.xpath);
                this.assertTestBuilderState([Opportunity.opportunityEditPsi], Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for fields to get loaded', async done => {
					expect(true).toEqual(true);
					setTimeout(async () => {
						done();
					}, 5*1000);
				});
            this.step('Mapping Amount Name field on RLS', async () => {
                const element1: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'forceRelatedListCardHeader')]",20*1000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element1);
                await this.findElement(remoteWebdriver, FlexiHRRelatedListSingle.amount.xpathRL1, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.amount.xpathRL);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.amount.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator1);
            });
            this.step('Performing Value Assertion on Amount field', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.amount.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiHRRelatedListSingle.amount.testCaseXML2);
                this.assertExecutionStatus("0", FlexiHRRelatedListSingle.amount.executionStatus2, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Stage field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.stage.xpathRL);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.stage.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on stage field', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.stage.interactionParameters.columnAssertion);
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
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.stage.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.stage.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Amount field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.amount.xpathRL1);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.amount.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on amount field', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.amount.interactionParameters.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.amount.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.amount.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Close Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.closeDate.xpathRL);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.closeDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator1);
            });
            this.step('Performing column assertion on Close Date field', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.closeDate.interactionParameters.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.closeDate.testCaseXMLcolumn);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.closeDate.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Header Link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.headerText.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.headerText.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
            });
            this.step('Performing total and display row count assertion', async () => {
                await this.modifyAddToTestCase(FlexiHRRelatedListSingle.headerText.interactions);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.headerText.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.headerText.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping View All Link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHRRelatedListSingle.viewAll.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHRRelatedListSingle.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Add & Do on View All', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHRRelatedListSingle.viewAll.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHRRelatedListSingle.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
};

import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { Account } from '../../testdata/sfObjects/Account';
import { Contact } from '../../testdata/sfObjects/Contact';
import { SfCommonFIeld } from '../SfCommonField';
import { RelatedList2Data } from './RelatedList2.data';
import { join } from 'path';

export class RelatedList2Spec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        const assertInteractionParameters = {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				},
			}
		};
		const executionStatusAssert = [{
			"name": "UiAssert",
			"type": "Icon-Successful",
			"text": "UI Assert",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}];
		const rowLocators = [
            {
                "label": "Contact Name (FULL_NAME)",
                "selected": true,
            },
            {
                "label": "Title (CONTACT_TITLE)",
                "selected": false,
                "value": "Sample Title"
            },
            {
                "label": "Email (CONTACT_EMAIL)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Phone (CONTACT_PHONE1)",
                "selected": false,
            }
        ];
        
		this.zephyrTest('AutomationAPI', 'PROT-1834', 'FS_MAP_SF_STD_RL.Contact', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'RelatedList.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Standard.CurrentTabPsi, Account.accountViewPsi];
            }, 200 * 1000);
            beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Name Field ', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, RelatedList2Data.name.xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedList2Data.name.xpath);
				this.assertTestBuilderState(pageStructureInfo, RelatedList2Data.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Name Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, RelatedList2Data.name.testCaseXML);
				this.assertExecutionStatus(testItemId, RelatedList2Data.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping title Field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedList2Data.title.xpath);
				this.assertTestBuilderState(pageStructureInfo, RelatedList2Data.title.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do title Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, RelatedList2Data.title.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping email Field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedList2Data.email.xpath);
				this.assertTestBuilderState(pageStructureInfo, RelatedList2Data.email.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do email Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, RelatedList2Data.email.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping RL Heading', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//span[@title='Contacts']");
				this.assertTestBuilderState(pageStructureInfo, {disposition:"Existing", text:"Contacts (Contacts)"}, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do RL Heading', async () => { 
				const assertRowcount = {
					interactionParameters: {
						id: 'Read/Assert',
						settings: {
							assertTableAttributes: true,
							extractTableAttributes: true,
							expectedAttributes: {
								displayRowCount: {
									value: 1,
								},
								totalRowCount: {
									value: 1,
								},
							},
						}
					},	
				};
				await this.modifyAddToTestCase(assertRowcount);
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
					'type': 'Icon-ExecutingPaused',
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML(testItemId, RelatedList2Data.rowcountAssertionXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4*1000);
			},5*1000);
			this.step('Mapping Title Field for column assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedList2Data.title.xpath);
				this.assertTestBuilderState(pageStructureInfo, RelatedList2Data.title.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Title Field for column assertion ', async () => {
				await this.modifyAddToTestCase(RelatedList2Data.name.assertColumnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, RelatedList2Data.title.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				const showmoreactionWE: WebElement = await this.findElement(remoteWebdriver, "//span[@title='Contacts']/../../../../../..//a[contains(@class,'rowAction')]");
				showmoreactionWE.sendKeys(" ");
				await this.findElement(remoteWebdriver, RelatedList2Data.editButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedList2Data.editButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {disposition:"Existing", text:"Contacts Edit (Edit)"}, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, RelatedList2Data.editButton.testCaseXML);
				this.assertExecutionStatus(testItemId, RelatedList2Data.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath2);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath2);
				this.assertTestBuilderState([Standard.CurrentTabPsi], Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Cancel button', async () => {
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
				await this.assertTestCaseXML("0", RelatedList2Data.cancelButtonOnEdit.testCaseXML);
				this.assertExecutionStatus("0", RelatedList2Data.cancelButtonOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping ViewAll button', async () => {
				await this.findElement(remoteWebdriver, RelatedList2Data.viewAllButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedList2Data.viewAllButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {disposition:"Existing", text:"Contacts Go To List (GoToList)"}, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Mapping New Button', async () => {
				await this.findElement(remoteWebdriver, RelatedList2Data.newButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedList2Data.newButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Contacts New Contact (NewContact)',
				}, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", RelatedList2Data.newButton.testCaseXML);
				this.assertExecutionStatus("0", RelatedList2Data.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
        }); 
    };
}; 

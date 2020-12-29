import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { PCO } from '../../testdata/sfObjects/PCO';
import { Case } from '../../testdata/sfObjects/Case';
import { SfCommonFIeld } from '../SfCommonField';
import { PriceBookRL } from './PriceBookRL.data';
import { join } from 'path';

export class PriceBookRLSpec extends BaseSpec {
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
                "label": "Price Book Name (Pricebook2_Name)",
                "selected": true,
                "value": /Standard.*/
            },
            {
                "label": "List Price (UnitPrice)",
                "selected": false,
            },
            {
                "label": "Use Standard Price (UseStandardPrice)",
                "selected": false,
                "value": "false"
            },
            {
                "label": "Active (IsActive)",
                "selected": false,
                "value": "true"
            }
        ];
        
		this.zephyrTest('AutomationAPI', 'PROT-1958', 'FS_MAP_SF_STD_RL.RP.HSL', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'PriceBookRL.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [PriceBookRL.PSI];
            }, 350 * 1000);
            beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping priceBookName Field ', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, PriceBookRL.priceBookName.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.priceBookName.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Price Book Name (Pricebook2_Name)',
				}, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do priceBookName Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-ExecutingChildPaused',
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML(testItemId, PriceBookRL.priceBookName.testCaseXML);
				this.assertExecutionStatus(testItemId, PriceBookRL.priceBookName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping listPrice Field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.listPrice.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'List Price (UnitPrice)',
				}, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do listPrice Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, PriceBookRL.listPrice.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping active Field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.active.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Active (IsActive)',
				}, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do active Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, PriceBookRL.active.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping RL Heading', async () => {
				await this.findElement(remoteWebdriver, "//a/span[contains(text(),'Price Books')]");
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//a/span[contains(text(),'Price Books')]");
				this.assertTestBuilderState(pageStructureInfo, {disposition:"Existing", text:"Price Books (PricebookEntries)"}, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
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
				await this.assertTestCaseXML(testItemId, PriceBookRL.rowcountAssertionXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4*1000);
			},5*1000);
			this.step('Mapping listPrice for column assertion ', async () => {
				await this.findElement(remoteWebdriver, PriceBookRL.viewAllButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.listPrice.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'List Price (UnitPrice)',
				}, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do listPrice Field ', async () => {
				await this.modifyAddToTestCase(PriceBookRL.listPrice.assertColumnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PriceBookRL.listPrice.assertColumntestcaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				const showmoreactionWE: WebElement = await this.findElement(remoteWebdriver, "//tbody//th/following-sibling::td[4]//a");
				showmoreactionWE.sendKeys(" ");
				await this.findElement(remoteWebdriver, PriceBookRL.editButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.editButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Price Books Edit (Edit)',
				}, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, PriceBookRL.editButton.testCaseXML);
				this.assertExecutionStatus(testItemId, PriceBookRL.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath2);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath2);
				this.assertTestBuilderState([], Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
				await this.assertTestCaseXML("0", PriceBookRL.cancelButtonOnEdit.testCaseXML);
				this.assertExecutionStatus("0", PriceBookRL.cancelButtonOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping ViewAll button', async () => {
				await this.findElement(remoteWebdriver, PriceBookRL.viewAllButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.viewAllButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Price Books Go To List (GoToList)',
				}, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Mapping addToPriceBookButton Button', async () => {
				await this.findElement(remoteWebdriver, PriceBookRL.addToPriceBookButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.addToPriceBookButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Price Books Add to Price Book (add)',
				}, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do addToPriceBookButton Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", PriceBookRL.addToPriceBookButton.testCaseXML);
				this.assertExecutionStatus("0", PriceBookRL.addToPriceBookButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping pricebook Field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, PriceBookRL.pricebook.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.pricebook.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Price Book (priceBook)',
				}, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do pricebook Field ', async () => {
				await this.modifyAddToTestCase(PriceBookRL.pricebook.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
									'type': 'Icon-Successful',
									'executionStatus': 'Executed',
									'successfulCount': 1
								};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", PriceBookRL.pricebook.testCaseXML);
				this.assertExecutionStatus("0", PriceBookRL.pricebook.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping currency Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.currency.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Currency (currency)',
				}, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do currency Field ', async () => {
				await this.modifyAddToTestCase(PriceBookRL.currency.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PriceBookRL.currency.testCaseXML);
				this.assertExecutionStatus(testItemId, PriceBookRL.currency.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping nextButton Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.nextButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Save (save)',
				}, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do nextButton Field ', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PriceBookRL.nextButton.testCaseXML);
				this.assertExecutionStatus(testItemId, PriceBookRL.nextButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping productName field', async () => {
				await this.findElement(remoteWebdriver, PriceBookRL.productName.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.productName.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Product (Product2Id)',
				}, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do productName Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
									'type': 'Icon-Successful',
									'executionStatus': 'Executed',
									'successfulCount': 1
								};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", PriceBookRL.productName.testCaseXML);
				this.assertExecutionStatus("0", PriceBookRL.productName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping active field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.active.Xpath2);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Active (IsActive)',
				}, Standard.interaction.check, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do active Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PriceBookRL.active.testCaseXML2);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping listPrice field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(PriceBookRL.listPrice.Xpath2);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'List Price (UnitPrice)',
				}, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do listPrice Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, PriceBookRL.listPrice.testCaseXML2);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveButtonField , Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Field ', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
        }); 
    };
}; 

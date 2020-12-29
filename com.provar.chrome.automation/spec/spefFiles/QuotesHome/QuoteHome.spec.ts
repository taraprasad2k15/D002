import { join } from 'path';
import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Quote } from '../../testdata/sfObjects/Quote';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCommonFIeld } from '../SfCommonField';
import { QuoteHome } from './QuoteHome';

export class QuoteHomeSpec extends BaseSpec {
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
			},
		};
		const pageStructureInfo: any[] = [Quote.QuoteHomePsi];
		const rowLocator = [
			{
				label: 'Quote Number (SBQQ__QUOTE__C_NAME)',
				selected: true,
				value: /Q-[0-9]{5}/,
			},
			{
				label: 'Primary (SBQQ__Primary__c)',
				selected: false,
				value: 'false',
			},
			{
				label: 'Net Amount (SBQQ__NetAmount__c)',
				selected: false,
				value: '£0.00',
			},
			{
				label: 'Status (SBQQ__Status__c)',
				selected: false,
				value: 'Draft',
			},
			{
				label: 'Additional Disc. (%) (SBQQ__CustomerDiscount__c)',
				selected: false,
				value: '',
			},
			{
				label: 'Partner Discount (SBQQ__PartnerDiscount__c)',
				selected: false,
				value: '',
			},
			{
				label: 'Last Modified By (LastModifiedById)',
				selected: false,
			},
		];

		this.zephyrTest('AutomationAPI', 'PROT-1859', 'FS_MAP_SF_CPQ_QUOTE_HOME', () => {
			beforeAll(async done => {
				const tcName = 'QuoteHome.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping List Search Box', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfCommonFIeld.listSearchBox.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.listSearchBox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.listSearchBox, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do List Search Box', async () => {
				await this.modifyAddToTestCase(QuoteHome.listSearchBox.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, QuoteHome.listSearchBox.testCaseXML);
				this.assertExecutionStatus(testItemId, QuoteHome.listSearchBox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Search Type', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.searchType.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.searchType, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Search Type', async () => {
				await this.modifyAddToTestCase(SfCommonFIeld.searchType.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.searchType.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.searchType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Select Row', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteHome.selectRow.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.selectRow, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Select Row Checkbox', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, QuoteHome.selectRow.testCaseXML);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				this.assertExecutionStatus(testItemId, QuoteHome.selectRow.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Quote Number Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteHome.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Quote.quoteNumber, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Quote Number field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, QuoteHome.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, QuoteHome.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the status Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteHome.status.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Quote.quoteStatus, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do status field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, QuoteHome.status.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, QuoteHome.status.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the additionalDiscount Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteHome.additionalDiscount.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Quote.additionalDiscount, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do additionalDiscount field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, QuoteHome.additionalDiscount.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, QuoteHome.additionalDiscount.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click on Show more actions dropdown', async () => {
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show More'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]");
				await element.click();
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
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				await element.click();
				expect(true).toEqual(true);
			});
			it('Click on Show more actions dropdown', async done => {
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show more actions'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]", 15000);
				setTimeout(async () => {
					await element.click();
					done();
				}, 4000);
			}, 5 * 1000);
			this.step('Mapping Delete action button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.deleteActionButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.deleteActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Delete button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.deleteActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.deleteActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				await element.click();
				expect(true).toEqual(true);
			});
			it('Click on Show more actions dropdown', async done => {
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show more actions'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]", 15000);
				setTimeout(async () => {
					await element.click();
					done();
				}, 4000);
			}, 5 * 1000);
			this.step('Mapping Change Owner action button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.changeOwnerActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.changeOwnerActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Change Owner button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.changeOwnerActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.changeOwnerActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				await element.click();
				expect(true).toEqual(true);
			});
			this.step('Mapping New Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.newButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.newButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					type: 'Icon-Successful',
					executionStatus: 'Executed',
					successfulCount: 1,
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdWithRow);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			}, 5 * 1000);
			
			this.step('Mapping opportunity for "SF Lookup" interaction', async () => {
				const LinkedCaseWE: WebElement = await this.findElement(remoteWebdriver, QuoteHome.opportunity.Xpath.input);
				await LinkedCaseWE.sendKeys('00');
				await this.findElement(remoteWebdriver, QuoteHome.opportunity.Xpath.lookup);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteHome.opportunity.Xpath.lookup);
				this.assertTestBuilderState([Quote.quoteNewPSI], QuoteHome.opportunity.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do opportunity for Lookup', async () => {
				await this.modifyAddToTestCase(QuoteHome.opportunity.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
									'type': 'Icon-Successful',
									'executionStatus': 'Executed',
									'successfulCount': 1
								};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", QuoteHome.opportunity.testCaseXML.new);
				this.assertExecutionStatus("0", QuoteHome.opportunity.executionStatus.new, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the first opportunityName for Click', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteHome.opportunityName.xpath);
				console.log(JSON.stringify(response.testbuilderState.whereColumns, null, 4));
				const rowLocators = [
					{
						"label": "Opportunity Name (Name)",
						"selected": true,
						"value": /CPQ_Opp.*/
					},
					{
						"label": "Account Name (ACCOUNT_NAME)",
						"selected": false,
						"value": ""
					},
					{
						"label": "Stage (OPPORTUNITY_STAGE_NAME)",
						"selected": false,
						"value": "Needs Analysis"
					},
					{
						"label": "Close Date (OPPORTUNITY_CLOSE_DATE)",
						"selected": false,
						"value": /.*/
					},
					{
						"label": "Opportunity Owner Alias (CORE_USERS_ALIAS)",
						"selected": false,
						"value": /.*/
					}
				];
				this.assertTestBuilderState([{
					itemDefinition: {
						itemClass: 'Page',
						itemTypeId: 'SfLookupUiTargetExtension',
					},
					pageDetails: {
						title: 'Opportunity Lookup Screen',
					},
				}], QuoteHome.opportunityName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do opportunityName field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, QuoteHome.opportunityName.testCaseXML);
				this.assertExecutionStatus(testItemId, QuoteHome.opportunityName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping account for "SF Lookup" interaction', async () => {
				const LinkedCaseWE: WebElement = await this.findElement(remoteWebdriver, QuoteHome.account.Xpath.input);
				await LinkedCaseWE.sendKeys('00');
				await this.findElement(remoteWebdriver, QuoteHome.account.Xpath.lookup);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteHome.account.Xpath.lookup);
				this.assertTestBuilderState([Quote.quoteNewPSI], QuoteHome.account.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do account for Lookup', async () => {
				await this.modifyAddToTestCase(QuoteHome.account.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const testItemIdlookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
									'type': 'Icon-Successful',
									'executionStatus': 'Executed',
									'successfulCount': 1
								};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdlookup);
				await this.assertTestCaseXML(testItemId, QuoteHome.account.testCaseXML.lookup);
				this.assertExecutionStatus(testItemId, QuoteHome.account.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the first accountName for Click', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteHome.accountName.xpath);
				const rowLocators = [
					{
						"label": "Account Name (Name)",
						"selected": true,
						"value": /CPQ_Acc.*/
					},
					{
						"label": "Phone (ACCOUNT_PHONE1)",
						"selected": false,
						"value": ""
					},
					{
						"label": "Account Owner Alias (CORE_USERS_ALIAS)",
						"selected": false,
						"value": /.*/
					}
				];
				this.assertTestBuilderState([{
					itemDefinition: {
						itemClass: 'Page',
						itemTypeId: 'SfLookupUiTargetExtension',
					},
					pageDetails: {
						title: 'Account Lookup Screen',
					},
				}], QuoteHome.accountName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do accountName field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, QuoteHome.accountName.testCaseXML);
				this.assertExecutionStatus(testItemId, QuoteHome.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}

import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfMaintenancePlanAssetRL } from './SfMaintenancePlanAssetRL';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfMaintenancePlanAssetRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [SfMaintenancePlanAssetRL.maintenancePlanPsi];
		let pageStructureInfoViewAll: any[] = [SfMaintenancePlanAssetRL.ViewAllPsi];
		let asset: String;

		this.zephyrTest('AutomationAPI', 'PROT-1872', 'FS_MAP_SF_LAYOUT_LX_MAINTENANCEPLAN_RL_ASSET', () => {
			beforeAll(async done => {
				const tcName = 'Asset.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 400000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping New Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regtest');
				const relatedTabWE: WebElement = await this.findElement(remoteWebdriver, "//a/span[(.)='Related'] | //a[(.)='Related']", 60 * 1000);
				await relatedTabWE.click();
				await this.findElement(remoteWebdriver, SfMaintenancePlanAssetRL.newButton.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.newButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfMaintenancePlanAssetRL.newButton.xpath, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Asset Field on New Asset Screen', async () => {
				await this.findElement(remoteWebdriver, SfMaintenancePlanAssetRL.assetNewScreen.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.assetNewScreen.xpath);
				this.assertTestBuilderState([SfMaintenancePlanAssetRL.assetNewPsi], SfMaintenancePlanAssetRL.assetNewScreen.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Asset Field on New Asset Screen', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.contractLineItem.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfMaintenancePlanAssetRL.assetNewScreen.testCaseXML);
				this.assertExecutionStatus("0", SfMaintenancePlanAssetRL.assetNewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState([SfMaintenancePlanAssetRL.assetNewPsi], Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Asset Field on View Screen for Click Interaction', async () => {
				await this.findElement(remoteWebdriver, SfMaintenancePlanAssetRL.assetViewScreen.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.assetViewScreen.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfMaintenancePlanAssetRL.assetViewScreen.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Asset Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfMaintenancePlanAssetRL.assetViewScreen.testCaseXML);
				this.assertExecutionStatus("0", SfMaintenancePlanAssetRL.assetViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
				remoteWebdriver.navigate().back();
			});
			this.step('Mapping Asset Field on View Screen for Value Assertion', async () => {
				await this.findElement(remoteWebdriver, SfMaintenancePlanAssetRL.assetViewScreen.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.assetViewScreen.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfMaintenancePlanAssetRL.assetViewScreen.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators);
			});
			this.step('Add & Do Asset Field', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.assetViewScreen.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contract Line Item Field on View Screen for Blank Value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.contractLineItem.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfMaintenancePlanAssetRL.contractLineItem.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators);
			});
			this.step('Add & Do Contract Line item Field on View Screen', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.contractLineItem.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, "//th[contains(@title, 'Asset')]/../../following-sibling::tbody//td//lightning-icon", 20 * 1000);
				await dropdown.click();
				await this.findElement(remoteWebdriver, SfCommonFIeld.deleteActionButton.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfMaintenancePlanAssetRL.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators);
			});
			this.step('Add & Do Delete Button', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.deleteButton.InteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.deleteButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, "//th[contains(@title, 'Asset')]/../../following-sibling::tbody//td//a", 20 * 1000);
				await dropdown.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfMaintenancePlanAssetRL.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.editButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Asset Field for Column Assertion', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, "//button/span[normalize-space()='Cancel']", 20 * 1000);
				await dropdown.click();
				await this.findElement(remoteWebdriver, SfMaintenancePlanAssetRL.assetViewScreen.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.assetViewScreen.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfMaintenancePlanAssetRL.assetViewScreen.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators);
			});
			this.step('Add & Do Asset Field', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.assetViewScreen.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdWithRow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.assetViewScreen.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contract Line Item Field for Column Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.contractLineItem.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfMaintenancePlanAssetRL.contractLineItem.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators);
			});
			this.step('Add & Do Contract Line Item Field', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.contractLineItem.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.contractLineItem.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Assets Heading', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.heading.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfMaintenancePlanAssetRL.heading.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do Heading', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.heading.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.heading.testCaseXML);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All Link', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.viewAllButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfMaintenancePlanAssetRL.viewAllButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do View All Link', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.viewAllButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.viewAllButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Asset Field on View All Screen', async () => {
				await this.findElement(remoteWebdriver, SfMaintenancePlanAssetRL.assetViewScreen.xpathViewAll, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.assetViewScreen.xpathViewAll);
				this.assertTestBuilderState(pageStructureInfoViewAll, SfMaintenancePlanAssetRL.assetViewScreen.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators);
			});
			this.step('Add & Do Asset Field', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfMaintenancePlanAssetRL.assetViewScreen.testCaseXMLAssertViewAll);
				this.assertExecutionStatus("0", SfMaintenancePlanAssetRL.assetViewScreen.executionStatusViewAll, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contract Line Item Field for Blank Value Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.contractLineItem.xpathViewAll);
				this.assertTestBuilderState(pageStructureInfoViewAll, SfMaintenancePlanAssetRL.contractLineItem.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators);
			});
			this.step('Add & Do Contract Line item Field', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.contractLineItem.testCaseXMLAssertViewAll);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button on View All Screen', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'active')]//th[contains(@title, 'Asset')]/../../following-sibling::tbody//td//a[@role='button']", 20 * 1000);
				await dropdown.click();
				await this.findElement(remoteWebdriver, SfMaintenancePlanAssetRL.editButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.editButton.xpath);
				this.assertTestBuilderState(pageStructureInfoViewAll, SfMaintenancePlanAssetRL.editButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.editButton.testCaseXMLViewAll);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.editButton.executionStatusViewAll, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contract Line item field on Edit Screen', async () => {
				await this.findElement(remoteWebdriver, SfMaintenancePlanAssetRL.contractLineItem.xpath1, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.contractLineItem.xpath1);
				this.assertTestBuilderState([SfMaintenancePlanAssetRL.assetEditPsi], SfMaintenancePlanAssetRL.contractLineItem.fieldDetails1, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
                const element: WebElement = await this.findElement(remoteWebdriver, "//span[text()='Asset']/../following-sibling::div//ul//a/span[contains(text(),'Asset')]", 20 * 1000);
                await element.getText().then((expand) => {
                    asset = expand;
                });
			});
			this.step('Add & Do Contract Line item field on Edit Screen', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.contractLineItem.interactionParameters.sfLookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdWithRow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfMaintenancePlanAssetRL.contractLineItem.testCaseXML);
				this.assertExecutionStatus("0", SfMaintenancePlanAssetRL.contractLineItem.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 5 * 1000);
			});
			this.step('Mapping Line item Number field', async () => {
				await this.findElement(remoteWebdriver, '//th[@title="Line Item Number"]/../../following-sibling::tbody//tr//a[@title="'+asset+'"]/../..//td/a[contains(text(),"0000")]', 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.lineItemNumber.xpath);
				this.assertTestBuilderState([SfMaintenancePlanAssetRL.lookupPsi], SfMaintenancePlanAssetRL.lineItemNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocatorsLookup);
			});
			this.step('Add & Do Line item Number field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.lineItemNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.lineItemNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState([SfMaintenancePlanAssetRL.assetEditPsi], Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contract Line Item Field on View Screen for Value Assertion', async () => {
				await this.findElement(remoteWebdriver, SfMaintenancePlanAssetRL.contractLineItem.xpathViewAll1, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.contractLineItem.xpathViewAll1);
				this.assertTestBuilderState(pageStructureInfoViewAll, SfMaintenancePlanAssetRL.contractLineItem.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators1);
			});
			this.step('Add & Do Contract Line item Field', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1); await this.assertTestCaseXML("0", SfMaintenancePlanAssetRL.contractLineItem.testCaseXMLAssertViewAll1);
				this.assertExecutionStatus("0", SfMaintenancePlanAssetRL.contractLineItem.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Asset Field for Column Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.assetViewScreen.xpathViewAll);
				this.assertTestBuilderState(pageStructureInfoViewAll, SfMaintenancePlanAssetRL.assetViewScreen.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators1);
			});
			this.step('Add & Do Asset Field', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.assetViewScreen.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdWithRow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.assetViewScreen.testCaseXMLColumnViewAll);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button', async () => {
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'oneContent active')]//th[contains(@title, 'Asset')]/../../following-sibling::tbody//td[last()]//a", 20000);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
				await this.findElement(remoteWebdriver, SfMaintenancePlanAssetRL.deleteButton.xpathViewAll), 20 * 1000;
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfMaintenancePlanAssetRL.deleteButton.xpathViewAll);
				this.assertTestBuilderState(pageStructureInfoViewAll, SfMaintenancePlanAssetRL.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, SfMaintenancePlanAssetRL.rowLocators1);
			});
			this.step('Add & Do Delete Button', async () => {
				await this.modifyAddToTestCase(SfMaintenancePlanAssetRL.deleteButton.InteractionParameters1);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfMaintenancePlanAssetRL.deleteButton.testCaseXMLViewAll);
				this.assertExecutionStatus(testItemId, SfMaintenancePlanAssetRL.deleteButton.executionStatusViewAll, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}

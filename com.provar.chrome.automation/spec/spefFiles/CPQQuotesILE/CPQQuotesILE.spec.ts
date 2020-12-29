import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';
import { SfCpqQuotesILE } from './CPQQuotesILE';

export class SfCpqQuotesILESpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        this.zephyrTest('AutomationAPI', 'PROT-1864', 'FS_MAP_SF_CPQ_QUOTE_IL', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Quote Inline Edit.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [SfCpqQuotesILE.QuoteViewPsi];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
				await this.endTestSession(done);
			});
            this.step('Activating Inline Edit on Primary field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfCpqQuotesILE.primaryCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.primaryCheckbox.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.primaryCheckbox.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Add & Do Primary field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterILE);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.primaryCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.primaryCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Primary field on InlineEdit Screen', async () => {
                await this.findElement(remoteWebdriver, SfCpqQuotesILE.primaryCheckbox.xpath1, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.primaryCheckbox.xpath1);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.primaryCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Primary field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.primaryCheckbox.testCaseXML1);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.primaryCheckbox.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delivery Method field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.deliveryMethod.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.deliveryMethod.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Delivery Method field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.deliveryMethod.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.deliveryMethod.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.deliveryMethod.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Expires On field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.expiresOn.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.expiresOn.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do Expires On field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.expiresOn.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.expiresOn.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.expiresOn.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping MarkUp(%) field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.markup.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.markup.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do MarkUp(%) On field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.markup.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.markup.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.markup.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping PriceBook field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.pricebook.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.pricebook.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do PriceBook On field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.pricebook.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.pricebook.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.pricebook.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Bill To Name field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.billToName.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.billToName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Bill To Name On field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.billToName.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.billToName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.billToName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Ship To Postal field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.shipToPostalCode.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.shipToPostalCode.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Ship To Postal On field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.shipToPostalCode.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.shipToPostalCode.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.shipToPostalCode.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Group Line Items field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.groupLineItems.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.groupLineItems.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Group Line Items field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.groupLineItems.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.groupLineItems.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.groupLineItems.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Sales Rep field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.saleRep.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.saleRep.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Sales Rep field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.saleRep.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.saleRep.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.saleRep.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Name field on lookup Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.userLookup.xpath);
                const rowLocators = [
                    {
                        "label": "Name (Name)",
                        "selected": true,
                        "value": /.*Admin/,
                    },
                    {
                        "label": "CORE_USERS_TITLE (CORE_USERS_TITLE)",
                        "selected": false,
                    },
                    {
                        "label": "CORE_USERS_PHONE (CORE_USERS_PHONE)",
                        "selected": false,
                    },
                    {
                        "label": "CORE_USERS_EMAIL (CORE_USERS_EMAIL)",
                        "selected": false,
                    },
                ];
                this.assertTestBuilderState([SfCpqQuotesILE.userLookup.lookupPsi], SfCpqQuotesILE.userLookup.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.userLookup.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.userLookup.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Notes field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.notes.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.notes.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Note field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.notes.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdLookupOnscreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdLookupOnscreen);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.notes.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.notes.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            //blank value assertions
            this.step('Mapping Primary Contract field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.primaryContract.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.primaryContract.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Primary Contract field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.primaryContract.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Start Date field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.startDate.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Start Date field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.startDate.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Generated Contracted Price field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.generateContractedPrice.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.generateContractedPrice.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Generated Contracted Price field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.generateContractedPrice.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Introduction field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.introduction.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.introduction.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Introduction field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.introduction.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Watermark Shown field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.waterMarkShown.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.waterMarkShown.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Watermark Shown field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.waterMarkShown.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Partner field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.partner.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.partner.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Partner field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.partner.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Additional Discount field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.additionalDiscount.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.additionalDiscount.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do Additional Discount field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.additionalDiscount.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            //value assertion
            this.step('Mapping Quote Number field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.quoteNumber.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.quoteNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Quote Number field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.quoteNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Notes field for value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.notes.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.notes.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Notes field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.notes.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Group Line Item field for value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.groupLineItems.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.groupLineItems.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Group Line Item field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.groupLineItems.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Ship To Postal Code field for value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.shipToPostalCode.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.shipToPostalCode.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Ship To Postal Code field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.shipToPostalCode.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Bill to Name field for value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.billToName.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.billToName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Bill To Name field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.billToName.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Pricebook for value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.pricebook.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.pricebook.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Pricebook field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.pricebook.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping MarkUp for value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.markup.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.markup.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do MarkUp field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.markup.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Expires On for value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.expiresOn.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.expiresOn.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Expires On field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.expiresOn.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delivery Method for value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.deliveryMethod.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.deliveryMethod.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Delivery Method field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.deliveryMethod.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Sales Rep for value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCpqQuotesILE.saleRep.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.saleRep.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Sales Rep field', async () => {
                await this.modifyAddToTestCase(SfCpqQuotesILE.modificationParameterAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.saleRep.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, SfCpqQuotesILE.saveEditButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCpqQuotesILE.saveEditButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCpqQuotesILE.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}
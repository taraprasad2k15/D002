import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { remote } from 'electron';
import { TestBuilderState } from 'App/automationApi/messages/response/TestBuilderState';
import { QuoteEditLineButtonsAndFieldData } from './QuoteEditLineButtonAndFieldsData';

export class QuoteEditLineButtonsAndFieldSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoExisting: any[];
        this.zephyrTest('AutomationAPI', 'PROT-2020', 'FS_MAP_SF_CPQ_Quote_EditLine.Buttons', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Quote.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [QuoteEditLineButtonsAndFieldData.newPagePSI];
                pageStructureInfoExisting = [QuoteEditLineButtonsAndFieldData.existingPagePSI];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping Add Products button on Edit Quote Screen', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element: WebElement = await this.findElement(remoteWebdriver, QuoteEditLineButtonsAndFieldData.iframe[0], 20 * 1000);
                remoteWebdriver.switchTo().frame(element);
                remoteWebdriver.switchTo().defaultContent();
                await this.findElement(remoteWebdriver, QuoteEditLineButtonsAndFieldData.addProducts.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.addProducts.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfo, QuoteEditLineButtonsAndFieldData.addProducts.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Add Products Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", QuoteEditLineButtonsAndFieldData.addProducts.testCaseXML);
                this.assertExecutionStatus("0", QuoteEditLineButtonsAndFieldData.addProducts.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Search Product field on Product Selection Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteEditLineButtonsAndFieldData.searchProducts.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.searchProducts.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.searchProducts.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Search Product Field', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.searchProducts.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.searchProducts.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.searchProducts.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Search Button on Product Selection Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.searchIcon.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.searchIcon.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Search Buton', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.searchIcon.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.searchIcon.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for list to get loaded', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            });
            this.step('Mapping checkbox from Product Selection Table', async () => {
                await this.findElement(remoteWebdriver, QuoteEditLineButtonsAndFieldData.selectCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.selectCheckbox.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(QuoteEditLineButtonsAndFieldData.newTablePSI, QuoteEditLineButtonsAndFieldData.selectCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Performing check Interaction on select checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.selectCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.selectCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping checkbox from Product Selection Table for Assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.selectCheckbox.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(QuoteEditLineButtonsAndFieldData.existingTablePSI, QuoteEditLineButtonsAndFieldData.selectCheckbox.fieldDetailsExisting, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Performing check Interaction on select checkbox', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.selectCheckbox.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.selectCheckbox.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.selectCheckbox.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Select Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.selectButton.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.selectButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click Interaction on select button', async () => {
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
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.selectButton.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.selectButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Start Date Field on Edit Quote Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteEditLineButtonsAndFieldData.startDate.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.startDate.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Start Date Field', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.startDate.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.startDate.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.startDate.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Additional Disc Field on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.additionalDisc.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.additionalDisc.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Additional Disc Field', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.additionalDisc.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.additionalDisc.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.additionalDisc.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Subscription Term Field on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.subscriptionTerm.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.subscriptionTerm.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Subscription Term Field', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.subscriptionTerm.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.subscriptionTerm.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.subscriptionTerm.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Calculate Button on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.calculate.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.calculate.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Calculate Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.calculate.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.calculate.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Calculate Button on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.calculate.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.calculate.fieldDetailsExisting, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Calculate Button', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.calculate.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Clone Line Button on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.cloneLine.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(QuoteEditLineButtonsAndFieldData.newTablePSI, QuoteEditLineButtonsAndFieldData.cloneLine.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Clone Line Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.cloneLine.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.cloneLine.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Line Button on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.deleteLine.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(QuoteEditLineButtonsAndFieldData.existingTablePSI, QuoteEditLineButtonsAndFieldData.deleteLine.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Delete Line Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.deleteLine.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.deleteLine.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Add Group Button on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.addGroup.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.addGroup.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Add Group Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.addGroup.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.addGroup.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Clone Group Button on Edit Quote Screen', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, "//div[@id='groupActions']//div[@id='trigger']/*", 20 * 1000);
                element.click();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.cloneGroup.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.cloneGroup.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Clone Group Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.cloneGroup.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.cloneGroup.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Group Button on Edit Quote Screen', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, "(//div[@id='groupActions']//div[@id='trigger'])[1]", 20 * 1000);
                element.click();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.deleteGroup.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.deleteGroup.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Delete Group Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.deleteGroup.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.deleteGroup.executionStatus, response.runExecutionStatus.currentTestCase);
                remoteWebdriver.switchTo().alert().accept();
            });
            it('Waiting after closing alert', async done => {
				expect(true).toEqual(true);
					setTimeout(async () => {
			 		done();
				 	}, 4*1000);
				 });
            this.step('Mapping Clone Group Button on Edit Quote Screen', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, "(//div[@id='groupActions']//div[@id='trigger']/*)[1]", 20 * 1000);
                element.click();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.cloneGroup.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.cloneGroup.fieldDetailsExisting, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assert Interaction on Clone Group Button', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.cloneGroup.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Delete Group Button on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.deleteGroup.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.deleteGroup.fieldDetailsExisting, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assert Interaction on Delete Group Button', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.deleteGroup.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.executionStatus, response.runExecutionStatus.currentTestCase);
                remoteWebdriver.switchTo().alert().accept();
            });
            this.step('Mapping Additional Disc Group Field on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.additionalDiscGroup.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(QuoteEditLineButtonsAndFieldData.existingTablePSI, QuoteEditLineButtonsAndFieldData.additionalDiscGroup.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Start Inline Edit Interaction on Additional Disc Group Field', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.additionalDiscGroup.modificationParameters.inlineEdit);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.additionalDiscGroup.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.additionalDiscGroup.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Additional Disc Group Field on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.additionalDiscGroup.xpath1, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(QuoteEditLineButtonsAndFieldData.existingTablePSI, QuoteEditLineButtonsAndFieldData.additionalDiscGroup.fieldDetails1, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Additional Disc Group Field', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.additionalDiscGroup.modificationParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.additionalDiscGroup.testCaseXML1);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.additionalDiscGroup.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Reset Discounts Button on Edit Quote Screen', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, "(//div[@id='groupActions']//div[@id='trigger'])[1]", 20 * 1000);
                element.click();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.resetDiscounts.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.resetDiscounts.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Reset Discounts Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.resetDiscounts.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.resetDiscounts.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Reset Discounts Button on Edit Quote Screen', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, "(//div[@id='groupActions']//div[@id='trigger'])[1]", 20 * 1000);
                element.click();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.resetDiscounts.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.resetDiscounts.fieldDetailsExisting, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assert Interaction on Reset Discounts Button', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.resetDiscounts.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Additional Disc Group Field on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.additionalDiscGroup.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(QuoteEditLineButtonsAndFieldData.existingTablePSI, QuoteEditLineButtonsAndFieldData.additionalDiscGroup.fieldDetails1, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Read Assert Interaction on Additional Disc Group Field', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.additionalDiscGroup.modificationParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.additionalDiscGroup.testCaseXML2);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.additionalDiscGroup.executionStatus2, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping UnGroup Button on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.unGroup.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.unGroup.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assert Interaction on UnGroup Button', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.unGroup.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping UnGroup Button on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.unGroup.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.unGroup.fieldDetailsExisting, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on UnGroup Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.unGroup.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.unGroup.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Cancel Button on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.cancel.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.cancel.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Read Assert Interaction on Cancel Button', async () => {
                await this.modifyAddToTestCase(QuoteEditLineButtonsAndFieldData.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.cancel.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Cancel Button on Edit Quote Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteEditLineButtonsAndFieldData.cancel.xpath, QuoteEditLineButtonsAndFieldData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteEditLineButtonsAndFieldData.cancel.fieldDetailsExisting, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Cancel Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteEditLineButtonsAndFieldData.cancel.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteEditLineButtonsAndFieldData.cancel.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}

import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { addressFieldsData } from './AddressFields';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';

export class addressFieldsSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        this.zephyrTest('AutomationAPI', 'PROT-1220', 'FS_MAP_SF_DT_LX_ADDRESS.SET', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'AddressFields.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Lead.leadNewPsi];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Map Street field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, addressFieldsData.street.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addressFieldsData.street.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.street, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Street field', async () => {
                await this.modifyAddToTestCase(addressFieldsData.street.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addressFieldsData.street.testCaseXML);
                this.assertExecutionStatus(testItemId, addressFieldsData.street.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map City field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addressFieldsData.city.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.city, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do City field', async () => {
                await this.modifyAddToTestCase(addressFieldsData.city.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addressFieldsData.city.testCaseXML);
                this.assertExecutionStatus(testItemId, addressFieldsData.city.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map State field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addressFieldsData.state.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.state, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do State field', async () => {
                await this.modifyAddToTestCase(addressFieldsData.state.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addressFieldsData.state.testCaseXML);
                this.assertExecutionStatus(testItemId, addressFieldsData.state.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Zipcode field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addressFieldsData.zip.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.zip, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Zipcode field', async () => {
                await this.modifyAddToTestCase(addressFieldsData.zip.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addressFieldsData.zip.testCaseXML);
                this.assertExecutionStatus(testItemId, addressFieldsData.zip.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Country field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addressFieldsData.country.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.country, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Country field', async () => {
                await this.modifyAddToTestCase(addressFieldsData.country.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addressFieldsData.country.testCaseXML);
                this.assertExecutionStatus(testItemId, addressFieldsData.country.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Save Button', async () => {
                await this.findElement(remoteWebdriver, SfCommonFIeld.saveButton.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                expect(true).toEqual(true);
            });
            it('waiting for the record to be created', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 8 * 1000);
            }, 10 * 1000);
        });
        this.zephyrTest('AutomationAPI', 'PROT-1219', 'FS_MAP_SF_DT_LX_ADDRESS.SET.ILEMode', () => {
           beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Map Address field for assertion', async () => {
                pageStructureInfo = [Lead.leadViewPsi];
                remoteWebdriver = await this.getRemoteWebDriver(connectionName)
                const detailTab: WebElement = await this.findElement(remoteWebdriver, "//div[@role='tablist']/ul/li/a[@title='Details']|//a[text()='Details']");//some sf change
                remoteWebdriver.executeScript("arguments[0].click()", detailTab);
                await this.findElement(remoteWebdriver, addressFieldsData.address.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addressFieldsData.address.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.address, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Address field for assertion', async () => {
                await this.modifyAddToTestCase(addressFieldsData.address.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", addressFieldsData.address.testCaseXML);
                this.assertExecutionStatus("0", addressFieldsData.address.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Address field for Inline Edit', async () => {
                const addressWE: WebElement = await this.findElement(remoteWebdriver, addressFieldsData.addressInlineEdit.xpath);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", addressWE);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addressFieldsData.addressInlineEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.address, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Address field for Inline Edit', async () => {
                await this.modifyAddToTestCase(addressFieldsData.addressInlineEdit.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addressFieldsData.addressInlineEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, addressFieldsData.addressInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Street field on Inline Edit', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, addressFieldsData.streetInlineEdit.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addressFieldsData.streetInlineEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.street, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Street field on Inline Edit', async () => {
                await this.modifyAddToTestCase(addressFieldsData.streetInlineEdit.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addressFieldsData.streetInlineEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, addressFieldsData.streetInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map City field on Inline Edit', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addressFieldsData.cityInlineEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.city, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do City field on Inline Edit', async () => {
                await this.modifyAddToTestCase(addressFieldsData.cityInlineEdit.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addressFieldsData.cityInlineEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, addressFieldsData.cityInlineEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}
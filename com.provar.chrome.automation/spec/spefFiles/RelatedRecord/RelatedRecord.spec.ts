import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { Account } from '../../testdata/sfObjects/Account';
import { SfCommonFIeld } from '../SfCommonField';
import { RelatedRecord } from './RelatedRecord.data';
import { join } from 'path';

export class RelatedRecordSpec extends BaseSpec {
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
        
		this.zephyrTest('AutomationAPI', 'PROT-1768', 'FS_MAP_SF_STD_RelatedRecord.RP.HL', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'RelatedRecord.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [RelatedRecord.PSI];
            }, 200 * 1000);
            beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Account Name Field ', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, RelatedRecord.name.xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedRecord.name.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.accountName, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Add & Do Account Name Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, RelatedRecord.name.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Industy Field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedRecord.industry.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.industry, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Add & Do Industry Field', async () =>{
				await this.modifyAddToTestCase(RelatedRecord.industry.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, RelatedRecord.industry.testCaseXML);
				this.assertExecutionStatus(testItemId, RelatedRecord.industry.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type Field', async () =>{
				await this.findElement(remoteWebdriver, RelatedRecord.type.xpathInput, 15000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedRecord.type.xpathInput);
				this.assertTestBuilderState(pageStructureInfo, Account.type, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Type Field', async () =>{
				await this.modifyAddToTestCase(RelatedRecord.type.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, RelatedRecord.type.testCaseXML);
				this.assertExecutionStatus(testItemId, RelatedRecord.type.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type Field for assert', async () =>{
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedRecord.type.xpathInput);
				this.assertTestBuilderState(pageStructureInfo, Account.type, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Type Field for assert', async () =>{
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, RelatedRecord.type.asserttestCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping phone Field', async () =>{
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(RelatedRecord.phone.xpathInput);
				this.assertTestBuilderState(pageStructureInfo, Account.phone, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do phone Field', async () =>{
				await this.modifyAddToTestCase(RelatedRecord.phone.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, RelatedRecord.phone.testCaseXML);
				this.assertExecutionStatus(testItemId, RelatedRecord.phone.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () =>{
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//span[.='Save']");
				this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () =>{
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
        }); 
    };
}; 

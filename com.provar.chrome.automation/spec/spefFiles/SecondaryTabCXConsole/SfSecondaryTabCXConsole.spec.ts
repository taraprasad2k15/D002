import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SecondaryTab } from './SfSecondaryTabCXConsole';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfSecondaryTabCXConsoleSpec extends BaseSpec {
    public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [Standard.CurrentTabCXPsi, SecondaryTab.caseNewPsi];

        this.zephyrTest('AutomationAPI', 'PROT-153', 'TC_Secondary Tab', () => {
            beforeAll(async done => {
                const tcName = 'SecondaryTab.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
            this.step('Mapping Custom URL Field on New Case Screen', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const element1: WebElement = await this.findElement(remoteWebdriver, "//input[@value='New Case']", 10*1000);
				await remoteWebdriver.executeScript("arguments[0].click()", element1);
				await remoteWebdriver.switchTo().defaultContent();
				await this.findElement(remoteWebdriver,"//span[@class='tabText' and (.)='New Case']",10*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SecondaryTab.customUrl.Xpath,[SecondaryTab.primaryTab.Xpath]);
				this.assertTestBuilderState(pageStructureInfo,SecondaryTab.customUrl.fieldDetails , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
				await remoteWebdriver.switchTo().defaultContent();
				const element: WebElement = await this.findElement(remoteWebdriver, "//span[@class='tabText' and (.)='Details']", 10*1000);
				await remoteWebdriver.executeScript("arguments[0].click()", element);
			});
			this.step('Add & Do Custom URL field (Current Tab to Existing Tab)', async () => {
				await this.modifyAddToTestCase(SecondaryTab.customUrl.interactionParameters.currentTabToExistingTab);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SecondaryTab.customUrl.testCaseXML);
				this.assertExecutionStatus("0", SecondaryTab.customUrl.executionStatus.assert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom URL Field on New Case Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SecondaryTab.customUrl.Xpath,[SecondaryTab.primaryTab.Xpath]);
				this.assertTestBuilderState(pageStructureInfo,SecondaryTab.customUrl.fieldDetails , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom URL field (Current Tab to New Tab)', async () => {
				await this.modifyAddToTestCase(SecondaryTab.customUrl.interactionParameters.currentTabToNewTab);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SecondaryTab.customUrl.testCaseXML2);
				this.assertExecutionStatus("0", SecondaryTab.customUrl.executionStatus.assert, response.runExecutionStatus.currentTestCase);
			});
        });
    }
}
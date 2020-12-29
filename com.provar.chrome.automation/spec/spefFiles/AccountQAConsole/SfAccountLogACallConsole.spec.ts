import { WebDriver, WebElement, TouchSequence, By } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfAccountLogACallConsole } from './SfAccountLogACallConsole';
import { join } from 'path';

export class SfAccountLogACallConsoleSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [Standard.CurrentTabPsi, SfAccountLogACallConsole.logACallPSI];
		const pageStructureInfoAT: any[] = [Standard.CurrentTabPsi, SfAccountLogACallConsole.activityTimelinePSI];
        this.zephyrTest('AutomationAPI', "PROT-1850", 'SF_MAP_SF_CONSOLE_LX_QA_ACTIVITY_LOG A CALL', () => {
			beforeAll(async done => {
				const tcName = 'Account LogACall.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
            });
                this.step('Navigate to Log a Call on Feed Tab', async () => {
                    remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                    const tab: WebElement = await this.findElement(remoteWebdriver, SfAccountLogACallConsole.logACallTab.Xpath);
					await remoteWebdriver.executeScript('arguments[0].click();', tab);
                    const subjectField: WebElement = await this.findElement(remoteWebdriver, SfAccountLogACallConsole.subject.Xpath);
                    });
				this.step('Mapping the Subject field', async () => {
					const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACallConsole.subject.Xpath);
					this.assertTestBuilderState(pageStructureInfoQA, SfAccountLogACallConsole.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
					});
				this.step('Set the Subject field to Send Letter', async() => {
					await this.modifyAddToTestCase(SfAccountLogACallConsole.subject.interactionParameters.set);
					const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                    this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                    this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
					await this.assertTestCaseXML("0", SfAccountLogACallConsole.subject.testCaseXML.set);
					this.assertExecutionStatus("0", SfAccountLogACallConsole.subject.executionStatus.set, response.runExecutionStatus.currentTestCase);
					});
				this.step('Mapping the Comments field', async () => {
					const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACallConsole.comments.Xpath);
					this.assertTestBuilderState(pageStructureInfoQA, SfAccountLogACallConsole.comments.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
					});
				this.step('Set the From field', async() => {
					await this.modifyAddToTestCase(SfAccountLogACallConsole.comments.interactionParameters.set);
					const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
					const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
					await this.assertTestCaseXML(testItemId, SfAccountLogACallConsole.comments.testCaseXML);
					this.assertExecutionStatus(testItemId, SfAccountLogACallConsole.comments.executionStatus.set, response.runExecutionStatus.currentTestCase);
					});
				this.step('Mapping the Name Lookup field', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACallConsole.contactName.Xpath);
					this.assertTestBuilderState(pageStructureInfoQA, SfAccountLogACallConsole.contactName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
					});
				this.step('Set the Name Lookup field', async() => {
					await this.modifyAddToTestCase(SfAccountLogACallConsole.contactName.interactionParameters.set);
					const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
					const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
					await this.assertTestCaseXML(testItemId, SfAccountLogACallConsole.contactName.testCaseXML);
					this.assertExecutionStatus(testItemId, SfAccountLogACallConsole.contactName.executionStatus.set, response.runExecutionStatus.currentTestCase);
                    });
            this.step('Mapping the Save button', async() => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACallConsole.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfAccountLogACallConsole.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
                });
            this.step('Click the Save Button', async() => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountLogACallConsole.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountLogACallConsole.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
				});
			});
    };
}
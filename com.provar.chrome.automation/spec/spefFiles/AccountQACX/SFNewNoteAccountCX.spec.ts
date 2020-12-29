import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewNoteAccountCX } from './SfNewNoteAccountCX';
import { join } from 'path';

export class SfNewNoteAccountCXSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [SfNewNoteAccountCX.NewNoteViewPSI];
        this.zephyrTest('AutomationAPI', "PROT-1114", 'FS_MAP_SF_QA_AF_CX_NEW NOTE.CLICK', () => {
			beforeAll(async done => {
				const tcName = 'Account NewNote CX.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
                await this.endTestSession(done);
            });
			this.step('Navigate to New Note on Feed Tab', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                if (await this.verifyElement(remoteWebdriver, SfNewNoteAccountCX.feedTab.Xpath, 10000) != null) {
                    const feedTab: WebElement = await this.findElement(remoteWebdriver, SfNewNoteAccountCX.feedTab.Xpath, 10000);
					await remoteWebdriver.executeScript("arguments[0].click();", feedTab);
					// await feedTab.click();
                }
				const newNoteTab: WebElement = await this.findElement(remoteWebdriver, SfNewNoteAccountCX.newNoteTab.Xpath, 10000);
				await remoteWebdriver.executeScript("arguments[0].click();", newNoteTab);
				// await newTaskTab.click();
			});
			this.step('Mapping the Title field', async () => {
				const subjectField: WebElement = await this.findElement(remoteWebdriver, SfNewNoteAccountCX.title.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewNoteAccountCX.title.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewNoteAccountCX.title.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the Title field', async () => {
				await this.modifyAddToTestCase(SfNewNoteAccountCX.title.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfNewNoteAccountCX.title.testCaseXML);
				this.assertExecutionStatus("0", SfNewNoteAccountCX.title.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Private field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewNoteAccountCX.private.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewNoteAccountCX.private.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Check the Private field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewNoteAccountCX.private.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewNoteAccountCX.private.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Body field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewNoteAccountCX.body.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewNoteAccountCX.body.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Set the Body field', async () => {
				await this.modifyAddToTestCase(SfNewNoteAccountCX.body.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewNoteAccountCX.body.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewNoteAccountCX.body.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Title field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewNoteAccountCX.title.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfNewNoteAccountCX.title.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Title field', async () => {
                await this.modifyAddToTestCase(SfNewNoteAccountCX.title.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewNoteAccountCX.title.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfNewNoteAccountCX.title.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Private field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewNoteAccountCX.private.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfNewNoteAccountCX.private.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Private field', async () => {
                await this.modifyAddToTestCase(SfNewNoteAccountCX.private.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfNewNoteAccountCX.private.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfNewNoteAccountCX.private.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Body field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewNoteAccountCX.body.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfNewNoteAccountCX.body.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Body field', async () => {
                await this.modifyAddToTestCase(SfNewNoteAccountCX.body.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfNewNoteAccountCX.body.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfNewNoteAccountCX.body.executionStatus.readAssert, response.runExecutionStatus.currentTestCase);
            });
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewNoteAccountCX.create.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewNoteAccountCX.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewNoteAccountCX.create.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewNoteAccountCX.create.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
    };
}
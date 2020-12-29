import { WebDriver, WebElement, Actions } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewCaseOpportunityCX } from './SfNewCaseOpportunityCX';
import { join } from 'path';

export class SfNewCaseOpportunityCXSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [SfNewCaseOpportunityCX.NewCaseViewPSI];
		const pageStructureInfoLookup: any[] = [SfNewCaseOpportunityCX.conLookupPSI];
        this.zephyrTest('AutomationAPI', "PROT-1116", 'FS_MAP_SF_QA_AF_CX_NEW CASE.CLICK', () => {
			beforeAll(async done => {
				const tcName = 'Opportunity NewCase CX.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
                await this.endTestSession(done);
            });
			this.step('Navigate to New Case on Feed Tab', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                if (await this.verifyElement(remoteWebdriver, SfNewCaseOpportunityCX.feedTab.Xpath, 10000) != null) {
                    const feedTab: WebElement = await this.findElement(remoteWebdriver, SfNewCaseOpportunityCX.feedTab.Xpath, 10000);
                    await remoteWebdriver.executeScript("arguments[0].click();", feedTab);
                }
				const newCaseTab: WebElement = await this.findElement(remoteWebdriver, SfNewCaseOpportunityCX.newCaseTab.Xpath, 10000);
				await remoteWebdriver.executeScript("arguments[0].click();", newCaseTab);
				
			});
			this.step('Mapping the Subject field', async () => {
				const subjectField: WebElement = await this.findElement(remoteWebdriver, SfNewCaseOpportunityCX.subject.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpportunityCX.subject.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpportunityCX.subject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfNewCaseOpportunityCX.subject.testCaseXML.set);
				this.assertExecutionStatus("0", SfNewCaseOpportunityCX.subject.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Status field', async () => {
                await this.findElement(remoteWebdriver, SfNewCaseOpportunityCX.status.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.status.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpportunityCX.status.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('SetByIndex the Status picklist', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpportunityCX.status.interactionParameters.setByIndex);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.status.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.status.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.contactName.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpportunityCX.contactName.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
            });
            this.step('SfLookup the Contact Name field', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpportunityCX.contactName.interactionParameters.sfLookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.contactName.testCaseXMLlookup);
				this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.contactName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
            this.step('Mapping the SearchText field', async () => {
				var windowHandles = await remoteWebdriver.getAllWindowHandles();
				await remoteWebdriver.switchTo().window(windowHandles[1]);
				let windowUrl = await remoteWebdriver.getCurrentUrl();
				let windowTitle = await remoteWebdriver.getTitle();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.searchText.Xpath, ["//frame[@id='searchFrame']"], windowUrl, windowTitle);
                this.assertTestBuilderState(pageStructureInfoLookup, SfNewCaseOpportunityCX.searchText.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Set the SearchText field', async () => {
                await this.modifyAddToTestCase(SfNewCaseOpportunityCX.searchText.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executing', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 0, testItemId);
                await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.searchText.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.searchText.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Go! button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.go.Xpath, ["//frame[@id='searchFrame']"]);
                this.assertTestBuilderState(pageStructureInfoLookup, SfNewCaseOpportunityCX.go.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Go! button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.go.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.go.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.conName.Xpath, ["//frame[@id='resultsFrame']"]);
                const rowLocators = [
                    {
						"label": "Name (Name)",
						"selected": true,
						"value": "AutomationContact",
					},
					{
						"label": "Account Name (ACCOUNT_NAME)",
						"selected": false,
					},
                ];
                this.assertTestBuilderState(pageStructureInfoLookup, SfNewCaseOpportunityCX.conName.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Click the Contact Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.conName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.conName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.description.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpportunityCX.description.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Set the Description field', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpportunityCX.description.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executing', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 0, testItemId);
                await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.description.testCaseXML.set);
				this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.description.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpportunityCX.subject.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Subject field', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpportunityCX.subject.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.subject.testCaseXML.assert);
				this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.subject.executionStatus.assert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.description.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpportunityCX.description.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Description field', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpportunityCX.description.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.description.testCaseXML.assert);
				this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.description.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.contactName.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpportunityCX.contactName.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Contact Name field', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpportunityCX.contactName.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.contactName.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.contactName.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Status field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.status.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpportunityCX.status.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Status field', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpportunityCX.status.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.status.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.status.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpportunityCX.create.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpportunityCX.create.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpportunityCX.create.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseOpportunityCX.create.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
    };
}
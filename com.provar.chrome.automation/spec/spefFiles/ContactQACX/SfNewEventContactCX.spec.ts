import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewEventContactCX } from './SfNewEventContactCX';
import { join } from 'path';

export class SfNewEventContactCXSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [SfNewEventContactCX.NewTaskViewPSI];
		const pageStructureInfoLookup: any[] = [SfNewEventContactCX.oppLookupPSI];
        const pageStructureInfoCB: any[] = [SfNewEventContactCX.comboBoxPSI];
        this.zephyrTest('AutomationAPI', "PROT-1115", 'FS_MAP_SF_QA_AF_CX_NEW EVENT.CLICK', () => {
			beforeAll(async done => {
				const tcName = 'Contact NewEvent CX.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
                await this.endTestSession(done);
            });
			this.step('Navigate to New Task on Feed Tab', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                if (await this.verifyElement(remoteWebdriver, SfNewEventContactCX.feedTab.Xpath, 10000) != null) {
                    const feedTab: WebElement = await this.findElement(remoteWebdriver, SfNewEventContactCX.feedTab.Xpath, 10000);
                    await remoteWebdriver.executeScript("arguments[0].click();", feedTab);
                }
				const newEventTab: WebElement = await this.findElement(remoteWebdriver, SfNewEventContactCX.newEventTab.Xpath, 10000);
				await remoteWebdriver.executeScript("arguments[0].click();", newEventTab);
			});
			this.step('Mapping the Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.subject.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field', async () => {
				await this.modifyAddToTestCase(SfNewEventContactCX.subject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfNewEventContactCX.subject.testCaseXML.set);
				this.assertExecutionStatus("0", SfNewEventContactCX.subject.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.description.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.description.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Set the Description field', async () => {
				await this.modifyAddToTestCase(SfNewEventContactCX.description.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewEventContactCX.description.testCaseXML.set);
				this.assertExecutionStatus(testItemId, SfNewEventContactCX.description.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Start Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.startDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.startDate.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.DateTimeCX.enterableMode, response.testbuilderState);
			});
			this.step('Set the Start Date field', async () => {
                await this.modifyAddToTestCase(SfNewEventContactCX.startDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewEventContactCX.startDate.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewEventContactCX.startDate.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the End Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.endDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.endDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTimeCX.enterableMode, response.testbuilderState);
			});
			this.step('Set the End Date field', async () => {
				await this.modifyAddToTestCase(SfNewEventContactCX.endDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewEventContactCX.endDate.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewEventContactCX.endDate.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Related To field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.relatedTo.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.relatedTo.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
            });
            this.step('SfLookup the Related To field', async () => {
				await this.modifyAddToTestCase(SfNewEventContactCX.relatedTo.interactionParameters.sfLookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewEventContactCX.relatedTo.testCaseXML.lookup);
				this.assertExecutionStatus(testItemId, SfNewEventContactCX.relatedTo.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
			});
            this.step('Mapping the SearchText field', async () => {
				var windowHandles = await remoteWebdriver.getAllWindowHandles();
				await remoteWebdriver.switchTo().window(windowHandles[1]);
				let windowUrl = await remoteWebdriver.getCurrentUrl();
				let windowTitle = await remoteWebdriver.getTitle();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.searchText.Xpath, ["//frame[@id='searchFrame']"], windowUrl, windowTitle);
                this.assertTestBuilderState(pageStructureInfoLookup, SfNewEventContactCX.searchText.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Set the SearchText field', async () => {
                await this.modifyAddToTestCase(SfNewEventContactCX.searchText.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executing', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 0, testItemId);
                await this.assertTestCaseXML(testItemId, SfNewEventContactCX.searchText.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfNewEventContactCX.searchText.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Go! button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.go.Xpath, ["//frame[@id='searchFrame']"]);
                this.assertTestBuilderState(pageStructureInfoLookup, SfNewEventContactCX.go.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Go! button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfNewEventContactCX.go.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewEventContactCX.go.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.opportunityName.Xpath, ["//frame[@id='resultsFrame']"]);
                const rowLocators = [
                    {
						"label": "Opportunity Name (Name)",
						"selected": true,
						"value": "AutomationOpportunity",
					},
					{
						"label": "Account Name (ACCOUNT_NAME)",
						"selected": false,
						"value": "",
					},
                ];
                this.assertTestBuilderState(pageStructureInfoLookup, SfNewEventContactCX.opportunityName.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Click the Opportunity Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfNewEventContactCX.opportunityName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewEventContactCX.opportunityName.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
			this.step('Mapping the Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.subject.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Subject field', async () => {
				await this.modifyAddToTestCase(SfNewEventContactCX.subject.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executing', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 0, testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
				await this.assertTestCaseXML(testItemId, SfNewEventContactCX.subject.testCaseXML.assert);
				this.assertExecutionStatus(testItemId, SfNewEventContactCX.subject.executionStatus.assert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.description.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.description.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Description field', async () => {
				await this.modifyAddToTestCase(SfNewEventContactCX.description.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewEventContactCX.description.testCaseXML.assert);
				this.assertExecutionStatus(testItemId, SfNewEventContactCX.description.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the StartDate field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.startDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.startDate.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.DateTimeCX.enterableMode, response.testbuilderState);
			});
			this.step('Assert the StartDate field', async () => {
				await this.modifyAddToTestCase(SfNewEventContactCX.startDate.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewEventContactCX.startDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfNewEventContactCX.startDate.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the EndDate field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.endDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.endDate.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.DateTimeCX.enterableMode, response.testbuilderState);
			});
			this.step('Assert the EndDate field', async () => {
				await this.modifyAddToTestCase(SfNewEventContactCX.endDate.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewEventContactCX.endDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfNewEventContactCX.endDate.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.name.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.name.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Name field', async () => {
				await this.modifyAddToTestCase(SfNewEventContactCX.name.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewEventContactCX.name.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewEventContactCX.name.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the RelatedTo field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.relatedTo.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.relatedTo.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Assert the RelatedTo field', async () => {
				await this.modifyAddToTestCase(SfNewEventContactCX.relatedTo.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewEventContactCX.relatedTo.testCaseXML.assert);
				this.assertExecutionStatus(testItemId, SfNewEventContactCX.relatedTo.executionStatus.assert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewEventContactCX.create.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewEventContactCX.create.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewEventContactCX.create.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewEventContactCX.create.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
    };
}
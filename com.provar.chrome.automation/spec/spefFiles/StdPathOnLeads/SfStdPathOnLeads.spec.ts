import { SfStdPathOnLeads } from '../StdPathOnLeads/SfStdPathOnLeads';
import { BaseSpec } from '../BaseSpec';
import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Lead } from '../../testdata/sfObjects/Lead';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';

export class SfStdPathOnLeadsSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		const connectionName = 'Regmain';
		let pageStructureInfo: any[] = [Lead.leadPathPsi];
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

		this.zephyrTest('AutomationAPI', 'PROT-1128', 'FS_MAP_LAYOUT_LX_PA_LEADS.MCS', () => {
			beforeAll(async done => {
				const tcName = 'Std Path on Leads.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Contacted Stage field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfStdPathOnLeads.contactedStage.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfStdPathOnLeads.contactedStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.contactedStage, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Contacted Stage field', async () => {
				await this.modifyAddToTestCase(SfStdPathOnLeads.contactedStage.interactionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfStdPathOnLeads.contactedStage.testCaseXML);
				this.assertExecutionStatus(testItemId, SfStdPathOnLeads.contactedStage.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Mark as Current Status field', async () => {
				await this.findElement(remoteWebdriver, SfStdPathOnLeads.markAsCurrentStatus.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfStdPathOnLeads.markAsCurrentStatus.xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.markAsCurrentStatus, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Mark as Current Status field', async () => {
				await this.modifyAddToTestCase(SfStdPathOnLeads.markAsCurrentStatus.interactionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfStdPathOnLeads.markAsCurrentStatus.testCaseXML);
				this.assertExecutionStatus(testItemId, SfStdPathOnLeads.markAsCurrentStatus.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1129', 'FS_MAP_LAYOUT_LX_PA_LEADS.MC', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Mark as Complete field', async () => {
				await this.findElement(remoteWebdriver, SfStdPathOnLeads.markAsComplete.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfStdPathOnLeads.markAsComplete.xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.markAsComplete, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Mark as Complete field', async () => {
				await this.modifyAddToTestCase(SfStdPathOnLeads.markAsComplete.interactionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfStdPathOnLeads.markAsComplete.testCaseXML);
				this.assertExecutionStatus(testItemId, SfStdPathOnLeads.markAsComplete.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1130', 'FS_MAP_LAYOUT_LX_PA_LEADS.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			})
			this.step('Mapping Contacted field', async () => {
				await this.findElement(remoteWebdriver, SfStdPathOnLeads.contactedStage.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfStdPathOnLeads.contactedStage.xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.contactedStage, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Contacted field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfStdPathOnLeads.contactedStage.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	};

}
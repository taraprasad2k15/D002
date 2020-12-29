import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { DispatcherConsoleData } from './DispatcherConsole.data';
import { join } from 'path';

export class DispatcherConsoleSpec extends BaseSpec {

	public runTest() {

		let pageStructureInfo: any[];
		const iframeXpath = ["//iframe[starts-with(@name,'vfFrameId')]"];

		this.zephyrTest('AutomationAPI', 'PROT-845', 'Field Service Lightning : Field Service Dispatcher Console – Gantt View(Right Panel)', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'DispatcherConsole.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [DispatcherConsoleData.PSI];
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Map inJeopardy', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.inJeopardy.xpath, iframeXpath);
				this.assertTestBuilderState(pageStructureInfo, DispatcherConsoleData.inJeopardy.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do inJeopardy', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.inJeopardy.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.inJeopardy.testCaseXML);
				this.assertExecutionStatus(testItemId, DispatcherConsoleData.inJeopardy.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map violations', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.violations.xpath, iframeXpath);
				this.assertTestBuilderState(pageStructureInfo, DispatcherConsoleData.violations.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do violations', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.violations.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.violations.testCaseXML);
				this.assertExecutionStatus(testItemId, DispatcherConsoleData.violations.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map completedServices', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.completedServices.xpath, iframeXpath);
				this.assertTestBuilderState(pageStructureInfo, DispatcherConsoleData.completedServices.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do completedServices', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.completedServices.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.completedServices.testCaseXML);
				this.assertExecutionStatus(testItemId, DispatcherConsoleData.completedServices.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map averageTravelTime', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.averageTravelTime.xpath, iframeXpath);
				this.assertTestBuilderState(pageStructureInfo, DispatcherConsoleData.averageTravelTime.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do averageTravelTime', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.averageTravelTime.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.averageTravelTime.testCaseXML);
				this.assertExecutionStatus(testItemId, DispatcherConsoleData.averageTravelTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map totalScheduleTime', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.totalScheduleTime.xpath, iframeXpath);
				this.assertTestBuilderState(pageStructureInfo, DispatcherConsoleData.totalScheduleTime.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do totalScheduleTime', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.totalScheduleTime.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.totalScheduleTime.testCaseXML);
				this.assertExecutionStatus(testItemId, DispatcherConsoleData.totalScheduleTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map notifications', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.notifications.xpath, iframeXpath);
				this.assertTestBuilderState(pageStructureInfo, DispatcherConsoleData.notifications.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
			});
			this.step('Add & Do notifications', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.notifications.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.notifications.testCaseXML);
				this.assertExecutionStatus(testItemId, DispatcherConsoleData.notifications.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map jumpToDate', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.jumpToDate.xpath, iframeXpath);
				this.assertTestBuilderState(pageStructureInfo, DispatcherConsoleData.jumpToDate.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do jumpToDate', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.jumpToDate.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.jumpToDate.testCaseXML);
				this.assertExecutionStatus(testItemId, DispatcherConsoleData.jumpToDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map optimizationRequests', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.optimizationRequests.xpath, iframeXpath);
				this.assertTestBuilderState(pageStructureInfo, DispatcherConsoleData.optimizationRequests.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
			});
			this.step('Add & Do optimizationRequests', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.optimizationRequests.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.optimizationRequests.testCaseXML);
				this.assertExecutionStatus(testItemId, DispatcherConsoleData.optimizationRequests.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map jumpToToday', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.jumpToToday.xpath, iframeXpath);
				this.assertTestBuilderState(pageStructureInfo, DispatcherConsoleData.jumpToToday.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
			});
			this.step('Add & Do jumpToToday', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.jumpToToday.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.jumpToToday.testCaseXML);
				this.assertExecutionStatus(testItemId, DispatcherConsoleData.jumpToToday.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map territoryName', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.territoryName.xpath, iframeXpath);
				this.assertTestBuilderState([DispatcherConsoleData.PSI, DispatcherConsoleData.PSI_Table], DispatcherConsoleData.territoryName.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do territoryName', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.territoryName.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.territoryName.testCaseXML);
			});
			this.step('Map territoryTimezone', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.territoryTimezone.xpath, iframeXpath);
				this.assertTestBuilderState([DispatcherConsoleData.PSI, DispatcherConsoleData.PSI_Table], DispatcherConsoleData.territoryTimezone.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do territoryTimezone', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.territoryTimezone.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.territoryTimezone.testCaseXML);
			});
			this.step('Map resourceName', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.resourceName.xpath, iframeXpath);
				this.assertTestBuilderState([DispatcherConsoleData.PSI, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table], DispatcherConsoleData.resourceName.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do resourceName', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.resourceName.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, DispatcherConsoleData.resourceName.testCaseXML);
			});
			this.step('Map event reshuffle', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.event.xpath, iframeXpath);
				this.assertTestBuilderState([DispatcherConsoleData.PSI, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table], DispatcherConsoleData.event.fieldDetails, DispatcherConsoleData.event.interaction, [], response.testbuilderState);
			});
			this.step('Add & Do event reshuffle', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.event.modificationParameter.reshuffle);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, [{
					"title": [
						/With Appointment Table {name.*/
					],
					"clauses": [
						{
							"clause": [
								{
									"steps": [
										{
											"apiCall": [
												{
													"title": [
														"Reshuffle"
													],
												}
											]
										}
									]
								}
							]
						}
					]
				}]);
			});
			this.step('Map event flag', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.event.xpath, iframeXpath);
				this.assertTestBuilderState([DispatcherConsoleData.PSI, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table], DispatcherConsoleData.event.fieldDetails, DispatcherConsoleData.event.interaction, [], response.testbuilderState);
			});
			this.step('Add & Do event flag', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.event.modificationParameter.flag);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, [{
					"title": [
						"Flag Appointment"
					],
				}]);
			});
			this.step('Map event unflag', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.event.xpath, iframeXpath);
				this.assertTestBuilderState([DispatcherConsoleData.PSI, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table], DispatcherConsoleData.event.fieldDetails, DispatcherConsoleData.event.interaction, [], response.testbuilderState);
			});
			this.step('Add & Do event unflag', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.event.modificationParameter.unflag);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, [{
					"title": [
						"Unflag Appointment"
					]
				}]);
			});
			this.step('Map event pin', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.event.xpath, iframeXpath);
				this.assertTestBuilderState([DispatcherConsoleData.PSI, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table], DispatcherConsoleData.event.fieldDetails, DispatcherConsoleData.event.interaction, [], response.testbuilderState);
			});
			this.step('Add & Do event pin', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.event.modificationParameter.pin);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, [
					{
						"title": [
							"Pin Appointment"
						],
					}
				]);
			});
			this.step('Map event unpin', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.event.xpath, iframeXpath);
				this.assertTestBuilderState([DispatcherConsoleData.PSI, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table], DispatcherConsoleData.event.fieldDetails, DispatcherConsoleData.event.interaction, [], response.testbuilderState);
			});
			this.step('Add & Do event unpin', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.event.modificationParameter.unpin);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, [{
					"title": [
						"Unpin Appointment"
					],
				}]);
			});
			this.step('Map event hover', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.event.xpath, iframeXpath);
				this.assertTestBuilderState([DispatcherConsoleData.PSI, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table], DispatcherConsoleData.event.fieldDetails, DispatcherConsoleData.event.interaction, [], response.testbuilderState);
			});
			this.step('Add & Do event hover', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.event.modificationParameter.hover);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, [{
					"title": [
						"Hover"
					],
				}]);
			});
			this.step('Map event getCandidates', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(DispatcherConsoleData.event.xpath, iframeXpath);
				this.assertTestBuilderState([DispatcherConsoleData.PSI, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table, DispatcherConsoleData.PSI_Table], DispatcherConsoleData.event.fieldDetails, DispatcherConsoleData.event.interaction, [], response.testbuilderState);
			});
			this.step('Add & Do event getCandidates', async () => {
				await this.modifyAddToTestCase(DispatcherConsoleData.event.modificationParameter.getCandidates);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, [
					{
						"title": [
							"Get Candidates"
						],
					}]);
			});
		});
	};
}; 
import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { ProdFeatureViewData } from './ProdFeatureView.data';
import { join } from 'path';

export class ProdFeatureViewSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [ProdFeatureViewData.PSI];
		const assertParams = {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
					extractLabel: true,
					assertLabel: true,
				},
			}
		};
		const executionStatusAssert = [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
			},
		]
		const testcaseXMLAssert =[{
			name: ['UiAssert'],
			title: ['UI Assert'],
		}]

		this.zephyrTest('AutomationAPI', 'PROT-2303', 'FS_MAP_SF_CPQ_Prod_Feature_View', () => {
			beforeAll(async done => {
				const tcName = 'ProdFeatureView.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping featureName field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, ProdFeatureViewData.featureName.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ProdFeatureViewData.featureName.xpath);
				this.assertTestBuilderState(pageStructureInfo, ProdFeatureViewData.featureName.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do featureName field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping configuredSku field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ProdFeatureViewData.configuredSku.xpath);
				this.assertTestBuilderState(pageStructureInfo, ProdFeatureViewData.configuredSku.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
			});
			this.step('Add & Do configuredSku field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping createdBy field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ProdFeatureViewData.createdBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, ProdFeatureViewData.createdBy.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
			});
			this.step('Add & Do createdBy field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping lastModifiedBy field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ProdFeatureViewData.lastModifiedBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, ProdFeatureViewData.lastModifiedBy.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
			});
			this.step('Add & Do lastModifiedBy field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping number field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ProdFeatureViewData.number.xpath);
				this.assertTestBuilderState(pageStructureInfo, ProdFeatureViewData.number.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do number field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping category field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ProdFeatureViewData.category.xpath);
				this.assertTestBuilderState(pageStructureInfo, ProdFeatureViewData.category.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do category field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
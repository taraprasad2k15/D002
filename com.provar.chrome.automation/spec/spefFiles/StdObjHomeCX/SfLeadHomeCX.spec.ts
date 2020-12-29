import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfLeadHomeCX } from './SfLeadHomeCX';
import { SfCommonFIeld } from '../SfCommonField';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';

export class SfLeadHomeCXSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const assertInteractionParameters = {
			interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
			},
		}};
		let pageStructureInfo: any[] = [Lead.leadHomePsi];
		let rowLocator = [
			{
				"label": "Name (Name)",
				"selected": true,
				"value": "AutomationLead"
			},
			{
				"label": "Company (LEAD_COMPANY)",
				"selected": false,
				"value": "Provar"
			},
			{
				"label": "Phone (LEAD_PHONE)",
				"selected": false,
				"value": "+91-998 877 6655"
			},
		];
		const assertColumnInteractionParameters = {
			interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: false,
				assertColumnAttributes: true,
				extractColumnAttributes: true,
				expectedAttributes:{
					columnHeaderText: {
						value: 'Name',
						caseSensitive: true,
						normalise: true,
					},
					columnVisible: {
						value: true,
					},
				},
			},
		}};
		this.zephyrTest('AutomationAPI', 'PROT-1100', 'FS_MAP_SF_HM_CX_COLUMN HEADINGS.RA', () => {
			beforeAll(async done => {
				const tcName = 'Lead HomeCX.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);				
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Name Field for column assertion', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfLeadHomeCX.name.Xpath , 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHomeCX.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.name, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Name field for column assertion', async () => {
				await this.modifyAddToTestCase(assertColumnInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfLeadHomeCX.name.testCaseXMLAssertColumn);
				this.assertExecutionStatus(testItemId, SfLeadHomeCX.name.executionStatusAssertColumn, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1101', 'FS_MAP_SF_HM_CX_REFERENCE FIELD.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Name Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHomeCX.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.name, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Name field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				// const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfLeadHomeCX.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfLeadHomeCX.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1102', 'FS_MAP_SF_HM_CX_TEXT FIELDS.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Phone Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHomeCX.phone.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.phone, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnly, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Phone field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfLeadHomeCX.phone.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfLeadHomeCX.phone.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1103', 'FS_MAP_SF_HM_CX_ACTION BUTTON.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping New Button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.newButton.XpathCX , 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.newButton.XpathCX);
				this.assertTestBuilderState(pageStructureInfo, Standard.newButton, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			// this.step('Click Cancel button', async () => {
			// 	const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
			// 	await element.click();
			// 	expect(true).toEqual(true);
			// });		
			// it('Sleep for 4 seconds', async done => {
			// 	expect(true).toEqual(true);
			// 	setTimeout(async () => {
			// 		done();
			// 	}, 4*1000);
			// },5*1000);
		});
	}
}

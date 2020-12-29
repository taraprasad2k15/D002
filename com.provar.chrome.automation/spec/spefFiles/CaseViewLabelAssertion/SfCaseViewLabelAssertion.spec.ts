import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCaseViewLabelAssertion } from './SfCaseViewLabelAssertion';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfCaseViewSpecLabelAssertion extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		const connectionName = 'Regmain';
		let pageStructureInfo: any[] = [Case.caseViewPsi];
		this.zephyrTest('AutomationAPI', 'PROT-1034', 'FS_MAP_SF_DT_LX_LINK.START INLINE EDIT', () => {
			beforeAll(async done => {
				const tcName = 'Case View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach(); 
			});
			this.step('Mapping Status field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfCaseViewLabelAssertion.status.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.status.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.status, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Add & Do status field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.status.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.status.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1717', 'FS_MAP_SF_DT_LX_PICKLIST.LABELASSERTION.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Casetype field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.caseType.caseTypeXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseTypeField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Casetype field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.caseType.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});	
		this.zephyrTest('AutomationAPI', 'PROT-1718', 'FS_MAP_SF_DT_LX_TEXT.LABELASSERTION.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.subject, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.subject.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1719', 'FS_MAP_SF_DT_LX_TEXTAREA.LABELASSERTION.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.description.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.description, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.description.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1720', 'FS_MAP_SF_DT_LX_CHECKBOX.LABELASSERTION.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customCheckbox, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.customCheckbox.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1721', 'FS_MAP_SF_DT_LX_TIME.LABELASSERTION.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.customTime.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customTime, Standard.interaction.set, Standard.applicableInteractions.Time.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Time field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1722', 'FS_MAP_SF_DT_LX_RICH TEXT.LABELASSERTION.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.customRichText.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customRichText, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1723', 'FS_MAP_SF_DT_LX_MULTI SELECT PICKLIST.LABELASSERTION.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist(multi) Select field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.customPicklistSelect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customPicklistMulti, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Select field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.customPicklistSelect.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1724', 'FS_MAP_SF_DT_LX_DATETIME.LABELASSERTION.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date-Time Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.customDateTime.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customDateTime, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Time field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.customDateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1725', 'FS_MAP_SF_DT_LX_DATE.LABELASSERTION.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.customDate.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customDate, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Date field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.customDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1726', 'FS_MAP_SF_DT_LX_LOOKUP.LABELASSERTION.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
                await this.endTestSession(done);
			});
			this.step('Mapping Parent Case Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseViewLabelAssertion.parentCase.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.parentCaseLookupField, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Parent Case field', async () => {
				await this.modifyAddToTestCase(SfCaseViewLabelAssertion.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseViewLabelAssertion.parentCase.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseViewLabelAssertion.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	
		
	}
}
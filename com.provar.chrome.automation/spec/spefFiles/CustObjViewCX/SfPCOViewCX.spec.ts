import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfPCOViewCX } from './SfPCOViewCX';
import { SfCommonFIeld } from '../SfCommonField';
import { PCO } from '../../testdata/sfObjects/PCO';
import { join } from 'path';

export class SfPCOViewCXSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [PCO.PCOviewPsiCX];
		this.zephyrTest('AutomationAPI', 'PROT-1084', 'FS_MAP_SF_DT_CX_LINK.START INLINE EDIT.Custom', () => {
			beforeAll(async done => {
				const tcName = 'PCO ViewCX.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Provar Custom Object Name field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfPCOViewCX.name.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Activate Inline Edit the Provar Custom Object Name field', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.name.interactionParameters.inlineEdit);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.name.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.name.executionStatusIE, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1085', 'FS_MAP_SF_DT_CX_TEXT.SET.Custom.EditMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Provar Custom Object Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.name.XpathILE);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.set, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Set the Provar Custom Object Name to Automation Object', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.name.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.name.testCaseXMLSet);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1086', 'FS_MAP_SF_DT_CX_STANDARD BUTTON.SAVEEDIT.CLICK.Custom.EditMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Map SaveEdit Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do SaveEdit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1087', 'FS_MAP_SF_DT_CX_STANDARD BUTTON.EDIT.CLICK.Custom.EditMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Map Edit Button', async () => {
				await this.findElement(remoteWebdriver, "//input[@title='Edit']", 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//input[@title='Edit']");
				this.assertTestBuilderState(pageStructureInfo, Standard.editButton, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.editButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1088', 'FS_MAP_SF_DT_CX_CHECKBOX.CHECK.Custom.EditMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Test Status field', async () => {
				await this.findElement(remoteWebdriver, SfPCOViewCX.testStatus.XpathIE, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.testStatus.XpathIE);
				pageStructureInfo = [PCO.PCOEditPsiCX];
				this.assertTestBuilderState(pageStructureInfo, PCO.testStatusField, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Check the Test Status field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfPCOViewCX.testStatus.testCaseXML);
				this.assertExecutionStatus("0", SfPCOViewCX.testStatus.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1089', 'FS_MAP_SF_DT_CX_PICKLIST.SET.Custom.EditMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Picklist field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.pathStages.XpathIE);
				this.assertTestBuilderState(pageStructureInfo, PCO.pathStage, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Check the Picklist field', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.pathStages.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.pathStages.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.pathStages.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1090', 'FS_MAP_SF_DT_CX_MULTI SELECT PICKLIST.SELECT.Custom.EditMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist Select column', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.customPicklist.XpathIEMutliSelect);
				this.assertTestBuilderState(pageStructureInfo, PCO.customPicklistMulti, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Multiselect Custom Picklist field to Green', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.customPicklist.interactionParameters.multiselect);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.customPicklist.testCaseXMLMultiSelect);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.customPicklist.executionStatusMultiSelect, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1091', 'FS_MAP_SF_DT_CX_TEXT AREA.SET.Custom.EditMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Short Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.shortDescription.XpathIE);
				this.assertTestBuilderState(pageStructureInfo, PCO.shortDescription, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Set the Short Description field to Automation Description for the Short Description', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.shortDescription.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.shortDescription.testCaseXMLSet);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.shortDescription.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1092', 'FS_MAP_SF_DT_CX_DATE AND TIME.SET.Custom.EditMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping TestDate field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.testDate.XpathIE);
				this.assertTestBuilderState(pageStructureInfo, PCO.testDate, Standard.interaction.set, Standard.applicableInteractions.DateTimeCX.enterableMode, response.testbuilderState);
			});
			this.step('Set the TestDate field', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.testDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.testDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.testDate.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1093', 'FS_MAP_SF_DT_CX_STANDARD BUTTON.SAVE.CLICK.EditMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Save button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save button field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1094', 'FS_MAP_SF_DT_CX_TEXT.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Provar Custom Object Name field', async () => {
				await this.findElement(remoteWebdriver, SfPCOViewCX.name.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.name.Xpath);
				pageStructureInfo = [PCO.PCOviewPsiCX];
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.readAssert,Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Assert the Provar Custom Object Name field', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.name.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfPCOViewCX.name.testCaseXMLAssert);
				this.assertExecutionStatus("0", SfPCOViewCX.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1095', 'FS_MAP_SF_DT_CX_CHECKBOX.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Test Status field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.testStatus.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.testStatusField, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
			});
			this.step('Assert the Test Status field', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.testStatus.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.testStatus.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.testStatus.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1096', 'FS_MAP_SF_DT_CX_PICKLIST.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Path Stages field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.pathStages.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.pathStage, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Assert the Path Stages field', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.pathStages.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.pathStages.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.pathStages.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1097', 'FS_MAP_SF_DT_CX_MULTI SELECT PICKLIST.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Custom Picklist(Multi) field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.customPicklist.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.customPicklistMulti, Standard.interaction.readAssert, Standard.applicableInteractions.MultiPicklist.readMode, response.testbuilderState);
			});
			this.step('Assert the Custom Picklist(Multi) field', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.customPicklist.interactionParameters.readassert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.customPicklist.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.customPicklist.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1098', 'FS_MAP_SF_DT_CX_TEXTAREA.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Short Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.shortDescription.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.shortDescription, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
			});
			this.step('Assert the Short Description field', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.shortDescription.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.shortDescription.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.shortDescription.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1099', 'FS_MAP_SF_DT_CX_DATE AND TIME.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Test Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOViewCX.testDate.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.testDate, Standard.interaction.readAssert, Standard.applicableInteractions.DateTimeCX.readMode, response.testbuilderState);
			});
			this.step('Assert the Test Date field', async () => {
				await this.modifyAddToTestCase(SfPCOViewCX.testDate.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOViewCX.testDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOViewCX.testDate.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
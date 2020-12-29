import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { PCO } from '../../testdata/sfObjects/PCO';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewPCO } from './SfNewPCO';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfNewPCOSpec extends BaseSpec {
	public runTest() {
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const debug: boolean = false;
		let pageStructureInfo: any[] = [PCO.PCONewPsi];

		this.zephyrTest('AutomationAPI', 'PROT-912', 'FS_MAP_SF_DT_LX_CHECKBOX.CHECK.Custom', () => {
			beforeAll(async done => {
				const tcName = 'PCO New.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Test Status Checkbox field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfNewPCO.testStatus.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.testStatus.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.testStatusField, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Test Status field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.testStatus.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.testStatus.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewPCO.testStatus.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-933', 'FS_MAP_SF_DT_LX_DATE AND TIME.SET.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Test Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.testDate.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.testDate, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Test Date field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.testDate.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.testDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewPCO.testDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-921', 'FS_MAP_SF_DT_LX_PICKLIST.SETBYINDEX.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Path Stages field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.pathStage.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.pathStage, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Path Stages field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.pathStage.interactionParameters.setByIndex);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.pathStage.testCaseXML.setByIndex);
				this.assertExecutionStatus(testItemId, SfNewPCO.pathStage.executionStatus.setByIndex, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-920', 'FS_MAP_SF_DT_LX_PICKLIST.SET.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Path Stages field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.pathStage.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.pathStage, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Path Stages field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.pathStage.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.pathStage.testCaseXML.set);
				this.assertExecutionStatus(testItemId, SfNewPCO.pathStage.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1021', 'FS_MAP_SF_DT_LX_STANDARD BUTTON.SAVE&NEW.CLICK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Save & New button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveAndNewButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveAndNewButton2, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save & New button field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveAndNewButton2.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveAndNewButton2.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			}, 5 * 1000);
		});
		this.zephyrTest('AutomationAPI', 'PROT-945', 'FS_MAP_SF_DT_LX_MULTI SELECT PICKLIST.SELECT.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist(multi) Select field', async () => {
				const firstele = await this.findElement(remoteWebdriver, SfNewPCO.customPicklistSelect.Xpath);
				await remoteWebdriver.executeScript("arguments[0].click()", firstele);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.customPicklistSelect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.customPicklistMulti, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Select field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.customPicklistSelect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.customPicklistSelect.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewPCO.customPicklistSelect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-946', 'FS_MAP_SF_DT_LX_MULTI SELECT PICKLIST.DESELECT.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist(multi) Deselect field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.customPicklistDeselect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.customPicklistMulti, Standard.interaction.sfDeselect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Deselect field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.customPicklistDeselect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.customPicklistDeselect.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewPCO.customPicklistDeselect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1222', 'FS_MAP_SF_DT_LX_GEOLOCATION.SET.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Longitude field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.longitude.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.longitude, Standard.interaction.set, SfNewPCO.longitude.applicableInteractions, response.testbuilderState);
			});
			this.step('Add & Do Longitude field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.longitude.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.longitude.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewPCO.longitude.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Lattitude field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.latitude.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.latitude, Standard.interaction.set, SfNewPCO.longitude.applicableInteractions, response.testbuilderState);
			});
			this.step('Add & Do Lattitude field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.latitude.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.latitude.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewPCO.latitude.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1019', 'FS_MAP_SF_DT_LX_VALIDATION ERROR.PAGE.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Page Errors', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.pageErrorNew.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.pageError, Standard.interaction.readAssert, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do Page Errors field', async () => {
				await this.modifyAddToTestCase(SfCommonFIeld.pageErrorNew.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.pageErrorNew.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.pageErrorNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1022', 'FS_MAP_SF_DT_LX_VALIDATION ERROR.FIELD.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Name field for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Name field for Assertions', async () => {
				await this.modifyAddToTestCase(SfNewPCO.name.interactionParametersAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfNewPCO.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1023', 'FS_MAP_SF_DT_LX_TEXT.SET.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Name field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.name.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.name.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewPCO.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-893', 'FS_MAP_SF_DT_LX_TEXTAREA.SET.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Short Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.shortDescription.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.shortDescription, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Short Description field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.shortDescription.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.shortDescription.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewPCO.shortDescription.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-904', 'FS_MAP_SF_DT_LX_RICH TEXT.SET.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.customRichText.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.customRichText, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(SfNewPCO.customRichText.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewPCO.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewPCO.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		// commenting it until Aaditya fix them.
		// this.zephyrTest('AutomationAPI', 'PROT-2297', 'FS_MAP_SF_DT_LX_TIME.SET.Custom', () => {
		// 	beforeEach(() => {
		// 		this.beforeEach();
		// 	});
		// 	this.step('Mapping Time field', async () => {
		// 		remoteWebdriver = await this.getRemoteWebDriver(connectionName);
		// 		await this.findElement(remoteWebdriver, SfNewPCO.time.Xpath, 20 * 1000);
		// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewPCO.time.Xpath);
		// 		this.assertTestBuilderState(pageStructureInfo, SfNewPCO.time.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Time.enterableMode, response.testbuilderState);
		// 	});
		// 	this.step('Set the Time field', async () => {
		// 		await this.modifyAddToTestCase(SfNewPCO.time.interactionParameters.set);
		// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
		// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
		// 		await this.assertTestCaseXML(testItemId, SfNewPCO.time.testCaseXML);
		// 		this.assertExecutionStatus(testItemId, SfNewPCO.time.executionStatus, response.runExecutionStatus.currentTestCase);
		// 	});
		//         });
		this.zephyrTest('AutomationAPI', 'PROT-1024', 'FS_MAP_SF_DT_LX_STANDARD BUTTON.CANCEL.CLICK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Cancel button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1025', 'FS_MAP_SF_DT_LX_STANDARD BUTTON.SAVE.CLICK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Cancel button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
	}
}
import { WebDriver, WebElement, TouchSequence } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { Case } from '../../testdata/sfObjects/Case';
import { SfPCOView } from './SfPCOView';
import { SfCommonFIeld } from '../SfCommonField';
import { PCO } from '../../testdata/sfObjects/PCO';
import { join } from 'path';

export class SfPCOViewSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [PCO.PCOviewPsi];
		this.zephyrTest('AutomationAPI', 'PROT-1038', 'FS_MAP_SF_DT_LX_LINK.START INLINE EDIT.Custom', () => {
			beforeAll(async done => {
				const tcName = 'PCO View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Provar Custom Object Name field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfPCOView.name.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Activate Inline Edit the Provar Custom Object Name field', async () => {
				await this.modifyAddToTestCase(SfPCOView.name.interactionParameters.inlineEdit);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.name.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOView.name.executionStatusIE, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-896', 'FS_MAP_SF_DT_LX_TEXT.SET.Custom.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Provar Custom Object Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.name.XpathIE);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the Provar Custom Object Name to Automation Object', async () => {
				await this.modifyAddToTestCase(SfPCOView.name.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.name.testCaseXMLSet);
				this.assertExecutionStatus(testItemId, SfPCOView.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1221', 'FS_MAP_SF_DT_LX_GEOLOCATION.SET.Custom.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Longitude field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.longitude.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.longitude, Standard.interaction.set, SfPCOView.longitude.applicableInteractions, response.testbuilderState);
			});
			this.step('Add & Do Longitude field', async () => {
				await this.modifyAddToTestCase(SfPCOView.longitude.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.longitude.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOView.longitude.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Lattitude field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.latitude.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.latitude, Standard.interaction.set, SfPCOView.latitude.applicableInteractions, response.testbuilderState);
			});
			this.step('Add & Do Lattitude field', async () => {
				await this.modifyAddToTestCase(SfPCOView.latitude.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.latitude.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOView.latitude.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-914', 'FS_MAP_SF_DT_LX_CHECKBOX.CHECK.Custom.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Test Status field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.testStatus.XpathIE);
				this.assertTestBuilderState(pageStructureInfo, PCO.testStatusField, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Check the Test Status field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.testStatus.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOView.testStatus.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-923', 'FS_MAP_SF_DT_LX_PICKLIST.SET.Custom.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Picklist field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.pathStages.XpathIE);
				this.assertTestBuilderState(pageStructureInfo, PCO.pathStage, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Check the Picklist field', async () => {
				await this.modifyAddToTestCase(SfPCOView.pathStages.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.pathStages.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOView.pathStages.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-948', 'FS_MAP_SF_DT_LX_MULTI SELECT PICKLIST.SELECT.Custom.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist Select column', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.customPicklist.XpathIEMutliSelect);
				this.assertTestBuilderState(pageStructureInfo, PCO.customPicklistMulti, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Multiselect Custom Picklist field to Green', async () => {
				await this.modifyAddToTestCase(SfPCOView.customPicklist.interactionParameters.multiselect);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.customPicklist.testCaseXMLMultiSelect);
				this.assertExecutionStatus(testItemId, SfPCOView.customPicklist.executionStatusMultiSelect, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1057', 'FS_MAP_SF_DT_LX_MULTI SELECT PICKLIST.DESELECT.Custom.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist Deselect column', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.customPicklist.XpathIEMultiDeselect);
				this.assertTestBuilderState(pageStructureInfo, PCO.customPicklistMulti, Standard.interaction.sfDeselect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Deselect Custom Picklist field to Orange', async () => {
				await this.modifyAddToTestCase(SfPCOView.customPicklist.interactionParameters.multideselect);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.customPicklist.testCaseXMLMultiDeSelect);
				this.assertExecutionStatus(testItemId, SfPCOView.customPicklist.executionStatusMultiDeselect, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-900', 'FS_MAP_SF_DT_LX_TEXTAREA.SET.Custom.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Short Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.shortDescription.XpathIE);
				this.assertTestBuilderState(pageStructureInfo, PCO.shortDescription, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Set the Short Description field to Automation Description for the Short Description', async () => {
				await this.modifyAddToTestCase(SfPCOView.shortDescription.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.shortDescription.testCaseXMLSet);
				this.assertExecutionStatus(testItemId, SfPCOView.shortDescription.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-906', 'FS_MAP_SF_DT_LX_RICH TEXT.SET.Custom.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.customRichTextField.XpathIE);
				this.assertTestBuilderState(pageStructureInfo, PCO.customRichText, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode, response.testbuilderState);
			});
			this.step('Set the Custom Rich Text field to Automation Value for the Rich Text Field', async () => {
				await this.modifyAddToTestCase(SfPCOView.customRichTextField.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.customRichTextField.testCaseXMLSet);
				this.assertExecutionStatus(testItemId, SfPCOView.customRichTextField.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-940', 'FS_MAP_SF_DT_LX_DATE AND TIME.SET.Custom.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping TestDate field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.testDate.XpathIE);
				this.assertTestBuilderState(pageStructureInfo, PCO.testDate, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Set the TestDate field', async () => {
				await this.modifyAddToTestCase(SfPCOView.testDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.testDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOView.testDate.executionStatusSet, response.runExecutionStatus.currentTestCase);
			});
		});
		// commenting it until Aaditya fix them.
		// this.zephyrTest('AutomationAPI', 'PROT-2298', 'FS_MAP_SF_DT_LX_TIME.SET.Custom.ILEMode', () => {
		// 	beforeEach(() => {
		// 		this.beforeEach();
		// 	});
		// 	this.step('Mapping the Time field', async () => {
		// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.time.XpathIE);
		// 		this.assertTestBuilderState(pageStructureInfo, SfPCOView.time.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Time.enterableMode, response.testbuilderState);
		// 	});
		// 	this.step('Set the Time field', async () => {
		// 		await this.modifyAddToTestCase(SfPCOView.time.interactionParameters.setIE);
		// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
		// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
		// 		await this.assertTestCaseXML(testItemId, SfPCOView.time.testCaseXMLSet);
		// 		this.assertExecutionStatus(testItemId, SfPCOView.time.executionStatusSet, response.runExecutionStatus.currentTestCase);
		// 	});
		// });
		this.zephyrTest('AutomationAPI', 'PROT-1040', 'FS_MAP_SF_DT_LX_STANDARD BUTTON.SAVEEDIT.CLICK.Custom.ILEMode', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Map SaveEdit Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do SaveEdit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-894', 'FS_MAP_SF_DT_LX_TEXT.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Provar Custom Object Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Assert the Provar Custom Object Name field', async () => {
				await this.modifyAddToTestCase(SfPCOView.name.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOView.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-913', 'FS_MAP_SF_DT_LX_CHECKBOX.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Test Status field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.testStatus.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.testStatusField, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
			});
			this.step('Assert the Test Status field', async () => {
				await this.modifyAddToTestCase(SfPCOView.testStatus.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.testStatus.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOView.testStatus.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-922', 'FS_MAP_SF_DT_LX_PICKLIST.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Path Stages field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.pathStages.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.pathStage, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Assert the Path Stages field', async () => {
				await this.modifyAddToTestCase(SfPCOView.pathStages.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.pathStages.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOView.pathStages.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-947', 'FS_MAP_SF_DT_LX_MULTI SELECT PICKLIST.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Custom Picklist(Multi) field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.customPicklist.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.customPicklistMulti, Standard.interaction.readAssert, Standard.applicableInteractions.MultiPicklist.readMode, response.testbuilderState);
			});
			this.step('Assert the Custom Picklist(Multi) field', async () => {
				await this.modifyAddToTestCase(SfPCOView.customPicklist.interactionParameters.readassert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.customPicklist.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOView.customPicklist.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-905', 'FS_MAP_SF_DT_LX_RICH TEXT.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.customRichTextField.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.customRichText, Standard.interaction.readAssert, Standard.applicableInteractions.Richtext.readMode, response.testbuilderState);
			});
			this.step('Assert the Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(SfPCOView.customRichTextField.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.customRichTextField.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOView.customRichTextField.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-899', 'FS_MAP_SF_DT_LX_TEXTAREA.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Short Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.shortDescription.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.shortDescription, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
			});
			this.step('Assert the Short Description field', async () => {
				await this.modifyAddToTestCase(SfPCOView.shortDescription.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.shortDescription.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOView.shortDescription.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		// commenting it until Aaditya fix them.
		// this.zephyrTest('AutomationAPI', 'PROT-2299', 'FS_MAP_SF_DT_LX_TIME.RA.Custom', () => {
		// 	beforeEach(() => {
		// 		this.beforeEach();
		// 	});
		// 	this.step('Mapping the Time field', async () => {
		// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.time.XpathVS);
		// 		this.assertTestBuilderState(pageStructureInfo, SfPCOView.time.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Time.readMode, response.testbuilderState);
		// 	});
		// 	this.step('Assert the Time field', async () => {
		// 		await this.modifyAddToTestCase(SfPCOView.time.interactionParameters.readAssert);
		// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
		// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
		// 		await this.assertTestCaseXML(testItemId, SfPCOView.time.testCaseXMLAssert);
		// 		this.assertExecutionStatus(testItemId, SfPCOView.time.executionStatusAssert, response.runExecutionStatus.currentTestCase);
		// 	});
		// });
		this.zephyrTest('AutomationAPI', 'PROT-934', 'FS_MAP_SF_DT_LX_DATE AND TIME.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Test Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOView.testDate.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.testDate, Standard.interaction.readAssert, Standard.applicableInteractions.DateTimeCX.readMode, response.testbuilderState);
			});
			this.step('Assert the Test Date field', async () => {
				await this.modifyAddToTestCase(SfPCOView.testDate.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOView.testDate.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOView.testDate.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
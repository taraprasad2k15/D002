import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCaseView } from './SfCaseView';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfCaseViewConsoleSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		const connectionName = 'Regmain';
		let pageStructureInfo: any[] = [Standard.CurrentTabPsi, Case.caseViewPsi];
		const assertInteractionParameters = {
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
		const assertAttributesParameters = {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
					extractLabel: true,
					assertLabel: true,
					extractAttributes: true,
					assertAttributes: true,
					expectedAttributes: {
						visible: {
							value: true,
						},
						readOnly: {
							value: true,
						},
						inlineEditable: {
							value: true,
						},
					}
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

		this.zephyrTest('AutomationAPI', 'PROT-1804', 'SF_MAP_SF_CONSOLE_LX_IL_OBJ', () => {
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
				await this.findElement(remoteWebdriver, SfCaseView.status.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.status.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.status, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Add & Do Casetype field', async () => {
				await this.modifyAddToTestCase(SfCaseView.status.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.status.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseView.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Casetype field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.caseType.caseTypeXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseTypeField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Casetype field', async () => {
				await this.modifyAddToTestCase(SfCaseView.caseType.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.caseType.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseView.caseType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.caseOrigin.caseOriginXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseOriginField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(SfCaseView.caseOrigin.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseView.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.caseOrigin.caseOriginXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseOriginField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(SfCaseView.caseOrigin.assertAttributesParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.caseOrigin.textCaseXMLAssert2);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.subject, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(SfCaseView.subject.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseView.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.description.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.description, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(SfCaseView.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.description.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseView.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customCheckbox, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.customCheckbox.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseView.customCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.customTime.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customTime, Standard.interaction.set, Standard.applicableInteractions.Time.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Time field', async () => {
				await this.modifyAddToTestCase(SfCaseView.customTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseView.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.customRichText.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customRichText, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(SfCaseView.customRichText.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseView.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Picklist(multi) Select field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.customPicklistSelect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customPicklistMulti, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Select field', async () => {
				await this.modifyAddToTestCase(SfCaseView.customPicklistSelect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.customPicklistSelect.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseView.customPicklistSelect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Picklist(multi) Select field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.customPicklistSelect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customPicklistMulti, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Select field', async () => {
				await this.modifyAddToTestCase(SfCaseView.customPicklistSelect.assertAttributesParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.customPicklistSelect.textCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
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
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			}, 5 * 1000);
			this.step('Mapping Case Origin for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.caseOrigin.XpathInput);
				this.assertTestBuilderState(pageStructureInfo, Case.caseOriginField, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin for Assertions', async () => {
				await this.modifyAddToTestCase(assertAttributesParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.caseOrigin.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.subject.XpathInput);
				this.assertTestBuilderState(pageStructureInfo, Case.subject, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
			});
			this.step('Add & Do Subject for Assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.subject.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping description for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.description.XpathInput);
				this.assertTestBuilderState(pageStructureInfo, Case.description, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
			});
			this.step('Add & Do description for Assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.description.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping customCheckbox for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.customCheckbox.XpathInput);
				this.assertTestBuilderState(pageStructureInfo, Case.customCheckbox, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
			});
			this.step('Add & Do customCheckbox for Assertions', async () => {
				await this.modifyAddToTestCase(assertAttributesParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.customCheckbox.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Number for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.caseNumber.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseNumber, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
			});
			this.step('Add & Do Case Number for Assertions', async () => {
				await this.modifyAddToTestCase(SfCaseView.caseNumber.modifyParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.caseNumber.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Owner for Assertions', async () => {
				await remoteWebdriver.navigate().refresh();
				await this.findElement(remoteWebdriver, SfCaseView.caseOwner.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.caseOwner.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseOwner, Standard.interaction.click, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
			});
			this.step('Add & Do Case Owner for Assertions', async () => {
				await this.modifyAddToTestCase(SfCaseView.caseOwner.modifyParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.caseOwner.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping customTime for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.customTime.XpathInput);
				this.assertTestBuilderState(pageStructureInfo, Case.customTime, Standard.interaction.readAssert, Standard.applicableInteractions.Time.readMode, response.testbuilderState);
			});
			this.step('Add & Do customTime for Assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.customTime.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping customRichText for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.customRichText.XpathInput);
				this.assertTestBuilderState(pageStructureInfo, Case.customRichText, Standard.interaction.readAssert, Standard.applicableInteractions.Richtext.readMode, response.testbuilderState);
			});
			this.step('Add & Do customRichText for Assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.customRichText.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping customPicklistMulti for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseView.customPicklistMulti.XpathInput);
				this.assertTestBuilderState(pageStructureInfo, Case.customPicklistMulti, Standard.interaction.readAssert, Standard.applicableInteractions.MultiPicklist.readMode, response.testbuilderState);
			});
			this.step('Add & Do customPicklistMulti for Assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseView.customPicklistMulti.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
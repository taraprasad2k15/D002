import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { OperatingHoursData } from './OperatingHours.data';
import { join } from 'path';

export class OperatingHoursSpec extends BaseSpec {
	public runTest() {
		const connectionName: string = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[];
		this.zephyrTest('AutomationAPI', 'PROT-2040', 'FS_MAP_SF_FSL_OH_NEW', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'OperatingHours.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [''];
			}, 200 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Map Name Field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, OperatingHoursData.name.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.name.xpath);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.name.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do Name Field', async () => {
				await this.modifyAddToTestCase(OperatingHoursData.name.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, OperatingHoursData.name.testCaseXML);
				this.assertExecutionStatus(testItemId, OperatingHoursData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map Description Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.description.xpath);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.description.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do Description Field', async () => {
				await this.modifyAddToTestCase(OperatingHoursData.description.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, OperatingHoursData.description.testCaseXML);
				this.assertExecutionStatus(testItemId, OperatingHoursData.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map timezone Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.timezone.xpath);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.timezone.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do timezone Field', async () => {
				await this.modifyAddToTestCase(OperatingHoursData.timezone.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, OperatingHoursData.timezone.testCaseXML);
				this.assertExecutionStatus(testItemId, OperatingHoursData.timezone.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save & New button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveAndNewButton2.Xpath);
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
			this.step('Mapping Save button field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.saveButton.Xpath, 20000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save button field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Page Errors', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.pageError.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.pageError, Standard.interaction.readAssert, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do Page Errors field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.pageError.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.pageError.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name Field for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.name.xpath);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.name.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Name Field for Assertions', async () => {
				await this.modifyAddToTestCase(OperatingHoursData.name.assert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, OperatingHoursData.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, OperatingHoursData.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Cancel button field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.cancelButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.cancelButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2043', 'FS_MAP_SF_FSL_OH_VIEW', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Map Name Field for Inline Edit', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, OperatingHoursData.name.xpathView, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.name.xpathView);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.name.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do Name Field for Inline Edit', async () => {
				await this.modifyAddToTestCase(OperatingHoursData.name.inlineEdit);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", OperatingHoursData.name.testCaseXMLInlineEdit);
				this.assertExecutionStatus("0", OperatingHoursData.name.executionStatusInlineEdit, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map Name Field for Set', async () => {
				await this.findElement(remoteWebdriver, OperatingHoursData.name.xpathIE, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.name.xpathIE);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.name.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do Name Field for Set', async () => {
				await this.modifyAddToTestCase(OperatingHoursData.name.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, OperatingHoursData.name.testCaseXML);
				this.assertExecutionStatus(testItemId, OperatingHoursData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map Description Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.description.xpathIE);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.description.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do Description Field', async () => {
				await this.modifyAddToTestCase(OperatingHoursData.description.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, OperatingHoursData.description.testCaseXML);
				this.assertExecutionStatus(testItemId, OperatingHoursData.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map timezone Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.timezone.xpathIE);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.timezone.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do timezone Field', async () => {
				await this.modifyAddToTestCase(OperatingHoursData.timezone.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, OperatingHoursData.timezone.testCaseXML);
				this.assertExecutionStatus(testItemId, OperatingHoursData.timezone.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping SaveEdit Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do SaveEdit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
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
			const executionStatusAssert = [{
				"name": "UiAssert",
				"type": "Icon-Successful",
				"text": "UI Assert",
				"executionStatus": "Executed",
			}];
			this.step('Mapping Name for assertions', async () => {
				await this.findElement(remoteWebdriver, OperatingHoursData.name.xpathView, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.name.xpathView);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.name.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Name for assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping description for assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.description.xpathView);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Name for assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Timezone for assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.timezone.xpathView);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.timezone.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Timezone for assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping createdDate for assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.createdDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.createdDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do createdDate for assertions', async () => {
				await this.modifyAddToTestCase({
					interactionParameters: {
						id: 'Read/Assert',
						settings: {
							extractValue: true,
							assertValue: true,
							extractLabel: true,
							assertLabel: true,
							expectedLabel: {
								value: 'Created By',
								caseSensitive: true,
								normalise: true,
							}
						},
					}
				});
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping lastModifiedBy for assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.lastModifiedBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.lastModifiedBy.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do lastModifiedBy for assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping delete button', async () => {
				const dropdownWE = await this.findElement(remoteWebdriver, "//a[contains(@title,'more actions')]");
				dropdownWE.click();
				await this.findElement(remoteWebdriver, OperatingHoursData.delete.xpath)
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(OperatingHoursData.delete.xpath);
				this.assertTestBuilderState(pageStructureInfo, OperatingHoursData.delete.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do lastModifiedBy for assertions', async () => {
				await this.modifyAddToTestCase(OperatingHoursData.delete.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, OperatingHoursData.delete.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
		});
	};
}; 
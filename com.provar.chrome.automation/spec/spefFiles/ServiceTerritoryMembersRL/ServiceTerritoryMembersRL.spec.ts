import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';
import { ServiceTerritoryMembersRLData } from './ServiceTerritoryMembersRL';

export class ServiceTerritoryMembersRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regtest';
		let remoteWebdriver: WebDriver;
		const pageStructureInfo: any[] = [ServiceTerritoryMembersRLData.ServiceTerritoryViewPSI];
		const pageStructureInfoSTMNew: any[] = [ServiceTerritoryMembersRLData.STMNewPSI];
		this.zephyrTest('AutomationAPI', "PROT-2046", 'FS_MAP_SF_FSL_ST_RL.ServiceTerritoryMembers', () => {
			beforeAll(async done => {
				const tcName = 'Service Territory Member RL.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the New Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const relatedTabWE: WebElement = await this.findElement(remoteWebdriver, "//a[@class='tabHeader']//span[text()='Related']", 20 * 1000);
				await relatedTabWE.click();
				await this.findElement(remoteWebdriver, ServiceTerritoryMembersRLData.newButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.newButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.newButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode1, response.testbuilderState);
			});
			this.step('Add & Do New field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Territory Type Field', async () => {
				await this.findElement(remoteWebdriver, ServiceTerritoryMembersRLData.territoryType.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.territoryType.xpath);
				this.assertTestBuilderState(pageStructureInfoSTMNew, ServiceTerritoryMembersRLData.territoryType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set By Index Interaction on Territory Type field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.territoryType.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", ServiceTerritoryMembersRLData.territoryType.testCaseXML);
				this.assertExecutionStatus("0", ServiceTerritoryMembersRLData.territoryType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.startDate.xpath);
				this.assertTestBuilderState(pageStructureInfoSTMNew, ServiceTerritoryMembersRLData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.startDate.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.startDate.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.startDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping End Date Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.endDate.xpath);
				this.assertTestBuilderState(pageStructureInfoSTMNew, ServiceTerritoryMembersRLData.endDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on End Date field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.endDate.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.endDate.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.endDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Resource Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.serviceResource.xpath);
				this.assertTestBuilderState(pageStructureInfoSTMNew, ServiceTerritoryMembersRLData.serviceResource.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing SF Lookup Interaction on Service Resource field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.serviceResource.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.serviceResource.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.serviceResource.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name Field from Lookup', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.name.xpath);
				this.assertTestBuilderState([ServiceTerritoryMembersRLData.lookupPSI], ServiceTerritoryMembersRLData.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,ServiceTerritoryMembersRLData.name.rowLocators);
			});
			this.step('Performing Click Interaction on Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen',true);
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.name.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoSTMNew, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				const testItemIdLookupOnscreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdLookupOnscreen);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for page to load', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping Member Name field from related list record', async () => {
				await this.findElement(remoteWebdriver,ServiceTerritoryMembersRLData.memberNumber.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.memberNumber.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.memberNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,ServiceTerritoryMembersRLData.rowLocators);
			});
			this.step('Performing Click Interaction on Member Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", ServiceTerritoryMembersRLData.memberNumber.testCaseXML);
				this.assertExecutionStatus("0", ServiceTerritoryMembersRLData.memberNumber.executionStatus, response.runExecutionStatus.currentTestCase);
				remoteWebdriver.navigate().back();
			});
			it('Waiting for page to load', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping Service Resource field from related list record', async () => {
				await this.findElement(remoteWebdriver,ServiceTerritoryMembersRLData.serviceResourceRL.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.serviceResourceRL.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.serviceResourceRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,ServiceTerritoryMembersRLData.rowLocators);
			});
			this.step('Performing Read Assertion on Service Resource field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.serviceResourceRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Territory Type field from related list record', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.territoryTypeRL.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.territoryTypeRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,ServiceTerritoryMembersRLData.rowLocators);
			});
			this.step('Performing Read Assertion on Territory Type field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.territoryTypeRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date field from related list record', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.startDateRL.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.startDateRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,ServiceTerritoryMembersRLData.rowLocators);
			});
			this.step('Performing Read Assertion on Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.startDateRL.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button from related list record', async () => {
				const element:WebElement = await this.findElement(remoteWebdriver,"//span[@title='Service Territory Members']/ancestor::article//span[normalize-space(.)='Show Actions']/..",20*1000);
				element.click();
				await this.findElement(remoteWebdriver,SfCommonFIeld.editActionButton.Xpath,10*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo,ServiceTerritoryMembersRLData.editButton.fieldDetails , Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState,ServiceTerritoryMembersRLData.rowLocators);
			});
			this.step('Performing Read Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.editButton.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button from related list record', async () => {
				await this.findElement(remoteWebdriver,SfCommonFIeld.deleteActionButton.Xpath,10*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo,ServiceTerritoryMembersRLData.deleteButton.fieldDetails , Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState,ServiceTerritoryMembersRLData.rowLocators);
			});
			this.step('Performing Read Assertion on Delete Button', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.deleteButton.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.deleteButton.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Member Name field from related list record', async () => {
				await this.findElement(remoteWebdriver,ServiceTerritoryMembersRLData.memberNumber.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.memberNumber.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.memberNumber.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,ServiceTerritoryMembersRLData.rowLocators);
			});
			this.step('Performing Column Assertion on Member Name field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.memberNumber.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, ServiceTerritoryMembersRLData.memberNumber.testCaseXML1);
				this.assertExecutionStatus(testItemId1, ServiceTerritoryMembersRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Service Resource field from related list record', async () => {
				await this.findElement(remoteWebdriver,ServiceTerritoryMembersRLData.serviceResourceRL.xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.serviceResourceRL.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.serviceResourceRL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,ServiceTerritoryMembersRLData.rowLocators);
			});
			this.step('Performing Column Assertion on Service Resource field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.serviceResourceRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.serviceResourceRL.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Territory Type field from related list record', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.territoryTypeRL.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.territoryTypeRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,ServiceTerritoryMembersRLData.rowLocators);
			});
			this.step('Performing Column Assertion on Territory Type field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.territoryTypeRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.territoryTypeRL.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date field from related list record', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.startDateRL.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.startDateRL.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState,ServiceTerritoryMembersRLData.rowLocators);
			});
			this.step('Performing Column Assertion on Start Date field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.startDateRL.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.startDateRL.testCaseXML1);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading of related list', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.heading.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.heading.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Row Count Assertion on related list', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryMembersRLData.heading.interactionParametersRowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.heading.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All Link', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryMembersRLData.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryMembersRLData.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Performing Click Interaction on View All Link', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryMembersRLData.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryMembersRLData.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}
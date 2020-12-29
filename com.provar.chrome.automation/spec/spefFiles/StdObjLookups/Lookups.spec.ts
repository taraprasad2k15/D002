import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { Lookups } from './LookupsData';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfLookupsSpec extends BaseSpec {
	public runTest() {
		const connectionName: string = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo:any[];
		let pageStructureInfoLookup: any[];
		let rowLocatorLookup = [
            {
                "label": "Entitlement Name (Name)",
                "selected": true,
                "value": /Entitlement.*/,
            },
            {
                "label": "Account Name (ACCOUNT_NAME)",
                "selected": false,
                "value": /.*/,
            },
            {
                "label": "Start Date (ENTITLEMENT_STARTDATE)",
                "selected": false,
                "value": /.*/,
			},
			{
                "label": "End Date (ENTITLEMENT_ENDDATE)",
                "selected": false,
                "value": /.*/,
			},
			{
                "label": "Status (ENTITLEMENT_STATUS)",
                "selected": false,
                "value": /.*/,
            },
        ];
		
		this.zephyrTest('AutomationAPI', 'PROT-869', 'FS_MAP_SF_DT_LX_LOOKUP.NEWINSF', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'Case New.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [Case.caseNewPsi];
				pageStructureInfoLookup = [Case.caseLookupPsi];
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Parent Case for "New in SF" interaction', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const parentCaseWE: WebElement = await this.findElement(remoteWebdriver, Lookups.parentCase.Xpath.input, 20 * 1000);
				await parentCaseWE.click();   // to expand the suggestion list on the field which includes the option to create a new record as well
				await this.findElement(remoteWebdriver, Lookups.parentCase.Xpath.newInSF);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.parentCase.Xpath.newInSF);
				console.log(JSON.stringify(response, null, 4));
				this.assertTestBuilderState(pageStructureInfo, Case.parentCaseLookupField, Standard.interaction.newInSfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Parent Case for New In SF Lookup', async () => {
				await this.modifyAddToTestCase(Lookups.parentCase.interactionParameters.newInSF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.parentCase.testCaseXML.newInSF);
				this.assertExecutionStatus(testItemId, Lookups.parentCase.executionStatus.newInSF, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Cancel button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.cancelButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.cancelButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-859', 'FS_MAP_SF_DT_LX_LOOKUP.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Parent Case for "Set" interaction', async () => {
				await this.findElement(remoteWebdriver, Lookups.parentCase.Xpath.input);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.parentCase.Xpath.input);
				this.assertTestBuilderState(pageStructureInfo, Case.parentCaseLookupField, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Parent Case for Set', async () => {
				await this.modifyAddToTestCase(Lookups.parentCase.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.parentCase.testCaseXML.set);
				this.assertExecutionStatus(testItemId, Lookups.parentCase.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-860', 'FS_MAP_SF_DT_LX_LOOKUP.LOOKUP', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Parent Case for "SF Lookup" interaction', async () => {
				const deleteIcon: WebElement = await this.findElement(remoteWebdriver, "//label[normalize-space(.)='Parent Case']/following-sibling::div//span[contains(@class, 'deleteIcon')]",15000);
				deleteIcon.click();    // this is to clear the existing value
				const parentCaseWE: WebElement = await this.findElement(remoteWebdriver, Lookups.parentCase.Xpath.input);
				await parentCaseWE.sendKeys('00');
				await this.findElement(remoteWebdriver, Lookups.parentCase.Xpath.lookup);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.parentCase.Xpath.lookup);
				this.assertTestBuilderState(pageStructureInfo, Case.parentCaseLookupField, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Parent Case for Lookup', async () => {
				await this.modifyAddToTestCase(Lookups.parentCase.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.parentCase.testCaseXML.lookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				this.assertExecutionStatus(testItemId, Lookups.parentCase.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the first case number on case lookup screen ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.caseId.caseIdXpath);
				const rowLocators = [
					{
						"label": "Case (CaseNumber)",
						"selected": true,
						"value": /[0-9]{8}/,
					},
					{
						"label": "Subject (CASES_SUBJECT)",
						"selected": false,
						"value": "Sample Case for Automation Testing",
					},
					{
						"label": "Status (CASES_STATUS)",
						"selected": false,
						"value": 'On Hold',
					},
					{
						"label": "Date/Time Opened (CASES_CREATED_DATE)",
						"selected": false,
						"value": /.*/,
					},
					{
						"label": "Case Owner Alias (CORE_USERS_ALIAS)",
						"selected": false,
						"value": /.*/,
					}
				];
				this.assertTestBuilderState(pageStructureInfoLookup, Case.caseNumberField, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do case number field on lookup screen', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, Lookups.caseId.testCaseXML);
				this.assertExecutionStatus(testItemId, Lookups.caseId.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1775', 'FS_MAP_SF_DT_LX_LOOKUP.LOOKUP.ENTITLEMENT', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Entitlement field', async () => {
				await this.findElement(remoteWebdriver, Lookups.entitlement.Xpath,20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.entitlement.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lookups.entitlement.FieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Entitlement field', async () => {
                await this.modifyAddToTestCase(Lookups.entitlement.lookupInteraction);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen',true);
				const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues,testItemId1);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, Lookups.entitlement.testCaseXML1);
				this.assertExecutionStatus(testItemId, Lookups.entitlement.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, Lookups.name.xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.name.xpath);
                this.assertTestBuilderState([Lookups.PSIlookup], Lookups.name.FieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorLookup);
            });
            this.step('Click the Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, Lookups.name.testCaseXML);
                this.assertExecutionStatus(testItemId, Lookups.name.executionStatus, response.runExecutionStatus.currentTestCase);
            });
		});		
		this.zephyrTest('AutomationAPI', 'PROT-871', 'FS_MAP_SF_DT_LX_LOOKUP.SET.ILEMode', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'Case View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [Case.caseViewPsi];
				pageStructureInfoLookup = [Case.caseLookupPsi];
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Parent Case field for Activating Inline Edit on View Screen', async () => {				
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, Lookups.parentCase.Xpath.view, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.parentCase.Xpath.view);
				this.assertTestBuilderState(pageStructureInfo, Case.parentCaseLookupField, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode1, response.testbuilderState);
			});
			this.step('Add & Do Parent Case field for Inline Edit', async () => {
				await this.modifyAddToTestCase(Lookups.parentCase.interactionParameters.inlineEdit);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.parentCase.testCaseXML.inlineEdit);
				this.assertExecutionStatus(testItemId, Lookups.parentCase.executionStatus.inlineEdit, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Parent Case field for Set interaction on View Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.parentCase.Xpath.prefilled);
				this.assertTestBuilderState(pageStructureInfo, Case.parentCaseLookupField, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Parent Case for Set on View Screen', async () => {
				await this.modifyAddToTestCase(Lookups.parentCase.interactionParameters.setParent);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.parentCase.testCaseXML.setParent);
				this.assertExecutionStatus(testItemId, Lookups.parentCase.executionStatus.setParent, response.runExecutionStatus.currentTestCase);
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
		this.zephyrTest('AutomationAPI', 'PROT-870', 'FS_MAP_SF_DT_LX_LOOKUP.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4*1000);
			},5*1000);
			this.step('Mapping Parent Case field for Read/Assert on View Screen', async () => {
				await this.findElement(remoteWebdriver, Lookups.parentCase.Xpath.view, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.parentCase.Xpath.view);
				this.assertTestBuilderState(pageStructureInfo, Case.parentCaseLookupField, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode1, response.testbuilderState);
			});
			this.step('Add & Do Parent Case field for Read Assert', async () => {
				await this.modifyAddToTestCase(Lookups.parentCase.interactionParameters.assert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.parentCase.testCaseXML.assert);
				this.assertExecutionStatus(testItemId, Lookups.parentCase.executionStatus.assert, response.runExecutionStatus.currentTestCase);
			});	
		});
	}
}
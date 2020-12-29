import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfAllOpenLead } from './SfAllOpenLead';
import { SfCommonFIeld } from '../SfCommonField';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';

export class SfAllOpenLeadSpec extends BaseSpec {
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
		let pageStructureInfo: any[] = [Lead.allOpenLeadsPsi];
		let rowLocator = [
            {
                "label": "Name (Name)",
                "selected": true,
                "value": /AutomationLead.*/
            },
            {
                "label": "State/Province (State)",
                "selected": false,
                "value": "Delhi"
            },
            {
                "label": "Company (Company)",
                "selected": false,
                "value": "Provar"
            },
            {
                "label": "Phone (Phone)",
                "selected": false,
                "value": "+91-998 877 6655"
            },
            {
                "label": "Email (Email)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Lead Status (Status)",
                "selected": false,
                "value": "Nurturing"
            },
            {
                "label": "Rating (Rating)",
                "selected": false,
                "value": "Warm"
            }
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

		this.zephyrTest('AutomationAPI', 'PROT-971', 'FS_MAP_SF_LV_LX_ACTION BUTTON.CLICK', () => {
			beforeAll(async done => {
				const tcName = 'All Open Leads.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping New Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfCommonFIeld.newButton.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.newButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.newButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				await element.click();
				expect(true).toEqual(true);
			});		
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4000);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-972', 'FS_MAP_SF_LV_LX_LIST SEARCH FIELD.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping List Search Box', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.listSearchBox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.listSearchBox, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do List Search Box', async () => {
				// const variable_Values = await this.getVariableStack("LeadName");
				// console.log(JSON.stringify(variable_Values, null, 4));
				await this.modifyAddToTestCase(SfAllOpenLead.listSearchBox.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAllOpenLead.listSearchBox.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAllOpenLead.listSearchBox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-974', 'FS_MAP_SF_LV_LX_SEARCHTYPE.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Search Type', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.searchType.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.searchType, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Search Type', async () => {
				await this.modifyAddToTestCase(SfCommonFIeld.searchType.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAllOpenLead.searchType.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAllOpenLead.searchType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-982', 'FS_MAP_SF_LV_LX_COLUMN HEADINGS.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Name Field for column assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAllOpenLead.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.name, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Name field for column assertion', async () => {
				await this.modifyAddToTestCase(assertColumnInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAllOpenLead.name.testCaseXMLAssertColumn);
				this.assertExecutionStatus(testItemId, SfAllOpenLead.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-984', 'FS_MAP_SF_LV_LX_SELECT ROW.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Select Row', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAllOpenLead.selectRow.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.selectRow, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Select Row Checkbox', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAllOpenLead.selectRow.testCaseXML);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				this.assertExecutionStatus(testItemId, SfAllOpenLead.selectRow.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-977', 'FS_MAP_SF_LV_LX_REFERENCE FIELD.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Name Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAllOpenLead.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.name, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Name field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAllOpenLead.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfAllOpenLead.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});		
		this.zephyrTest('AutomationAPI', 'PROT-981', 'FS_MAP_SF_LV_LX_TEXT FIELDS.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Company Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAllOpenLead.company.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.company2, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Company field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAllOpenLead.company.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfAllOpenLead.company.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-973', 'FS_MAP_SF_LV_LX_BLANK FIELDS.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Email Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAllOpenLead.email.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.email2, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Email field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAllOpenLead.email.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfAllOpenLead.email.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-978', 'FS_MAP_SF_LV_LX_ROW DROPDOWN.EDIT.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Click on Show more actions dropdown', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show More'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]");
				await element.click();
			});
			this.step('Mapping Edit action button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.editActionButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.editActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Edit button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.editActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.editActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				await element.click();
				expect(true).toEqual(true);
			});	
		});
		this.zephyrTest('AutomationAPI', 'PROT-979', 'FS_MAP_SF_LV_LX_ROW DROPDOWN.DEL.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});		
			it('Click on Show more actions dropdown', async done => {
				// remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show more actions'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]", 15000);
				setTimeout(async () => {
					await element.click();
					done();
				}, 4000);
			});
			this.step('Mapping Delete action button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.deleteActionButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.deleteActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Delete button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.deleteActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.deleteActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				await element.click();
				expect(true).toEqual(true);
			});	
		});
		this.zephyrTest('AutomationAPI', 'PROT-980', 'FS_MAP_SF_LV_LX_ROW DROPDOWN.CO.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			it('Click on Show more actions dropdown', async done => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show more actions'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]", 15000);
				setTimeout(async () => {
					await element.click();
					done();
				}, 4000);
			});	
			this.step('Mapping Change Owner action button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.changeOwnerActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.changeOwnerActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Change Owner button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.changeOwnerActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.changeOwnerActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				await element.click();
				expect(true).toEqual(true);
			});	
		});
		// these are commented because they does not have zephry test cases, not required at the moment
			// this.zephyrTest('AutomationAPI', zephyrTCId, 'All Open Lead List View', () => {
			// 	beforeEach(() => {
			// 		this.beforeEach();
			// 	});
			// 	this.step('Mapping the Lead Status Field', async () => {
			// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAllOpenLead.leadStatus.Xpath);
			// 		this.assertTestBuilderState(pageStructureInfo, Lead.leadStatus2, Standard.interaction.readAssert, response.testbuilderState, rowLocator);
			// 	});
			// 	this.step('Add & Do Lead Status field', async () => {
			// 		await this.modifyAddToTestCase(assertInteractionParameters);
			// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
			// 		await this.assertTestCaseXML(testItemId, SfAllOpenLead.leadStatus.testCaseXMLAssert);
			// 		this.assertExecutionStatus(testItemId, SfAllOpenLead.leadStatus.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			// 	});
			// });
			// this.zephyrTest('AutomationAPI', zephyrTCId, 'All Open Lead List View', () => {
			// 	beforeEach(() => {
			// 		this.beforeEach();
			// 	});
			// 	this.step('Mapping the Rating Field', async () => {
			// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAllOpenLead.rating.Xpath);
			// 		this.assertTestBuilderState(pageStructureInfo, Lead.rating, Standard.interaction.readAssert, response.testbuilderState, rowLocator);
			// 	});
			// 	this.step('Add & Do Rating field', async () => {
			// 		await this.modifyAddToTestCase(assertInteractionParameters);
			// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
			// 		await this.assertTestCaseXML(testItemId, SfAllOpenLead.rating.testCaseXMLAssert);
			// 		this.assertExecutionStatus(testItemId, SfAllOpenLead.rating.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			// 	});
			// });
			// this.zephyrTest('AutomationAPI', zephyrTCId, 'All Open Lead List View', () => {
			// 	beforeEach(() => {
			// 		this.beforeEach();
			// 	});
			// 	this.step('Mapping the Phone Field', async () => {
			// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAllOpenLead.phone.Xpath);
			// 		this.assertTestBuilderState(pageStructureInfo, Lead.phone2, Standard.interaction.readAssert, response.testbuilderState, rowLocator);
			// 	});
			// 	this.step('Add & Do Phone field', async () => {
			// 		await this.modifyAddToTestCase(assertInteractionParameters);
			// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
			// 		await this.assertTestCaseXML(testItemId, SfAllOpenLead.phone.testCaseXMLAssert);
			// 		this.assertExecutionStatus(testItemId, SfAllOpenLead.phone.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			// 	});
			// });
			// this.zephyrTest('AutomationAPI', zephyrTCId, 'All Open Lead List View', () => {
			// 	beforeEach(() => {
			// 		this.beforeEach();
			// 	});
			// 	this.step('Mapping the State Field', async () => {
			// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAllOpenLead.state.Xpath);
			// 		this.assertTestBuilderState(pageStructureInfo, Lead.state, Standard.interaction.readAssert, response.testbuilderState, rowLocator);
			// 	});
			// 	this.step('Add & Do State field', async () => {
			// 		await this.modifyAddToTestCase(assertInteractionParameters);
			// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
			// 		await this.assertTestCaseXML(testItemId, SfAllOpenLead.state.testCaseXMLAssert);
			// 		this.assertExecutionStatus(testItemId, SfAllOpenLead.state.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			// 	});
			// });
			// this.step('Mapping Import Button', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.importButton.Xpath);
			// 	this.assertTestBuilderState(pageStructureInfo, Standard.importButton, Standard.interaction.click, response.testbuilderState);
			// });
			// this.step('Mapping Campaign Button', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.addToCampaignButton.Xpath);
			// 	this.assertTestBuilderState(pageStructureInfo, Standard.addToCampaignButton, Standard.interaction.click, response.testbuilderState);
			// });
			// this.step('Click on Show more actions dropdown', async () => {
			// 	remoteWebdriver = await this.getRemoteWebDriver(connectionName);
			// 	expect(true).toEqual(true);
			// 	const element: WebElement = await this.findElement(remoteWebdriver, "//a[normalize-space(.)='Show more actions']");
			// 	await element.click();
			// });
			// this.step('Mapping Change Status Button', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.changeStatusButton.Xpath);
			// 	this.assertTestBuilderState(pageStructureInfo, Standard.changeStatusButton, Standard.interaction.click, response.testbuilderState);
			// });
			// this.step('Mapping Change Owner Button', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.changeOwnerButton.Xpath);
			// 	this.assertTestBuilderState(pageStructureInfo, Standard.changeOwnerButton, Standard.interaction.click, response.testbuilderState);
			// });
			// this.step('Mapping Send List Email Button', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.sendListEmailButton.Xpath);
			// 	this.assertTestBuilderState(pageStructureInfo, Standard.sendListEmailButton, Standard.interaction.click, response.testbuilderState);
			// });
	}
}
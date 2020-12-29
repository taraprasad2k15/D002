import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfLeadHome } from './SfLeadHome';
import { SfCommonFIeld } from '../SfCommonField';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';

export class SfLeadHomeSpec extends BaseSpec {
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
				"value": /.*/
			},
			{
				"label": "Title (LEAD_TITLE)",
				"selected": false,
			},
			{
				"label": "Company (LEAD_COMPANY)",
				"selected": false,
				"value": /.*/
			},
			{
				"label": "Phone (LEAD_PHONE)",
				"selected": false,
			},
			{
				"label": "Email (LEAD_EMAIL)",
				"selected": false,
			},
			{
				"label": "Lead Status (LEAD_STATUS)",
				"selected": false,
				"value": /.*/
			},
			{
				"label": "Owner Alias (CORE_USERS_ALIAS)",
				"selected": false,
				"value": /.*/
			}
		];

		this.zephyrTest('AutomationAPI', 'PROT-1003', 'FS_MAP_SF_HM_LX_LIST SEARCH FIELD.SET', () => {
			beforeAll(async done => {
				const tcName = 'Lead Home.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping List Search Box', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfCommonFIeld.listSearchBox.Xpath , 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.listSearchBox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.listSearchBox, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do List Search Box', async () => {
				await this.modifyAddToTestCase(SfCommonFIeld.listSearchBox.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.listSearchBox.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.listSearchBox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1005', 'FS_MAP_SF_HM_LX_SEARCHTYPE.RA', () => {
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
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.searchType.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.searchType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1015', 'FS_MAP_SF_HM_LX_ACTION BUTTON.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping New Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.newButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.newButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});	
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4*1000);
			},5*1000);
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath2);
				await element.click();
				expect(true).toEqual(true);
			});		
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4*1000);
			},5*1000);
		});
		this.zephyrTest('AutomationAPI', 'PROT-1017', 'FS_MAP_SF_HM_LX_SELECT ROW.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Select Row', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHome.selectRow.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.selectRow, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Select Row Checkbox', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfLeadHome.selectRow.testCaseXML);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				this.assertExecutionStatus(testItemId, SfLeadHome.selectRow.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1007', 'FS_MAP_SF_HM_LX_REFERENCE FIELD.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Name Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHome.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.name, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Name field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfLeadHome.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfLeadHome.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1020', 'FS_MAP_SF_HM_LX_TEXT FIELDS.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Title Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHome.title.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.title, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Title field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfLeadHome.title.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfLeadHome.title.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});		
		this.zephyrTest('AutomationAPI', 'PROT-1018', 'FS_MAP_SF_HM_LX_BLANK FIELDS.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Email Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHome.email.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Lead.email, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Email field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfLeadHome.email.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfLeadHome.email.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1009', 'FS_MAP_SF_HM_LX_ROW DROPDOWN.EDIT.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Click on Show more actions dropdown', async () => {
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
		this.zephyrTest('AutomationAPI', 'PROT-1011', 'FS_MAP_SF_HM_LX_ROW DROPDOWN.DEL.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});		
			it('Click on Show more actions dropdown', async done => {
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show more actions'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]", 15000);
				setTimeout(async () => {
					await element.click();
					done();
				}, 4000);
			},5*1000);
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
		this.zephyrTest('AutomationAPI', 'PROT-1013', 'FS_MAP_SF_HM_LX_ROW DROPDOWN.CO.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			it('Click on Show more actions dropdown', async done => {
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show more actions'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]", 15000);
				setTimeout(async () => {
					await element.click();
					done();
				}, 4000);
			},5*1000);	
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
	}
}


		// the below code is commented because currently its not a part of functional specifications	
		// this.step('Mapping Import Button', async () => {
		// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.importButton.Xpath);
		// 	this.assertTestBuilderState(pageStructureInfo, Standard.importButton, Standard.interaction.click, response.testbuilderState);
		// });
		// this.step('Mapping Add to Campaign Button', async () => {
		// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.addToCampaignButton.Xpath);
		// 	this.assertTestBuilderState(pageStructureInfo, Standard.addToCampaignButton, Standard.interaction.click, response.testbuilderState);
		// });
		// this.step('Click on Show more actions dropdown', async () => {
		// 	remoteWebdriver = await this.getRemoteWebDriver(connectionName);
		// 	expect(true).toEqual(true);
		// 	const element: WebElement = await this.findElement(remoteWebdriver, "//a[normalize-space(.)='Show more actions']");
		// 	await element.click();
		// });
		// this.step('Mapping Add to Change Status Button', async () => {
		// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.changeStatusButton.Xpath);
		// 	this.assertTestBuilderState(pageStructureInfo, Standard.changeStatusButton, Standard.interaction.click, response.testbuilderState);
		// });
		// this.step('Mapping Add to Change Owner Button', async () => {
		// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.changeOwnerButton.Xpath);
		// 	this.assertTestBuilderState(pageStructureInfo, Standard.changeOwnerButton, Standard.interaction.click, response.testbuilderState);
		// });
		// this.step('Mapping Add to Send List Email Button', async () => {
		// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.sendListEmailButton.Xpath);
		// 	this.assertTestBuilderState(pageStructureInfo, Standard.sendListEmailButton, Standard.interaction.click, response.testbuilderState);
		// });
		// this.zephyrTest('AutomationAPI', zephyrTCId, 'Lead Home Screen', () => {
		// 	beforeEach(() => {
		// 		this.beforeEach();
		// 	});
		// 	this.step('Mapping the Company Field', async () => {
		// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHome.company.Xpath);
		// 		this.assertTestBuilderState(pageStructureInfo, Lead.company, Standard.interaction.readAssert, response.testbuilderState, rowLocator);
		// 	});
		// 	this.step('Add & Do Company field', async () => {
		// 		await this.modifyAddToTestCase(assertInteractionParameters);
		// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
		// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
		// 		await this.assertTestCaseXML(testItemId, SfLeadHome.company.testCaseXMLAssert);
		// 		this.assertExecutionStatus(testItemId, SfLeadHome.company.executionStatusAssert, response.runExecutionStatus.currentTestCase);
		// 	});
		// });
		// this.zephyrTest('AutomationAPI', zephyrTCId, 'Lead Home Screen', () => {
		// 	beforeEach(() => {
		// 		this.beforeEach();
		// 	});
		// 	this.step('Mapping the Phone Field', async () => {
		// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHome.phone.Xpath);
		// 		this.assertTestBuilderState(pageStructureInfo, Lead.phone, Standard.interaction.readAssert, response.testbuilderState, rowLocator);
		// 	});
		// 	this.step('Add & Do Phone field', async () => {
		// 		await this.modifyAddToTestCase(assertInteractionParameters);
		// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
		// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
		// 		await this.assertTestCaseXML(testItemId, SfLeadHome.phone.testCaseXMLAssert);
		// 		this.assertExecutionStatus(testItemId, SfLeadHome.phone.executionStatusAssert, response.runExecutionStatus.currentTestCase);
		// 	});
		// });
		// this.zephyrTest('AutomationAPI', zephyrTCId, 'Lead Home Screen', () => {
		// 	beforeEach(() => {
		// 		this.beforeEach();
		// 	});
		// 	this.step('Mapping the Lead Status Field', async () => {
		// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHome.leadStatus.Xpath);
		// 		this.assertTestBuilderState(pageStructureInfo, Lead.leadStatus, Standard.interaction.readAssert, response.testbuilderState, rowLocator);
		// 	});
		// 	this.step('Add & Do Lead Status field', async () => {
		// 		await this.modifyAddToTestCase(assertInteractionParameters);
		// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
		// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
		// 		await this.assertTestCaseXML(testItemId, SfLeadHome.leadStatus.testCaseXMLAssert);
		// 		this.assertExecutionStatus(testItemId, SfLeadHome.leadStatus.executionStatusAssert, response.runExecutionStatus.currentTestCase);
		// 	});
		// });
		// this.zephyrTest('AutomationAPI', zephyrTCId, 'Lead Home Screen', () => {
		// 	beforeEach(() => {
		// 		this.beforeEach();
		// 	});
		// 	this.step('Mapping the Owner Alias Field', async () => {
		// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadHome.ownerAlias.Xpath);
		// 		this.assertTestBuilderState(pageStructureInfo, Lead.ownerAlias, Standard.interaction.readAssert, response.testbuilderState, rowLocator);
		// 	});
		// 	this.step('Add & Do Owner Alias field', async () => {
		// 		await this.modifyAddToTestCase(assertInteractionParameters);
		// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
		// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
		// 		await this.assertTestCaseXML(testItemId, SfLeadHome.ownerAlias.testCaseXMLAssert);
		// 		this.assertExecutionStatus(testItemId, SfLeadHome.ownerAlias.executionStatusAssert, response.runExecutionStatus.currentTestCase);
		// 	});
		// });
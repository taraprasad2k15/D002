import { WebDriver, WebElement, Browser } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';
import { FlexiAppMCSRecentItems } from './FlexiAppMCSRecentItems';
import { app } from 'electron';

export class FlexiAppMCSRecentItemsSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let rowLocator = [
            {
                "label": "Account Name (Account_Name)",
                "selected": true,
                "value": /AccRI.*/
            },
            {
                "label": "Type (Account_Type)",
                "selected": false,
                "value": "Analyst"
            },
            {
                "label": "Phone (Account_Phone)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Website (Account_Website)",
                "selected": false,
                "value": "www.web.com"
            },
            {
                "label": "Account Owner (Account_OwnerId)",
                "selected": false,
                "value": /.*/
            },
            {
                "label": "Industry (Account_Industry)",
                "selected": false,
                "value": ""
            },
            {
                "label": "Billing Address (Account_BillingAddress)",
                "selected": false,
                "value": "India"
            }
        ];

        this.zephyrTest('AutomationAPI', 'PROT-1539', 'FS_MAP_SF_STD_RECENT.AP.MAINCOLUMNANDSIDEBAR.CLICK', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'FlexiAppMCSRecentItems.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [FlexiAppMCSRecentItems.PSI];

            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Navigate to App Page', async ()=>{
            	expect(true).toEqual(true);
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                // await remoteWebdriver.navigate().to(FlexiAppMCSRecentItems.URL);
                const appLauncherIcon: WebElement = await this.findElement(remoteWebdriver, "//div[@class='slds-icon-waffle']/parent::button",10000);
                appLauncherIcon.click();
                const search: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'appLauncher')]//input[contains(@placeholder,'Search apps')]",10000);
                search.sendKeys("Regression App Page Main Col & Sidebar");
                const select: WebElement = await this.findElement(remoteWebdriver, "//div[@class='panel-content scrollable']//div[@role='combobox']/div//a[contains(@id,'Regression_App_Page_Main_Col_Sidebar')]/..",10000);
                select.click(); 

            });
            it('Sleep for 3 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 3000);
            });
            this.step('Map Account Name', async () => {
                await remoteWebdriver.navigate().refresh();
                await this.findElement(remoteWebdriver, FlexiAppMCSRecentItems.accountName.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppMCSRecentItems.accountName.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiAppMCSRecentItems.accountName.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
            });
            this.step('Perform Click on Account Name Field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiAppMCSRecentItems.accountName.testCaseXMLClick);
                this.assertExecutionStatus("0", FlexiAppMCSRecentItems.accountName.executionStatusClick, response.runExecutionStatus.currentTestCase);
                await remoteWebdriver.navigate().back();
            });
            it('Sleep for 3 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 3000);
            });
        }),
            this.zephyrTest('AutomationAPI', 'PROT-1540', 'FS_MAP_SF_STD_RECENT.AP.MAINCOLUMNANDSIDEBAR.RA', () => {
                beforeEach(() => {
                    this.beforeEach();
                });
                afterAll(async done => {
                    await this.endTestSession(done);
                });
                this.step('Map Account Name', async () => {
                    remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                    await this.findElement(remoteWebdriver, FlexiAppMCSRecentItems.accountName.xpath, 20 * 1000);
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppMCSRecentItems.accountName.xpath);
                    this.assertTestBuilderState(pageStructureInfo, FlexiAppMCSRecentItems.accountName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
                });

                this.step('Add & Do Account Name Field', async () => {

                    await this.modifyAddToTestCase(FlexiAppMCSRecentItems.accountName.interactionParameters.readAssert);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, FlexiAppMCSRecentItems.accountName.testCaseXMLAssert);
                    this.assertExecutionStatus(testItemId, FlexiAppMCSRecentItems.accountName.executionStatusAssert, response.runExecutionStatus.currentTestCase);
                });

                this.step('Map Type Field', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppMCSRecentItems.type.xpath);
                    this.assertTestBuilderState(pageStructureInfo, FlexiAppMCSRecentItems.type.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
                });
                this.step('Add & Do Type Field', async () => {
                    await this.modifyAddToTestCase(FlexiAppMCSRecentItems.type.interactionParameters.readAssert);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, FlexiAppMCSRecentItems.type.testCaseXML);
                    this.assertExecutionStatus(testItemId, FlexiAppMCSRecentItems.type.executionStatus, response.runExecutionStatus.currentTestCase);
                });

                this.step('Map Phone Field', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppMCSRecentItems.phone.xpath);
                    this.assertTestBuilderState(pageStructureInfo, FlexiAppMCSRecentItems.phone.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
                });
                this.step('Add & Do Phone Field', async () => {
                    await this.modifyAddToTestCase(FlexiAppMCSRecentItems.phone.interactionParameters.readAssert);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, FlexiAppMCSRecentItems.phone.testCaseXML);
                    this.assertExecutionStatus(testItemId, FlexiAppMCSRecentItems.phone.executionStatus, response.runExecutionStatus.currentTestCase);
                });
                this.step('Map Website Field', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppMCSRecentItems.website.xpath);
                    this.assertTestBuilderState(pageStructureInfo, FlexiAppMCSRecentItems.website.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
                });
                this.step('Add & Do Website Field', async () => {
                    await this.modifyAddToTestCase(FlexiAppMCSRecentItems.website.interactionParameters.readAssert);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, FlexiAppMCSRecentItems.website.testCaseXML);
                    this.assertExecutionStatus(testItemId, FlexiAppMCSRecentItems.website.executionStatus, response.runExecutionStatus.currentTestCase);
                });
                this.step('Map Account Owner Field', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppMCSRecentItems.accountOwner.xpath);
                    this.assertTestBuilderState(pageStructureInfo, FlexiAppMCSRecentItems.accountOwner.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
                });
                this.step('Add & Do Account Owner Field', async () => {
                    await this.modifyAddToTestCase(FlexiAppMCSRecentItems.accountOwner.interactionParameters.readAssert);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, FlexiAppMCSRecentItems.accountOwner.testCaseXML);
                    this.assertExecutionStatus(testItemId, FlexiAppMCSRecentItems.accountOwner.executionStatus, response.runExecutionStatus.currentTestCase);
                });
                this.step('Map Industry Field', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppMCSRecentItems.industry.xpath);
                    this.assertTestBuilderState(pageStructureInfo, FlexiAppMCSRecentItems.industry.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
                });
                this.step('Add & Do Industry Field', async () => {
                    await this.modifyAddToTestCase(FlexiAppMCSRecentItems.industry.modificationParameter);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    const newValues: any = {
                        'name': "UiWithScreen",
                        'type': 'Icon-ExecutingChildPaused',
                        'executionStatus': 'Executing',
                        'successfulCount': 0,
                        'children': [
                            {
                                'name': 'UiWithRow',
                                'type': 'Icon-Successful',
                                'executionStatus': 'Executed',
                                'successfulCount': 1,
                            }
                        ]
                    };
                    this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                    await this.assertTestCaseXML(testItemId, FlexiAppMCSRecentItems.industry.testCaseXML);
                    this.assertExecutionStatus(testItemId, FlexiAppMCSRecentItems.industry.executionStatus, response.runExecutionStatus.currentTestCase);
                });

                this.step('Map Billing Address Field', async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppMCSRecentItems.billingAddress.xpath);
                    this.assertTestBuilderState(pageStructureInfo, FlexiAppMCSRecentItems.billingAddress.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
                });
                this.step('Add & Do Billing Adress Field', async () => {

                    await this.modifyAddToTestCase(FlexiAppMCSRecentItems.billingAddress.modificationParameter);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, FlexiAppMCSRecentItems.billingAddress.testCaseXML);
                    this.assertExecutionStatus(testItemId, FlexiAppMCSRecentItems.billingAddress.executionStatus, response.runExecutionStatus.currentTestCase);
                });

            });
    }
};

import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { FlexiHomeRecentItems } from './FlexiHomeRecentItems';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';

export class FlexiHomeRecentItemsSpec extends BaseSpec {
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
				"value": "9891989198"
			},
			{
				"label": "Website (Account_Website)",
                "selected": false,
                "value": ""
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

        this.zephyrTest('AutomationAPI', 'PROT-1549', 'FS_MAP_SF_STD_RECENT.HP.CLICK', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'FlexiHomeRecentItems.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [FlexiHomeRecentItems.PSI];

            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Map Account Name', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, FlexiHomeRecentItems.accountName.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHomeRecentItems.accountName.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHomeRecentItems.accountName.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
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
                await this.assertTestCaseXML("0", FlexiHomeRecentItems.accountName.testCaseXMLClick);
                this.assertExecutionStatus("0", FlexiHomeRecentItems.accountName.executionStatusClick, response.runExecutionStatus.currentTestCase);
                await remoteWebdriver.navigate().back();
            });
            it('Sleep for 3 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 3000);
            });
        });

            this.zephyrTest('AutomationAPI', 'PROT-1550', 'FS_MAP_SF_STD_RECENT.HP.RA', () => {
                beforeEach(() => {
                    this.beforeEach();
                });
                afterAll(async done => {
                    await this.endTestSession(done);
                });
                this.step('Map Account Name', async () => {
                    remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                    await this.findElement(remoteWebdriver, FlexiHomeRecentItems.accountName.xpath, 20 * 1000);
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHomeRecentItems.accountName.xpath);
                    this.assertTestBuilderState(pageStructureInfo, FlexiHomeRecentItems.accountName.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
                 });
                this.step('Add & Do Account Name Field', async () => {
                    await this.modifyAddToTestCase(FlexiHomeRecentItems.accountName.interactionParameters.readAssert);
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, FlexiHomeRecentItems.accountName.testCaseXMLAssert);
                    this.assertExecutionStatus(testItemId, FlexiHomeRecentItems.accountName.executionStatusAssert, response.runExecutionStatus.currentTestCase);
                });


            this.step('Map Type Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHomeRecentItems.type.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHomeRecentItems.type.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
             });
            this.step('Add & Do Type Field', async () => {
                await this.modifyAddToTestCase(FlexiHomeRecentItems.type.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHomeRecentItems.type.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHomeRecentItems.type.executionStatus, response.runExecutionStatus.currentTestCase);
            });
    
        this.step('Map Phone Field', async () => {
            const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHomeRecentItems.phone.xpath);
            this.assertTestBuilderState(pageStructureInfo, FlexiHomeRecentItems.phone.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
         });
        this.step('Add & Do Phone Field', async () => {
            await this.modifyAddToTestCase(FlexiHomeRecentItems.phone.interactionParameters.readAssert);
            const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
            await this.assertTestCaseXML(testItemId, FlexiHomeRecentItems.phone.testCaseXML);
            this.assertExecutionStatus(testItemId, FlexiHomeRecentItems.phone.executionStatus, response.runExecutionStatus.currentTestCase);
        });
        this.step('Map Website Field', async () => {
            const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHomeRecentItems.website.xpath);
            this.assertTestBuilderState(pageStructureInfo, FlexiHomeRecentItems.website.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
         });
        this.step('Add & Do Website Field', async () => {
            await this.modifyAddToTestCase(FlexiHomeRecentItems.website.interactionParameters.readAssert);
            const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
            await this.assertTestCaseXML(testItemId, FlexiHomeRecentItems.website.testCaseXML);
            this.assertExecutionStatus(testItemId, FlexiHomeRecentItems.website.executionStatus, response.runExecutionStatus.currentTestCase);
        });
        this.step('Map Account Owner Field', async () => {
            const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHomeRecentItems.accountOwner.xpath);
            this.assertTestBuilderState(pageStructureInfo, FlexiHomeRecentItems.accountOwner.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
         });
        this.step('Add & Do Account Owner Field', async () => {
            await this.modifyAddToTestCase(FlexiHomeRecentItems.accountOwner.interactionParameters.readAssert);
            const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
            await this.assertTestCaseXML(testItemId, FlexiHomeRecentItems.accountOwner.testCaseXML);
            this.assertExecutionStatus(testItemId, FlexiHomeRecentItems.accountOwner.executionStatus, response.runExecutionStatus.currentTestCase);
        });
        this.step('Map Industry Field', async () => {
            const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHomeRecentItems.industry.xpath);
            this.assertTestBuilderState(pageStructureInfo, FlexiHomeRecentItems.industry.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
         });  
         this.step('Add & Do Industry Field', async () => {
            await this.modifyAddToTestCase(FlexiHomeRecentItems.industry.modificationParameter);
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
            await this.assertTestCaseXML(testItemId, FlexiHomeRecentItems.industry.testCaseXML);
            this.assertExecutionStatus(testItemId, FlexiHomeRecentItems.industry.executionStatus, response.runExecutionStatus.currentTestCase);
        });

         this.step('Map Billing Address Field', async () => {
            const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHomeRecentItems.billingAddress.xpath);
            this.assertTestBuilderState(pageStructureInfo, FlexiHomeRecentItems.billingAddress.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
         }); 
         this.step('Add & Do Billing Adress Field', async () => {
            await this.modifyAddToTestCase(FlexiHomeRecentItems.billingAddress.modificationParameter);
            const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
            await this.assertTestCaseXML(testItemId, FlexiHomeRecentItems.billingAddress.testCaseXML);
            this.assertExecutionStatus(testItemId, FlexiHomeRecentItems.billingAddress.executionStatus, response.runExecutionStatus.currentTestCase);
        });

        }); 
    }
};

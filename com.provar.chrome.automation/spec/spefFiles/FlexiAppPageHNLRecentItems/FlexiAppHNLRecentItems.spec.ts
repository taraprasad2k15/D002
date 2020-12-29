import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';
import { FlexiAppHNLRecentItems } from './FlexiAppHNLRecentItems';

export class FlexiAppHNLRecentItemsSpec extends BaseSpec {
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
                "value": ""
			},
			{
				"label": "Phone (Account_Phone)",
				"selected": false,
				"value": "9891989198"
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
                "value": "Banking"
			},
			{
				"label": "Billing Address (Account_BillingAddress)",
				"selected": false,
				"value": ""
			}
		];

        this.zephyrTest('AutomationAPI', 'PROT-1538', 'FS_MAP_SF_STD_RECENT.AP.HEADERANDLEFT.CLICK', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'FlexiAppHNLRecentItems.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [FlexiAppHNLRecentItems.PSI];

            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
           
            this.step('Map Account Name', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, FlexiAppHNLRecentItems.accountName.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppHNLRecentItems.accountName.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiAppHNLRecentItems.accountName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
             });
                  this.step('Perform Click interaction on Account Name Field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiAppHNLRecentItems.accountName.testCaseXMLClick);
                this.assertExecutionStatus("0", FlexiAppHNLRecentItems.accountName.executionStatusClick, response.runExecutionStatus.currentTestCase);
                await remoteWebdriver.navigate().back();
          
            });
            it('Sleep for 3 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 3000);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1537', 'FS_MAP_SF_STD_RECENT.AP.HEADERANDLEFT.RA', () => {
            beforeEach(() => {
                this.beforeEach();
            });

            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Map Account Name', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, FlexiAppHNLRecentItems.accountName.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppHNLRecentItems.accountName.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiAppHNLRecentItems.accountName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
             });

            this.step('Add & Do Account Name Field', async () => {

                await this.modifyAddToTestCase(FlexiAppHNLRecentItems.accountName.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiAppHNLRecentItems.accountName.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, FlexiAppHNLRecentItems.accountName.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });

            this.step('Map Type Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppHNLRecentItems.type.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiAppHNLRecentItems.type.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
             });
            this.step('Add & Do Type Field', async () => {
                await this.modifyAddToTestCase(FlexiAppHNLRecentItems.type.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiAppHNLRecentItems.type.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiAppHNLRecentItems.type.executionStatus, response.runExecutionStatus.currentTestCase);
            });
    
        this.step('Map Phone Field', async () => {
            const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppHNLRecentItems.phone.xpath);
            this.assertTestBuilderState(pageStructureInfo, FlexiAppHNLRecentItems.phone.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
         });
        this.step('Add & Do Phone Field', async () => {
            await this.modifyAddToTestCase(FlexiAppHNLRecentItems.phone.interactionParameters.readAssert);
            const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
            await this.assertTestCaseXML(testItemId, FlexiAppHNLRecentItems.phone.testCaseXML);
            this.assertExecutionStatus(testItemId, FlexiAppHNLRecentItems.phone.executionStatus, response.runExecutionStatus.currentTestCase);
        });
        this.step('Map Website Field', async () => {
            const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppHNLRecentItems.website.xpath);
            this.assertTestBuilderState(pageStructureInfo, FlexiAppHNLRecentItems.website.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
         });
        this.step('Add & Do Website Field', async () => {
            await this.modifyAddToTestCase(FlexiAppHNLRecentItems.website.interactionParameters.readAssert);
            const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
            await this.assertTestCaseXML(testItemId, FlexiAppHNLRecentItems.website.testCaseXML);
            this.assertExecutionStatus(testItemId, FlexiAppHNLRecentItems.website.executionStatus, response.runExecutionStatus.currentTestCase);
        });
        this.step('Map Account Owner Field', async () => {
            const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppHNLRecentItems.accountOwner.xpath);
            this.assertTestBuilderState(pageStructureInfo, FlexiAppHNLRecentItems.accountOwner.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
         });
        this.step('Add & Do Account Owner Field', async () => {
            await this.modifyAddToTestCase(FlexiAppHNLRecentItems.accountOwner.interactionParameters.readAssert);
            const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
            await this.assertTestCaseXML(testItemId, FlexiAppHNLRecentItems.accountOwner.testCaseXML);
            this.assertExecutionStatus(testItemId, FlexiAppHNLRecentItems.accountOwner.executionStatus, response.runExecutionStatus.currentTestCase);
        });
        this.step('Map Industry Field', async () => {
            const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppHNLRecentItems.industry.xpath);
            this.assertTestBuilderState(pageStructureInfo, FlexiAppHNLRecentItems.industry.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
         });  
         this.step('Add & Do Industry Field', async () => {
            await this.modifyAddToTestCase(FlexiAppHNLRecentItems.industry.modificationParameter);
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
            await this.assertTestCaseXML(testItemId, FlexiAppHNLRecentItems.industry.testCaseXML);
            this.assertExecutionStatus(testItemId, FlexiAppHNLRecentItems.industry.executionStatus, response.runExecutionStatus.currentTestCase);
        });

         this.step('Map Billing Address Field', async () => {
            const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiAppHNLRecentItems.billingAddress.xpath);
            this.assertTestBuilderState(pageStructureInfo, FlexiAppHNLRecentItems.billingAddress.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,rowLocator);
         }); 
         this.step('Add & Do Billing Adress Field', async () => {
            await this.modifyAddToTestCase(FlexiAppHNLRecentItems.billingAddress.modificationParameter);
            const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
            const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
            await this.assertTestCaseXML(testItemId, FlexiAppHNLRecentItems.billingAddress.testCaseXML);
            this.assertExecutionStatus(testItemId, FlexiAppHNLRecentItems.billingAddress.executionStatus, response.runExecutionStatus.currentTestCase);
        });

        }); 
    }
};

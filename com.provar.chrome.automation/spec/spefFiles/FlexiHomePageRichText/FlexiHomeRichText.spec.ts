import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { FlexiHomeRichText } from './FlexiHomeRichText';
import { Lead } from '../../testdata/sfObjects/Lead';
import { join } from 'path';

export class FlexiHomeRichTextSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfoTopRegion: any[];
        let pageStructureInfoBottomRegion: any[];

        this.zephyrTest('AutomationAPI', 'PROT-1510', 'FS_MAP_SF_STD_RICHTEXT.HP', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'FlexiHomeRichText.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfoTopRegion = [FlexiHomeRichText.flexiHomeRichTextTopPSI];
                pageStructureInfoBottomRegion = [FlexiHomeRichText.flexiHomeRichTextBottomPSI];
                
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Map Rich Text Component from Top Region', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, FlexiHomeRichText.richTextTopRegion.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHomeRichText.richTextTopRegion.xpath);
                this.assertTestBuilderState(pageStructureInfoTopRegion, FlexiHomeRichText.richTextTopRegion.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Add Rich Text Component from Top Region', async () => {
                await this.modifyAddToTestCase(FlexiHomeRichText.richTextTopRegion.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiHomeRichText.richTextTopRegion.testCaseXML);
				this.assertExecutionStatus("0", FlexiHomeRichText.richTextTopRegion.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            
            this.step('Map Rich Text Component from Bottom Region', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, FlexiHomeRichText.richTextTopRegion.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHomeRichText.richTextBottomRegion.xpath);
                this.assertTestBuilderState(pageStructureInfoBottomRegion, FlexiHomeRichText.richTextTopRegion.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Add Rich Text Component from Bottom Region', async () => {
                await this.modifyAddToTestCase(FlexiHomeRichText.richTextTopRegion.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiHomeRichText.richTextBottomRegion.testCaseXML);
				this.assertExecutionStatus("0", FlexiHomeRichText.richTextBottomRegion.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
};

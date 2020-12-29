import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { Lead } from '../../testdata/sfObjects/Lead';
import { SfLeadPageTitle } from './SfLeadPageTitle';

export class SfLeadPageTitleSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        let remoteWebdriver: WebDriver;
        const connectionName: string = 'Regmain';

        this.zephyrTest('AutomationAPI', 'PROT-1738', 'FS_MAP_SF_LX_PAGE TITLE.RA', () => {
			beforeAll(async done => {
				const tcName = 'LeadPageTitle.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Page Title', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				await this.findElement(remoteWebdriver, SfLeadPageTitle.pageTitle.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadPageTitle.pageTitle.xpath);
				this.assertTestBuilderState([Lead.leadViewPsi], Lead.pageTitle, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
            this.step('Add & Do Page Title', async () => {
                await this.modifyAddToTestCase(SfLeadPageTitle.pageTitle.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfLeadPageTitle.pageTitle.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfLeadPageTitle.pageTitle.executionStatus, response.runExecutionStatus.currentTestCase);
            });
			
		});
    }
}
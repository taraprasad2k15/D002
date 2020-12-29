import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { richTextCustObjData } from './RichTextCustObjdata';
import { join } from 'path';

export class richTextCustObjSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        this.zephyrTest('AutomationAPI', 'PROT-1452', 'FS_MAP_SF_RP_HR_RichText', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'RichTextCustObj.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [richTextCustObjData.richtextfield.Psi];
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Map Rich text flexi comp', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, richTextCustObjData.richtextfield.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(richTextCustObjData.richtextfield.xpathU);
                this.assertTestBuilderState(pageStructureInfo, richTextCustObjData.richtextfield.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnly, response.testbuilderState);
            });
            this.step('Add & Do Rich text flexi comp', async () => {
                await this.modifyAddToTestCase(richTextCustObjData.richtextfield.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", richTextCustObjData.richtextfield.testCaseXML);
                this.assertExecutionStatus("0", richTextCustObjData.richtextfield.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}

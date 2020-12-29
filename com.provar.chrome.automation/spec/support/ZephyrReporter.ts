import * as fs from 'fs';
import { ZAPI } from '../support/Zapi';
const zapiObj = new ZAPI(false); // pass true here if you want to debug the rest calls to Zephyr
export let Zephyrupdates = [];

export class ZephyrReporter {
	public suiteStarted;
	public specStarted;
	public specDone;
	public suiteDone;
	private suites: any[];
	private specs: any[];
	private currentSuite: any;
	private testCaseResult: Map<string, any>;
	constructor(options: any) {
		this.testCaseResult = new Map<string, any>();
		this.suites = [];
		this.specs = [];
		this.suiteStarted = result => {
			// console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
			result = this.getSuite(result);
			result.nestedSuites = [];
			result.steps = [];
			result.stdout = '';
			result.parent = this.currentSuite;
			if (this.currentSuite) {
				this.currentSuite.nestedSuites.push(result);
			}
			this.currentSuite = result;
			this.appendSuiteName(result);
		};
		this.specStarted = result => {
			// console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
			result = this.getSpec(result);
		};
		this.specDone = result => {
			console.log('Spec Done: ', result);
			result = this.getSpec(result);
			this.appendSpecOutput(result);
			this.updateTestCaseResult(result);
		};
		
		this.suiteDone = async result => {
			// console.log('Suit Done: ', result);
			// console.log('zephyrTestCaseId: ' + result.id);
			// console.log('testCycle: ' + result.testCycle);
			result = this.getSuite(result);
			this.currentSuite = result.parent;
			if (!this.currentSuite) {
				const fileName: string = result.id + '_result.txt';
				const filepath: string = this.writeFile(options.savePath, fileName, result.stdout);
				if(result.id.search("suite") !== -1){
					console.log("Zephyr Ids are not provided, therefore skipping the zephyr update");
				} else {
					Zephyrupdates.push(this.updateZephyrTestCase(result.id, result.testCycle, filepath, fileName));
					// await this.updateZephyrTestCase(result.id, result.testCycle, filepath, fileName);
				}
			} else {
				this.currentSuite.stdout += '\n\t' + result.stdout;
			}
			
		};
	}

	private updateTestCaseResult(result): void {
		const specResult = {
			description: result.description,
			status: result.status,
			failedExpectations: result.failedExpectations,
		};
		const zephyrTestCaseId: string = this.currentSuite.id;
		let specResults: any[] = this.testCaseResult.get(zephyrTestCaseId);
		if (specResults) {
			specResults.push(specResult);
		} else {
			specResults = [];
			specResults.push(specResult);
			this.testCaseResult.set(zephyrTestCaseId, specResults);
		}
	}

	private getSpec(result) {
		this.specs[result.id] = Object.assign(this.specs[result.id] || {}, result);
		if (!this.specs[result.id].testCase) {
			this.specs[result.id].testCase = this.currentSuite;
			this.currentSuite.steps.push(this.specs[result.id]);
		}
		return this.specs[result.id];
	}

	private getSuite(result) {
		this.suites[result.id] = Object.assign(this.suites[result.id] || {}, result);
		return this.suites[result.id];
	}

	private appendSuiteName(suite) {
		if (this.currentSuite.stdout) {
			this.currentSuite.stdout += '\n';
		}
		this.currentSuite.stdout += suite.fullName;
	}

	private appendSpecOutput(spec) {
		this.currentSuite.stdout += '\n';
		const status: string = spec.status;
		let testCaseBody = '';
		switch (status) {
			case 'passed':
				testCaseBody += '\t\t' + 'Passed : ' + spec.description;
				break;
			case 'failed':
				testCaseBody += '\t\t' + 'Failed : ' + spec.description;
				for (let i = 0, failure; i < spec.failedExpectations.length; i++) {
					failure = spec.failedExpectations[i];
					testCaseBody += '\n   <failure type="' + (failure.matcherName || 'exception') + '"';
					testCaseBody += ' message="' + failure.message + '"';
					testCaseBody += '>';
					testCaseBody += '\n   </failure>';
				}
				break;
		}
		this.currentSuite.stdout += testCaseBody;
	}

	private writeFile(path: string, fileName: string, data: string) {
		var mkdirp = require('mkdirp');
		const filepath: string = path + '//' + fileName;
		// Creates the path if it doesn't exist
		mkdirp(path, function(err) { 
			fs.writeFile(filepath, data, err => {
				if (err) {
					console.log(err);
				}
			});
		});
		return filepath;
		
	}

	private async updateZephyrTestCase(zephyrTestCaseId: string, path: string, filepath: string, filename: string) {
		const specResults: any[] = this.testCaseResult.get(zephyrTestCaseId);
		let testcaseStatus: number = 1; // 1 represents passed, 2 represents failed
		let comment: string = 'Passed';
		if (specResults) {
			for (let i = 0; i < specResults.length; i++) {
				if (specResults[i].status === 'failed') {
					testcaseStatus = 2; // if any of the it block failed, then mark test case as failed;
					comment = 'Failed'
				}
			}
			const projectId: number = 17705;
			const versionId: number = 20614;
			
			await zapiObj.updateZephyrExecution(projectId, versionId, path, zephyrTestCaseId, testcaseStatus, filepath, filename, comment);
		}
	}
}

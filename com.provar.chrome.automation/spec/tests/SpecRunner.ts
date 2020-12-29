import { JUnitXmlReporter } from 'jasmine-reporters';
import { ZephyrReporter, Zephyrupdates } from '../support/ZephyrReporter';
import { Default, Lightning, Classic, VF, Flexi, Lightning2 } from './SpecTestIndex';
import { remote } from 'electron';
export class SpecRunner {

	public specClasses: any[] = [];

	public run() {
		const testReport = new JUnitXmlReporter({
			savePath: './target/build/spec/report',
			consolidateAll: true,
			filePrefix: 'junit',
		});
		jasmine.getEnv().addReporter(testReport);
		jasmine.getEnv().addReporter(new ZephyrReporter({
			savePath: './target/build/spec/report',
		}));
		if (require('electron').remote.process.argv.length > 3) {
			const timer = setInterval(async () => {
				if (testReport && testReport.finished) {
					try{await Promise.all(Zephyrupdates);}catch(e){console.log(e)}
					const window = remote.getCurrentWindow();
					clearInterval(timer);
					window.close();
				}
			}, 1 * 1000);
		}
		if (require('electron').remote.process.argv[7]) {
			const executionPack: string = require('electron').remote.process.argv[7];
			switch (executionPack) {
				case 'Classic':
					this.runSpecTest(Classic);
					break;
				case 'Lightning':
					this.runSpecTest(Lightning);
					break;
				case 'VF':
					this.runSpecTest(VF);
					break;
				case 'Flexi':
					this.runSpecTest(Flexi);
					break;
				case 'Lightning2':
					this.runSpecTest(Lightning2);
					break;
				default:
					require('electron').remote.process.stdout.write("The provided pack name:", executionPack, " does not exist.");
					break;
			}
		} else {
			this.runSpecTest(Default);
		}
	}

	private runSpecTest(specTests) {
		for (let i = 0; i < specTests.length; i++) {
			const clasInstance = new specTests[i]();
			clasInstance.runTest();
		}
	}
}
new SpecRunner().run();

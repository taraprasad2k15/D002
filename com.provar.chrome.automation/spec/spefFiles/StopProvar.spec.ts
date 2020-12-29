export class StopProvar {
    public runTest() {
        describe('Close Provar', () => {
            beforeEach(async done => {
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;
                done();
            });

            it('Killing Provar process', async done => {
                const { exec } = require('child_process');
                exec("taskkill /F /IM provar.exe", (err, stdout, stderr) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('provar stopped');
                    done();
                });
                
            });
        });

    }
}
import * as fs from 'fs';
import { join } from 'path';

export class StartProvar {
    public runTest() {

        describe('Launch Provar', () => {
            beforeEach(async done => {
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 8*60*1000;
                done();
            });
            it('Launch Provar', async done => {
                const { exec } = require('child_process');
                const provar_path = require('electron').remote.process.argv[5];
                const provar_project_path = require('electron').remote.process.argv[6];
                const command1 = '\"provar.exe\" -data \"' + provar_project_path + '\"';
                // launching provar
                fs.writeFile(provar_path + '/StartProvar.bat', command1, err => {
                    if (err) {
                        console.log(err);
                    }
                });
                // deleting the Provar logs
                fs.writeFile(provar_project_path + '/.metadata/.log', '', err => {
                    if (err) {
                        console.log(err);
                    }
                });
                // replacing the .secrets file
                const path_to_Secrets_file = join(__dirname, '.secrets').replace(/\\/g, '/').replace('/target/build/spec/spefFiles', '');
                const commandCopySecret = "copy /Y \"" + path_to_Secrets_file + "\" \"" + provar_project_path + "/E2E Testing\"";
                await exec(commandCopySecret, (err, stdout, stderr) => {
                    if (err) {
                        console.log(err);
                    }
                });
                // replacing the .testproject file
                const path_to_Testproject_file = join(__dirname, '.testproject').replace(/\\/g, '/').replace('/target/build/spec/spefFiles', '');
                const commandCopyTestproject = "copy /Y \"" + path_to_Testproject_file + "\" \"" + provar_project_path + "/E2E Testing\"";
                await exec(commandCopyTestproject, (err, stdout, stderr) => {
                    if (err) {
                        console.log(err);
                    }
                });
                // starting provar
                exec("StartProvar.bat", { cwd: provar_path }, (err, stdout, stderr) => {
                    if (err) {
                        console.log(err);
                    }
                });

                const launchtimeout = Date.now() + 4*60*1000;
                let ProvarKilledOnce = false;
                // polling for the server started message
                const timer = setInterval(() => {
                    const logs = fs.readFileSync(provar_project_path + '/.metadata/.log', 'utf-8');
                    if (logs.search('Chrome IDE WebSocket server started successfully.  Port: 2345') !== -1) {
                        require('electron').remote.process.stdout.write("\nIDE Websock server started");
                        clearInterval(timer);
                        expect(true).toBe(true);
                        done();
                    }
                    // if currenttime > starttime+ 4 mins, restart provar
                    if (Date.now() > launchtimeout && ProvarKilledOnce == false) {
                       // kill provar
                        const { exec } = require('child_process');
                        exec("taskkill /F /IM provar.exe", (err, stdout, stderr) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        ProvarKilledOnce = true;
                        // deleting the Provar logs
                        fs.writeFile(provar_project_path + '/.metadata/.log', '', err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        // starting provar
                        setTimeout(async () => {
                            exec("StartProvar.bat", { cwd: provar_path }, (err, stdout, stderr) => {
                                if (err) {
                                    console.log(err);
                                }
                            });
                        }, 8*1000);
                    }
                }, 2000);
            });
        });

    }
}

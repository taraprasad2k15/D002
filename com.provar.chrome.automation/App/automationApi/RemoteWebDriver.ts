import { Session, WebDriver } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';

export class RemoteWebDriver {
  constructor() {
  }
  public getRemoteWebDriverInstance(addr: string, sessionId: string): WebDriver {
	const service = {
		address: () => {
		return Promise.resolve(addr);
		},
		isRunning() {
		return true;
		},
		kill() {
		return Promise.resolve(true);
		},
		start() {
		return Promise.resolve(addr);
		},

	};
	WebDriver.createSession = function (executor, capabilities, onQuit = undefined) {
		const session = new Session(sessionId, capabilities);
		return new this(session, executor, onQuit);
	};

	return chrome.Driver.createSession(new chrome.Options(), service);
  }
}
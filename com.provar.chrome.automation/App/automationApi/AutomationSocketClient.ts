import { EventImpl } from '../communication/EventImpl';
import { WebSocketMessageClient } from '../communication/WebSocketMessageClient';
import { NodeWebSocketClient } from './NodeWebSocketClient';

export class AutomationSocketClient extends WebSocketMessageClient {
	public connected: boolean;

	private onCreateSession = new EventImpl<any>();
	private onAutomationSocketOpen = new EventImpl<any>();
	private onAutomationSocketError = new EventImpl<any>();

	constructor(public port: string, path: string) {
		super(new NodeWebSocketClient(port, path));

		this.Connect.on(() => {
			console.log('Connection is Opened');
			this.connected = true;
			this.onAutomationSocketOpen.trigger();
		});

		this.ConnectionClose.on(() => {
			this.connected = false;
		});

		this.ConnectionError.on(() => {
			console.log('Connection Error');
			this.onAutomationSocketError.trigger();
		});

		// message recieved from Provar socket server
		this.DispatchMessage.on(message => {
			// if (message['method'] === API_CONSTANTS.MessageMethod.createSession) {
			// 	this.onCreateSession.trigger();
			// }
			console.log('Received Message---' + message.method);
			this.emitMessage(message);
		});
	}

	public get CreateSession() {
		return this.onCreateSession.expose();
	}

	public get AutomationSocketOpen() {
		return this.onAutomationSocketOpen.expose();
	}

	public get AutomationSocketError() {
		return this.onAutomationSocketError.expose();
	}

	public emitMessage(eventData) {
		if (eventData.responseToId) {
			const responseState = this.responseStateMap['' + eventData.responseToId];
			if (responseState) {
				// console.log('dispatchMessage - resolving response: ' , eventData);
				responseState.resolve(eventData);
				delete this.responseStateMap['' + eventData.responseToId];
				return true;
			}
		}
		return false;
	}
}
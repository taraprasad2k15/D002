import * as WebSocket from 'ws';
import { EventImpl } from '../communication/EventImpl';
import { SocketMessage } from '../communication/SocketMessage';
import { ISocketClient } from '../communication/interface/ISocketClient';
import { API_CONSTANTS } from './API_CONSTANTS';

export class NodeWebSocketClient implements ISocketClient {
	private port: string;

	private webSocket;
	private readonly path: string;
	private readonly onSocketMessage = new EventImpl<any>();

	constructor(port: string, path: string) {
		this.port = port;
		this.path = path;
	}

	public open() {
		if (this.port) {
			const address = 'ws://localhost:' + this.port + this.path;
			this.webSocket = new WebSocket(address);

			this.webSocket.addEventListener(API_CONSTANTS.WebSocketMethods.open, () => {
				console.log('Connection open');
				this.onSocketMessage.trigger({ method: API_CONSTANTS.SocketClientMethods.open });
			});

			this.webSocket.addEventListener(API_CONSTANTS.WebSocketMethods.message, evt => {
				this.onSocketMessage.trigger(JSON.parse(evt.data));
			});

			this.webSocket.addEventListener(API_CONSTANTS.WebSocketMethods.close, () => {
				console.log('Connection close');
				this.webSocket.close();
				this.onSocketMessage.trigger({ method: API_CONSTANTS.SocketClientMethods.close });
			});

			this.webSocket.addEventListener(API_CONSTANTS.WebSocketMethods.error, error => {
				console.log('Connection error--' + error);
				this.onSocketMessage.trigger({ method: API_CONSTANTS.SocketClientMethods.error });
			});
		}

	}

	get SocketMessageRecieve() {
		return this.onSocketMessage.expose();
	}

	public sendMessage(message: SocketMessage) {
		this.webSocket.send(JSON.stringify(message));
	}
}
import { API_CONSTANTS } from '../automationApi/API_CONSTANTS';
import { EventImpl } from './EventImpl';
import { SocketMessage } from './SocketMessage';
import { IMessageChannel } from './interface/IMessageChannel';
import { ISocketClient } from './interface/ISocketClient';

/**
 * Base class for Web Socket connections with Provar and the IDE (Test Builder).
 *
 * Implements basic web socket communication.  Sub-classes should override the emitMessage()
 * to do strongly-type event broadcasting.
 *
 * Also implements the  handling for MessageProxy sub-classes.
 */
export class WebSocketMessageClient {

	private static nextMessageId: number = 1; // Used to allocate unique messageIds.
	private readonly onConnect = new EventImpl<any>();
	private readonly onConnectFailed = new EventImpl<any>();
	private readonly onMessage = new EventImpl<any>();
	private readonly onDispatchMessage = new EventImpl<any>();
	private readonly onConnectionError = new EventImpl<any>();
	private readonly onConnectionClose = new EventImpl<any>();
	protected readonly responseStateMap = {};
	protected methodSubscriberMap;
	private subscribeEventListener;
	private messageSendEventListener;

	// on re connect of socket client the message channel(handler) registers itself again
	// this flag is to ensure that only a single instance of message channel(handler) exists
	private messageChannelInst = false;

	constructor(private socketClient: ISocketClient, private messageChannel?: IMessageChannel) {

	}

	public open() {
		this.socketClient.open();

		// message recieved from Socket Serever.
		this.socketClient.SocketMessageRecieve.on(message => {
			if (message.method === API_CONSTANTS.SocketClientMethods.open) {
				this.onConnect.trigger();
			} else if (message.method === API_CONSTANTS.SocketClientMethods.close) {
				this.socketClient = null;
				this.ConnectionClose.trigger();
			} else if (message.method === API_CONSTANTS.SocketClientMethods.error) {
				this.socketClient = null;
				this.ConnectionError.trigger();
			} else {
				this.dispatchMessage(message);
			}
		});

		// message recieved from content window(eg content script, content window)
		if (this.messageChannel && this.messageChannelInst === false) {
			this.messageChannelInst = true;
			this.messageChannel.MessageRecieve.on(eventData => {
				this.onMessage.trigger(eventData);
			});
		}
	}

	/** This method is to set socket client explicity if socket client stops and needs reconnection.
    This is added to avoid the instantiation of the container class multiple times */
	public setSocketClientObj(socketClient: ISocketClient) {
		this.socketClient = socketClient;
	}

	public get Message() {
		return this.onMessage.expose();
	}

	public get Connect() {
		return this.onConnect.expose();
	}

	public get ConnectFailed() {
		return this.onConnectFailed.expose();
	}

	public get ConnectionError() {
		return this.onConnectionError.expose();
	}

	public get ConnectionClose() {
		return this.onConnectionClose.expose();
	}

	public get DispatchMessage() {
		return this.onDispatchMessage.expose();
	}

	public send(message: SocketMessage): void {
		this.socketClient.sendMessage(message);
	}

	public async sendWithResponse(message: SocketMessage): Promise<any> {
		if (!message.messageId) {
			message.messageId = ++WebSocketMessageClient.nextMessageId;
		}

		const promise = new Promise<any>((resolve, reject) => {
			this.responseStateMap['' + message.messageId] = { resolve, reject };
		});

		this.socketClient.sendMessage(message);
		return promise;
	}

	public async sendMessageToContentWindowWithResponse(message): Promise<any> {
		if (!message.messageId) {
			message.messageId = ++WebSocketMessageClient.nextMessageId;
		}

		const promise = new Promise<any>((resolve, reject) => {
			this.responseStateMap['' + message.messageId] = { resolve, reject };
		});

		if (this.messageChannel) {
			this.messageChannel.sendMessage(message);
		}

		return promise;
	}

	public sendMessageToContentWindow(message) {
		if (this.messageChannel) {
			this.messageChannel.sendMessage(message);
		}
	}

	/**
     * Can be overridden to provide strongly-type event broadcasting.
     * @returns true if the message was emitted, otherwise false.
     */
	protected emitMessage(message): boolean {
		return false;
	}

	private dispatchMessage(message) {
		this.onDispatchMessage.trigger(message);
	}
}
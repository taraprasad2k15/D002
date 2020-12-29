import { SocketMessage } from '../SocketMessage';
import { IEvent } from './IEvent';

export interface ISocketClient {

	SocketMessageRecieve: IEvent<any>;

	sendMessage(message: SocketMessage): void;

	open(): void;
}
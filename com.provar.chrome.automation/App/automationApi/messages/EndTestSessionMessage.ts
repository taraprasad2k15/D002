import { SocketMessage } from '../../communication/SocketMessage';
import { API_CONSTANTS } from '../API_CONSTANTS';
import { IAPIMessage } from './interface/IAPIMessage';

export class EndTestSessionMessage extends SocketMessage implements IAPIMessage {
	public automationSessionId: string;
	public options: {};
	constructor() {
		super(API_CONSTANTS.MessageMethod.endTestSession);
	}
}
import { SocketMessage } from '../../communication/SocketMessage';
import { API_CONSTANTS } from '../API_CONSTANTS';
import { IAPIMessage } from './interface/IAPIMessage';

export class GetInternalConnectionDetailsMessage extends SocketMessage implements IAPIMessage {
	public automationSessionId: string;
	public testRunId: number;
	public connectionName: string;
	constructor() {
		super(API_CONSTANTS.MessageMethod.getInternalConnectionDetails);
	}
}
import { SocketMessage } from '../../communication/SocketMessage';
import { API_CONSTANTS } from '../API_CONSTANTS';

export class CreateSessionMessage extends SocketMessage {
	public workspacePath: string;
	public testProjectPath: string;
	public resourceSelectors: any;
	public metadataLocation: string;
	constructor() {
		super(API_CONSTANTS.MessageMethod.createSession);
	}
}
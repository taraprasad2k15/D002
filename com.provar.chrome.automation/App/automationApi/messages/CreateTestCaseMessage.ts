import { SocketMessage } from '../../communication/SocketMessage';
import { API_CONSTANTS } from '../API_CONSTANTS';
import { IAPIMessage } from './interface/IAPIMessage';

export class CreateTestCaseMessage extends SocketMessage implements IAPIMessage {
	public automationSessionId: string;
	public testCasePath: string;
	constructor() {
		super(API_CONSTANTS.MessageMethod.createTestCase);
	}
}
import { SocketMessage } from '../../communication/SocketMessage';
import { API_CONSTANTS } from '../API_CONSTANTS';
import { CompleteAction } from './enum/CompleteAction';
import { IAPIMessage } from './interface/IAPIMessage';

export class CompleteAddToTestCaseMessage extends SocketMessage implements IAPIMessage {
	public automationSessionId: string;
	public testRunId: number;
	public completeAction: CompleteAction;
	constructor() {
		super(API_CONSTANTS.MessageMethod.completeAddToTestCase);
	}
}
import { SocketMessage } from '../../communication/SocketMessage';
import { API_CONSTANTS } from '../API_CONSTANTS';
import { IAPIMessage } from './interface/IAPIMessage';

export class ModifyAddToTestCaseMessage extends SocketMessage implements IAPIMessage {
	public automationSessionId: string;
	public testRunId: number;
	public parameters: string;
	constructor() {
		super(API_CONSTANTS.MessageMethod.modifyAddToTestCase);
	}
}
import { SocketMessage } from '../../communication/SocketMessage';
import { API_CONSTANTS } from '../API_CONSTANTS';
import { IAPIMessage } from './interface/IAPIMessage';

export class GetVariableStackMessage extends SocketMessage implements IAPIMessage {
	public automationSessionId: string;
	public testRunId: number;
	public variableName: string;
	constructor() {
		super(API_CONSTANTS.MessageMethod.getVariableStack);
	}
}
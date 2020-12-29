import { SocketMessage } from '../../communication/SocketMessage';
import { API_CONSTANTS } from '../API_CONSTANTS';
import { IAPIMessage } from './interface/IAPIMessage';

export class ExportTestRunDetailsMessage extends SocketMessage implements IAPIMessage {
	public automationSessionId: string;
	public options: {};
	public testRunId: number;
	constructor() {
		super(API_CONSTANTS.MessageMethod.exportTestRunDetails);
	}
}
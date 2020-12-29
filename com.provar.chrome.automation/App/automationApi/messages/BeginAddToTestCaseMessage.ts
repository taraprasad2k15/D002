import { SocketMessage } from '../../communication/SocketMessage';
import { API_CONSTANTS } from '../API_CONSTANTS';
import { IAPIMessage } from './interface/IAPIMessage';

export class BeginAddToTestCaseMessage extends SocketMessage implements IAPIMessage {
	public automationSessionId: string;
	public testRunId: number;
	public targetElementSelector: string;
	public frameXpaths: string[];
	public windowUrl:string;
	public windowTitle:string;
	constructor() {
		super(API_CONSTANTS.MessageMethod.beginAddToTestCase);
	}
}
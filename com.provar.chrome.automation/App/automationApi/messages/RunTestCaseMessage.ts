import { SocketMessage } from '../../communication/SocketMessage';
import { API_CONSTANTS } from '../API_CONSTANTS';
import { RunMode } from './enum/RunMode';
import { IAPIMessage } from './interface/IAPIMessage';

export class RunTestCaseMessage extends SocketMessage implements IAPIMessage {
	public automationSessionId: string;
	public testCaseName: string;
	public runMode: RunMode;
	constructor() {
		super(API_CONSTANTS.MessageMethod.runTestCase);
	}
}
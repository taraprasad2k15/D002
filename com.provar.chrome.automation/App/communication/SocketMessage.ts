/**
 * Base class for messages.
 */

export class SocketMessage {

	public method: string;
	public messageId: number;
	public responseToId: number;
	public sessionId: number;
	public subSessionId: number;
	public target: string;
	public targetId: string;

	private static messageIdSeq: number = 0;

	constructor(method: string, sourceJson?: {}) {
		if (sourceJson) {
			Object.assign(this, sourceJson);
			if (this.method !== method) {
				throw new Error('Method mismatch.  Expected: ' + method + ', actual: ' + this.method);
			}
		} else {
			this.method = method;
			this.messageId = ++SocketMessage.messageIdSeq;
		}
	}
}
import { IEvent } from './IEvent';

/**
 * Interface which provides a common interface for different transport channel.
 */

export interface IMessageChannel {
	/**
     * Registers a handler that is called whenever the event is fired.
     */
		// MessageRecieve: IMessageChannelEvent<any, any>;
		MessageRecieve: IEvent<any>;

	/**
     * Function to initiate the transfer of message.
     * @param {[type]} message - The message to be transferred.
     */
		sendMessage(message?: any): void;
}
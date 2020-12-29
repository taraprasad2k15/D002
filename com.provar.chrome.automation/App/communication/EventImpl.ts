import { IEvent } from './interface/IEvent';

/**
 * Standard IEvent implmentation.
 */

export class EventImpl<T> implements IEvent<T> {

	private handlers: Array<(eventData?: T) => void> = [];

	public on(handler: (eventData?: T) => void): void {
		this.handlers.push(handler);
	}

	public trigger(eventData?: T) {
		this.handlers.slice(0).forEach(h => h(eventData));
	}

	public expose(): IEvent<T> {
		return this;
	}
}
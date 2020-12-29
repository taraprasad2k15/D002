/**
 * General-purpose event that can be fired with event data.
 */

export interface IEvent<T> {
	/**
     * Registers a handler that is called whenever the event is fired.
     * @param handler - Handler function that is invoked whenever the event occurs.
     * @param eventData - The data for the event.
     */
		on(handler: (evenData?: T) => void): void;

	/**
     * Fires the event with the supplied data.
     * @param eventData - The data for the event.
     */
		trigger(eventData?: T): void;
}
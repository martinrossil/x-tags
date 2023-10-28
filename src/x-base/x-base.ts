/**
 * Base Element, with lifecycle hooks an invalidation methods.
 */

export default class XBase extends HTMLElement {
	public constructor() {
		super();
	}
}
customElements.define('x-base', XBase);

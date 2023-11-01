/**
 * Base Element, with lifecycle hooks and invalidation methods.
 */

export default class XBase extends HTMLElement {
	public constructor() {
		super();
		console.log('x-base construct()');
	}

	public connectedCallback() {
		console.log('x-base connectedCallback');
		console.log('x-base child count', this.childElementCount);
	}
}
customElements.define('x-base', XBase);

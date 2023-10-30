/**
 * Base Element, with lifecycle hooks and invalidation methods.
 */

export default class XBase extends HTMLElement {
	public constructor() {
		super();
		console.log('XBase construct', 'atribute [' + this.getAttribute('name') + ']');
	}

	public connectedCallback() {
		console.log('connectedCallback ', 'atribute [' + this.getAttribute('name') + ']');
		console.log('child count', this.childElementCount);
	}
}
customElements.define('x-base', XBase);

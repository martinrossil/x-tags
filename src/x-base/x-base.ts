/**
 * Base Element, with lifecycle hooks and invalidation methods.
 */

export default class XBase extends HTMLElement {
	public constructor() {
		super();
		console.log('XBase');
		this.style.display = 'inline-block';
		this.style.width = '200px';
		this.style.height = '200px';
		this.style.background = 'red';
	}

	public connectedCallback() {
		console.log('connectedCallback');
	}
}
customElements.define('x-base', XBase);

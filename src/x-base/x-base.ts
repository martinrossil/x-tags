/**
 * Base Element, with lifecycle hooks an invalidation methods.
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
}
customElements.define('x-base', XBase);

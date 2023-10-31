/**
 * Base Element, with lifecycle hooks and invalidation methods.
 */

export default class XBase extends HTMLElement {
	public constructor() {
		super();
		console.log('XBase construct', 'atribute [' + this.getAttribute('name') + ']');
		this.style.outline = 'solid blue 10px';
		this.style.outlineColor = 'linear-gradient(103deg, #AA24BF 14.31%, rgba(170, 36, 191, 0.00) 83.65%)';
	}

	public connectedCallback() {
		console.log('connectedCallback ', 'atribute [' + this.getAttribute('name') + ']');
		console.log('child count', this.childElementCount);
	}
}
customElements.define('x-base', XBase);

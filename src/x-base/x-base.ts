/**
 * Base Element, with lifecycle hooks and invalidation methods.
 */

export default class XBase extends HTMLElement {
	public static get observedAttributes() {
		return ['width', 'height', 'test'];
	}

	public constructor() {
		super();
		this.style.display = 'inline-block';
		// console.log('x-base construct()');
	}

	public connectedCallback() {
		// console.log('x-base connectedCallback');
		// console.log('x-base child count', this.childElementCount);
	}

	public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		// console.log('name', name, '[' + newValue + ']');
		switch (name) {
			case 'width': this.widthAttributeChanged(parseInt(newValue, 10));
				break;
			case 'height': this.heightAttributeChanged(parseInt(newValue, 10));
				break;
			default: break;
		}
	}

	private widthAttributeChanged(value: number) {
		// console.log(value);
		this.style.width = value + 'px';
	}

	private heightAttributeChanged(value: number) {
		// console.log(value);
		this.style.height = value + 'px';
	}
}
customElements.define('x-base', XBase);

import XProperty from '../x-property/x-property';

export default class XHex extends XProperty {
	public static get observedAttributes() {
		return ['hex', 'alpha'];
	}

	private _hex = '';

	private _alpha = '';

	private connected = false;

	public constructor() {
		super();
		// console.log('x-hex construct()');
	}

	public attributeChangedCallback(name: 'hex' | 'alpha', oldValue: string, newValue: string) {
		// console.log('x-hex attribute changed', name, newValue);
		switch (name) {
			case 'hex': this.hexAttributeChanged(newValue);
				break;
			case 'alpha': this.alphaAttributeChanged(newValue);
				break;
			default: break;
		}
	}

	public connectedCallback() {
		// console.log('h-hex connectedCallback()');
		this.connected = true;
	}

	// check for connected === true, notify parents if true
	private hexAttributeChanged(value: string) {
		// console.log('value', value, this.connected);
		this._hex = value;
	}

	// check for connected === true, notify parents if true
	private alphaAttributeChanged(value: string) {
		// console.log('alpha', value, this.connected);
		this._alpha = value;
	}
}
customElements.define('x-hex', XHex);

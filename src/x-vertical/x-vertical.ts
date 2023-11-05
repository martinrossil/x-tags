import XProperty from '../x-property/x-property';

export default class XVertical extends XProperty {
	public static get observedAttributes() {
		return ['top', 'bottom', 'center', 'scale'];
	}

	public constructor() {
		super();
		console.log('XVertical');
	}

	public attributeChangedCallback(name: 'top' | 'bottom' | 'center' | 'scale', oldValue: string, newValue: string) {
		console.log('x-vertical attribute', name, oldValue, '[' + newValue + ']');
	}
}
customElements.define('x-vertical', XVertical);

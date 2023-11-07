import XProperty from '../x-property/x-property';

export default class XPadding extends XProperty {
	public static get observedAttributes() {
		return ['left', 'top', 'right', 'center', 'all'];
	}

	public constructor() {
		super();
	}

	public attributeChangedCallback(name: 'top' | 'bottom' | 'center', oldValue: string, newValue: string) {
		console.log('x-vertical attribute', name, oldValue, '[' + newValue + ']');
	}
}
customElements.define('x-padding', XPadding);

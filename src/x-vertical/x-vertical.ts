import XProperty from '../x-property/x-property';

export default class XVertical extends XProperty {
	public static get observedAttributes() {
		return ['top', 'bottom', 'center'];
	}

	public constructor() {
		super();
		console.log('XVertical');
		// left: calc(50% - 100px + 100px);
	}

	public attributeChangedCallback(name: 'top' | 'bottom' | 'center', oldValue: string, newValue: string) {
		console.log('x-vertical attribute', name, oldValue, '[' + newValue + ']');
	}
}
customElements.define('x-vertical', XVertical);

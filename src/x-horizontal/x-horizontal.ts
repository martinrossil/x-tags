import XProperty from '../x-property/x-property';

export default class XHorizontal extends XProperty {
	public static get observedAttributes() {
		return ['left', 'right', 'center'];
	}

	public constructor() {
		super();
		// console.log('XHorizontal');
		// left: calc(50% - 100px + 100px);
	}

	public attributeChangedCallback(name: 'left' | 'right' | 'center', oldValue: string, newValue: string) {
		// console.log('x-horizontal attribute', name, oldValue, '[' + newValue + ']');
	}
}
customElements.define('x-horizontal', XHorizontal);

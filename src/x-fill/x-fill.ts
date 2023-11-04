import XProperty from '../x-property/x-property';

export default class XFill extends XProperty {
	public constructor() {
		super();
		// console.log('XFill construct()');
	}

	public connectedCallback() {
		// console.log('x-fill connectedCallback()');
	}
}
customElements.define('x-fill', XFill);

import XProperty from '../x-property/x-property';

export default class XHorizontal extends XProperty {
	public constructor() {
		super();
		console.log('XHorizontal');
	}
}
customElements.define('x-horizontal', XHorizontal);

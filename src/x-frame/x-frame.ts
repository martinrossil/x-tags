import XBase from '../x-base/x-base';

export default class XFrame extends XBase {
	public constructor() {
		super();
		// console.log('x-frame construct()');
	}

	public connectedCallback() {
		// console.log('x-frame connectedCallback');
		// console.log('x-frame child count', this.childElementCount);
	}
}
customElements.define('x-frame', XFrame);

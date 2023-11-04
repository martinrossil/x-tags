import XBase from '../x-base/x-base';
import XFill from '../x-fill/x-fill';
import XFrame from '../x-frame/x-frame';
import XHex from '../x-hex/x-hex';
import XProperty from '../x-property/x-property';

export default class XSolid extends XProperty {
	public constructor() {
		super();
		// console.log('XSolid construct()');
		// console.log(this.tagName);
		// this.style.display = 'none';
	}

	public connectedCallback() {
		if (this.parentElement instanceof XFill) {
			if (this.parentElement.parentElement instanceof XFrame) {
				// add more color formats check
				if (this.firstElementChild && this.firstElementChild.tagName === 'X-HEX') {
					// console.log(this.firstElementChild.getAttribute('value'));
					/* const { rgba } = this.firstElementChild;
					const frame = this.parentElement.parentElement;
					frame.style.background = rgba; */
				}
			}
		}
	}
}
customElements.define('x-solid', XSolid);

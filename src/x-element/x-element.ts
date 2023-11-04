import XBase from '../x-base/x-base';

export default class XElement extends XBase {
	public static get observedAttributes() {
		return [...XBase.observedAttributes];
	}

	public constructor() {
		super();
	}
}
customElements.define('x-element', XElement);

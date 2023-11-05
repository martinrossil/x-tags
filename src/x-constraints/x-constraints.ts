import XProperty from '../x-property/x-property';

export default class XConstraints extends XProperty {
	public constructor() {
		super();
		console.log('x-constraints constructor()');
	}
}
customElements.define('x-constraints', XConstraints);

export default class XProperty extends HTMLElement {
	public constructor() {
		super();
		this.style.display = 'none';
	}
}
customElements.define('x-property', XProperty);

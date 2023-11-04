import XElement from '../x-element/x-element';

export default class XFrame extends XElement {
	public static get observedAttributes() {
		return [...XElement.observedAttributes, 'padding'];
	}

	public constructor() {
		super();
		// console.log('x-frame construct()');
	}

	public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		super.attributeChangedCallback(name, oldValue, newValue);
		// console.log('name', name, '[' + newValue + ']');
		switch (name) {
			case 'padding': this.paddingAttributeChanged(parseInt(newValue, 10));
				break;
			default: break;
		}
	}

	private paddingAttributeChanged(value: number) {
		this.style.padding = value + 'px';
	}
}
customElements.define('x-frame', XFrame);

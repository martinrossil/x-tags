import XBase from '../x-base/x-base';

export default class XFrame extends XBase {
	public static get observedAttributes() {
		return [...XBase.observedAttributes, 'padding'];
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

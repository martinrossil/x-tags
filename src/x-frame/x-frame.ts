import { getChildTag } from '../utils/tags';
import XElement from '../x-element/x-element';

export default class XFrame extends XElement {
	public static get observedAttributes() {
		return [...XElement.observedAttributes, 'padding'];
	}

	public constructor() {
		super();
		// console.log('x-frame construct()');
		// console.log(this.children);
		// this.setLayout();
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

	protected connectedCallback() {
		super.connectedCallback();
		// console.log('x-frame connectedCallback()');
		this.setLayout();
	}

	private setLayout() {
		// console.log('setLayout()');
		const autoLayout = getChildTag(this, 'X-AUTO-LAYOUT');
		if (autoLayout) {
			this.setAutoLayout();
		} else {
			this.setAbsoluteLayout();
		}
	}

	private setAutoLayout() {
		// console.log('setAutoLayout()');
	}

	private setAbsoluteLayout() {
		// console.log('setAbsoluteLayout()');
		this.style.position = 'relative';
		let html: HTMLElement;
		for (const element of this.children) {
			html = element as HTMLElement;
			if (html.tagName === 'X-FRAME' || html.tagName === 'X-ELEMENT') {
				// console.log('found tagName', html.tagName);
				html.style.position = 'absolute';
				// console.log(html);
				const constraints = getChildTag(html, 'X-CONSTRAINTS');
				if (constraints) {
					// console.log('found constraints', constraints);
					this.setChildConstraintsStyles(html, constraints);
				}
			}
		}
	}

	private setChildConstraintsStyles(element: HTMLElement, constraints: Element) {
		// const width = element.getAttribute('width');
		// console.log('width [' + width + ']');
		// const height = element.getAttribute('height');
		// console.log('height [' + height + ']');
		const horizontal = getChildTag(constraints, 'X-HORIZONTAL');
		if (horizontal) {
			const left = horizontal.getAttribute('left');
			const right = horizontal.getAttribute('right');
			const center = horizontal.getAttribute('center');

			if (left !== null) {
				const leftNumber = parseFloat(left);
				if (!isNaN(leftNumber)) {
					element.style.left = leftNumber + 'px';
				}
			}

			if (right !== null) {
				const rightNumber = parseFloat(right);
				if (!isNaN(rightNumber)) {
					element.style.right = rightNumber + 'px';
				}
			}

			if (center !== null) {
				const width = element.getAttribute('width');
				let widthNumber = NaN;
				if (width !== null) {
					widthNumber = parseFloat(width);
					if (isNaN(widthNumber)) {
						widthNumber = 0;
					}
				}

				let centerNumber = parseFloat(center);
				if (isNaN(centerNumber)) {
					centerNumber = 0;
				}

				element.style.left = 'calc(50% + ' + (-(widthNumber * 0.5) + centerNumber) + 'px)';
			}
		}
	}

	private paddingAttributeChanged(value: number) {
		this.style.padding = value + 'px';
	}
}
customElements.define('x-frame', XFrame);

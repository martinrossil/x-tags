/**
 * Base Element, with lifecycle hooks and invalidation methods.
 */

import { hexToRGBA } from '../utils/color';

export default class XBase extends HTMLElement {
	public static get observedAttributes() {
		return ['width', 'height', 'test'];
	}

	public constructor() {
		super();
		this.style.display = 'inline-block';
		// line-height is set to 0 so we don't get extra height becuase of inline display
		this.style.lineHeight = '0px';
		// line-height is set to 0 so we don't get extra space between inline display items
		this.style.fontSize = '0px';
	}

	public connectedCallback() {
		this.setFill();
		// console.log('XFrame connectedCallback()');
		if (this.firstElementChild && this.firstElementChild.tagName === 'X-FILL') {
			// console.log('-------------- X-FILL found');
			const xFill = this.firstElementChild;
			if (xFill.firstElementChild && xFill.firstElementChild.tagName === 'X-SOLID') {
				// console.log('------------ X-SOLID found');
				const xSolid = xFill.firstElementChild;
				if (xSolid.firstElementChild && xSolid.firstElementChild.tagName === 'X-HEX') {
					const xHex = xSolid.firstElementChild;
					const hex = xHex.getAttribute('hex');
					const alpha = xHex.getAttribute('alpha');
					this.style.background = hexToRGBA(hex, alpha);
				}
			}
		}
	}

	public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		// console.log('name', name, '[' + newValue + ']');
		switch (name) {
			case 'width': this.widthAttributeChanged(parseInt(newValue, 10));
				break;
			case 'height': this.heightAttributeChanged(parseInt(newValue, 10));
				break;
			default: break;
		}
	}

	private setFill() {
		const fill = this.getChildTag(this, 'X-FILL');
		// console.log(fill);
		if (fill) {
			const solid = this.getChildTag(fill, 'X-SOLID');
			// console.log(solid);
			if (solid) {
				const hex = this.getChildTag(solid, 'X-HEX');
				// console.log(hex);
			}
		}
	}

	private getChildTag(parent: Element, tag: 'X-FILL' | 'X-SOLID' | 'X-HEX') {
		for (const element of parent.children) {
			if (element.tagName === tag) {
				return element;
			}
		}

		return null;
	}

	private widthAttributeChanged(value: number) {
		// console.log(value);
		this.style.width = value + 'px';
	}

	private heightAttributeChanged(value: number) {
		// console.log(value);
		this.style.height = value + 'px';
	}
}
customElements.define('x-base', XBase);

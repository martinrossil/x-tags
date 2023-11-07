/**
 * Base Element, with lifecycle hooks and invalidation methods.
 */

import { hexToRGBA } from '../utils/color';
import { getChildTag } from '../utils/tags';

export default class XBase extends HTMLElement {
	public static get observedAttributes() {
		return ['width', 'height', 'test'];
	}

	public constructor() {
		super();
		this.style.display = 'inline-block';
		// line-height is set to 0 so we don't get extra height because of inline display
		this.style.lineHeight = '0px';
		// line-height is set to 0 so we don't get extra space between inline display items
		this.style.fontSize = '0px';
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

	protected connectedCallback() {
		this.setFill();
	}

	private setFill() {
		const fill = getChildTag(this, 'X-FILL');
		// console.log(fill);
		if (fill) {
			const solid = getChildTag(fill, 'X-SOLID');
			// console.log(solid);
			if (solid) {
				const hex = getChildTag(solid, 'X-HEX');
				// console.log(hex);
				if (hex) {
					const value = hex.getAttribute('hex');
					const alpha = hex.getAttribute('alpha');
					this.style.background = hexToRGBA(value, alpha);
				}
			}
		}
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

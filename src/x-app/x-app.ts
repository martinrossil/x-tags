import XFrame from '../x-frame/x-frame';

export default class XApp extends XFrame {
	public constructor() {
		super();
		document.body.style.margin = '0';
		document.body.style.minHeight = '100%';
		document.body.style.height = '100%';
		document.documentElement.style.minHeight = '100%';
		document.documentElement.style.height = '100%';
		this.style.display = 'block';
		this.style.minHeight = '100%';
		// console.log('x-app construct()');
		// this.style.background = 'linear-gradient(180deg, #F94141 0%, rgba(51, 237, 59, 0.50) 100%)';
	}

	public connectedCallback() {
		// console.log('x-app connectedCallback');
		// console.log('x-app child count', this.childElementCount);
	}
}
customElements.define('x-app', XApp);

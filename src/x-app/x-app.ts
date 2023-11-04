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
	}
}
customElements.define('x-app', XApp);

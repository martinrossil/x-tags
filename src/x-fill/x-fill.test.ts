import { assert } from 'chai';
import XFill from './x-fill';
import XApp from '../x-app/x-app';

XApp;
XFill;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-fill', () => {
	describe('default style values', () => {
		it('display should be "none"', () => {
			document.body.innerHTML = /* html */`
				<x-app>
					<x-fill id="x-fill"></x-fill>
				</x-app>
			`;
			const element = document.getElementById('x-fill');
			if (element) {
				assert.strictEqual(element.style.display, 'none');
			} else {
				throw new Error('element is not defined');
			}
		});
	});
});

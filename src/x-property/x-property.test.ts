import { assert } from 'chai';
import XFill from '../x-fill/x-fill';
import XProperty from './x-property';
import XApp from '../x-app/x-app';

XApp;
XFill;
XProperty;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-property', () => {
	describe('default style values', () => {
		it('display should be "none"', () => {
			document.body.innerHTML = /* html */`
				<x-app>
					<x-fill>
						<x-property id="x-property"></x-property>
					</x-fill>
				</x-app>
			`;
			const element = document.getElementById('x-property');
			if (element) {
				assert.strictEqual(element.style.display, 'none');
			} else {
				throw new Error('element is not defined');
			}
		});
	});
});

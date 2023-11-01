import { html, fixture } from '@open-wc/testing';

import XBase from './x-base';
import { assert } from 'chai';

XBase;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-base', () => {
	describe('x-base', () => {
		it('width attribute', () => {
			document.body.innerHTML = `
				<x-app>
					<x-base id="element" width="200" height="200"></x-base>
				</x-app>`;
			const element = document.getElementById('element');
			if (element) {
				const bound = element.getBoundingClientRect();
				assert.strictEqual(bound.width, 200);
			} else {
				throw new Error('element is not defined');
			}
		});

		it('test attribute', () => {
			document.body.innerHTML = `
				<x-app>
					<x-base id="element" test="test"></x-base>
				</x-app>`;
			/* const element = document.getElementById('element');
			if (element) {
				const bound = element.getBoundingClientRect();
				assert.strictEqual(bound.width, 200);
			} else {
				throw new Error('element is not defined');
			} */
		});

		it('height attribute', () => {
			document.body.innerHTML = `
				<x-app>
					<x-base id="element" width="200" height="200"></x-base>
				</x-app>`;
			const element = document.getElementById('element');
			if (element) {
				const bound = element.getBoundingClientRect();
				assert.strictEqual(bound.height, 200);
			} else {
				throw new Error('element is not defined');
			}
		});
	});
});

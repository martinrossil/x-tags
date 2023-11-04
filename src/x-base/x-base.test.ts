import XApp from '../x-app/x-app';
import XBase from './x-base';
import { assert } from 'chai';

XApp;
XBase;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-base', () => {
	describe('default styles', () => {
		it('display should be inline-block', () => {
			document.body.innerHTML = /* html */`
			<x-app>
				<x-base id="x-base"></x-base>
			</x-app>`;

			const element = document.getElementById('x-base');
			if (element) {
				assert.strictEqual(element.style.display, 'inline-block');
			} else {
				throw new Error('element is not defined');
			}
		});

		it('lineHeight should be 0', () => {
			document.body.innerHTML = /* html */`
			<x-app>
				<x-base id="x-base"></x-base>
			</x-app>`;

			const element = document.getElementById('x-base');
			if (element) {
				assert.strictEqual(element.style.lineHeight, '0px');
			} else {
				throw new Error('element is not defined');
			}
		});

		it('fontSize should be 0', () => {
			document.body.innerHTML = /* html */`
			<x-app>
				<x-base id="x-base"></x-base>
			</x-app>`;

			const element = document.getElementById('x-base');
			if (element) {
				assert.strictEqual(element.style.fontSize, '0px');
			} else {
				throw new Error('element is not defined');
			}
		});
	});

	describe('attributes', () => {
		it('width attribute', () => {
			document.body.innerHTML = /* html */`
			<x-app>
				<x-base id="x-base" width="200" height="200"></x-base>
			</x-app>`;

			const element = document.getElementById('x-base');
			if (element) {
				const bound = element.getBoundingClientRect();
				assert.strictEqual(bound.width, 200);
			} else {
				throw new Error('element is not defined');
			}
		});

		it('test attribute', () => {
			document.body.innerHTML = /* html */`
			<x-app>
				<x-base test="test"></x-base>
			</x-app>`;
		});

		it('height attribute', () => {
			document.body.innerHTML = /* html */`
			<x-app>
				<x-base id="x-base" width="200" height="200"></x-base>
			</x-app>`;
			const element = document.getElementById('x-base');
			if (element) {
				const bound = element.getBoundingClientRect();
				assert.strictEqual(bound.height, 200);
			} else {
				throw new Error('element is not defined');
			}
		});
	});
});

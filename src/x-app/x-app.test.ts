import { assert } from 'chai';
import XApp from './x-app';

XApp;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-app', () => {
	it('default style values', () => {
		document.body.innerHTML = /* html */`
			<x-app id="x-app"></x-app>
		`;
		const element = document.getElementById('x-app');
		if (element) {
			assert.strictEqual(element.style.display, 'block');
			assert.strictEqual(element.style.minHeight, '100%');
		} else {
			throw new Error('element is not defined');
		}
	}); 

	it('should fill the entire viewport', () => {
		document.body.innerHTML = /* html */`
			<x-app id="x-app"></x-app>
		`;
		const element = document.getElementById('x-app');
		const viewportWidth = document.documentElement.clientWidth;
		const viewportHeight = document.documentElement.clientHeight;
		let x = NaN;
		let y = NaN;
		let width = NaN;
		let height = NaN;

		if (element) {
			const bound = element.getBoundingClientRect();
			x = bound.x;
			y = bound.y;
			width = bound.width;
			height = bound.height;
		} else {
			throw new Error('element is not defined');
		}

		assert.strictEqual(x, 0);
		assert.strictEqual(y, 0);
		assert.strictEqual(width, viewportWidth);
		assert.strictEqual(height, viewportHeight);
	});
});

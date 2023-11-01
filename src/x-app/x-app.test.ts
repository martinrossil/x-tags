import { assert } from 'chai';
import XApp from './x-app';

XApp;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-base', () => {
	it('body default style values', () => {
		document.body.innerHTML = `
			<x-app id="x-app"></x-app>
		`;
		assert.strictEqual(document.body.style.margin, '0px');
		assert.strictEqual(document.body.style.minHeight, '100%');
		assert.strictEqual(document.body.style.height, '100%');
		assert.strictEqual(document.documentElement.style.minHeight, '100%');
		assert.strictEqual(document.documentElement.style.height, '100%');
	});

	it('x-app default style values', () => {
		document.body.innerHTML = `
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

	it('x-app element should fill the entire viewport', () => {
		document.body.innerHTML = `
			<x-app id="x-app"></x-app>
		`;
		const element = document.getElementById('x-app');
		const viewportWidth = document.documentElement.clientWidth;
		const viewportHeight = document.documentElement.clientHeight;
		let x = null;
		let y = null;
		let width = null;
		let height = null;

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

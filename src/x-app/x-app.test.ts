import { assert } from 'chai';
import XApp from './x-app';

XApp;

describe('x-base', () => {
	it('x-app element should fill the entire viewport', async () => {
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
		}

		assert.strictEqual(x, 0);
		assert.strictEqual(y, 0);
		assert.strictEqual(width, viewportWidth);
		assert.strictEqual(height, viewportHeight);
	});
});

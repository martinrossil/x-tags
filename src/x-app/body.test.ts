import { assert } from 'chai';
import XApp from './x-app';

XApp;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('body', () => {
	it('body default style values', () => {
		document.body.innerHTML = /* html */`
			<x-app></x-app>
		`;
		assert.strictEqual(document.body.style.margin, '0px');
		assert.strictEqual(document.body.style.minHeight, '100%');
		assert.strictEqual(document.body.style.height, '100%');
		assert.strictEqual(document.documentElement.style.minHeight, '100%');
		assert.strictEqual(document.documentElement.style.height, '100%');
	});
});

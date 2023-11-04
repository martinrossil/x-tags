import { assert } from 'chai';
import XApp from '../x-app/x-app';
import XFill from '../x-fill/x-fill';
import XFrame from '../x-frame/x-frame';
import XHex from '../x-hex/x-hex';
import XSolid from './x-solid';

XApp;
XFrame;
XFill;
XSolid;
XHex;

afterEach(() => {
	document.body.innerHTML = '';
});
describe('x-solid', () => {
	describe('default style values', () => {
		it('display should be "none"', () => {
			document.body.innerHTML = `
				<x-app>
					<x-fill>
						<x-solid id="x-solid"></x-solid>
					</x-fill>
				</x-app>
			`;
			const element = document.getElementById('x-solid');
			if (element) {
				assert.strictEqual(element.style.display, 'none');
			} else {
				throw new Error('element is not defined');
			}
		});
	});

	describe('set solid color', () => {
		it('given x-hex hex="1E2A92", style.background should be rgb(30, 42, 146)', () => {
			document.body.innerHTML = /* html */`
			<x-app>
				<x-frame id="x-frame" width="200" height="200">
					<x-fill>
						<x-solid>
							<x-hex hex="1E2A92"></x-hex>
						</x-solid>
					</x-fill>
				</x-frame>
			</x-app>
			`;
			const element = document.getElementById('x-frame');
			if (element) {
				assert.strictEqual(element.style.background, 'rgb(30, 42, 146)');
			} else {
				throw new Error('element is not defined');
			}
		});

		it('given x-hex hex="1E2A92" and alpha=".5", style.background should be rgba(30, 42, 146, 0.5)', () => {
			document.body.innerHTML = /* html */`
			<x-app>
				<x-frame id="x-frame" width="200" height="200">
					<x-fill>
						<x-solid>
							<x-hex hex="1E2A92" alpha="0.5"></x-hex>
						</x-solid>
					</x-fill>
				</x-frame>
			</x-app>
			`;
			const element = document.getElementById('x-frame');
			if (element) {
				assert.strictEqual(element.style.background, 'rgba(30, 42, 146, 0.5)');
			} else {
				throw new Error('element is not defined');
			}
		});
	});
});

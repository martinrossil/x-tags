import { assert } from 'chai';
import XFrame from './x-frame';

XFrame;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-frame', () => {
	describe('padding attribute', () => {
		it('given padding is 100, size should be 200x200', () => {
			document.body.innerHTML = /* html */`
				<x-app>
					<x-frame padding="100" id="element"></x-frame>
				</x-app>`;
			const element = document.getElementById('element');
			if (element) {
				const bound = element.getBoundingClientRect();
				assert.strictEqual(bound.width, 200);
				assert.strictEqual(bound.height, 200);
			} else {
				throw new Error('element is not defined');
			}
		});

		it('given padding is 50 and a child size 200x200, size should be 300x300', () => {
			document.body.innerHTML = /* html */`
			<x-app>
				<x-frame padding="50" id="element">
					<x-base width="200" height="200" width></x-base>
				</x-frame>
			</x-app>`;
		});
	});
});

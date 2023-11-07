import { assert } from 'chai';
import XApp from '../x-app/x-app';
import XConstraints from '../x-constraints/x-constraints';
import XElement from '../x-element/x-element';
import XVertical from './x-vertical';

XApp;
XElement;
XConstraints;
XVertical;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-vertical', () => {
	describe('given x-app with no auto-layout', () => {
		describe('given x-contraints', () => {
			/* it('given x-vertical top="100", y should be 100', () => {
				document.body.innerHTML = `
				<x-app>
					<x-element id="x-element" width="100" height="100">
						<x-constraints>
							<x-vertical top="100"></x-vertical>
						</x-constraints>
					</x-element>
				</x-app>
				`;
				const element = document.getElementById('x-element');
				if (element) {
					const bound = element.getBoundingClientRect();
					assert.strictEqual(bound.y, 100);
					assert.strictEqual(element.style.position, 'absolute');
				} else {
					throw new Error('element is not defined');
				}
			}); */
		});
	});
});

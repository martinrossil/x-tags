import { assert } from 'chai';
import XApp from '../x-app/x-app';
import XElement from '../x-element/x-element';
import XConstraints from '../x-constraints/x-constraints';
import XHorizontal from './x-horizontal';

XApp;
XElement;
XConstraints;
XHorizontal;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-horizontal', () => {
	describe('given x-app with no auto-layout', () => {
		describe('given no x-constraints', () => {
			it('x should be 0 and y should be 0', () => {
				document.body.innerHTML = /* html */`
				<x-app>
					<x-element id="x-element" width="100" height="100"></x-element>
				</x-app>
				`;
				const element = document.getElementById('x-element');
				if (element) {
					const bound = element.getBoundingClientRect();
					assert.strictEqual(bound.x, 0);
					assert.strictEqual(bound.y, 0);
				} else {
					throw new Error('element is not defined');
				}
			});
		});
		describe('given x-contraints', () => {
			it('given x-horizontal left="100", x should be 100', () => {
				document.body.innerHTML = /* html */`
				<x-app>
					<x-element id="x-element" width="100" height="100">
						<x-constraints>
							<x-horizontal left="100"></x-horizontal>
						</x-constraints>
					</x-element>
				</x-app>
				`;
				const element = document.getElementById('x-element');
				if (element) {
					const bound = element.getBoundingClientRect();
					assert.strictEqual(bound.x, 100);
					assert.strictEqual(element.style.position, 'absolute');
				} else {
					throw new Error('element is not defined');
				}
			});
			it('given x-horizontal right="100", x should be ' + (window.innerWidth - 200), () => {
				document.body.innerHTML = /* html */`
				<x-app>
					<x-element id="x-element" width="100" height="100">
						<x-constraints>
							<x-horizontal right="100"></x-horizontal>
						</x-constraints>
					</x-element>
				</x-app>
				`;
				const element = document.getElementById('x-element');
				if (element) {
					const bound = element.getBoundingClientRect();
					assert.strictEqual(bound.x, window.innerWidth - 200);
					assert.strictEqual(element.style.position, 'absolute');
				} else {
					throw new Error('element is not defined');
				}
			});
			it('given x-horizontal center, x should be ' + ((window.innerWidth * 0.5) - 50), () => {
				document.body.innerHTML = /* html */`
				<x-app>
					<x-element id="x-element" width="100" height="100">
						<x-constraints>
							<x-horizontal center></x-horizontal>
						</x-constraints>
					</x-element>
				</x-app>
				`;
				const element = document.getElementById('x-element');
				if (element) {
					const bound = element.getBoundingClientRect();
					assert.strictEqual(bound.x, (window.innerWidth * 0.5) - 50);
					assert.strictEqual(element.style.position, 'absolute');
				} else {
					throw new Error('element is not defined');
				}
			});
			it('given x-horizontal center="-100", x should be ' + ((window.innerWidth * 0.5) - 50 - 100), () => {
				document.body.innerHTML = /* html */`
				<x-app>
					<x-element id="x-element" width="100" height="100">
						<x-constraints>
							<x-horizontal center="-100"></x-horizontal>
						</x-constraints>
					</x-element>
				</x-app>
				`;
				const element = document.getElementById('x-element');
				if (element) {
					const bound = element.getBoundingClientRect();
					assert.strictEqual(bound.x, (window.innerWidth * 0.5) - 50 - 100);
					assert.strictEqual(element.style.position, 'absolute');
				} else {
					throw new Error('element is not defined');
				}
			});
			it('given x-horizontal center="100", x should be ' + ((window.innerWidth * 0.5) - 50 + 100), () => {
				document.body.innerHTML = /* html */`
				<x-app>
					<x-element id="x-element" width="100" height="100">
						<x-constraints>
							<x-horizontal center="100"></x-horizontal>
						</x-constraints>
					</x-element>
				</x-app>
				`;
				const element = document.getElementById('x-element');
				if (element) {
					const bound = element.getBoundingClientRect();
					assert.strictEqual(bound.x, (window.innerWidth * 0.5) - 50 + 100);
					assert.strictEqual(element.style.position, 'absolute');
				} else {
					throw new Error('element is not defined');
				}
			});
		});
	});
});

import { html, fixture } from '@open-wc/testing';

import XBase from './x-base';
import { assert } from 'chai';

describe('x-base', () => {
	it('Description here', async () => {
		/* const outer = new XBase('outer');
		outer.setAttribute('name', 'outer');
		document.body.appendChild(outer);

		const inner = new XBase('inner');
		inner.setAttribute('name', 'inner');
		outer.appendChild(inner);

		const deepest = new XBase('deepest');
		deepest.setAttribute('name', 'deepest');
		inner.appendChild(deepest); */
		XBase;

		document.body.innerHTML = `
		<x-base id="outer" name="outer">
			<x-fill>
				<x-color>#123456</x-color>
			</x-fill>
			<x-base name="inner">
				<x-base name="deepest">
					<x-base name="even deeper">Hello from even deeper 3</x-base>
					<x-base name="even deeper"></x-base>
				</x-base>
			</x-base>
		</x-base>`;

		const element = document.getElementById('outer');
		if (element) {
			const compStyles = window.getComputedStyle(document.body);
			console.log(compStyles.margin);
			const bound = element.getBoundingClientRect();

			console.log(bound);
		}
		/* const element = await fixture(html`
		<x-base name="outer">
			<x-fill>
				<x-color>#123456</x-color>
			</x-fill>
			<x-base name="inner">
				<x-base name="deepest">
					<x-base name="even deeper">Hello from even deeper</x-base>
					<x-base name="even deeper"></x-base>
				</x-base>
			</x-base>
		</x-base>`);
		console.log('isConnected', element.isConnected); */
		// document.body.appendChild(element);
		// const compStyles = window.getComputedStyle(element);
		// console.log(compStyles.width);
		// assert.isDefined(element);
		// const bound = element.getBoundingClientRect();
		// console.log(document.documentElement.clientWidth, document.documentElement.clientHeight, bound);
	});

	/* it('Description here', async () => {
		const element = new XBase();
		document.body.appendChild(element);
		const compStyles = window.getComputedStyle(element);
		console.log(compStyles.width);
		assert.isDefined(element);
		const bound = element.getBoundingClientRect();
		console.log(bound);
	}); */
});

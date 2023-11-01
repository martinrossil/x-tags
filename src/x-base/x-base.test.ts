import { html, fixture } from '@open-wc/testing';

import XBase from './x-base';
import { assert } from 'chai';

XBase;

describe('x-base', () => {
	it('Description here', async () => {
		document.body.innerHTML = `
		<x-app>
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
			</x-base>
		</x-app>`;

		const element = document.getElementById('outer');
		if (element) {
			const compStyles = window.getComputedStyle(document.body);
			console.log(compStyles.margin);
			const bound = element.getBoundingClientRect();
		}
	});
});

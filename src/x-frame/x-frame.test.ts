import XFrame from './x-frame';

XFrame;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-frame', () => {
	describe('padding attribute', () => {
		it('', () => {
			document.body.innerHTML = `
				<x-app>
					<x-frame padding="24" id="element"></x-frame>
				</x-app>`;
			const element = document.getElementById('element');
			// console.log(element);
		});
	});
});

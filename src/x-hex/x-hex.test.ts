import XApp from '../x-app/x-app';
import XFill from '../x-fill/x-fill';
import XSolid from '../x-solid/x-solid';
import XHex from './x-hex';

XApp;
XFill;
XSolid;
XHex;

afterEach(() => {
	document.body.innerHTML = '';
});

describe('x-hex', () => {
	describe('test attribute', () => {
		it('test attribute', () => {
			document.body.innerHTML = /* html */`
			<x-app>
				<x-fill>
					<x-solid>
						<x-hex test="test"></x-hex>
					</x-solid>
				</x-fill>
			</x-app>
			`;
		});
	});
});

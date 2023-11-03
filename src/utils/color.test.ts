import { assert } from 'chai';
import { hexToRGBA } from './color';

describe('color', () => {
	it('given hexToRGBA(), return rgba(0, 0, 0, 0.0)', () => {
		assert.strictEqual(hexToRGBA(), 'rgba(0, 0, 0, 0.0)');
	});

	it('given hexToRGBA(null), return rgba(0, 0, 0, 0.0)', () => {
		assert.strictEqual(hexToRGBA(null), 'rgba(0, 0, 0, 0.0)');
	});

	it('given hexToRGBA("123456", null), return rgba(18, 52, 86, 1.0)', () => {
		assert.strictEqual(hexToRGBA('123456', null), 'rgba(18, 52, 86, 1.0)');
	});

	it('given hexToRGBA("123456"), return rgba(18, 52, 86, 1.0)', () => {
		assert.strictEqual(hexToRGBA('123456'), 'rgba(18, 52, 86, 1.0)');
	});

	it('given hexToRGBA("123"), return rgba(0, 0, 0, 0.0)', () => {
		assert.strictEqual(hexToRGBA('123'), 'rgba(0, 0, 0, 0.0)');
	});

	it('given hexToRGBA("wrong!"), return rgba(0, 0, 0, 0.0)', () => {
		assert.strictEqual(hexToRGBA('wrong!'), 'rgba(0, 0, 0, 0.0)');
	});

	it('given hexToRGBA("wrong!", "wrong!"), return rgba(0, 0, 0, 0.0)', () => {
		assert.strictEqual(hexToRGBA('wrong!', 'wrong!'), 'rgba(0, 0, 0, 0.0)');
	});

	it('given hexToRGBA("123456", "1"), return rgba(18, 52, 86, 1.0)', () => {
		assert.strictEqual(hexToRGBA('123456', '1'), 'rgba(18, 52, 86, 1.0)');
	});

	it('given hexToRGBA("123456", "-1"), return rgba(18, 52, 86, 0.0)', () => {
		assert.strictEqual(hexToRGBA('123456', '-1'), 'rgba(18, 52, 86, 0.0)');
	});

	it('given hexToRGBA("123456", "text"), return rgba(18, 52, 86, 0.0)', () => {
		assert.strictEqual(hexToRGBA('123456', 'text'), 'rgba(18, 52, 86, 0.0)');
	});

	it('given hexToRGBA("123456", ".1234"), return rgba(18, 52, 86, 0.1234)', () => {
		assert.strictEqual(hexToRGBA('123456', '.1234'), 'rgba(18, 52, 86, 0.1234)');
	});

	it('given hexToRGBA("123456", "1.234"), return rgba(18, 52, 86, 1.0)', () => {
		assert.strictEqual(hexToRGBA('123456', '1.234'), 'rgba(18, 52, 86, 1.0)');
	});

	it('given hexToRGBA("123456", "0"), return rgba(18, 52, 86, 0.0)', () => {
		assert.strictEqual(hexToRGBA('123456', '0'), 'rgba(18, 52, 86, 0.0)');
	});
});

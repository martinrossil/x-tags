import { html, fixture } from '@open-wc/testing';

import XBase from './x-base';
import { assert } from 'chai';

describe('x-base', () => {
	it('Description here', async () => {
		const element = await fixture(html`<x-base><x-base></x-base></x-base>`);
		const compStyles = window.getComputedStyle(element);
		console.log(compStyles.width);
		assert.isDefined(element);
		const bound = element.getBoundingClientRect();
		console.log(document.documentElement.clientWidth, document.documentElement.clientHeight, bound);
	});

	it('Description here', async () => {
		const element = new XBase();
		document.body.appendChild(element);
		const compStyles = window.getComputedStyle(element);
		console.log(compStyles.width);
		assert.isDefined(element);
		const bound = element.getBoundingClientRect();
		console.log(bound);
	});
});

/* A
describe('MyElement', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: MyElement = await fixture(html` <my-element></my-element> `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el: MyElement = await fixture(html` <my-element></my-element> `);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el: MyElement = await fixture(html` <my-element title="attribute title"></my-element> `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: MyElement = await fixture(html` <my-element></my-element> `);

    await expect(el).shadowDom.to.be.accessible();
  });
}); */

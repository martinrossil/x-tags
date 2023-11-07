type XTag = 'X-FILL' | 'X-SOLID' | 'X-HEX' | 'X-CONSTRAINTS' | 'X-HORIZONTAL' | 'X-AUTO-LAYOUT';

export function getChildTag(parent: Element, tag: XTag) {
	for (const element of parent.children) {
		if (element.tagName === tag) {
			return element;
		}
	}

	return null;
}

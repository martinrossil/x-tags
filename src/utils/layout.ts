export function setAllChildrenPositionAbsolute(parent: HTMLElement) {
	let htmlElement: HTMLElement;
	for (const element of parent.children) {
		htmlElement = element as HTMLElement;
		if (htmlElement.tagName === 'X-FRAME' || htmlElement.tagName === 'X-ELEMENT') {
			htmlElement.style.position = 'absolute';
		}
	}
}

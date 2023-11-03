export function hexToRGBA(hex: string | null = null, alpha: string | null = null) {
	if (hex === null) {
		return 'rgba(0, 0, 0, 0.0)';
	}

	if (hex.length !== 6) {
		return 'rgba(0, 0, 0, 0.0)';
	}

	let alphaString = '1.0';

	if (alpha === null) {
		alphaString = '1.0';
	} else {
		const numeric = parseFloat(alpha);
		if (isNaN(numeric)) {
			alphaString = '0.0';
		} else if (numeric <= 0) {
			alphaString = '0.0';
		} else if (numeric >= 1) {
			alphaString = '1.0';
		} else {
			alphaString = numeric.toString();
		}
	}

	if (/^[0-9a-fA-F]+$/.test(hex)) {
		const chunks = hex.match(/.{1,2}/g);
		if (chunks && chunks[0] && chunks[1] && chunks[2]) {
			const red = parseInt(chunks[0], 16);
			const green = parseInt(chunks[1], 16);
			const blue = parseInt(chunks[2], 16);
			return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alphaString + ')'.toLowerCase();
		}
	}

	return 'rgba(0, 0, 0, 0.0)';
}

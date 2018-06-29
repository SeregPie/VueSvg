export default function(createElement) {
	let {
		svgAttributes,
		svgContent,
	} = this;

	return createElement('svg', {
		attrs: svgAttributes,
		domProps: {
			innerHTML: svgContent,
		},
	});
}

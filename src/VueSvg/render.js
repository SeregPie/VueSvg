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
		style: {
			fill: 'currentColor',
			height: '1em',
			width: '1em',
		},
	});
}

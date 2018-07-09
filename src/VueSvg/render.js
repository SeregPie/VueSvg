export default function(createElement) {
	let {svgAttributes} = this;
	return createElement('svg', {attrs: svgAttributes});
}

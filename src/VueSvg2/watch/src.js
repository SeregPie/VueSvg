import Document_createElement from '/utils/Document/createElement';
import Http_get from '/utils/Http/get';

export default {
	async handler(src) {
		let svgAttributes = {};
		let svgContent = '';
		if (src) {
			let html = await Http_get(src);
			let divElement = Document_createElement('div', html);
			if (divElement.children.length) {
				let svgElement = divElement.children[0];
				Array
					.from(svgElement.attributes)
					.forEach(({name, value}) => {
						svgAttributes[name] = value;
					});
				svgContent = svgElement.innerHTML;
			}
		}
		Object.assign(this, {
			svgAttributes,
			svgContent,
		});
	},
	immediate: true,
};

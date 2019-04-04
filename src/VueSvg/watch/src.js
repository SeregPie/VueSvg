import Document_createElement from '../../utils/Document/createElement';
import Http_get from '../../utils/Http/get';

export default {
	handler(src) {
		let svgAttributes = {};
		let svgContent = '';
		Promise
			.resolve()
			.then(() => {
				if (src) {
					return Http_get(src).then(html => {
						let divElement = Document_createElement('div', html);
						if (divElement.children.length) {
							let [svgElement] = divElement.children;
							Array.from(svgElement.attributes).forEach(({name, value}) => {
								svgAttributes[name] = value;
							});
							svgContent = svgElement.innerHTML;
						}
					});
				}
			})
			.then(() => {
				Object.assign(this, {
					svgAttributes,
					svgContent,
				});
			});
	},
	immediate: true,
};

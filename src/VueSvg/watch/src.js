import Document_createElement from '/utils/Document/createElement';
import Http_get from '/utils/Http/get';

import svgAttributes from '../constants/defaultSvgAttributes';
import svgContent from '../constants/defaultSvgContent';

export default {
	handler(src) {
		if (src) {
			Http_get(src).then(svg => {
				let svgElement = Document_createElement('div', svg).children[0];
				let serializer = new XMLSerializer();
				let svgAttributes = {};
				Array
					.from(svgElement.attributes)
					.forEach(({name, value}) => {
						svgAttributes[name] = value;
					});
				let svgContent = Array
					.from(svgElement.childNodes)
					.map(child => serializer.serializeToString(child))
					.join('');
				Object.assign(this, {
					svgAttributes,
					svgContent,
				});
			});
		} else {
			Object.assign(this, {
				svgAttributes,
				svgContent,
			});
		}
	},
	immediate: true,
};

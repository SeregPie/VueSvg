import Document_createElement from '../../utils/Document/createElement';
import Http_get from '../../utils/Http/get';

import svgAttributes from '../constants/defaultSvgAttributes';
import svgChildren from '../constants/defaultSvgChildren';

export default {
	handler(src) {
		if (src) {
			Http_get(src).then(svg => {
				let svgElement = Document_createElement('div', svg).children[0];
				let svgAttributes = {};
				Array
					.from(svgElement.attributes)
					.forEach(({name, value}) => {
						svgAttributes[name] = value;
					});
				let svgChildren = svgElement.childNodes;
				Object.assign(this, {
					svgAttributes,
					svgChildren,
				});
			});
		} else {
			Object.assign(this, {
				svgAttributes,
				svgChildren,
			});
		}
	},
	immediate: true,
};

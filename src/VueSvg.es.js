import Document_createElement from '/utils/Document/createElement';
import Http_get from '/utils/Http/get';

export default {
	name: 'VueSvg',

	props: {
		src: String,
	},

	data() {
		return {
			svgAttributes: {},
			svgContent: '',
		};
	},

	watch: {
		src: {
			async handler(src) {
				let svgAttributes = {};
				let svgContent = '';
				if (src) {
					let html = await Http_get(src);
					let divElement = Document_createElement('div', html);
					if (divElement.children.length) {
						let [svgElement] = divElement.children;
						for (let {name, value} of svgElement.attributes) {
							svgAttributes[name] = value;
						}
						svgContent = svgElement.innerHTML;
					}
				}
				Object.assign(this, {
					svgAttributes,
					svgContent,
				});
			},
			immediate: true,
		},
	},

	render(createElement) {
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
	},
};

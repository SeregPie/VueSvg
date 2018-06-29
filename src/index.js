import VueSvg from './VueSvg';

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component(VueSvg.name, VueSvg);
}

export default VueSvg;

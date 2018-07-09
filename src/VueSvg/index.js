import VueFrozenData from '/utils/Vue/FrozenData';

import props from './props';
import frozenData  from './frozenData';
import watch from './watch';
import render from './render';

export default {
	name: 'VueSvg',
	mixins: [VueFrozenData(frozenData)],
	props,
	watch,
	render,
};

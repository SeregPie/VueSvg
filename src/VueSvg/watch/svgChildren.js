import Document_appendChildren from '../../utils/Document/appendChildren';
import Document_removeAllChildren from '../../utils/Document/removeAllChildren';

export default function(svgChildren) {
	let {$el} = this;
	Document_removeAllChildren($el);
	Document_appendChildren($el, svgChildren);
}

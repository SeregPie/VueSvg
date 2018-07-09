export default function(element, children) {
	Array.from(children).forEach(child => {
		element.appendChild(child);
	});
}

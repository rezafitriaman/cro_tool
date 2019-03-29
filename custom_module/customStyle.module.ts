export function customStyle() {
let customStyle_str: string = `
/*
==============================
CUSTOMSTYLE
==============================
*/

export function customStyle () {
	var style = \`
		<style id="t4u-custom-style">
		</style>\`;

	document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
}`;

return customStyle_str;
}
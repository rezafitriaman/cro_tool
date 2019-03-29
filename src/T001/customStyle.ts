/*
==============================
CUSTOMSTYLE
==============================
*/

export function customStyle () {
	var style = `
		<style id="t4u-custom-style">
			.t4u-custom {
				color: red!important;
			}
		</style>`;

	document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
}
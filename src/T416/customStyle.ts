/*
==============================
CUSTOMSTYLE
==============================
*/

export function customStyle () {
	var style = `
		<style id="t4u-custom-style">
			.t4u-custom {
				-webkit-order: 0!important;
			    -ms-flex-order: 0!important;
			    order: 0!important;
			}
		</style>`;

	document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
}
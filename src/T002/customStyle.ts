/*
==============================
CUSTOMSTYLE
==============================
*/

export function customStyle () {
	var style = `
		<style id="t4u-custom-style">
			.t4u-custom-background {
				background-color: #ffa029!important;
			}
			.t4u-custom-numbers {
				color: #202020!important;
			}
		</style>`;

	document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
}
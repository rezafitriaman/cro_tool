
/*
==============================
CUSTOMSTYLE
==============================
*/

export function customStyle () {
	var style = `
		<style id="t4u-custom-style">
			.custom-flex {
			    display: -webkit-box!important;
			    display: -ms-flexbox!important;
			    display: flex!important;
    			-webkit-box-align: end!important;
    			-ms-flex-align: end!important;
    			align-items: flex-end!important;
    			padding-left: 0px!important;
			}
			.t4u-custom-container .checkoutAccount-paymentMethods {
				border-top: unset!important;
				margin: 0px!important;			
			}
			.t4u-custom-container .checkoutAccount-paymentMethods .checkoutAccount-paymentMethods-list {
				border-bottom: unset!important;
			    margin-bottom: 0px!important;		
			}
			.t4u-custom-container .checkoutAccount-paymentMethods-item {
				margin: 0 8px!important;
			}
			.custom-white .checkoutAccount-paymentMethods {
				background-color: white!important;
			}
			.t4u-custom-container-mobile .checkoutAccount-paymentMethods {
				display: -webkit-box!important;
			    display: -ms-flexbox!important;
			    display: flex!important;
			    -webkit-box-pack: center!important;
			        -ms-flex-pack: center!important;
			            justify-content: center!important;
			    background-color: #f6f6f6!important;
			    border-top: unset!important;
			}
			.t4u-custom-container-mobile .checkoutAccount-paymentMethods .checkoutAccount-paymentMethods-item {
				margin: 0 3px 12px;
			}
			.t4u-custom-container-mobile .checkoutAccount-paymentMethods-list {
				padding-bottom: 0px!Important;
			}
		</style>`;

	document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
}
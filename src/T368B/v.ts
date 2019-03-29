/*init style*/
(() => {
	var style = '\
		<style id="t4u-custom-style">\
		  .t4u-green {\
		  	color: #12a100;\
		  }\
		</style>';
	document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
})();

var v = 'v2';
document.getElementsByTagName('html')[0].classList.add("t4u-T368B"+v);
var urlPath = window.location.pathname;
var page = urlPath.match(/(shopping-bag|payment|delivery|personal-info)/g);
var currency = urlPath.match(/(_(us|nl|be|ca))/g)[0].split('_')[1];
var language = urlPath.match(/((en|fr|nl)_)/g)[0];
var previousTotal = 0,
nowTotal = 0,
previous = 0,
variation = {
	v1 : {
		'shopping-bag' : {
			'price' : '<span class="t4u-green">XY</div>',
			'en_' : 'Order in 3 simple steps and save ',
			'fr_' : 'Commandez facilement en 3 étapes et économisez ',
			'nl_' : 'Bestel in 3 simpele stappen en bespaar ',
			'nl' : '€',
			'us' : '$',
			'be' : '€',
			'ca' :'CAD $',
			append : () => {
				appendToShopingBag(variation[v][page], currency);
			}
		},
		'payment' : {
			'price' : '<span class="t4u-green">XY</div>',
			'node' : `<div style="display: flex;justify-content: center;"><p class="container-t4u"></p></div>`,
			'en_' : 'Pay now and save ',
			'fr_' : 'Payez maintenant et économisez ',
			'nl_' : 'Betaal nu en bespaar ',
			'nl' : '€',
			'us' : '$',
			'be' : '€',
			'ca' :'CAD $',
			append : () => {
				deliveryPersonalinfoPayment(variation[v][page], currency);
			}
		},
		'delivery' : {
			append : () => {
				return;
			}
		},
		'personal-info' : {
			append : () => {
				return;
			}
		}
 	},
 	v2 : {
		'shopping-bag' : {
			'price' : '<span class="t4u-green">XY</div>',
			'en_' : 'Order in 3 simple steps and save ',
			'fr_' : 'Commandez facilement en 3 étapes et économisez ',
			'nl_' : 'Bestel in 3 simpele stappen en bespaar ',
			'nl' : '€',
			'us' : '$',
			'be' : '€',
			'ca' :'CAD $',
			append : () => {
				appendToShopingBag(variation[v][page], currency);
			}
		},
		'payment' : {
			'price' : '<span class="t4u-green">XY</div>',
			'node' : `<div style="display: flex;justify-content: center;"><p class="container-t4u"></p></div>`,
			'en_' : 'Pay now and save ',
			'fr_' : 'Payez maintenant et économisez ',
			'nl_' : 'Betaal nu en bespaar ',
			'nl' : '€',
			'us' : '$',
			'be' : '€',
			'ca' :'CAD $',
			append : () => {
				deliveryPersonalinfoPayment(variation[v][page], currency);
			}
		},
		'personal-info' : {
			'price' : '<span class="t4u-green">XY</div>',
			'node' : `<div style="display: flex;justify-content: center;"><p class="container-t4u"></p></div>`,
			'en_' : 'Continue and save ',
			'fr_' : 'Continuer et économisez ',
			'nl_' : 'Ga verder en bespaar ',
			'nl' : '€',
			'us' : '$',
			'be' : '€',
			'ca' :'CAD $',
			append : () => {
				deliveryPersonalinfoPayment(variation[v][page], currency);
			}
		},
		'delivery' : {
			'price' : '<span class="t4u-green">XY</div>',
			'node' : `<div style="display: flex;justify-content: center;"><p class="container-t4u"></p></div>`,
			'en_' : 'Continue and save ',
			'fr_' : 'Continuer et économisez ',
			'nl_' : 'Ga verder en bespaar ',
			'nl' : '€',
			'us' : '$',
			'be' : '€',
			'ca' :'CAD $',
			append : () => {
				deliveryPersonalinfoPayment(variation[v][page], currency);
			}
		}
 	}
}

//CHECK IF DOT OR COMA(DOLAR OR EUR)
var checkEurOrDollar = (pevious, now) => {
	//if an item does'not have previous/had no korting

	if(!previous) {
		previous = now;
	}

	if(currency == 'us' || currency == 'be' && language != 'fr_') {

		previousTotal = previousTotal + Number(previous));
		nowTotal = nowTotal + Number(now);
	}else {

		previousTotal = previousTotal + parseFloat(previous.replace(/,/g, '.'));
		nowTotal = nowTotal + parseFloat(now.replace(/,/g, '.'));	
	}

	var savedMoney = previousTotal - nowTotal;
	return savedMoney.toFixed(2);
}

//DELIVERY PERSONALINFO PAYMENT FUNCTION
var deliveryPersonalinfoPayment = (target, currency) => {
	var main = document.getElementById('main');
	var containerPrice = document.getElementsByClassName('shoppingCartPrice-group')

	for (var i = containerPrice.length - 1; i >= 0; i--) {
		previous = containerPrice[i].getElementsByClassName('shoppingCartPrice--previous')[0].innerText;
		now = containerPrice[i].getElementsByClassName('shoppingCartPrice')[1].innerText;

		var savedMoney =  checkEurOrDollar(previous, now);
	}

	if(savedMoney != 0) {
		main.insertAdjacentHTML('beforebegin', target['node']);

		var appendCurrency = target['price'].replace(/([X])/g, target[currency]);
		var appendSaved = appendCurrency.replace(/([Y])/g, savedMoney);
		var placeHolder = document.getElementsByClassName('container-t4u')[0];

		placeHolder.innerText = target[language];
		placeHolder.insertAdjacentHTML('beforeend', appendSaved);
	}
} 

//SHOPING BAG FUNCTION
var shopingBagSaved = () => {
	var containerPrice =  document.querySelectorAll('.checkoutShoppingCart-productListItem');

	for (var i = containerPrice.length - 1; i >= 0; i--) {
		previous = containerPrice[i].querySelectorAll('.shoppingCartPrice--previous')[0].innerText;
		now = containerPrice[i].querySelectorAll('.shoppingCartPrice--productListItem')[0].innerText;
		
		var savedMoney =  checkEurOrDollar(previous, now);
	}
	return savedMoney;
}

var appendToShopingBag = (target, currency) => {
	var saved = shopingBagSaved();
	var placeHolder = document.querySelectorAll('.checkout-microcopy');

	if(saved != 0) {
		for (var i = placeHolder.length - 1; i >= 0; i--) {
			var appendCurrency = target['price'].replace(/([X])/g, target[currency]);
			var appendSaved = appendCurrency.replace(/([Y])/g, saved);
			placeHolder[i].innerText = target[language];
			placeHolder[i].insertAdjacentHTML('beforeend', appendSaved);
		}
	}
}

//FUNCTION INIT
variation[v][page].append();
(function () {
    var style = '\
		<style id="t4u-custom-style">\
		  .t4u-green {\
		  	color: #12a100;\
		  }\
		</style>';
    document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
})();
var v = 'v1';
document.getElementsByTagName('html')[0].classList.add("t4u-T368C" + v);
var urlPath = window.location.pathname;
var page = urlPath.match(/(shopping-bag|payment|delivery|personal-info)/g);
var currency = urlPath.match(/(_(no|dk|gb|de|ch|at))/g)[0].split('_')[1];
var language = urlPath.match(/((en|fr|de)_)/g)[0];
var previousTotal = 0, nowTotal = 0, previous = 0, variation = {
    v1: {
        'shopping-bag': {
            'price': '<span class="t4u-green">X Y</div>',
            'en_': 'Order in 3 simple steps and save ',
            'fr_': 'Commandez facilement en 3 étapes et économisez ',
            'de_': 'Bestelle in 3 einfachen Schritten und spare ',
            'de': '€',
            'ch': 'CHF',
            'at': '€',
            'gb': '£',
            'dk': 'DKK',
            'no': 'NOK',
            append: function () {
                appendToShopingBag(variation[v][page], currency);
            }
        },
        'payment': {
            'price': '<span class="t4u-green">X Y</div>',
            'node': "<div style=\"display: flex;justify-content: center;\"><p class=\"container-t4u\"></p></div>",
            'en_': 'Pay now and save ',
            'fr_': 'Payez maintenant et économisez ',
            'de_': 'Bezahle jetzt und spare ',
            'de': '€',
            'ch': 'CHF',
            'at': '€',
            'gb': '£',
            'dk': 'DKK',
            'no': 'NOK',
            append: function () {
                deliveryPersonalinfoPayment(variation[v][page], currency);
            }
        },
        'delivery': {
            append: function () {
                return;
            }
        },
        'personal-info': {
            append: function () {
                return;
            }
        },
        'pdp': {
            'price': '<span class="t4u-green">X Y</div>',
            'node': "<div style=\"display: flex;justify-content: flex-start;\"><p class=\"container-t4u\" style=\"margin-bottom: 5px;\"></p></div>",
            'en_': 'Order this item now and save ',
            'fr_': 'Commandez cet article maintenant et économisez ',
            'de_': 'Bestelle diesen Artikel jetzt und spare ',
            'de': '€',
            'ch': 'CHF',
            'at': '€',
            'gb': '£',
            'dk': 'DKK',
            'no': 'NOK',
            append: function () {
                pdp(variation[v]['pdp'], currency);
            }
        }
    },
    v2: {
        'shopping-bag': {
            'price': '<span class="t4u-green">X Y</div>',
            'en_': 'Order in 3 simple steps and save ',
            'fr_': 'Commandez facilement en 3 étapes et économisez ',
            'de_': 'Bestelle in 3 einfachen Schritten und spare ',
            'de': '€',
            'ch': 'CHF',
            'at': '€',
            'gb': '£',
            'dk': 'DKK',
            'no': 'NOK',
            append: function () {
                appendToShopingBag(variation[v][page], currency);
            }
        },
        'payment': {
            'price': '<span class="t4u-green">X Y</div>',
            'node': "<div style=\"display: flex;justify-content: center;\"><p class=\"container-t4u\"></p></div>",
            'en_': 'Pay now and save ',
            'fr_': 'Payez maintenant et économisez ',
            'de_': 'Bezahle jetzt und spare ',
            'de': '€',
            'ch': 'CHF',
            'at': '€',
            'gb': '£',
            'dk': 'DKK',
            'no': 'NOK',
            append: function () {
                deliveryPersonalinfoPayment(variation[v][page], currency);
            }
        },
        'personal-info': {
            'price': '<span class="t4u-green">X Y</div>',
            'node': "<div style=\"display: flex;justify-content: center;\"><p class=\"container-t4u\"></p></div>",
            'en_': 'Continue and save ',
            'fr_': 'Continuer et économisez ',
            'de_': 'Weiter und spare ',
            'de': '€',
            'ch': 'CHF',
            'at': '€',
            'gb': '£',
            'dk': 'DKK',
            'no': 'NOK',
            append: function () {
                deliveryPersonalinfoPayment(variation[v][page], currency);
            }
        },
        'delivery': {
            'price': '<span class="t4u-green">X Y</div>',
            'node': "<div style=\"display: flex;justify-content: center;\"><p class=\"container-t4u\"></p></div>",
            'en_': 'Continue and save ',
            'fr_': 'Continuer et économisez ',
            'de_': 'Weiter und spar ',
            'de': '€',
            'ch': 'CHF',
            'at': '€',
            'gb': '£',
            'dk': 'DKK',
            'no': 'NOK',
            append: function () {
                deliveryPersonalinfoPayment(variation[v][page], currency);
            }
        },
        'pdp': {
            'price': '<span class="t4u-green">X Y</div>',
            'node': "<div style=\"display: flex;justify-content: flex-start;\"><p class=\"container-t4u\" style=\"margin-bottom: 5px;\"></p></div>",
            'en_': 'Order this item now and save ',
            'fr_': 'Commandez cet article maintenant et économisez ',
            'de_': 'Bestelle diesen Artikel jetzt und spare ',
            'de': '€',
            'ch': 'CHF',
            'at': '€',
            'gb': '£',
            'dk': 'DKK',
            'no': 'NOK',
            append: function () {
                pdp(variation[v]['pdp'], currency);
            }
        }
    }
};
//CHECK IF DOT OR COMA(DOLAR OR EUR)
var checkEurOrDollar = function (previous, now, page) {
    //if an item does'not have previous/had no korting
    if (!previous) {
        previous = now;
    }
    if (currency == 'de' || currency == 'ch' || currency == 'ded' || currency == 'at') {
        previousTotal = previousTotal + parseFloat(previous.trim().match(/((\d(,|\.|))+)/)[0].replace(/,/g, '.'));
        nowTotal = nowTotal + parseFloat(now.trim().match(/((\d(,|\.|))+)/)[0].replace(/,/g, '.'));
        ;
    }
    else {
        if (currency == 'no' || currency == 'dk' || currency == 'gb') {
            previousTotal = previousTotal + parseFloat(previous.trim().match(/((\d(,|\.|))+)/)[0].replace(/,/g, ''));
            nowTotal = nowTotal + parseFloat(now.trim().match(/((\d(,|\.|))+)/)[0].replace(/,/g, ''));
        }
    }
    var savedMoney = previousTotal - nowTotal;
    return savedMoney.toFixed(2);
};
//PDP funtion
var pdp = function (target, currency) {
    var button = document.getElementsByClassName('productDetail-addToBagLink');
    var prevEl = document.getElementsByClassName('productPrice-discount');
    var nowEl = document.getElementsByClassName('productPrice-value');
    //if there are discount
    if (prevEl.length != 0) {
        var previous = prevEl[0].innerHTML;
        var now = nowEl[0].innerHTML;
        var savedMoney = checkEurOrDollar(previous, now, 'pdp');
        button[0].insertAdjacentHTML('beforebegin', target['node']);
        var appendCurrency = target['price'].replace(/([X])/g, target[currency]);
        var appendSaved = appendCurrency.replace(/([Y])/g, savedMoney);
        var placeHolder = document.getElementsByClassName('container-t4u');
        placeHolder[0].innerText = target[language];
        placeHolder[0].insertAdjacentHTML('beforeend', appendSaved);
    }
};
//DELIVERY PERSONALINFO PAYMENT FUNCTION
var deliveryPersonalinfoPayment = function (target, currency) {
    var main = document.getElementById('main');
    var containerPrice = document.getElementsByClassName('shoppingCartPrice-group');
    for (var i = containerPrice.length - 1; i >= 0; i--) {
        previous = containerPrice[i].getElementsByClassName('shoppingCartPrice--previous')[0].innerText;
        now = containerPrice[i].getElementsByClassName('shoppingCartPrice')[1].innerText;
        var savedMoney = checkEurOrDollar(previous, now, variation[v][page]);
    }
    if (savedMoney != 0) {
        main.insertAdjacentHTML('beforebegin', target['node']);
        var appendCurrency = target['price'].replace(/([X])/g, target[currency]);
        var appendSaved = appendCurrency.replace(/([Y])/g, savedMoney);
        var placeHolder = document.getElementsByClassName('container-t4u')[0];
        placeHolder.innerText = target[language];
        placeHolder.insertAdjacentHTML('beforeend', appendSaved);
    }
};
//SHOPING BAG FUNCTION
var shopingBagSaved = function () {
    var containerPrice = document.querySelectorAll('.checkoutShoppingCart-productListItem');
    for (var i = containerPrice.length - 1; i >= 0; i--) {
        previous = containerPrice[i].querySelectorAll('.shoppingCartPrice--previous')[0].innerText;
        now = containerPrice[i].querySelectorAll('.shoppingCartPrice--productListItem')[0].innerText;
        var savedMoney = checkEurOrDollar(previous, now, variation[v][page]);
    }
    return savedMoney;
};
var appendToShopingBag = function (target, currency) {
    var saved = shopingBagSaved();
    var placeHolder = document.querySelectorAll('.checkout-microcopy');
    if (saved != 0) {
        for (var i = placeHolder.length - 1; i >= 0; i--) {
            var appendCurrency = target['price'].replace(/([X])/g, target[currency]);
            var appendSaved = appendCurrency.replace(/([Y])/g, saved);
            placeHolder[i].innerText = target[language];
            placeHolder[i].insertAdjacentHTML('beforeend', appendSaved);
        }
    }
};
//FUNCTION INIT
if (variation[v][page] !== undefined) {
    variation[v][page].append();
}
else {
    variation[v]['pdp'].append();
}

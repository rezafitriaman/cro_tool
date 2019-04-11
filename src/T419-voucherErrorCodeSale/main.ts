

import {Module, FindThatClassFirst, Debounce, TryAndCatch, CustomEventEmitter} from "./utility"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Module({
    isDevelop: false,
    style: `
        .t4u-custom-text {
            color: #c73939;
        }
        .t4u-custom-text.desktop,
        .t4u-custom-text.mobile  {
            width: 300px;
            display: none;
        }
    `,
    testId:  'T419-voucherErrorCodeSale',
    urlReplaced: 'https://www.g-star.com/_ui/g-star/js/app/base.11a824aec69af596fb137ffdfb67515e.js'
})
class V1 {
    log : Function; // CUSTOM LOG()
    match : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    errorMessageStr: string;
    voucherFormElm: HTMLElement;
    promoCodeFormHolderElm: HTMLCollection;
    discountedPriceElm:HTMLCollection;
    textLanguage: any;
    constructor() {
        // code...
        this.promoCodeFormHolderElm = document.getElementsByClassName('checkoutShoppingCart-promoCodeForm-formHolder');
        this.discountedPriceElm = document.getElementsByClassName('shoppingCartPrice--previous');
        this.textLanguage = {
            en_ : 'Your voucher code does not work on sale items.',
            de_ : 'Ihr Gutschein-Code gilt nicht auf reduzierte Artikel.',
            fr_ : 'Votre code de réduction ne fonctionne pas sur les articles en solde.',
            nl_ : 'Je voucher code is niet geldig op artikelen met korting.'
        }
        this.errorMessageStr = `<p class="t4u-custom-text ${this.match() == 'mobile' ? "mobile" : 'desktop or tablet' }">${this.textLanguage[this.language()[0]]}</p>`;
    }
    @TryAndCatch
    discountedPriceCheck() {
        //if one of the product has contain a discounted item then show the error text
        let context = this;
        context.log('discountedPriceCheck')

        for (var i = 0; i < this.discountedPriceElm.length; i++) {
            context.log((<HTMLElement>this.discountedPriceElm[i]).innerText.length);
            if((<HTMLElement>this.discountedPriceElm[i]).innerText.length > 0) {
                context.log('there is error');
                (<HTMLElement>document.getElementsByClassName('t4u-custom-text')[0]).style.display = 'block';
            }
        }
    }
    @TryAndCatch
    buttonAddVoucherCheck() {
        //on click on the add voucher button
        //set session storage on false on init
        //if NEW10 part of the voucher code then show the error-text and set the sessionstorage on true = this becouse if u click add-button the browser refress it self
        let context = this;
        let buttonAdd: Element = this.promoCodeFormHolderElm[0].getElementsByClassName('checkout-formButton')[0];
        let inputField: Element = this.promoCodeFormHolderElm[0].getElementsByClassName('js-voucherForm-input')[0];
        let NEW10: RegExp = /NEW10/g;
        let data = sessionStorage.getItem('showVoucherError') == null ? sessionStorage.setItem('showVoucherError', 'false') : JSON.parse(sessionStorage.getItem('showVoucherError'));
        let detectVoucherCode: EventListener = function():void {
            context.log((<HTMLInputElement>inputField).value)
            if((<HTMLInputElement>inputField).value.match(NEW10) ) {
                context.log('it is');
                // Save data to sessionStorage
                sessionStorage.setItem('showVoucherError', JSON.stringify(true));
            }else {
                sessionStorage.setItem('showVoucherError', JSON.stringify(false));
            }
        } 
        //listen to click event
        buttonAdd.addEventListener('click', detectVoucherCode);
        //check if data has true as value then display the error-text
        context.log(data);
        if(data) {
            context.log('there is error');
            (<HTMLElement>document.getElementsByClassName('t4u-custom-text')[0]).style.display = 'block';
        }else {
            context.log('there is no error');
            (<HTMLElement>document.getElementsByClassName('t4u-custom-text')[0]).style.display = 'none';
        }
    }
    @TryAndCatch
    appendString() {
        //append string on DOM
        let mobilePosition: InsertPosition = this.match() == 'mobile' ? "afterend" : 'beforeend';
        let targetElm: Element = this.match() == 'mobile' ? document.getElementById('voucherForm').getElementsByClassName('formInputGroup ')[0] : document.getElementById('voucherForm');
        
        targetElm.insertAdjacentHTML(mobilePosition, this.errorMessageStr);
    }
    @TryAndCatch
    cunstomCode() {
        this.appendString();
        this.buttonAddVoucherCheck();
        this.discountedPriceCheck();
    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation1:any = new V1();
    variation1.cunstomCode();

/*
==============================
END CUSTOM CODE
==============================
*/
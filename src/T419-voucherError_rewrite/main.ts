
import {Module} from "./utility"

import {TryAndCatch} from "./tryAndCatch"
/*import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"
*/
/*import {Cookie} from "./cookie"*/
import {Language} from "./languages"
/*import {Country} from "./country"*/
import {Style} from "./style"
import {MediaQuery} from "./mediaQuery"
import {CustomLog} from "./log"
import {NodeListExist} from "./nodeListExist"


/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/


@Module({
    isDevelop: true,
    testId:  'T419-voucherError_rewrite',
    urlReplaced: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
})
@Style(
`.t4u-custom-text {
    width: 300px;
    display: none;
    color: #c73939;
}
`
)
@CustomLog
@Language
@MediaQuery
class V1 {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR
    @NodeListExist
    promoCodeFormHolderElm: NodeList;
    @NodeListExist
    discountedPriceElm: NodeList;
    @NodeListExist
    buttonAdd: NodeList;
    @NodeListExist
    inputField: NodeList;

    //PUT OTHERS HERE
    textLanguage: any;
    errorMessageStr: string;
    constructor() {
        // code...

        this.textLanguage = {
            en_ : 'Your voucher code does not work on sale items.',
            de_ : 'Ihr Gutschein-Code gilt nicht auf reduzierte Artikel.',
            fr_ : 'Votre code de réduction ne fonctionne pas sur les articles en solde.',
            nl_ : 'Je voucher code is niet geldig op artikelen met korting.'
        }
        this.errorMessageStr = `<p class="t4u-custom-text">${this.textLanguage[this.language()[0]]}</p>`;
        this.promoCodeFormHolderElm = document.querySelectorAll('.checkoutShoppingCart-promoCodeForm-formHolder');
        this.discountedPriceElm = document.querySelectorAll('.shoppingCartPrice--previous');

        this.buttonAdd = document.querySelectorAll('.checkout-formButton');
        this.inputField = document.querySelectorAll('.js-voucherForm-input');
    }
    @TryAndCatch
    discountedPriceCheck() {
        //if one of the product has contain a discounted item then show the error text
        let context = this;

        for (var i = 0; i < this.discountedPriceElm.length; i++) {
            /*context.log((<HTMLElement>this.discountedPriceElm[i]).innerText);*/

            if((<HTMLElement>this.discountedPriceElm[i]).innerText.length > 0) {
                /*context.log('there is error');*/
                (<HTMLElement>document.querySelector('.t4u-custom-text')).style.display = 'block';
            }
        }
    }
    @TryAndCatch
    buttonAddVoucherCheck() {
        //on click on the add voucher button
        //set session storage on false on init
        //if NEW10 part of the voucher code then show the error-text and set the sessionstorage on true = this becouse if u click add-button the browser refresh it self
        /*console.log(this.promoCodeFormHolderElm.length)*/

        let context = this;
        let buttonAdd: any = this.buttonAdd
        let inputField: any = this.inputField
        let NEW10: RegExp = /NEW10/g;
        let data = sessionStorage.getItem('showVoucherError') == null ? sessionStorage.setItem('showVoucherError', 'false') : sessionStorage.getItem('showVoucherError');
        let detectVoucherCode: EventListener = function():void {

            /*context.log((<HTMLInputElement>inputField).value)*/
            context.log((<HTMLInputElement>inputField[0]).value.match(NEW10))
            if((<HTMLInputElement>inputField[0]).value.match(NEW10) ) {
                /*context.log('it is');*/
                // Save data to sessionStorage
                sessionStorage.setItem('showVoucherError', 'true');
            }else {
                sessionStorage.setItem('showVoucherError', 'false');
            }
        } 
        //listen to click event
        /*console.log(this.buttonAdd)*/
        buttonAdd[0].addEventListener('click', detectVoucherCode);
        //check if data has true as value then display the error-text
        if(data == 'true') {
            /*context.log('there is error');*/
            (<HTMLElement>document.querySelector('.t4u-custom-text')).style.display = 'block';
        }else {
            /*context.log('there is no error');*/
            (<HTMLElement>document.querySelector('.t4u-custom-text')).style.display = 'none';
        }
    
    }
    @TryAndCatch
    appendString() {
        //append string on DOM
        let isMobilePosition: InsertPosition = this.mediaQuery() == 'mobile' ? "afterend" : 'beforeend';
        let targetElm: any = this.mediaQuery() == 'mobile' ? document.getElementById('voucherForm').querySelector('.formInputGroup') : document.getElementById('voucherForm');

        if(targetElm != null) {
            targetElm.insertAdjacentHTML(isMobilePosition, this.errorMessageStr);
        }
    }
    cunstomCode() {
        //PUT HERE ONLY THE NAME OF THE FUNCTION();

        console.log('asdf')
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



/*class Employee {

    @logParameter
    name: string;

}

const emp = new Employee();
emp.name = 'Mohan Ram';
console.log(emp.name);*/
// Set: name => Mohan Ram
// Get: name => Mohan Ram
// Mohan Ram

/*
==============================
END CUSTOM CODE
==============================
*/

import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
//import {CustomEventEmitter} from "./customEventEmitter"
//import {FindThatClassFirst} from "./findThatClassFirst"
//import {Debounce} from "./debounce"

//import {Cookie} from "./cookie"
//import {Language} from "./languages"
//import {Country} from "./country"
import {Style} from "./style"
//import {inspect} from "util";
//import {MediaQuery} from "./mediaQuery"
import {CustomLog} from "./log"
//import {NodeListExist} from "./nodeListExist"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

interface ContentType {
    title : string,
    subtitle : string,
    usp : Array<string>,
    url : string
}
@CustomLog
@Style(`
    .reprise-custom-hero .hero__image img {
        height: 100%;
    }
    .reprise-custom-hero .reprice-hero-body > h1 {
        font-size: 3em;
        margin-bottom: 0px;
    }
    .reprise-custom-hero .reprice-hero-body > span {
        font-size: 0.80em;
    }
    .reprise-custom-hero .reprice-hero-body > ul {
        margin-top: 35px;
    }
    .reprise-custom-hero .reprice-hero-body > h2 {
        background: transparent;
        color: #fff;
        border-radius: 0px; 
        padding: 0px;
        margin-bottom: 2%;
        position: relative;
        border: transparent;
    }
    .reprise-custom-hero .reprice-hero-body > .hero__title span {
        font-size: 0.8em!important;
    }
    .reprise-custom-hero  .product-snippet__list{
        width: 420px!important;
        float: none!important;
        margin-bottom: 0px!important;
        margin-top: 20px!important;
        font-family: Averta, sans-serif!important; 
    }
    .reprise-second-button {
        margin-top: 12px!important;
    }
    .reprise-custom-button {
        display: block!important;
        width: 240px!important;
    }
    @media only screen and (max-width : 499px) {
        .reprise-custom-hero {
            margin-top: -20px!important;
            background-color: unset!important;
        }
    }
`)
@Develop({
    isDevelop: false,
    testId:  'T79-CTA-sectie',
    urlReplaced: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.62.0.21692'
})
class Base {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR

    //PUT OTHERS HERE
    htmlString: string;
    targetAppendTo: HTMLElement;
    targetRemove: HTMLElement;
    persoonlijkeLeningPage: string;
    doorlopenKreditPage: string;
    constructor() {
        // code...
        this.htmlString  = `<section class="hero hero__color--blue reprise-custom-hero">
                                <div class="hero__wrapper">
                                    <div class="hero__image reprise-custom-image">
                                        <img alt="" data-src="< 500:/-/media/images/fs-freo/freo/headers/lp_auto_2ehands.jpg?w=500&amp;h=250&amp;crop=1&amp;hash=248A1D5B93EF041D12108580F1EA2098613C6639, < 990:/-/media/images/fs-freo/freo/headers/lp_auto_2ehands.jpg?w=1000&amp;h=300&amp;crop=1&amp;hash=1F3D179286B41FBDF4948EC54D0EFA0A405B87C9, > 990:/-/media/images/fs-freo/freo/headers/lp_auto_2ehands.jpg?w=2000&amp;h=400&amp;crop=1&amp;hash=04E5ECAB322D4D3D0B071A2FCE4CE93AE18282CA, > 1800:/-/media/images/fs-freo/freo/headers/lp_auto_2ehands.jpg?w=2560&amp;h=400&amp;crop=1&amp;hash=A1E90FABF493BA9FCD8946B78EF886D1BD26EF44" data-src2x="< 500: /-/media/images/fs-freo/freo/headers/lp_auto_2ehands.jpg?w=1000&amp;h=400&amp;crop=1&amp;hash=F3B8576EFF7E8DAAAF5819E2BD78373F36437C3D, < 990: /-/media/images/fs-freo/freo/headers/lp_auto_2ehands.jpg?w=2000&amp;h=400&amp;crop=1&amp;hash=04E5ECAB322D4D3D0B071A2FCE4CE93AE18282CA, > 990: /-/media/images/fs-freo/freo/headers/lp_auto_2ehands.jpg?w=4000&amp;h=800&amp;crop=1&amp;hash=99E4CACC09304FB264746C8C582681FDFD1AFCF9, > 1800:/-/media/images/fs-freo/freo/headers/lp_auto_2ehands.jpg?w=5120&amp;h=800&amp;crop=1&amp;hash=6FE15B5CDCE17D0E5C7759D93FFD3C7E1519AB26" src="/-/media/images/fs-freo/freo/headers/lp_auto_2ehands.jpg?w=2000&amp;h=400&amp;crop=1&amp;hash=04E5ECAB322D4D3D0B071A2FCE4CE93AE18282CA">
                                    </div>
                            
                                    <!-- hero content-->
                                    <div class="hero__content">
                                        <div class="hero__body reprice-hero-body">
                                            <h1 class="reprise-title"></h1>
                                            <h2 class="hero__title product-snippet">
                                            <span class="reprise-subtitle"></span>           
                                            <ul class="product-snippet__list"></ul>
                                            </h2>
                                            <div class="reprise-btn-container">
                                                <a href="" class="hero__button btn--l btn--orange btn--large reprise-custom-button">Vrijblijvende offerte <span class="icon-chevron-right"></span></a>
                                            </div> 
                                        </div>   
                                    </div>
                                </div>
                            </section>`;
        this.persoonlijkeLeningPage = '/onze-leningen/persoonlijke-lening/';
        this.doorlopenKreditPage = '/onze-leningen/doorlopend-krediet/';
        this.targetAppendTo = document.querySelector('.usp');
        this.targetRemove = document.querySelector('.visual__color--blue');
    }
    @TryAndCatch
    appendHero() {
        if (window.location.href.indexOf(this.persoonlijkeLeningPage) != -1) {
            this.targetAppendTo.insertAdjacentHTML('afterend', this.htmlString)
        }

        if (window.location.href.indexOf(this.doorlopenKreditPage) != -1) {
            this.targetAppendTo.insertAdjacentHTML('afterend', this.htmlString)
        }
    }
    @TryAndCatch
    removeOrigin() {
        (function (arr) {
            arr.forEach(function (item) {
                if (item.hasOwnProperty('remove')) {
                    return;
                }
                Object.defineProperty(item, 'remove', {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    value: function remove() {
                        if (this.parentNode === null) {
                            return;
                        }
                        this.parentNode.removeChild(this);
                    }
                });
            });
        })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
        if (window.location.href.indexOf(this.persoonlijkeLeningPage) != -1) {
            this.targetRemove.remove();
        }

        if (window.location.href.indexOf(this.doorlopenKreditPage) != -1) {
            this.targetRemove.remove();
        }
    }
}
//persoonlijke lening
class V1 extends Base {
    persoonlijkeLeningContent: ContentType;
    doorlopenKreditContent: ContentType;
    pageTitle: NodeList;
    constructor() {
        super();
        this.persoonlijkeLeningContent = {
            title : 'Persoonlijke Lening',
            subtitle : 'Eenmalig een vast bedrag lenen',
            usp : ['Vast rente vanaf 3,9%', 'Altijd boetevrij aflossen', 'Standaard lage rente'],
            url: '/onze-leningen/offerte-aanvragen-persoonlijke-lening/'
        };
        this.doorlopenKreditContent = {
            title : 'Doorlopend Krediet',
            subtitle : 'Flexibel opnemen en aflossen',
            usp : ['Flexibel opnemen', 'Altijd boetevrij aflossen', 'Standaard lage rente vanaf 4,6%'],
            url: '/onze-leningen/offerte-aanvragen-doorlopend-krediet'
        };
        this.pageTitle = document.querySelectorAll('.page-title');
    }
    @TryAndCatch
    appendHero() {
        super.appendHero();
    }
    @TryAndCatch
    removeOrigin() {
        super.removeOrigin();
    }
    @TryAndCatch
    appendContent(title:string, subtitle:string, usp: Array<string>, url:string) {

        let titleElm = document.querySelector('.reprise-title');
        let subtitleElm = document.querySelector('.reprise-subtitle');
        let uspElm = document.querySelector('.product-snippet__list');
        let aElm = document.querySelector('.reprise-btn-container').querySelector('.btn--orange');

        for (let i = 0; i < usp.length; i++) {
            let li = document.createElement('li');
            li.innerText = usp[i];

            uspElm.insertAdjacentElement('beforeend', li);
        }

        titleElm.innerHTML = title;
        subtitleElm.innerHTML = subtitle;
        aElm.setAttribute("href", url);
    }
    @TryAndCatch
    changeTitleText(text: string) {
        if (window.location.href.indexOf(this.persoonlijkeLeningPage) != -1) {

            this.pageTitle.forEach(title => title.innerText = text);
        }

        if (window.location.href.indexOf(this.doorlopenKreditPage) != -1) {
            this.pageTitle.forEach(title => title.innerText = text)
        }
    }
    @TryAndCatch
    initCustomCode () {
        this.log(this.persoonlijkeLeningPage);
        if (window.location.href.indexOf(this.persoonlijkeLeningPage) != -1) {
            this.appendContent(this.persoonlijkeLeningContent.title, this.persoonlijkeLeningContent.subtitle, this.persoonlijkeLeningContent.usp, this.persoonlijkeLeningContent.url);
            this.changeTitleText('Wat is een Persoonlijke Lening?')
        }

        if (window.location.href.indexOf(this.doorlopenKreditPage) != -1) {
            this.appendContent(this.doorlopenKreditContent.title, this.doorlopenKreditContent.subtitle, this.doorlopenKreditContent.usp, this.doorlopenKreditContent.url);
            this.changeTitleText('Wat is een Doorlopend krediet?')
        }
    }
}

class V2 extends V1 {
    customBtn : string;
    constructor() {
        super();
        this.customBtn = ` <a href="/berekenen/wat-kost-geld-lenen-mij/" class="hero__button btn--l btn--blue btn--large reprise-custom-button reprise-second-button">Bereken uw lening <span class="icon-chevron-right"></span></a>`;
    }
    @TryAndCatch
    initCustomCode () {
        if (window.location.href.indexOf(this.persoonlijkeLeningPage) != -1) {
            super.initCustomCode();

            let btnContainer = document.querySelector('.reprise-btn-container');

            btnContainer.insertAdjacentHTML('beforeend', this.customBtn);

        }

        if (window.location.href.indexOf(this.doorlopenKreditPage) != -1) {
            super.initCustomCode();

            let btnContainer = document.querySelector('.reprise-btn-container');

            btnContainer.insertAdjacentHTML('beforeend', this.customBtn);
        }
    }
}
/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation:any = new V1();
variation.appendHero();
variation.removeOrigin();
variation.initCustomCode();
/*
==============================
END CUSTOM CODE
==============================
*/

import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
//import {CustomEventEmitter} from "./customEventEmitter"
//import {FindThatClassFirst} from "./findThatClassFirst"
//import {Debounce} from "./debounce"

//import {Cookie} from "./cookie"
//import {Language} from "./languages"
//import {Country} from "./country"
import {Style} from "./style"
//import {MediaQuery} from "./mediaQuery"
import {CustomLog} from "./log"
//import {NodeListExist} from "./nodeListExist"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Develop({
    isDevelop: false,
    testId:  'T78-RelevantUSPleendoel',
    urlReplaced: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.51.0.22184'
})
@Style(`
    .push .space-bottom {
        margin-top: 0;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .push .space-bottom .inner .c-usp-proof-snippet {
        justify-content: space-evenly;
    }
    @media only screen and (max-width : 749px) {
        .push .space-bottom {
            padding-top: 10px;
            padding-bottom: 0px;
        }
        .push .space-bottom .c-usp-proof-snippet .c-usp-proof__icon img {
            width: 30px;
        }
        .push .space-bottom .c-usp-proof-snippet>li {
            margin-bottom: 5px;
        }
        .push .space-bottom .c-usp-proof-snippet .c-usp-proof__text__value {
            font-size: 17px;
        }
        .push .space-bottom .c-usp-proof-snippet span:nth-child(2) {
            font-size: 15px;
        }
        .push .space-bottom .c-usp-proof-snippet li:nth-child(3) .c-usp-proof__text > span {
            font-size: 15px;
        }
    }
`)
@CustomLog
class Base {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR
    targets : NodeList;

    //PUT OTHERS HERE
    uspString : string;
    constructor() {
        // code...
        this.uspString = `
            <section class="space-bottom">
                <div class="inner">
                    <ul class="c-usp-proof-snippet">
                        <li><span class="c-usp-proof__icon">
                            <img src="/-/media/Images/Fs-Freo/Freo/Icons/iconpersontie.svg?la=nl-NL&amp;hash=54AAABF8AF5E7D44B3A9AF01995420154F77E3FE" alt="iconpersontie">
                        </span>
                            <div class="c-usp-proof__text"><span class="c-usp-proof__text__value">70.000+</span><span>bezoekers per maand</span></div>
                        </li>
                        <li><span class="c-usp-proof__icon">
                            <img src="/-/media/Images/Fs-Freo/Freo/Icons/Bekroondeservice.svg?la=nl-NL&amp;hash=DCB71916DC9FFB4F4F79F830515D3E3405087FE0" alt="Bekroondeservice">
                        </span>
                            <div class="c-usp-proof__text"><span class="c-usp-proof__text__value">11</span><span>jaar actief als online leenspecialist</span></div>
                        </li>
                        <li><span class="c-usp-proof__icon">
                            <img src="/-/media/Images/Fs-Freo/Freo/Icons/Bekroondeservice-cijfer.svg?h=64&amp;la=nl-NL&amp;w=64&amp;hash=C40A51D4A5905CBA8B415C754FE7C6F724632195" alt="Bekroondeservice cijfer" width="64" height="64">
                        </span>
                            <div class="c-usp-proof__text"><span>in klantbeoordelingen</span></div>
                        </li>
                    </ul>
                </div>
            </section>
        `;

        this.targets = document.querySelectorAll('.breadcrumbs-container');
    }
}

@Style(`
     .push .space-bottom {
        background-color: #f6f6f7;
    }
`)
@CustomLog
class V1 extends Base {
    constructor () {
        super();
    }
    @TryAndCatch
    customCode() {
        this.targets.forEach( target => {
            target && (<HTMLElement>target).insertAdjacentHTML('beforebegin', this.uspString);
        });
    }
}

@Style(`
     .push .space-bottom {
        background-color: #0076c7;
    }
     .push .space-bottom .c-usp-proof-snippet .c-usp-proof__text__value, .push .space-bottom .c-usp-proof-snippet .c-usp-proof__text {
       color: white; 
    }
`)
@CustomLog
class V2 extends Base {
    bezoekers : String;
    lSpecialist : String;
    klantBeoordeling : String;
    constructor () {
        super();

        this.bezoekers = `<svg xmlns="http://www.w3.org/2000/svg" id="Laag_1" viewBox="0 0 56.7 56.7" style="width: 30px;"><style>.st0,.st1{fill:white}.st1{fill-rule:evenodd;clip-rule:evenodd}</style><path class="st0" d="M24.6 56.7h-.2c-.3-.1-.6-.2-.7-.5l-4.6-7c-.2-.3-.2-.6-.2-.9l3-12.8-1.4-4.2c-.1-.4 0-.9.3-1.2.3-.3.8-.4 1.2-.2l6.2 2.5c.3.1.5.4.6.6.1.3.1.6 0 .9l-1.4 2.9 3 15.3c.1.4-.1.9-.5 1.2l-4.6 3.2c-.2.1-.4.2-.7.2zm-3.4-8.4l3.7 5.6 3.1-2.1-2.9-15c0-.2 0-.5.1-.7l1-2.1-2.7-1.1.7 2.1c.1.2.1.4 0 .6l-3 12.7z"></path><path class="st1" d="M44.1 25.4l-2.2-.9c.3-.7.5-1.5.7-2.3 1-4.2.4-8.7-1.6-12.8-2.1-4.3-5.5-7.6-9.6-9.3-.1 0-.1 0-.2-.1L28 1.3c.8.2 1.7.5 2.5.8 3.6 1.5 6.6 4.5 8.4 8.2 1.8 3.6 2.3 7.6 1.4 11.3-.2.7-.4 1.3-.6 1.9-.1.4-.3.7-.4 1-.2.3-.3.7-.5 1l4.4 1.8c1.3.5 2.1 1.8 2.1 3.1v22.7c0 .5-.3.9-.7 1-.4.1-.7.1-1.1-.1-.3-.2-.5-.6-.5-.9v-21c0-1.4-.8-2.6-2.1-3.1l-5.8-2.4c3.6-3.4 4.4-9.6 1.7-15.2C33.6 4.8 26.5 1.6 21 4.3c-2.7 1.3-4.6 3.8-5.3 7.1-.5 2.3-.4 4.8.3 7.3L12.2 17c-.7-.3-1.5-.2-2.1.2-.6.4-1 1.1-1 1.9v23.7l2.3.9V19.1l5.9 2.5.1.1c.2.3.3.6.5.9 0 .1.1.1.1.2.4.7.9 1.3 1.5 1.9l.1.1c.2.3.5.5.7.7l.1.1 1.8 1.5.9.6s.1 0 .1.1c.3.2.6.3.9.5h.1c.7.3 1.4.5 2.1.7h.2c.3.1.6.1.9.1h.2c.3 0 .6.1 1 .1h1.1c.3 0 .5-.1.8-.1h.3c.3-.1.6-.1.8-.2.1 0 .1 0 .2-.1.3-.1.7-.3 1-.4.1 0 .1-.1.2-.1l7.1 2.9c.4.2.7.6.7 1.1v21c0 .7.2 1.5.6 2.1.7.9 1.7 1.4 2.8 1.4.8 0 1.6-.3 2.2-.8.8-.7 1.2-1.7 1.2-2.8V30.6c0-2.3-1.4-4.3-3.5-5.2zm-11.4.3l-.3.2c-.2.1-.4.2-.5.3-.3.1-.5.2-.8.3-.1 0-.1 0-.2.1-.2.1-.4.1-.6.2-4 .8-8.6-1.8-11-6.5 0 0 0-.1-.1-.1v-.1c-1.3-2.7-1.7-5.6-1.1-8.3.6-2.6 2.1-4.5 4.1-5.5 1-.5 2.1-.7 3.2-.7 3.7 0 7.5 2.6 9.6 6.8 2.4 5.1 1.4 10.8-2.3 13.3z"></path></svg>`;
        this.lSpecialist = `<svg xmlns="http://www.w3.org/2000/svg" id="Laag_1" viewBox="0 0 56.7 56.7" style="width: 30px;"><style>.st0{fill-rule:evenodd;clip-rule:evenodd}.st0,.st1{fill:white}</style><path class="st0" d="M53.2 13.8L20.2 0l-2.9 1.2 35.1 14.6c1.3.5 2.1 1.8 2.1 3.1v32c0 .5-.3.9-.7 1-.4.1-.7.1-1.1-.1-.3-.2-.5-.6-.5-.9V20c0-.9-.6-1.7-1.4-2.1l-35.9-15c-.4-.2-.8-.2-1.3-.1l-.9.4c-.7.4-1 1-1 1.8v17.7H14V5l35.9 15v31c0 .7.2 1.5.6 2.1.7.9 1.7 1.4 2.8 1.4.8 0 1.6-.3 2.2-.8.8-.7 1.2-1.7 1.2-2.7V19c0-2.3-1.4-4.4-3.5-5.2z"></path><path class="st0" d="M39 46.1l-.6 2.2 9.2 3.9v-2.5z"></path><path class="st1" d="M39.7 27.2c-1.9 0-3.4 1.5-3.4 3.4v.1l-7.6 3-4.3-5.7c.1-.2.2-.3.3-.5 0-.1 0-.1.1-.2s.1-.3.1-.4v-.2c0-.2.1-.4.1-.6 0-1.9-1.5-3.4-3.4-3.4s-3.4 1.5-3.4 3.4c0 .2 0 .4.1.6v.2c0 .1.1.3.1.4 0 .1 0 .1.1.2.1.2.2.3.3.5l-4.4 5.8-7.6-3v-.1c0-1.9-1.5-3.4-3.4-3.4S0 28.7 0 30.6c0 .2 0 .4.1.7 0 .1 0 .1.1.2 0 .1.1.3.1.4 0 .1.1.2.1.2.1.1.1.2.2.3 0 .1.1.1.2.2s.1.2.2.3c0 .1.1.2.2.2.1.1.2.2.3.2.1.1.2.1.2.1.1.1.2.1.3.2.1 0 .2.1.3.1.1 0 .2.1.3.1.1 0 .2 0 .3.1h.2l5 18.2h22.2l.6-2.3H9.8L5.3 33.5c.3-.2.5-.4.7-.6l9.2 3.7 5.4-7.2c.3.1.7.2 1 .2.4 0 .7-.1 1-.2l5.4 7.2 9.2-3.7c.2.2.4.4.7.6l-5.8 21H8.7l.6 2.3h24.4L40 34h.2c.1 0 .2 0 .3-.1.1 0 .2-.1.3-.1.1 0 .2-.1.3-.1.1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.1-.1.2-.1.3-.2l.2-.2c.1-.1.2-.2.2-.3l.2-.2c.1-.1.1-.2.2-.3 0-.1.1-.1.1-.2.1-.1.1-.3.1-.4 0-.1 0-.1.1-.2 0-.2.1-.4.1-.7 0-2-1.5-3.5-3.4-3.5zM4.4 31c-.2.4-.6.7-1 .7-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c0 .2 0 .3-.1.4zm18.2-4.4c-.1 0-.1 0 0 0-.1.2-.2.3-.3.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-.3-.3-.1-.1c-.1-.1-.1-.3-.1-.5 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1.1.1 0 .3 0 .5zm17.1 5.1c-.5 0-.9-.3-1-.7-.1-.1-.1-.3-.1-.4 0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c0 .6-.5 1.1-1.1 1.1z"></path></svg>`;
        this.klantBeoordeling = `<svg xmlns="http://www.w3.org/2000/svg" id="Laag_1" viewBox="0 0 56.7 56.7" style="width: 30px;"><style>.st0{fill-rule:evenodd;clip-rule:evenodd}.st0,.st1{fill:white}</style><path class="st0" d="M50.7 13.8L17.5 0l-3 1.2 35.2 14.7c1.3.5 2.1 1.8 2.1 3.2v34.2c0 .5-.3.9-.7 1.1-.4.1-.7.1-1.1-.1-.3-.2-.5-.6-.5-.9V20c0-.9-.6-1.7-1.4-2.1L12 2.9c-.4-.2-.8-.2-1.3-.1l-.8.4C9.3 3.6 9 4.3 9 5v10.9h2.3V5l36.1 15v33.2c0 .7.2 1.5.6 2.1.7.9 1.7 1.4 2.8 1.4.8 0 1.6-.3 2.2-.8.8-.7 1.2-1.7 1.2-2.8v-34c0-2.3-1.4-4.4-3.5-5.3z"></path><path class="st1" d="M9.6 44.7c-3.9 0-7.1-2.3-7.1-6.6 0-2.7 1.6-4.2 2.8-5-1.1-.8-2.5-2.2-2.5-4.6 0-3.9 3.1-6.3 6.8-6.3s6.8 2.4 6.8 6.3c0 2.4-1.4 3.8-2.5 4.6 1.2.8 2.8 2.3 2.8 5 0 4.3-3.2 6.6-7.1 6.6zm0-9.7c-1.7 0-3 1.4-3 3.1 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.8-1.3-3.1-3-3.1zm0-9.1c-1.6 0-2.8 1.2-2.8 2.8 0 1.6 1.2 2.8 2.8 2.8s2.7-1.2 2.7-2.8c0-1.6-1.1-2.8-2.7-2.8zM20.1 49.7v-9.5h4.4v6.1l-4.4 3.4zM35.1 44.5h-4.4L37.9 26h-5.8v3.5h-3.8v-7.1h14.1V26l-7.3 18.5z"></path></svg>`;
    }
    @TryAndCatch
    changeIcon() {
        let _this = this;
        let target:NodeList = document.querySelectorAll('.c-usp-proof__icon');
        let check = setInterval(function(){

            if(target.length > 0) {
                clearInterval(check);

                for (let i = 0; i < target.length; i++) {
                    target[i].removeChild((<any>target[i]).querySelector('img'));
                    if(i == 0) {
                        (<any>target[i]).insertAdjacentHTML('afterbegin', _this.bezoekers);
                    }
                    if(i == 1) {
                        (<any>target[i]).insertAdjacentHTML('afterbegin', _this.lSpecialist);
                    }
                    if(i == 2) {
                        (<any>target[i]).insertAdjacentHTML('afterbegin', _this.klantBeoordeling);
                    }
                }
            }
        }, 300);
    }
    @TryAndCatch
    customCode() {
        this.targets.forEach( target => {
            target && (<HTMLElement>target).insertAdjacentHTML('beforebegin', this.uspString);
        });

        this.changeIcon();
    }
}
/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation:any = new V2();
    variation.customCode();

/*
==============================
END CUSTOM CODE
==============================
*/
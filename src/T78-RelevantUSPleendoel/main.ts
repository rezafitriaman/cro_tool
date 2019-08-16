import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
//import {CustomEventEmitter} from "./customEventEmitter"
//import {FindThatClassFirst} from "./findThatClassFirst"
//import {Debounce} from "./debounce"

//import {Cookie} from "./cookie"
//import {Language} from "./languages"
//import {Country} from "./country"
//import {Style} from "./style"
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
    isDevelop: true,
    testId:  'T78-RelevantUSPleendoel',
    urlReplaced: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.51.0.22184'
})
@CustomLog
class V1 {
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
            <section class="space-bottom" style="padding-bottom: 0px;">
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
    @TryAndCatch
    customCode() {
        this.targets.forEach( target => {
            target && (<HTMLElement>target).insertAdjacentHTML('beforebegin', this.uspString);
        });
    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation:any = new V1();
    variation.customCode();

/*
==============================
END CUSTOM CODE
==============================
*/
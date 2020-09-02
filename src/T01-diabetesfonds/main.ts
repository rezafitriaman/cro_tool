
import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"

import {Cookie} from "./cookie"
import {Language} from "./languages"
import {Country} from "./country"
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
@CustomLog
@Develop({
    isDevelop: false,
    testId:  'T01-diabetesfonds',
    urlReplaced: 'https://www.diabetesfonds.nljs/site.min.js?b36b9799b3c3e06865a61dd0743677ff95de6e0b'
})
class V1 {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR
    private hooksTarget : Element;
    private readonly newBlock : string;
    //PUT OTHERS HERE

    constructor() {
        // code...
        this.hooksTarget = document.querySelector('.contentcolumns');
        this.newBlock = `
        <div class="row">
            <div class="maincol col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin: 0px 0 5px;">
                <div class="block donationformblock" style="margin: 0px 0 15px;">
                    <div class="box donationform" style="padding: 30px 20px;">
                        <div class="title-wrapper">
                            <h2 style="color: #1967bb;font-size: 36px;font-family: &quot;diabetes_fonds_regularregular&quot;,Sans-Serif;font-weight: normal;line-height: 100%;vertical-alignbottofont-weight: 700;">Steun jij ons in de onderzoek naar genezing?</h2>
                        </div>
                        <div class="body-wrapper">
                            <p>Diabetes genezen: het is een droom die we voor 1,2 miljoen mensen werkelijkheid willen maken. Tot die tijd werken we hard aan een beter leven voor mensen met diabetes. Vrij van zorgen en angst voor complicaties. Daarom vragen we jouw steun voor betere behandeling en genezing van diabetes.</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        `;
    }
    @TryAndCatch
    customCode() {
        this.log(this.hooksTarget.querySelector('.row'));
        this.hooksTarget.querySelector('.row').insertAdjacentHTML('beforebegin', this.newBlock);
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

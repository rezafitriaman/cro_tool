
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

interface Header {
    home: {
        link: string;
        text: string;
        img: string;
    };
    verbouwing: {
        link: string;
        text: string;
        img: string;
    };
    auto: {
        link: string;
        text: string;
        img: string;
    };
    oversluiten: {
        link: string;
        text: string;
        img: string;
        greenButton: string;
    };
}

@Develop({
    isDevelop: false,
    testId:  'T81-reverse-test',
    urlReplaced: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.62.0.16987'
})
@Style(` 
    .custom-reprise > img { 
        opacity: 1!important;
        position: relative!important;
    }
`)
@CustomLog
class V1 {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NOBELIST - SELECTOR
    blueOriginHero: Element;
    orangeOriginHero: Element;
    hooksHero: Element;
    //PUT OTHERS HERE
    header: Header;
    heroString: string;
    pathname: string;
    constructor() {
        // code...
        // POLYFILL
        if (!('remove' in Element.prototype)) {
            // @ts-ignore
            Element.prototype.remove = function() {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        this.pathname = window.location.pathname;
        this.blueOriginHero = document.querySelector('.hero__color--blue');
        this.orangeOriginHero = document.querySelector('.hero__color--orange');
        this.hooksHero = document.querySelector('.usp.push');
        this.header = {
            home: {
                link: '/onze-leningen/offerte-aanvragen/',
                text: 'Geld lenen tegen een scherp tarief vanaf',
                img: '<img src="/-/media/images/fs-freo/freo/headers/abtest/lp_homepage.jpg" data-src="< 370:/-/media/images/fs-freo/freo/headers/abtest/lp_homepage.jpg, > 371:/-/media/images/fs-freo/freo/headers/abtest/lp_homepage.jpg, > 749:/-/media/images/fs-freo/freo/headers/abtest/lp_homepage.jpg, > 2560:/-/media/images/fs-freo/freo/headers/abtest/lp_homepage.jpg" data-src2x="< 370:/-/media/images/fs-freo/freo/headers/abtest/lp_homepage.jpg, > 371:/-/media/images/fs-freo/freo/headers/abtest/lp_homepage.jpg, > 749:/-/media/images/fs-freo/freo/headers/abtest/lp_homepage.jpg, > 2560:/-/media/images/fs-freo/freo/headers/abtest/lp_homepage.jpg" alt="">'
            },
            verbouwing: {
                link: '/waarvoor-kan-ik-lenen/verbouwing/#anker',
                text: 'Geld lenen voor een verbouwing vanaf',
                img: '<img src="l/-/media/images/fs-freo/freo/headers/abtest/lp_verbouwen.jpg" data-src="< 370:l/-/media/images/fs-freo/freo/headers/abtest/lp_verbouwen.jpg, > 371:l/-/media/images/fs-freo/freo/headers/abtest/lp_verbouwen.jpg, > 749:l/-/media/images/fs-freo/freo/headers/abtest/lp_verbouwen.jpg, > 2560:l/-/media/images/fs-freo/freo/headers/abtest/lp_verbouwen.jpg" data-src2x="< 370:l/-/media/images/fs-freo/freo/headers/abtest/lp_verbouwen.jpg, > 371:l/-/media/images/fs-freo/freo/headers/abtest/lp_verbouwen.jpg, > 749:l/-/media/images/fs-freo/freo/headers/abtest/lp_verbouwen.jpg, > 2560:l/-/media/images/fs-freo/freo/headers/abtest/lp_verbouwen.jpg" alt="">',
            },
            auto: {
                link: '/waarvoor-kan-ik-lenen/auto/#anker',
                text: 'Geld lenen voor een auto vanaf',
                img: '<img src="/-/media/images/fs-freo/freo/headers/abtest/lp_auto.jpg" data-src="< 370:/-/media/images/fs-freo/freo/headers/abtest/lp_auto.jpg, > 371:/-/media/images/fs-freo/freo/headers/abtest/lp_auto.jpg, > 749:/-/media/images/fs-freo/freo/headers/abtest/lp_auto.jpg, > 2560:/-/media/images/fs-freo/freo/headers/abtest/lp_auto.jpg" data-src2x="< 370:/-/media/images/fs-freo/freo/headers/abtest/lp_auto.jpg, > 371:/-/media/images/fs-freo/freo/headers/abtest/lp_auto.jpg, > 749:/-/media/images/fs-freo/freo/headers/abtest/lp_auto.jpg > 2560:/-/media/images/fs-freo/freo/headers/abtest/lp_auto.jpg" alt="">'
            },
            oversluiten: {
                link: '/waarvoor-kan-ik-lenen/oversluiten/#loanNumber0',
                text: 'Voordelig oversluiten vanaf',
                img: '<img src="/-/media/images/fs-freo/freo/headers/abtest/lp_oversluiten.jpg" data-src="< 370:/-/media/images/fs-freo/freo/headers/abtest/lp_oversluiten.jpg, > 371:/-/media/images/fs-freo/freo/headers/abtest/lp_oversluiten.jpg, > 749:/-/media/images/fs-freo/freo/headers/abtest/lp_oversluiten.jpg, > 2560:/-/media/images/fs-freo/freo/headers/abtest/lp_oversluiten.jpg" data-src2x="< 370:/-/media/images/fs-freo/freo/headers/abtest/lp_oversluiten.jpg, > 371:/-/media/images/fs-freo/freo/headers/abtest/lp_oversluiten.jpg, > 749:/-/media/images/fs-freo/freo/headers/abtest/lp_oversluiten.jpg, > 2560:/-/media/images/fs-freo/freo/headers/abtest/lp_oversluiten.jpg" alt="">',
                greenButton: 'btn--green'
            }
    };
        this.heroString = `<!--suppress ALL -->
                            <div class="actie-banner-snippet push reprise-actie-banner-snippet">
                                <div class="actie-banner__wrapper">
                                    <div class="visual visual__color--blue custom-reprise">
                                         <!-- custom reprice image-->   
                                    </div>
                                    <!-- header-->
                                    <div class="actie-banner__content">
                                        <div class="actie-banner__body">
                                            <h2 class="actie-banner__title"><span>...</span><strong>3,9<sup>%</sup></strong></h2> 
                                            <!-- Visible when rendering parameter Show Stamp is checked -->
                                            <a href="#anker" title="anker" class="reprise-custom-button btn--orange actie-banner__button btn--l smooth-scroll">
                                                Bereken uw lening<i class="icon-chevron-right"></i>
                                            </a>
                                        </div>
                                        <!-- Visible when rendering parameter Show Stamp is checked -->
                                    </div>
                                <!-- extra content block -->
                                </div>
                            </div>`;
    }
    @TryAndCatch
    deleteOriginHero():void {
        if(this.blueOriginHero !== null) {
            this.blueOriginHero.remove();
        }else {
            this.orangeOriginHero.remove();
        }
        this.log('origin hero removed !');
    }
    @TryAndCatch
    addNewHero():void {
        this.hooksHero.insertAdjacentHTML('afterend', this.heroString);
        this.log('new hero has been added!');
    }
    @TryAndCatch
    appendTitle(target: string): void {
        let title = document.querySelector('.actie-banner__title');
        title.innerHTML = `<span>${target}</span><strong>3,9<sup>%</sup></strong>`;
        this.log('title has been appended!');
    }
    @TryAndCatch
    appendImage(target: string): void {
        let imageParent = document.querySelector('.custom-reprise');
        imageParent.innerHTML = target;
        this.log('image has been appended!');
    }
    @TryAndCatch
    mobileFix(img: string, mobileImg: string): void {
        let _this = this;
        let imageParent = document.querySelector('.custom-reprise');
        // media query event handler
        if (matchMedia) {
            const mq = window.matchMedia("(max-width: 748px)");
            mq.addListener(WidthChange);
            WidthChange(mq);
        }

        // media query change
        function WidthChange(mq: any) {
            if (mq.matches) {
                // less then 748px
                imageParent.innerHTML = mobileImg;
                _this.log('append custom svg-image');
            } else {
                // bigger then 748px
                if( document.querySelector('.custom-reprise > svg') !== null) {
                    document.querySelector('.custom-reprise > svg').remove();
                    _this.log('remove custom svg-image');
                }
                imageParent.innerHTML = img;
                _this.log('no custom svg-image');
            }
        }
    }
    @TryAndCatch
    buttonClick(link:string):void {
        let button: Element = document.querySelector('.actie-banner__body > a');
        button.setAttribute("href", link);

        button.addEventListener('click', function () {
            let interCustom = setInterval(function(){

                if(document.querySelectorAll('.reprise-actie-banner-snippet').length > 1) {

                    document.querySelectorAll('.reprise-actie-banner-snippet')[1].remove();

                    clearInterval(interCustom);
                }else {

                    setTimeout(function () {

                        clearInterval(interCustom);
                    },10000)
                }
            }, 1000);
        });
        this.log(link);
        this.log('link has been appended!');
    }
    @TryAndCatch
    greenButton(className:string):void {
        let button: Element = document.querySelector('.reprise-custom-button');

        button.classList.remove("btn--orange");
        button.classList.add(className);
        this.log('button color changed!');
    }
    @TryAndCatch
    customCode() {
        let _this = this;
        setTimeout(function(){
            let target = _this.pathname.split('/')[2];
            switch (target) {
                case undefined:
                    _this.deleteOriginHero();
                    _this.addNewHero();
                    _this.appendTitle(_this.header.home.text);
                    _this.appendImage(_this.header.home.img);
                    //_this.mobileFix(_this.header.home.img, _this.header.home.mobileSVG);
                    _this.buttonClick(_this.header.home.link);
                    _this.log('this is Home');
                    break;
                case 'verbouwing':
                    _this.deleteOriginHero();
                    _this.addNewHero();
                    _this.appendTitle(_this.header.verbouwing.text);
                    _this.appendImage(_this.header.verbouwing.img);
                    //_this.mobileFix(_this.header.verbouwing.img, _this.header.verbouwing.mobileSVG);
                    _this.buttonClick(_this.header.verbouwing.link);
                    _this.log('this is verbouwing');
                    break;
                case 'auto':
                    _this.deleteOriginHero();
                    _this.addNewHero();
                    _this.appendTitle(_this.header.auto.text);
                    _this.appendImage(_this.header.auto.img);
                    //_this.mobileFix(_this.header.auto.img, _this.header.auto.mobileSVG);
                    _this.buttonClick(_this.header.auto.link);
                    _this.buttonClick(_this.header.auto.link);
                    _this.log('this is auto');
                    break;
                case 'oversluiten':
                    _this.deleteOriginHero();
                    _this.addNewHero();
                    _this.appendTitle(_this.header.oversluiten.text);
                    _this.appendImage(_this.header.oversluiten.img);
                    //_this.mobileFix(_this.header.oversluiten.img,_this.header.oversluiten.mobileSVG);
                    _this.buttonClick(_this.header.oversluiten.link);
                    _this.greenButton(_this.header.oversluiten.greenButton);
                    _this.log('this is oversluiten sd');
                    break;
                default:
                    _this.log('no target url');
            }
        }, 1500);
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

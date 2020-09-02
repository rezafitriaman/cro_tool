
import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
/*import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"*/

/*import {Cookie} from "./cookie"
import {Language} from "./languages"
import {Country} from "./country"*/
import {Style} from "./style"
/*import {MediaQuery} from "./mediaQuery"*/
import {CustomLog} from "./log"
/*import {NodeListExist} from "./nodeListExist"*/

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/
interface objCopy {
    telefoon?: string;
    email?: string;
}

@Develop({
    isDevelop: true,
    testId:  'T72_Toelichting_FreoV2',
    urlReplaced: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.51.0.22184'
})
@Style(`
    [for~=field-PhoneNumber], [for~=field-EmailAddress] {
        display: inline-block;
    }
    [data-target~=t4u-telefoon], [data-target~=t4u-email] {
        position: relative;
        left: 15px;    
    }
    [name~=fieldset-address] .form-row:nth-child(7), [name~=fieldset-address] .form-row:nth-child(8)  {
       position: relative;
    }
    #t4u-email-tooltip.active, #t4u-telefoon-tooltip.active {
        -webkit-transform: translateY(-10px) scale(1)!important;
        transform: translateY(-10px) scale(1)!important;
    }
    .t4u-tooltip {
        -webkit-transform: translateY(-10px) scale(0)!important;
        transform: translateY(-10px) scale(0)!important; 
        transition: .2s;
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

    //PUT HERE UR NODELIST - SELECTOR
    _labels : NodeList;
    //PUT OTHERS HERE
    _copy : objCopy;
    _iTelefoon: string;
    _iMail: string;
    _coypContainerTell: string;
    _coypContainerEmail: string;
    constructor() {
        // code...
        this._copy = {
            telefoon : "Uw nummer gebruiken we om de aanvraag met u door te nemen",                        
            email : "Uw mailadres gebruiken we om de status van uw aanvraag te delen"                        
        }

        this._labels = document.querySelectorAll('label');

        this._iTelefoon = `<a class="js-popover tippy-active t4u-tippy active" data-target="t4u-telefoon" id="telefoon-popover"
                            data-condition="" data-tippy="" aria-describedby="tippy-t4u-telefoon">
                            <span class="icon-info"></span>
                        </a>`;

        this._iMail = `<a class="js-popover tippy-active t4u-tippy active" data-target="t4u-email" id="mail-popover" 
                            data-condition="" data-tippy="" aria-describedby="tippy-t4u-email">
                            <span class="icon-info"></span>
                        </a>`;

        this._coypContainerTell = `<div class="tippy-popper-t4u tippy-popper" role="tooltip" id="t4u-telefoon" data-html="" tabindex="-1" x-placement="top" style="z-index: 9999; transition-duration: 0ms; visibility: visible; position: absolute; will-change: transform;top: 0px; left: 0px; transform: translate3d(12px, -41px, 0px);">
                                <div class="t4u-tooltip tippy-tooltip light-theme" id="t4u-telefoon-tooltip" data-size="regular" data-animation="scale" data-state="visible" data-interactive="" data-template-id="#t4u-telefoon">
                                    <div class="tippy-arrow" style="left: 130px;"></div>
                                    <div class="tippy-content">
                                        <div id="t4u-telefoon">
                                            <a class="popover-close" href="#close"></a>
                                            <div class="popover-content">
                                                ${this._copy.telefoon}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            `;

        this._coypContainerEmail = `<div class="tippy-popper-t4u tippy-popper" role="tooltip" id="t4u-email" data-html="" tabindex="-1" x-placement="top" style="z-index: 9999;transition-duration: 0ms;visibility: visible;position: absolute; will-change: transform;top: 0px;left: 0px; transform: translate3d(-21px, -44px, 0px);">
                                    <div class="t4u-tooltip tippy-tooltip light-theme" id="t4u-email-tooltip" data-size="regular" data-animation="scale" data-state="visible" data-interactive="" data-template-id="#t4u-email">
                                    <div class="tippy-arrow" style="left: 130px;"></div>
                                    <div class="tippy-content">
                                        <div id="t4u-email">
                                            <a class="popover-close" href="#close"></a>
                                            <div class="popover-content">
                                                ${this._copy.email}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            `;    
    }
    @TryAndCatch
    appendHelper() {
        let _this = this;
        let _tellNumber = _this._labels[81];
        let _email = _this._labels[82];
        
        //append tippy pop-over string
        (<Element>_tellNumber).insertAdjacentHTML('afterend', _this._coypContainerTell);
        (<Element>_email).insertAdjacentHTML('afterend', _this._coypContainerEmail);

        //append icons string
        (<Element>_tellNumber).insertAdjacentHTML('afterend', _this._iTelefoon);
        (<Element>_email).insertAdjacentHTML('afterend', _this._iMail); 

    }
    @TryAndCatch
    toggle(id:string, target:HTMLElement) {

        // on click icons email and telefoon 
        document.querySelector(id).addEventListener('click', function(ev) {
            //if there are origin pop-over show up then delete it
            let originPopOver = document.querySelectorAll('.tippy-popper');
            for (var j = 0; j < originPopOver.length; j++) {
                
                if(originPopOver[j].classList.length == 1) {

                    if (typeof originPopOver[j].remove === 'function') {
                        originPopOver[j].remove();
                    } else {
                        //if ie
                        originPopOver[j].parentNode.removeChild(originPopOver[j]);
                    }
                }
            }

            //save pop-over
            let toolTips = document.querySelectorAll('.t4u-tooltip');
            //loop through the pop-over
            for (var i = 0; i < toolTips.length; i++) {
                //if the pop-over contain active remove it and add active class on the icon
                if(toolTips[i].classList.contains('active')) {

                    let target = toolTips[i]
                    // wait for 1sec and then remove the class active
                    setTimeout(function(){ target.classList.remove("active");}, 100);
                     
                     //add active class on the icon
                    (<any>ev.target).parentNode.classList.add("active");
                }
            }

            //save the tippy icons
            let tippy = document.querySelectorAll('.t4u-tippy');
            //loop through the tippy icons
            for (var i = 0; i < tippy.length; i++) {
                //if the tippy icons does not containt active class then add it
                if(!tippy[i].classList.contains('active')) {
                     tippy[i].classList.add("active");
                }
            }

            //if the icons contains active then stopPropagation and remove active class
            //else add active
            if((<any>ev.target).parentNode.classList.contains('active')) {
                ev.stopPropagation();
                (<any>ev.target).parentNode.classList.remove("active");
            }else {
                (<any>ev.target).parentNode.classList.add("active");
            }

            //toggle class active

            console.log(target.className.split(" ").indexOf("active"));
            console.log(target.classList);
            if (target.classList) { 
                console.log('true')
                  target.classList.toggle("active");
            } else {
              // For IE9
              console.log('false')
              let classes = target.className.split(" ");
              let i = classes.indexOf("active");
              if (i >= 0) 
                classes.splice(i, 1);
              else 
                target.className = classes.join(" "); 
            }
        });

    }
    @TryAndCatch
    closebuttonPopover(target:string) {
        document.querySelector(target).querySelector('.popover-close').addEventListener('click', function(e) {
            
            if((<any>e.target).closest(".t4u-tooltip").classList.contains('active')) {
                (<any>e.target).closest(".t4u-tooltip").classList.remove("active");
            }
        });
    }
    @TryAndCatch
    removePopOverOnBody() {
        let body = document.getElementById('www-freo-nl');
        let telefoon = document.getElementById('t4u-telefoon-tooltip');
        let email = document.getElementById('t4u-email-tooltip');

        body.addEventListener("click", function () {

            let toolTips = document.querySelectorAll(".t4u-tooltip");

            for (var i = 0; i < toolTips.length; i++) {

                if(toolTips[i].classList.contains('active')) {
                    toolTips[i].classList.remove("active")
                }
            }

            let tippy = document.querySelectorAll('.t4u-tippy');

            for (var i = 0; i < tippy.length; i++) {

                if(!tippy[i].classList.contains('active')) {
                    tippy[i].classList.add("active")
                }
            }

        }, false);

        telefoon.addEventListener("click", function (ev) {
            ev.stopPropagation();
        }, false);

        email.addEventListener("click", function (ev) {
            ev.stopPropagation();
        }, false);
    }
    @TryAndCatch
    poplyfilClosestIE() {
        if (!Element.prototype.matches) {
            Element.prototype.matches = (<any>Element).prototype.msMatchesSelector || (<any>Element).prototype.webkitMatchesSelector;
        }

        if (!Element.prototype.closest) {
            Element.prototype.closest = function(s:any) {
            var el = this;

            do {
              if (el.matches(s)) return el;
              el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
          };
        }
    }
    @TryAndCatch
    cunstomCode() {
        let _this = this;

        _this.poplyfilClosestIE();

        setTimeout(function(){ 
            _this.appendHelper();

            _this.toggle('#telefoon-popover', document.getElementById("t4u-telefoon-tooltip"));
            _this.toggle('#mail-popover', document.getElementById("t4u-email-tooltip"));

            _this.closebuttonPopover('#t4u-telefoon');
            _this.closebuttonPopover('#t4u-email');

            _this.removePopOverOnBody();
                
        }, 2000);

    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation:any = new V1();
    variation.cunstomCode();

/*
==============================
END CUSTOM CODE
==============================
*/
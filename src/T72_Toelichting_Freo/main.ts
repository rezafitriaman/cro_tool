
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

interface objCopy  {
    telefoon?: string
    email?: string
}

@Develop({
    isDevelop: false,
    testId:  'T72_Toelichting_Freo',
    urlReplaced: 'https://www.freo.nlScripts/FreoWebsite/polyfills.js'
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
    _labels : NodeList;
    //PUT OTHERS HERE
    _copy : objCopy
    constructor() {
        // code...
        this._copy = {
            telefoon : "Uw nummer gebruiken we om de aanvraag met u door te nemen",                        
            email : "Uw mailadres gebruiken we om de status van uw aanvraag te delen"                        
        }
        this._labels = document.querySelectorAll('label');
    }
    @TryAndCatch
    createSpan(target:ParentNode, copy:string) {
        let newP = document.createElement('p');
        let newContent = document.createTextNode(copy);
        newP.appendChild(newContent);
        newP.classList.add("help-text");
        (<Element>target).insertAdjacentElement('beforeend',newP);

    }
    @TryAndCatch
    cunstomCode() {
        this._labels.forEach((label:HTMLLabelElement) => {
            if(label.htmlFor == "field-EmailAddress") { 
                let target:ParentNode = label.parentNode;
                target && this.createSpan(target, this._copy.email);
            } else if (label.htmlFor == "field-PhoneNumber") {
                let target = label.parentNode;
                target && this.createSpan(target, this._copy.telefoon);
            }
        });
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
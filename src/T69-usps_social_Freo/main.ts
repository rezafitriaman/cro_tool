
import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
/*import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"*/

import {Cookie} from "./cookie" //this.cookieCheck('Freo_cookieLevel');
import {Language} from "./languages"
import {Country} from "./country"
import {Style} from "./style"
import {MediaQuery} from "./mediaQuery"
import {CustomLog} from "./log"
/*import {NodeListExist} from "./nodeListExist"*/

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Develop({
    isDevelop: true,
    testId:  'T69-usps_social_Freo',
    urlReplaced: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js'
})
@Style(`
    .st0{fill:#F48726;}
    .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#F48726;}
    svg {
        width: 30px;
    }
    .t4u-m {
        margin-left: 10px;
        margin-right: 5px;
    }
    .proof-snippet li {
        display: flex;
        align-items: center;
    }
`)
@MediaQuery
@CustomLog
@Cookie
class base {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR
    containerHomePage: NodeList;
    containerVrijblijvende: NodeList;
    resultsPanel: NodeList;

    //PUT OTHERS HERE
    iconthumbSVG : string;
    rabogroepSVG : string;
    serviceSVG : string;
    pathname: string;
    regHome : RegExp;
    regVrijblijvende : RegExp;
    constructor() {
        // code...
        this.iconthumbSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26"><title>icon-thumb</title><desc>Created with Sketch.</desc><g id="icon-thumb" fill="none"><path d="M23.436 16.9c1.007-1.483.496-3.51-.215-4.156.286-.82.54-2.387-.184-3.516 0 0-5.44-.004-5.51 0C18.403 5.666 18.79 0 14.948 0c-2.127 0-2.648 1.808-3.236 3.586C9.282 10.94 3.49 11.014 0 11.382v11.344c5.338 0 8.02.416 12.61 2.257 4.82 1.934 10.795 1.353 10.136-3.867 1.283-1.196 1.245-3.093.69-4.216z" fill="#F48727"/><path d="M21.63 10.957c.155 1.1-.4 2.33-1.654 2.33h-2.278c-.87 0-1.174-.672-1.174-1.215 0-.463.427-1.115 1.215-1.115h3.89zM2.043 20.882v-7.744c6.74-.544 10.08-4.405 11.47-8.488.43-1.266.56-3.007 1.707-2.68 1.244.354 1.207 3.756.254 7.03-.406 1.4-1.485 2.573-.568 4.252-1.63.53-2.162 3.16-.792 4.254-1.088 1.003-1.055 3.008.267 3.967-.495.554-.702 1.186-.63 1.867-2.217-.728-6.088-2.458-11.707-2.458zM18.645 24.133H16.94c-.837 0-1.212-.518-1.212-1.048 0-.62.425-1.175 1.212-1.175h3.8c-.07.85-.47 2.223-2.095 2.223zM19.91 20.555h-3.435c-.838 0-1.213-.683-1.213-1.174 0-.49.375-1.174 1.213-1.174h5.262c.148 1.172-.447 2.35-1.828 2.35zM20.358 16.87h-3.883c-.834 0-1.214-.7-1.214-1.174 0-.48.376-1.154 1.215-1.154h5.51c.155 1.083-.373 2.33-1.627 2.33z" id="thumb-6-icon-path" fill="#fff"/></g></svg>`;
        this.rabogroepSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Laag_1" x="0px" y="0px" viewBox="0 0 56.7 56.7" style="enable-background:new 0 0 56.7 56.7;" xml:space="preserve"><g><path class="st0" d="M24.6,56.7c-0.1,0-0.1,0-0.2,0c-0.3-0.1-0.6-0.2-0.7-0.5l-4.6-7c-0.2-0.3-0.2-0.6-0.2-0.9l3-12.8l-1.4-4.2   c-0.1-0.4,0-0.9,0.3-1.2c0.3-0.3,0.8-0.4,1.2-0.2l6.2,2.5c0.3,0.1,0.5,0.4,0.6,0.6c0.1,0.3,0.1,0.6,0,0.9l-1.4,2.9l3,15.3   c0.1,0.4-0.1,0.9-0.5,1.2l-4.6,3.2C25.1,56.6,24.9,56.7,24.6,56.7z M21.2,48.3l3.7,5.6l3.1-2.1l-2.9-15c0-0.2,0-0.5,0.1-0.7l1-2.1   l-2.7-1.1l0.7,2.1c0.1,0.2,0.1,0.4,0,0.6L21.2,48.3z"/><path class="st1" d="M44.1,25.4l-2.2-0.9c0.3-0.7,0.5-1.5,0.7-2.3c1-4.2,0.4-8.7-1.6-12.8c-2.1-4.3-5.5-7.6-9.6-9.3   c-0.1,0-0.1,0-0.2-0.1L28,1.3c0.8,0.2,1.7,0.5,2.5,0.8c3.6,1.5,6.6,4.5,8.4,8.2c1.8,3.6,2.3,7.6,1.4,11.3c-0.2,0.7-0.4,1.3-0.6,1.9   c-0.1,0.4-0.3,0.7-0.4,1c0,0,0,0,0,0c-0.2,0.3-0.3,0.7-0.5,1v0l4.4,1.8c1.3,0.5,2.1,1.8,2.1,3.1v22.2v0.5c0,0.5-0.3,0.9-0.7,1   c-0.4,0.1-0.7,0.1-1.1-0.1c-0.3-0.2-0.5-0.6-0.5-0.9V32.1c0-1.4-0.8-2.6-2.1-3.1l-5.8-2.4c3.6-3.4,4.4-9.6,1.7-15.2   c-3.2-6.6-10.3-9.8-15.8-7.1c-2.7,1.3-4.6,3.8-5.3,7.1c-0.5,2.3-0.4,4.8,0.3,7.3L12.2,17c-0.7-0.3-1.5-0.2-2.1,0.2   c-0.6,0.4-1,1.1-1,1.9v23.7l2.3,0.9V19.1l5.9,2.5c0,0,0.1,0.1,0.1,0.1c0.2,0.3,0.3,0.6,0.5,0.9c0,0.1,0.1,0.1,0.1,0.2   c0.4,0.7,0.9,1.3,1.5,1.9c0,0,0.1,0.1,0.1,0.1c0.2,0.3,0.5,0.5,0.7,0.7c0,0,0.1,0.1,0.1,0.1c0.6,0.5,1.2,1,1.8,1.5c0,0,0,0,0,0   c0.3,0.2,0.6,0.4,0.9,0.6c0,0,0.1,0,0.1,0.1c0.3,0.2,0.6,0.3,0.9,0.5c0,0,0,0,0.1,0c0.7,0.3,1.4,0.5,2.1,0.7c0.1,0,0.1,0,0.2,0   c0.3,0.1,0.6,0.1,0.9,0.1c0.1,0,0.1,0,0.2,0c0.3,0,0.6,0.1,1,0.1c0,0,0,0,0,0c0,0,0,0,0.1,0c0.3,0,0.5,0,0.8,0c0.1,0,0.2,0,0.2,0   c0.3,0,0.5-0.1,0.8-0.1c0.1,0,0.2,0,0.3,0c0.3-0.1,0.6-0.1,0.8-0.2c0.1,0,0.1,0,0.2-0.1c0.3-0.1,0.7-0.3,1-0.4c0,0,0,0,0,0   c0.1,0,0.1-0.1,0.2-0.1l7.1,2.9c0.4,0.2,0.7,0.6,0.7,1.1v21c0,0.7,0.2,1.5,0.6,2.1c0.7,0.9,1.7,1.4,2.8,1.4c0.8,0,1.6-0.3,2.2-0.8   c0.8-0.7,1.2-1.7,1.2-2.8v-1.3V30.6C47.6,28.3,46.2,26.3,44.1,25.4z M32.7,25.7l-0.3,0.2c-0.2,0.1-0.4,0.2-0.5,0.3   c-0.3,0.1-0.5,0.2-0.8,0.3c-0.1,0-0.1,0-0.2,0.1c-0.2,0.1-0.4,0.1-0.6,0.2c-4,0.8-8.6-1.8-11-6.5c0,0,0-0.1-0.1-0.1l0-0.1   c-1.3-2.7-1.7-5.6-1.1-8.3c0.6-2.6,2.1-4.5,4.1-5.5c1-0.5,2.1-0.7,3.2-0.7c3.7,0,7.5,2.6,9.6,6.8C37.4,17.5,36.4,23.2,32.7,25.7z"/></g></svg>`;
        this.serviceSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Laag_1" x="0px" y="0px" viewBox="0 0 56.7 56.7" style="enable-background:new 0 0 56.7 56.7;" xml:space="preserve"><g><g><g><path class="st0" d="M53.2,13.8L20.2,0l-2.9,1.2l35.1,14.6c1.3,0.5,2.1,1.8,2.1,3.1v32c0,0.5-0.3,0.9-0.7,1     c-0.4,0.1-0.7,0.1-1.1-0.1c-0.3-0.2-0.5-0.6-0.5-0.9V20c0-0.9-0.6-1.7-1.4-2.1l-35.9-15c-0.4-0.2-0.8-0.2-1.3-0.1l-0.9,0.4     C12,3.6,11.7,4.2,11.7,5v17.7h2.3l0-17.7l35.9,15v31c0,0.7,0.2,1.5,0.6,2.1c0.7,0.9,1.7,1.4,2.8,1.4c0.8,0,1.6-0.3,2.2-0.8     c0.8-0.7,1.2-1.7,1.2-2.7V19C56.7,16.7,55.3,14.6,53.2,13.8z"/><g><polygon class="st0" points="39,46.1 38.4,48.3 47.6,52.2 47.6,49.7"/></g><path class="st1" d="M39.7,27.2c-1.9,0-3.4,1.5-3.4,3.4c0,0,0,0.1,0,0.1l-7.6,3L24.4,28c0,0,0,0,0,0c0.1-0.2,0.2-0.3,0.3-0.5     c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.3,0.1-0.4c0-0.1,0-0.1,0-0.2c0-0.2,0.1-0.4,0.1-0.6c0-1.9-1.5-3.4-3.4-3.4s-3.4,1.5-3.4,3.4     c0,0.2,0,0.4,0.1,0.6c0,0.1,0,0.1,0,0.2c0,0.1,0.1,0.3,0.1,0.4c0,0.1,0,0.1,0.1,0.2c0.1,0.2,0.2,0.3,0.3,0.5l0,0l-4.4,5.8l-7.6-3     c0,0,0-0.1,0-0.1c0-1.9-1.5-3.4-3.4-3.4S0,28.7,0,30.6c0,0.2,0,0.4,0.1,0.7c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.3,0.1,0.4     c0,0.1,0.1,0.2,0.1,0.2c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.3C1,33,1.1,33.1,1.2,33.1     c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.1,0.2,0.1,0.2,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0.1,0.3,0.1     c0.1,0,0.2,0,0.3,0.1c0.1,0,0.1,0,0.2,0l5,18.2h1h1.4h19.8l0.6-2.3H9.8L5.3,33.5c0.3-0.2,0.5-0.4,0.7-0.6l9.2,3.7l5.4-7.2     c0.3,0.1,0.7,0.2,1,0.2c0.4,0,0.7-0.1,1-0.2l5.4,7.2l9.2-3.7c0.2,0.2,0.4,0.4,0.7,0.6l-5.8,21H8.7l0.6,2.3h24.4L40,34     c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.3-0.1c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.1,0.3-0.2     c0.1,0,0.2-0.1,0.2-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.1,0.2-0.2     c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.1,0.1-0.2c0.1-0.1,0.1-0.3,0.1-0.4c0-0.1,0-0.1,0.1-0.2c0-0.2,0.1-0.4,0.1-0.7     C43.1,28.7,41.6,27.2,39.7,27.2z M4.4,31L4.4,31c-0.2,0.4-0.6,0.7-1,0.7c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1     s1.1,0.5,1.1,1.1C4.5,30.8,4.5,30.9,4.4,31z M22.6,26.6C22.5,26.6,22.5,26.6,22.6,26.6c-0.1,0.2-0.2,0.3-0.3,0.4     c-0.2,0.2-0.4,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.3-0.1-0.5     c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C22.7,26.2,22.6,26.4,22.6,26.6z M39.7,31.7c-0.5,0-0.9-0.3-1-0.7l0,0c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1C40.8,31.2,40.3,31.7,39.7,31.7z"/></g></g></g></svg>`;
        this.containerHomePage = document.querySelectorAll('.proof-snippet');
        this.containerVrijblijvende = document.querySelectorAll('.check-list');
        this.resultsPanel = document.querySelectorAll('.offertestraat__results__panel__wrapper');
    }    
    @TryAndCatch
    deleteOriginLi(target:NodeList) {
        while (target[0].hasChildNodes()) {
            target[0].removeChild(target[0].lastChild);
        }
    }
    @TryAndCatch
    appendNewUsp(target:NodeList, texts:any) {
        for (var i = 0; i < texts.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = texts[i];

            target[0].appendChild(li);
        }

    }
    @TryAndCatch
    createUl() {
        this.log('mobile containerVrijblijvende');
        let ul = document.createElement('ul');
        ul.className = 't4u-custom-el check-list';
        this.resultsPanel[0].appendChild(ul);

    }
}

class V1 extends base {
    textsHomePageV1 : Array<string>;
    textsVrijblijvendeV1: Array<string>;

    constructor() {
        // code...
        super();
        this.textsHomePageV1 = [`${this.iconthumbSVG} <span class="orange t4u-m">8,7 </span> in klantbeoordelingen`, 
                                `${this.serviceSVG} <span class="orange t4u-m">11 </span> jaar actief als online leenspecialist`, 
                                `${this.rabogroepSVG} <span class="orange t4u-m">70.000+ </span> bezoekers per maand`];
        this.textsVrijblijvendeV1 = [`<span class="orange t4u-m">8,7 </span> in klantbeoordelingen`,
                                    `<span class="orange t4u-m">11 </span> jaar actief als online leenspecialist`,
                                    `<span class="orange t4u-m">70.000+ </span> bezoekers per maand`];
    }
    @TryAndCatch
    cunstomCode() {
        /*if(this.containerHomePage.length > 0) {
            this.deleteOriginLi(this.containerHomePage);
            this.appendNewUsp(this.containerHomePage, this.textsHomePageV1);
        }else if(this.containerVrijblijvende.length > 0) {
            if(this.mediaQuery('749') == 'mobile') {
                this.createUl();
                this.appendNewUsp(document.querySelectorAll('.t4u-custom-el'), this.textsVrijblijvendeV1);
            }else {
                this.deleteOriginLi(this.containerVrijblijvende);
                this.appendNewUsp(this.containerVrijblijvende, this.textsVrijblijvendeV1);
            }
        }*/
        
        //test
         // global variable
        var allUserData = [];

        // generic logStuff function that prints to console
        function logStuff (userData:any) {
            if ( typeof userData === "string")
            {
                console.log(userData);
            }
            else if ( typeof userData === "object")
            {
                for (var item in userData) {
                    console.log(item + ": " + userData[item]);
                }

            }

        }

        // A function that takes two parameters, the last one a callback function
        function getInput (options:any, callback:any) {
            allUserData.push (options);
            callback (options);

        }

        // When we call the getInput function, we pass logStuff as a parameter.
        // So logStuff will be the function that will called back (or executed) inside the getInput function
        getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
        //  name: Rich
        // speciality: JavaScript
    }
}

class V2 extends base {
    textsHomePageV1 : Array<string>;
    textsVrijblijvendeV1: Array<string>;

    constructor() {
        // code...
        super();
        this.textsHomePageV1 = [`${this.rabogroepSVG} <span class="orange t4u-m">70.000+ </span> bezoekers per maand`,
                                `${this.iconthumbSVG} <span class="orange t4u-m">8,7 </span> in klantbeoordelingen`, 
                                `${this.serviceSVG} <span class="orange t4u-m">11 </span> jaar actief als online leenspecialist`];
        this.textsVrijblijvendeV1 = [`<span class="orange t4u-m">70.000+ </span> bezoekers per maand`,
                                    `<span class="orange t4u-m">8,7 </span> in klantbeoordelingen`,
                                    `<span class="orange t4u-m">11 </span> jaar actief als online leenspecialist`];
    }
    @TryAndCatch
    cunstomCode() {
        if(this.containerHomePage.length > 0) {
            this.deleteOriginLi(this.containerHomePage);
            this.appendNewUsp(this.containerHomePage, this.textsHomePageV1);
        }else if(this.containerVrijblijvende.length > 0) {
            if(this.mediaQuery('749') == 'mobile') {
                this.createUl();
                this.appendNewUsp(document.querySelectorAll('.t4u-custom-el'), this.textsVrijblijvendeV1);
            }else {
                this.deleteOriginLi(this.containerVrijblijvende);
                this.appendNewUsp(this.containerVrijblijvende, this.textsVrijblijvendeV1);
            }
        }
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

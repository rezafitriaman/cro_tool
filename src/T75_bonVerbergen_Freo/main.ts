
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

@Develop({
    isDevelop: false,
    testId:  'T75_bonVerbergen_Freo',
    urlReplaced: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.51.0.15100'
})
@Style(`
    .t4u-customWrapper {
        display: none;
    }
    `)
class Base {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR

    //PUT OTHERS HERE
    HTMLElement: any;
    constructor() {
        // code...
        // method : https://jonlabelle.com/snippets/view/javascript/wrap-an-html-element-in-javascript
        (<any>HTMLElement).prototype.wrap = function (elms:Array<any>) {
            // Convert `elms` to an array, if necessary.
 
            if (!elms.length) elms = [elms];

            // Loops backwards to prevent having to clone the wrapper on the
            // first element (see `child` below).
            for (let i = elms.length - 1; i >= 0; i--) {

                let child = (i > 0) ? this.cloneNode(true) : this;

                let el = elms[i];

                // Cache the current parent and sibling.
                let parent = el.parentNode;

                let sibling = el.nextSibling;

                // Wrap the element (is automatically removed from its current
                // parent).
                child.appendChild(el);
         
                // If the element had a sibling, insert the wrapper before
                // the sibling to maintain the HTML structure; otherwise, just
                // append it to the parent.
                
                if (sibling) {

                    parent.insertBefore(child, sibling);
                } else {

                    parent.appendChild(child);
                }
            }
        };
    }
    @TryAndCatch
    observer(target:HTMLElement) {
        // Select the node that will be observed for mutations
        var targetNode =  target;

        // Options for the observer (which mutations to observe)
        var config = { attributes: true, childList: true, subtree: true };

        // Callback function to execute when mutations are observed
        var callback = function( mutationsList:Array<MutationRecord>, observer:Object) {

            for(var mutation of mutationsList) {
                if (mutation.type == 'childList') {

                    let mutationTarget: HTMLElement = (<HTMLElement>mutation.target);
                    let leenBedrag: HTMLElement = mutationTarget.querySelector('.offertestraat__results__list').querySelector('.offertestraat__results__list__leenbedrag');
                    let maandTermijn: HTMLElement = mutationTarget.querySelector('.offertestraat__results__list').querySelector('.offertestraat__results__list__maandtermijn');
                    let maandTermijn_Mobile: NodeList = mutationTarget.querySelector('.offertestraat__results__footer-mobile').querySelectorAll('.js-results-scrollto-pl');
                    let title: HTMLElement = mutationTarget.querySelector('.offertestraat__results__header');
                    
                    leenBedrag.style.display = 'none';
                    maandTermijn.style.display = 'none';

                    (<HTMLElement>maandTermijn_Mobile[1]).style.display = 'none';

                    title.style.display = 'none';

                }
            }
        };

        // Create an observer instance linked to the callback function
        var observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }
}

class V1 extends Base {
    
    constructor() {
        // code...
        super();
    }
    @TryAndCatch
    cunstomCode() {

        let target = document.querySelectorAll('.js-results');
        let div = document.createElement('div');

        div.className = "t4u-customWrapper";
        (<any>div).wrap(target);
    }

}

class V2 extends Base {
    
    constructor() {
        // code...
        super();
    }
    @TryAndCatch
    cunstomCode() {
        this.observer(document.querySelector('.js-results'));
    }

}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation:any = new V2();
    variation.cunstomCode();

/*
==============================
END CUSTOM CODE
==============================
*/
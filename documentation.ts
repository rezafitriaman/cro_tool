/*
==============================
DUCUMENTATION CLASS
==============================
*/

//t412
// change second image on hover PLP
//PLS make class from it

let targetContainersElm: HTMLCollection = document.getElementsByClassName('productListerTeaser');
let productId: string[] = prodId();
let reg: RegExp = /(d?\w+-(\w+)-(\w+))/g;

for (var i = 0; i < targetContainersElm.length; i++) {
    for (var j = 0; j < productId.length; j++) {

        if ((<string>targetContainersElm[i].getAttribute("href")).match(reg)[0] == productId[j]) {
          // code...
          let target: Element = targetContainersElm[i].getElementsByClassName('productListerTeaser-imageContainer')[0].getElementsByClassName('productListerTeaser-image--secondary')[0];
          let newId: string = target.getAttribute('data-srcset').replace(/(F02)/g, 'W04');
          targetContainersElm[i].getElementsByClassName('productListerTeaser-imageContainer')[0].getElementsByClassName('productListerTeaser-image--secondary')[0].setAttribute('data-srcset', newId);
        }
    }
}

/*------------------------------------------------------*/

//sticky filter
// hide and show filter on plp on scroll
//PLS make class from it

let filterContainer_elm:HTMLCollection = document.getElementsByClassName('productLister-viewOptions-placeholder');
let last_known_scroll_position: number = 0;
let hide: boolean = false;
let topNavigation_Elm: HTMLCollection = document.getElementsByClassName('topNavigation');

//init =  when the user landing on the middel of the page
//the filter must be hided 
let myInterval = setInterval(function(){ 
  if(topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
    (<HTMLElement>topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions')[0]).style.display = 'none';
    clearInterval(myInterval);
  } 
}, 100);

//on scroll hide and show the filter
window.addEventListener('scroll', function(e) {
  let offsetTop_FilterContainer = (<HTMLElement>filterContainer_elm[0]).offsetTop - 50;
  last_known_scroll_position = window.scrollY;

  //hide filter
  if(last_known_scroll_position - 50 > offsetTop_FilterContainer ) {
    if(topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
      (<HTMLElement>topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions')[0]).style.display = 'none';
      hide = true;
    }
  } 

  //show filter
  if(last_known_scroll_position < offsetTop_FilterContainer ) {
    if(filterContainer_elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
      (<HTMLElement>filterContainer_elm[0].getElementsByClassName('productLister-viewOptions')[0]).style.display = 'block';
      hide = false;  
    }  
  }
});

/*------------------------------------------------------*/

//T001 - [PLP] Change order strike-through and discounted price (OUTLET)
// change the order strike-through and discounted price
//PLS try it

let target:NodeList = document.querySelectorAll('.productListerTeaser-price');
class ChangeOrder {
  targetContainer: NodeList
  constructor(targetContainer: NodeList) {
    // code...
    this.targetContainer = targetContainer;
  }
  init() {
    for (var i = 0; i < this.targetContainer.length; i++) {
      let productPrice = (<HTMLElement>this.targetContainer[i]).querySelector('.productPrice');
      (<HTMLElement>this.targetContainer[i]).appendChild(productPrice);
    }
  }
}

let change = new ChangeOrder(target);
change.init();

/*------------------------------------------------------*/

//Feature!!!! must buid
// in node ask a question about witch cro project they wanna build

// these are the quetion
exports.testCRO = {
  id: 'cro_tool_test4',
  customer: 'gStar',
  whichPage: 'beforeCheckout',
  targetProxy: 'https://www.g-star.com/'
};

/*------------------------------------------------------*/

// HTMLelement prototype test

/**
 * This sample demonstrates a `wrap` method written in pure JavaScript
 * that works similarly to that in jQuery.
 *
 * If all text in the result window have red backgrounds, it worked!
 *
 * Answers this Stack Overflow question:
 * http://bit.ly/pure-js-wrap
 *
 * Live Example: 
 * http://jsfiddle.net/EV3J5/
 */
 
/*
 * Wrap an HTMLElement around each element in an HTMLElement array.
 */
HTMLElement.prototype.wrap = function (elms) {
    // Convert `elms` to an array, if necessary.
    if (!elms.length) elms = [elms];
 
    // Loops backwards to prevent having to clone the wrapper on the
    // first element (see `child` below).
    for (var i = elms.length - 1; i >= 0; i--) {
        var child = (i > 0) ? this.cloneNode(true) : this;
        var el = elms[i];
 
        // Cache the current parent and sibling.
        var parent = el.parentNode;
        var sibling = el.nextSibling;
 
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
 
//
// Example
//
 
var message = document.querySelectorAll('.breadcrumbs__item')
var div = document.createElement('div');
div.className = 'reza';
div.wrap(message);
 
//test
HTMLElement.prototype.test = function (elms) {
    // this is the wrapper-div who is created 
    let _this = this 

    // Convet Elms to an array, if necessary
    // so if it not a noodlist(thats an array) - then make it an array
    if(!elms.length) elms = [elms];

    for (var i = elms.length - 1; i >= 0; i--) {
        /*console.log('elms[i] = ')
        console.log(elms[i])

        console.log('i = ')
        console.log(i)*/

        /*console.log('_this= ');
        console.log(_this);*/

        /*console.log('(i > 0)= ')
        console.log((i > 0))*/

        /*let wrapper = (i > 0) ? _this.cloneNode(true).className = 'aa' : _this;*/
        let wrapper;
        let el = elms[i];
        // Cache the current parent and sibling.
        let parent = el.parentNode
        let sibling = el.nextSibling;

        /*let parent = el.parentNode;
        let sibling = el.nextSibling;*/

        if((i > 0)) {
            wrapper = _this.cloneNode(true);
            wrapper.className = 'clonned';            
        }else {
            wrapper = _this;
        }

        /*console.log('wrapper =');
        console.log(wrapper);*/

        // Wrap the element (is automatically removed from its current
        // parent).
        wrapper.appendChild(el);

       /* console.log(wrapper)*/

        // If the element had a sibling, insert the wrapper before
        // the sibling to maintain the HTML structure; otherwise, just
        // append it to the parent.
        console.log((sibling))
        if (sibling) {
            parent.insertBefore(wrapper, sibling);
        } else {
            parent.appendChild(wrapper);
        }

    }
};

var label = document.querySelectorAll('.breadcrumbs__item')
var div = document.createElement('div');
div.className = 'origin';
div.test(label);

//test2
HTMLElement.prototype.rep = function (text) {
    let _this = this;

    _this.textContent = text;
}


let target = document.querySelector('.page-title');

target.rep('Master Fitriaman');

//-----------------------------------------------------------------------------------------------
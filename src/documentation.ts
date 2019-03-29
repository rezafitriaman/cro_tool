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
change.init()
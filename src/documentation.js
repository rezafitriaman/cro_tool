/*
==============================
DUCUMENTATION CLASS
==============================
*/
//t412
// change second image on hover PLP
//PLS make class from it
var targetContainersElm = document.getElementsByClassName('productListerTeaser');
var productId = prodId();
var reg = /(d?\w+-(\w+)-(\w+))/g;
for (var i = 0; i < targetContainersElm.length; i++) {
    for (var j = 0; j < productId.length; j++) {
        if (targetContainersElm[i].getAttribute("href").match(reg)[0] == productId[j]) {
            // code...
            var target_1 = targetContainersElm[i].getElementsByClassName('productListerTeaser-imageContainer')[0].getElementsByClassName('productListerTeaser-image--secondary')[0];
            var newId = target_1.getAttribute('data-srcset').replace(/(F02)/g, 'W04');
            targetContainersElm[i].getElementsByClassName('productListerTeaser-imageContainer')[0].getElementsByClassName('productListerTeaser-image--secondary')[0].setAttribute('data-srcset', newId);
        }
    }
}
/*------------------------------------------------------*/
//sticky filter
// hide and show filter on plp on scroll
//PLS make class from it
var filterContainer_elm = document.getElementsByClassName('productLister-viewOptions-placeholder');
var last_known_scroll_position = 0;
var hide = false;
var topNavigation_Elm = document.getElementsByClassName('topNavigation');
//init =  when the user landing on the middel of the page
//the filter must be hided 
var myInterval = setInterval(function () {
    if (topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
        topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions')[0].style.display = 'none';
        clearInterval(myInterval);
    }
}, 100);
//on scroll hide and show the filter
window.addEventListener('scroll', function (e) {
    var offsetTop_FilterContainer = filterContainer_elm[0].offsetTop - 50;
    last_known_scroll_position = window.scrollY;
    //hide filter
    if (last_known_scroll_position - 50 > offsetTop_FilterContainer) {
        if (topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
            topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions')[0].style.display = 'none';
            hide = true;
        }
    }
    //show filter
    if (last_known_scroll_position < offsetTop_FilterContainer) {
        if (filterContainer_elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
            filterContainer_elm[0].getElementsByClassName('productLister-viewOptions')[0].style.display = 'block';
            hide = false;
        }
    }
});
/*------------------------------------------------------*/
//T001 - [PLP] Change order strike-through and discounted price (OUTLET)
// change the order strike-through and discounted price
//PLS try it
var target = document.querySelectorAll('.productListerTeaser-price');
var ChangeOrder = /** @class */ (function () {
    function ChangeOrder(targetContainer) {
        // code...
        this.targetContainer = targetContainer;
    }
    ChangeOrder.prototype.init = function () {
        for (var i = 0; i < this.targetContainer.length; i++) {
            var productPrice = this.targetContainer[i].querySelector('.productPrice');
            this.targetContainer[i].appendChild(productPrice);
        }
    };
    return ChangeOrder;
}());
var change = new ChangeOrder(target);
change.init();

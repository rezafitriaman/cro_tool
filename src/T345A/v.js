var customCode = function () {
    document.getElementsByTagName('html')[0].classList.add("t4u-T345A");
    var productPrice = document.getElementsByClassName('productPrice');
    var targetPdp = document.getElementsByClassName('productPrice-value');
    var containerOnPDP = document.getElementsByClassName('productListerTeaser-infoContainer');
    var colorSelectionLink = document.getElementsByClassName('colorSelection-link');
    var productPriceDiscount = document.getElementsByClassName('productPrice-discount');
    var targetPdpSlider = document.getElementsByClassName('slideCarousel-slidesContainer');
    var removeGreen = function () {
        for (var i = 0; i < targetPdp.length; i++) {
            if (targetPdp[i].parentNode.getElementsByClassName('productPrice-discount').length > 0) {
                targetPdp[i].removeAttribute("style");
            }
        }
    };
    var makeGreen = function () {
        for (var i = 0; i < targetPdp.length; i++) {
            if (targetPdp[i].parentNode.getElementsByClassName('productPrice-discount').length > 0) {
                targetPdp[i].style.color = 'green';
            }
        }
    };
    var checkIfDiscountedEnter = function () {
        //they add class on the element
        //this class must init first then our check
        setTimeout(function () {
            for (var i = 0; i < productPriceDiscount.length; i++) {
                //if discount or not
                if (productPriceDiscount[i].classList.contains('is-hidden')) {
                    removeGreen();
                }
                else {
                }
            }
        }, 100);
    };
    //they add class on the element
    //this class must init first then our check
    var checkIfDiscountedOut = function () {
        setTimeout(function () {
            for (var i = 0; i < productPriceDiscount.length; i++) {
                if (productPriceDiscount[i].classList.contains('is-hidden')) {
                    removeGreen();
                }
                else {
                    makeGreen();
                }
            }
        }, 100);
    };
    //MAIN
    //only PLP
    if (document.getElementsByClassName('visibleFacets-container').length > 0) {
        for (var i = 0; i < productPrice.length; i++) {
            //only an item that has discount must be green
            if (productPrice[i].parentNode.children.length > 1) {
                productPrice[i].style.color = 'green';
            }
        }
    }
    //only PDP
    if (document.getElementsByClassName('productDetail-productTitle').length > 0) {
        for (var i = 0; i < targetPdp.length; i++) {
            if (targetPdp[i].parentNode.getElementsByClassName('productPrice-discount').length > 0) {
                targetPdp[i].style.color = 'green';
            }
        }
        for (var i = containerOnPDP.length - 1; i >= 0; i--) {
            if (containerOnPDP[i].getElementsByClassName('productListerTeaser-price')[0].children.length > 1) {
                containerOnPDP[i].getElementsByClassName('productListerTeaser-price')[0].getElementsByClassName('productPrice')[0].style.color = 'green';
            }
        }
        if (colorSelectionLink.length > 0) {
            for (var i = colorSelectionLink.length - 1; i >= 0; i--) {
                colorSelectionLink[i].addEventListener("mouseenter", checkIfDiscountedEnter);
                colorSelectionLink[i].addEventListener("mouseout", checkIfDiscountedOut);
            }
        }
    }
};
var int = setInterval(function () { customCode(); }, 1000);
setTimeout(function () { clearInterval(int); }, 3000);

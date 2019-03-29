document.getElementsByTagName('html')[0].classList.add("t4u-T409");
var imageBlockElm = document.getElementsByClassName('productTile-images');
var navElm = document.getElementsByClassName('pagination')[0].getElementsByTagName('li');
var containerFilterElm;
var filtersAppliedElm = document.getElementsByClassName('filtersApplied');
var productListerControlsElm = document.getElementsByClassName('productLister-controls');
var resultCountSwitchContainerElm = document.getElementsByClassName('resultCountSwitch-container');
var getCookie = function (name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    var end;
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0)
            return null;
    }
    else {
        begin += 2;
        end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
};
var signing = function () {
    for (var i_1 = 0; i_1 < imageBlockElm.length; i_1++) {
        var containerTitleEl = imageBlockElm[i_1].getElementsByClassName('productSigning-container--tile');
        var productSigningEl = imageBlockElm[i_1].getElementsByClassName('productSigning--v2');
        if (containerTitleEl[0] != undefined) {
            if (containerTitleEl[0].children.length > 1) {
                //if more then 2 title
                productSigningEl[0].style.bottom = '40px';
                productSigningEl[0].style.top = 'auto';
            }
            else {
                //if more then 1 title
                productSigningEl[0].style.bottom = '20px';
                productSigningEl[0].style.top = 'auto';
            }
        }
        else if (productSigningEl.length != 0) {
            //if undefined and not has length 0
            productSigningEl[0].style.bottom = '0px';
            productSigningEl[0].style.top = 'auto';
        }
    }
};
//signing funcion, wait till their js loaded. onclick on: - addClickNav - addClickFilter
var initSigning = function () {
    console.log('click');
    setTimeout(function () { signing(); }, 2500);
};
var addClickNav = function () {
    for (var i = 0; i < navElm.length; i++) {
        navElm[i].addEventListener('click', initSigning);
        navElm[i].addEventListener('touchend', initSigning);
    }
};
//check if Variant C or others on the cookie (filters)
if (getCookie('_GSMARS_PLP2') == 'C') {
    containerFilterElm = document.getElementsByClassName('productLister-facetsContainer');
}
else {
    containerFilterElm = document.getElementsByClassName('js-toggleFilterItem');
}
var addClickFilter = function () {
    for (var i = 0; i < containerFilterElm.length; i++) {
        containerFilterElm[i].addEventListener('click', initSigning);
        containerFilterElm[i].addEventListener('touchend', initSigning);
    }
    for (var i = 0; i < filtersAppliedElm.length; i++) {
        filtersAppliedElm[i].addEventListener('click', initSigning);
        filtersAppliedElm[i].addEventListener('touchend', initSigning);
    }
    for (var i = 0; i < productListerControlsElm.length; i++) {
        productListerControlsElm[i].addEventListener('click', initSigning);
        productListerControlsElm[i].addEventListener('touchend', initSigning);
    }
    for (var i = 0; i < resultCountSwitchContainerElm.length; i++) {
        resultCountSwitchContainerElm[i].addEventListener('click', initSigning);
        resultCountSwitchContainerElm[i].addEventListener('touchend', initSigning);
    }
};
//check location search(if ppl click on nav-bottom or filter)
setInterval(function () {
    addClickNav();
    addClickFilter();
}, 500);
//init signing for the first time
signing();

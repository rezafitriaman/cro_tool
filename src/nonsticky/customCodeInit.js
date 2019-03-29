"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("./log");
function customCodeInit(developEnvi) {
    /*
    ==============================
    INIT CUSTOM LOG!!
    so we can make a switch(on/of) if we on development envi or nah
    ==============================
    */
    var c = new log_1.LogInput(developEnvi);
    /*
    ==============================
    BEGIN
    ==============================
    */
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
    /*
    ==============================
    END
    ==============================
    */
}
exports.customCodeInit = customCodeInit;

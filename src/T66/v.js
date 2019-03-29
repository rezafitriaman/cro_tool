/*
==============================
MAKE SURE DEVELOPE ENVI SET TO FALSE ON PRODUCTION
==============================
*/
var developEnvi = true;
var testId = "T66";
/*
==============================
APPEND ORIGIN JS ON DEVELOPMENT ENVI
==============================
*/
var appendJsOrigin = function () {
    // WHICH URL 
    var rawUrl = 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.42.0.24204';
    // CREATE SCRIPT TAG AND APPEND IT
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = rawUrl;
    script.id = 't4u-custom-script';
    //IF EXIST THEN REMOVE IT
    if (document.getElementById('t4u-custom-script')) {
        document.getElementById('t4u-custom-script').remove();
    }
    head.appendChild(script);
};
//TEST ID
document.getElementsByTagName('html')[0].classList.add(testId);
/*
==============================
CONTENT!!! BEGIN
==============================
*/
var customCodeInit = function () {
    var ChangeText = /** @class */ (function () {
        function ChangeText(elm) {
            // code...
            this._targetElm = elm;
        }
        ChangeText.prototype.append = function (text) {
            this._targetElm[0].innerText = text;
        };
        return ChangeText;
    }());
    var title = new ChangeText(document.getElementsByClassName('page-title'));
    var subtitle = new ChangeText(document.getElementsByClassName('intro'));
    title.append('Vraag vrijbijvend uw offerte aan');
    subtitle.append('Wij beoordelen uw aanvraag en nemen binnen twee werkdagen contact met u op.');
    //END
};
/*
==============================
CONTENT!!! END
==============================
*/
//DEV ENVI OR NAH
if (developEnvi) {
    console.log('%c!---------DEV ENVI + ' + testId + '---------!', "color: green; font-size:18px;");
    appendJsOrigin();
    customCodeInit();
}
else {
    customCodeInit();
}

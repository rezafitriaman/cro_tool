"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prodId_1 = require("./prodId");
function customCodeInit() {
    /*
    ==============================
    BEGIN
    ==============================
    */
    var targetContainersElm = document.getElementsByClassName('productListerTeaser');
    var productId = prodId_1.prodId();
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
    /*
    ==============================
    END
    ==============================
    */
}
exports.customCodeInit = customCodeInit;

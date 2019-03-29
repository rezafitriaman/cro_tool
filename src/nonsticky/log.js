"use strict";
/*
 ==============================
 CUSTOM CONSOLE.LOG
 ==============================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var LogInput = /** @class */ (function () {
    function LogInput(developEnvi) {
        // code...
        this.developEnvi = developEnvi;
    }
    LogInput.prototype.log = function (input) {
        if (this.developEnvi) {
            console.log(input);
        }
        else {
            return;
        }
    };
    return LogInput;
}());
exports.LogInput = LogInput;

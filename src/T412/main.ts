/*
==============================
- MAKE SURE DEVELOPE ENVI SET TO FALSE ON PRODUCTION
- MAKE SURE TO SET TESTID
- MAKE SURE TO SET URLORIGIN
==============================
*/
import {appendJsOrigin} from "./appendJsOrigin"
import {customCodeInit} from "./customCodeInit"

let developEnvi:boolean = false;
let testId: string = "T412";
let urlOrigin: string = 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js';

//DEV ENVI OR NAH
if(developEnvi) {
	console.log('%c<-------------------DEV ENVI' + '-------------------' + testId + '------------------->', "color: green; font-size:16px;")
  	/*
	==============================
	APPEND ORIGIN JS ON DEVELOPMENT ENVI
	==============================
	*/

	appendJsOrigin(testId, urlOrigin);

	/*
	==============================
	CUSTOM CODE INIT
	==============================
	*/
  	customCodeInit();

}else {
	/*
	==============================
	CUSTOM CODE INIT
	==============================
	*/

  	customCodeInit();
}
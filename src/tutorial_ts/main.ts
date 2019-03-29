/*
==============================
- MAKE SURE DEVELOPE ENVI SET TO FALSE ON PRODUCTION
- MAKE SURE TO SET TESTID
- MAKE SURE TO SET URLORIGIN
==============================
*/

import {appendJsOrigin} from "./appendJsOrigin"
import {customCodeInit} from "./customCodeInit"

let developEnvi:boolean = true;
let testId: string = "t4u-AFMtest-2";
let urlOrigin: string = 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.47.0.27977';

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

/*
==============================
IMPORT MODULE | STATIC
UTILITY what we have right now are:

- detect envi

- detect language

- detect country

- detect if cookie has gender entity

- detect media query: if mobile or not

- settimeout in a PROMISE so use .then(), resolve(), reject()

  example use:  delay(6000).then(function(result) {
                  console.log('runs after ' + result);
                  console.log('appended');
                  document.getElementsByClassName('btn--orange')[0].classList.add('reza-custom-master');

                });
- setInterval to find a specifiek element, in a Promise so use .then(), resolve(), reject()

  example use:  findElm('.xxx-xxx-master').then(function(result) {
                  console.log(result);
                });

==============================
*/

export function Module(data:any):any {

	return function (target:any):any {

		return class extends target {
			style = data.style;
			testId = data.testId;
			urlReplace = data.urlReplace;
			head_elm = document.head;
			
		   	constructor() {
		    	super(data.isDevelop);
		    	this.appendStyle();
		    	this.appendMassage(this.testId);

		    	this.appendJsOrigin(this.testId, this.urlReplace);
		    	
		  	}
		  	log(input: any) {
				if(data.isDevelop) {
		  			console.log(`%ccustom-log = `, 'color: green', input);
				}else {
				 	return;
				}
			}
			logError(input: any) {
				if(data.isDevelop) {
		  			console.log(`%ccustom-log-error = `, 'color: red', input);
				}else {
				 	return;
				}
			}
			appendStyle() {
		  		let styleElement:HTMLElement = document.createElement('style');
		  		styleElement.classList.add('t4u-custom-style');
		  		styleElement.textContent = this.style;
		  		
		  		this.head_elm.insertAdjacentElement('afterbegin', styleElement);
		  	}
		  	cookieCheck(name: string) {
				let value = "; " + document.cookie;
			    let parts = value.split("; " + name + "=");
			    if (parts.length == 2) return parts.pop().split(";").shift();

			    else return null;
			}
			appendMassage(id:string) {
				if(data.isDevelop) { 
					console.log('%c<-----------DEV ENVI' + '-----------' + id + '----------->', "color: green; font-size:16px;");
				}else {
				 	return;
				}
			}
			appendJsOrigin(testId: string, urlReplace: string):void {
				if(data.isDevelop) { 
					// WHICH URL 
					var rawUrl = urlReplace;
					// CREATE SCRIPT TAG AND APPEND IT
					var script:HTMLScriptElement = document.createElement('script');

					script.type = 'text/javascript';
					script.src = rawUrl;
					script.id = 't4u-custom-script';

					this.head_elm.insertAdjacentElement('afterbegin', script);

					//APPEND TEST ID
					document.documentElement.classList.add(testId);
				}else {
				 	return;
				}
			}
		}
	}
}
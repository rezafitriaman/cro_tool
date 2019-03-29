export function utility() {
let utility_str: string = `
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

//@FindTargetFirst
export function FindTargetFirst(target: any, propertyKey: string | symbol, descriptor:PropertyDescriptor): any {

    let customInterval: any;
    let originalMethod: Function = descriptor.value;
    
    // rewrite the function
    descriptor.value = function() {
        let context = this;
        let args = arguments;

        return new Promise(function(resolve) {
            customInterval = setInterval(function() {
                let target_elm = document.querySelectorAll(args[0]);

                if(target_elm.length > 0) {
                    resolve(target_elm);
                    clearInterval(customInterval);
                }
            },100);
        }).then(function(result) {
            context.log('find it');
            context.log(result);
            originalMethod.apply(context, args);
        });
    }

    return descriptor;
};

//@Debounce(200)
export function Debounce(wait:number):any {

    return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    
        let timeout:any;
        //function foo/ target
        let originalMethod = descriptor.value;

        // rewhrite the function
        descriptor.value = function() {

            var context = this
            var args = arguments;

            return new Promise(function(resolve) {
				setTimeout(function() {
					resolve(\`delayed \${wait}\`);
				}, wait)}).then(function(result) {
					context.log('runs after ' + result);
				originalMethod.apply(context, args);
			});
        };

        return descriptor;
    }
};

export function Module(obj:any):any {
	return function (target:any):any {

		return class extends target {
			style = obj.style;
			testId = obj.testId;
			urlReplaced = obj.urlReplaced;
			head_elm = document.querySelectorAll('head')[0];

		   	constructor() {
		    	super(obj.develop);
		    	this.appendMassage(this.testId);
		    	this.appendJsOrigin(this.testId, this.urlReplaced);
		    	this.url = window.location.href;
		    	this.appendStyle();
		  	}
		  	appendStyle() {
		  		this.head_elm.insertAdjacentHTML('afterbegin', this.style);
		  	}
		  	log(input: any) {
				if(obj.develop) {
		  			console.log(\`%ccustom-log = \`, 'color: green', input);
				}else {
				 	return;
				}
			}
			match(maxWidth: string) {
				let media:any;
				let width:any = window.matchMedia("(max-width:"+maxWidth+")");

				if (width.matches) { // If media query matches
					media = 'mobile';
				} else {
					media = 'desktop or tablet';
				}
				return media;
			}
			language() {
				let srclanguage = /(\\w\\w_)/g;

				let language = this.url.match(srclanguage);
				return language;
			}
			country() {
				let srcCountry = /(_\\w\\w)/g;

				let country = this.url.match(srcCountry);
				return country;
			}
			cookieCheck(name: string) {
				let value = "; " + document.cookie;
			    let parts = value.split("; " + name + "=");
			    if (parts.length == 2) return parts.pop().split(";").shift();
			    else return null;
			}
			delay(ms:number) {
				return new Promise(function(resolve) {
					setTimeout(function() {
						resolve(\`delayed \${ms}\`);
					}, ms)
				});
			}
			appendJsOrigin(testId: string, urlReplaced: string):void {
				if(obj.develop) { 
					// WHICH URL 
					var rawUrl = urlReplaced;
					// CREATE SCRIPT TAG AND APPEND IT
					var head = document.getElementsByTagName('head')[0];
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = rawUrl;
					script.id = 't4u-custom-script';
					//IF EXIST THEN REMOVE IT
					if(document.getElementById('t4u-custom-script')) {
					  document.getElementById('t4u-custom-script').remove();
					}

					head.appendChild(script);

					//APPEND TEST ID
					document.getElementsByTagName('html')[0].classList.add(testId);
				}else {
				 	return;
				}
			}
			appendMassage(id:string) {
				if(obj.develop) { 
					console.log('%c<-----------DEV ENVI' + '-----------' + id + '----------->', "color: green; font-size:16px;");
				}else {
				 	return;
				}
			}
		}
	}
}`;

	return utility_str;
}
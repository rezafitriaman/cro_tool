
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

//@CustomEventEmitter
export function CustomEventEmitter(customFilterName:string, targetHTMLElement:HTMLElement = document.documentElement) {

	return function	(target: any, propertyKey: string | symbol, descriptor:PropertyDescriptor): any {
		
		let originalMethod: Function = descriptor.value;
		// rewrite the function
		descriptor.value = function() {
	        let context = this;
	        let args = arguments;

	        // Create a new event, allow bubbling, and provide any data you want to pass to the "details" property
			let customT4uEvent = new CustomEvent(customFilterName, {
			  	bubbles: true,
			  	detail: { text: () => 'custom-event-t4u' }
			});

			// Select the node that will be observed for mutations
			let targetNode = targetHTMLElement;

			// Options for the observer (which mutations to observe)
	        let config = { 
	            attributes: true, 
	            childList: true, 
	            subtree: true,
	            attributeFilter: ['style', 'class'] 
	        };

			// Callback function to execute when mutations are observed
			let callback = function(mutationsList:any, observer:any) {
			    for(let mutation of mutationsList) {

			    	if(mutation.type === 'childList') {
			    		if(mutation.target.classList.contains(args[0])) {
			    			context.log(mutation.target)
			            	mutation.target.dispatchEvent(customT4uEvent);
			            }
			    	}
			    }
			};

			// Create an observer instance linked to the callback function
			let observer = new MutationObserver(callback);

			originalMethod.apply(context, args);

			// Start observing the target node for configured mutations
			 return observer.observe(targetNode, config);
	      
	    }
	    return descriptor;
	}
}

//@FindThatClassFirst
export function FindThatClassFirst(target: any, propertyKey: string | symbol, descriptor:PropertyDescriptor): any {

    let originalMethod: Function = descriptor.value;
    // rewrite the function
    descriptor.value = function() {
        let context = this;
        let args = arguments;
        
        // Select the node that will be observed for mutations
        let targetNode = document.documentElement;

        // Options for the observer (which mutations to observe)
        let config = { 
            attributes: true, 
            childList: true, 
            subtree: true,
            attributeFilter: ['style', 'class'] 
        };

        // Callback function to execute when mutations are observed
        let callback = function(mutationsList:any, observer:any) {
            for(let mutation of mutationsList) {
                if(mutation.type == 'attributes') {
                    if(mutation.attributeName == 'class') {
                        if(mutation.target.classList.contains(args[0])) {

                            context.log('found it!')
                            originalMethod.apply(context, args);
                            //kill the observer
                            setTimeout(function(){ 
					        	context.log('observer disconnected'); 
					        	observer.disconnect(); 
					        }, 300);
                        }
                    }
                }
            }
        };

        // Create an observer instance linked to the callback function
        let observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        return observer.observe(targetNode, config);
    }

    return descriptor;
};

//@TryAndCatch
export function TryAndCatch(target: any, propertyKey: string | symbol, descriptor:PropertyDescriptor): any {

    let originalMethod: Function = descriptor.value;
    // rewrite the function
    descriptor.value = function() {
        let context = this;
        let args = arguments;

        try{
        	originalMethod.apply(context, args);
        }catch(err) {
		    this.logError(`${err.name} : ${err.message}`);
		}
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
					resolve(`delayed ${wait}`);
				}, wait)}).then(function(result) {
					context.log('runs after ' + result);
				originalMethod.apply(context, args);
			});
        };

        return descriptor;
    }
};

export function Module(data:any):any {

	return function (target:any):any {

		return class extends target {
			style = data.style;
			testId = data.testId;
			urlReplaced = data.urlReplaced;
			head_elm = document.head;

		   	constructor() {
		    	super(data.isDevelop);
		    	
		    	this.appendMassage(this.testId);
		    	this.appendJsOrigin(this.testId, this.urlReplaced);
		    	this.url = window.location.href;
		    	this.appendStyle();
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
			match(maxWidth: string) {
				let media: Object;
				let device = {
					MOBILE: 'mobile',
					DESKTOP_OR_TABLET: 'desktop or tablet'
				}
				let width:any = window.matchMedia("(max-width:" + maxWidth + ")");

				if (width.matches) { // If media query matches
					media = device.MOBILE;
				} else {
					media = device.DESKTOP_OR_TABLET;
				}

				return media;
			}
			language() {
				let srclanguage = /(\w\w_)/g;
				let language = this.url.match(srclanguage);

				return language;
			}
			country() {
				let srcCountry = /(_\w\w)/g;
				let country = this.url.match(srcCountry);

				return country;
			}
			cookieCheck(name: string) {
				let value = "; " + document.cookie;
			    let parts = value.split("; " + name + "=");
			    if (parts.length == 2) return parts.pop().split(";").shift();

			    else return null;
			}
			appendJsOrigin(testId: string, urlReplaced: string):void {
				if(data.isDevelop) { 
					// WHICH URL 
					var rawUrl = urlReplaced;
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
			appendStyle() {
		  		let styleElement:HTMLElement = document.createElement('style');
		  		styleElement.classList.add('t4u-custom-style');
		  		styleElement.textContent = this.style;
		  		
		  		this.head_elm.insertAdjacentElement('afterbegin', styleElement);
		  	}
			appendMassage(id:string) {
				if(data.isDevelop) { 
					console.log('%c<-----------DEV ENVI' + '-----------' + id + '----------->', "color: green; font-size:16px;");
				}else {
				 	return;
				}
			}
		}
	}

}
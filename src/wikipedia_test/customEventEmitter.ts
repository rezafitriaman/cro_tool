
//@CustomEventEmitter
export function CustomEventEmitter(customFilterName:string, className:string) {

	return function	(target: any, propertyKey: string | symbol, descriptor:PropertyDescriptor): any {
		//Polyfill Internet Explorer >= 9
		//START Polyfill
		(function () {
			if ( typeof (<any>window).CustomEvent === "function" ) return false;

			function CustomEvent ( event:any, params:any ) {
				params = params || { bubbles: false, cancelable: false, detail: null };
				var evt = document.createEvent( 'CustomEvent' );
				evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
				return evt;
			}

			CustomEvent.prototype = (<any>window).Event.prototype;

			(<any>window).CustomEvent = CustomEvent;
		})();
		//END Polyfill

		let originalMethod: Function = descriptor.value;
		// rewrite the function
		descriptor.value = function() {
	        let context = this;
	        let args = arguments;
	        let classList:any;

	        if(arguments[0] == undefined) {
	        	classList = className;
	        }else {
	        	classList = arguments[0];
	        }
	        
	        // Create a new event, allow bubbling, and provide any data you want to pass to the "details" property
			let customT4uEvent = new CustomEvent(customFilterName, {
			  	bubbles: true,
			  	detail: { text: () => 'custom-event-t4u' }
			});

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
			    mutationsList.forEach(function(mutation:any) {

			    	if(mutation.type === 'childList') {
			    		if(mutation.target.classList.contains(classList)) {
			    			context.log(mutation.target)
			            	mutation.target.dispatchEvent(customT4uEvent);
			            }
			    	}
			    }
			)};

			// Create an observer instance linked to the callback function
			let observer = new MutationObserver(callback);

			originalMethod.apply(context, args);

			// Start observing the target node for configured mutations
			return observer.observe(targetNode, config);
	      
	    }
	    return descriptor;
	}
};
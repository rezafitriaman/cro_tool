
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
};
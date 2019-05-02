exports.str =`
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
            attributeFilter: ['class', 'href'] 
        };

        // Callback function to execute when mutations are observed
        let callback = function(mutationsList:any, observer:any) {
            for(let mutation of mutationsList) {
                /*context.log(mutation.attributeName);*/
                if(mutation.type == 'attributes') {
                    /*context.log(mutation.attributeName);*/

                    if(mutation.attributeName == 'class') {
                    	/*context.log(mutation.target)*/
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
};`;
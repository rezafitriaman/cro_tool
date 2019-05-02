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
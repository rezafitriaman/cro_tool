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
		    /*this.logError(`${err.name} : ${err.message}`);*/
		}
    }

    return descriptor;
};
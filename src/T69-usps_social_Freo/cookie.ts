
//@Cookie
export function Cookie(target:any):any {

	return class extends target {
		
	   	constructor() {
	    	super();
	  	}
	  	cookieCheck(name: string) {
			let value = "; " + document.cookie;
		    let parts = value.split("; " + name + "=");
		    
		    if (parts.length == 2) return parts.pop().split(";").shift();

		    else return null;
		}
	}
};
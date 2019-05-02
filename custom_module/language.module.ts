exports.str =`
/*@Language*/
export function Language(target:any):any {

	return class extends target {

	   	constructor() {
	    	super();
	  	}
		language() {
			let srclanguage = /(\\w\\w_)/g;
			let language = window.location.href.match(srclanguage);

			return language;
		}
	}
};`;
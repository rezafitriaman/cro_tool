
export function Country(target:any):any {

	return class extends target {

	   	constructor() {
	    	super();    	
	  	}
		country() {
			let srcCountry = /(_ww)/g;
			let country = window.location.href.match(srcCountry);

			return country;
		}
	}
}
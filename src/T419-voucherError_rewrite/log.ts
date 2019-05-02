/*@CustomLog*/
export function CustomLog(target:any):any {

	return class extends target {

	   	constructor() {
	    	super();
	  	}
	  	log(input: any) {

			if(this.isDevelop) {

	  			console.log(`%ccustom-log = `, 'color: green', input);
			}else {
			 	return;
			}
		}
		logError(input: any) {
			if(this.isDevelop) {
	  			console.log(`%ccustom-log-error = `, 'color: red', input);
			}else {
			 	return;
			}
		}
	}
};
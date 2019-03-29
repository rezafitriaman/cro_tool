
/*
==============================
CUSTOM COOKIE CHECK
==============================
*/

export class Cookie {
	option: string;
	constructor(option?: string) {
		// code...
		this.option = option;
	}
	check(name: string) {
		let value = "; " + document.cookie;
	    let parts = value.split("; " + name + "=");
	    if (parts.length == 2) return parts.pop().split(";").shift();
	    else return null;
	}
}
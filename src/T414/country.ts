/*
==============================
COUNTRY
look which COUNTRY G-star has
==============================

example how to use:

let country = new Country();
let co = country.which(); 
c.log(co)
*/

export class Country {
	regex: RegExp;
	url: string
	constructor() {
		let url: string = window.location.href;

		this.regex = /(_\w\w)/g;
		this.url = url;
	}
	which() {
		let language = this.url.match(this.regex);
		return language[0];
	}
}
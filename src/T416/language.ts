/*
==============================
LANGUAGE
look which language G-star has
==============================
*/

export class Language {
	regex: RegExp;
	url: string
	constructor() {
		let url: string = window.location.href;

		this.regex = /(\w\w_)/g;
		this.url = url;
	}
	which() {
		let language = this.url.match(this.regex);
		return language[0];
	}
}
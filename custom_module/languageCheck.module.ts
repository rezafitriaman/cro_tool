export function language() {
let customLanguageCheck_str: string = `
/*
==============================
LANGUAGE
look which LANGUAGE G-star has
==============================

example how to use:

let lang = new Language();
let l = lang.which(); 
c.log(l)
*/

export class Language {
	regex: RegExp;
	url: string
	constructor() {
		let url: string = window.location.href;

		this.regex = /(\\w\\w_)/g;
		this.url = url;
	}
	which() {
		let language = this.url.match(this.regex);
		return language;
	}
}`;

return customLanguageCheck_str;
}
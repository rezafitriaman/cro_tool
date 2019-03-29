export function mediaCheck() {
let mediaCheck_str: string = `
/*
==============================
CHECK MOBILE OR DESKTOP
look which MEDIA WEBSITE has
==============================

example how to use:

let mobile = new CheckMobileOrDesktop('768px');
let ismobile = mobile.match(); 
c.log(ismobile);
*/

export class CheckMobileOrDesktop {
	maxWidth: any;
	constructor(maxWidth: string) {
	    this.maxWidth = window.matchMedia("(max-width:"+maxWidth+")");
	}
	match() {
		let media:any;

		if (this.maxWidth.matches) { // If media query matches
			media = 'mobile';
		} else {
			media = 'desktop or tablet';
		}
		return media;
	}
}`;

	return mediaCheck_str;
}
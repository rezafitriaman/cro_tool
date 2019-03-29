
export class Utility {
	//need for custom console.log()
	developEnvi: boolean;
	url: string;
	message:any;

	constructor(developEnvi: boolean) {
		// code...
		this.developEnvi = developEnvi;
		this.url = window.location.href;
	}
	log(input: any) {
		if(this.developEnvi) {
  			console.log(`%ccustom-log = `, 'color: green', input);
		}else {
		 	return;
		}
	}
	match(maxWidth: string) {
		let media:any;
		let width:any = window.matchMedia("(max-width:"+maxWidth+")");

		if (width.matches) { // If media query matches
			media = 'mobile';
		} else {
			media = 'desktop or tablet';
		}
		return media;
	}
	language() {
		let srclanguage = /(\w\w_)/g;

		let language = this.url.match(srclanguage);
		return language;
	}
	country() {
		let srcCountry = /(_\w\w)/g;

		let country = this.url.match(srcCountry);
		return country;
	}
	cookieCheck(name: string) {
		let value = "; " + document.cookie;
	    let parts = value.split("; " + name + "=");
	    if (parts.length == 2) return parts.pop().split(";").shift();
	    else return null;
	}
	delay(ms:any) {
		return new Promise(function(resolve) {
			setTimeout(function() {
				resolve(`delayed ${ms}`);
			}, ms)
		});
	}
	findElm(target:string) {
	    return new Promise(function(resolve) {
			let customInterval = setInterval(function() {
				let target_elm = document.querySelectorAll(target);
				if(target_elm.length > 0) {
					resolve(target_elm);
					clearInterval(customInterval);
				}
			},100);
		});
	}
	appendJsOrigin(testId: string, urlOrigin: string):void {
		if(this.developEnvi) { 
			// WHICH URL 
			var rawUrl = urlOrigin;
			// CREATE SCRIPT TAG AND APPEND IT
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = rawUrl;
			script.id = 't4u-custom-script';
			//IF EXIST THEN REMOVE IT
			if(document.getElementById('t4u-custom-script')) {
			  document.getElementById('t4u-custom-script').remove();
			}

			head.appendChild(script);

			//APPEND TEST ID
			document.getElementsByTagName('html')[0].classList.add(testId);
		}else {
		 	return;
		}
	}
	appendMassage(id:string) {
		if(this.developEnvi) { 
			console.log('%c<-----------DEV ENVI' + '-----------' + id + '----------->', "color: green; font-size:16px;");
		}else {
		 	return;
		}
	}
}
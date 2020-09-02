
export function Develop(data:any):any {

	return function (target:any):any {

		return class extends target {
			isDevelop = data.isDevelop;
			testId = data.testId;
			urlReplaced = data.urlReplaced;
			head_elm = document.head;

		   	constructor() {
		    	super(data.isDevelop);
		    	this.isDevelop = data.isDevelop;
		    	this.appendMassage(this.testId);
		    	this.appendJsOrigin(this.testId, this.urlReplaced);
		  	}
			appendJsOrigin(testId: string, urlReplaced: string):void {
				if(data.isDevelop) { 
					// WHICH URL 
					var rawUrl = urlReplaced;
					// CREATE SCRIPT TAG AND APPEND IT
					var script:HTMLScriptElement = document.createElement('script');

					script.type = 'text/javascript';
					script.src = rawUrl;
					script.id = 't4u-custom-script';

					this.head_elm.insertAdjacentElement('afterbegin', script);

					//APPEND TEST ID
					document.documentElement.classList.add(testId);
				}else {
				 	return;
				}
			}
			appendMassage(id:string) {
				if(data.isDevelop) { 
					console.log('%c<-----------DEV ENVI' + '-----------' + id + '----------->', "color: green; font-size:16px;");
				}else {
				 	return;
				}
			}
		}
	}
}

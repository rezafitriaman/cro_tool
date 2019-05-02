/*@Style(``)*/
export function Style(styleStr:string):any {

	return function (target:any):any {

		return class extends target {
			style : string;
		   	constructor() {
		    	super();
		    	
		    	this.head_elm = document.head;
		    	this.styleStr = styleStr;
		    	this.appendStyle(this.styleStr);	
		  	}
			appendStyle(style:any) {
		  		let styleElement:HTMLElement = document.createElement('style');
		  		styleElement.classList.add('t4u-custom-style');
		  		styleElement.textContent = this.styleStr;
		  		
		  		this.head_elm.insertAdjacentElement('afterbegin', styleElement);
		  	}
		}
	}
}
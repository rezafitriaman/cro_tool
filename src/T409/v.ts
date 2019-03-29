document.getElementsByTagName('html')[0].classList.add("t4u-T409");
let imageBlockElm: HTMLCollection = document.getElementsByClassName('productTile-images');
let navElm: HTMLCollection = document.getElementsByClassName('pagination')[0].getElementsByTagName('li');
let containerFilterElm: HTMLCollection;
let	filtersAppliedElm: HTMLCollection = document.getElementsByClassName('filtersApplied');
let	productListerControlsElm: HTMLCollection = document.getElementsByClassName('productLister-controls');
let	resultCountSwitchContainerElm: HTMLCollection = document.getElementsByClassName('resultCountSwitch-container');
let getCookie = (name:string):String => {
	let dc = document.cookie;
    let prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    let end;
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;
        end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}
let signing = ():void => {
	for (let i = 0; i < imageBlockElm.length; i++) {
		let containerTitleEl: HTMLCollection = imageBlockElm[i].getElementsByClassName('productSigning-container--tile');
		let productSigningEl: HTMLCollection = imageBlockElm[i].getElementsByClassName('productSigning--v2');

		if(containerTitleEl[0] != undefined) {
			if(containerTitleEl[0].children.length > 1) {
				//if more then 2 title
				(<HTMLElement>productSigningEl[0]).style.bottom = '40px';
				(<HTMLElement>productSigningEl[0]).style.top = 'auto';
			}else {
				//if more then 1 title
				(<HTMLElement>productSigningEl[0]).style.bottom = '20px';
				(<HTMLElement>productSigningEl[0]).style.top = 'auto';
			}
		}else if(productSigningEl.length != 0) {
			//if undefined and not has length 0
			(<HTMLElement>productSigningEl[0]).style.bottom = '0px';
			(<HTMLElement>productSigningEl[0]).style.top = 'auto';
		}
	}
}
//signing funcion, wait till their js loaded. onclick on: - addClickNav - addClickFilter
let initSigning = ():void => {
	console.log('click')
	setTimeout(function(){ signing(); }, 2500);
}
let addClickNav = ():void => {
	for (var i = 0; i < navElm.length; i++) {
		navElm[i].addEventListener('click', initSigning);
		navElm[i].addEventListener('touchend', initSigning);
	}
}
//check if Variant C or others on the cookie (filters)
if(getCookie('_GSMARS_PLP2') == 'C') {
	containerFilterElm = document.getElementsByClassName('productLister-facetsContainer');
}else {
	containerFilterElm = document.getElementsByClassName('js-toggleFilterItem');
}
let addClickFilter = ():void => {
	for (var i = 0; i < containerFilterElm.length; i++) {
		containerFilterElm[i].addEventListener('click', initSigning);
		containerFilterElm[i].addEventListener('touchend', initSigning);
	}
	for (var i = 0; i < filtersAppliedElm.length; i++) {
		filtersAppliedElm[i].addEventListener('click', initSigning);
		filtersAppliedElm[i].addEventListener('touchend', initSigning);
	}
	for (var i = 0; i < productListerControlsElm.length; i++) {
		productListerControlsElm[i].addEventListener('click', initSigning);
		productListerControlsElm[i].addEventListener('touchend', initSigning);
	}

	for (var i = 0; i < resultCountSwitchContainerElm.length; i++) {
		resultCountSwitchContainerElm[i].addEventListener('click', initSigning);
		resultCountSwitchContainerElm[i].addEventListener('touchend', initSigning);
	}
}
//check location search(if ppl click on nav-bottom or filter)
setInterval(function(){
	addClickNav();
	addClickFilter();
}, 500);
//init signing for the first time
signing();
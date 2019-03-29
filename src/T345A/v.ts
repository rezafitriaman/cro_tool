
var customCode = () => {
	document.getElementsByTagName('html')[0].classList.add("t4u-T345A");
	let productPrice = document.getElementsByClassName('productPrice');
	let targetPdp = document.getElementsByClassName('productPrice-value');
	let containerOnPDP = document.getElementsByClassName('productListerTeaser-infoContainer');
	let colorSelectionLink = document.getElementsByClassName('colorSelection-link');
	let productPriceDiscount = document.getElementsByClassName('productPrice-discount');
	let targetPdpSlider = document.getElementsByClassName('slideCarousel-slidesContainer');
	let removeGreen = ():void => {
		for (var i = 0; i < targetPdp.length; i++) {
			if((<any>targetPdp[i]).parentNode.getElementsByClassName('productPrice-discount').length  > 0) {
				(<any>targetPdp[i]).removeAttribute("style");
			}
		}
	}
	let makeGreen = ():void => {
		for (var i = 0; i < targetPdp.length; i++) {
			if((<any>targetPdp[i]).parentNode.getElementsByClassName('productPrice-discount').length  > 0) {
				(<any>targetPdp[i]).style.color = 'green';
			}
		}
	}
	let checkIfDiscountedEnter = ():void => {
		//they add class on the element
		//this class must init first then our check
		setTimeout(function() { 
			for (var i = 0; i < productPriceDiscount.length; i++) {
				//if discount or not
				if((<any>productPriceDiscount[i]).classList.contains('is-hidden')) {
					removeGreen();
				}else {
					
				}

			}

		}, 100);
		
	}

	//they add class on the element
	//this class must init first then our check
	let checkIfDiscountedOut = ():void => {
		setTimeout(function(){ 
			for (var i = 0; i < productPriceDiscount.length; i++) {
				if((<any>productPriceDiscount[i]).classList.contains('is-hidden')) {
					removeGreen();
				}else {
					makeGreen();
				}
			}
		}, 100);
	}

	//MAIN
	//only PLP
	if(document.getElementsByClassName('visibleFacets-container').length > 0) {
		for (var i = 0; i < productPrice.length; i++) {
			//only an item that has discount must be green
			if((<any>productPrice[i]).parentNode.children.length > 1) {
				(<any>productPrice[i]).style.color = 'green';
			}
		}
	}

	//only PDP
	if(document.getElementsByClassName('productDetail-productTitle').length > 0) {

		for (var i = 0; i < targetPdp.length; i++) {
			if((<any>targetPdp[i]).parentNode.getElementsByClassName('productPrice-discount').length  > 0) {
				(<any>targetPdp[i]).style.color = 'green';
			}
		}

		for (var i = containerOnPDP.length - 1; i >= 0; i--) {
			if((<any>containerOnPDP[i]).getElementsByClassName('productListerTeaser-price')[0].children.length > 1) {
				(<any>containerOnPDP[i]).getElementsByClassName('productListerTeaser-price')[0].getElementsByClassName('productPrice')[0].style.color = 'green';
			}
		}

		if(colorSelectionLink.length > 0) {
			for (var i = colorSelectionLink.length - 1; i >= 0; i--) {
				(<any>colorSelectionLink[i]).addEventListener("mouseenter", checkIfDiscountedEnter);
				(<any>colorSelectionLink[i]).addEventListener("mouseout", checkIfDiscountedOut);
			}
		}
	}
}

var int = setInterval(function(){ customCode(); }, 1000);
setTimeout(function(){ clearInterval(int); }, 3000);


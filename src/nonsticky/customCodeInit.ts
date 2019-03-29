import {LogInput} from "./log"

export function customCodeInit(developEnvi: boolean):void {
  /*
  ==============================
  INIT CUSTOM LOG!!
  so we can make a switch(on/of) if we on development envi or nah
  ==============================
  */

  let c = new LogInput(developEnvi);

  /*
  ==============================
  BEGIN
  ==============================
  */

  let filterContainer_elm:HTMLCollection = document.getElementsByClassName('productLister-viewOptions-placeholder');
  let last_known_scroll_position: number = 0;
  let hide: boolean = false;
  let topNavigation_Elm: HTMLCollection = document.getElementsByClassName('topNavigation');

  //init =  when the user landing on the middel of the page
  //the filter must be hided 
  let myInterval = setInterval(function(){ 
    if(topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
      (<HTMLElement>topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions')[0]).style.display = 'none';
      clearInterval(myInterval);
    } 
  }, 100);

  //on scroll hide and show the filter
  window.addEventListener('scroll', function(e) {
    let offsetTop_FilterContainer = (<HTMLElement>filterContainer_elm[0]).offsetTop - 50;
    last_known_scroll_position = window.scrollY;

    //hide filter
    if(last_known_scroll_position - 50 > offsetTop_FilterContainer ) {
      if(topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
        (<HTMLElement>topNavigation_Elm[0].getElementsByClassName('productLister-viewOptions')[0]).style.display = 'none';
        hide = true;
      }
    } 

    //show filter
    if(last_known_scroll_position < offsetTop_FilterContainer ) {
      if(filterContainer_elm[0].getElementsByClassName('productLister-viewOptions').length > 0) {
        (<HTMLElement>filterContainer_elm[0].getElementsByClassName('productLister-viewOptions')[0]).style.display = 'block';
        hide = false;  
      }  
    }
  });

  /*
  ==============================
  END
  ==============================
  */
}
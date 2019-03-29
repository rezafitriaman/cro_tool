/*
==============================
MAKE SURE DEVELOPE ENVI SET TO FALSE ON PRODUCTION
==============================
*/

let developEnvi:boolean = false;
let testId = "t4u-AFMtest-2";

/*
==============================
APPEND ORIGIN JS ON DEVELOPMENT ENVI
==============================
*/

let appendJsOrigin = ():void => {
  // WHICH URL 
  var rawUrl = 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.42.0.24204';
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
}

//TEST ID
document.getElementsByTagName('html')[0].classList.add(testId);

/*
==============================
CONTENT!!! BEGIN
==============================
*/

let customCodeInit = () => {
  //BEGIN
  class MaandAflossen {
    aflosBedrag: string;
    left: string;

    persoonlijke_lening_maandbedrag: string;
    persoonlijke_lening_looptijd: string;
    persoonlijke_lening_rente: string;
    persoonlijke_lening_totalePrijst: string;

    doodlopend_krediet_maandbedrag: string;
    doodlopend_krediet_looptijd: string;
    doodlopend_krediet_rente: string;
    doodlopend_krediet_totalePrijst: string;
    insertValue: Function;

    procentTage: string;

    constructor(theVariantion: string) {
      // code...
      let variation : any = {
        v1 : {
          aflosbedrag: '150',
          left: '6.89655%',
          persoonlijke_lening: {
            maandbedrag: '150',
            looptijd: '37 <small>maanden</small>',
            rente: '6.5%',
            totalePrijst: '5.512,05'
          },
          doodlopend_krediet: {
            maandbedrag: '150',
            looptijd: '37 <small>maanden</small>',
            rente: '6%',
            totalePrijst: '5.469,18'
          },
          procentTage: '3'
        },
        v2 : {
          aflosbedrag: '200',
          left: '6.89655%',
          persoonlijke_lening: {
            maandbedrag: '200',
            looptijd: '27 <small>maanden</small>',
            rente: '6.5%',
            totalePrijst: '5.374,97'
          },
          doodlopend_krediet: {
            maandbedrag: '200',
            looptijd: '27 <small>maanden</small>',
            rente: '6%',
            totalePrijst: '5.344,55'
          },
          procentTage: '4'
        },
        v3 : {
          aflosbedrag: '',
          left: '0%',
          persoonlijke_lening: {
            maandbedrag: '-',
            looptijd: '- <small>maanden</small>',
            rente: '-',
            totalePrijst: '-'
          },
          doodlopend_krediet: {
            maandbedrag: '-',
            looptijd: '- <small>maanden</small>',
            rente: '-',
            totalePrijst: '-'
          },
          procentTage: '0'
        },
        v4 : {
          aflosbedrag: '100',
          left: '3.44828%',
          persoonlijke_lening: {
            maandbedrag: '100',
            looptijd: '59 <small>maanden</small>',
            rente: '6.5%',
            totalePrijst: '5.817,23'
          },
          doodlopend_krediet: {
            maandbedrag: '100',
            looptijd: '58 <small>maanden</small>',
            rente: '6%',
            totalePrijst: '5.743,98'
          },
          procentTage: '2'
        },
      };

      this.aflosBedrag = variation[theVariantion].aflosbedrag;
      this.left = variation[theVariantion].left;
      this.persoonlijke_lening_maandbedrag = variation[theVariantion].persoonlijke_lening.maandbedrag;
      this.persoonlijke_lening_looptijd = variation[theVariantion].persoonlijke_lening.looptijd;
      this.persoonlijke_lening_rente = variation[theVariantion].persoonlijke_lening.rente;
      this.persoonlijke_lening_totalePrijst = variation[theVariantion].persoonlijke_lening.totalePrijst;
      this.doodlopend_krediet_maandbedrag = variation[theVariantion].doodlopend_krediet.maandbedrag;
      this.doodlopend_krediet_looptijd = variation[theVariantion].doodlopend_krediet.looptijd;
      this.doodlopend_krediet_rente = variation[theVariantion].doodlopend_krediet.rente;
      this.doodlopend_krediet_totalePrijst = variation[theVariantion].doodlopend_krediet.totalePrijst;
      this.procentTage = variation[theVariantion].procentTage

      //change in mogelijk leenvormen Box
      this.insertValue = (targetElm: any, maandbedrag: any, looptijd: any, rente: any, totalePrijst: any):void => {
        for (var i = 0; i < targetElm[0].getElementsByTagName('li').length; i++) {
          let target:HTMLElement = targetElm[0].getElementsByTagName('li')[i];
          let targetValue:Element = target.getElementsByClassName('offertestraat__results__list__value')[0];
          if(target.classList.contains('offertestraat__results__list__maandtermijn')) {
            //change maandtermijn value
            targetValue.innerHTML = maandbedrag;
          }else if(target.classList.contains('offertestraat__results__list__looptijd')) {
            //change looptijd value
            targetValue.innerHTML = looptijd;
          }else if(target.classList.contains('offertestraat__results__list__rente')) {
            //change rente value
            targetValue.innerHTML = rente;
          }else if(target.classList.contains('offertestraat__results__list__totale-prijs')) {
            //change totale-prijs value 
            targetValue.innerHTML = totalePrijst;
          }
        }
      }
    }
    insert() {
      //desktop and tablets
      let fieldAflosbedrag_elm = <HTMLInputElement>document.getElementById('field-aflosbedrag');
      let plContainer_elm: HTMLCollectionOf<Element> = document.getElementsByClassName('offertestraat__results__pl');
      let dkContainer_elm: HTMLCollectionOf<Element> = document.getElementsByClassName('offertestraat__results__dk');
      let blueSliderAflossen_elm: HTMLCollectionOf<Element> = document.querySelectorAll('[name="fieldset-monthly"]')[0].getElementsByClassName('noUi-origin');
      let defaultPaymentPercentage_elm = <HTMLInputElement>document.getElementById('DefaultPaymentPercentage');
      //mobile
      let plContainerTotalPriceMobile_elm: HTMLCollectionOf<Element> = document.getElementsByClassName('offertestraat__results__footer-mobile__pl');
      let dkContainerTotalPriceMobile_elm: HTMLCollectionOf<Element> = document.getElementsByClassName('offertestraat__results__footer-mobile__dk');
      //loop through PL en DK and change the content
      //desktop and tablets
      this.insertValue(plContainer_elm, this.persoonlijke_lening_maandbedrag, this.persoonlijke_lening_looptijd, this.persoonlijke_lening_rente, this.persoonlijke_lening_totalePrijst);
      this.insertValue(dkContainer_elm, this.doodlopend_krediet_maandbedrag, this.doodlopend_krediet_looptijd, this.doodlopend_krediet_rente, this.doodlopend_krediet_totalePrijst);
      // mobile
      plContainerTotalPriceMobile_elm[0].getElementsByClassName('offertestraat__results__mobile-totale-prijs')[0].innerHTML = this.persoonlijke_lening_totalePrijst;
      dkContainerTotalPriceMobile_elm[0].getElementsByClassName('offertestraat__results__mobile-totale-prijs')[0].innerHTML = this.doodlopend_krediet_totalePrijst;
      //change input value
      fieldAflosbedrag_elm.value = this.aflosBedrag;
      //change left value slider
      (<HTMLElement>blueSliderAflossen_elm[0]).style.left = this.left;
      //change precentage value
      (<HTMLInputElement>defaultPaymentPercentage_elm).value = this.procentTage;
    }
    addText() {
      let text:string = `<i>Gebruik de balk om een aflosbedrag te kiezen.</i>`;
      let target: HTMLElement = document.getElementById('monthly');

      target.insertAdjacentHTML('afterend', text);

    }
  }

  class V1 extends MaandAflossen {
    constructor(variation: string = 'v1') {
      // code...
      super(variation);
    }
    insert() {
      super.insert();
    }
  }

  class V2 extends MaandAflossen {
    constructor(variation: string = 'v2') {
      // code...
      super(variation);
    }
    insert() {
      super.insert();
    }
  }

  class V3 extends MaandAflossen {
    constructor(variation: string = 'v3') {
      // code...
      super(variation);
    }
    insert() {
      var x: any = window.matchMedia("(max-width: 500px)")
      let event :string = 'ontouchend' in window ? 'touchend' : 'mouseup'; 
      let fieldsetMonthly_elm: Element = document.querySelectorAll('[name="fieldset-monthly"]')[0];
      let fieldsetAmount_elm: Element = document.querySelectorAll('[name="fieldset-amount"]')[0];
      let blueSliderAflossenBackground_elm: HTMLCollectionOf<Element> = fieldsetMonthly_elm.getElementsByClassName('noUi-target');
      let blueSliderAflossen_elm: HTMLCollectionOf<Element> = fieldsetMonthly_elm.getElementsByClassName('noUi-origin');
      let blueSliderLenen_elm: HTMLCollectionOf<Element> = fieldsetAmount_elm.getElementsByClassName('range-slider-wrapper');
      let noUiBackground_elm: HTMLCollectionOf<Element> = fieldsetMonthly_elm.getElementsByClassName('noUi-background');
      let fieldsetMonthlyInput_elm: HTMLCollectionOf<Element> = fieldsetMonthly_elm.getElementsByTagName('input');
      let sliderParentAflosBedrag_elm: Element = document.getElementsByClassName('js-input-slider')[1];
      let inlutAflosBedrag_elm: Element = document.getElementsByClassName('range-slider-wrapper')[1];
      let atMedia = (x):void => {
        if (x.matches) { // If media query matches
          //to fix the blue background on mobile on slider
          hideBlueBackGround();
          showBlueBackGround();
        }
      }
      let insert = ():void =>{
        super.insert();
      }

      //hide the blue slider
      let displayNoneSlider = ():void => {
        (<HTMLElement>blueSliderAflossen_elm[0].getElementsByClassName('noUi-handle')[0]).style.display = 'none';
      }

      //hide blue background on mobile on slider
      let hideBlueBackGround = ():void => {
        //to hide we overwhrite is with gray color
        var style = `
        <style class="t4u-custom-style">
           fieldset[name="fieldset-monthly"] .noUi-target:before {
             background-color: #ced3db!important;
           }
        </style>`;
        //if it exist then dont add it again
        if(document.getElementsByClassName('t4u-custom-style').length == 0) {
          document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
        }
      }

      //show blue background again
      let showBlueBackGround = ():void => {
        //to show blue background again we remove our custom blue style
        function remove() {
          let customStyle: HTMLCollection = document.getElementsByClassName('t4u-custom-style');

          for (var i = 0; i < customStyle.length; i++) {
             customStyle[i].remove();
           } 
        }
        //on click on slider aflosbedraag we remove it
        sliderParentAflosBedrag_elm.addEventListener(event, function() {
          remove();
        });
         //on click on input aflosbedraag we remove it
        inlutAflosBedrag_elm.addEventListener(event, function() {
          remove();
        });
      }

      //on click or touch on blue slider lenen section we make color input transparant and init functions
      (<HTMLElement>blueSliderLenen_elm[0]).addEventListener(event, function() {
        (<HTMLElement>fieldsetMonthlyInput_elm[0]).style.color = 'transparent';
        //wait til their js work foor 800ms
        setTimeout(function(){
          //insert all this function is form the MaandAflossen class
          insert();
          //delete the slider
          displayNoneSlider();
          //hide blue background only for mobile
          hideBlueBackGround();
        }, 800);
      });

      // on click on the input make the text black again
      (<HTMLElement>fieldsetMonthlyInput_elm[0]).addEventListener(event, function () {
        this.style.color = 'black';
      });

      //on mouse down on the slider make the input text black again
      (<HTMLElement>blueSliderAflossenBackground_elm[0]).addEventListener(event, function () {
        (<HTMLElement>fieldsetMonthlyInput_elm[0]).style.color = 'black';
      });

      //init function for the first time
      displayNoneSlider();
      atMedia(x) // Call listener function at run time

      x.addListener(atMedia) // Attach listener function on state changes

      // insert function from the class MaandAflossen with a super 
      super.insert();
      super.addText();
    }
  }

  class V4 extends MaandAflossen {
    constructor(variation: string = 'v4') {
      // code...
      super(variation);
    }
    insert() {
      super.insert();
    }
  }

  //creat instant object
  let v = new V4();
  //init code when the box: mogelijke leenvormen has showed
  let inter = setInterval(function(){
    if((<HTMLElement>document.getElementsByClassName('offertestraat__results offertestraat__results--leenbedrag')[0]).style.display != 'none') {
      v.insert();
      clearInterval(inter);
    } 
  }, 300);

  //END
}

/*
==============================
CONTENT!!! END
==============================
*/

//DEV ENVI OR NAH
if(developEnvi) {
  console.log('%c!---------DEV ENVI + ' + testId + '---------!',  "color: green; font-size:18px;" )
  appendJsOrigin();
  customCodeInit();
}else {
  customCodeInit();
}
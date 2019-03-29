import {prodId} from "./prodId"

export function customCodeInit():void {

  /*
  ==============================
  BEGIN
  ==============================
  */

  let targetContainersElm: HTMLCollection = document.getElementsByClassName('productListerTeaser');
  let productId: string[] = prodId();
  let reg: RegExp = /(d?\w+-(\w+)-(\w+))/g;

  for (var i = 0; i < targetContainersElm.length; i++) {
        for (var j = 0; j < productId.length; j++) {

            if ((<string>targetContainersElm[i].getAttribute("href")).match(reg)[0] == productId[j]) {
              // code...
              let target: Element = targetContainersElm[i].getElementsByClassName('productListerTeaser-imageContainer')[0].getElementsByClassName('productListerTeaser-image--secondary')[0];
              let newId: string = target.getAttribute('data-srcset').replace(/(F02)/g, 'W04');
              targetContainersElm[i].getElementsByClassName('productListerTeaser-imageContainer')[0].getElementsByClassName('productListerTeaser-image--secondary')[0].setAttribute('data-srcset', newId);
            }
        }
  }

  /*
  ==============================
  END
  ==============================
  */
}
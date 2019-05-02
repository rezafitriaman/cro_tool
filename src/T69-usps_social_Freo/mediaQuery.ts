export function MediaQuery(target:any):any {
    return class extends target {

           constructor() {
            super();
          }
        mediaQuery(maxWidth:string= '767') {
            let media: Object;
            let device = {
                MOBILE: 'mobile',
                DESKTOP_OR_TABLET: 'desktop or tablet'
            }
            let width:any = window.matchMedia("(max-width:" + maxWidth + "px)");
    
            if (width.matches) { // If media query matches
                media = device.MOBILE;
            } else {
                media = device.DESKTOP_OR_TABLET;
            }

            return media;
        }
    }
};

/*
==============================
IMPORT MODULE | STATIC
its needed for eatch project
==============================
*/

import {LogInput} from "./log"
import {Language} from "./language"
import {Country} from "./country"
import {Cookie} from "./cookie"

/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/

export function data():Object {
  const envi:Object = {
    develop: true,
    testId:  'decorators',
    urlOrigin: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
  }
  return envi;
}

export function customCodeInit (developEnvi:boolean):void {
  /*
  ==============================
  INIT CUSTOM LOG, language, country | STATIC
  so we can make a switch(on/of) if we on development envi or nah
  ==============================
  */

  //detect envi
  let c = new LogInput(developEnvi);

  //detect language
  let lang = new Language();
  let l = lang.which();

  //detect country
  let country = new Country();
  let co = country.which(); 

  //detect if cookie has gender entity
  let cookie  = new Cookie();
  let gender =  cookie.check('gender')

  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */

  const httpEndpoints:any = {};
  var count = 1;
  function registerEndpointFactory(endpointPath:any) {
   
    console.log('one');
    return function registerEndpoint(constructor:any) {
    console.log('two');
      let test = new constructor();
      console.log(count)
      httpEndpoints['aaa' + count] = new constructor();
      count++;
    }
    
  }


  function protect(token:any) {
    return function(target:any, propertyKey:any, descriptor:any) {
      const originalFunction = descriptor.value;

      descriptor.value = function(request:any) {
        if (request.token !== token) {
          throw new Error("forbiden!");
        }
        const bindedOriginalFunction = originalFunction.bind(this);
        const result = bindedOriginalFunction(request);
        return result;
      };

      return descriptor;
    };
  }

  @registerEndpointFactory("/families/stark/members")
  class StarkMembers {
    private members = ["Robb", "Sansa", "Arya"];

    get() {
      return this.members;
    }

   @protect("abc")
    post(request:any) {
      this.members.push(request.body);
    }
  }

  @registerEndpointFactory("/families")
  class Families {

    private houses = ["Lannister", "Targaryen"];

    get() {
      return this.houses;
    }
    post(request:any) {
      this.houses.push(request.body);
    }
  }

  @registerEndpointFactory("/castles")
  class Castles {
    private castles = ["Winterfell", "Casterly Rock"];

    get() {
      return this.castles;
    }
    post(request:any) {
      this.castles.push(request.body);
    }
  }


  console.log(httpEndpoints) // {"/families/stark/members": StarkMembers}
  /*httpEndpoints["/families/stark/members"].get() // ["Robb", "Sansa", "Arya"]*/

  /*httpEndpoints["/families"].post({token: "abc"}) // ["Lannister", "Targaryen"]*/
  /*httpEndpoints["/families"].post({}) */// Uncaught Error: forbiden!

  


  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */

}
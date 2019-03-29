/*
  Copy/paste this script in the console in the browser and press enter to excecute the script. (ctr+shift+i opens console)
  Before you excecute the script make sure you are logged in to dynamic advertising.
*/

let clientList = [
  {clientName:'ahold', clientId: 24},
  {clientName:'BagageOnline.nl', clientId: 78},
  {clientName:'BAS Trucks', clientId: 88},
  {clientName:'Bax-Shop', clientId: 26},
  {clientName:'Beerwulf', clientId: 77},
  {clientName:'bol.com', clientId: 7},
  {clientName:'BookerZzz', clientId: 58},
  {clientName:'Bookit', clientId: 105},
  {clientName:'Brandfield', clientId: 61},
  {clientName:'Compare Group', clientId: 72},
  {clientName:'Couverts', clientId: 11},
  {clientName:'Elmar Reizen', clientId: 6},
  {clientName:'IGO-Post', clientId: 33},
  {clientName:'Kras', clientId: 23},
  {clientName:'NRV B.V.', clientId: 43},
  {clientName:'Omoda', clientId: 47},
  {clientName:'PrintAbout', clientId: 56},
  {clientName:'Replace Direct', clientId: 28},
  {clientName:'Reprise Austria', clientId: 76},
  {clientName:'Reprise Belgium', clientId: 70},
  {clientName:'Reprise Denmark', clientId: 74},
  {clientName:'Reprise Hungary', clientId: 104},
  {clientName:'Shirts of Holland', clientId: 92},
  {clientName:'Sundio', clientId: 3},
  {clientName:'TUI', clientId: 13},
  {clientName:'wehkamp', clientId: 12},
  {clientName:'WTC', clientId: 62}
];

function printErrorsInConsole(errorArray) {
  for(let x = 0; x < errorArray.length; x++){
    var localClientErrorArray = errorArray[x].clientErrorArray;
    // -> hier gaat het om, de localClientErrorArray is wel gevult maar de .length is nul
    console.log(localClientErrorArray.length);
    console.log(`${errorArray[x].clientName}: ${localClientErrorArray.length} error(s)`);

    if(localClientErrorArray.length > 0) {
      for(let y = 0; y < localClientErrorArray.length; y++) {
        console.log(`${localClientErrorArray[y].projectName}: ${localClientErrorArray[y].projectError}`);
      }
    }
    console.log('')
  }
}

function startCount() {
  let count = 0;
  let errorArray = [];

  let interval = setInterval(function() {
    setTimeout(function() {
      let clientName = clientList[count].clientName;
      let clientId = clientList[count].clientId;
      let clientErrors = [];

      fetch(`https://da.bgenius.com/api/groups/${clientId}/adwords-search/projects?`)
      .then(dataWrappedByPromise => dataWrappedByPromise.json())
      .then(data => {
        for(let x = 0; x < data.length; x++) {
          try {
            if(data[x].projectExecution.exception) {
              clientErrors.push({projectName: data[x].name, projectError: data[x].projectExecution.exception.type});
            }
          } catch{}
        }
      });

      errorArray.push({clientName: clientList[count].clientName, clientErrorArray: clientErrors});
      count++;
      if(count >= clientList.length) {
        printErrorsInConsole(errorArray);
        clearInterval(interval);
      }
    }, 250)
  }, 500)
}

startCount();
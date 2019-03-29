export function appendJsOrigin(testId:string, urlOrigin: string):void {
  // WHICH URL 
  var rawUrl = urlOrigin;
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

  //TEST ID
  document.getElementsByTagName('html')[0].classList.add(testId);
} 
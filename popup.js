document.addEventListener('DOMContentLoaded', () => {

  // automatically translate all highlighted text if on
  var translateIsOn = false;
  var button = document.getElementById('translate');

  // toggles whether auto translate is on
  button.addEventListener('click', () => {
    if (translateIsOn) {
      translateIsOn = false;
    }
    else {
      console.log('button clicked');
      translateIsOn = true;
    }
  });

//doing the translation
var language;
function translate(){
  language = document.forms[0].browsers.value;
}

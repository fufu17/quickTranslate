button = document.getElementById('translate');

// automatically translate all highlighted text if on
var translateIsOn = false;

document.addEventListener('DOMContentLoaded', () => {

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

  // grab text to translate
  document.addEventListener('mouseup', () => {
    if (translateIsOn && window.getSelection().toString() != "") {
      textToTranslate = window.getSelection().toString()
      console.log(textToTranslate);
    }
  })


});

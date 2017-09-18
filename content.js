document.addEventListener('mouseup', () => {
  //grab text
  console.log('mouseup detected');
  var textToTranslate = getSelectedText();
  if (textToTranslate != '') {
    console.log(textToTranslate);
    chrome.runtime.sendMessage(textToTranslate, () => {
       //callback
       console.log('text sent to extension', textToTranslate);
    });
  }
});



getSelectedText = () => {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
};

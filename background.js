chrome.runtime.onMessage.addListener((message) => {
  console.log('in popup');
  console.log('text recevied from listener is');
  console.log(message);
});


//translation
var translated;
function setup(){
  LoadJSON("https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20170918T004230Z.70351149f7a265d6.331e598e12163d8d2f39f31482e158c2ed696b52&lang=en&text=" + message, translatedData);
}

function translatedData(data){
  translated = data;
  console.log(data);
}

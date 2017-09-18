// not working yet
chrome.runtime.onMessage.addListener((message) => {
  console.log('in popup');
  console.log('text recevied from listener is');
  console.log(message);
});

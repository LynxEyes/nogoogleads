chrome.webNavigation.onCompleted.addListener(function() {
  chrome.tabs.executeScript({
    code: 'document.getElementById("tads").remove()'
  });
}, {url: [{urlMatches : 'https://www.google..*/'}]});

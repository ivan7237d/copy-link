'use strict';

chrome.browserAction.onClicked.addListener(currentTab => {
  let link = document.createElement('a');
  link.href = currentTab.url;
  link.innerText = currentTab.title;
  let eventHandler = e => {
    e.clipboardData.setData('text/html', link.outerHTML);
    e.preventDefault();
    document.removeEventListener('copy', eventHandler);
  };
  document.addEventListener('copy', eventHandler);
  document.execCommand('copy');
  chrome.browserAction.setBadgeText({text: '✔'});
  window.setTimeout(() => chrome.browserAction.setBadgeText({text: ''}), 500);
});

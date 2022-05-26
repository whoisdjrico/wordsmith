// background.js

async function getCurrentTab() {

  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['jquery-3.6.0.min.js', 'content-script.js']
  })

}
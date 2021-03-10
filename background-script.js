console.log("Background script loaded!!!");

const handleMessage = (request, sender, sendResponse) => {
  console.log("Message from content script: ", request);
  sendResponse({ response: "SUCCESS" });
};

browser.runtime.onMessage.addListener(handleMessage);

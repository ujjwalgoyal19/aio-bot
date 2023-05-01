/**
 * The event is fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.
 * * The 'reason' property of 'details' can contain one of the following values:
 * @param install: The extension was installed.
 * @param update: The extension was updated to a new version.
 * @param chrome_update: Chrome was updated to a new version.
 * @param shared_module_update: A shared module was updated to a new version.
 *******************************************************************************
 * On install we open the following tabs:
 * * https://chat.openai.com/auth/login
 * * https://www.bing.com/fd/auth/signin?action=interactive&provider=windows_live_id&return_url=https://www.bing.com/
 * * https://accounts.google.com/
 * * So that user can login to the accounts and use the extension.
 */
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    chrome.tabs.create({ url: "https://chat.openai.com/auth/login" });
    chrome.tabs.create({
      url: "https://www.bing.com/fd/auth/signin?action=interactive&provider=windows_live_id&return_url=https://www.bing.com/",
    });
    chrome.tabs.create({
      url: "https://accounts.google.com/",
    });
  }
});

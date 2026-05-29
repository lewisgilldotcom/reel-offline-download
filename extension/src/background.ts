chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

import getCurrentBrowserUrl from "./getCurrentBrowserUrl";
import downloadUrl from "./downloadUrl";

async function checkUpdate() {
    
}
// Get the URL when the user changes tab
chrome.tabs.onActivated.addListener(async () => { /* Mark listener as asyncronous so we can use getCurrentBrowserUrl */
    const url = await getCurrentBrowserUrl()
    await downloadUrl(url)
});

// If the user navigates to new link within the same tab, get the URL again
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
    if (changeInfo.status === "complete") { // Wait until it's finished loading to get the URl
        const url = await getCurrentBrowserUrl();
        await downloadUrl(url)
    }
});
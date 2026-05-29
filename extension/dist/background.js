"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/getCurrentBrowserUrl.ts
  function getCurrentBrowserUrl() {
    return new Promise((resolve) => {
      chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        const current_url = tabs[0].url ?? "";
        console.log(current_url);
        resolve(current_url);
      });
    });
  }
  var init_getCurrentBrowserUrl = __esm({
    "src/getCurrentBrowserUrl.ts"() {
      "use strict";
    }
  });

  // src/downloadUrl.ts
  async function downloadUrl(url) {
    const response = await fetch("http://localhost:3000/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    if (!response.ok) {
      console.error("Download failed:", await response.json());
    }
  }
  var init_downloadUrl = __esm({
    "src/downloadUrl.ts"() {
      "use strict";
    }
  });

  // src/background.ts
  var require_background = __commonJS({
    "src/background.ts"() {
      init_getCurrentBrowserUrl();
      init_downloadUrl();
      chrome.runtime.onInstalled.addListener(() => {
        console.log("Extension installed");
      });
      chrome.tabs.onActivated.addListener(async () => {
        const url = await getCurrentBrowserUrl();
        await downloadUrl(url);
      });
      chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
        if (changeInfo.status === "complete") {
          const url = await getCurrentBrowserUrl();
          await downloadUrl(url);
        }
      });
    }
  });
  require_background();
})();

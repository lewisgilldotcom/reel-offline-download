"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/popup.ts
  var require_popup = __commonJS({
    "src/popup.ts"() {
      async function checkServer() {
        try {
          const response = await fetch("http://localhost:3000/health");
          return response.ok;
        } catch {
          return false;
        }
      }
      document.addEventListener("DOMContentLoaded", async () => {
        const serverRunning = await checkServer();
        const status = document.getElementById("status");
        if (!serverRunning) {
          status.textContent = "\u26A0\uFE0F Server not running. Run npm start in the server folder.";
          status.style.color = "red";
        } else {
          status.textContent = "\u2705 Server running.";
          status.style.color = "green";
        }
      });
    }
  });
  require_popup();
})();

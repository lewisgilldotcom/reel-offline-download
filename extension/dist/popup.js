"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/popup.ts
  var require_popup = __commonJS({
    "src/popup.ts"() {
      document.addEventListener("DOMContentLoaded", () => {
        console.log("Popup loaded");
      });
    }
  });
  require_popup();
})();

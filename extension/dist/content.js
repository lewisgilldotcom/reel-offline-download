"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/content.ts
  var require_content = __commonJS({
    "src/content.ts"() {
      var body = document.body;
      if (body) {
        body.style.backgroundColor = "lightblue";
      }
    }
  });
  require_content();
})();

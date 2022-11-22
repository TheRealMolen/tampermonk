// ==UserScript==
// @name         Cuda Guide legibility
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html
// @icon         https://developer-blogs.nvidia.com/wp-content/themes/nvidia/dist/images/favicon_300a1064.ico
// @grant        none
// ==/UserScript==

(function() {
    const css = `
pre { white-space: pre !important; font-size: 85%; }
#contents { padding: 1em 18.5em !important; }
`;

    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.body.appendChild(style);
})();

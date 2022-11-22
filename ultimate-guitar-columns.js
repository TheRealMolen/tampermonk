// ==UserScript==
// @name         Ultimate Guitar Tab Columns
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       molen
// @match        https://tabs.ultimate-guitar.com/tab/*
// @icon         https://www.google.com/s2/favicons?domain=ultimate-guitar.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
body > div > div { max-width: 100% !important; }
main > div:first-child { display:none; }
article > section {
    margin-right: 1rem !important;
}
main article article {
    grid-template-areas:
        "header"
        "content" !important;
    grid-template-columns: max-content;
}
section > div > section > code > pre {
    display: flex;
    flex-flow: column wrap;
    height: 1000px;
}
`;

    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.body.appendChild(style);
})();

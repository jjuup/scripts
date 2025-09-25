// ==UserScript==
// @name         Muusikoiden Dark Neon Theme
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Dark neon theme for muusikoiden.net (includes tori)
// @author       JesseJ
// @match        https://muusikoiden.net/*
// @match        https://muusikoiden.net/tori/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Load Google Fonts
    const fontsCss = document.createElement('link');
    fontsCss.rel = 'stylesheet';
    fontsCss.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;900&family=Space+Grotesk:wght@400;500;700&display=swap';
    document.head.appendChild(fontsCss);

    // Dark Neon CSS (including explicit aside / #main fixes)
    GM_addStyle(`
/* Top-level dark base */
html, body, #wrapper, #container, .content, .main, .bg, .page, .tori, .palsta,
[id*="wrap"], [class*="wrap"] {
    background: #000000 !important;
    color: #22cc22 !important;
    font-family: 'Space Grotesk', sans-serif !important;
}

/* Kill any background images/gradients globally */
* {
    background-image: none !important;
}

header{
    display: none;}

#logo {
    display: none;}

/* Ensure aside is dark (and nothing bleeds through) */
aside,
aside * {
    background: #000000 !important;
    background-image: none !important;
    color: #000000 !important;
    border-right: 1px solid #003300;
}

aside a, aside a:hover, aside a:visited{
    font-family: 'Space Grotesk', 'Arial', 'Helvetica', sans-serif;
    font-weight: 600;
    font-size: 1em;
    text-transform: uppercase;
    text-decoration: none;
    text-shadow: #none;
    display: block;
    border: 1px solid #000000;
    padding: 5px;
}

aside hr {
    display: none;
}

content-wrapper *{
    color: #22cc22 !important;
}

DIV.tori-inline-selector{
    border: none;
    border-radius: 0px;
    box-shadow: none;
}

TABLE.tori-advert, TABLE.wanted-advert {
    width: 100%;
    padding: 20px;
    line-height: 1.6;
    margin-bottom: 20px;
    border: solid #000000;
    border-bottom: 1px solid #003300;
    border-collapse: separate;
    overflow: hidden;
}
TABLE.tori-advert TR TD IMG, TABLE.tori-advert-compact TR TD IMG, TABLE.wanted-advert TR TD IMG, IMG.image-tori, IMG.image-wanted {
    border: none;
    border-radius: 0px;
    box-shadow: none;
}
#login-information a, #login-information a:visited, #login-information a:hover{
    border-bottom: none;
    color: #003030;
    border: 0px solid #fff;
    padding: none;
}

/* Ensure #main is dark and text is light (overrides site setting like color: #000) */
#main,
#main * {
    background: #000000 !important;
    background-image: none !important;
    color: #22cc22 !important;
}

/* Headings / titles */
h1,h2,h3,h4,h5,h6,.page-title,.post-title {
    font-family: 'Sora', sans-serif !important;
}

/* Links */
a,a:visited { color:#25a10f !important; }
a:hover { color:#39ff14 !important; }

/* Listings / cards */
.post,.listing,.tori-listing,.item,.card,.palsta td,.palsta tr {
    background: #1a1a1e !important;
    border: 1px solid #333 !important;
}

/* Price highlight */
.tori-listing .price,.listing .price { color:#ff00ff !important; }

/* Buttons / inputs */
button,input[type="submit"],.btn {
    background: #222 !important;
    color:#39ff14 !important;
    border:1px solid #003300 !important;
}
button:hover,.btn:hover {
    background:#39ff14 !important;
    color:#1a1a1e !important;
}

/* Forms */
input,textarea,select {
    background:#1a1a1e !important;
    color:#e0e0e0 !important;
    border:1px solid #555 !important;
}

/* Header / Footer / Nav */
header,footer,nav,.navbar,.menu {
    background:#000000 !important;
    border:none !important;
}

/* Small utility: ensure text-muted/timestamps remain readable */
.time, .meta, .small, .muted {
    color: #9b9b9b !important;
}
    `);
})();

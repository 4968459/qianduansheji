// ==UserScript==
// @name         移动端b站精简
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  精简b站的移动端
// @author       You
// @match        *m.bilibili.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var remove_downloadApp = function () {
        // var foot = document.querySelector(".index__container__src-commonComponent-bottomOpenApp-");
        // foot.style.display = "none";
        $(".index__container__src-commonComponent-bottomOpenApp-")[0].remove();
        $(".index__openAppBtn__src-commonComponent-topArea-")[0].remove();
        $(".index__openAppBtn__src-commonComponent-topArea-")[0].remove();
        
        var appOpen = $(".index__desc__src-videoPage-related2Col-videoItem-").children()
        appOpen.forEach((item,i)=>{
            if(i%2==1){
                item.remove()
            }
        })

    };
    
    remove_downloadApp()
    // Your code here...
})();
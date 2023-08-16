# rem适配函数

```
//原型尺寸为750时。如果为375则将函数中的750替换为375。此时项目里的px处以100即可换算为rem。
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 750) {
            docEl.style.fontSize = "100px";
        } else {
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
    }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded',recalc, false);
}) (document, window);


```
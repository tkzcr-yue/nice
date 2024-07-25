function addMeta(name,content){//手动添加mate标签
    let meta = document.createElement('meta');
    meta.content=content;
    meta.name=name;
    document.getElementsByTagName('head')[0].appendChild(meta);
}
addMeta('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');

/*(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 1500) {
            docEl.style.fontSize = '100px';
        } else if (clientWidth >= 1000) {
            docEl.style.fontSize = 100 * (clientWidth / 1500) + 'px';
        } else if (clientWidth > 750 && clientWidth < 1000) {
            docEl.style.fontSize = 100 * (1000 / 1000) + 'px';
        } else if (clientWidth <= 750) {
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);*/

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=751){
              docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
            }else{
              docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                // docEl.style.fontSize = '100px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc();
})(document, window);
(function(doc, win) {
    let docEl = doc.documentElement
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        win.recalc = function() {
            // @TODO
            console.error('屏幕旋转')
            let clientWidth = docEl.clientWidth
            if (!clientWidth) return
            docEl.style.fontSize = 20 * (clientWidth / 375) + 'px'
        }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
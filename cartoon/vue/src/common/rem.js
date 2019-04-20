(function(doc, win) {
    let docEl = doc.documentElement
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            let clientWidth = 375//docEl.clientWidth
            if (!clientWidth){
                return
            }
            let fontSize=20 * (clientWidth / 375) + 'px'
            console.warn('fontSize======',fontSize)
            docEl.style.fontSize = fontSize
        }
    if (!doc.addEventListener){
        return
    }
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
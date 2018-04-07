// 改变根目录的字体大小：

! function(e, t) {
    function i() {
        var t = r.getBoundingClientRect().width,
            i = /(iPhone|iPod|iPad|Android|ios|Windows Phone)/gim.test(navigator.userAgent),
            n = i && t / l > 750 ? t : 750;
        t / l > n && (t = n * l);
        var a = t / 10;
        r.style.fontSize = a + "px", d.rem = e.rem = a
    }
    var n, a = e.document,
        r = a.documentElement,
        o = a.querySelector('meta[name="viewport"]'),
        s = a.querySelector('meta[name="flexible"]'),
        l = 0,
        m = 0,
        d = t.flexible || (t.flexible = {});
    if (o) {
        // console.warn("将根据已有的meta标签来设置缩放比例");
        var c = o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        c && (m = parseFloat(c[1]), l = parseInt(1 / m))
    } else if (s) {
        var p = s.getAttribute("content");
        if (p) {
            var u = p.match(/initial\-dpr=([\d\.]+)/),
                f = p.match(/maximum\-dpr=([\d\.]+)/);
            u && (l = parseFloat(u[1]), m = parseFloat((1 / l).toFixed(2))), f && (l = parseFloat(f[1]), m = parseFloat((1 / l).toFixed(2)))
        }
    }
    if (!l && !m) {
        var h = (e.navigator.appVersion.match(/android/gi), e.navigator.appVersion.match(/iphone/gi)),
            v = e.devicePixelRatio;
        l = h ? v >= 3 && (!l || l >= 3) ? 3 : v >= 2 && (!l || l >= 2) ? 2 : 1 : 1, m = 1 / l
    }
    if (r.setAttribute("data-dpr", l), !o)
        if (o = a.createElement("meta"), o.setAttribute("name", "viewport"), o.setAttribute("content", "initial-scale=" + m + ", maximum-scale=" + m + ", minimum-scale=" + m + ", user-scalable=no"), r.firstElementChild) r.firstElementChild.appendChild(o);
        else {
            var b = a.createElement("div");
            b.appendChild(o), a.write(b.innerHTML)
        }
    e.addEventListener("resize", function() { clearTimeout(n), n = setTimeout(i, 300) }, !1), e.addEventListener("pageshow", function(e) { e.persisted && (clearTimeout(n), n = setTimeout(i, 300)) }, !1), "complete" === a.readyState ? a.body.style.fontSize = 12 * l + "px" : a.addEventListener("DOMContentLoaded", function(e) { a.body.style.fontSize = 12 * l + "px" }, !1), i(), d.dpr = e.dpr = l, d.refreshRem = i, d.rem2px = function(e) { var t = parseFloat(e) * this.rem; return "string" == typeof e && e.match(/rem$/) && (t += "px"), t }, d.px2rem = function(e) { var t = parseFloat(e) / this.rem; return "string" == typeof e && e.match(/px$/) && (t += "rem"), t }
}(window, window.lib || (window.lib = {})),
function() {
    for (var e = ["IE=edge", "yes", "yes", "telephone=no,email=no", "fullscreen=yes,useHistoryState=yes,transition=yes"], t = ["", "apple-mobile-web-app-capable", "apple-touch-fullscreen", "format-detection", "App-Config"], i = "X-UA-Compatible", n = document.getElementsByTagName("head")[0], a = n.getElementsByTagName("title")[0], r = 0; r < e.length; r++) {
        var o = document.createElement("meta");
        o.setAttribute("content", e[r]), "IE=edge" == e[r] ? o.setAttribute("http-equiv", i) : o.setAttribute("name", t[r]), n.insertBefore(o, a)
    }
    var s = document.createElement("link");
    s.setAttribute("rel", "shortcut icon"), s.setAttribute("href", "./favicon.ico"), s.setAttribute("type", "image/x-icon"), n.insertBefore(s, a)
}();

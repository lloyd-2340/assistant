!(function (e) {
    "function" == typeof define && define.amd ? define(e) : e();
})(function () {
    "use strict";
    var e = Object.defineProperty,
        t = (t, n, r) => (
            ((t, n, r) => {
                n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[n] = r);
            })(t, "symbol" != typeof n ? n + "" : n, r),
            r
        ),
        n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    var r = {};
    function i(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
            })(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e) {
        return (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  })(e);
    }
    function a(e) {
        var t = (function (e, t) {
            if ("object" !== s(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== s(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
        })(e);
        return "symbol" === s(t) ? t : String(t);
    }
    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, a(r.key), r);
        }
    }
    function l(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
    }
    function u(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function d(e, t) {
        return (d = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                  return (e.__proto__ = t), e;
              })(e, t);
    }
    function h(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && d(e, t);
    }
    function p(e, t) {
        if (t && ("object" === s(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return u(e);
    }
    function f(e) {
        return (f = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
    }
    function m(e, t, n) {
        return (t = a(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    function g(e, t, n, r, i, o, s) {
        try {
            var a = e[o](s),
                c = a.value;
        } catch (e) {
            return void n(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function v(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise(function (r, i) {
                var o = e.apply(t, n);
                function s(e) {
                    g(o, r, i, s, a, "next", e);
                }
                function a(e) {
                    g(o, r, i, s, a, "throw", e);
                }
                s(void 0);
            });
        };
    }
    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function y(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                    var r,
                        i,
                        o,
                        s,
                        a = [],
                        c = !0,
                        l = !1;
                    try {
                        if (((o = (n = n.call(e)).next), 0 === t)) {
                            if (Object(n) !== n) return;
                            c = !1;
                        } else for (; !(c = (r = o.call(n)).done) && (a.push(r.value), a.length !== t); c = !0);
                    } catch (e) {
                        (l = !0), (i = e);
                    } finally {
                        try {
                            if (!c && null != n.return && ((s = n.return()), Object(s) !== s)) return;
                        } finally {
                            if (l) throw i;
                        }
                    }
                    return a;
                }
            })(e, t) ||
            (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0;
                }
            })(e, t) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    var b,
        w = {},
        S = {
            get exports() {
                return w;
            },
            set exports(e) {
                w = e;
            },
        },
        E = "object" == typeof Reflect ? Reflect : null,
        k =
            E && "function" == typeof E.apply
                ? E.apply
                : function (e, t, n) {
                      return Function.prototype.apply.call(e, t, n);
                  };
    b =
        E && "function" == typeof E.ownKeys
            ? E.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : function (e) {
                  return Object.getOwnPropertyNames(e);
              };
    var T =
        Number.isNaN ||
        function (e) {
            return e != e;
        };
    function C() {
        C.init.call(this);
    }
    (S.exports = C),
        (w.once = function (e, t) {
            return new Promise(function (n, r) {
                function i(n) {
                    e.removeListener(t, o), r(n);
                }
                function o() {
                    "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments));
                }
                var s, a;
                R(e, t, o, { once: !0 }), "error" !== t && ((a = i), "function" == typeof (s = e).on && R(s, "error", a, { once: !0 }));
            });
        }),
        (C.EventEmitter = C),
        (C.prototype._events = void 0),
        (C.prototype._eventsCount = 0),
        (C.prototype._maxListeners = void 0);
    var M = 10;
    function A(e) {
        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }
    function O(e) {
        return void 0 === e._maxListeners ? C.defaultMaxListeners : e._maxListeners;
    }
    function L(e, t, n, r) {
        var i, o, s, a;
        if (
            (A(n),
            void 0 === (o = e._events) ? ((o = e._events = Object.create(null)), (e._eventsCount = 0)) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), (o = e._events)), (s = o[t])),
            void 0 === s)
        )
            (s = o[t] = n), ++e._eventsCount;
        else if (("function" == typeof s ? (s = o[t] = r ? [n, s] : [s, n]) : r ? s.unshift(n) : s.push(n), (i = O(e)) > 0 && s.length > i && !s.warned)) {
            s.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            (c.name = "MaxListenersExceededWarning"), (c.emitter = e), (c.type = t), (c.count = s.length), (a = c), console && console.warn && console.warn(a);
        }
        return e;
    }
    function I() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function P(e, t, n) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
            i = I.bind(r);
        return (i.listener = n), (r.wrapFn = i), i;
    }
    function D(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var i = r[t];
        return void 0 === i
            ? []
            : "function" == typeof i
            ? n
                ? [i.listener || i]
                : [i]
            : n
            ? (function (e) {
                  for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                  return t;
              })(i)
            : N(i, i.length);
    }
    function x(e) {
        var t = this._events;
        if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length;
        }
        return 0;
    }
    function N(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n;
    }
    function R(e, t, n, r) {
        if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
        else {
            if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(t, function i(o) {
                r.once && e.removeEventListener(t, i), n(o);
            });
        }
    }
    Object.defineProperty(C, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return M;
        },
        set: function (e) {
            if ("number" != typeof e || e < 0 || T(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            M = e;
        },
    }),
        (C.init = function () {
            (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) || ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
        }),
        (C.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || T(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return (this._maxListeners = e), this;
        }),
        (C.prototype.getMaxListeners = function () {
            return O(this);
        }),
        (C.prototype.emit = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var r = "error" === e,
                i = this._events;
            if (void 0 !== i) r = r && void 0 === i.error;
            else if (!r) return !1;
            if (r) {
                var o;
                if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
                var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw ((s.context = o), s);
            }
            var a = i[e];
            if (void 0 === a) return !1;
            if ("function" == typeof a) k(a, this, t);
            else {
                var c = a.length,
                    l = N(a, c);
                for (n = 0; n < c; ++n) k(l[n], this, t);
            }
            return !0;
        }),
        (C.prototype.addListener = function (e, t) {
            return L(this, e, t, !1);
        }),
        (C.prototype.on = C.prototype.addListener),
        (C.prototype.prependListener = function (e, t) {
            return L(this, e, t, !0);
        }),
        (C.prototype.once = function (e, t) {
            return A(t), this.on(e, P(this, e, t)), this;
        }),
        (C.prototype.prependOnceListener = function (e, t) {
            return A(t), this.prependListener(e, P(this, e, t)), this;
        }),
        (C.prototype.removeListener = function (e, t) {
            var n, r, i, o, s;
            if ((A(t), void 0 === (r = this._events))) return this;
            if (void 0 === (n = r[e])) return this;
            if (n === t || n.listener === t) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
                for (i = -1, o = n.length - 1; o >= 0; o--)
                    if (n[o] === t || n[o].listener === t) {
                        (s = n[o].listener), (i = o);
                        break;
                    }
                if (i < 0) return this;
                0 === i
                    ? n.shift()
                    : (function (e, t) {
                          for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                          e.pop();
                      })(n, i),
                    1 === n.length && (r[e] = n[0]),
                    void 0 !== r.removeListener && this.emit("removeListener", e, s || t);
            }
            return this;
        }),
        (C.prototype.off = C.prototype.removeListener),
        (C.prototype.removeAllListeners = function (e) {
            var t, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener)
                return 0 === arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== n[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[e]), this;
            if (0 === arguments.length) {
                var i,
                    o = Object.keys(n);
                for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
            }
            if ("function" == typeof (t = n[e])) this.removeListener(e, t);
            else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
            return this;
        }),
        (C.prototype.listeners = function (e) {
            return D(this, e, !0);
        }),
        (C.prototype.rawListeners = function (e) {
            return D(this, e, !1);
        }),
        (C.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : x.call(e, t);
        }),
        (C.prototype.listenerCount = x),
        (C.prototype.eventNames = function () {
            return this._eventsCount > 0 ? b(this._events) : [];
        });
    var j = Object.prototype.hasOwnProperty;
    function F(e, t, n) {
        for (n of e.keys()) if (U(n, t)) return n;
    }
    function U(e, t) {
        var n, r, i;
        if (e === t) return !0;
        if (e && t && (n = e.constructor) === t.constructor) {
            if (n === Date) return e.getTime() === t.getTime();
            if (n === RegExp) return e.toString() === t.toString();
            if (n === Array) {
                if ((r = e.length) === t.length) for (; r-- && U(e[r], t[r]); );
                return -1 === r;
            }
            if (n === Set) {
                if (e.size !== t.size) return !1;
                for (r of e) if (((i = r) && "object" == typeof i && !(i = F(t, i))) || !t.has(i)) return !1;
                return !0;
            }
            if (n === Map) {
                if (e.size !== t.size) return !1;
                for (r of e) if (((i = r[0]) && "object" == typeof i && !(i = F(t, i))) || !U(r[1], t.get(i))) return !1;
                return !0;
            }
            if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
            else if (n === DataView) {
                if ((r = e.byteLength) === t.byteLength) for (; r-- && e.getInt8(r) === t.getInt8(r); );
                return -1 === r;
            }
            if (ArrayBuffer.isView(e)) {
                if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
                return -1 === r;
            }
            if (!n || "object" == typeof e) {
                for (n in ((r = 0), e)) if ((j.call(e, n) && ++r && !j.call(t, n)) || !(n in t) || !U(e[n], t[n])) return !1;
                return Object.keys(t).length === r;
            }
        }
        return e != e && t != t;
    }
    const B = {
            "Amazon Silk": "amazon_silk",
            "Android Browser": "android",
            Bada: "bada",
            BlackBerry: "blackberry",
            Chrome: "chrome",
            Chromium: "chromium",
            Electron: "electron",
            Epiphany: "epiphany",
            Firefox: "firefox",
            Focus: "focus",
            Generic: "generic",
            "Google Search": "google_search",
            Googlebot: "googlebot",
            "Internet Explorer": "ie",
            "K-Meleon": "k_meleon",
            Maxthon: "maxthon",
            "Microsoft Edge": "edge",
            "MZ Browser": "mz",
            "NAVER Whale Browser": "naver",
            Opera: "opera",
            "Opera Coast": "opera_coast",
            PhantomJS: "phantomjs",
            Puffin: "puffin",
            QupZilla: "qupzilla",
            QQ: "qq",
            QQLite: "qqlite",
            Safari: "safari",
            Sailfish: "sailfish",
            "Samsung Internet for Android": "samsung_internet",
            SeaMonkey: "seamonkey",
            Sleipnir: "sleipnir",
            Swing: "swing",
            Tizen: "tizen",
            "UC Browser": "uc",
            Vivaldi: "vivaldi",
            "WebOS Browser": "webos",
            WeChat: "wechat",
            "Yandex Browser": "yandex",
            Roku: "roku",
        },
        V = {
            amazon_silk: "Amazon Silk",
            android: "Android Browser",
            bada: "Bada",
            blackberry: "BlackBerry",
            chrome: "Chrome",
            chromium: "Chromium",
            electron: "Electron",
            epiphany: "Epiphany",
            firefox: "Firefox",
            focus: "Focus",
            generic: "Generic",
            googlebot: "Googlebot",
            google_search: "Google Search",
            ie: "Internet Explorer",
            k_meleon: "K-Meleon",
            maxthon: "Maxthon",
            edge: "Microsoft Edge",
            mz: "MZ Browser",
            naver: "NAVER Whale Browser",
            opera: "Opera",
            opera_coast: "Opera Coast",
            phantomjs: "PhantomJS",
            puffin: "Puffin",
            qupzilla: "QupZilla",
            qq: "QQ Browser",
            qqlite: "QQ Browser Lite",
            safari: "Safari",
            sailfish: "Sailfish",
            samsung_internet: "Samsung Internet for Android",
            seamonkey: "SeaMonkey",
            sleipnir: "Sleipnir",
            swing: "Swing",
            tizen: "Tizen",
            uc: "UC Browser",
            vivaldi: "Vivaldi",
            webos: "WebOS Browser",
            wechat: "WeChat",
            yandex: "Yandex Browser",
        },
        Y = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" },
        $ = {
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MacOS: "macOS",
            iOS: "iOS",
            Android: "Android",
            WebOS: "WebOS",
            BlackBerry: "BlackBerry",
            Bada: "Bada",
            Tizen: "Tizen",
            Linux: "Linux",
            ChromeOS: "Chrome OS",
            PlayStation4: "PlayStation 4",
            Roku: "Roku",
        },
        G = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
    class q {
        static getFirstMatch(e, t) {
            const n = t.match(e);
            return (n && n.length > 0 && n[1]) || "";
        }
        static getSecondMatch(e, t) {
            const n = t.match(e);
            return (n && n.length > 1 && n[2]) || "";
        }
        static matchAndReturnConst(e, t, n) {
            if (e.test(t)) return n;
        }
        static getWindowsVersionName(e) {
            switch (e) {
                case "NT":
                    return "NT";
                case "XP":
                case "NT 5.1":
                    return "XP";
                case "NT 5.0":
                    return "2000";
                case "NT 5.2":
                    return "2003";
                case "NT 6.0":
                    return "Vista";
                case "NT 6.1":
                    return "7";
                case "NT 6.2":
                    return "8";
                case "NT 6.3":
                    return "8.1";
                case "NT 10.0":
                    return "10";
                default:
                    return;
            }
        }
        static getMacOSVersionName(e) {
            const t = e
                .split(".")
                .splice(0, 2)
                .map((e) => parseInt(e, 10) || 0);
            if ((t.push(0), 10 === t[0]))
                switch (t[1]) {
                    case 5:
                        return "Leopard";
                    case 6:
                        return "Snow Leopard";
                    case 7:
                        return "Lion";
                    case 8:
                        return "Mountain Lion";
                    case 9:
                        return "Mavericks";
                    case 10:
                        return "Yosemite";
                    case 11:
                        return "El Capitan";
                    case 12:
                        return "Sierra";
                    case 13:
                        return "High Sierra";
                    case 14:
                        return "Mojave";
                    case 15:
                        return "Catalina";
                    default:
                        return;
                }
        }
        static getAndroidVersionName(e) {
            const t = e
                .split(".")
                .splice(0, 2)
                .map((e) => parseInt(e, 10) || 0);
            if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                return 1 === t[0] && t[1] < 6
                    ? "Cupcake"
                    : 1 === t[0] && t[1] >= 6
                    ? "Donut"
                    : 2 === t[0] && t[1] < 2
                    ? "Eclair"
                    : 2 === t[0] && 2 === t[1]
                    ? "Froyo"
                    : 2 === t[0] && t[1] > 2
                    ? "Gingerbread"
                    : 3 === t[0]
                    ? "Honeycomb"
                    : 4 === t[0] && t[1] < 1
                    ? "Ice Cream Sandwich"
                    : 4 === t[0] && t[1] < 4
                    ? "Jelly Bean"
                    : 4 === t[0] && t[1] >= 4
                    ? "KitKat"
                    : 5 === t[0]
                    ? "Lollipop"
                    : 6 === t[0]
                    ? "Marshmallow"
                    : 7 === t[0]
                    ? "Nougat"
                    : 8 === t[0]
                    ? "Oreo"
                    : 9 === t[0]
                    ? "Pie"
                    : void 0;
        }
        static getVersionPrecision(e) {
            return e.split(".").length;
        }
        static compareVersions(e, t, n = !1) {
            const r = q.getVersionPrecision(e),
                i = q.getVersionPrecision(t);
            let o = Math.max(r, i),
                s = 0;
            const a = q.map([e, t], (e) => {
                const t = o - q.getVersionPrecision(e),
                    n = e + new Array(t + 1).join(".0");
                return q.map(n.split("."), (e) => new Array(20 - e.length).join("0") + e).reverse();
            });
            for (n && (s = o - Math.min(r, i)), o -= 1; o >= s; ) {
                if (a[0][o] > a[1][o]) return 1;
                if (a[0][o] === a[1][o]) {
                    if (o === s) return 0;
                    o -= 1;
                } else if (a[0][o] < a[1][o]) return -1;
            }
        }
        static map(e, t) {
            const n = [];
            let r;
            if (Array.prototype.map) return Array.prototype.map.call(e, t);
            for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
            return n;
        }
        static find(e, t) {
            let n, r;
            if (Array.prototype.find) return Array.prototype.find.call(e, t);
            for (n = 0, r = e.length; n < r; n += 1) {
                const r = e[n];
                if (t(r, n)) return r;
            }
        }
        static assign(e, ...t) {
            const n = e;
            let r, i;
            if (Object.assign) return Object.assign(e, ...t);
            for (r = 0, i = t.length; r < i; r += 1) {
                const e = t[r];
                "object" == typeof e &&
                    null !== e &&
                    Object.keys(e).forEach((t) => {
                        n[t] = e[t];
                    });
            }
            return e;
        }
        static getBrowserAlias(e) {
            return B[e];
        }
        static getBrowserTypeByAlias(e) {
            return V[e] || "";
        }
    }
    const J = /version\/(\d+(\.?_?\d+)+)/i,
        W = [
            {
                test: [/googlebot/i],
                describe(e) {
                    const t = { name: "Googlebot" },
                        n = q.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/opera/i],
                describe(e) {
                    const t = { name: "Opera" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/opr\/|opios/i],
                describe(e) {
                    const t = { name: "Opera" },
                        n = q.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/SamsungBrowser/i],
                describe(e) {
                    const t = { name: "Samsung Internet for Android" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/Whale/i],
                describe(e) {
                    const t = { name: "NAVER Whale Browser" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/MZBrowser/i],
                describe(e) {
                    const t = { name: "MZ Browser" },
                        n = q.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/focus/i],
                describe(e) {
                    const t = { name: "Focus" },
                        n = q.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/swing/i],
                describe(e) {
                    const t = { name: "Swing" },
                        n = q.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/coast/i],
                describe(e) {
                    const t = { name: "Opera Coast" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/opt\/\d+(?:.?_?\d+)+/i],
                describe(e) {
                    const t = { name: "Opera Touch" },
                        n = q.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/yabrowser/i],
                describe(e) {
                    const t = { name: "Yandex Browser" },
                        n = q.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/ucbrowser/i],
                describe(e) {
                    const t = { name: "UC Browser" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/Maxthon|mxios/i],
                describe(e) {
                    const t = { name: "Maxthon" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/epiphany/i],
                describe(e) {
                    const t = { name: "Epiphany" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/puffin/i],
                describe(e) {
                    const t = { name: "Puffin" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/sleipnir/i],
                describe(e) {
                    const t = { name: "Sleipnir" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/k-meleon/i],
                describe(e) {
                    const t = { name: "K-Meleon" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/micromessenger/i],
                describe(e) {
                    const t = { name: "WeChat" },
                        n = q.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/qqbrowser/i],
                describe(e) {
                    const t = { name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser" },
                        n = q.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/msie|trident/i],
                describe(e) {
                    const t = { name: "Internet Explorer" },
                        n = q.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/\sedg\//i],
                describe(e) {
                    const t = { name: "Microsoft Edge" },
                        n = q.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/edg([ea]|ios)/i],
                describe(e) {
                    const t = { name: "Microsoft Edge" },
                        n = q.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/vivaldi/i],
                describe(e) {
                    const t = { name: "Vivaldi" },
                        n = q.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/seamonkey/i],
                describe(e) {
                    const t = { name: "SeaMonkey" },
                        n = q.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/sailfish/i],
                describe(e) {
                    const t = { name: "Sailfish" },
                        n = q.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/silk/i],
                describe(e) {
                    const t = { name: "Amazon Silk" },
                        n = q.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/phantom/i],
                describe(e) {
                    const t = { name: "PhantomJS" },
                        n = q.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/slimerjs/i],
                describe(e) {
                    const t = { name: "SlimerJS" },
                        n = q.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe(e) {
                    const t = { name: "BlackBerry" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/(web|hpw)[o0]s/i],
                describe(e) {
                    const t = { name: "WebOS Browser" },
                        n = q.getFirstMatch(J, e) || q.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/bada/i],
                describe(e) {
                    const t = { name: "Bada" },
                        n = q.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/tizen/i],
                describe(e) {
                    const t = { name: "Tizen" },
                        n = q.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/qupzilla/i],
                describe(e) {
                    const t = { name: "QupZilla" },
                        n = q.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/firefox|iceweasel|fxios/i],
                describe(e) {
                    const t = { name: "Firefox" },
                        n = q.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/electron/i],
                describe(e) {
                    const t = { name: "Electron" },
                        n = q.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/MiuiBrowser/i],
                describe(e) {
                    const t = { name: "Miui" },
                        n = q.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/chromium/i],
                describe(e) {
                    const t = { name: "Chromium" },
                        n = q.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/chrome|crios|crmo/i],
                describe(e) {
                    const t = { name: "Chrome" },
                        n = q.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/GSA/i],
                describe(e) {
                    const t = { name: "Google Search" },
                        n = q.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test(e) {
                    const t = !e.test(/like android/i),
                        n = e.test(/android/i);
                    return t && n;
                },
                describe(e) {
                    const t = { name: "Android Browser" },
                        n = q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/playstation 4/i],
                describe(e) {
                    const t = { name: "PlayStation 4" },
                        n = q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/safari|applewebkit/i],
                describe(e) {
                    const t = { name: "Safari" },
                        n = q.getFirstMatch(J, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/.*/i],
                describe(e) {
                    const t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                    return { name: q.getFirstMatch(t, e), version: q.getSecondMatch(t, e) };
                },
            },
        ];
    var z = [
            {
                test: [/Roku\/DVP/],
                describe(e) {
                    const t = q.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                    return { name: $.Roku, version: t };
                },
            },
            {
                test: [/windows phone/i],
                describe(e) {
                    const t = q.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                    return { name: $.WindowsPhone, version: t };
                },
            },
            {
                test: [/windows /i],
                describe(e) {
                    const t = q.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                        n = q.getWindowsVersionName(t);
                    return { name: $.Windows, version: t, versionName: n };
                },
            },
            {
                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                describe(e) {
                    const t = { name: $.iOS },
                        n = q.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: [/macintosh/i],
                describe(e) {
                    const t = q.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                        n = q.getMacOSVersionName(t),
                        r = { name: $.MacOS, version: t };
                    return n && (r.versionName = n), r;
                },
            },
            {
                test: [/(ipod|iphone|ipad)/i],
                describe(e) {
                    const t = q.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                    return { name: $.iOS, version: t };
                },
            },
            {
                test(e) {
                    const t = !e.test(/like android/i),
                        n = e.test(/android/i);
                    return t && n;
                },
                describe(e) {
                    const t = q.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                        n = q.getAndroidVersionName(t),
                        r = { name: $.Android, version: t };
                    return n && (r.versionName = n), r;
                },
            },
            {
                test: [/(web|hpw)[o0]s/i],
                describe(e) {
                    const t = q.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                        n = { name: $.WebOS };
                    return t && t.length && (n.version = t), n;
                },
            },
            {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe(e) {
                    const t = q.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || q.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || q.getFirstMatch(/\bbb(\d+)/i, e);
                    return { name: $.BlackBerry, version: t };
                },
            },
            {
                test: [/bada/i],
                describe(e) {
                    const t = q.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                    return { name: $.Bada, version: t };
                },
            },
            {
                test: [/tizen/i],
                describe(e) {
                    const t = q.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                    return { name: $.Tizen, version: t };
                },
            },
            { test: [/linux/i], describe: () => ({ name: $.Linux }) },
            { test: [/CrOS/], describe: () => ({ name: $.ChromeOS }) },
            {
                test: [/PlayStation 4/],
                describe(e) {
                    const t = q.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                    return { name: $.PlayStation4, version: t };
                },
            },
        ],
        H = [
            { test: [/googlebot/i], describe: () => ({ type: "bot", vendor: "Google" }) },
            {
                test: [/huawei/i],
                describe(e) {
                    const t = q.getFirstMatch(/(can-l01)/i, e) && "Nova",
                        n = { type: Y.mobile, vendor: "Huawei" };
                    return t && (n.model = t), n;
                },
            },
            { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: Y.tablet, vendor: "Nexus" }) },
            { test: [/ipad/i], describe: () => ({ type: Y.tablet, vendor: "Apple", model: "iPad" }) },
            { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: Y.tablet, vendor: "Apple", model: "iPad" }) },
            { test: [/kftt build/i], describe: () => ({ type: Y.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) },
            { test: [/silk/i], describe: () => ({ type: Y.tablet, vendor: "Amazon" }) },
            { test: [/tablet(?! pc)/i], describe: () => ({ type: Y.tablet }) },
            {
                test(e) {
                    const t = e.test(/ipod|iphone/i),
                        n = e.test(/like (ipod|iphone)/i);
                    return t && !n;
                },
                describe(e) {
                    const t = q.getFirstMatch(/(ipod|iphone)/i, e);
                    return { type: Y.mobile, vendor: "Apple", model: t };
                },
            },
            { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: Y.mobile, vendor: "Nexus" }) },
            { test: [/[^-]mobi/i], describe: () => ({ type: Y.mobile }) },
            { test: (e) => "blackberry" === e.getBrowserName(!0), describe: () => ({ type: Y.mobile, vendor: "BlackBerry" }) },
            { test: (e) => "bada" === e.getBrowserName(!0), describe: () => ({ type: Y.mobile }) },
            { test: (e) => "windows phone" === e.getBrowserName(), describe: () => ({ type: Y.mobile, vendor: "Microsoft" }) },
            {
                test(e) {
                    const t = Number(String(e.getOSVersion()).split(".")[0]);
                    return "android" === e.getOSName(!0) && t >= 3;
                },
                describe: () => ({ type: Y.tablet }),
            },
            { test: (e) => "android" === e.getOSName(!0), describe: () => ({ type: Y.mobile }) },
            { test: (e) => "macos" === e.getOSName(!0), describe: () => ({ type: Y.desktop, vendor: "Apple" }) },
            { test: (e) => "windows" === e.getOSName(!0), describe: () => ({ type: Y.desktop }) },
            { test: (e) => "linux" === e.getOSName(!0), describe: () => ({ type: Y.desktop }) },
            { test: (e) => "playstation 4" === e.getOSName(!0), describe: () => ({ type: Y.tv }) },
            { test: (e) => "roku" === e.getOSName(!0), describe: () => ({ type: Y.tv }) },
        ],
        K = [
            {
                test: (e) => "microsoft edge" === e.getBrowserName(!0),
                describe(e) {
                    if (/\sedg\//i.test(e)) return { name: G.Blink };
                    const t = q.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                    return { name: G.EdgeHTML, version: t };
                },
            },
            {
                test: [/trident/i],
                describe(e) {
                    const t = { name: G.Trident },
                        n = q.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test: (e) => e.test(/presto/i),
                describe(e) {
                    const t = { name: G.Presto },
                        n = q.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            {
                test(e) {
                    const t = e.test(/gecko/i),
                        n = e.test(/like gecko/i);
                    return t && !n;
                },
                describe(e) {
                    const t = { name: G.Gecko },
                        n = q.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
            { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: G.Blink }) },
            {
                test: [/(apple)?webkit/i],
                describe(e) {
                    const t = { name: G.WebKit },
                        n = q.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                },
            },
        ];
    class Q {
        constructor(e, t = !1) {
            if (null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
            (this._ua = e), (this.parsedResult = {}), !0 !== t && this.parse();
        }
        getUA() {
            return this._ua;
        }
        test(e) {
            return e.test(this._ua);
        }
        parseBrowser() {
            this.parsedResult.browser = {};
            const e = q.find(W, (e) => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e) => this.test(e));
                throw new Error("Browser's test function is not valid");
            });
            return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
        }
        getBrowser() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
        }
        getBrowserName(e) {
            return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
        }
        getBrowserVersion() {
            return this.getBrowser().version;
        }
        getOS() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
        }
        parseOS() {
            this.parsedResult.os = {};
            const e = q.find(z, (e) => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e) => this.test(e));
                throw new Error("Browser's test function is not valid");
            });
            return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
        }
        getOSName(e) {
            const { name: t } = this.getOS();
            return e ? String(t).toLowerCase() || "" : t || "";
        }
        getOSVersion() {
            return this.getOS().version;
        }
        getPlatform() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
        }
        getPlatformType(e = !1) {
            const { type: t } = this.getPlatform();
            return e ? String(t).toLowerCase() || "" : t || "";
        }
        parsePlatform() {
            this.parsedResult.platform = {};
            const e = q.find(H, (e) => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e) => this.test(e));
                throw new Error("Browser's test function is not valid");
            });
            return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
        }
        getEngine() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
        }
        getEngineName(e) {
            return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
        }
        parseEngine() {
            this.parsedResult.engine = {};
            const e = q.find(K, (e) => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e) => this.test(e));
                throw new Error("Browser's test function is not valid");
            });
            return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
        }
        parse() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
        }
        getResult() {
            return q.assign({}, this.parsedResult);
        }
        satisfies(e) {
            const t = {};
            let n = 0;
            const r = {};
            let i = 0;
            if (
                (Object.keys(e).forEach((o) => {
                    const s = e[o];
                    "string" == typeof s ? ((r[o] = s), (i += 1)) : "object" == typeof s && ((t[o] = s), (n += 1));
                }),
                n > 0)
            ) {
                const e = Object.keys(t),
                    n = q.find(e, (e) => this.isOS(e));
                if (n) {
                    const e = this.satisfies(t[n]);
                    if (void 0 !== e) return e;
                }
                const r = q.find(e, (e) => this.isPlatform(e));
                if (r) {
                    const e = this.satisfies(t[r]);
                    if (void 0 !== e) return e;
                }
            }
            if (i > 0) {
                const e = Object.keys(r),
                    t = q.find(e, (e) => this.isBrowser(e, !0));
                if (void 0 !== t) return this.compareVersion(r[t]);
            }
        }
        isBrowser(e, t = !1) {
            const n = this.getBrowserName().toLowerCase();
            let r = e.toLowerCase();
            const i = q.getBrowserTypeByAlias(r);
            return t && i && (r = i.toLowerCase()), r === n;
        }
        compareVersion(e) {
            let t = [0],
                n = e,
                r = !1;
            const i = this.getBrowserVersion();
            if ("string" == typeof i)
                return (
                    ">" === e[0] || "<" === e[0]
                        ? ((n = e.substr(1)), "=" === e[1] ? ((r = !0), (n = e.substr(2))) : (t = []), ">" === e[0] ? t.push(1) : t.push(-1))
                        : "=" === e[0]
                        ? (n = e.substr(1))
                        : "~" === e[0] && ((r = !0), (n = e.substr(1))),
                    t.indexOf(q.compareVersions(i, n, r)) > -1
                );
        }
        isOS(e) {
            return this.getOSName(!0) === String(e).toLowerCase();
        }
        isPlatform(e) {
            return this.getPlatformType(!0) === String(e).toLowerCase();
        }
        isEngine(e) {
            return this.getEngineName(!0) === String(e).toLowerCase();
        }
        is(e, t = !1) {
            return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
        }
        some(e = []) {
            return e.some((e) => this.is(e));
        }
    }
    /*!
     * Bowser - a browser detector
     * https://github.com/lancedikson/bowser
     * MIT License | (c) Dustin Diaz 2012-2015
     * MIT License | (c) Denis Demchenko 2015-2019
     */ class X {
        static getParser(e, t = !1) {
            if ("string" != typeof e) throw new Error("UserAgent should be a string");
            return new Q(e, t);
        }
        static parse(e) {
            return new Q(e).getResult();
        }
        static get BROWSER_MAP() {
            return V;
        }
        static get ENGINE_MAP() {
            return G;
        }
        static get OS_MAP() {
            return $;
        }
        static get PLATFORMS_MAP() {
            return Y;
        }
    }
    function Z() {
        return Date.now() + Math.random().toString();
    }
    function ee() {
        throw new Error("Method must be implemented in subclass");
    }
    function te(e, t) {
        return null != t && t.proxyUrl ? t.proxyUrl + ("/" === t.proxyUrl.slice(-1) ? "" : "/") + e.substring(8) : e;
    }
    function ne(e) {
        return null != e && e.callObjectBundleUrlOverride ? e.callObjectBundleUrlOverride : te("https://c.daily.co/call-machine/versioned/".concat("0.66.0", "/static/call-machine-object-bundle.js"), e);
    }
    function re(e) {
        try {
            new URL(e);
        } catch {
            return !1;
        }
        return !0;
    }
    const ie = Object.prototype.toString;
    function oe(e) {
        switch (ie.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return fe(e, Error);
        }
    }
    function se(e, t) {
        return ie.call(e) === `[object ${t}]`;
    }
    function ae(e) {
        return se(e, "ErrorEvent");
    }
    function ce(e) {
        return se(e, "DOMError");
    }
    function le(e) {
        return se(e, "String");
    }
    function ue(e) {
        return null === e || ("object" != typeof e && "function" != typeof e);
    }
    function de(e) {
        return se(e, "Object");
    }
    function he(e) {
        return typeof Event < "u" && fe(e, Event);
    }
    function pe(e) {
        return !(!e || !e.then || "function" != typeof e.then);
    }
    function fe(e, t) {
        try {
            return e instanceof t;
        } catch {
            return !1;
        }
    }
    function me(e, t = 0) {
        return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`;
    }
    function ge(e, t) {
        if (!Array.isArray(e)) return "";
        const n = [];
        for (let t = 0; t < e.length; t++) {
            const r = e[t];
            try {
                n.push(String(r));
            } catch {
                n.push("[value cannot be serialized]");
            }
        }
        return n.join(t);
    }
    function ve(e, t = [], n = !1) {
        return t.some((t) =>
            (function (e, t, n = !1) {
                return !!le(e) && (se(t, "RegExp") ? t.test(e) : !!le(t) && (n ? e === t : e.includes(t)));
            })(e, t, n)
        );
    }
    function _e(e, t, n = 250, r, i, o, s) {
        if (!(o.exception && o.exception.values && s && fe(s.originalException, Error))) return;
        const a = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
        var c, l;
        a && (o.exception.values = ((c = ye(e, t, i, s.originalException, r, o.exception.values, a, 0)), (l = n), c.map((e) => (e.value && (e.value = me(e.value, l)), e))));
    }
    function ye(e, t, n, r, i, o, s, a) {
        if (o.length >= n + 1) return o;
        let c = [...o];
        if (fe(r[i], Error)) {
            be(s, a);
            const o = e(t, r[i]),
                l = c.length;
            we(o, i, l, a), (c = ye(e, t, n, r[i], i, [o, ...c], o, l));
        }
        return (
            Array.isArray(r.errors) &&
                r.errors.forEach((r, o) => {
                    if (fe(r, Error)) {
                        be(s, a);
                        const l = e(t, r),
                            u = c.length;
                        we(l, `errors[${o}]`, u, a), (c = ye(e, t, n, r, i, [l, ...c], l, u));
                    }
                }),
            c
        );
    }
    function be(e, t) {
        (e.mechanism = e.mechanism || { type: "generic", handled: !0 }), (e.mechanism = { ...e.mechanism, is_exception_group: !0, exception_id: t });
    }
    function we(e, t, n, r) {
        (e.mechanism = e.mechanism || { type: "generic", handled: !0 }), (e.mechanism = { ...e.mechanism, type: "chained", source: t, exception_id: n, parent_id: r });
    }
    function Se(e) {
        return e && e.Math == Math ? e : void 0;
    }
    const Ee =
        ("object" == typeof globalThis && Se(globalThis)) ||
        ("object" == typeof window && Se(window)) ||
        ("object" == typeof self && Se(self)) ||
        ("object" == typeof global && Se(global)) ||
        (function () {
            return this;
        })() ||
        {};
    function ke() {
        return Ee;
    }
    function Te(e, t, n) {
        const r = n || Ee,
            i = (r.__SENTRY__ = r.__SENTRY__ || {});
        return i[e] || (i[e] = t());
    }
    const Ce = ke(),
        Me = 80;
    function Ae(e, t = {}) {
        try {
            let n = e;
            const r = 5,
                i = [];
            let o = 0,
                s = 0;
            const a = " > ",
                c = a.length;
            let l;
            const u = Array.isArray(t) ? t : t.keyAttrs,
                d = (!Array.isArray(t) && t.maxStringLength) || Me;
            for (; n && o++ < r && ((l = Oe(n, u)), !("html" === l || (o > 1 && s + i.length * c + l.length >= d))); ) i.push(l), (s += l.length), (n = n.parentNode);
            return i.reverse().join(a);
        } catch {
            return "<unknown>";
        }
    }
    function Oe(e, t) {
        const n = e,
            r = [];
        let i, o, s, a, c;
        if (!n || !n.tagName) return "";
        r.push(n.tagName.toLowerCase());
        const l = t && t.length ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)]) : null;
        if (l && l.length)
            l.forEach((e) => {
                r.push(`[${e[0]}="${e[1]}"]`);
            });
        else if ((n.id && r.push(`#${n.id}`), (i = n.className), i && le(i))) for (o = i.split(/\s+/), c = 0; c < o.length; c++) r.push(`.${o[c]}`);
        const u = ["aria-label", "type", "name", "title", "alt"];
        for (c = 0; c < u.length; c++) (s = u[c]), (a = n.getAttribute(s)), a && r.push(`[${s}="${a}"]`);
        return r.join("");
    }
    const Le = ["debug", "info", "warn", "error", "log", "assert", "trace"];
    function Ie(e) {
        if (!("console" in Ee)) return e();
        const t = Ee.console,
            n = {};
        Le.forEach((e) => {
            const r = t[e] && t[e].__sentry_original__;
            e in t && r && ((n[e] = t[e]), (t[e] = r));
        });
        try {
            return e();
        } finally {
            Object.keys(n).forEach((e) => {
                t[e] = n[e];
            });
        }
    }
    function Pe() {
        let e = !1;
        const t = {
            enable: () => {
                e = !0;
            },
            disable: () => {
                e = !1;
            },
        };
        return (
            typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
                ? Le.forEach((n) => {
                      t[n] = (...t) => {
                          e &&
                              Ie(() => {
                                  Ee.console[n](`Sentry Logger [${n}]:`, ...t);
                              });
                      };
                  })
                : Le.forEach((e) => {
                      t[e] = () => {};
                  }),
            t
        );
    }
    let De;
    De = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Te("logger", Pe) : Pe();
    const xe = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function Ne(e, t = !1) {
        const { host: n, path: r, pass: i, port: o, projectId: s, protocol: a, publicKey: c } = e;
        return `${a}://${c}${t && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r && `${r}/`}${s}`;
    }
    function Re(e) {
        return { protocol: e.protocol, publicKey: e.publicKey || "", pass: e.pass || "", host: e.host, port: e.port || "", path: e.path || "", projectId: e.projectId };
    }
    class je extends Error {
        constructor(e, t = "warn") {
            super(e), (this.message = e), (this.name = new.target.prototype.constructor.name), Object.setPrototypeOf(this, new.target.prototype), (this.logLevel = t);
        }
    }
    function Fe(e, t, n) {
        if (!(t in e)) return;
        const r = e[t],
            i = n(r);
        if ("function" == typeof i)
            try {
                Be(i, r);
            } catch {}
        e[t] = i;
    }
    function Ue(e, t, n) {
        Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
    }
    function Be(e, t) {
        const n = t.prototype || {};
        (e.prototype = t.prototype = n), Ue(e, "__sentry_original__", t);
    }
    function Ve(e) {
        return e.__sentry_original__;
    }
    function Ye(e) {
        if (oe(e)) return { message: e.message, name: e.name, stack: e.stack, ...Ge(e) };
        if (he(e)) {
            const t = { type: e.type, target: $e(e.target), currentTarget: $e(e.currentTarget), ...Ge(e) };
            return typeof CustomEvent < "u" && fe(e, CustomEvent) && (t.detail = e.detail), t;
        }
        return e;
    }
    function $e(e) {
        try {
            return typeof Element < "u" && fe(e, Element) ? Ae(e) : Object.prototype.toString.call(e);
        } catch {
            return "<unknown>";
        }
    }
    function Ge(e) {
        if ("object" == typeof e && null !== e) {
            const t = {};
            for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t;
        }
        return {};
    }
    function qe(e) {
        return Je(e, new Map());
    }
    function Je(e, t) {
        if (de(e)) {
            const n = t.get(e);
            if (void 0 !== n) return n;
            const r = {};
            t.set(e, r);
            for (const n of Object.keys(e)) void 0 !== e[n] && (r[n] = Je(e[n], t));
            return r;
        }
        if (Array.isArray(e)) {
            const n = t.get(e);
            if (void 0 !== n) return n;
            const r = [];
            return (
                t.set(e, r),
                e.forEach((e) => {
                    r.push(Je(e, t));
                }),
                r
            );
        }
        return e;
    }
    const We = "<anonymous>";
    function ze(e) {
        try {
            return (e && "function" == typeof e && e.name) || We;
        } catch {
            return We;
        }
    }
    const He = ke();
    function Ke(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
    }
    const Qe = ke(),
        Xe = ke(),
        Ze = "__sentry_xhr_v2__",
        et = {},
        tt = {};
    function nt(e) {
        if (!tt[e])
            switch (((tt[e] = !0), e)) {
                case "console":
                    "console" in Xe &&
                        Le.forEach(function (e) {
                            e in Xe.console &&
                                Fe(Xe.console, e, function (t) {
                                    return function (...n) {
                                        it("console", { args: n, level: e }), t && t.apply(Xe.console, n);
                                    };
                                });
                        });
                    break;
                case "dom":
                    !(function () {
                        if (!("document" in Xe)) return;
                        const e = it.bind(null, "dom"),
                            t = dt(e, !0);
                        Xe.document.addEventListener("click", t, !1),
                            Xe.document.addEventListener("keypress", t, !1),
                            ["EventTarget", "Node"].forEach((t) => {
                                const n = Xe[t] && Xe[t].prototype;
                                n &&
                                    n.hasOwnProperty &&
                                    n.hasOwnProperty("addEventListener") &&
                                    (Fe(n, "addEventListener", function (t) {
                                        return function (n, r, i) {
                                            if ("click" === n || "keypress" == n)
                                                try {
                                                    const r = this,
                                                        o = (r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}),
                                                        s = (o[n] = o[n] || { refCount: 0 });
                                                    if (!s.handler) {
                                                        const r = dt(e);
                                                        (s.handler = r), t.call(this, n, r, i);
                                                    }
                                                    s.refCount++;
                                                } catch {}
                                            return t.call(this, n, r, i);
                                        };
                                    }),
                                    Fe(n, "removeEventListener", function (e) {
                                        return function (t, n, r) {
                                            if ("click" === t || "keypress" == t)
                                                try {
                                                    const n = this,
                                                        i = n.__sentry_instrumentation_handlers__ || {},
                                                        o = i[t];
                                                    o && (o.refCount--, o.refCount <= 0 && (e.call(this, t, o.handler, r), (o.handler = void 0), delete i[t]), 0 === Object.keys(i).length && delete n.__sentry_instrumentation_handlers__);
                                                } catch {}
                                            return e.call(this, t, n, r);
                                        };
                                    }));
                            });
                    })();
                    break;
                case "xhr":
                    !(function () {
                        if (!("XMLHttpRequest" in Xe)) return;
                        const e = XMLHttpRequest.prototype;
                        Fe(e, "open", function (e) {
                            return function (...t) {
                                const n = t[1],
                                    r = (this[Ze] = { method: le(t[0]) ? t[0].toUpperCase() : t[0], url: t[1], request_headers: {} });
                                le(n) && "POST" === r.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                const i = () => {
                                    const e = this[Ze];
                                    if (e && 4 === this.readyState) {
                                        try {
                                            e.status_code = this.status;
                                        } catch {}
                                        it("xhr", { args: t, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: this });
                                    }
                                };
                                return (
                                    "onreadystatechange" in this && "function" == typeof this.onreadystatechange
                                        ? Fe(this, "onreadystatechange", function (e) {
                                              return function (...t) {
                                                  return i(), e.apply(this, t);
                                              };
                                          })
                                        : this.addEventListener("readystatechange", i),
                                    Fe(this, "setRequestHeader", function (e) {
                                        return function (...t) {
                                            const [n, r] = t,
                                                i = this[Ze];
                                            return i && (i.request_headers[n.toLowerCase()] = r), e.apply(this, t);
                                        };
                                    }),
                                    e.apply(this, t)
                                );
                            };
                        }),
                            Fe(e, "send", function (e) {
                                return function (...t) {
                                    const n = this[Ze];
                                    return n && void 0 !== t[0] && (n.body = t[0]), it("xhr", { args: t, startTimestamp: Date.now(), xhr: this }), e.apply(this, t);
                                };
                            });
                    })();
                    break;
                case "fetch":
                    (function () {
                        if (
                            !(function () {
                                if (!("fetch" in He)) return !1;
                                try {
                                    return new Headers(), new Request("http://www.example.com"), new Response(), !0;
                                } catch {
                                    return !1;
                                }
                            })()
                        )
                            return !1;
                        if (Ke(He.fetch)) return !0;
                        let e = !1;
                        const t = He.document;
                        if (t && "function" == typeof t.createElement)
                            try {
                                const n = t.createElement("iframe");
                                (n.hidden = !0), t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = Ke(n.contentWindow.fetch)), t.head.removeChild(n);
                            } catch (e) {
                                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
                            }
                        return e;
                    })() &&
                        Fe(Xe, "fetch", function (e) {
                            return function (...t) {
                                const { method: n, url: r } = (function (e) {
                                        if (0 === e.length) return { method: "GET", url: "" };
                                        if (2 === e.length) {
                                            const [t, n] = e;
                                            return { url: st(t), method: ot(n, "method") ? String(n.method).toUpperCase() : "GET" };
                                        }
                                        const t = e[0];
                                        return { url: st(t), method: ot(t, "method") ? String(t.method).toUpperCase() : "GET" };
                                    })(t),
                                    i = { args: t, fetchData: { method: n, url: r }, startTimestamp: Date.now() };
                                return (
                                    it("fetch", { ...i }),
                                    e.apply(Xe, t).then(
                                        (e) => (it("fetch", { ...i, endTimestamp: Date.now(), response: e }), e),
                                        (e) => {
                                            throw (it("fetch", { ...i, endTimestamp: Date.now(), error: e }), e);
                                        }
                                    )
                                );
                            };
                        });
                    break;
                case "history":
                    !(function () {
                        if (
                            !(function () {
                                const e = Qe.chrome,
                                    t = e && e.app && e.app.runtime,
                                    n = "history" in Qe && !!Qe.history.pushState && !!Qe.history.replaceState;
                                return !t && n;
                            })()
                        )
                            return;
                        const e = Xe.onpopstate;
                        function t(e) {
                            return function (...t) {
                                const n = t.length > 2 ? t[2] : void 0;
                                if (n) {
                                    const e = at,
                                        t = String(n);
                                    (at = t), it("history", { from: e, to: t });
                                }
                                return e.apply(this, t);
                            };
                        }
                        (Xe.onpopstate = function (...t) {
                            const n = Xe.location.href,
                                r = at;
                            if (((at = n), it("history", { from: r, to: n }), e))
                                try {
                                    return e.apply(this, t);
                                } catch {}
                        }),
                            Fe(Xe.history, "pushState", t),
                            Fe(Xe.history, "replaceState", t);
                    })();
                    break;
                case "error":
                    (ht = Xe.onerror),
                        (Xe.onerror = function (e, t, n, r, i) {
                            return it("error", { column: r, error: i, line: n, msg: e, url: t }), !(!ht || ht.__SENTRY_LOADER__) && ht.apply(this, arguments);
                        }),
                        (Xe.onerror.__SENTRY_INSTRUMENTED__ = !0);
                    break;
                case "unhandledrejection":
                    (pt = Xe.onunhandledrejection),
                        (Xe.onunhandledrejection = function (e) {
                            return it("unhandledrejection", e), !(pt && !pt.__SENTRY_LOADER__) || pt.apply(this, arguments);
                        }),
                        (Xe.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
                    break;
                default:
                    return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn("unknown instrumentation type:", e));
            }
    }
    function rt(e, t) {
        (et[e] = et[e] || []), et[e].push(t), nt(e);
    }
    function it(e, t) {
        if (e && et[e])
            for (const n of et[e] || [])
                try {
                    n(t);
                } catch (t) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${ze(n)}\nError:`, t);
                }
    }
    function ot(e, t) {
        return !!e && "object" == typeof e && !!e[t];
    }
    function st(e) {
        return "string" == typeof e ? e : e ? (ot(e, "url") ? e.url : e.toString ? e.toString() : "") : "";
    }
    let at;
    const ct = 1e3;
    let lt, ut;
    function dt(e, t = !1) {
        return (n) => {
            if (
                !n ||
                ut === n ||
                (function (e) {
                    if ("keypress" !== e.type) return !1;
                    try {
                        const t = e.target;
                        if (!t || !t.tagName) return !0;
                        if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return !1;
                    } catch {}
                    return !0;
                })(n)
            )
                return;
            const r = "keypress" === n.type ? "input" : n.type;
            (void 0 === lt ||
                (function (e, t) {
                    if (!e || e.type !== t.type) return !0;
                    try {
                        if (e.target !== t.target) return !0;
                    } catch {}
                    return !1;
                })(ut, n)) &&
                (e({ event: n, name: r, global: t }), (ut = n)),
                clearTimeout(lt),
                (lt = Xe.setTimeout(() => {
                    lt = void 0;
                }, ct));
        };
    }
    let ht = null,
        pt = null;
    function ft() {
        const e = Ee,
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        const n = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
        return "10000000100040008000100000000000".replace(/[018]/g, (e) => (e ^ ((15 & n()) >> (e / 4))).toString(16));
    }
    function mt(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0;
    }
    function gt(e) {
        const { message: t, event_id: n } = e;
        if (t) return t;
        const r = mt(e);
        return r ? (r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>") : n || "<unknown>";
    }
    function vt(e, t, n) {
        const r = (e.exception = e.exception || {}),
            i = (r.values = r.values || []),
            o = (i[0] = i[0] || {});
        o.value || (o.value = t || ""), o.type || (o.type = n || "Error");
    }
    function _t(e, t) {
        const n = mt(e);
        if (!n) return;
        const r = n.mechanism;
        if (((n.mechanism = { type: "generic", handled: !0, ...r, ...t }), t && "data" in t)) {
            const e = { ...(r && r.data), ...t.data };
            n.mechanism.data = e;
        }
    }
    function yt(e) {
        if (e && e.__sentry_captured__) return !0;
        try {
            Ue(e, "__sentry_captured__", !0);
        } catch {}
        return !1;
    }
    function bt(e, t = 100, n = 1 / 0) {
        try {
            return St("", e, t, n);
        } catch (e) {
            return { ERROR: `**non-serializable** (${e})` };
        }
    }
    function wt(e, t = 3, n = 102400) {
        const r = bt(e, t);
        return (o = r), (i = JSON.stringify(o)), ~-encodeURI(i).split(/%..|./).length > n ? wt(e, t - 1, n) : r;
        var i, o;
    }
    function St(
        e,
        t,
        n = 1 / 0,
        r = 1 / 0,
        i = (function () {
            const e = "function" == typeof WeakSet,
                t = e ? new WeakSet() : [];
            return [
                function (n) {
                    if (e) return !!t.has(n) || (t.add(n), !1);
                    for (let e = 0; e < t.length; e++) if (t[e] === n) return !0;
                    return t.push(n), !1;
                },
                function (n) {
                    if (e) t.delete(n);
                    else
                        for (let e = 0; e < t.length; e++)
                            if (t[e] === n) {
                                t.splice(e, 1);
                                break;
                            }
                },
            ];
        })()
    ) {
        const [o, s] = i;
        if (null == t || (["number", "boolean", "string"].includes(typeof t) && ("number" != typeof (a = t) || a == a))) return t;
        var a;
        const c = (function (e, t) {
            try {
                if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                if ("domainEmitter" === e) return "[DomainEmitter]";
                if (typeof global < "u" && t === global) return "[Global]";
                if (typeof window < "u" && t === window) return "[Window]";
                if (typeof document < "u" && t === document) return "[Document]";
                if (de((n = t)) && "nativeEvent" in n && "preventDefault" in n && "stopPropagation" in n) return "[SyntheticEvent]";
                if ("number" == typeof t && t != t) return "[NaN]";
                if ("function" == typeof t) return `[Function: ${ze(t)}]`;
                if ("symbol" == typeof t) return `[${String(t)}]`;
                if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                const r = (function (e) {
                    const t = Object.getPrototypeOf(e);
                    return t ? t.constructor.name : "null prototype";
                })(t);
                return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`;
            } catch (e) {
                return `**non-serializable** (${e})`;
            }
            var n;
        })(e, t);
        if (!c.startsWith("[object ")) return c;
        if (t.__sentry_skip_normalization__) return t;
        const l = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : n;
        if (0 === l) return c.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        const u = t;
        if (u && "function" == typeof u.toJSON)
            try {
                return St("", u.toJSON(), l - 1, r, i);
            } catch {}
        const d = Array.isArray(t) ? [] : {};
        let h = 0;
        const p = Ye(t);
        for (const e in p) {
            if (!Object.prototype.hasOwnProperty.call(p, e)) continue;
            if (h >= r) {
                d[e] = "[MaxProperties ~]";
                break;
            }
            const t = p[e];
            (d[e] = St(e, t, l - 1, r, i)), h++;
        }
        return s(t), d;
    }
    var Et, kt;
    function Tt(e) {
        return new Mt((t) => {
            t(e);
        });
    }
    function Ct(e) {
        return new Mt((t, n) => {
            n(e);
        });
    }
    ((kt = Et || (Et = {}))[(kt.PENDING = 0)] = "PENDING"), (kt[(kt.RESOLVED = 1)] = "RESOLVED"), (kt[(kt.REJECTED = 2)] = "REJECTED");
    class Mt {
        __init() {
            this._state = Et.PENDING;
        }
        __init2() {
            this._handlers = [];
        }
        constructor(e) {
            Mt.prototype.__init.call(this), Mt.prototype.__init2.call(this), Mt.prototype.__init3.call(this), Mt.prototype.__init4.call(this), Mt.prototype.__init5.call(this), Mt.prototype.__init6.call(this);
            try {
                e(this._resolve, this._reject);
            } catch (e) {
                this._reject(e);
            }
        }
        then(e, t) {
            return new Mt((n, r) => {
                this._handlers.push([
                    !1,
                    (t) => {
                        if (e)
                            try {
                                n(e(t));
                            } catch (e) {
                                r(e);
                            }
                        else n(t);
                    },
                    (e) => {
                        if (t)
                            try {
                                n(t(e));
                            } catch (e) {
                                r(e);
                            }
                        else r(e);
                    },
                ]),
                    this._executeHandlers();
            });
        }
        catch(e) {
            return this.then((e) => e, e);
        }
        finally(e) {
            return new Mt((t, n) => {
                let r, i;
                return this.then(
                    (t) => {
                        (i = !1), (r = t), e && e();
                    },
                    (t) => {
                        (i = !0), (r = t), e && e();
                    }
                ).then(() => {
                    i ? n(r) : t(r);
                });
            });
        }
        __init3() {
            this._resolve = (e) => {
                this._setResult(Et.RESOLVED, e);
            };
        }
        __init4() {
            this._reject = (e) => {
                this._setResult(Et.REJECTED, e);
            };
        }
        __init5() {
            this._setResult = (e, t) => {
                this._state === Et.PENDING && (pe(t) ? t.then(this._resolve, this._reject) : ((this._state = e), (this._value = t), this._executeHandlers()));
            };
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state === Et.PENDING) return;
                const e = this._handlers.slice();
                (this._handlers = []),
                    e.forEach((e) => {
                        e[0] || (this._state === Et.RESOLVED && e[1](this._value), this._state === Et.REJECTED && e[2](this._value), (e[0] = !0));
                    });
            };
        }
    }
    function At(e) {
        if (!e) return {};
        const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        const n = t[6] || "",
            r = t[8] || "";
        return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r };
    }
    const Ot = ["fatal", "error", "warning", "log", "info", "debug"],
        Lt = ke(),
        It = { nowSeconds: () => Date.now() / 1e3 },
        Pt =
            (typeof __SENTRY_BROWSER_BUNDLE__ < "u" && __SENTRY_BROWSER_BUNDLE__) || "[object process]" !== Object.prototype.toString.call(typeof process < "u" ? process : 0)
                ? (function () {
                      const { performance: e } = Lt;
                      if (e && e.now) return { now: () => e.now(), timeOrigin: Date.now() - e.now() };
                  })()
                : (function () {
                      try {
                          return ((e = module), "perf_hooks", e.require("perf_hooks")).performance;
                      } catch {
                          return;
                      }
                      var e;
                  })(),
        Dt = void 0 === Pt ? It : { nowSeconds: () => (Pt.timeOrigin + Pt.now()) / 1e3 },
        xt = It.nowSeconds.bind(It),
        Nt = Dt.nowSeconds.bind(Dt);
    function Rt(e, t = []) {
        return [e, t];
    }
    function jt(e, t) {
        const [n, r] = e;
        return [n, [...r, t]];
    }
    function Ft(e, t) {
        const n = e[1];
        for (const e of n) if (t(e, e[0].type)) return !0;
        return !1;
    }
    function Ut(e, t) {
        return (t || new TextEncoder()).encode(e);
    }
    function Bt(e, t) {
        const [n, r] = e;
        let i = JSON.stringify(n);
        function o(e) {
            "string" == typeof i ? (i = "string" == typeof e ? i + e : [Ut(i, t), e]) : i.push("string" == typeof e ? Ut(e, t) : e);
        }
        for (const e of r) {
            const [t, n] = e;
            if ((o(`\n${JSON.stringify(t)}\n`), "string" == typeof n || n instanceof Uint8Array)) o(n);
            else {
                let e;
                try {
                    e = JSON.stringify(n);
                } catch {
                    e = JSON.stringify(bt(n));
                }
                o(e);
            }
        }
        return "string" == typeof i
            ? i
            : (function (e) {
                  const t = e.reduce((e, t) => e + t.length, 0),
                      n = new Uint8Array(t);
                  let r = 0;
                  for (const t of e) n.set(t, r), (r += t.length);
                  return n;
              })(i);
    }
    function Vt(e, t) {
        const n = "string" == typeof e.data ? Ut(e.data, t) : e.data;
        return [qe({ type: "attachment", length: n.length, filename: e.filename, content_type: e.contentType, attachment_type: e.attachmentType }), n];
    }
    (() => {
        const { performance: e } = Lt;
        if (!e || !e.now) return;
        const t = 36e5,
            n = e.now(),
            r = Date.now(),
            i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
            o = i < t,
            s = e.timing && e.timing.navigationStart,
            a = "number" == typeof s ? Math.abs(s + n - r) : t;
        (o || a < t) && i <= a && e.timeOrigin;
    })();
    const Yt = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
    };
    function $t(e) {
        return Yt[e];
    }
    function Gt(e) {
        if (!e || !e.sdk) return;
        const { name: t, version: n } = e.sdk;
        return { name: t, version: n };
    }
    const qt = 6e4;
    const Jt = "production";
    function Wt(e, t = {}) {
        if (
            (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
            (e.timestamp = t.timestamp || Nt()),
            t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
            t.sid && (e.sid = 32 === t.sid.length ? t.sid : ft()),
            void 0 !== t.init && (e.init = t.init),
            !e.did && t.did && (e.did = `${t.did}`),
            "number" == typeof t.started && (e.started = t.started),
            e.ignoreDuration)
        )
            e.duration = void 0;
        else if ("number" == typeof t.duration) e.duration = t.duration;
        else {
            const t = e.timestamp - e.started;
            e.duration = t >= 0 ? t : 0;
        }
        t.release && (e.release = t.release),
            t.environment && (e.environment = t.environment),
            !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
            !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
            "number" == typeof t.errors && (e.errors = t.errors),
            t.status && (e.status = t.status);
    }
    class zt {
        constructor() {
            (this._notifyingListeners = !1),
                (this._scopeListeners = []),
                (this._eventProcessors = []),
                (this._breadcrumbs = []),
                (this._attachments = []),
                (this._user = {}),
                (this._tags = {}),
                (this._extra = {}),
                (this._contexts = {}),
                (this._sdkProcessingMetadata = {}),
                (this._propagationContext = Qt());
        }
        static clone(e) {
            const t = new zt();
            return (
                e &&
                    ((t._breadcrumbs = [...e._breadcrumbs]),
                    (t._tags = { ...e._tags }),
                    (t._extra = { ...e._extra }),
                    (t._contexts = { ...e._contexts }),
                    (t._user = e._user),
                    (t._level = e._level),
                    (t._span = e._span),
                    (t._session = e._session),
                    (t._transactionName = e._transactionName),
                    (t._fingerprint = e._fingerprint),
                    (t._eventProcessors = [...e._eventProcessors]),
                    (t._requestSession = e._requestSession),
                    (t._attachments = [...e._attachments]),
                    (t._sdkProcessingMetadata = { ...e._sdkProcessingMetadata }),
                    (t._propagationContext = { ...e._propagationContext })),
                t
            );
        }
        addScopeListener(e) {
            this._scopeListeners.push(e);
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e), this;
        }
        setUser(e) {
            return (this._user = e || {}), this._session && Wt(this._session, { user: e }), this._notifyScopeListeners(), this;
        }
        getUser() {
            return this._user;
        }
        getRequestSession() {
            return this._requestSession;
        }
        setRequestSession(e) {
            return (this._requestSession = e), this;
        }
        setTags(e) {
            return (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this;
        }
        setTag(e, t) {
            return (this._tags = { ...this._tags, [e]: t }), this._notifyScopeListeners(), this;
        }
        setExtras(e) {
            return (this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this;
        }
        setExtra(e, t) {
            return (this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this;
        }
        setFingerprint(e) {
            return (this._fingerprint = e), this._notifyScopeListeners(), this;
        }
        setLevel(e) {
            return (this._level = e), this._notifyScopeListeners(), this;
        }
        setTransactionName(e) {
            return (this._transactionName = e), this._notifyScopeListeners(), this;
        }
        setContext(e, t) {
            return null === t ? delete this._contexts[e] : (this._contexts[e] = t), this._notifyScopeListeners(), this;
        }
        setSpan(e) {
            return (this._span = e), this._notifyScopeListeners(), this;
        }
        getSpan() {
            return this._span;
        }
        getTransaction() {
            const e = this.getSpan();
            return e && e.transaction;
        }
        setSession(e) {
            return e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this;
        }
        getSession() {
            return this._session;
        }
        update(e) {
            if (!e) return this;
            if ("function" == typeof e) {
                const t = e(this);
                return t instanceof zt ? t : this;
            }
            return (
                e instanceof zt
                    ? ((this._tags = { ...this._tags, ...e._tags }),
                      (this._extra = { ...this._extra, ...e._extra }),
                      (this._contexts = { ...this._contexts, ...e._contexts }),
                      e._user && Object.keys(e._user).length && (this._user = e._user),
                      e._level && (this._level = e._level),
                      e._fingerprint && (this._fingerprint = e._fingerprint),
                      e._requestSession && (this._requestSession = e._requestSession),
                      e._propagationContext && (this._propagationContext = e._propagationContext))
                    : de(e) &&
                      ((this._tags = { ...this._tags, ...e.tags }),
                      (this._extra = { ...this._extra, ...e.extra }),
                      (this._contexts = { ...this._contexts, ...e.contexts }),
                      e.user && (this._user = e.user),
                      e.level && (this._level = e.level),
                      e.fingerprint && (this._fingerprint = e.fingerprint),
                      e.requestSession && (this._requestSession = e.requestSession),
                      e.propagationContext && (this._propagationContext = e.propagationContext)),
                this
            );
        }
        clear() {
            return (
                (this._breadcrumbs = []),
                (this._tags = {}),
                (this._extra = {}),
                (this._user = {}),
                (this._contexts = {}),
                (this._level = void 0),
                (this._transactionName = void 0),
                (this._fingerprint = void 0),
                (this._requestSession = void 0),
                (this._span = void 0),
                (this._session = void 0),
                this._notifyScopeListeners(),
                (this._attachments = []),
                (this._propagationContext = Qt()),
                this
            );
        }
        addBreadcrumb(e, t) {
            const n = "number" == typeof t ? t : 100;
            if (n <= 0) return this;
            const r = { timestamp: xt(), ...e };
            return (this._breadcrumbs = [...this._breadcrumbs, r].slice(-n)), this._notifyScopeListeners(), this;
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(e) {
            return this._attachments.push(e), this;
        }
        getAttachments() {
            return this._attachments;
        }
        clearAttachments() {
            return (this._attachments = []), this;
        }
        applyToEvent(e, t = {}) {
            if (
                (this._extra && Object.keys(this._extra).length && (e.extra = { ...this._extra, ...e.extra }),
                this._tags && Object.keys(this._tags).length && (e.tags = { ...this._tags, ...e.tags }),
                this._user && Object.keys(this._user).length && (e.user = { ...this._user, ...e.user }),
                this._contexts && Object.keys(this._contexts).length && (e.contexts = { ...this._contexts, ...e.contexts }),
                this._level && (e.level = this._level),
                this._transactionName && (e.transaction = this._transactionName),
                this._span)
            ) {
                e.contexts = { trace: this._span.getTraceContext(), ...e.contexts };
                const t = this._span.transaction;
                if (t) {
                    e.sdkProcessingMetadata = { dynamicSamplingContext: t.getDynamicSamplingContext(), ...e.sdkProcessingMetadata };
                    const n = t.name;
                    n && (e.tags = { transaction: n, ...e.tags });
                }
            }
            return (
                this._applyFingerprint(e),
                (e.breadcrumbs = [...(e.breadcrumbs || []), ...this._breadcrumbs]),
                (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
                (e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...this._sdkProcessingMetadata, propagationContext: this._propagationContext }),
                this._notifyEventProcessors([...Ht(), ...this._eventProcessors], e, t)
            );
        }
        setSDKProcessingMetadata(e) {
            return (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...e }), this;
        }
        setPropagationContext(e) {
            return (this._propagationContext = e), this;
        }
        getPropagationContext() {
            return this._propagationContext;
        }
        _notifyEventProcessors(e, t, n, r = 0) {
            return new Mt((i, o) => {
                const s = e[r];
                if (null === t || "function" != typeof s) i(t);
                else {
                    const a = s({ ...t }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && s.id && null === a && De.log(`Event processor "${s.id}" dropped event`),
                        pe(a)
                            ? a.then((t) => this._notifyEventProcessors(e, t, n, r + 1).then(i)).then(null, o)
                            : this._notifyEventProcessors(e, a, n, r + 1)
                                  .then(i)
                                  .then(null, o);
                }
            });
        }
        _notifyScopeListeners() {
            this._notifyingListeners ||
                ((this._notifyingListeners = !0),
                this._scopeListeners.forEach((e) => {
                    e(this);
                }),
                (this._notifyingListeners = !1));
        }
        _applyFingerprint(e) {
            var t;
            (e.fingerprint = e.fingerprint ? ((t = e.fingerprint), Array.isArray(t) ? t : [t]) : []),
                this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
        }
    }
    function Ht() {
        return Te("globalEventProcessors", () => []);
    }
    function Kt(e) {
        Ht().push(e);
    }
    function Qt() {
        return { traceId: ft(), spanId: ft().substring(16), sampled: !1 };
    }
    const Xt = 4,
        Zt = 100;
    class en {
        constructor(e, t = new zt(), n = Xt) {
            (this._version = n), (this._stack = [{ scope: t }]), e && this.bindClient(e);
        }
        isOlderThan(e) {
            return this._version < e;
        }
        bindClient(e) {
            (this.getStackTop().client = e), e && e.setupIntegrations && e.setupIntegrations();
        }
        pushScope() {
            const e = zt.clone(this.getScope());
            return this.getStack().push({ client: this.getClient(), scope: e }), e;
        }
        popScope() {
            return !(this.getStack().length <= 1 || !this.getStack().pop());
        }
        withScope(e) {
            const t = this.pushScope();
            try {
                e(t);
            } finally {
                this.popScope();
            }
        }
        getClient() {
            return this.getStackTop().client;
        }
        getScope() {
            return this.getStackTop().scope;
        }
        getStack() {
            return this._stack;
        }
        getStackTop() {
            return this._stack[this._stack.length - 1];
        }
        captureException(e, t) {
            const n = (this._lastEventId = t && t.event_id ? t.event_id : ft()),
                r = new Error("Sentry syntheticException");
            return (
                this._withClient((i, o) => {
                    i.captureException(e, { originalException: e, syntheticException: r, ...t, event_id: n }, o);
                }),
                n
            );
        }
        captureMessage(e, t, n) {
            const r = (this._lastEventId = n && n.event_id ? n.event_id : ft()),
                i = new Error(e);
            return (
                this._withClient((o, s) => {
                    o.captureMessage(e, t, { originalException: e, syntheticException: i, ...n, event_id: r }, s);
                }),
                r
            );
        }
        captureEvent(e, t) {
            const n = t && t.event_id ? t.event_id : ft();
            return (
                e.type || (this._lastEventId = n),
                this._withClient((r, i) => {
                    r.captureEvent(e, { ...t, event_id: n }, i);
                }),
                n
            );
        }
        lastEventId() {
            return this._lastEventId;
        }
        addBreadcrumb(e, t) {
            const { scope: n, client: r } = this.getStackTop();
            if (!r) return;
            const { beforeBreadcrumb: i = null, maxBreadcrumbs: o = Zt } = (r.getOptions && r.getOptions()) || {};
            if (o <= 0) return;
            const s = { timestamp: xt(), ...e },
                a = i ? Ie(() => i(s, t)) : s;
            null !== a && (r.emit && r.emit("beforeAddBreadcrumb", a, t), n.addBreadcrumb(a, o));
        }
        setUser(e) {
            this.getScope().setUser(e);
        }
        setTags(e) {
            this.getScope().setTags(e);
        }
        setExtras(e) {
            this.getScope().setExtras(e);
        }
        setTag(e, t) {
            this.getScope().setTag(e, t);
        }
        setExtra(e, t) {
            this.getScope().setExtra(e, t);
        }
        setContext(e, t) {
            this.getScope().setContext(e, t);
        }
        configureScope(e) {
            const { scope: t, client: n } = this.getStackTop();
            n && e(t);
        }
        run(e) {
            const t = nn(this);
            try {
                e(this);
            } finally {
                nn(t);
            }
        }
        getIntegration(e) {
            const t = this.getClient();
            if (!t) return null;
            try {
                return t.getIntegration(e);
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null;
            }
        }
        startTransaction(e, t) {
            const n = this._callExtensionMethod("startTransaction", e, t);
            return (
                (typeof __SENTRY_DEBUG__ < "u" && !__SENTRY_DEBUG__) ||
                    n ||
                    console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"),
                n
            );
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders");
        }
        captureSession(e = !1) {
            if (e) return this.endSession();
            this._sendSessionUpdate();
        }
        endSession() {
            const e = this.getStackTop().scope,
                t = e.getSession();
            t &&
                (function (e, t) {
                    let n = {};
                    "ok" === e.status && (n = { status: "exited" }), Wt(e, n);
                })(t),
                this._sendSessionUpdate(),
                e.setSession();
        }
        startSession(e) {
            const { scope: t, client: n } = this.getStackTop(),
                { release: r, environment: i = Jt } = (n && n.getOptions()) || {},
                { userAgent: o } = Ee.navigator || {},
                s = (function (e) {
                    const t = Nt(),
                        n = {
                            sid: ft(),
                            init: !0,
                            timestamp: t,
                            started: t,
                            duration: 0,
                            status: "ok",
                            errors: 0,
                            ignoreDuration: !1,
                            toJSON: () => {
                                return qe({
                                    sid: `${(e = n).sid}`,
                                    init: e.init,
                                    started: new Date(1e3 * e.started).toISOString(),
                                    timestamp: new Date(1e3 * e.timestamp).toISOString(),
                                    status: e.status,
                                    errors: e.errors,
                                    did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                                    duration: e.duration,
                                    attrs: { release: e.release, environment: e.environment, ip_address: e.ipAddress, user_agent: e.userAgent },
                                });
                                var e;
                            },
                        };
                    return e && Wt(n, e), n;
                })({ release: r, environment: i, user: t.getUser(), ...(o && { userAgent: o }), ...e }),
                a = t.getSession && t.getSession();
            return a && "ok" === a.status && Wt(a, { status: "exited" }), this.endSession(), t.setSession(s), s;
        }
        shouldSendDefaultPii() {
            const e = this.getClient(),
                t = e && e.getOptions();
            return !(!t || !t.sendDefaultPii);
        }
        _sendSessionUpdate() {
            const { scope: e, client: t } = this.getStackTop(),
                n = e.getSession();
            n && t && t.captureSession && t.captureSession(n);
        }
        _withClient(e) {
            const { scope: t, client: n } = this.getStackTop();
            n && e(n, t);
        }
        _callExtensionMethod(e, ...t) {
            const n = tn().__SENTRY__;
            if (n && n.extensions && "function" == typeof n.extensions[e]) return n.extensions[e].apply(this, t);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn(`Extension method ${e} couldn't be found, doing nothing.`);
        }
    }
    function tn() {
        return (Ee.__SENTRY__ = Ee.__SENTRY__ || { extensions: {}, hub: void 0 }), Ee;
    }
    function nn(e) {
        const t = tn(),
            n = on(t);
        return sn(t, e), n;
    }
    function rn() {
        const e = tn();
        if (e.__SENTRY__ && e.__SENTRY__.acs) {
            const t = e.__SENTRY__.acs.getCurrentHub();
            if (t) return t;
        }
        return (function (e = tn()) {
            var t;
            return ((t = e) && t.__SENTRY__ && t.__SENTRY__.hub && !on(e).isOlderThan(Xt)) || sn(e, new en()), on(e);
        })(e);
    }
    function on(e) {
        return Te("hub", () => new en(), e);
    }
    function sn(e, t) {
        return !!e && (((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t), !0);
    }
    const an = [];
    function cn(e, t) {
        (t[e.name] = e), -1 === an.indexOf(e.name) && (e.setupOnce(Kt, rn), an.push(e.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.log(`Integration installed: ${e.name}`));
    }
    const ln = new WeakMap(),
        un = "Not capturing exception because it's already been captured.";
    class dn {
        __init() {
            this._integrations = {};
        }
        __init2() {
            this._integrationsInitialized = !1;
        }
        __init3() {
            this._numProcessing = 0;
        }
        __init4() {
            this._outcomes = {};
        }
        __init5() {
            this._hooks = {};
        }
        constructor(e) {
            if (
                (dn.prototype.__init.call(this),
                dn.prototype.__init2.call(this),
                dn.prototype.__init3.call(this),
                dn.prototype.__init4.call(this),
                dn.prototype.__init5.call(this),
                (this._options = e),
                e.dsn
                    ? (this._dsn = (function (e) {
                          const t =
                              "string" == typeof e
                                  ? (function (e) {
                                        const t = xe.exec(e);
                                        if (!t) return void console.error(`Invalid Sentry Dsn: ${e}`);
                                        const [n, r, i = "", o, s = "", a] = t.slice(1);
                                        let c = "",
                                            l = a;
                                        const u = l.split("/");
                                        if ((u.length > 1 && ((c = u.slice(0, -1).join("/")), (l = u.pop())), l)) {
                                            const e = l.match(/^\d+/);
                                            e && (l = e[0]);
                                        }
                                        return Re({ host: o, pass: i, path: c, projectId: l, port: s, protocol: n, publicKey: r });
                                    })(e)
                                  : Re(e);
                          if (
                              t &&
                              (function (e) {
                                  if (typeof __SENTRY_DEBUG__ < "u" && !__SENTRY_DEBUG__) return !0;
                                  const { port: t, projectId: n, protocol: r } = e;
                                  return !(
                                      ["protocol", "publicKey", "host", "projectId"].find((t) => !e[t] && (De.error(`Invalid Sentry Dsn: ${t} missing`), !0)) ||
                                      (n.match(/^\d+$/)
                                          ? ((i = r), "http" === i || "https" === i ? t && isNaN(parseInt(t, 10)) && (De.error(`Invalid Sentry Dsn: Invalid port ${t}`), 1) : (De.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), 1))
                                          : (De.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1))
                                  );
                                  var i;
                              })(t)
                          )
                              return t;
                      })(e.dsn))
                    : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn("No DSN provided, client will not do anything."),
                this._dsn)
            ) {
                const t = (function (e, t = {}) {
                    const n = "string" == typeof t ? t : t.tunnel,
                        r = "string" != typeof t && t._metadata ? t._metadata.sdk : void 0;
                    return (
                        n ||
                        `${
                            ((i = e),
                            `${(function (e) {
                                const t = e.protocol ? `${e.protocol}:` : "",
                                    n = e.port ? `:${e.port}` : "";
                                return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
                            })(i)}${i.projectId}/envelope/`)
                        }?${(function (e, t) {
                            return (
                                (n = { sentry_key: e.publicKey, sentry_version: "7", ...(t && { sentry_client: `${t.name}/${t.version}` }) }),
                                Object.keys(n)
                                    .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`)
                                    .join("&")
                            );
                            var n;
                        })(e, r)}`
                    );
                    var i;
                })(this._dsn, e);
                this._transport = e.transport({ recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e.transportOptions, url: t });
            }
        }
        captureException(e, t, n) {
            if (yt(e)) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.log(un));
            let r = t && t.event_id;
            return (
                this._process(
                    this.eventFromException(e, t)
                        .then((e) => this._captureEvent(e, t, n))
                        .then((e) => {
                            r = e;
                        })
                ),
                r
            );
        }
        captureMessage(e, t, n, r) {
            let i = n && n.event_id;
            const o = ue(e) ? this.eventFromMessage(String(e), t, n) : this.eventFromException(e, n);
            return (
                this._process(
                    o
                        .then((e) => this._captureEvent(e, n, r))
                        .then((e) => {
                            i = e;
                        })
                ),
                i
            );
        }
        captureEvent(e, t, n) {
            if (t && t.originalException && yt(t.originalException)) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.log(un));
            let r = t && t.event_id;
            return (
                this._process(
                    this._captureEvent(e, t, n).then((e) => {
                        r = e;
                    })
                ),
                r
            );
        }
        captureSession(e) {
            this._isEnabled()
                ? "string" != typeof e.release
                    ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn("Discarded session because of missing or non-string release")
                    : (this.sendSession(e), Wt(e, { init: !1 }))
                : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn("SDK not enabled, will not capture session.");
        }
        getDsn() {
            return this._dsn;
        }
        getOptions() {
            return this._options;
        }
        getSdkMetadata() {
            return this._options._metadata;
        }
        getTransport() {
            return this._transport;
        }
        flush(e) {
            const t = this._transport;
            return t ? this._isClientDoneProcessing(e).then((n) => t.flush(e).then((e) => n && e)) : Tt(!0);
        }
        close(e) {
            return this.flush(e).then((e) => ((this.getOptions().enabled = !1), e));
        }
        setupIntegrations() {
            this._isEnabled() &&
                !this._integrationsInitialized &&
                ((this._integrations = (function (e) {
                    const t = {};
                    return (
                        e.forEach((e) => {
                            e && cn(e, t);
                        }),
                        t
                    );
                })(this._options.integrations)),
                (this._integrationsInitialized = !0));
        }
        getIntegrationById(e) {
            return this._integrations[e];
        }
        getIntegration(e) {
            try {
                return this._integrations[e.id] || null;
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn(`Cannot retrieve integration ${e.id} from the current Client`), null;
            }
        }
        addIntegration(e) {
            cn(e, this._integrations);
        }
        sendEvent(e, t = {}) {
            if (this._dsn) {
                let n = (function (e, t, n, r) {
                    const i = Gt(n),
                        o = e.type && "replay_event" !== e.type ? e.type : "event";
                    var s, a;
                    (s = e),
                        (a = n && n.sdk) &&
                            ((s.sdk = s.sdk || {}),
                            (s.sdk.name = s.sdk.name || a.name),
                            (s.sdk.version = s.sdk.version || a.version),
                            (s.sdk.integrations = [...(s.sdk.integrations || []), ...(a.integrations || [])]),
                            (s.sdk.packages = [...(s.sdk.packages || []), ...(a.packages || [])]));
                    const c = (function (e, t, n, r) {
                        const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                        return { event_id: e.event_id, sent_at: new Date().toISOString(), ...(t && { sdk: t }), ...(!!n && { dsn: Ne(r) }), ...(i && { trace: qe({ ...i }) }) };
                    })(e, i, r, t);
                    return delete e.sdkProcessingMetadata, Rt(c, [[{ type: o }, e]]);
                })(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (const e of t.attachments || []) n = jt(n, Vt(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
                const r = this._sendEnvelope(n);
                r && r.then((t) => this.emit("afterSendEvent", e, t), null);
            }
        }
        sendSession(e) {
            if (this._dsn) {
                const t = (function (e, t, n, r) {
                    const i = Gt(n);
                    return Rt({ sent_at: new Date().toISOString(), ...(i && { sdk: i }), ...(!!r && { dsn: Ne(t) }) }, ["aggregates" in e ? [{ type: "sessions" }, e] : [{ type: "session" }, e.toJSON()]]);
                })(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(t);
            }
        }
        recordDroppedEvent(e, t, n) {
            if (this._options.sendClientReports) {
                const n = `${e}:${t}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.log(`Adding outcome: "${n}"`), (this._outcomes[n] = this._outcomes[n] + 1 || 1);
            }
        }
        on(e, t) {
            this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t);
        }
        emit(e, ...t) {
            this._hooks[e] && this._hooks[e].forEach((e) => e(...t));
        }
        _updateSessionFromEvent(e, t) {
            let n = !1,
                r = !1;
            const i = t.exception && t.exception.values;
            if (i) {
                r = !0;
                for (const e of i) {
                    const t = e.mechanism;
                    if (t && !1 === t.handled) {
                        n = !0;
                        break;
                    }
                }
            }
            const o = "ok" === e.status;
            ((o && 0 === e.errors) || (o && n)) && (Wt(e, { ...(n && { status: "crashed" }), errors: e.errors || Number(r || n) }), this.captureSession(e));
        }
        _isClientDoneProcessing(e) {
            return new Mt((t) => {
                let n = 0;
                const r = setInterval(() => {
                    0 == this._numProcessing ? (clearInterval(r), t(!0)) : ((n += 1), e && n >= e && (clearInterval(r), t(!1)));
                }, 1);
            });
        }
        _isEnabled() {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
        }
        _prepareEvent(e, t, n) {
            const r = this.getOptions(),
                i = Object.keys(this._integrations);
            return (
                !t.integrations && i.length > 0 && (t.integrations = i),
                (function (e, t, n, r) {
                    const { normalizeDepth: i = 3, normalizeMaxBreadth: o = 1e3 } = e,
                        s = { ...t, event_id: t.event_id || n.event_id || ft(), timestamp: t.timestamp || xt() },
                        a = n.integrations || e.integrations.map((e) => e.name);
                    var c, l;
                    (function (e, t) {
                        const { environment: n, release: r, dist: i, maxValueLength: o = 250 } = t;
                        "environment" in e || (e.environment = "environment" in t ? n : Jt),
                            void 0 === e.release && void 0 !== r && (e.release = r),
                            void 0 === e.dist && void 0 !== i && (e.dist = i),
                            e.message && (e.message = me(e.message, o));
                        const s = e.exception && e.exception.values && e.exception.values[0];
                        s && s.value && (s.value = me(s.value, o));
                        const a = e.request;
                        a && a.url && (a.url = me(a.url, o));
                    })(s, e),
                        (c = s),
                        (l = a).length > 0 && ((c.sdk = c.sdk || {}), (c.sdk.integrations = [...(c.sdk.integrations || []), ...l])),
                        void 0 === t.type &&
                            (function (e, t) {
                                const n = Ee._sentryDebugIds;
                                if (!n) return;
                                let r;
                                const i = ln.get(t);
                                i ? (r = i) : ((r = new Map()), ln.set(t, r));
                                const o = Object.keys(n).reduce((e, i) => {
                                    let o;
                                    const s = r.get(i);
                                    s ? (o = s) : ((o = t(i)), r.set(i, o));
                                    for (let t = o.length - 1; t >= 0; t--) {
                                        const r = o[t];
                                        if (r.filename) {
                                            e[r.filename] = n[i];
                                            break;
                                        }
                                    }
                                    return e;
                                }, {});
                                try {
                                    e.exception.values.forEach((e) => {
                                        e.stacktrace.frames.forEach((e) => {
                                            e.filename && (e.debug_id = o[e.filename]);
                                        });
                                    });
                                } catch {}
                            })(s, e.stackParser);
                    let u = r;
                    n.captureContext && (u = zt.clone(u).update(n.captureContext));
                    let d = Tt(s);
                    if (u) {
                        if (u.getAttachments) {
                            const e = [...(n.attachments || []), ...u.getAttachments()];
                            e.length && (n.attachments = e);
                        }
                        d = u.applyToEvent(s, n);
                    }
                    return d.then(
                        (e) => (
                            e &&
                                (function (e) {
                                    const t = {};
                                    try {
                                        e.exception.values.forEach((e) => {
                                            e.stacktrace.frames.forEach((e) => {
                                                e.debug_id && (e.abs_path ? (t[e.abs_path] = e.debug_id) : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id);
                                            });
                                        });
                                    } catch {}
                                    if (0 === Object.keys(t).length) return;
                                    (e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || []);
                                    const n = e.debug_meta.images;
                                    Object.keys(t).forEach((e) => {
                                        n.push({ type: "sourcemap", code_file: e, debug_id: t[e] });
                                    });
                                })(e),
                            "number" == typeof i && i > 0
                                ? (function (e, t, n) {
                                      if (!e) return null;
                                      const r = {
                                          ...e,
                                          ...(e.breadcrumbs && { breadcrumbs: e.breadcrumbs.map((e) => ({ ...e, ...(e.data && { data: bt(e.data, t, n) }) })) }),
                                          ...(e.user && { user: bt(e.user, t, n) }),
                                          ...(e.contexts && { contexts: bt(e.contexts, t, n) }),
                                          ...(e.extra && { extra: bt(e.extra, t, n) }),
                                      };
                                      return (
                                          e.contexts && e.contexts.trace && r.contexts && ((r.contexts.trace = e.contexts.trace), e.contexts.trace.data && (r.contexts.trace.data = bt(e.contexts.trace.data, t, n))),
                                          e.spans && (r.spans = e.spans.map((e) => (e.data && (e.data = bt(e.data, t, n)), e))),
                                          r
                                      );
                                  })(e, i, o)
                                : e
                        )
                    );
                })(r, e, t, n).then((e) => {
                    if (null === e) return e;
                    const { propagationContext: t } = e.sdkProcessingMetadata || {};
                    if ((!e.contexts || !e.contexts.trace) && t) {
                        const { traceId: r, spanId: i, parentSpanId: o, dsc: s } = t;
                        e.contexts = { trace: { trace_id: r, span_id: i, parent_span_id: o }, ...e.contexts };
                        const a =
                            s ||
                            (function (e, t, n) {
                                const r = t.getOptions(),
                                    { publicKey: i } = t.getDsn() || {},
                                    { segment: o } = (n && n.getUser()) || {},
                                    s = qe({ environment: r.environment || Jt, release: r.release, user_segment: o, public_key: i, trace_id: e });
                                return t.emit && t.emit("createDsc", s), s;
                            })(r, this, n);
                        e.sdkProcessingMetadata = { dynamicSamplingContext: a, ...e.sdkProcessingMetadata };
                    }
                    return e;
                })
            );
        }
        _captureEvent(e, t = {}, n) {
            return this._processEvent(e, t, n).then(
                (e) => e.event_id,
                (e) => {
                    if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                        const t = e;
                        "log" === t.logLevel ? De.log(t.message) : De.warn(t);
                    }
                }
            );
        }
        _processEvent(e, t, n) {
            const r = this.getOptions(),
                { sampleRate: i } = r;
            if (!this._isEnabled()) return Ct(new je("SDK not enabled, will not capture event.", "log"));
            const o = pn(e),
                s = hn(e),
                a = e.type || "error",
                c = `before send for type \`${a}\``;
            if (s && "number" == typeof i && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", e), Ct(new je(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
            const l = "replay_event" === a ? "replay" : a;
            return this._prepareEvent(e, t, n)
                .then((n) => {
                    if (null === n) throw (this.recordDroppedEvent("event_processor", l, e), new je("An event processor returned `null`, will not send event.", "log"));
                    if (t.data && !0 === t.data.__sentry__) return n;
                    return (function (e, t) {
                        const n = `${t} must return \`null\` or a valid event.`;
                        if (pe(e))
                            return e.then(
                                (e) => {
                                    if (!de(e) && null !== e) throw new je(n);
                                    return e;
                                },
                                (e) => {
                                    throw new je(`${t} rejected with ${e}`);
                                }
                            );
                        if (!de(e) && null !== e) throw new je(n);
                        return e;
                    })(
                        (function (e, t, n) {
                            const { beforeSend: r, beforeSendTransaction: i } = e;
                            return hn(t) && r ? r(t, n) : pn(t) && i ? i(t, n) : t;
                        })(r, n, t),
                        c
                    );
                })
                .then((r) => {
                    if (null === r) throw (this.recordDroppedEvent("before_send", l, e), new je(`${c} returned \`null\`, will not send event.`, "log"));
                    const i = n && n.getSession();
                    !o && i && this._updateSessionFromEvent(i, r);
                    const s = r.transaction_info;
                    if (o && s && r.transaction !== e.transaction) {
                        const e = "custom";
                        r.transaction_info = { ...s, source: e };
                    }
                    return this.sendEvent(r, t), r;
                })
                .then(null, (e) => {
                    throw e instanceof je
                        ? e
                        : (this.captureException(e, { data: { __sentry__: !0 }, originalException: e }),
                          new je(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`));
                });
        }
        _process(e) {
            this._numProcessing++,
                e.then(
                    (e) => (this._numProcessing--, e),
                    (e) => (this._numProcessing--, e)
                );
        }
        _sendEnvelope(e) {
            if (this._transport && this._dsn)
                return (
                    this.emit("beforeEnvelope", e),
                    this._transport.send(e).then(null, (e) => {
                        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.error("Error while sending event:", e);
                    })
                );
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.error("Transport disabled");
        }
        _clearOutcomes() {
            const e = this._outcomes;
            return (
                (this._outcomes = {}),
                Object.keys(e).map((t) => {
                    const [n, r] = t.split(":");
                    return { reason: n, category: r, quantity: e[t] };
                })
            );
        }
    }
    function hn(e) {
        return void 0 === e.type;
    }
    function pn(e) {
        return "transaction" === e.type;
    }
    const fn = 30;
    function mn(
        e,
        t,
        n = (function (e) {
            const t = [];
            function n(e) {
                return t.splice(t.indexOf(e), 1)[0];
            }
            return {
                $: t,
                add: function (r) {
                    if (!(void 0 === e || t.length < e)) return Ct(new je("Not adding Promise because buffer limit was reached."));
                    const i = r();
                    return -1 === t.indexOf(i) && t.push(i), i.then(() => n(i)).then(null, () => n(i).then(null, () => {})), i;
                },
                drain: function (e) {
                    return new Mt((n, r) => {
                        let i = t.length;
                        if (!i) return n(!0);
                        const o = setTimeout(() => {
                            e && e > 0 && n(!1);
                        }, e);
                        t.forEach((e) => {
                            Tt(e).then(() => {
                                --i || (clearTimeout(o), n(!0));
                            }, r);
                        });
                    });
                },
            };
        })(e.bufferSize || fn)
    ) {
        let r = {};
        function i(i) {
            const o = [];
            if (
                (Ft(i, (t, n) => {
                    const i = $t(n);
                    if (
                        (function (e, t, n = Date.now()) {
                            return ((r = e)[t] || r.all || 0) > n;
                            var r;
                        })(r, i)
                    ) {
                        const r = gn(t, n);
                        e.recordDroppedEvent("ratelimit_backoff", i, r);
                    } else o.push(t);
                }),
                0 === o.length)
            )
                return Tt();
            const s = Rt(i[0], o),
                a = (t) => {
                    Ft(s, (n, r) => {
                        const i = gn(n, r);
                        e.recordDroppedEvent(t, $t(r), i);
                    });
                };
            return n
                .add(() =>
                    t({ body: Bt(s, e.textEncoder) }).then(
                        (e) => (
                            void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                            (r = (function (e, { statusCode: t, headers: n }, r = Date.now()) {
                                const i = { ...e },
                                    o = n && n["x-sentry-rate-limits"],
                                    s = n && n["retry-after"];
                                if (o)
                                    for (const e of o.trim().split(",")) {
                                        const [t, n] = e.split(":", 2),
                                            o = parseInt(t, 10),
                                            s = 1e3 * (isNaN(o) ? 60 : o);
                                        if (n) for (const e of n.split(";")) i[e] = r + s;
                                        else i.all = r + s;
                                    }
                                else
                                    s
                                        ? (i.all =
                                              r +
                                              (function (e, t = Date.now()) {
                                                  const n = parseInt(`${e}`, 10);
                                                  if (!isNaN(n)) return 1e3 * n;
                                                  const r = Date.parse(`${e}`);
                                                  return isNaN(r) ? qt : r - t;
                                              })(s, r))
                                        : 429 === t && (i.all = r + 6e4);
                                return i;
                            })(r, e)),
                            e
                        ),
                        (e) => {
                            throw (a("network_error"), e);
                        }
                    )
                )
                .then(
                    (e) => e,
                    (e) => {
                        if (e instanceof je) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.error("Skipped sending event because buffer is full."), a("queue_overflow"), Tt();
                        throw e;
                    }
                );
        }
        return (i.__sentry__baseTransport__ = !0), { send: i, flush: (e) => n.drain(e) };
    }
    function gn(e, t) {
        if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0;
    }
    const vn = "7.60.1";
    let _n;
    class yn {
        constructor() {
            yn.prototype.__init.call(this);
        }
        static __initStatic() {
            this.id = "FunctionToString";
        }
        __init() {
            this.name = yn.id;
        }
        setupOnce() {
            _n = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...e) {
                    const t = Ve(this) || this;
                    return _n.apply(t, e);
                };
            } catch {}
        }
    }
    yn.__initStatic();
    const bn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        wn = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
    class Sn {
        static __initStatic() {
            this.id = "InboundFilters";
        }
        __init() {
            this.name = Sn.id;
        }
        constructor(e = {}) {
            (this._options = e), Sn.prototype.__init.call(this);
        }
        setupOnce(e, t) {
            const n = (e) => {
                const n = t();
                if (n) {
                    const t = n.getIntegration(Sn);
                    if (t) {
                        const a = n.getClient(),
                            c = a ? a.getOptions() : {},
                            l = (function (e = {}, t = {}) {
                                return {
                                    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                                    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                                    ignoreErrors: [...(e.ignoreErrors || []), ...(t.ignoreErrors || []), ...(e.disableErrorDefaults ? [] : bn)],
                                    ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || []), ...(e.disableTransactionDefaults ? [] : wn)],
                                    ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal,
                                };
                            })(t._options, c);
                        return (
                            (r = e),
                            (
                                (i = l).ignoreInternal &&
                                (function (e) {
                                    try {
                                        return "SentryError" === e.exception.values[0].type;
                                    } catch {}
                                    return !1;
                                })(r)
                                    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${gt(r)}`), 1)
                                    : ((o = r),
                                      (s = i.ignoreErrors),
                                      !o.type &&
                                      s &&
                                      s.length &&
                                      (function (e) {
                                          if (e.message) return [e.message];
                                          if (e.exception) {
                                              const { values: t } = e.exception;
                                              try {
                                                  const { type: e = "", value: n = "" } = (t && t[t.length - 1]) || {};
                                                  return [`${n}`, `${e}: ${n}`];
                                              } catch {
                                                  return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.error(`Cannot extract message for event ${gt(e)}`), [];
                                              }
                                          }
                                          return [];
                                      })(o).some((e) => ve(e, s))
                                          ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${gt(r)}`), 1)
                                          : (function (e, t) {
                                                if ("transaction" !== e.type || !t || !t.length) return !1;
                                                const n = e.transaction;
                                                return !!n && ve(n, t);
                                            })(r, i.ignoreTransactions)
                                          ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${gt(r)}`), 1)
                                          : (function (e, t) {
                                                if (!t || !t.length) return !1;
                                                const n = En(e);
                                                return !!n && ve(n, t);
                                            })(r, i.denyUrls)
                                          ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${gt(r)}.\nUrl: ${En(r)}`), 1)
                                          : !(function (e, t) {
                                                if (!t || !t.length) return !0;
                                                const n = En(e);
                                                return !n || ve(n, t);
                                            })(r, i.allowUrls) && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${gt(r)}.\nUrl: ${En(r)}`), 1))
                            )
                                ? null
                                : e
                        );
                    }
                }
                var r, i, o, s;
                return e;
            };
            (n.id = this.name), e(n);
        }
    }
    function En(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames;
            } catch {}
            return t
                ? (function (e = []) {
                      for (let t = e.length - 1; t >= 0; t--) {
                          const n = e[t];
                          if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null;
                      }
                      return null;
                  })(t)
                : null;
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.error(`Cannot extract url for event ${gt(e)}`), null;
        }
    }
    Sn.__initStatic();
    var kn = Object.freeze({ __proto__: null, FunctionToString: yn, InboundFilters: Sn });
    const Tn = Ee;
    let Cn = 0;
    function Mn() {
        return Cn > 0;
    }
    function An(e, t = {}, n) {
        if ("function" != typeof e) return e;
        try {
            const t = e.__sentry_wrapped__;
            if (t) return t;
            if (Ve(e)) return e;
        } catch {
            return e;
        }
        const r = function () {
            const r = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                const i = r.map((e) => An(e, t));
                return e.apply(this, i);
            } catch (e) {
                throw (
                    (Cn++,
                    setTimeout(() => {
                        Cn--;
                    }),
                    (i = (n) => {
                        var i;
                        n.addEventProcessor((e) => (t.mechanism && (vt(e, void 0, void 0), _t(e, t.mechanism)), (e.extra = { ...e.extra, arguments: r }), e)), (i = e), rn().captureException(i, { captureContext: undefined });
                    }),
                    rn().withScope(i),
                    e)
                );
            }
            var i;
        };
        try {
            for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
        } catch {}
        Be(r, e), Ue(e, "__sentry_wrapped__", r);
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", { get: () => e.name });
        } catch {}
        return r;
    }
    function On(e, t) {
        const n = In(e, t),
            r = { type: t && t.name, value: Dn(t) };
        return n.length && (r.stacktrace = { frames: n }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r;
    }
    function Ln(e, t) {
        return { exception: { values: [On(e, t)] } };
    }
    function In(e, t) {
        const n = t.stacktrace || t.stack || "",
            r = (function (e) {
                if (e) {
                    if ("number" == typeof e.framesToPop) return e.framesToPop;
                    if (Pn.test(e.message)) return 1;
                }
                return 0;
            })(t);
        try {
            return e(n, r);
        } catch {}
        return [];
    }
    const Pn = /Minified React error #\d+;/i;
    function Dn(e) {
        const t = e && e.message;
        return t ? (t.error && "string" == typeof t.error.message ? t.error.message : t) : "No error message";
    }
    function xn(e, t, n, r, i) {
        let o;
        if (ae(t) && t.error) return Ln(e, t.error);
        if (ce(t) || se(t, "DOMException")) {
            const i = t;
            if ("stack" in t) o = Ln(e, t);
            else {
                const t = i.name || (ce(i) ? "DOMError" : "DOMException"),
                    s = i.message ? `${t}: ${i.message}` : t;
                (o = Nn(e, s, n, r)), vt(o, s);
            }
            return "code" in i && (o.tags = { ...o.tags, "DOMException.code": `${i.code}` }), o;
        }
        return oe(t)
            ? Ln(e, t)
            : de(t) || he(t)
            ? ((o = (function (e, t, n, r) {
                  const i = rn().getClient(),
                      o = i && i.getOptions().normalizeDepth,
                      s = { exception: { values: [{ type: he(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error", value: Rn(t, { isUnhandledRejection: r }) }] }, extra: { __serialized__: wt(t, o) } };
                  if (n) {
                      const t = In(e, n);
                      t.length && (s.exception.values[0].stacktrace = { frames: t });
                  }
                  return s;
              })(e, t, n, i)),
              _t(o, { synthetic: !0 }),
              o)
            : ((o = Nn(e, t, n, r)), vt(o, `${t}`, void 0), _t(o, { synthetic: !0 }), o);
    }
    function Nn(e, t, n, r) {
        const i = { message: t };
        if (r && n) {
            const r = In(e, n);
            r.length && (i.exception = { values: [{ value: t, stacktrace: { frames: r } }] });
        }
        return i;
    }
    function Rn(e, { isUnhandledRejection: t }) {
        const n = (function (e, t = 40) {
                const n = Object.keys(Ye(e));
                if ((n.sort(), !n.length)) return "[object has no keys]";
                if (n[0].length >= t) return me(n[0], t);
                for (let e = n.length; e > 0; e--) {
                    const r = n.slice(0, e).join(", ");
                    if (!(r.length > t)) return e === n.length ? r : me(r, t);
                }
                return "";
            })(e),
            r = t ? "promise rejection" : "exception";
        return ae(e)
            ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
            : he(e)
            ? `Event \`${(function (e) {
                  try {
                      const t = Object.getPrototypeOf(e);
                      return t ? t.constructor.name : void 0;
                  } catch {}
              })(e)}\` (type=${e.type}) captured as ${r}`
            : `Object captured as ${r} with keys: ${n}`;
    }
    const jn = "Breadcrumbs";
    class Fn {
        static __initStatic() {
            this.id = jn;
        }
        __init() {
            this.name = Fn.id;
        }
        constructor(e) {
            Fn.prototype.__init.call(this), (this.options = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...e });
        }
        setupOnce() {
            var e;
            this.options.console && rt("console", Un),
                this.options.dom &&
                    rt(
                        "dom",
                        ((e = this.options.dom),
                        function (t) {
                            let n,
                                r = "object" == typeof e ? e.serializeAttribute : void 0,
                                i = "object" == typeof e && "number" == typeof e.maxStringLength ? e.maxStringLength : void 0;
                            i && i > 1024 && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`), (i = 1024)),
                                "string" == typeof r && (r = [r]);
                            try {
                                const e = t.event;
                                n = (o = e) && o.target ? Ae(e.target, { keyAttrs: r, maxStringLength: i }) : Ae(e, { keyAttrs: r, maxStringLength: i });
                            } catch {
                                n = "<unknown>";
                            }
                            var o;
                            0 !== n.length && rn().addBreadcrumb({ category: `ui.${t.name}`, message: n }, { event: t.event, name: t.name, global: t.global });
                        })
                    ),
                this.options.xhr && rt("xhr", Bn),
                this.options.fetch && rt("fetch", Vn),
                this.options.history && rt("history", Yn);
        }
        addSentryBreadcrumb(e) {
            this.options.sentry && rn().addBreadcrumb({ category: "sentry." + ("transaction" === e.type ? "transaction" : "event"), event_id: e.event_id, level: e.level, message: gt(e) }, { event: e });
        }
    }
    function Un(e) {
        for (let t = 0; t < e.args.length; t++)
            if ("ref=Ref<" === e.args[t]) {
                e.args[t + 1] = "viewRef";
                break;
            }
        const t = { category: "console", data: { arguments: e.args, logger: "console" }, level: ((n = e.level), "warn" === n ? "warning" : Ot.includes(n) ? n : "log"), message: ge(e.args, " ") };
        var n;
        if ("assert" === e.level) {
            if (!1 !== e.args[0]) return;
            (t.message = `Assertion failed: ${ge(e.args.slice(1), " ") || "console.assert"}`), (t.data.arguments = e.args.slice(1));
        }
        rn().addBreadcrumb(t, { input: e.args, level: e.level });
    }
    function Bn(e) {
        const { startTimestamp: t, endTimestamp: n } = e,
            r = e.xhr[Ze];
        if (!t || !n || !r) return;
        const { method: i, url: o, status_code: s, body: a } = r,
            c = { method: i, url: o, status_code: s },
            l = { xhr: e.xhr, input: a, startTimestamp: t, endTimestamp: n };
        rn().addBreadcrumb({ category: "xhr", data: c, type: "http" }, l);
    }
    function Vn(e) {
        const { startTimestamp: t, endTimestamp: n } = e;
        if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
            if (e.error) {
                const r = e.fetchData,
                    i = { data: e.error, input: e.args, startTimestamp: t, endTimestamp: n };
                rn().addBreadcrumb({ category: "fetch", data: r, level: "error", type: "http" }, i);
            } else {
                const r = { ...e.fetchData, status_code: e.response && e.response.status },
                    i = { input: e.args, response: e.response, startTimestamp: t, endTimestamp: n };
                rn().addBreadcrumb({ category: "fetch", data: r, type: "http" }, i);
            }
    }
    function Yn(e) {
        let t = e.from,
            n = e.to;
        const r = At(Tn.location.href);
        let i = At(t);
        const o = At(n);
        i.path || (i = r), r.protocol === o.protocol && r.host === o.host && (n = o.relative), r.protocol === i.protocol && r.host === i.host && (t = i.relative), rn().addBreadcrumb({ category: "navigation", data: { from: t, to: n } });
    }
    Fn.__initStatic();
    class $n extends dn {
        constructor(e) {
            const t = Tn.SENTRY_SDK_SOURCE || "npm";
            (e._metadata = e._metadata || {}),
                (e._metadata.sdk = e._metadata.sdk || { name: "sentry.javascript.browser", packages: [{ name: `${t}:@sentry/browser`, version: vn }], version: vn }),
                super(e),
                e.sendClientReports &&
                    Tn.document &&
                    Tn.document.addEventListener("visibilitychange", () => {
                        "hidden" === Tn.document.visibilityState && this._flushOutcomes();
                    });
        }
        eventFromException(e, t) {
            return (function (e, t, n, r) {
                const i = xn(e, t, (n && n.syntheticException) || void 0, r);
                return _t(i), (i.level = "error"), n && n.event_id && (i.event_id = n.event_id), Tt(i);
            })(this._options.stackParser, e, t, this._options.attachStacktrace);
        }
        eventFromMessage(e, t = "info", n) {
            return (function (e, t, n = "info", r, i) {
                const o = Nn(e, t, (r && r.syntheticException) || void 0, i);
                return (o.level = n), r && r.event_id && (o.event_id = r.event_id), Tt(o);
            })(this._options.stackParser, e, t, n, this._options.attachStacktrace);
        }
        sendEvent(e, t) {
            const n = this.getIntegrationById(jn);
            n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(e), super.sendEvent(e, t);
        }
        captureUserFeedback(e) {
            if (!this._isEnabled()) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn("SDK not enabled, will not capture user feedback."));
            const t = (function (e, { metadata: t, tunnel: n, dsn: r }) {
                return Rt({ event_id: e.event_id, sent_at: new Date().toISOString(), ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }), ...(!!n && !!r && { dsn: Ne(r) }) }, [((i = e), [{ type: "user_report" }, i])]);
                var i;
            })(e, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
            this._sendEnvelope(t);
        }
        _prepareEvent(e, t, n) {
            return (e.platform = e.platform || "javascript"), super._prepareEvent(e, t, n);
        }
        _flushOutcomes() {
            const e = this._clearOutcomes();
            if (0 === e.length) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.log("No outcomes to send"));
            if (!this._dsn) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.log("No dsn provided, will not send outcomes"));
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.log("Sending outcomes:", e);
            const t = ((n = e), Rt((r = this._options.tunnel && Ne(this._dsn)) ? { dsn: r } : {}, [[{ type: "client_report" }, { timestamp: xt(), discarded_events: n }]]));
            var n, r;
            this._sendEnvelope(t);
        }
    }
    let Gn;
    function qn(
        e,
        t = (function () {
            if (Gn) return Gn;
            if (Ke(Tn.fetch)) return (Gn = Tn.fetch.bind(Tn));
            const e = Tn.document;
            let t = Tn.fetch;
            if (e && "function" == typeof e.createElement)
                try {
                    const n = e.createElement("iframe");
                    (n.hidden = !0), e.head.appendChild(n);
                    const r = n.contentWindow;
                    r && r.fetch && (t = r.fetch), e.head.removeChild(n);
                } catch (e) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
                }
            return (Gn = t.bind(Tn));
        })()
    ) {
        let n = 0,
            r = 0;
        return mn(e, function (i) {
            const o = i.body.length;
            (n += o), r++;
            const s = { body: i.body, method: "POST", referrerPolicy: "origin", headers: e.headers, keepalive: n <= 6e4 && r < 15, ...e.fetchOptions };
            try {
                return t(e.url, s).then((e) => ((n -= o), r--, { statusCode: e.status, headers: { "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"), "retry-after": e.headers.get("Retry-After") } }));
            } catch (e) {
                return (Gn = void 0), (n -= o), r--, Ct(e);
            }
        });
    }
    class Jn {
        static __initStatic() {
            this.id = "GlobalHandlers";
        }
        __init() {
            this.name = Jn.id;
        }
        __init2() {
            this._installFunc = { onerror: Wn, onunhandledrejection: zn };
        }
        constructor(e) {
            Jn.prototype.__init.call(this), Jn.prototype.__init2.call(this), (this._options = { onerror: !0, onunhandledrejection: !0, ...e });
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            const e = this._options;
            for (const n in e) {
                const r = this._installFunc[n];
                r && e[n] && ((t = n), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.log(`Global Handler attached: ${t}`), r(), (this._installFunc[n] = void 0));
            }
            var t;
        }
    }
    function Wn() {
        rt("error", (e) => {
            const [t, n, r] = Qn();
            if (!t.getIntegration(Jn)) return;
            const { msg: i, url: o, line: s, column: a, error: c } = e;
            if (Mn() || (c && c.__sentry_own_request__)) return;
            const l =
                void 0 === c && le(i)
                    ? (function (e, t, n, r) {
                          let i = ae(e) ? e.message : e,
                              o = "Error";
                          const s = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                          return s && ((o = s[1]), (i = s[2])), Hn({ exception: { values: [{ type: o, value: i }] } }, t, n, r);
                      })(i, o, s, a)
                    : Hn(xn(n, c || i, void 0, r, !1), o, s, a);
            (l.level = "error"), Kn(t, c, l, "onerror");
        });
    }
    function zn() {
        rt("unhandledrejection", (e) => {
            const [t, n, r] = Qn();
            if (!t.getIntegration(Jn)) return;
            let i = e;
            try {
                "reason" in e ? (i = e.reason) : "detail" in e && "reason" in e.detail && (i = e.detail.reason);
            } catch {}
            if (Mn() || (i && i.__sentry_own_request__)) return !0;
            const o = ue(i) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(i)}` }] } } : xn(n, i, void 0, r, !0);
            (o.level = "error"), Kn(t, i, o, "onunhandledrejection");
        });
    }
    function Hn(e, t, n, r) {
        const i = (e.exception = e.exception || {}),
            o = (i.values = i.values || []),
            s = (o[0] = o[0] || {}),
            a = (s.stacktrace = s.stacktrace || {}),
            c = (a.frames = a.frames || []),
            l = isNaN(parseInt(r, 10)) ? void 0 : r,
            u = isNaN(parseInt(n, 10)) ? void 0 : n,
            d =
                le(t) && t.length > 0
                    ? t
                    : (function () {
                          try {
                              return Ce.document.location.href;
                          } catch {
                              return "";
                          }
                      })();
        return 0 === c.length && c.push({ colno: l, filename: d, function: "?", in_app: !0, lineno: u }), e;
    }
    function Kn(e, t, n, r) {
        _t(n, { handled: !1, type: r }), e.captureEvent(n, { originalException: t });
    }
    function Qn() {
        const e = rn(),
            t = e.getClient(),
            n = (t && t.getOptions()) || { stackParser: () => [], attachStacktrace: !1 };
        return [e, n.stackParser, n.attachStacktrace];
    }
    Jn.__initStatic();
    const Xn = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload",
    ];
    class Zn {
        static __initStatic() {
            this.id = "TryCatch";
        }
        __init() {
            this.name = Zn.id;
        }
        constructor(e) {
            Zn.prototype.__init.call(this), (this._options = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...e });
        }
        setupOnce() {
            this._options.setTimeout && Fe(Tn, "setTimeout", er),
                this._options.setInterval && Fe(Tn, "setInterval", er),
                this._options.requestAnimationFrame && Fe(Tn, "requestAnimationFrame", tr),
                this._options.XMLHttpRequest && "XMLHttpRequest" in Tn && Fe(XMLHttpRequest.prototype, "send", nr);
            const e = this._options.eventTarget;
            e && (Array.isArray(e) ? e : Xn).forEach(rr);
        }
    }
    function er(e) {
        return function (...t) {
            const n = t[0];
            return (t[0] = An(n, { mechanism: { data: { function: ze(e) }, handled: !0, type: "instrument" } })), e.apply(this, t);
        };
    }
    function tr(e) {
        return function (t) {
            return e.apply(this, [An(t, { mechanism: { data: { function: "requestAnimationFrame", handler: ze(e) }, handled: !0, type: "instrument" } })]);
        };
    }
    function nr(e) {
        return function (...t) {
            const n = this;
            return (
                ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e) => {
                    e in n &&
                        "function" == typeof n[e] &&
                        Fe(n, e, function (t) {
                            const n = { mechanism: { data: { function: e, handler: ze(t) }, handled: !0, type: "instrument" } },
                                r = Ve(t);
                            return r && (n.mechanism.data.handler = ze(r)), An(t, n);
                        });
                }),
                e.apply(this, t)
            );
        };
    }
    function rr(e) {
        const t = Tn,
            n = t[e] && t[e].prototype;
        n &&
            n.hasOwnProperty &&
            n.hasOwnProperty("addEventListener") &&
            (Fe(n, "addEventListener", function (t) {
                return function (n, r, i) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = An(r.handleEvent, { mechanism: { data: { function: "handleEvent", handler: ze(r), target: e }, handled: !0, type: "instrument" } }));
                    } catch {}
                    return t.apply(this, [n, An(r, { mechanism: { data: { function: "addEventListener", handler: ze(r), target: e }, handled: !0, type: "instrument" } }), i]);
                };
            }),
            Fe(n, "removeEventListener", function (e) {
                return function (t, n, r) {
                    const i = n;
                    try {
                        const n = i && i.__sentry_wrapped__;
                        n && e.call(this, t, n, r);
                    } catch {}
                    return e.call(this, t, i, r);
                };
            }));
    }
    Zn.__initStatic();
    class ir {
        static __initStatic() {
            this.id = "LinkedErrors";
        }
        __init() {
            this.name = ir.id;
        }
        constructor(e = {}) {
            ir.prototype.__init.call(this), (this._key = e.key || "cause"), (this._limit = e.limit || 5);
        }
        setupOnce(e, t) {
            e((e, n) => {
                const r = t(),
                    i = r.getClient(),
                    o = r.getIntegration(ir);
                if (!i || !o) return e;
                const s = i.getOptions();
                return _e(On, s.stackParser, s.maxValueLength, o._key, o._limit, e, n), e;
            });
        }
    }
    ir.__initStatic();
    class or {
        constructor() {
            or.prototype.__init.call(this);
        }
        static __initStatic() {
            this.id = "HttpContext";
        }
        __init() {
            this.name = or.id;
        }
        setupOnce() {
            Kt((e) => {
                if (rn().getIntegration(or)) {
                    if (!Tn.navigator && !Tn.location && !Tn.document) return e;
                    const t = (e.request && e.request.url) || (Tn.location && Tn.location.href),
                        { referrer: n } = Tn.document || {},
                        { userAgent: r } = Tn.navigator || {},
                        i = { ...(e.request && e.request.headers), ...(n && { Referer: n }), ...(r && { "User-Agent": r }) },
                        o = { ...e.request, ...(t && { url: t }), headers: i };
                    return { ...e, request: o };
                }
                return e;
            });
        }
    }
    or.__initStatic();
    class sr {
        constructor() {
            sr.prototype.__init.call(this);
        }
        static __initStatic() {
            this.id = "Dedupe";
        }
        __init() {
            this.name = sr.id;
        }
        setupOnce(e, t) {
            const n = (e) => {
                if (e.type) return e;
                const n = t().getIntegration(sr);
                if (n) {
                    try {
                        if (
                            ((r = e),
                            (i = n._previousEvent) &&
                                ((function (e, t) {
                                    const n = e.message,
                                        r = t.message;
                                    return !((!n && !r) || (n && !r) || (!n && r) || n !== r || !cr(e, t) || !ar(e, t));
                                })(r, i) ||
                                    (function (e, t) {
                                        const n = lr(t),
                                            r = lr(e);
                                        return !!(n && r && n.type === r.type && n.value === r.value && cr(e, t) && ar(e, t));
                                    })(r, i)))
                        )
                            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && De.warn("Event dropped due to being a duplicate of previously captured event."), null;
                    } catch {
                        return (n._previousEvent = e);
                    }
                    return (n._previousEvent = e);
                }
                var r, i;
                return e;
            };
            (n.id = this.name), e(n);
        }
    }
    function ar(e, t) {
        let n = ur(e),
            r = ur(t);
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
        for (let e = 0; e < r.length; e++) {
            const t = r[e],
                i = n[e];
            if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1;
        }
        return !0;
    }
    function cr(e, t) {
        let n = e.fingerprint,
            r = t.fingerprint;
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        try {
            return n.join("") === r.join("");
        } catch {
            return !1;
        }
    }
    function lr(e) {
        return e.exception && e.exception.values && e.exception.values[0];
    }
    function ur(e) {
        const t = e.exception;
        if (t)
            try {
                return t.values[0].stacktrace.frames;
            } catch {
                return;
            }
    }
    sr.__initStatic();
    var dr = Object.freeze({ __proto__: null, Breadcrumbs: Fn, Dedupe: sr, GlobalHandlers: Jn, HttpContext: or, LinkedErrors: ir, TryCatch: Zn });
    let hr = {};
    Tn.Sentry && Tn.Sentry.Integrations && (hr = Tn.Sentry.Integrations);
    const pr = { ...hr, ...kn, ...dr };
    var fr = "new",
        mr = "loading",
        gr = "loaded",
        vr = "joining-meeting",
        _r = "joined-meeting",
        yr = "left-meeting",
        br = "error",
        wr = "unknown",
        Sr = "full",
        Er = "base",
        kr = "iframe-ready-for-launch-config",
        Tr = "iframe-launch-config",
        Cr = "theme-updated",
        Mr = "loading",
        Ar = "load-attempt-failed",
        Or = "loaded",
        Lr = "started-camera",
        Ir = "camera-error",
        Pr = "joining-meeting",
        Dr = "joined-meeting",
        xr = "left-meeting",
        Nr = "available-devices-updated",
        Rr = "participant-joined",
        jr = "participant-updated",
        Fr = "participant-left",
        Ur = "participant-counts-updated",
        Br = "access-state-updated",
        Vr = "meeting-session-summary-updated",
        Yr = "meeting-session-state-updated",
        $r = "waiting-participant-added",
        Gr = "waiting-participant-updated",
        qr = "waiting-participant-removed",
        Jr = "track-started",
        Wr = "track-stopped",
        zr = "transcription-started",
        Hr = "transcription-stopped",
        Kr = "transcription-error",
        Qr = "recording-started",
        Xr = "recording-stopped",
        Zr = "recording-stats",
        ei = "recording-error",
        ti = "recording-upload-completed",
        ni = "recording-data",
        ri = "app-message",
        ii = "transcription-message",
        oi = "remote-media-player-started",
        si = "remote-media-player-updated",
        ai = "remote-media-player-stopped",
        ci = "local-screen-share-started",
        li = "local-screen-share-stopped",
        ui = "local-screen-share-canceled",
        di = "active-speaker-change",
        hi = "active-speaker-mode-change",
        pi = "network-quality-change",
        fi = "network-connection",
        mi = "cpu-load-change",
        gi = "face-counts-updated",
        vi = "fullscreen",
        _i = "exited-fullscreen",
        yi = "live-streaming-started",
        bi = "live-streaming-updated",
        wi = "live-streaming-stopped",
        Si = "live-streaming-error",
        Ei = "lang-updated",
        ki = "receive-settings-updated",
        Ti = "input-settings-updated",
        Ci = "nonfatal-error",
        Mi = "error",
        Ai = 102400,
        Oi = "iframe-call-message",
        Li = "local-screen-start",
        Ii = "daily-method-update-live-streaming-endpoints",
        Pi = "transmit-log",
        Di = "daily-custom-track",
        xi = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image", FACE_DETECTION: "face-detection" },
        Ni = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" },
        Ri = { PLAY: "play", PAUSE: "pause" },
        ji = ["jpg", "png", "jpeg"];
    function Fi() {
        return !Ui() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
    }
    function Ui() {
        return typeof navigator < "u" && navigator.product && "ReactNative" === navigator.product;
    }
    function Bi() {
        return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
    }
    function Vi() {
        if (Ui() || !document) return !1;
        var e = document.createElement("iframe");
        return !!e.requestFullscreen || !!e.webkitRequestFullscreen;
    }
    var Yi = (function () {
        try {
            var e = document.createElement("canvas"),
                t = null != e.getContext("webgl2");
            return e.remove(), t;
        } catch {
            return !1;
        }
    })();
    function $i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (
            !Ui() &&
            !!Yi &&
            (e
                ? !Wi() && ["Chrome", "Firefox"].includes(zi())
                : (function () {
                      if (Wi()) return !1;
                      var e = zi();
                      if ("Safari" === e) {
                          var t = Xi();
                          if (t.major < 15 || (15 === t.major && t.minor < 4)) return !1;
                      }
                      return "Chrome" === e ? Ki().major >= 77 : "Firefox" === e ? Zi().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(e);
                  })())
        );
    }
    var Gi = ["Chrome", "Firefox"];
    function qi() {
        return !Ui() && !Wi() && typeof AudioWorkletNode < "u" && Gi.includes(zi());
    }
    function Ji() {
        return (
            Bi() &&
            !(function () {
                var e,
                    t = zi();
                if (!Fi()) return !0;
                switch (t) {
                    case "Chrome":
                        return (e = Ki()).major && e.major > 0 && e.major < 75;
                    case "Firefox":
                        return (e = Zi()).major < 91;
                    case "Safari":
                        return (e = Xi()).major < 13 || (13 === e.major && e.minor < 1);
                    default:
                        return !0;
                }
            })()
        );
    }
    function Wi() {
        var e,
            t,
            n = Fi(),
            r = n.match(/Mac/) && (!Ui() && typeof window < "u" && null !== (e = window) && void 0 !== e && null !== (t = e.navigator) && void 0 !== t && t.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
        return !!(n.match(/Mobi/) || n.match(/Android/) || r) || !!Fi().match(/DailyAnd\//) || void 0;
    }
    function zi() {
        if (typeof window < "u") {
            var e = Fi();
            return Qi()
                ? "Safari"
                : e.indexOf("Edge") > -1
                ? "Edge"
                : e.match(/Chrome\//)
                ? "Chrome"
                : e.indexOf("Safari") > -1
                ? "Safari"
                : e.indexOf("Firefox") > -1
                ? "Firefox"
                : e.indexOf("MSIE") > -1 || e.indexOf(".NET") > -1
                ? "IE"
                : "Unknown Browser";
        }
    }
    function Hi() {
        switch (zi()) {
            case "Chrome":
                return Ki();
            case "Safari":
                return Xi();
            case "Firefox":
                return Zi();
            case "Edge":
                return (function () {
                    var e = 0,
                        t = 0;
                    if (typeof window < "u") {
                        var n = Fi().match(/Edge\/(\d+).(\d+)/);
                        if (n)
                            try {
                                (e = parseInt(n[1])), (t = parseInt(n[2]));
                            } catch {}
                    }
                    return { major: e, minor: t };
                })();
        }
    }
    function Ki() {
        var e = 0,
            t = 0,
            n = 0,
            r = 0,
            i = !1;
        if (typeof window < "u") {
            var o = Fi(),
                s = o.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
            if (s)
                try {
                    (e = parseInt(s[1])), (t = parseInt(s[2])), (n = parseInt(s[3])), (r = parseInt(s[4])), (i = o.indexOf("OPR/") > -1);
                } catch {}
        }
        return { major: e, minor: t, build: n, patch: r, opera: i };
    }
    function Qi() {
        return !!Fi().match(/iPad|iPhone|iPod/i) && Bi();
    }
    function Xi() {
        var e = 0,
            t = 0,
            n = 0;
        if (typeof window < "u") {
            var r = Fi().match(/Version\/(\d+).(\d+)(.(\d+))?/);
            if (r)
                try {
                    (e = parseInt(r[1])), (t = parseInt(r[2])), (n = parseInt(r[4]));
                } catch {}
            else Qi() && ((e = 14), (t = 0), (n = 3));
        }
        return { major: e, minor: t, point: n };
    }
    function Zi() {
        var e = 0,
            t = 0;
        if (typeof window < "u") {
            var n = Fi().match(/Firefox\/(\d+).(\d+)/);
            if (n)
                try {
                    (e = parseInt(n[1])), (t = parseInt(n[2]));
                } catch {}
        }
        return { major: e, minor: t };
    }
    var eo = (function () {
        function e() {
            o(this, e);
        }
        return (
            l(e, [
                {
                    key: "addListenerForMessagesFromCallMachine",
                    value: function (e, t, n) {
                        ee();
                    },
                },
                {
                    key: "addListenerForMessagesFromDailyJs",
                    value: function (e, t, n) {
                        ee();
                    },
                },
                {
                    key: "sendMessageToCallMachine",
                    value: function (e, t, n, r) {
                        ee();
                    },
                },
                {
                    key: "sendMessageToDailyJs",
                    value: function (e, t) {
                        ee();
                    },
                },
                {
                    key: "removeListener",
                    value: function (e) {
                        ee();
                    },
                },
            ]),
            e
        );
    })();
    function to(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function no(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? to(Object(n), !0).forEach(function (t) {
                      m(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : to(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
        }
        return e;
    }
    var ro = (function (e) {
        h(n, eo);
        var t = (function (e) {
            var t = (function () {
                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch {
                    return !1;
                }
            })();
            return function () {
                var n,
                    r = f(e);
                if (t) {
                    var i = f(this).constructor;
                    n = Reflect.construct(r, arguments, i);
                } else n = r.apply(this, arguments);
                return p(this, n);
            };
        })(n);
        function n() {
            var e;
            return o(this, n), ((e = t.call(this))._wrappedListeners = {}), (e._messageCallbacks = {}), e;
        }
        return (
            l(n, [
                {
                    key: "addListenerForMessagesFromCallMachine",
                    value: function (e, t, n) {
                        var r = this,
                            i = function (i) {
                                if (i.data && "iframe-call-message" === i.data.what && (!i.data.callFrameId || i.data.callFrameId === t) && (!i.data.from || "module" !== i.data.from)) {
                                    var o = no({}, i.data);
                                    if ((delete o.from, o.callbackStamp && r._messageCallbacks[o.callbackStamp])) {
                                        var s = o.callbackStamp;
                                        r._messageCallbacks[s].call(n, o), delete r._messageCallbacks[s];
                                    }
                                    delete o.what, delete o.callbackStamp, e.call(n, o);
                                }
                            };
                        (this._wrappedListeners[e] = i), window.addEventListener("message", i);
                    },
                },
                {
                    key: "addListenerForMessagesFromDailyJs",
                    value: function (e, t, n) {
                        var r = function (r) {
                            if (!(!r.data || r.data.what !== Oi || !r.data.action || (r.data.from && "module" !== r.data.from) || (r.data.callFrameId && t && r.data.callFrameId !== t))) {
                                var i = r.data;
                                e.call(n, i);
                            }
                        };
                        (this._wrappedListeners[e] = r), window.addEventListener("message", r);
                    },
                },
                {
                    key: "sendMessageToCallMachine",
                    value: function (e, t, n, r) {
                        if (!r) throw new Error("undefined callFrameId. Are you trying to use a DailyCall instance previously destroyed?");
                        var i = no({}, e);
                        if (((i.what = Oi), (i.from = "module"), (i.callFrameId = r), t)) {
                            var o = Z();
                            (this._messageCallbacks[o] = t), (i.callbackStamp = o);
                        }
                        var s = n ? n.contentWindow : window,
                            a = this._callMachineTargetOrigin(n);
                        a && s.postMessage(i, a);
                    },
                },
                {
                    key: "sendMessageToDailyJs",
                    value: function (e, t) {
                        (e.what = Oi), (e.callFrameId = t), (e.from = "embedded"), window.postMessage(e, this._targetOriginFromWindowLocation());
                    },
                },
                {
                    key: "removeListener",
                    value: function (e) {
                        var t = this._wrappedListeners[e];
                        t && (window.removeEventListener("message", t), delete this._wrappedListeners[e]);
                    },
                },
                {
                    key: "forwardPackagedMessageToCallMachine",
                    value: function (e, t, n) {
                        var r = no({}, e);
                        r.callFrameId = n;
                        var i = t ? t.contentWindow : window,
                            o = this._callMachineTargetOrigin(t);
                        o && i.postMessage(r, o);
                    },
                },
                {
                    key: "addListenerForPackagedMessagesFromCallMachine",
                    value: function (e, t) {
                        var n = function (n) {
                            if (n.data && "iframe-call-message" === n.data.what && (!n.data.callFrameId || n.data.callFrameId === t) && (!n.data.from || "module" !== n.data.from)) {
                                var r = n.data;
                                e(r);
                            }
                        };
                        return (this._wrappedListeners[e] = n), window.addEventListener("message", n), e;
                    },
                },
                {
                    key: "removeListenerForPackagedMessagesFromCallMachine",
                    value: function (e) {
                        var t = this._wrappedListeners[e];
                        t && (window.removeEventListener("message", t), delete this._wrappedListeners[e]);
                    },
                },
                {
                    key: "_callMachineTargetOrigin",
                    value: function (e) {
                        return e ? (e.src ? new URL(e.src).origin : void 0) : this._targetOriginFromWindowLocation();
                    },
                },
                {
                    key: "_targetOriginFromWindowLocation",
                    value: function () {
                        return "file:" === window.location.protocol ? "*" : window.location.origin;
                    },
                },
            ]),
            n
        );
    })();
    var io = (function (e) {
            h(n, eo);
            var t = (function (e) {
                var t = (function () {
                    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return p(this, n);
                };
            })(n);
            function n() {
                var e;
                return (
                    o(this, n),
                    (e = t.call(this)),
                    (global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new w.EventEmitter()),
                    (global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new w.EventEmitter()),
                    (e._wrappedListeners = {}),
                    (e._messageCallbacks = {}),
                    e
                );
            }
            return (
                l(n, [
                    {
                        key: "addListenerForMessagesFromCallMachine",
                        value: function (e, t, n) {
                            this._addListener(e, global.callMachineToDailyJsEmitter, n, "received call machine message");
                        },
                    },
                    {
                        key: "addListenerForMessagesFromDailyJs",
                        value: function (e, t, n) {
                            this._addListener(e, global.dailyJsToCallMachineEmitter, n, "received daily-js message");
                        },
                    },
                    {
                        key: "sendMessageToCallMachine",
                        value: function (e, t) {
                            this._sendMessage(e, global.dailyJsToCallMachineEmitter, "sending message to call machine", t);
                        },
                    },
                    {
                        key: "sendMessageToDailyJs",
                        value: function (e) {
                            this._sendMessage(e, global.callMachineToDailyJsEmitter, "sending message to daily-js");
                        },
                    },
                    {
                        key: "removeListener",
                        value: function (e) {
                            var t = this._wrappedListeners[e];
                            t && (global.callMachineToDailyJsEmitter.removeListener("message", t), global.dailyJsToCallMachineEmitter.removeListener("message", t), delete this._wrappedListeners[e]);
                        },
                    },
                    {
                        key: "_addListener",
                        value: function (e, t, n, r) {
                            var i = this,
                                o = function (t) {
                                    if (t.callbackStamp && i._messageCallbacks[t.callbackStamp]) {
                                        var r = t.callbackStamp;
                                        i._messageCallbacks[r].call(n, t), delete i._messageCallbacks[r];
                                    }
                                    e.call(n, t);
                                };
                            (this._wrappedListeners[e] = o), t.addListener("message", o);
                        },
                    },
                    {
                        key: "_sendMessage",
                        value: function (e, t, n, r) {
                            if (r) {
                                var i = Z();
                                (this._messageCallbacks[i] = r), (e.callbackStamp = i);
                            }
                            t.emit("message", e);
                        },
                    },
                ]),
                n
            );
        })(),
        oo = "replace",
        so = "shallow-merge",
        ao = [oo, so],
        co = (function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.data,
                    r = t.mergeStrategy,
                    i = void 0 === r ? oo : r;
                o(this, e), e._validateMergeStrategy(i), e._validateData(n, i), (this.mergeStrategy = i), (this.data = n);
            }
            return (
                l(
                    e,
                    [
                        {
                            key: "isNoOp",
                            value: function () {
                                return e.isNoOpUpdate(this.data, this.mergeStrategy);
                            },
                        },
                    ],
                    [
                        {
                            key: "isNoOpUpdate",
                            value: function (e, t) {
                                return 0 === Object.keys(e).length && t === so;
                            },
                        },
                        {
                            key: "_validateMergeStrategy",
                            value: function (e) {
                                if (!ao.includes(e)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(ao, "]"));
                            },
                        },
                        {
                            key: "_validateData",
                            value: function (e, t) {
                                if (
                                    !(function (e) {
                                        if (null == e || "object" !== s(e)) return !1;
                                        var t = Object.getPrototypeOf(e);
                                        return null == t || t === Object.prototype;
                                    })(e)
                                )
                                    throw Error("Meeting session data must be a plain (map-like) object");
                                var n;
                                try {
                                    if (((n = JSON.stringify(e)), t === oo)) {
                                        var r = JSON.parse(n);
                                        U(r, e) || console.warn("The meeting session data provided will be modified when serialized.", r, e);
                                    } else if (t === so)
                                        for (var i in e)
                                            if (Object.hasOwnProperty.call(e, i) && void 0 !== e[i]) {
                                                var o = JSON.parse(JSON.stringify(e[i]));
                                                U(e[i], o) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", o, e[i]);
                                            }
                                } catch (e) {
                                    throw Error("Meeting session data must be serializable to JSON: ".concat(e));
                                }
                                if (n.length > Ai) throw Error("Meeting session data is too large (".concat(n.length, " characters). Maximum size suppported is ").concat(Ai, "."));
                            },
                        },
                    ]
                ),
                e
            );
        })();
    function lo(e, t, n) {
        return (lo = (function () {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch {
                return !1;
            }
        })()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var i = new (Function.bind.apply(e, r))();
                  return n && d(i, n.prototype), i;
              }).apply(null, arguments);
    }
    function uo(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
            (uo = function (e) {
                if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                var n;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, r);
                }
                function r() {
                    return lo(e, arguments, f(this).constructor);
                }
                return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), d(r, e);
            }),
            uo(e)
        );
    }
    function ho(e) {
        var t,
            n = null === (t = window._daily) || void 0 === t ? void 0 : t.pendings;
        if (n) {
            var r = n.indexOf(e);
            -1 !== r && n.splice(r, 1);
        }
    }
    var po = (function () {
            function e(t) {
                o(this, e), (this._currentLoad = null), (this._callFrameId = t);
            }
            return (
                l(e, [
                    {
                        key: "load",
                        value: function () {
                            var e,
                                t = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                i = arguments.length > 2 ? arguments[2] : void 0;
                            if (this.loaded) return window._daily.instances[this._callFrameId].callMachine.reset(), void r(!0);
                            (e = this._callFrameId),
                                window._daily.pendings.push(e),
                                this._currentLoad && this._currentLoad.cancel(),
                                (this._currentLoad = new fo(
                                    n,
                                    function () {
                                        r(!1);
                                    },
                                    function (e, n) {
                                        n || ho(t._callFrameId), i(e, n);
                                    }
                                )),
                                this._currentLoad.start();
                        },
                    },
                    {
                        key: "cancel",
                        value: function () {
                            this._currentLoad && this._currentLoad.cancel(), ho(this._callFrameId);
                        },
                    },
                    {
                        key: "loaded",
                        get: function () {
                            return this._currentLoad && this._currentLoad.succeeded;
                        },
                    },
                ]),
                e
            );
        })(),
        fo = (function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    r = arguments.length > 2 ? arguments[2] : void 0;
                o(this, e), (this._attemptsRemaining = 3), (this._currentAttempt = null), (this._dailyConfig = t), (this._successCallback = n), (this._failureCallback = r);
            }
            return (
                l(e, [
                    {
                        key: "start",
                        value: function () {
                            var e = this;
                            this._currentAttempt ||
                                ((this._currentAttempt = new vo(this._dailyConfig, this._successCallback, function t(n) {
                                    e._currentAttempt.cancelled ||
                                        (e._attemptsRemaining--,
                                        e._failureCallback(n, e._attemptsRemaining > 0),
                                        e._attemptsRemaining <= 0 ||
                                            setTimeout(function () {
                                                e._currentAttempt.cancelled || ((e._currentAttempt = new vo(e._dailyConfig, e._successCallback, t)), e._currentAttempt.start());
                                            }, 3e3));
                                })),
                                this._currentAttempt.start());
                        },
                    },
                    {
                        key: "cancel",
                        value: function () {
                            this._currentAttempt && this._currentAttempt.cancel();
                        },
                    },
                    {
                        key: "cancelled",
                        get: function () {
                            return this._currentAttempt && this._currentAttempt.cancelled;
                        },
                    },
                    {
                        key: "succeeded",
                        get: function () {
                            return this._currentAttempt && this._currentAttempt.succeeded;
                        },
                    },
                ]),
                e
            );
        })(),
        mo = (function (e) {
            h(n, uo(Error));
            var t = (function (e) {
                var t = (function () {
                    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return p(this, n);
                };
            })(n);
            function n() {
                return o(this, n), t.apply(this, arguments);
            }
            return l(n);
        })(),
        go = 2e4,
        vo = (function () {
            function e(t, n, r) {
                o(this, e), (this._loadAttemptImpl = Ui() || !t.avoidEval ? new _o(t, n, r) : new yo(t, n, r));
            }
            var t;
            return (
                l(e, [
                    {
                        key: "start",
                        value:
                            ((t = v(function* () {
                                return this._loadAttemptImpl.start();
                            })),
                            function () {
                                return t.apply(this, arguments);
                            }),
                    },
                    {
                        key: "cancel",
                        value: function () {
                            this._loadAttemptImpl.cancel();
                        },
                    },
                    {
                        key: "cancelled",
                        get: function () {
                            return this._loadAttemptImpl.cancelled;
                        },
                    },
                    {
                        key: "succeeded",
                        get: function () {
                            return this._loadAttemptImpl.succeeded;
                        },
                    },
                ]),
                e
            );
        })(),
        _o = (function () {
            function e(t, n, r) {
                o(this, e),
                    (this.cancelled = !1),
                    (this.succeeded = !1),
                    (this._networkTimedOut = !1),
                    (this._networkTimeout = null),
                    (this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache),
                    (this._refetchHeaders = null),
                    (this._dailyConfig = t),
                    (this._successCallback = n),
                    (this._failureCallback = r);
            }
            var t, n, r, i;
            return (
                l(e, [
                    {
                        key: "start",
                        value:
                            ((i = v(function* () {
                                var e = ne(this._dailyConfig);
                                !(yield this._tryLoadFromIOSCache(e)) && this._loadFromNetwork(e);
                            })),
                            function () {
                                return i.apply(this, arguments);
                            }),
                    },
                    {
                        key: "cancel",
                        value: function () {
                            clearTimeout(this._networkTimeout), (this.cancelled = !0);
                        },
                    },
                    {
                        key: "_tryLoadFromIOSCache",
                        value:
                            ((r = v(function* (e) {
                                if (!this._iosCache) return !1;
                                try {
                                    var t = yield this._iosCache.get(e);
                                    return !!this.cancelled || (!!t && (t.code ? (Function('"use strict";' + t.code)(), (this.succeeded = !0), this._successCallback(), !0) : ((this._refetchHeaders = t.refetchHeaders), !1)));
                                } catch {
                                    return !1;
                                }
                            })),
                            function (e) {
                                return r.apply(this, arguments);
                            }),
                    },
                    {
                        key: "_loadFromNetwork",
                        value:
                            ((n = v(function* (e) {
                                var t = this;
                                this._networkTimeout = setTimeout(function () {
                                    (t._networkTimedOut = !0), t._failureCallback({ msg: "Timed out (>".concat(go, " ms) when loading call object bundle ").concat(e), type: "timeout" });
                                }, go);
                                try {
                                    var n = this._refetchHeaders ? { headers: this._refetchHeaders } : {},
                                        r = yield fetch(e, n);
                                    if ((clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut)) throw new mo();
                                    var i = yield this._getBundleCodeFromResponse(e, r);
                                    if (this.cancelled) throw new mo();
                                    Function('"use strict";' + i)(), this._iosCache && this._iosCache.set(e, i, r.headers), (this.succeeded = !0), this._successCallback();
                                } catch (t) {
                                    if ((clearTimeout(this._networkTimeout), t instanceof mo || this.cancelled || this._networkTimedOut)) return;
                                    this._failureCallback({ msg: "Failed to load call object bundle ".concat(e, ": ").concat(t), type: t.message });
                                }
                            })),
                            function (e) {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "_getBundleCodeFromResponse",
                        value:
                            ((t = v(function* (e, t) {
                                if (t.ok) return yield t.text();
                                if (this._iosCache && 304 === t.status) return (yield this._iosCache.renew(e, t.headers)).code;
                                throw new Error("Received ".concat(t.status, " response"));
                            })),
                            function (e, n) {
                                return t.apply(this, arguments);
                            }),
                    },
                ]),
                e
            );
        })(),
        yo = (function () {
            function e(t, n, r) {
                o(this, e),
                    (this.cancelled = !1),
                    (this.succeeded = !1),
                    (this._dailyConfig = t),
                    (this._successCallback = n),
                    (this._failureCallback = r),
                    (this._attemptId = Z()),
                    (this._networkTimeout = null),
                    (this._scriptElement = null);
            }
            return (
                l(e, [
                    {
                        key: "start",
                        value: function () {
                            window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = new Set());
                            var e = ne(this._dailyConfig);
                            "object" === (typeof document > "u" ? "undefined" : s(document)) ? this._startLoading(e) : this._failureCallback({ msg: "Call object bundle must be loaded in a DOM/web context", type: "missing context" });
                        },
                    },
                    {
                        key: "cancel",
                        value: function () {
                            this._stopLoading(), (this.cancelled = !0);
                        },
                    },
                    {
                        key: "_startLoading",
                        value: function (e) {
                            var t = this;
                            this._signUpForCallMachineLoadWaitlist(),
                                (this._networkTimeout = setTimeout(function () {
                                    t._stopLoading(), t._failureCallback({ msg: "Timed out (>".concat(go, " ms) when loading call object bundle ").concat(e), type: "timeout" });
                                }, go));
                            var n = document.getElementsByTagName("head")[0],
                                r = document.createElement("script");
                            (this._scriptElement = r),
                                (r.onload = function () {
                                    t._stopLoading(), (t.succeeded = !0), t._successCallback();
                                }),
                                (r.onerror = function (e) {
                                    t._stopLoading(), t._failureCallback({ msg: "Failed to load call object bundle ".concat(e.target.src), type: e.message });
                                }),
                                (r.src = e),
                                n.appendChild(r);
                        },
                    },
                    {
                        key: "_stopLoading",
                        value: function () {
                            this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && ((this._scriptElement.onload = null), (this._scriptElement.onerror = null));
                        },
                    },
                    {
                        key: "_signUpForCallMachineLoadWaitlist",
                        value: function () {
                            window._dailyCallMachineLoadWaitlist.add(this._attemptId);
                        },
                    },
                    {
                        key: "_withdrawFromCallMachineLoadWaitlist",
                        value: function () {
                            window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
                        },
                    },
                ]),
                e
            );
        })(),
        bo = function (e, t, n) {
            return !0 === Eo(e.local, t, n);
        },
        wo = function (e, t, n) {
            return e.local.streams && e.local.streams[t] && e.local.streams[t].stream && e.local.streams[t].stream["get".concat("video" === n ? "Video" : "Audio", "Tracks")]()[0];
        },
        So = function (e, t, n, r) {
            var i = ko(e, t, n, r);
            return i && i.pendingTrack;
        },
        Eo = function (e, t, n) {
            if (!e) return !1;
            var r = function (e) {
                    switch (e) {
                        case "avatar":
                            return !0;
                        case "staged":
                            return e;
                        default:
                            return !!e;
                    }
                },
                i = e.public.subscribedTracks;
            return i && i[t]
                ? -1 === ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(n) && i[t].custom
                    ? [!0, "staged"].includes(i[t].custom)
                        ? r(i[t].custom)
                        : r(i[t].custom[n])
                    : r(i[t][n])
                : !i || r(i.ALL);
        },
        ko = function (e, t, n, r) {
            var i = Object.values(e.streams || {})
                .filter(function (e) {
                    return e.participantId === t && e.type === n && e.pendingTrack && e.pendingTrack.kind === r;
                })
                .sort(function (e, t) {
                    return new Date(t.starttime) - new Date(e.starttime);
                });
            return i && i[0];
        },
        To = function (e, t) {
            var n = e.local.public.customTracks;
            if (n && n[t]) return n[t].track;
        };
    function Co(e, t) {
        for (var n = t.getState(), r = 0, i = ["cam", "screen"]; r < i.length; r++)
            for (var o = i[r], s = 0, a = ["video", "audio"]; s < a.length; s++) {
                var c = a[s],
                    l = "cam" === o ? c : "screen".concat(c.charAt(0).toUpperCase() + c.slice(1)),
                    u = e.tracks[l];
                if (u) {
                    var d = e.local ? wo(n, o, c) : So(n, e.session_id, o, c);
                    "playable" === u.state && (u.track = d), (u.persistentTrack = d);
                }
            }
    }
    function Mo(e, t) {
        try {
            var n = t.getState();
            for (var r in e.tracks)
                if (!Ao(r)) {
                    var i = e.tracks[r].kind;
                    if (i) {
                        var o = e.tracks[r];
                        if (o) {
                            var s = e.local ? To(n, r) : So(n, e.session_id, r, i);
                            "playable" === o.state && (e.tracks[r].track = s), (o.persistentTrack = s);
                        }
                    } else console.error("unknown type for custom track");
                }
        } catch (e) {
            console.error(e);
        }
    }
    function Ao(e) {
        return ["video", "audio", "screenVideo", "screenAudio"].includes(e);
    }
    function Oo(e, t, n) {
        var r = n.getState();
        if (e.local) {
            if (e.audio)
                try {
                    (e.audioTrack = r.local.streams.cam.stream.getAudioTracks()[0]), e.audioTrack || (e.audio = !1);
                } catch {}
            if (e.video)
                try {
                    (e.videoTrack = r.local.streams.cam.stream.getVideoTracks()[0]), e.videoTrack || (e.video = !1);
                } catch {}
            if (e.screen)
                try {
                    (e.screenVideoTrack = r.local.streams.screen.stream.getVideoTracks()[0]), (e.screenAudioTrack = r.local.streams.screen.stream.getAudioTracks()[0]), e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
                } catch {}
        } else {
            var i = !0;
            try {
                var o = r.participants[e.session_id];
                o && o.public && o.public.rtcType && "peer-to-peer" === o.public.rtcType.impl && o.private && !["connected", "completed"].includes(o.private.peeringState) && (i = !1);
            } catch (e) {
                console.error(e);
            }
            if (!i) return (e.audio = !1), (e.audioTrack = !1), (e.video = !1), (e.videoTrack = !1), (e.screen = !1), void (e.screenTrack = !1);
            try {
                if ((r.streams, e.audio && bo(r, e.session_id, "cam-audio"))) {
                    var s = So(r, e.session_id, "cam", "audio");
                    s && (t && t.audioTrack && t.audioTrack.id === s.id ? (e.audioTrack = s) : s.muted || (e.audioTrack = s)), e.audioTrack || (e.audio = !1);
                }
                if (e.video && bo(r, e.session_id, "cam-video")) {
                    var a = So(r, e.session_id, "cam", "video");
                    a && (t && t.videoTrack && t.videoTrack.id === a.id ? (e.videoTrack = a) : a.muted || (e.videoTrack = a)), e.videoTrack || (e.video = !1);
                }
                if (e.screen && bo(r, e.session_id, "screen-audio")) {
                    var c = So(r, e.session_id, "screen", "audio");
                    c && (t && t.screenAudioTrack && t.screenAudioTrack.id === c.id ? (e.screenAudioTrack = c) : c.muted || (e.screenAudioTrack = c));
                }
                if (e.screen && bo(r, e.session_id, "screen-video")) {
                    var l = So(r, e.session_id, "screen", "video");
                    l && (t && t.screenVideoTrack && t.screenVideoTrack.id === l.id ? (e.screenVideoTrack = l) : l.muted || (e.screenVideoTrack = l));
                }
                e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
            } catch (e) {
                console.error("unexpected error matching up tracks", e);
            }
        }
    }
    function Lo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    var Io = new Map(),
        Po = null;
    function Do(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    var xo = new Map(),
        No = null;
    function Ro(e) {
        var t;
        jo()
            ? ((t = e),
              Io.has(t) ||
                  (Io.set(t, {}),
                  navigator.mediaDevices
                      .enumerateDevices()
                      .then(function (e) {
                          var n;
                          Io.has(t) &&
                              ((Io.get(t).lastDevicesString = JSON.stringify(e)),
                              Po ||
                                  ((n = v(function* () {
                                      var e,
                                          t = yield navigator.mediaDevices.enumerateDevices(),
                                          n = (function (e, t) {
                                              var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
                                              if (!n) {
                                                  if (
                                                      Array.isArray(e) ||
                                                      (n = (function (e, t) {
                                                          if (e) {
                                                              if ("string" == typeof e) return Lo(e, t);
                                                              var n = Object.prototype.toString.call(e).slice(8, -1);
                                                              if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n)) return Array.from(e);
                                                              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Lo(e, t);
                                                          }
                                                      })(e)) ||
                                                      (t && e && "number" == typeof e.length)
                                                  ) {
                                                      n && (e = n);
                                                      var r = 0,
                                                          i = function () {};
                                                      return {
                                                          s: i,
                                                          n: function () {
                                                              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                                          },
                                                          e: function (e) {
                                                              throw e;
                                                          },
                                                          f: i,
                                                      };
                                                  }
                                                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                              }
                                              var o,
                                                  s = !0,
                                                  a = !1;
                                              return {
                                                  s: function () {
                                                      n = n.call(e);
                                                  },
                                                  n: function () {
                                                      var e = n.next();
                                                      return (s = e.done), e;
                                                  },
                                                  e: function (e) {
                                                      (a = !0), (o = e);
                                                  },
                                                  f: function () {
                                                      try {
                                                          s || null == n.return || n.return();
                                                      } finally {
                                                          if (a) throw o;
                                                      }
                                                  },
                                              };
                                          })(Io.keys());
                                      try {
                                          for (n.s(); !(e = n.n()).done; ) {
                                              var r = e.value,
                                                  i = JSON.stringify(t);
                                              i !== Io.get(r).lastDevicesString && ((Io.get(r).lastDevicesString = i), r(t));
                                          }
                                      } catch (e) {
                                          n.e(e);
                                      } finally {
                                          n.f();
                                      }
                                  })),
                                  (Po = function () {
                                      return n.apply(this, arguments);
                                  }),
                                  navigator.mediaDevices.addEventListener("devicechange", Po)));
                      })
                      .catch(function () {})))
            : (function (e) {
                  xo.has(e) ||
                      (xo.set(e, {}),
                      navigator.mediaDevices.enumerateDevices().then(function (t) {
                          xo.has(e) &&
                              ((xo.get(e).lastDevicesString = JSON.stringify(t)),
                              No ||
                                  (No = setInterval(
                                      v(function* () {
                                          var e,
                                              t = yield navigator.mediaDevices.enumerateDevices(),
                                              n = (function (e, t) {
                                                  var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
                                                  if (!n) {
                                                      if (
                                                          Array.isArray(e) ||
                                                          (n = (function (e, t) {
                                                              if (e) {
                                                                  if ("string" == typeof e) return Do(e, t);
                                                                  var n = Object.prototype.toString.call(e).slice(8, -1);
                                                                  if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n)) return Array.from(e);
                                                                  if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Do(e, t);
                                                              }
                                                          })(e)) ||
                                                          (t && e && "number" == typeof e.length)
                                                      ) {
                                                          n && (e = n);
                                                          var r = 0,
                                                              i = function () {};
                                                          return {
                                                              s: i,
                                                              n: function () {
                                                                  return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                                              },
                                                              e: function (e) {
                                                                  throw e;
                                                              },
                                                              f: i,
                                                          };
                                                      }
                                                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                  }
                                                  var o,
                                                      s = !0,
                                                      a = !1;
                                                  return {
                                                      s: function () {
                                                          n = n.call(e);
                                                      },
                                                      n: function () {
                                                          var e = n.next();
                                                          return (s = e.done), e;
                                                      },
                                                      e: function (e) {
                                                          (a = !0), (o = e);
                                                      },
                                                      f: function () {
                                                          try {
                                                              s || null == n.return || n.return();
                                                          } finally {
                                                              if (a) throw o;
                                                          }
                                                      },
                                                  };
                                              })(xo.keys());
                                          try {
                                              for (n.s(); !(e = n.n()).done; ) {
                                                  var r = e.value,
                                                      i = JSON.stringify(t);
                                                  i !== xo.get(r).lastDevicesString && ((xo.get(r).lastDevicesString = i), r(t));
                                              }
                                          } catch (e) {
                                              n.e(e);
                                          } finally {
                                              n.f();
                                          }
                                      }),
                                      3e3
                                  )));
                      }));
              })(e);
    }
    function jo() {
        return Ui() || void 0 !== navigator.mediaDevices.ondevicechange;
    }
    var Fo = new Set();
    var Uo,
        Bo = ["videoTrack"],
        Vo = ["result"],
        Yo = ["preserveIframe"];
    function $o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function Go(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? $o(Object(n), !0).forEach(function (t) {
                      m(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : $o(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
        }
        return e;
    }
    function qo(e, t) {
        var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
        if (!n) {
            if (
                Array.isArray(e) ||
                (n = (function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return Jo(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n)) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jo(e, t);
                    }
                })(e)) ||
                (t && e && "number" == typeof e.length)
            ) {
                n && (e = n);
                var r = 0,
                    i = function () {};
                return {
                    s: i,
                    n: function () {
                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                        throw e;
                    },
                    f: i,
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o,
            s = !0,
            a = !1;
        return {
            s: function () {
                n = n.call(e);
            },
            n: function () {
                var e = n.next();
                return (s = e.done), e;
            },
            e: function (e) {
                (a = !0), (o = e);
            },
            f: function () {
                try {
                    s || null == n.return || n.return();
                } finally {
                    if (a) throw o;
                }
            },
        };
    }
    function Jo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    var Wo = "video",
        zo = "voice",
        Ho = Ui() ? { data: {} } : { data: {}, topology: "none" },
        Ko = { present: 0, hidden: 0 },
        Qo = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } },
        Xo = Object.keys(Qo),
        Zo = ["state", "volume", "simulcastEncodings"],
        es = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } },
        ts = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string" } },
        ns = {
            id: {
                allow: "string",
                controlledBy: "'*' | 'owners' | string[]",
                csp: "string",
                iconURL: "string",
                label: "string",
                loading: "'eager' | 'lazy'",
                location: "'main' | 'sidebar'",
                name: "string",
                referrerPolicy: "string",
                sandbox: "string",
                src: "string",
                srcdoc: "string",
                shared: "string[] | 'owners' | boolean",
            },
        },
        rs = {
            customIntegrations: { validate: ks, help: Ss() },
            customTrayButtons: { validate: Es, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(ts)) },
            url: {
                validate: function (e) {
                    return "string" == typeof e;
                },
                help: "url should be a string",
            },
            baseUrl: {
                validate: function (e) {
                    return "string" == typeof e;
                },
                help: "baseUrl should be a string",
            },
            token: {
                validate: function (e) {
                    return "string" == typeof e;
                },
                help: "token should be a string",
                queryString: "t",
            },
            dailyConfig: {
                validate: function (e, t) {
                    try {
                        return t.validateDailyConfig(e), !0;
                    } catch (e) {
                        console.error("Failed to validate dailyConfig", e);
                    }
                    return !1;
                },
                help: "Unsupported dailyConfig. Check error logs for detailed info.",
            },
            reactNativeConfig: {
                validate: function (e) {
                    return Ts(e, es);
                },
                help: "reactNativeConfig should look like ".concat(JSON.stringify(es), ", all fields optional"),
            },
            lang: {
                validate: function (e) {
                    return ["de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(e);
                },
                help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user",
            },
            userName: !0,
            userData: {
                validate: function (e) {
                    try {
                        return gs(e), !0;
                    } catch (e) {
                        return console.error(e), !1;
                    }
                },
                help: "invalid userData type provided",
            },
            startVideoOff: !0,
            startAudioOff: !0,
            activeSpeakerMode: !0,
            showLeaveButton: !0,
            showLocalVideo: !0,
            showParticipantsBar: !0,
            showFullscreenButton: !0,
            showUserNameChangeUI: !0,
            iframeStyle: !0,
            customLayout: !0,
            cssFile: !0,
            cssText: !0,
            bodyClass: !0,
            videoSource: {
                validate: function (e, t) {
                    return e instanceof MediaStreamTrack && (t._sharedTracks.videoDeviceId = e), (t._preloadCache.videoDeviceId = e), !0;
                },
            },
            audioSource: {
                validate: function (e, t) {
                    return e instanceof MediaStreamTrack && (t._sharedTracks.audioDeviceId = e), (t._preloadCache.audioDeviceId = e), !0;
                },
            },
            subscribeToTracksAutomatically: {
                validate: function (e, t) {
                    return (t._preloadCache.subscribeToTracksAutomatically = e), !0;
                },
            },
            theme: {
                validate: function (e) {
                    var t = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"],
                        n = function (e) {
                            for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                                var i = r[n];
                                if (!t.includes(i)) return console.error('unsupported color "'.concat(i, '". Valid colors: ').concat(t.join(", "))), !1;
                                if (!e[i].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(i, ' theme color should be provided in valid hex color format. Received: "').concat(e[i], '"')), !1;
                            }
                            return !0;
                        };
                    return "object" === s(e) && (("light" in e && "dark" in e) || "colors" in e)
                        ? "light" in e && "dark" in e
                            ? "colors" in e.light
                                ? "colors" in e.dark
                                    ? n(e.light.colors) && n(e.dark.colors)
                                    : (console.error('Dark theme is missing "colors" property.', e), !1)
                                : (console.error('Light theme is missing "colors" property.', e), !1)
                            : n(e.colors)
                        : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', e), !1);
                },
                help: "unsupported theme configuration. Check error logs for detailed info.",
            },
            layoutConfig: {
                validate: function (e) {
                    if ("grid" in e) {
                        var t = e.grid;
                        if ("maxTilesPerPage" in t) {
                            if (!Number.isInteger(t.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(t.maxTilesPerPage, ".")), !1;
                            if (t.maxTilesPerPage > 49)
                                return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1;
                        }
                        if ("minTilesPerPage" in t) {
                            if (!Number.isInteger(t.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(t.minTilesPerPage, ".")), !1;
                            if (t.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
                            if ("maxTilesPerPage" in t && t.minTilesPerPage > t.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1;
                        }
                    }
                    return !0;
                },
                help: "unsupported layoutConfig. Check error logs for detailed info.",
            },
            receiveSettings: {
                validate: function (e) {
                    return vs(e, { allowAllParticipantsKey: !1 });
                },
                help: ws({ allowAllParticipantsKey: !1 }),
            },
            sendSettings: {
                validate: function (e, t) {
                    return (
                        !!(function (e, t) {
                            try {
                                return t.validateUpdateSendSettings(e), !0;
                            } catch (e) {
                                return console.error("Failed to validate send settings", e), !1;
                            }
                        })(e, t) && ((t._preloadCache.sendSettings = e), !0)
                    );
                },
                help: "Invalid sendSettings provided. Check error logs for detailed info.",
            },
            inputSettings: {
                validate: function (e, t) {
                    var n;
                    return (
                        !!_s(e) &&
                        (t._preloadCache.inputSettings || (t._preloadCache.inputSettings = {}),
                        ys(e, null === (n = t.properties) || void 0 === n ? void 0 : n.dailyConfig),
                        e.audio && (t._preloadCache.inputSettings.audio = e.audio),
                        e.video && (t._preloadCache.inputSettings.video = e.video),
                        !0)
                    );
                },
                help: bs(),
            },
            layout: {
                validate: function (e) {
                    return "custom-v1" === e || "browser" === e || "none" === e;
                },
                help: 'layout may only be set to "custom-v1"',
                queryString: "layout",
            },
            emb: { queryString: "emb" },
            embHref: { queryString: "embHref" },
            dailyJsVersion: { queryString: "dailyJsVersion" },
            proxy: { queryString: "proxy" },
            strictMode: !0,
        },
        is = {
            styles: {
                validate: function (e) {
                    for (var t in e) if ("cam" !== t && "screen" !== t) return !1;
                    if (e.cam) for (var n in e.cam) if ("div" !== n && "video" !== n) return !1;
                    if (e.screen) for (var r in e.screen) if ("div" !== r && "video" !== r) return !1;
                    return !0;
                },
                help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }",
            },
            setSubscribedTracks: {
                validate: function (e, t) {
                    if (t._preloadCache.subscribeToTracksAutomatically) return !1;
                    var n = [!0, !1, "staged"];
                    if (n.includes(e) || (!Ui() && "avatar" === e)) return !0;
                    var r = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"];
                    return (function e(t) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        for (var o in t)
                            if ("custom" === o) {
                                if (!n.includes(t[o]) && !e(t[o], !0)) return !1;
                            } else {
                                var s = !i && !r.includes(o),
                                    a = !n.includes(t[o]);
                                if (s || a) return !1;
                            }
                        return !0;
                    })(e);
                },
                help:
                    "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " +
                    "true".concat(Ui() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }"),
            },
            setAudio: !0,
            setVideo: !0,
            setScreenShare: {
                validate: function (e) {
                    return !1 === e;
                },
                help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares",
            },
            eject: !0,
            updatePermissions: {
                validate: function (e) {
                    for (var t = 0, n = Object.entries(e); t < n.length; t++) {
                        var r = y(n[t], 2),
                            i = r[0],
                            o = r[1];
                        switch (i) {
                            case "hasPresence":
                                if ("boolean" != typeof o) return !1;
                                break;
                            case "canSend":
                                if (o instanceof Set || o instanceof Array) {
                                    var s,
                                        a = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"],
                                        c = qo(o);
                                    try {
                                        for (c.s(); !(s = c.n()).done; ) {
                                            var l = s.value;
                                            if (!a.includes(l)) return !1;
                                        }
                                    } catch (e) {
                                        c.e(e);
                                    } finally {
                                        c.f();
                                    }
                                } else if ("boolean" != typeof o) return !1;
                                o instanceof Array && (e.canSend = new Set(o));
                                break;
                            case "canAdmin":
                                if (o instanceof Set || o instanceof Array) {
                                    var u,
                                        d = ["participants", "streaming", "transcription"],
                                        h = qo(o);
                                    try {
                                        for (h.s(); !(u = h.n()).done; ) {
                                            var p = u.value;
                                            if (!d.includes(p)) return !1;
                                        }
                                    } catch (e) {
                                        h.e(e);
                                    } finally {
                                        h.f();
                                    }
                                } else if ("boolean" != typeof o) return !1;
                                o instanceof Array && (e.canAdmin = new Set(o));
                                break;
                            default:
                                return !1;
                        }
                    }
                    return !0;
                },
                help:
                    "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription).",
            },
        };
    Promise.any ||
        (Promise.any = (function () {
            var e = v(function* (e) {
                return new Promise(function (t, n) {
                    var r = [];
                    e.forEach(function (i) {
                        return Promise.resolve(i)
                            .then(function (e) {
                                t(e);
                            })
                            .catch(function (t) {
                                r.push(t), r.length === e.length && n(r);
                            });
                    });
                });
            });
            return function (t) {
                return e.apply(this, arguments);
            };
        })());
    var os = (function (e) {
        h(Q, w);
        var t,
            n,
            r,
            a,
            c,
            d,
            g,
            _,
            b,
            S,
            E,
            k,
            T,
            C,
            M,
            A,
            O,
            L,
            I,
            P,
            D,
            x,
            N,
            R,
            j,
            F,
            B,
            V,
            Y,
            $,
            G,
            q,
            J,
            W,
            z,
            H,
            K = (function (e) {
                var t = (function () {
                    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return p(this, n);
                };
            })(Q);
        function Q(e) {
            var t,
                n,
                r,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (
                (o(this, Q),
                m(u((t = K.call(this))), "startListeningForDeviceChanges", function () {
                    Ro(t.handleDeviceChange);
                }),
                m(u(t), "stopListeningForDeviceChanges", function () {
                    !(function (e) {
                        var t;
                        jo()
                            ? ((t = e), Io.has(t) && (Io.delete(t), 0 === Io.size && Po && (navigator.mediaDevices.removeEventListener("devicechange", Po), (Po = null))))
                            : (function (e) {
                                  xo.has(e) && (xo.delete(e), 0 === xo.size && No && (clearInterval(No), (No = null)));
                              })(e);
                    })(t.handleDeviceChange);
                }),
                m(u(t), "handleDeviceChange", function (e) {
                    (e = e.map(function (e) {
                        return JSON.parse(JSON.stringify(e));
                    })),
                        t.emit(Nr, { action: Nr, availableDevices: e });
                }),
                m(
                    u(t),
                    "handleNativeAppStateChange",
                    ((r = v(function* (e) {
                        if ("destroyed" === e) return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield t.destroy());
                        var n = "active" === e;
                        t.disableReactNativeAutoDeviceManagement("video") ||
                            (n ? t.camUnmutedBeforeLosingNativeActiveState && t.setLocalVideo(!0) : ((t.camUnmutedBeforeLosingNativeActiveState = t.localVideo()), t.camUnmutedBeforeLosingNativeActiveState && t.setLocalVideo(!1)));
                    })),
                    function (e) {
                        return r.apply(this, arguments);
                    })
                ),
                m(u(t), "handleNativeAudioFocusChange", function (e) {
                    t.disableReactNativeAutoDeviceManagement("audio") ||
                        ((t._hasNativeAudioFocus = e),
                        t.toggleParticipantAudioBasedOnNativeAudioFocus(),
                        t._hasNativeAudioFocus ? t.micUnmutedBeforeLosingNativeAudioFocus && t.setLocalAudio(!0) : ((t.micUnmutedBeforeLosingNativeAudioFocus = t.localAudio()), t.setLocalAudio(!1)));
                }),
                m(u(t), "handleNativeSystemScreenCaptureStop", function () {
                    t.stopScreenShare();
                }),
                (t.strictMode = void 0 === i.strictMode || i.strictMode),
                Uo)
            ) {
                if ((t._logDuplicateInstanceAttempt(), t.strictMode)) throw new Error("Duplicate DailyIframe instances are not allowed");
            } else (n = u(t)), (Uo = n);
            if (
                (window._daily || (window._daily = { pendings: [], instances: {} }),
                (t._callFrameId = Z()),
                (window._daily.instances[t._callFrameId] = {}),
                (t._sharedTracks = {}),
                (window._daily.instances[t._callFrameId].tracks = t._sharedTracks),
                (i.dailyJsVersion = Q.version()),
                (t._iframe = e),
                (t._callObjectMode = "none" === i.layout && !t._iframe),
                (t._preloadCache = {
                    subscribeToTracksAutomatically: !0,
                    audioDeviceId: null,
                    videoDeviceId: null,
                    outputDeviceId: null,
                    inputSettings: null,
                    sendSettings: null,
                    videoTrackForNetworkConnectivityTest: null,
                    videoTrackForConnectionQualityTest: null,
                }),
                void 0 !== i.showLocalVideo ? (t._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : (t._showLocalVideo = !!i.showLocalVideo)) : (t._showLocalVideo = !0),
                void 0 !== i.showParticipantsBar ? (t._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : (t._showParticipantsBar = !!i.showParticipantsBar)) : (t._showParticipantsBar = !0),
                void 0 !== i.customIntegrations ? (t._callObjectMode ? console.error("customIntegrations is not available in call object mode") : (t._customIntegrations = i.customIntegrations)) : (t._customIntegrations = {}),
                void 0 !== i.customTrayButtons ? (t._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : (t._customTrayButtons = i.customTrayButtons)) : (t._customTrayButtons = {}),
                void 0 !== i.activeSpeakerMode ? (t._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : (t._activeSpeakerMode = !!i.activeSpeakerMode)) : (t._activeSpeakerMode = !1),
                i.receiveSettings ? (t._callObjectMode ? (t._receiveSettings = i.receiveSettings) : console.error("receiveSettings is only available in call object mode")) : (t._receiveSettings = {}),
                t.validateProperties(i),
                (t.properties = Go({}, i)),
                t._preloadCache.inputSettings || (t._preloadCache.inputSettings = {}),
                i.inputSettings && i.inputSettings.audio && (t._preloadCache.inputSettings.audio = i.inputSettings.audio),
                i.inputSettings && i.inputSettings.video && (t._preloadCache.inputSettings.video = i.inputSettings.video),
                (t._callObjectLoader = t._callObjectMode ? new po(t._callFrameId) : null),
                (t._callState = fr),
                (t._isPreparingToJoin = !1),
                (t._accessState = { access: wr }),
                (t._meetingSessionSummary = {}),
                (t._finalSummaryOfPrevSession = {}),
                (t._meetingSessionState = As(Ho, t._callObjectMode)),
                (t._nativeInCallAudioMode = Wo),
                (t._participants = {}),
                (t._isScreenSharing = !1),
                (t._participantCounts = Ko),
                (t._rmpPlayerState = {}),
                (t._waitingParticipants = {}),
                (t._network = { threshold: "good", quality: 100 }),
                (t._activeSpeaker = {}),
                (t._localAudioLevel = 0),
                (t._remoteParticipantsAudioLevel = {}),
                (t._messageChannel = Ui() ? new io() : new ro()),
                t._iframe &&
                    (t._iframe.requestFullscreen
                        ? t._iframe.addEventListener("fullscreenchange", function () {
                              document.fullscreenElement === t._iframe ? (t.emit(vi, { action: vi }), t.sendMessageToCallMachine({ action: vi })) : (t.emit(_i, { action: _i }), t.sendMessageToCallMachine({ action: _i }));
                          })
                        : t._iframe.webkitRequestFullscreen &&
                          t._iframe.addEventListener("webkitfullscreenchange", function () {
                              document.webkitFullscreenElement === t._iframe ? (t.emit(vi, { action: vi }), t.sendMessageToCallMachine({ action: vi })) : (t.emit(_i, { action: _i }), t.sendMessageToCallMachine({ action: _i }));
                          })),
                Ui())
            ) {
                var s = t.nativeUtils();
                (s.addAudioFocusChangeListener && s.removeAudioFocusChangeListener && s.addAppStateChangeListener && s.removeAppStateChangeListener && s.addSystemScreenCaptureStopListener && s.removeSystemScreenCaptureStopListener) ||
                    console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"),
                    (t._hasNativeAudioFocus = !0),
                    s.addAudioFocusChangeListener(t.handleNativeAudioFocusChange),
                    s.addAppStateChangeListener(t.handleNativeAppStateChange),
                    s.addSystemScreenCaptureStopListener(t.handleNativeSystemScreenCaptureStop);
            }
            return t._callObjectMode && t.startListeningForDeviceChanges(), t._messageChannel.addListenerForMessagesFromCallMachine(t.handleMessageFromCallMachine, t._callFrameId, u(t)), t;
        }
        return (
            l(
                Q,
                [
                    {
                        key: "destroy",
                        value:
                            ((H = v(function* () {
                                var e, t;
                                try {
                                    yield this.leave();
                                } catch {}
                                var n = this._iframe;
                                if (n) {
                                    var r = n.parentElement;
                                    r && r.removeChild(n);
                                }
                                if ((this._messageChannel.removeListener(this.handleMessageFromCallMachine), Ui())) {
                                    var i = this.nativeUtils();
                                    i.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange),
                                        i.removeAppStateChangeListener(this.handleNativeAppStateChange),
                                        i.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
                                }
                                this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), (this._destroyed = !0);
                                try {
                                    this.emit("call-instance-destroyed", { action: "call-instance-destroyed" });
                                } catch {
                                    console.log("could not emit call-instance-destroyed");
                                }
                                (Uo = void 0),
                                    !(null === (e = window) || void 0 === e || null === (t = e._daily) || void 0 === t) && t.instances && delete window._daily.instances[this._callFrameId],
                                    this.strictMode && (this._callFrameId = void 0);
                            })),
                            function () {
                                return H.apply(this, arguments);
                            }),
                    },
                    {
                        key: "isDestroyed",
                        value: function () {
                            return !!this._destroyed;
                        },
                    },
                    {
                        key: "loadCss",
                        value: function (e) {
                            var t = e.bodyClass,
                                n = e.cssFile,
                                r = e.cssText;
                            return fs(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(n), bodyClass: t, cssText: r }), this;
                        },
                    },
                    {
                        key: "iframe",
                        value: function () {
                            return fs(), this._iframe;
                        },
                    },
                    {
                        key: "meetingState",
                        value: function () {
                            return this._callState;
                        },
                    },
                    {
                        key: "accessState",
                        value: function () {
                            return hs(this._callObjectMode, "accessState()"), this._accessState;
                        },
                    },
                    {
                        key: "participants",
                        value: function () {
                            return this._participants;
                        },
                    },
                    {
                        key: "participantCounts",
                        value: function () {
                            return this._participantCounts;
                        },
                    },
                    {
                        key: "waitingParticipants",
                        value: function () {
                            return hs(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
                        },
                    },
                    {
                        key: "validateParticipantProperties",
                        value: function (e, t) {
                            for (var n in t) {
                                if (!is[n]) throw new Error("unrecognized updateParticipant property ".concat(n));
                                if (is[n].validate && !is[n].validate(t[n], this, this._participants[e])) throw new Error(is[n].help);
                            }
                        },
                    },
                    {
                        key: "updateParticipant",
                        value: function (e, t) {
                            return (
                                this._participants.local && this._participants.local.session_id === e && (e = "local"),
                                e && t && (this.validateParticipantProperties(e, t), this.sendMessageToCallMachine({ action: "update-participant", id: e, properties: t })),
                                this
                            );
                        },
                    },
                    {
                        key: "updateParticipants",
                        value: function (e) {
                            var t = this._participants.local && this._participants.local.session_id;
                            for (var n in e) n === t && (n = "local"), n && e[n] && this.validateParticipantProperties(n, e[n]);
                            return this.sendMessageToCallMachine({ action: "update-participants", participants: e }), this;
                        },
                    },
                    {
                        key: "updateWaitingParticipant",
                        value:
                            ((z = v(function* () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if ((hs(this._callObjectMode, "updateWaitingParticipant()"), as(this._callState, "updateWaitingParticipant()"), "string" != typeof t || "object" !== s(n)))
                                    throw new Error("updateWaitingParticipant() must take an id string and a updates object");
                                return new Promise(function (r, i) {
                                    e.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: t, updates: n }, function (e) {
                                        e.error && i(e.error), e.id || i(new Error("unknown error in updateWaitingParticipant()")), r({ id: e.id });
                                    });
                                });
                            })),
                            function () {
                                return z.apply(this, arguments);
                            }),
                    },
                    {
                        key: "updateWaitingParticipants",
                        value:
                            ((W = v(function* () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if ((hs(this._callObjectMode, "updateWaitingParticipants()"), as(this._callState, "updateWaitingParticipants()"), "object" !== s(t)))
                                    throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
                                return new Promise(function (n, r) {
                                    e.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: t }, function (e) {
                                        e.error && r(e.error), e.ids || r(new Error("unknown error in updateWaitingParticipants()")), n({ ids: e.ids });
                                    });
                                });
                            })),
                            function () {
                                return W.apply(this, arguments);
                            }),
                    },
                    {
                        key: "requestAccess",
                        value:
                            ((J = v(function* () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = t.access,
                                    r = void 0 === n ? { level: Sr } : n,
                                    i = t.name,
                                    o = void 0 === i ? "" : i;
                                return (
                                    hs(this._callObjectMode, "requestAccess()"),
                                    as(this._callState, "requestAccess()"),
                                    new Promise(function (t, n) {
                                        e.sendMessageToCallMachine({ action: "daily-method-request-access", access: r, name: o }, function (e) {
                                            e.error && n(e.error), e.access || n(new Error("unknown error in requestAccess()")), t({ access: e.access, granted: e.granted });
                                        });
                                    })
                                );
                            })),
                            function () {
                                return J.apply(this, arguments);
                            }),
                    },
                    {
                        key: "localAudio",
                        value: function () {
                            return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
                        },
                    },
                    {
                        key: "localVideo",
                        value: function () {
                            return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
                        },
                    },
                    {
                        key: "setLocalAudio",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return (
                                "forceDiscardTrack" in t &&
                                    (Ui()
                                        ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), (t = {}))
                                        : e && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), (t = {}))),
                                this.sendMessageToCallMachine({ action: "local-audio", state: e, options: t }),
                                this
                            );
                        },
                    },
                    {
                        key: "localScreenAudio",
                        value: function () {
                            return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenAudio.state) : null;
                        },
                    },
                    {
                        key: "localScreenVideo",
                        value: function () {
                            return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenVideo.state) : null;
                        },
                    },
                    {
                        key: "updateScreenShare",
                        value: function (e) {
                            if (this._isScreenSharing) return this.sendMessageToCallMachine({ action: "local-screen-update", options: e }), this;
                            console.warn("There is no screen share in progress. Try calling startScreenShare first.");
                        },
                    },
                    {
                        key: "setLocalVideo",
                        value: function (e) {
                            return this.sendMessageToCallMachine({ action: "local-video", state: e }), this;
                        },
                    },
                    {
                        key: "getReceiveSettings",
                        value:
                            ((q = v(function* (e) {
                                var t = this,
                                    n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).showInheritedValues,
                                    r = void 0 !== n && n;
                                if ((hs(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized)) return this._receiveSettings;
                                switch (s(e)) {
                                    case "string":
                                        return new Promise(function (n) {
                                            t.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: e, showInheritedValues: r }, function (e) {
                                                n(e.receiveSettings);
                                            });
                                        });
                                    case "undefined":
                                        return this._receiveSettings;
                                    default:
                                        throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
                                }
                            })),
                            function (e) {
                                return q.apply(this, arguments);
                            }),
                    },
                    {
                        key: "updateReceiveSettings",
                        value:
                            ((G = v(function* (e) {
                                var t = this;
                                if ((hs(this._callObjectMode, "updateReceiveSettings()"), !vs(e, { allowAllParticipantsKey: !0 }))) throw new Error(ws({ allowAllParticipantsKey: !0 }));
                                return (
                                    as(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."),
                                    new Promise(function (n) {
                                        t.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: e }, function (e) {
                                            n({ receiveSettings: e.receiveSettings });
                                        });
                                    })
                                );
                            })),
                            function (e) {
                                return G.apply(this, arguments);
                            }),
                    },
                    {
                        key: "_prepInputSettingsToPresentToUser",
                        value: function (e) {
                            var t, n, r, i, o, s, a, c;
                            if (e) {
                                var l = {},
                                    u =
                                        "none" === (null === (t = e.audio) || void 0 === t || null === (n = t.processor) || void 0 === n ? void 0 : n.type) &&
                                        (null === (r = e.audio) || void 0 === r || null === (i = r.processor) || void 0 === i ? void 0 : i._isDefaultWhenNone);
                                if (e.audio && !u) {
                                    var d = Go({}, e.audio.processor);
                                    delete d._isDefaultWhenNone, (l.audio = Go(Go({}, e.audio), {}, { processor: d }));
                                }
                                var h =
                                    "none" === (null === (o = e.video) || void 0 === o || null === (s = o.processor) || void 0 === s ? void 0 : s.type) &&
                                    (null === (a = e.video) || void 0 === a || null === (c = a.processor) || void 0 === c ? void 0 : c._isDefaultWhenNone);
                                if (e.video && !h) {
                                    var p = Go({}, e.video.processor);
                                    delete p._isDefaultWhenNone, (l.video = Go(Go({}, e.video), {}, { processor: p }));
                                }
                                return l;
                            }
                        },
                    },
                    {
                        key: "getInputSettings",
                        value: function () {
                            var e = this;
                            return (
                                fs(),
                                new Promise(function (t) {
                                    t(e._getInputSettings());
                                })
                            );
                        },
                    },
                    {
                        key: "_getInputSettings",
                        value: function () {
                            var e,
                                t,
                                n,
                                r,
                                i,
                                o,
                                s,
                                a,
                                c = { processor: { type: "none", _isDefaultWhenNone: !0 } };
                            this._inputSettings
                                ? ((e = (null === (n = this._inputSettings) || void 0 === n ? void 0 : n.video) || c), (t = (null === (r = this._inputSettings) || void 0 === r ? void 0 : r.audio) || c))
                                : ((e = (null === (i = this._preloadCache) || void 0 === i || null === (o = i.inputSettings) || void 0 === o ? void 0 : o.video) || c),
                                  (t = (null === (s = this._preloadCache) || void 0 === s || null === (a = s.inputSettings) || void 0 === a ? void 0 : a.audio) || c));
                            var l = { audio: t, video: e };
                            return this._prepInputSettingsToPresentToUser(l);
                        },
                    },
                    {
                        key: "updateInputSettings",
                        value:
                            (($ = v(function* (e) {
                                var t = this;
                                return (
                                    fs(),
                                    _s(e)
                                        ? (e &&
                                              (this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}),
                                              ys(e, this.properties.dailyConfig),
                                              e.audio && (this._preloadCache.inputSettings.audio = e.audio),
                                              e.video && (this._preloadCache.inputSettings.video = e.video)),
                                          e.video || e.audio
                                              ? this._callObjectMode && !this._callMachineInitialized
                                                  ? this._getInputSettings()
                                                  : new Promise(function (n, r) {
                                                        t.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: e }, function (e) {
                                                            e.error ? r(e.error) : n({ inputSettings: t._prepInputSettingsToPresentToUser(e.inputSettings) });
                                                        });
                                                    })
                                              : this._getInputSettings())
                                        : (console.error(bs()), Promise.reject(bs()))
                                );
                            })),
                            function (e) {
                                return $.apply(this, arguments);
                            }),
                    },
                    {
                        key: "setBandwidth",
                        value: function (e) {
                            var t = e.kbs,
                                n = e.trackConstraints;
                            if ((fs(), this._callMachineInitialized)) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: t, trackConstraints: n }), this;
                        },
                    },
                    {
                        key: "getDailyLang",
                        value: function () {
                            var e = this;
                            if ((fs(), this._callMachineInitialized))
                                return new Promise(function (t) {
                                    e.sendMessageToCallMachine({ action: "get-daily-lang" }, function (e) {
                                        delete e.action, delete e.callbackStamp, t(e);
                                    });
                                });
                        },
                    },
                    {
                        key: "setDailyLang",
                        value: function (e) {
                            return fs(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: e }), this;
                        },
                    },
                    {
                        key: "setProxyUrl",
                        value: function (e) {
                            return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: e }), this;
                        },
                    },
                    {
                        key: "setIceConfig",
                        value: function (e) {
                            return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: e }), this;
                        },
                    },
                    {
                        key: "meetingSessionSummary",
                        value: function () {
                            return [yr, br].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
                        },
                    },
                    {
                        key: "getMeetingSession",
                        value:
                            ((Y = v(function* () {
                                var e = this;
                                return (
                                    console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"),
                                    as(this._callState, "getMeetingSession()"),
                                    new Promise(function (t) {
                                        e.sendMessageToCallMachine({ action: "get-meeting-session" }, function (e) {
                                            delete e.action, delete e.callbackStamp, delete e.callFrameId, t(e);
                                        });
                                    })
                                );
                            })),
                            function () {
                                return Y.apply(this, arguments);
                            }),
                    },
                    {
                        key: "meetingSessionState",
                        value: function () {
                            return as(this._callState, "meetingSessionState"), this._meetingSessionState;
                        },
                    },
                    {
                        key: "setMeetingSessionData",
                        value: function (e) {
                            var t,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "replace";
                            hs(this._callObjectMode, "setMeetingSessionData()"), as(this._callState, "setMeetingSessionData");
                            try {
                                new co({ data: (t = e), mergeStrategy: n });
                            } catch (t) {
                                throw (console.error(t), t);
                            }
                            try {
                                this.sendMessageToCallMachine({ action: "set-session-data", data: e, mergeStrategy: n });
                            } catch (t) {
                                throw new Error("Error setting meeting session data: ".concat(t));
                            }
                        },
                    },
                    {
                        key: "setUserName",
                        value: function (e, t) {
                            var n = this;
                            return (
                                (this.properties.userName = e),
                                new Promise(function (r) {
                                    n.sendMessageToCallMachine({ action: "set-user-name", name: e ?? "", thisMeetingOnly: Ui() || (!!t && !!t.thisMeetingOnly) }, function (e) {
                                        delete e.action, delete e.callbackStamp, r(e);
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "setUserData",
                        value:
                            ((V = v(function* (e) {
                                var t = this;
                                try {
                                    gs(e);
                                } catch (e) {
                                    throw (console.error(e), e);
                                }
                                if (((this.properties.userData = e), this._callMachineInitialized))
                                    return new Promise(function (n) {
                                        try {
                                            t.sendMessageToCallMachine({ action: "set-user-data", userData: e }, function (e) {
                                                delete e.action, delete e.callbackStamp, delete e.callFrameId, n(e);
                                            });
                                        } catch (e) {
                                            throw new Error("Error setting user data: ".concat(e));
                                        }
                                    });
                            })),
                            function (e) {
                                return V.apply(this, arguments);
                            }),
                    },
                    {
                        key: "validateAudioLevelInterval",
                        value: function (e) {
                            if (e && (e < 100 || "number" != typeof e)) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
                        },
                    },
                    {
                        key: "startLocalAudioLevelObserver",
                        value: function (e) {
                            var t = this;
                            if (typeof AudioWorkletNode > "u" && !Ui()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
                            if ((this.validateAudioLevelInterval(e), this._callMachineInitialized))
                                return new Promise(function (n, r) {
                                    t.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: e }, function (e) {
                                        e.error ? r({ error: e.error }) : n();
                                    });
                                });
                            this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: e };
                        },
                    },
                    {
                        key: "stopLocalAudioLevelObserver",
                        value: function () {
                            (this._preloadCache.localAudioLevelObserver = null), (this._localAudioLevel = 0), this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
                        },
                    },
                    {
                        key: "startRemoteParticipantsAudioLevelObserver",
                        value: function (e) {
                            var t = this;
                            if ((this.validateAudioLevelInterval(e), this._callMachineInitialized))
                                return new Promise(function (n, r) {
                                    t.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: e }, function (e) {
                                        e.error ? r({ error: e.error }) : n();
                                    });
                                });
                            this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: e };
                        },
                    },
                    {
                        key: "stopRemoteParticipantsAudioLevelObserver",
                        value: function () {
                            (this._preloadCache.remoteParticipantsAudioLevelObserver = null), (this._remoteParticipantsAudioLevel = {}), this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
                        },
                    },
                    {
                        key: "startCamera",
                        value:
                            ((B = v(function* () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (
                                    (hs(this._callObjectMode, "startCamera()"),
                                    ls(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"),
                                    ds(this._testCallInProgress, "startCamera()"),
                                    this.needsLoad())
                                )
                                    try {
                                        yield this.load(t);
                                    } catch (e) {
                                        return Promise.reject(e);
                                    }
                                else {
                                    if (this._didPreAuth) {
                                        if (t.url && t.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
                                        if (t.token && t.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
                                    }
                                    this.validateProperties(t), (this.properties = Go(Go({}, this.properties), t));
                                }
                                return new Promise(function (t) {
                                    e.sendMessageToCallMachine({ action: "start-camera", properties: ss(e.properties, e._callFrameId), preloadCache: ss(e._preloadCache, e._callFrameId) }, function (e) {
                                        delete e.action, delete e.callbackStamp, t(e);
                                    });
                                });
                            })),
                            function () {
                                return B.apply(this, arguments);
                            }),
                    },
                    {
                        key: "validateCustomTrack",
                        value: function (e, t, n) {
                            if (n && n.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
                            if (t && "music" !== t && "speech" !== t && !(t instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
                            if (n && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(n))
                                throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
                            if (!(e instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
                        },
                    },
                    {
                        key: "startCustomTrack",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { track: track, mode: mode, trackName: trackName };
                            return (
                                fs(),
                                as(this._callState, "startCustomTrack()"),
                                this.validateCustomTrack(t.track, t.mode, t.trackName),
                                new Promise(function (n, r) {
                                    (e._sharedTracks.customTrack = t.track),
                                        (t.track = Di),
                                        e.sendMessageToCallMachine({ action: "start-custom-track", properties: t }, function (e) {
                                            e.error ? r({ error: e.error }) : n(e.mediaTag);
                                        });
                                })
                            );
                        },
                    },
                    {
                        key: "stopCustomTrack",
                        value: function (e) {
                            var t = this;
                            return (
                                fs(),
                                as(this._callState, "stopCustomTrack()"),
                                new Promise(function (n) {
                                    t.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: e }, function (e) {
                                        n(e.mediaTag);
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "setCamera",
                        value: function (e) {
                            var t = this;
                            return (
                                ms(),
                                us(this._callMachineInitialized, "setCamera()"),
                                new Promise(function (n) {
                                    t.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: e }, function (e) {
                                        n({ device: e.device });
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "setAudioDevice",
                        value:
                            ((F = v(function* (e) {
                                return ms(), this.nativeUtils().setAudioDevice(e), { deviceId: yield this.nativeUtils().getAudioDevice() };
                            })),
                            function (e) {
                                return F.apply(this, arguments);
                            }),
                    },
                    {
                        key: "cycleCamera",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return new Promise(function (n) {
                                e.sendMessageToCallMachine({ action: "cycle-camera", properties: t }, function (e) {
                                    n({ device: e.device });
                                });
                            });
                        },
                    },
                    {
                        key: "cycleMic",
                        value: function () {
                            var e = this;
                            return (
                                fs(),
                                new Promise(function (t) {
                                    e.sendMessageToCallMachine({ action: "cycle-mic" }, function (e) {
                                        t({ device: e.device });
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "getCameraFacingMode",
                        value: function () {
                            var e = this;
                            return (
                                ms(),
                                new Promise(function (t) {
                                    e.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function (e) {
                                        t(e.facingMode);
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "setInputDevicesAsync",
                        value:
                            ((j = v(function* (e) {
                                var t = this,
                                    n = e.audioDeviceId,
                                    r = e.videoDeviceId,
                                    i = e.audioSource,
                                    o = e.videoSource;
                                return (
                                    fs(),
                                    void 0 !== i && (n = i),
                                    void 0 !== o && (r = o),
                                    n && ((this._preloadCache.audioDeviceId = n), (this._sharedTracks.audioDeviceId = n)),
                                    r && ((this._preloadCache.videoDeviceId = r), (this._sharedTracks.videoDeviceId = r)),
                                    this._callObjectMode && this.needsLoad()
                                        ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } }
                                        : (n instanceof MediaStreamTrack && (n = Di),
                                          r instanceof MediaStreamTrack && (r = Di),
                                          new Promise(function (e) {
                                              t.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: n, videoDeviceId: r }, function (n) {
                                                  delete n.action,
                                                      delete n.callbackStamp,
                                                      n.returnPreloadCache
                                                          ? e({ camera: { deviceId: t._preloadCache.videoDeviceId }, mic: { deviceId: t._preloadCache.audioDeviceId }, speaker: { deviceId: t._preloadCache.outputDeviceId } })
                                                          : e(n);
                                              });
                                          }))
                                );
                            })),
                            function (e) {
                                return j.apply(this, arguments);
                            }),
                    },
                    {
                        key: "setOutputDeviceAsync",
                        value:
                            ((R = v(function* (e) {
                                var t = this,
                                    n = e.outputDeviceId;
                                return (
                                    fs(),
                                    n && (this._preloadCache.outputDeviceId = n),
                                    this._callObjectMode && this.needsLoad()
                                        ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } }
                                        : new Promise(function (e) {
                                              t.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: n }, function (n) {
                                                  delete n.action,
                                                      delete n.callbackStamp,
                                                      n.returnPreloadCache
                                                          ? e({ camera: { deviceId: t._preloadCache.videoDeviceId }, mic: { deviceId: t._preloadCache.audioDeviceId }, speaker: { deviceId: t._preloadCache.outputDeviceId } })
                                                          : e(n);
                                              });
                                          })
                                );
                            })),
                            function (e) {
                                return R.apply(this, arguments);
                            }),
                    },
                    {
                        key: "getInputDevices",
                        value:
                            ((N = v(function* () {
                                var e = this;
                                return this._callObjectMode && this.needsLoad()
                                    ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } }
                                    : new Promise(function (t) {
                                          e.sendMessageToCallMachine({ action: "get-input-devices" }, function (n) {
                                              delete n.action,
                                                  delete n.callbackStamp,
                                                  n.returnPreloadCache
                                                      ? t({ camera: { deviceId: e._preloadCache.videoDeviceId }, mic: { deviceId: e._preloadCache.audioDeviceId }, speaker: { deviceId: e._preloadCache.outputDeviceId } })
                                                      : t(n);
                                          });
                                      });
                            })),
                            function () {
                                return N.apply(this, arguments);
                            }),
                    },
                    {
                        key: "nativeInCallAudioMode",
                        value: function () {
                            return ms(), this._nativeInCallAudioMode;
                        },
                    },
                    {
                        key: "setNativeInCallAudioMode",
                        value: function (e) {
                            if ((ms(), [Wo, zo].includes(e))) {
                                if (e !== this._nativeInCallAudioMode)
                                    return (
                                        (this._nativeInCallAudioMode = e),
                                        !this.disableReactNativeAutoDeviceManagement("audio") && cs(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode),
                                        this
                                    );
                            } else console.error("invalid in-call audio mode specified: ", e);
                        },
                    },
                    {
                        key: "preAuth",
                        value:
                            ((x = v(function* () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if ((hs(this._callObjectMode, "preAuth()"), ls(this._callState, this._isPreparingToJoin, "preAuth()"), ds(this._testCallInProgress, "preAuth()"), this.needsLoad() && (yield this.load(t)), !t.url))
                                    throw new Error("preAuth() requires at least a url to be provided");
                                return (
                                    this.validateProperties(t),
                                    (this.properties = Go(Go({}, this.properties), t)),
                                    new Promise(function (t, n) {
                                        e.sendMessageToCallMachine({ action: "daily-method-preauth", properties: ss(e.properties, e._callFrameId), preloadCache: ss(e._preloadCache, e._callFrameId) }, function (r) {
                                            return r.error ? n(r.error) : r.access ? ((e._didPreAuth = !0), void t({ access: r.access })) : n(new Error("unknown error in preAuth()"));
                                        });
                                    })
                                );
                            })),
                            function () {
                                return x.apply(this, arguments);
                            }),
                    },
                    {
                        key: "load",
                        value:
                            ((D = v(function* (e) {
                                var t = this;
                                if (this.needsLoad()) {
                                    if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
                                    if ((e && (this.validateProperties(e), (this.properties = Go(Go({}, this.properties), e))), !this._callObjectMode && !this.properties.url))
                                        throw new Error("can't load iframe meeting because url property isn't set");
                                    this._updateCallState(mr);
                                    try {
                                        this.emit(Mr, { action: Mr });
                                    } catch (e) {
                                        console.log("could not emit 'loading'", e);
                                    }
                                    return this._callObjectMode
                                        ? new Promise(function (e, n) {
                                              t._callObjectLoader.cancel();
                                              var r = Date.now();
                                              t._callObjectLoader.load(
                                                  t.properties.dailyConfig,
                                                  function (n) {
                                                      (t._bundleLoadTime = n ? "no-op" : Date.now() - r), t._updateCallState(gr), n && t.emit(Or, { action: Or }), e();
                                                  },
                                                  function (e, r) {
                                                      if ((t.emit(Ar, { action: Ar, error: e }), !r)) {
                                                          t._updateCallState(br), t.resetMeetingDependentVars();
                                                          var i = {
                                                              action: Mi,
                                                              errorMsg: e.msg,
                                                              error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: e, bundleUrl: ne(t.properties.dailyConfig) } },
                                                          };
                                                          t._maybeSendToSentry(i), t.emit(Mi, i), n(e.msg);
                                                      }
                                                  }
                                              );
                                          })
                                        : ((this._iframe.src = te(this.assembleMeetingUrl(), this.properties.dailyConfig)),
                                          new Promise(function (e, n) {
                                              t._loadedCallback = function (r) {
                                                  t._callState !== br ? (t._updateCallState(gr), (t.properties.cssFile || t.properties.cssText) && t.loadCss(t.properties), e()) : n(r);
                                              };
                                          }));
                                }
                            })),
                            function (e) {
                                return D.apply(this, arguments);
                            }),
                    },
                    {
                        key: "join",
                        value:
                            ((P = v(function* () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                ds(this._testCallInProgress, "join()");
                                var n = !1;
                                if (this.needsLoad()) {
                                    this.updateIsPreparingToJoin(!0);
                                    try {
                                        yield this.load(t);
                                    } catch (e) {
                                        return this.updateIsPreparingToJoin(!1), Promise.reject(e);
                                    }
                                } else {
                                    if (((n = !(!this.properties.cssFile && !this.properties.cssText)), this._didPreAuth)) {
                                        if (t.url && t.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
                                        if (t.token && t.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
                                    }
                                    if (t.url && !this._callObjectMode && t.url && t.url !== this.properties.url)
                                        return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(t.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
                                    this.validateProperties(t), (this.properties = Go(Go({}, this.properties), t));
                                }
                                if (
                                    (void 0 !== t.showLocalVideo && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : (this._showLocalVideo = !!t.showLocalVideo)),
                                    void 0 !== t.showParticipantsBar && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : (this._showParticipantsBar = !!t.showParticipantsBar)),
                                    this._callState === _r || this._callState === vr)
                                )
                                    return console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1);
                                this._updateCallState(vr, !1);
                                try {
                                    this.emit(Pr, { action: Pr });
                                } catch (e) {
                                    console.log("could not emit 'joining-meeting'", e);
                                }
                                return (
                                    this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}),
                                    t.inputSettings && t.inputSettings.audio && (this._preloadCache.inputSettings.audio = t.inputSettings.audio),
                                    t.inputSettings && t.inputSettings.video && (this._preloadCache.inputSettings.video = t.inputSettings.video),
                                    this.sendMessageToCallMachine({ action: "join-meeting", properties: ss(this.properties, this._callFrameId), preloadCache: ss(this._preloadCache, this._callFrameId) }),
                                    new Promise(function (t, r) {
                                        e._joinedCallback = function (i, o) {
                                            if (e._callState !== br) {
                                                if ((e._updateCallState(_r), i))
                                                    for (var s in i) {
                                                        if (e._callObjectMode) {
                                                            var a = e._callMachine().store;
                                                            Co(i[s], a), Mo(i[s], a), Oo(i[s], e._participants[s], a);
                                                        }
                                                        (e._participants[s] = Go({}, i[s])), e.toggleParticipantAudioBasedOnNativeAudioFocus();
                                                    }
                                                n && e.loadCss(e.properties), t(i);
                                            } else r(o);
                                        };
                                    })
                                );
                            })),
                            function () {
                                return P.apply(this, arguments);
                            }),
                    },
                    {
                        key: "leave",
                        value:
                            ((I = v(function* () {
                                var e = this;
                                return (
                                    ds(this._testCallInProgress, "leave()"),
                                    new Promise(function (t) {
                                        if (e._callState === yr || e._callState === br) t();
                                        else if (e._callObjectLoader && !e._callObjectLoader.loaded) {
                                            e._callObjectLoader.cancel(), e._updateCallState(yr), e.resetMeetingDependentVars();
                                            try {
                                                e.emit(yr, { action: yr });
                                            } catch (e) {
                                                console.log("could not emit 'left-meeting'", e);
                                            }
                                            t();
                                        } else (e._resolveLeave = t), e.sendMessageToCallMachine({ action: "leave-meeting" });
                                    })
                                );
                            })),
                            function () {
                                return I.apply(this, arguments);
                            }),
                    },
                    {
                        key: "startScreenShare",
                        value:
                            ((L = v(function* () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (
                                    (us(this._callMachineInitialized, "startScreenShare()"),
                                    t.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", t.screenVideoSendSettings),
                                    t.mediaStream && ((this._sharedTracks.screenMediaStream = t.mediaStream), (t.mediaStream = Di)),
                                    typeof DailyNativeUtils < "u" && void 0 !== DailyNativeUtils.isIOS && DailyNativeUtils.isIOS)
                                ) {
                                    var n = this.nativeUtils();
                                    if (yield n.isScreenBeingCaptured()) return void this.emit(Ci, { action: Ci, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
                                    n.setSystemScreenCaptureStartCallback(function () {
                                        n.setSystemScreenCaptureStartCallback(null), e.sendMessageToCallMachine({ action: Li, captureOptions: t });
                                    }),
                                        n.presentSystemScreenCapturePrompt();
                                } else this.sendMessageToCallMachine({ action: Li, captureOptions: t });
                            })),
                            function () {
                                return L.apply(this, arguments);
                            }),
                    },
                    {
                        key: "stopScreenShare",
                        value: function () {
                            us(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
                        },
                    },
                    {
                        key: "startRecording",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.sendMessageToCallMachine(Go({ action: "local-recording-start" }, e));
                        },
                    },
                    {
                        key: "updateRecording",
                        value: function (e) {
                            var t = e.layout,
                                n = void 0 === t ? { preset: "default" } : t,
                                r = e.instanceId;
                            this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: n, instanceId: r });
                        },
                    },
                    {
                        key: "stopRecording",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.sendMessageToCallMachine(Go({ action: "local-recording-stop" }, e));
                        },
                    },
                    {
                        key: "startLiveStreaming",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.sendMessageToCallMachine(Go({ action: "daily-method-start-live-streaming" }, e));
                        },
                    },
                    {
                        key: "updateLiveStreaming",
                        value: function (e) {
                            var t = e.layout,
                                n = void 0 === t ? { preset: "default" } : t,
                                r = e.instanceId;
                            this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: n, instanceId: r });
                        },
                    },
                    {
                        key: "addLiveStreamingEndpoints",
                        value: function (e) {
                            var t = e.endpoints,
                                n = e.instanceId;
                            this.sendMessageToCallMachine({ action: Ii, endpointsOp: "add-endpoints", endpoints: t, instanceId: n });
                        },
                    },
                    {
                        key: "removeLiveStreamingEndpoints",
                        value: function (e) {
                            var t = e.endpoints,
                                n = e.instanceId;
                            this.sendMessageToCallMachine({ action: Ii, endpointsOp: "remove-endpoints", endpoints: t, instanceId: n });
                        },
                    },
                    {
                        key: "stopLiveStreaming",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.sendMessageToCallMachine(Go({ action: "daily-method-stop-live-streaming" }, e));
                        },
                    },
                    {
                        key: "validateDailyConfig",
                        value: function (e) {
                            e.camSimulcastEncodings &&
                                (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(e.camSimulcastEncodings)),
                                e.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."),
                                Fi().match(/Linux; Android/) && e.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
                        },
                    },
                    {
                        key: "validateSimulcastEncodings",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (e) {
                                if (!(e instanceof Array)) throw new Error("encodings must be an Array");
                                if (!Ms(e.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
                                for (var r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    for (var o in (this._validateEncodingLayerHasValidProperties(i), i))
                                        if (Xo.includes(o)) {
                                            if ("number" != typeof i[o]) throw new Error("".concat(o, " must be a number"));
                                            if (t) {
                                                var s = t[o],
                                                    a = s.min,
                                                    c = s.max;
                                                if (!Ms(i[o], a, c)) throw new Error("".concat(o, " value not in range. valid range: ").concat(a, " to ").concat(c));
                                            }
                                        } else if (!["active", "scalabilityMode"].includes(o)) throw new Error("Invalid key ".concat(o, ", valid keys are:") + Object.values(Xo));
                                    if (n && !i.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
                                }
                            }
                        },
                    },
                    {
                        key: "startRemoteMediaPlayer",
                        value:
                            ((O = v(function* (e) {
                                var t = this,
                                    n = e.url,
                                    r = e.settings,
                                    i = void 0 === r ? { state: Ri.PLAY } : r;
                                try {
                                    (function (e) {
                                        if ("string" != typeof e) throw new Error('url parameter must be "string" type');
                                    })(n),
                                        Cs(i),
                                        (function (e) {
                                            for (var t in e) if (!Zo.includes(t)) throw new Error("Invalid key ".concat(t, ", valid keys are: ").concat(Zo));
                                            e.simulcastEncodings && this.validateSimulcastEncodings(e.simulcastEncodings, Qo, !0);
                                        })(i);
                                } catch (e) {
                                    throw (
                                        (console.error("invalid argument Error: ".concat(e)),
                                        console.error('startRemoteMediaPlayer arguments must be of the form:\n  { url: "playback url",\n  settings?:\n  {state: "play"|"pause", simulcastEncodings?: [{}] } }'),
                                        e)
                                    );
                                }
                                return new Promise(function (e, r) {
                                    t.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: n, settings: i }, function (t) {
                                        t.error ? r({ error: t.error, errorMsg: t.errorMsg }) : e({ session_id: t.session_id, remoteMediaPlayerState: { state: t.state, settings: t.settings } });
                                    });
                                });
                            })),
                            function (e) {
                                return O.apply(this, arguments);
                            }),
                    },
                    {
                        key: "stopRemoteMediaPlayer",
                        value:
                            ((A = v(function* (e) {
                                var t = this;
                                if ("string" != typeof e) throw new Error(" remotePlayerID must be of type string");
                                return new Promise(function (n, r) {
                                    t.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: e }, function (e) {
                                        e.error ? r({ error: e.error, errorMsg: e.errorMsg }) : n();
                                    });
                                });
                            })),
                            function (e) {
                                return A.apply(this, arguments);
                            }),
                    },
                    {
                        key: "updateRemoteMediaPlayer",
                        value:
                            ((M = v(function* (e) {
                                var t = this,
                                    n = e.session_id,
                                    r = e.settings;
                                try {
                                    Cs(r);
                                } catch (e) {
                                    throw (
                                        (console.error("invalid argument Error: ".concat(e)),
                                        console.error('updateRemoteMediaPlayer arguments must be of the form:\n  session_id: "participant session",\n  { settings?: {state: "play"|"pause"} }'),
                                        e)
                                    );
                                }
                                return new Promise(function (e, i) {
                                    t.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: n, settings: r }, function (t) {
                                        t.error ? i({ error: t.error, errorMsg: t.errorMsg }) : e({ session_id: t.session_id, remoteMediaPlayerState: { state: t.state, settings: t.settings } });
                                    });
                                });
                            })),
                            function (e) {
                                return M.apply(this, arguments);
                            }),
                    },
                    {
                        key: "startTranscription",
                        value: function (e) {
                            this.sendMessageToCallMachine(Go({ action: "daily-method-start-transcription" }, e));
                        },
                    },
                    {
                        key: "stopTranscription",
                        value: function () {
                            this.sendMessageToCallMachine({ action: "daily-method-stop-transcription" });
                        },
                    },
                    {
                        key: "startDialOut",
                        value:
                            ((C = v(function* (e) {
                                var t = this;
                                as(this._callState, "startDialOut()");
                                var n = function (e) {
                                    if (e) {
                                        if (!Array.isArray(e)) throw new Error("Error starting dial out: audio codec must be an array");
                                        if (e.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
                                        e.forEach(function (e) {
                                            if ("string" != typeof e) throw new Error("Error starting dial out: audio codec must be a string");
                                            if ("OPUS" !== e && "PCMU" !== e && "PCMA" !== e && "G722" !== e) throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
                                        });
                                    }
                                };
                                if (!e.sipUri && !e.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
                                if (e.sipUri && e.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
                                if (e.sipUri) {
                                    if ("string" != typeof e.sipUri) throw new Error("Error starting dial out: sipUri must be a string");
                                    if (!e.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
                                    if (e.video && "boolean" != typeof e.video) throw new Error("Error starting dial out: video must be a boolean value");
                                    !(function (e) {
                                        if (e && (n(e.audio), e.video)) {
                                            if (!Array.isArray(e.video)) throw new Error("Error starting dial out: video codec must be an array");
                                            if (e.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
                                            e.video.forEach(function (e) {
                                                if ("string" != typeof e) throw new Error("Error starting dial out: video codec must be a string");
                                                if ("H264" !== e && "VP8" !== e) throw new Error("Error starting dial out: video codec must be H264 or VP8");
                                            });
                                        }
                                    })(e.codecs);
                                }
                                if (e.phoneNumber) {
                                    if ("string" != typeof e.phoneNumber) throw new Error("Error starting dial out: phoneNumber must be a string");
                                    if (!/^\+\d{1,}$/.test(e.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
                                    e.codecs && n(e.codecs.audio);
                                }
                                if (e.callerId) {
                                    if ("string" != typeof e.callerId) throw new Error("Error starting dial out: callerId must be a string");
                                    if (e.sipUri) throw new Error("Error starting dial out: callerId not allowed with sipUri");
                                }
                                if (e.displayName) {
                                    if ("string" != typeof e.displayName) throw new Error("Error starting dial out: displayName must be a string");
                                    if (e.displayName.length >= 200) throw new Error("Error starting dial out: displayName length must be less than 200");
                                }
                                return new Promise(function (n, r) {
                                    t.sendMessageToCallMachine(Go({ action: "dialout-start" }, e), function (e) {
                                        e.error ? r(e.error) : n(e);
                                    });
                                });
                            })),
                            function (e) {
                                return C.apply(this, arguments);
                            }),
                    },
                    {
                        key: "stopDialOut",
                        value: function (e) {
                            var t = this;
                            return (
                                as(this._callState, "stopDialOut()"),
                                new Promise(function (n, r) {
                                    t.sendMessageToCallMachine(Go({ action: "dialout-stop" }, e), function (e) {
                                        e.error ? r(e.error) : n(e);
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "sendDTMF",
                        value:
                            ((T = v(function* (e) {
                                var t = this;
                                return (
                                    as(this._callState, "sendDTMF()"),
                                    (function (e) {
                                        var t = e.sessionId,
                                            n = e.tones;
                                        if (!t || !n) throw new Error("sessionId and tones are mandatory parameter");
                                        if ("string" != typeof t || "string" != typeof n) throw new Error("sessionId and tones should be of string type");
                                        if (n.length > 20) throw new Error("tones string must be upto 20 characters");
                                        var r = n.match(/[^0-9A-D*#]/g);
                                        if (r && r[0]) throw new Error("".concat(r[0], " is not valid DTMF tone"));
                                    })(e),
                                    new Promise(function (n, r) {
                                        t.sendMessageToCallMachine(Go({ action: "send-dtmf" }, e), function (e) {
                                            e.error ? r(e.error) : n(e);
                                        });
                                    })
                                );
                            })),
                            function (e) {
                                return T.apply(this, arguments);
                            }),
                    },
                    {
                        key: "getNetworkStats",
                        value: function () {
                            var e = this;
                            return this._callState !== _r
                                ? { stats: { latest: {} } }
                                : new Promise(function (t) {
                                      e.sendMessageToCallMachine({ action: "get-calc-stats" }, function (n) {
                                          t(Go({ stats: n.stats }, e._network));
                                      });
                                  });
                        },
                    },
                    {
                        key: "testWebsocketConnectivity",
                        value:
                            ((k = v(function* () {
                                var e = this;
                                if ((ds(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()))
                                    try {
                                        yield this.load();
                                    } catch (e) {
                                        return Promise.reject(e);
                                    }
                                return new Promise(function (t, n) {
                                    e.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function (e) {
                                        e.error ? n(e.error) : t(e.results);
                                    });
                                });
                            })),
                            function () {
                                return k.apply(this, arguments);
                            }),
                    },
                    {
                        key: "abortTestWebsocketConnectivity",
                        value: function () {
                            this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
                        },
                    },
                    {
                        key: "_validateVideoTrackForNetworkTests",
                        value: function (e) {
                            return e
                                ? e instanceof MediaStreamTrack
                                    ? !!(function (e, t) {
                                          var n,
                                              r = t.isLocalScreenVideo;
                                          return e && "live" === e.readyState && ((n = e), !((!{ isLocalScreenVideo: r }.isLocalScreenVideo || "Chrome" !== zi()) && n.muted && !Fo.has(n.id)));
                                      })(e, { isLocalScreenVideo: !1 }) || (console.error("Video track is not playable. This test needs a live video track."), !1)
                                    : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1)
                                : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
                        },
                    },
                    {
                        key: "testCallQuality",
                        value:
                            ((E = v(function* (e) {
                                var t = this;
                                if (
                                    ((function (e) {
                                        var t = arguments.length > 2 ? arguments[2] : void 0;
                                        if (e) {
                                            var n = "".concat(
                                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method",
                                                " can not be called after preAuth(), startCamera(), or join() and call state has been initialized."
                                            );
                                            throw (t && (n += " ".concat(t)), console.error(n), new Error(n));
                                        }
                                    })(this._callMachineInitialized, "testCallQuality()"),
                                    e.videoTrack && !this._validateVideoTrackForNetworkTests(e.videoTrack))
                                )
                                    throw new Error("Video track error");
                                var n = this._testCallAlreadyInProgress,
                                    r = function (e) {
                                        n || (t._testCallInProgress = e);
                                    };
                                r(!0);
                                var o = e.videoTrack,
                                    s = i(e, Bo);
                                if (((this._sharedTracks.videoTrackForConnectionQualityTest = o), this.needsLoad()))
                                    try {
                                        var a = this._callState;
                                        yield this.load(), (this._callState = a);
                                    } catch (e) {
                                        return r(!1), Promise.reject(e);
                                    }
                                return new Promise(function (e) {
                                    t.sendMessageToCallMachine(Go(Go({ action: "test-call-quality" }, s), {}, { dailyJsVersion: t.properties.dailyJsVersion }), function (n) {
                                        var o = n.results,
                                            s = o.result,
                                            a = i(o, Vo);
                                        if ("failed" === s) {
                                            var c,
                                                l = Go({}, a);
                                            null !== (c = a.error) && void 0 !== c && c.details
                                                ? ((a.error.details = JSON.parse(a.error.details)), (l.error = Go(Go({}, l.error), {}, { details: Go({}, l.error.details) })), (l.error.details.duringTest = "testCallQuality"))
                                                : ((l.error = l.error ? Go({}, l.error) : {}), (l.error.details = { duringTest: "testCallQuality" })),
                                                t._maybeSendToSentry(l);
                                        }
                                        r(!1), e(Go({ result: s }, a));
                                    });
                                });
                            })),
                            function (e) {
                                return E.apply(this, arguments);
                            }),
                    },
                    {
                        key: "stopTestCallQuality",
                        value: function () {
                            this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
                        },
                    },
                    {
                        key: "testConnectionQuality",
                        value:
                            ((S = v(function* (e) {
                                console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead");
                                var t = yield this.testPeerToPeerCallQuality(e),
                                    n = { result: t.result, secondsElapsed: t.secondsElapsed };
                                return t.data && (n.data = { maxRTT: t.data.maxRoundTripTime, packetLoss: t.data.avgRecvPacketLoss }), n;
                            })),
                            function (e) {
                                return S.apply(this, arguments);
                            }),
                    },
                    {
                        key: "testPeerToPeerCallQuality",
                        value:
                            ((b = v(function* (e) {
                                var t = this;
                                if ((ds(this._testCallInProgress, "testConnectionQuality()"), this.needsLoad()))
                                    try {
                                        yield this.load();
                                    } catch (e) {
                                        return Promise.reject(e);
                                    }
                                var n = e.videoTrack,
                                    r = e.duration;
                                if (!this._validateVideoTrackForNetworkTests(n)) throw new Error("Video track error");
                                return (
                                    (this._sharedTracks.videoTrackForConnectionQualityTest = n),
                                    new Promise(function (e, n) {
                                        t.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: r }, function (t) {
                                            t.error ? n(t.error) : e(t.results);
                                        });
                                    })
                                );
                            })),
                            function (e) {
                                return b.apply(this, arguments);
                            }),
                    },
                    {
                        key: "stopTestConnectionQuality",
                        value: function () {
                            console.warn("stopTestConnectionQuality() is deprecated: use stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality();
                        },
                    },
                    {
                        key: "stopTestPeerToPeerCallQuality",
                        value: function () {
                            this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" });
                        },
                    },
                    {
                        key: "testNetworkConnectivity",
                        value:
                            ((_ = v(function* (e) {
                                var t = this;
                                if ((ds(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()))
                                    try {
                                        yield this.load();
                                    } catch (e) {
                                        return Promise.reject(e);
                                    }
                                if (!this._validateVideoTrackForNetworkTests(e)) throw new Error("Video track error");
                                return (
                                    (this._sharedTracks.videoTrackForNetworkConnectivityTest = e),
                                    new Promise(function (e, n) {
                                        t.sendMessageToCallMachine({ action: "test-network-connectivity" }, function (t) {
                                            t.error ? n(t.error) : e(t.results);
                                        });
                                    })
                                );
                            })),
                            function (e) {
                                return _.apply(this, arguments);
                            }),
                    },
                    {
                        key: "abortTestNetworkConnectivity",
                        value: function () {
                            this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
                        },
                    },
                    {
                        key: "getCpuLoadStats",
                        value: function () {
                            var e = this;
                            return new Promise(function (t, n) {
                                e._callState === _r
                                    ? e.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function (e) {
                                          t(e.cpuStats);
                                      })
                                    : t({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
                            });
                        },
                    },
                    {
                        key: "_validateEncodingLayerHasValidProperties",
                        value: function (e) {
                            var t;
                            if (!((null === (t = Object.keys(e)) || void 0 === t ? void 0 : t.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(Xo));
                        },
                    },
                    {
                        key: "_validateVideoSendSettings",
                        value: function (e, t) {
                            var n =
                                    "screenVideo" === e
                                        ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"]
                                        : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"],
                                r = "Video send settings should be either an object or one of the supported presets: ".concat(n.join());
                            if ("string" == typeof t) {
                                if (!n.includes(t)) throw new Error(r);
                            } else {
                                if ("object" !== s(t)) throw new Error(r);
                                if (!t.maxQuality && !t.encodings && void 0 === t.allowAdaptiveLayers) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
                                if (t.maxQuality && -1 === ["low", "medium", "high"].indexOf(t.maxQuality)) throw new Error("maxQuality must be either low, medium or high");
                                if (t.encodings) {
                                    var i = !1;
                                    switch (Object.keys(t.encodings).length) {
                                        case 1:
                                            i = !t.encodings.low;
                                            break;
                                        case 2:
                                            i = !t.encodings.low || !t.encodings.medium;
                                            break;
                                        case 3:
                                            i = !t.encodings.low || !t.encodings.medium || !t.encodings.high;
                                            break;
                                        default:
                                            i = !0;
                                    }
                                    if (i) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
                                    t.encodings.low && this._validateEncodingLayerHasValidProperties(t.encodings.low),
                                        t.encodings.medium && this._validateEncodingLayerHasValidProperties(t.encodings.medium),
                                        t.encodings.high && this._validateEncodingLayerHasValidProperties(t.encodings.high);
                                }
                            }
                        },
                    },
                    {
                        key: "validateUpdateSendSettings",
                        value: function (e) {
                            var t = this;
                            if (!e || 0 === Object.keys(e).length) throw new Error("Send settings must contain at least information for one track!");
                            Object.entries(e).forEach(function (e) {
                                var n = y(e, 2),
                                    r = n[0],
                                    i = n[1];
                                t._validateVideoSendSettings(r, i);
                            });
                        },
                    },
                    {
                        key: "updateSendSettings",
                        value: function (e) {
                            var t = this;
                            return (
                                this.validateUpdateSendSettings(e),
                                this.needsLoad()
                                    ? ((this._preloadCache.sendSettings = e), { sendSettings: this._preloadCache.sendSettings })
                                    : new Promise(function (n, r) {
                                          t.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: e }, function (e) {
                                              e.error ? r(e.error) : n(e.sendSettings);
                                          });
                                      })
                            );
                        },
                    },
                    {
                        key: "getSendSettings",
                        value: function () {
                            return this._sendSettings || this._preloadCache.sendSettings;
                        },
                    },
                    {
                        key: "getLocalAudioLevel",
                        value: function () {
                            return this._localAudioLevel;
                        },
                    },
                    {
                        key: "getRemoteParticipantsAudioLevel",
                        value: function () {
                            return this._remoteParticipantsAudioLevel;
                        },
                    },
                    {
                        key: "getActiveSpeaker",
                        value: function () {
                            return fs(), this._activeSpeaker;
                        },
                    },
                    {
                        key: "setActiveSpeakerMode",
                        value: function (e) {
                            return fs(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: e }), this;
                        },
                    },
                    {
                        key: "activeSpeakerMode",
                        value: function () {
                            return fs(), this._activeSpeakerMode;
                        },
                    },
                    {
                        key: "subscribeToTracksAutomatically",
                        value: function () {
                            return this._preloadCache.subscribeToTracksAutomatically;
                        },
                    },
                    {
                        key: "setSubscribeToTracksAutomatically",
                        value: function (e) {
                            return (
                                as(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."),
                                (this._preloadCache.subscribeToTracksAutomatically = e),
                                this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: e }),
                                this
                            );
                        },
                    },
                    {
                        key: "enumerateDevices",
                        value:
                            ((g = v(function* () {
                                var e = this;
                                if (this._callObjectMode) {
                                    var t = yield navigator.mediaDevices.enumerateDevices();
                                    return (
                                        "Firefox" === zi() &&
                                            Hi().major > 115 &&
                                            Hi().major < 123 &&
                                            (t = t.filter(function (e) {
                                                return "audiooutput" !== e.kind;
                                            })),
                                        {
                                            devices: t.map(function (e) {
                                                var t = JSON.parse(JSON.stringify(e));
                                                if (!Ui() && "videoinput" === e.kind && e.getCapabilities) {
                                                    var n,
                                                        r = e.getCapabilities();
                                                    t.facing = (null == r || null === (n = r.facingMode) || void 0 === n ? void 0 : n.length) >= 1 ? r.facingMode[0] : void 0;
                                                }
                                                return t;
                                            }),
                                        }
                                    );
                                }
                                return new Promise(function (t) {
                                    e.sendMessageToCallMachine({ action: "enumerate-devices" }, function (e) {
                                        t({ devices: e.devices });
                                    });
                                });
                            })),
                            function () {
                                return g.apply(this, arguments);
                            }),
                    },
                    {
                        key: "sendAppMessage",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*";
                            if ((as(this._callState, "sendAppMessage()"), JSON.stringify(e).length > 4096)) throw new Error("Message data too large. Max size is 4096");
                            return this.sendMessageToCallMachine({ action: "app-msg", data: e, to: t }), this;
                        },
                    },
                    {
                        key: "addFakeParticipant",
                        value: function (e) {
                            return fs(), as(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(Go({ action: "add-fake-participant" }, e)), this;
                        },
                    },
                    {
                        key: "setShowNamesMode",
                        value: function (e) {
                            return (
                                ps(this._callObjectMode, "setShowNamesMode()"),
                                fs(),
                                e && "always" !== e && "never" !== e ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: e }), this)
                            );
                        },
                    },
                    {
                        key: "setShowLocalVideo",
                        value: function () {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            return (
                                ps(this._callObjectMode, "setShowLocalVideo()"),
                                fs(),
                                as(this._callState, "setShowLocalVideo()"),
                                "boolean" != typeof e ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: e }), (this._showLocalVideo = e), this)
                            );
                        },
                    },
                    {
                        key: "showLocalVideo",
                        value: function () {
                            return ps(this._callObjectMode, "showLocalVideo()"), fs(), this._showLocalVideo;
                        },
                    },
                    {
                        key: "setShowParticipantsBar",
                        value: function () {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            return (
                                ps(this._callObjectMode, "setShowParticipantsBar()"),
                                fs(),
                                as(this._callState, "setShowParticipantsBar()"),
                                "boolean" != typeof e
                                    ? (console.error("setShowParticipantsBar only accepts a boolean value"), this)
                                    : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: e }), (this._showParticipantsBar = e), this)
                            );
                        },
                    },
                    {
                        key: "showParticipantsBar",
                        value: function () {
                            return ps(this._callObjectMode, "showParticipantsBar()"), fs(), this._showParticipantsBar;
                        },
                    },
                    {
                        key: "customIntegrations",
                        value: function () {
                            return fs(), ps(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
                        },
                    },
                    {
                        key: "setCustomIntegrations",
                        value: function (e) {
                            return (
                                fs(),
                                ps(this._callObjectMode, "setCustomIntegrations()"),
                                as(this._callState, "setCustomIntegrations()"),
                                ks(e) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: e }), (this._customIntegrations = e), this) : this
                            );
                        },
                    },
                    {
                        key: "startCustomIntegrations",
                        value: function (e) {
                            var t = this;
                            if (
                                (fs(),
                                ps(this._callObjectMode, "startCustomIntegrations()"),
                                as(this._callState, "startCustomIntegrations()"),
                                (Array.isArray(e) &&
                                    e.some(function (e) {
                                        return "string" != typeof e;
                                    })) ||
                                    (!Array.isArray(e) && "string" != typeof e))
                            )
                                return console.error("startCustomIntegrations() only accepts string | string[]"), this;
                            var n = "string" == typeof e ? [e] : e,
                                r = n.filter(function (e) {
                                    return !(e in t._customIntegrations);
                                });
                            return r.length ? (console.error("Can't find custom integration(s): \"".concat(r.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: n }), this);
                        },
                    },
                    {
                        key: "stopCustomIntegrations",
                        value: function (e) {
                            var t = this;
                            if (
                                (fs(),
                                ps(this._callObjectMode, "stopCustomIntegrations()"),
                                as(this._callState, "stopCustomIntegrations()"),
                                (Array.isArray(e) &&
                                    e.some(function (e) {
                                        return "string" != typeof e;
                                    })) ||
                                    (!Array.isArray(e) && "string" != typeof e))
                            )
                                return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
                            var n = "string" == typeof e ? [e] : e,
                                r = n.filter(function (e) {
                                    return !(e in t._customIntegrations);
                                });
                            return r.length ? (console.error("Can't find custom integration(s): \"".concat(r.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: n }), this);
                        },
                    },
                    {
                        key: "customTrayButtons",
                        value: function () {
                            return ps(this._callObjectMode, "customTrayButtons()"), fs(), this._customTrayButtons;
                        },
                    },
                    {
                        key: "updateCustomTrayButtons",
                        value: function (e) {
                            return (
                                ps(this._callObjectMode, "updateCustomTrayButtons()"),
                                fs(),
                                as(this._callState, "updateCustomTrayButtons()"),
                                Es(e)
                                    ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: e }), (this._customTrayButtons = e), this)
                                    : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(ts))), this)
                            );
                        },
                    },
                    {
                        key: "theme",
                        value: function () {
                            return ps(this._callObjectMode, "theme()"), this.properties.theme;
                        },
                    },
                    {
                        key: "setTheme",
                        value: function (e) {
                            var t = this;
                            return (
                                ps(this._callObjectMode, "setTheme()"),
                                new Promise(function (n, r) {
                                    try {
                                        t.validateProperties({ theme: e }), (t.properties.theme = Go({}, e)), t.sendMessageToCallMachine({ action: "set-theme", theme: t.properties.theme });
                                        try {
                                            t.emit(Cr, { action: Cr, theme: t.properties.theme });
                                        } catch (e) {
                                            console.log("could not emit 'theme-updated'", e);
                                        }
                                        n(t.properties.theme);
                                    } catch (e) {
                                        r(e);
                                    }
                                })
                            );
                        },
                    },
                    {
                        key: "requestFullscreen",
                        value:
                            ((d = v(function* () {
                                if ((fs(), this._iframe && !document.fullscreenElement && Vi()))
                                    try {
                                        (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
                                    } catch (e) {
                                        console.log("could not make video call fullscreen", e);
                                    }
                            })),
                            function () {
                                return d.apply(this, arguments);
                            }),
                    },
                    {
                        key: "exitFullscreen",
                        value: function () {
                            fs(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
                        },
                    },
                    {
                        key: "getSidebarView",
                        value:
                            ((c = v(function* () {
                                var e = this;
                                return this._callObjectMode
                                    ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null))
                                    : new Promise(function (t) {
                                          e.sendMessageToCallMachine({ action: "get-sidebar-view" }, function (e) {
                                              t(e.view);
                                          });
                                      });
                            })),
                            function () {
                                return c.apply(this, arguments);
                            }),
                    },
                    {
                        key: "setSidebarView",
                        value: function (e) {
                            return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: e }), this);
                        },
                    },
                    {
                        key: "room",
                        value:
                            ((a = v(function* () {
                                var e = this,
                                    t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).includeRoomConfigDefaults,
                                    n = void 0 === t || t;
                                return this._accessState.access === wr || this.needsLoad()
                                    ? this.properties.url
                                        ? { roomUrlPendingJoin: this.properties.url }
                                        : null
                                    : new Promise(function (t) {
                                          e.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: n }, function (e) {
                                              delete e.action, delete e.callbackStamp, t(e);
                                          });
                                      });
                            })),
                            function () {
                                return a.apply(this, arguments);
                            }),
                    },
                    {
                        key: "geo",
                        value:
                            ((r = v(function* () {
                                try {
                                    var e = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
                                    return { current: (yield e.json()).geo };
                                } catch (e) {
                                    return console.error("geo lookup failed", e), { current: "" };
                                }
                            })),
                            function () {
                                return r.apply(this, arguments);
                            }),
                    },
                    {
                        key: "setNetworkTopology",
                        value:
                            ((n = v(function* (e) {
                                var t = this;
                                return (
                                    fs(),
                                    as(this._callState, "setNetworkTopology()"),
                                    new Promise(function (n, r) {
                                        t.sendMessageToCallMachine({ action: "set-network-topology", opts: e }, function (e) {
                                            e.error ? r({ error: e.error }) : n({ workerId: e.workerId });
                                        });
                                    })
                                );
                            })),
                            function (e) {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "getNetworkTopology",
                        value:
                            ((t = v(function* () {
                                var e = this;
                                return new Promise(function (t, n) {
                                    e.needsLoad() && t({ topology: "none" }),
                                        e.sendMessageToCallMachine({ action: "get-network-topology" }, function (e) {
                                            e.error ? n({ error: e.error }) : t({ topology: e.topology });
                                        });
                                });
                            })),
                            function () {
                                return t.apply(this, arguments);
                            }),
                    },
                    {
                        key: "setPlayNewParticipantSound",
                        value: function (e) {
                            if ((fs(), "number" != typeof e && !0 !== e && !1 !== e)) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(e));
                            this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: e });
                        },
                    },
                    {
                        key: "on",
                        value: function (e, t) {
                            return w.prototype.on.call(this, e, t);
                        },
                    },
                    {
                        key: "once",
                        value: function (e, t) {
                            return w.prototype.once.call(this, e, t);
                        },
                    },
                    {
                        key: "off",
                        value: function (e, t) {
                            return w.prototype.off.call(this, e, t);
                        },
                    },
                    {
                        key: "validateProperties",
                        value: function (e) {
                            for (var t in e) {
                                if (!rs[t]) throw new Error("unrecognized property '".concat(t, "'"));
                                if (rs[t].validate && !rs[t].validate(e[t], this)) throw new Error("property '".concat(t, "': ").concat(rs[t].help));
                            }
                        },
                    },
                    {
                        key: "assembleMeetingUrl",
                        value: function () {
                            var e,
                                t,
                                n = Go(
                                    Go({}, this.properties),
                                    {},
                                    {
                                        emb: this._callFrameId,
                                        embHref: encodeURIComponent(window.location.href),
                                        proxy: null !== (e = this.properties.dailyConfig) && void 0 !== e && e.proxyUrl ? encodeURIComponent(null === (t = this.properties.dailyConfig) || void 0 === t ? void 0 : t.proxyUrl) : void 0,
                                    }
                                ),
                                r = n.url.match(/\?/) ? "&" : "?";
                            return (
                                n.url +
                                r +
                                Object.keys(rs)
                                    .filter(function (e) {
                                        return rs[e].queryString && void 0 !== n[e];
                                    })
                                    .map(function (e) {
                                        return "".concat(rs[e].queryString, "=").concat(n[e]);
                                    })
                                    .join("&")
                            );
                        },
                    },
                    {
                        key: "needsLoad",
                        value: function () {
                            return [fr, mr, yr, br].includes(this._callState);
                        },
                    },
                    {
                        key: "sendMessageToCallMachine",
                        value: function (e, t) {
                            if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
                            this._messageChannel.sendMessageToCallMachine(e, t, this._iframe, this._callFrameId);
                        },
                    },
                    {
                        key: "forwardPackagedMessageToCallMachine",
                        value: function (e) {
                            this._messageChannel.forwardPackagedMessageToCallMachine(e, this._iframe, this._callFrameId);
                        },
                    },
                    {
                        key: "addListenerForPackagedMessagesFromCallMachine",
                        value: function (e) {
                            return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(e, this._callFrameId);
                        },
                    },
                    {
                        key: "removeListenerForPackagedMessagesFromCallMachine",
                        value: function (e) {
                            this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(e);
                        },
                    },
                    {
                        key: "handleMessageFromCallMachine",
                        value: function (e) {
                            switch (e.action) {
                                case kr:
                                    this.sendMessageToCallMachine(Go({ action: Tr }, this.properties));
                                    break;
                                case "call-machine-initialized":
                                    this._callMachineInitialized = !0;
                                    var t = {
                                        action: Pi,
                                        level: "log",
                                        code: 1011,
                                        stats: { event: "bundle load", time: "no-op" === this._bundleLoadTime ? 0 : this._bundleLoadTime, preLoaded: "no-op" === this._bundleLoadTime, url: ne(this.properties.dailyConfig) },
                                    };
                                    this.sendMessageToCallMachine(t), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
                                    break;
                                case Or:
                                    this._loadedCallback && (this._loadedCallback(), (this._loadedCallback = null));
                                    try {
                                        this.emit(e.action, e);
                                    } catch (t) {
                                        console.log("could not emit", e, t);
                                    }
                                    break;
                                case Dr:
                                    this._joinedCallback && (this._joinedCallback(e.participants), (this._joinedCallback = null));
                                    try {
                                        this.emit(e.action, e);
                                    } catch (t) {
                                        console.log("could not emit", e, t);
                                    }
                                    break;
                                case Rr:
                                case jr:
                                    if (this._callState === yr) return;
                                    if (e.participant && e.participant.session_id) {
                                        var n = e.participant.local ? "local" : e.participant.session_id;
                                        if (this._callObjectMode) {
                                            var r = this._callMachine().store;
                                            Co(e.participant, r), Mo(e.participant, r), Oo(e.participant, this._participants[n], r);
                                        }
                                        try {
                                            this.maybeParticipantTracksStopped(this._participants[n], e.participant),
                                                this.maybeParticipantTracksStarted(this._participants[n], e.participant),
                                                this.maybeEventRecordingStopped(this._participants[n], e.participant),
                                                this.maybeEventRecordingStarted(this._participants[n], e.participant);
                                        } catch (e) {
                                            console.error("track events error", e);
                                        }
                                        if (!this.compareEqualForParticipantUpdateEvent(e.participant, this._participants[n])) {
                                            (this._participants[n] = Go({}, e.participant)), this.toggleParticipantAudioBasedOnNativeAudioFocus();
                                            try {
                                                this.emit(e.action, e);
                                            } catch (t) {
                                                console.log("could not emit", e, t);
                                            }
                                        }
                                    }
                                    break;
                                case Fr:
                                    if (e.participant && e.participant.session_id) {
                                        var o = this._participants[e.participant.session_id];
                                        o && this.maybeParticipantTracksStopped(o, null), delete this._participants[e.participant.session_id];
                                        try {
                                            this.emit(e.action, e);
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    }
                                    break;
                                case Ur:
                                    if (!U(this._participantCounts, e.participantCounts)) {
                                        this._participantCounts = e.participantCounts;
                                        try {
                                            this.emit(e.action, e);
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    }
                                    break;
                                case Br:
                                    var s = { access: e.access };
                                    if ((e.awaitingAccess && (s.awaitingAccess = e.awaitingAccess), !U(this._accessState, s))) {
                                        this._accessState = s;
                                        try {
                                            this.emit(e.action, e);
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    }
                                    break;
                                case Vr:
                                    if (e.meetingSession) {
                                        this._meetingSessionSummary = e.meetingSession;
                                        try {
                                            delete e.callFrameId, this.emit(e.action, e);
                                            var a = Go(Go({}, e), {}, { action: "meeting-session-updated" });
                                            this.emit(a.action, a);
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    }
                                    break;
                                case Mi:
                                    var c;
                                    this._iframe && !e.preserveIframe && (this._iframe.src = ""),
                                        this._updateCallState(br),
                                        this.resetMeetingDependentVars(),
                                        this._loadedCallback && (this._loadedCallback(e.errorMsg), (this._loadedCallback = null)),
                                        e.preserveIframe;
                                    var l = i(e, Yo);
                                    null != l && null !== (c = l.error) && void 0 !== c && c.details && (l.error.details = JSON.parse(l.error.details)),
                                        this._maybeSendToSentry(e),
                                        this._joinedCallback && (this._joinedCallback(null, l), (this._joinedCallback = null));
                                    try {
                                        this.emit(e.action, l);
                                    } catch (t) {
                                        console.log("could not emit", e, t);
                                    }
                                    break;
                                case xr:
                                    this._callState !== br && this._updateCallState(yr), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), (this._resolveLeave = null));
                                    try {
                                        this.emit(e.action, e);
                                    } catch (t) {
                                        console.log("could not emit", e, t);
                                    }
                                    break;
                                case "selected-devices-updated":
                                    if (e.devices)
                                        try {
                                            this.emit(e.action, e);
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    break;
                                case pi:
                                    var u = e.threshold,
                                        d = e.quality;
                                    if (u !== this._network.threshold || d !== this._network.quality) {
                                        (this._network.quality = d), (this._network.threshold = u);
                                        try {
                                            this.emit(e.action, e);
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    }
                                    break;
                                case mi:
                                    if (e && e.cpuLoadState)
                                        try {
                                            this.emit(e.action, e);
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    break;
                                case gi:
                                    if (e && void 0 !== e.faceCounts)
                                        try {
                                            this.emit(e.action, e);
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    break;
                                case di:
                                    var h = e.activeSpeaker;
                                    if (this._activeSpeaker.peerId !== h.peerId) {
                                        this._activeSpeaker.peerId = h.peerId;
                                        try {
                                            this.emit(e.action, { action: e.action, activeSpeaker: this._activeSpeaker });
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    }
                                    break;
                                case "show-local-video-changed":
                                    if (this._callObjectMode) return;
                                    var p = e.show;
                                    this._showLocalVideo = p;
                                    try {
                                        this.emit(e.action, { action: e.action, show: p });
                                    } catch (t) {
                                        console.log("could not emit", e, t);
                                    }
                                    break;
                                case hi:
                                    var f = e.enabled;
                                    if (this._activeSpeakerMode !== f) {
                                        this._activeSpeakerMode = f;
                                        try {
                                            this.emit(e.action, { action: e.action, enabled: this._activeSpeakerMode });
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    }
                                    break;
                                case $r:
                                case Gr:
                                case qr:
                                    this._waitingParticipants = e.allWaitingParticipants;
                                    try {
                                        this.emit(e.action, { action: e.action, participant: e.participant });
                                    } catch (t) {
                                        console.log("could not emit", e, t);
                                    }
                                    break;
                                case ki:
                                    if (!U(this._receiveSettings, e.receiveSettings)) {
                                        this._receiveSettings = e.receiveSettings;
                                        try {
                                            this.emit(e.action, { action: e.action, receiveSettings: e.receiveSettings });
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    }
                                    break;
                                case Ti:
                                    if (!U(this._inputSettings, e.inputSettings)) {
                                        var m = this._getInputSettings();
                                        if (((this._inputSettings = e.inputSettings), (this._preloadCache.inputSettings = {}), !U(m, this._getInputSettings())))
                                            try {
                                                this.emit(e.action, { action: e.action, inputSettings: this._getInputSettings() });
                                            } catch (t) {
                                                console.log("could not emit", e, t);
                                            }
                                    }
                                    break;
                                case "send-settings-updated":
                                    if (!U(this._sendSettings, e.sendSettings)) {
                                        (this._sendSettings = e.sendSettings), (this._preloadCache.sendSettings = null);
                                        try {
                                            this.emit(e.action, { action: e.action, sendSettings: e.sendSettings });
                                        } catch (t) {
                                            console.log("could not emit", e, t);
                                        }
                                    }
                                    break;
                                case "local-audio-level":
                                    (this._localAudioLevel = e.audioLevel), (this._preloadCache.localAudioLevelObserver = null), this.emitDailyJSEvent(e);
                                    break;
                                case "remote-participants-audio-level":
                                    (this._remoteParticipantsAudioLevel = e.participantsAudioLevel), (this._preloadCache.remoteParticipantsAudioLevelObserver = null), this.emitDailyJSEvent(e);
                                    break;
                                case oi:
                                    var g = e.session_id;
                                    (this._rmpPlayerState[g] = e.playerState), this.emitDailyJSEvent(e);
                                    break;
                                case ai:
                                    delete this._rmpPlayerState[e.session_id], this.emitDailyJSEvent(e);
                                    break;
                                case si:
                                    var v = e.session_id,
                                        _ = this._rmpPlayerState[v];
                                    (_ && this.compareEqualForRMPUpdateEvent(_, e.remoteMediaPlayerState)) || ((this._rmpPlayerState[v] = e.remoteMediaPlayerState), this.emitDailyJSEvent(e));
                                    break;
                                case "custom-button-click":
                                case "sidebar-view-changed":
                                    this.emitDailyJSEvent(e);
                                    break;
                                case Yr:
                                    var y = this._meetingSessionState.topology !== (e.meetingSessionState && e.meetingSessionState.topology);
                                    (this._meetingSessionState = As(e.meetingSessionState, this._callObjectMode)), (this._callObjectMode || y) && this.emitDailyJSEvent(e);
                                    break;
                                case ci:
                                    (this._isScreenSharing = !0), this.emitDailyJSEvent(e);
                                    break;
                                case li:
                                case ui:
                                    (this._isScreenSharing = !1), this.emitDailyJSEvent(e);
                                    break;
                                case Qr:
                                case Xr:
                                case Zr:
                                case ei:
                                case ti:
                                case zr:
                                case Hr:
                                case Kr:
                                case Lr:
                                case Ir:
                                case ri:
                                case ii:
                                case fi:
                                case ni:
                                case yi:
                                case bi:
                                case wi:
                                case Si:
                                case Ci:
                                case Ei:
                                case "dialin-ready":
                                case "dialin-connected":
                                case "dialin-error":
                                case "dialin-stopped":
                                case "dialin-warning":
                                case "dialout-connected":
                                case "dialout-error":
                                case "dialout-stopped":
                                case "dialout-warning":
                                    try {
                                        this.emit(e.action, e);
                                    } catch (t) {
                                        console.log("could not emit", e, t);
                                    }
                                    break;
                                case "request-fullscreen":
                                    this.requestFullscreen();
                                    break;
                                case "request-exit-fullscreen":
                                    this.exitFullscreen();
                            }
                        },
                    },
                    {
                        key: "maybeEventRecordingStopped",
                        value: function (e, t) {
                            var n = "record";
                            if (e && !t.local && !1 === t[n] && e[n] !== t[n])
                                try {
                                    this.emit(Xr, { action: Xr });
                                } catch (e) {
                                    console.log("could not emit", e);
                                }
                        },
                    },
                    {
                        key: "maybeEventRecordingStarted",
                        value: function (e, t) {
                            var n = "record";
                            if (e && !t.local && !0 === t[n] && e[n] !== t[n])
                                try {
                                    this.emit(Qr, { action: Qr });
                                } catch (e) {
                                    console.log("could not emit", e);
                                }
                        },
                    },
                    {
                        key: "maybeEventTrackStopped",
                        value: function (e, t, n, r) {
                            if (e && ("ended" === e.readyState || !t || e.id !== t.id))
                                try {
                                    this.emit(Wr, { action: Wr, track: e, participant: n, type: r });
                                } catch (e) {
                                    console.log("maybeEventTrackStopped: could not emit", e);
                                }
                        },
                    },
                    {
                        key: "maybeEventTrackStarted",
                        value: function (e, t, n, r) {
                            if (t && (!e || "ended" === e.readyState || t.id !== e.id))
                                try {
                                    this.emit(Jr, { action: Jr, track: t, participant: n, type: r });
                                } catch (e) {
                                    console.log("maybeEventTrackStarted: could not emit", e);
                                }
                        },
                    },
                    {
                        key: "maybeParticipantTracksStopped",
                        value: function (e, t) {
                            if (e) for (var n in e.tracks) this.maybeEventTrackStopped(e.tracks[n].track, t && t.tracks[n] ? t.tracks[n].track : null, t, n);
                        },
                    },
                    {
                        key: "maybeParticipantTracksStarted",
                        value: function (e, t) {
                            if (t) for (var n in t.tracks) this.maybeEventTrackStarted(e && e.tracks[n] ? e.tracks[n].track : null, t.tracks[n].track, t, n);
                        },
                    },
                    {
                        key: "compareEqualForRMPUpdateEvent",
                        value: function (e, t) {
                            var n, r;
                            return e.state === t.state && (null === (n = e.settings) || void 0 === n ? void 0 : n.volume) === (null === (r = t.settings) || void 0 === r ? void 0 : r.volume);
                        },
                    },
                    {
                        key: "emitDailyJSEvent",
                        value: function (e) {
                            try {
                                this.emit(e.action, e);
                            } catch (t) {
                                console.log("could not emit", e, t);
                            }
                        },
                    },
                    {
                        key: "compareEqualForParticipantUpdateEvent",
                        value: function (e, t) {
                            return !(
                                !U(e, t) ||
                                (e.videoTrack && t.videoTrack && (e.videoTrack.id !== t.videoTrack.id || e.videoTrack.muted !== t.videoTrack.muted || e.videoTrack.enabled !== t.videoTrack.enabled)) ||
                                (e.audioTrack && t.audioTrack && (e.audioTrack.id !== t.audioTrack.id || e.audioTrack.muted !== t.audioTrack.muted || e.audioTrack.enabled !== t.audioTrack.enabled))
                            );
                        },
                    },
                    {
                        key: "nativeUtils",
                        value: function () {
                            return Ui() ? (typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils) : null;
                        },
                    },
                    {
                        key: "updateIsPreparingToJoin",
                        value: function (e) {
                            this._updateCallState(this._callState, e);
                        },
                    },
                    {
                        key: "_updateCallState",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._isPreparingToJoin;
                            if (e !== this._callState || t !== this._isPreparingToJoin) {
                                var n = this._callState,
                                    r = this._isPreparingToJoin;
                                (this._callState = e), (this._isPreparingToJoin = t);
                                var i = cs(n, r),
                                    o = cs(this._callState, this._isPreparingToJoin);
                                i !== o && (this.updateKeepDeviceAwake(o), this.updateDeviceAudioMode(o), this.updateShowAndroidOngoingMeetingNotification(o), this.updateNoOpRecordingEnsuringBackgroundContinuity(o));
                            }
                        },
                    },
                    {
                        key: "resetMeetingDependentVars",
                        value: function () {
                            (this._participants = {}),
                                (this._participantCounts = Ko),
                                (this._waitingParticipants = {}),
                                (this._activeSpeaker = {}),
                                (this._activeSpeakerMode = !1),
                                (this._didPreAuth = !1),
                                (this._accessState = { access: wr }),
                                (this._finalSummaryOfPrevSession = this._meetingSessionSummary),
                                (this._meetingSessionSummary = {}),
                                (this._meetingSessionState = As(Ho, this._callObjectMode)),
                                (this._isScreenSharing = !1),
                                (this._receiveSettings = {}),
                                (this._inputSettings = void 0),
                                (this._sendSettings = {}),
                                (this._localAudioLevel = 0),
                                (this._remoteParticipantsAudioLevel = {}),
                                (this._callMachineInitialized = !1),
                                (this._bundleLoadTime = void 0),
                                this._preloadCache;
                        },
                    },
                    {
                        key: "updateKeepDeviceAwake",
                        value: function (e) {
                            Ui() && this.nativeUtils().setKeepDeviceAwake(e, this._callFrameId);
                        },
                    },
                    {
                        key: "updateDeviceAudioMode",
                        value: function (e) {
                            if (Ui() && !this.disableReactNativeAutoDeviceManagement("audio")) {
                                var t = e ? this._nativeInCallAudioMode : "idle";
                                this.nativeUtils().setAudioMode(t);
                            }
                        },
                    },
                    {
                        key: "updateShowAndroidOngoingMeetingNotification",
                        value: function (e) {
                            if (Ui() && this.nativeUtils().setShowOngoingMeetingNotification) {
                                var t, n, r, i;
                                if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
                                    var o = this.properties.reactNativeConfig.androidInCallNotification;
                                    (t = o.title), (n = o.subtitle), (r = o.iconName), (i = o.disableForCustomOverride);
                                }
                                i && (e = !1), this.nativeUtils().setShowOngoingMeetingNotification(e, t, n, r, this._callFrameId);
                            }
                        },
                    },
                    {
                        key: "updateNoOpRecordingEnsuringBackgroundContinuity",
                        value: function (e) {
                            Ui() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(e);
                        },
                    },
                    {
                        key: "toggleParticipantAudioBasedOnNativeAudioFocus",
                        value: function () {
                            var e, t;
                            if (Ui()) {
                                var n = null === (e = this._callMachine()) || void 0 === e || null === (t = e.store) || void 0 === t ? void 0 : t.getState();
                                for (var r in null == n ? void 0 : n.streams) {
                                    var i = n.streams[r];
                                    i && i.pendingTrack && "audio" === i.pendingTrack.kind && (i.pendingTrack.enabled = this._hasNativeAudioFocus);
                                }
                            }
                        },
                    },
                    {
                        key: "disableReactNativeAutoDeviceManagement",
                        value: function (e) {
                            return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[e];
                        },
                    },
                    {
                        key: "absoluteUrl",
                        value: function (e) {
                            if (void 0 !== e) {
                                var t = document.createElement("a");
                                return (t.href = e), t.href;
                            }
                        },
                    },
                    {
                        key: "sayHello",
                        value: function () {
                            var e = "hello, world.";
                            return console.log(e), e;
                        },
                    },
                    {
                        key: "_logCallQualityTestResults",
                        value: function (e) {
                            if (this._callMachineInitialized) {
                                var t = { action: Pi, level: "info", code: 1012, results: e };
                                this.sendMessageToCallMachine(t);
                            } else console.warn("_logCallQualityTestResults() must be called after daily initialization");
                        },
                    },
                    {
                        key: "_logUseAfterDestroy",
                        value: function () {
                            if (this.needsLoad())
                                if (Uo && !Uo.needsLoad()) {
                                    var e = { action: Pi, level: "error", code: this.strictMode ? 9995 : 9997 };
                                    Uo.sendMessageToCallMachine(e);
                                } else
                                    this.strictMode ||
                                        console.error(
                                            "You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage."
                                        );
                            else {
                                var t = { action: Pi, level: "error", code: this.strictMode ? 9995 : 9997 };
                                this._messageChannel.sendMessageToCallMachine(t, null, this._iframe, this._callFrameId);
                            }
                        },
                    },
                    {
                        key: "_logDuplicateInstanceAttempt",
                        value: function () {
                            var e = Uo._callMachineInitialized ? Uo : this._callMachineInitialized ? this : void 0;
                            e
                                ? (e.sendMessageToCallMachine({ action: Pi, level: "warn", code: this.strictMode ? 9990 : 9992 }), (this._delayDuplicateInstanceLog = !1))
                                : ((this._delayDuplicateInstanceLog = !0), (Uo._delayDuplicateInstanceLog = !0));
                        },
                    },
                    {
                        key: "_maybeSendToSentry",
                        value: function (e) {
                            var t, n, r, i, o, s;
                            if (null === (t = e.error) || void 0 === t || !t.type || ["connection-error", "end-of-life", "no-room"].includes(e.error.type)) {
                                var a = null !== (n = this.properties) && void 0 !== n && n.url ? new URL(this.properties.url) : void 0,
                                    c = "production";
                                a && a.host.includes(".staging.daily") && (c = "staging");
                                var l,
                                    u,
                                    d,
                                    h,
                                    p,
                                    f = new $n({
                                        dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844",
                                        transport: qn,
                                        integrations: [new pr.GlobalHandlers({ onunhandledrejection: !1 }), new pr.HttpContext()],
                                        environment: c,
                                    }),
                                    m = new en(f, void 0, Q.version());
                                if ((this.session_id && m.setExtra("sessionId", this.session_id), this.properties)) {
                                    var g = Go({}, this.properties);
                                    (g.userName = g.userName ? "[Filtered]" : void 0), (g.userData = g.userData ? "[Filtered]" : void 0), (g.token = g.token ? "[Filtered]" : void 0), m.setExtra("properties", g);
                                }
                                if (a) {
                                    var v = a.searchParams.get("domain");
                                    if (!v) {
                                        var _ = a.host.match(/(.*?)\./);
                                        v = (_ && _[1]) || "";
                                    }
                                    v && m.setTag("domain", v);
                                }
                                e.error &&
                                    (m.setTag("fatalErrorType", e.error.type),
                                    m.setExtra("errorDetails", e.error.details),
                                    !(null === (l = e.error.details) || void 0 === l) && l.uri && m.setTag("serverAddress", e.error.details.uri),
                                    !(null === (u = e.error.details) || void 0 === u) && u.workerGroup && m.setTag("workerGroup", e.error.details.workerGroup),
                                    !(null === (d = e.error.details) || void 0 === d) && d.geoGroup && m.setTag("geoGroup", e.error.details.geoGroup),
                                    !(null === (h = e.error.details) || void 0 === h) && h.on && m.setTag("connectionAttempt", e.error.details.on),
                                    null !== (p = e.error.details) && void 0 !== p && p.bundleUrl && (m.setTag("bundleUrl", e.error.details.bundleUrl), m.setTag("bundleError", e.error.details.sourceError.type))),
                                    m.setTags({
                                        callMode: this._callObjectMode
                                            ? Ui()
                                                ? "reactNative"
                                                : null !== (r = this.properties) && void 0 !== r && null !== (i = r.dailyConfig) && void 0 !== i && null !== (o = i.callMode) && void 0 !== o && o.includes("prebuilt")
                                                ? this.properties.dailyConfig.callMode
                                                : "custom"
                                            : "prebuilt-frame",
                                        version: Q.version(),
                                    });
                                var y = (null === (s = e.error) || void 0 === s ? void 0 : s.msg) || e.errorMsg;
                                m.run(function (e) {
                                    e.captureException(new Error(y));
                                });
                            }
                        },
                    },
                    {
                        key: "_callMachine",
                        value: function () {
                            var e, t, n;
                            return null === (e = window._daily) || void 0 === e || null === (t = e.instances) || void 0 === t || null === (n = t[this._callFrameId]) || void 0 === n ? void 0 : n.callMachine;
                        },
                    },
                ],
                [
                    {
                        key: "supportedBrowser",
                        value: function () {
                            if (Ui()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
                            var e = X.getParser(Fi());
                            return {
                                supported: !!Ji(),
                                mobile: "mobile" === e.getPlatformType(),
                                name: e.getBrowserName(),
                                version: e.getBrowserVersion(),
                                supportsFullscreen: !!Vi(),
                                supportsScreenShare: !!(
                                    navigator &&
                                    navigator.mediaDevices &&
                                    navigator.mediaDevices.getDisplayMedia &&
                                    ((function (e, t) {
                                        if (!e || !t) return !0;
                                        switch (e) {
                                            case "Chrome":
                                                return t.major >= 75;
                                            case "Safari":
                                                return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(13 === t.major && 0 === t.minor && 0 === t.point);
                                            case "Firefox":
                                                return t.major >= 67;
                                        }
                                        return !0;
                                    })(zi(), Hi()) ||
                                        Ui())
                                ),
                                supportsSfu: !!Ji(),
                                supportsVideoProcessing: $i(),
                                supportsAudioProcessing: qi(),
                            };
                        },
                    },
                    {
                        key: "version",
                        value: function () {
                            return "0.66.0";
                        },
                    },
                    {
                        key: "createCallObject",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return (e.layout = "none"), new Q(null, e);
                        },
                    },
                    {
                        key: "wrap",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if ((fs(), !e || !e.contentWindow || "string" != typeof e.src)) throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
                            return t.layout || (t.customLayout ? (t.layout = "custom-v1") : (t.layout = "browser")), new Q(e, t);
                        },
                    },
                    {
                        key: "createFrame",
                        value: function (e, t) {
                            var n, r;
                            fs(), e && t ? ((n = e), (r = t)) : e && e.append ? ((n = e), (r = {})) : ((n = document.body), (r = e || {}));
                            var i = r.iframeStyle;
                            i ||
                                (i =
                                    n === document.body
                                        ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" }
                                        : { border: 0, width: "100%", height: "100%" });
                            var o = document.createElement("iframe");
                            window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? (o.allow = "microphone, camera") : (o.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock"),
                                (o.style.visibility = "hidden"),
                                n.appendChild(o),
                                (o.style.visibility = null),
                                Object.keys(i).forEach(function (e) {
                                    return (o.style[e] = i[e]);
                                }),
                                r.layout || (r.customLayout ? (r.layout = "custom-v1") : (r.layout = "browser"));
                            try {
                                return new Q(o, r);
                            } catch (e) {
                                throw (n.removeChild(o), e);
                            }
                        },
                    },
                    {
                        key: "createTransparentFrame",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            fs();
                            var t = document.createElement("iframe");
                            return (
                                (t.allow = "microphone; camera; autoplay"),
                                (t.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border: 0;\n      pointer-events: none;\n    "),
                                document.body.appendChild(t),
                                e.layout || (e.layout = "custom-v1"),
                                Q.wrap(t, e)
                            );
                        },
                    },
                    {
                        key: "getCallInstance",
                        value: function () {
                            return Uo;
                        },
                    },
                ]
            ),
            Q
        );
    })();
    function ss(e, t) {
        var n = {};
        for (var r in e)
            if (e[r] instanceof MediaStreamTrack) n[r] = Di;
            else if ("dailyConfig" === r) {
                if (e[r].modifyLocalSdpHook) {
                    var i = window._daily.instances[t].customCallbacks || {};
                    (i.modifyLocalSdpHook = e[r].modifyLocalSdpHook), (window._daily.instances[t].customCallbacks = i), delete e[r].modifyLocalSdpHook;
                }
                if (e[r].modifyRemoteSdpHook) {
                    var o = window._daily.instances[t].customCallbacks || {};
                    (o.modifyRemoteSdpHook = e[r].modifyRemoteSdpHook), (window._daily.instances[t].customCallbacks = o), delete e[r].modifyRemoteSdpHook;
                }
                n[r] = e[r];
            } else n[r] = e[r];
        return n;
    }
    function as(e) {
        var t = arguments.length > 2 ? arguments[2] : void 0;
        if (e !== _r) {
            var n = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " only supported after join.");
            throw (t && (n += " ".concat(t)), console.error(n), new Error(n));
        }
    }
    function cs(e, t) {
        return [vr, _r].includes(e) || t;
    }
    function ls(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "This daily-js method",
            r = arguments.length > 3 ? arguments[3] : void 0;
        if (cs(e, t)) {
            var i = "".concat(n, " not supported after joining a meeting.");
            throw (r && (i += " ".concat(r)), console.error(i), new Error(i));
        }
    }
    function us(e) {
        var t = arguments.length > 2 ? arguments[2] : void 0;
        if (!e) {
            var n = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " requires preAuth(), startCamera(), or join() to initialize call state.");
            throw (t && (n += " ".concat(t)), console.error(n), new Error(n));
        }
    }
    function ds(e) {
        if (e) {
            var t = "A pre-call quality test is in progress. Please try ".concat(
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method",
                " again once testing has completed. Use stopTestCallQuality() to end it early."
            );
            throw (console.error(t), new Error(t));
        }
    }
    function hs(e) {
        if (!e) {
            var t = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
            throw (console.error(t), new Error(t));
        }
    }
    function ps(e) {
        if (e) {
            var t = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
            throw (console.error(t), new Error(t));
        }
    }
    function fs() {
        if (Ui()) throw new Error("This daily-js method is not currently supported in React Native");
    }
    function ms() {
        if (!Ui()) throw new Error("This daily-js method is only supported in React Native");
    }
    function gs(e) {
        if (void 0 === e) return !0;
        var t;
        if ("string" == typeof e) t = e;
        else
            try {
                (t = JSON.stringify(e)), U(JSON.parse(t), e) || console.warn("The userData provided will be modified when serialized.");
            } catch (e) {
                throw Error("userData must be serializable to JSON: ".concat(e));
            }
        if (t.length > 4096) throw Error("userData is too large (".concat(t.length, " characters). Maximum size suppported is ").concat(4096, "."));
        return !0;
    }
    function vs(e, t) {
        for (
            var n = t.allowAllParticipantsKey,
                r = function (e) {
                    return !!(void 0 === e.layer || (Number.isInteger(e.layer) && e.layer >= 0) || "inherit" === e.layer);
                },
                i = function (e) {
                    return !(!e || (e.video && !r(e.video)) || (e.screenVideo && !r(e.screenVideo)));
                },
                o = 0,
                s = Object.entries(e);
            o < s.length;
            o++
        ) {
            var a = y(s[o], 2),
                c = a[0],
                l = a[1];
            if (((u = c), (d = void 0), (d = ["local"]), n || d.push("*"), !u || d.includes(u) || !i(l))) return !1;
        }
        var u, d;
        return !0;
    }
    function _s(e) {
        return !(
            "object" !== s(e) ||
            (e.video &&
                ("object" !== s(e.video) ||
                    ((t = e.video.processor),
                    (r = ["type", "config"]),
                    !t ||
                        "object" !== s(t) ||
                        ((n = t.type), "string" != typeof n || (!Object.values(xi).includes(n) && (console.error("inputSettings video processor type invalid"), 1))) ||
                        (t.config &&
                            ("object" !== s(t.config) ||
                                !(function (e, t) {
                                    var n = Object.keys(t);
                                    if (0 === n.length) return !0;
                                    var r,
                                        i,
                                        o,
                                        s = "invalid object in inputSettings -> video -> processor -> config";
                                    switch (e) {
                                        case xi.BGBLUR:
                                            return n.length > 1 || "strength" !== n[0]
                                                ? (console.error(s), !1)
                                                : !("number" != typeof t.strength || t.strength <= 0 || t.strength > 1 || isNaN(t.strength)) || (console.error("".concat(s, "; expected: {0 < strength <= 1}, got: ").concat(t.strength)), !1);
                                        case xi.BGIMAGE:
                                            return !(
                                                void 0 !== t.source &&
                                                ((r = t),
                                                !("default" === r.source
                                                    ? ((r.type = "default"), 1)
                                                    : r.source instanceof ArrayBuffer ||
                                                      (re(r.source)
                                                          ? ((r.type = "url"),
                                                            (function (e) {
                                                                var t = new URL(e),
                                                                    n = t.pathname;
                                                                if ("data:" === t.protocol)
                                                                    try {
                                                                        var r = n.substring(n.indexOf(":") + 1, n.indexOf(";")).split("/")[1];
                                                                        return ji.includes(r);
                                                                    } catch (e) {
                                                                        return console.error("failed to deduce blob content type", e), !1;
                                                                    }
                                                                var i = n.split(".").at(-1).toLowerCase().trim();
                                                                return ji.includes(i);
                                                            })(r.source) || (console.error("invalid image type; supported types: [".concat(ji.join(", "), "]")), 0))
                                                          : ((i = r.source),
                                                            (o = Number(i)),
                                                            isNaN(o) || !Number.isInteger(o) || o <= 0 || o > 10 ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(10)), 0) : ((r.type = "daily-preselect"), 1)))))
                                            );
                                        default:
                                            return !0;
                                    }
                                })(t.type, t.config))) ||
                        (Object.keys(t)
                            .filter(function (e) {
                                return !r.includes(e);
                            })
                            .forEach(function (e) {
                                console.warn("invalid key inputSettings -> video -> processor : ".concat(e)), delete t[e];
                            }),
                        0)))) ||
            (e.audio &&
                ("object" !== s(e.audio) ||
                    ((o = e.audio.processor),
                    (a = ["type"]),
                    !o ||
                        "object" !== s(o) ||
                        (Object.keys(o)
                            .filter(function (e) {
                                return !a.includes(e);
                            })
                            .forEach(function (e) {
                                console.warn("invalid key inputSettings -> audio -> processor : ".concat(e)), delete o[e];
                            }),
                        (i = o.type),
                        "string" != typeof i || (!Object.values(Ni).includes(i) && (console.error("inputSettings audio processor type invalid"), 1))))))
        );
        var t, n, r, i, o, a;
    }
    function ys(e, t) {
        var n,
            r = [];
        e.video && !$i(null !== (n = null == t ? void 0 : t.useLegacyVideoProcessor) && void 0 !== n && n) && (delete e.video, r.push("video")),
            e.audio && !qi() && (delete e.audio, r.push("audio")),
            r.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(r.join(", ")));
    }
    function bs() {
        var e = Object.values(xi).join(" | "),
            t = Object.values(Ni).join(" | ");
        return "inputSettings must be of the form: { video?: { processor: { type: [ ".concat(e, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(t, " ] } } }");
    }
    function ws(e) {
        var t = e.allowAllParticipantsKey;
        return (
            "receiveSettings must be of the form { [<remote participant id> | ".concat(Er).concat(t ? ' | "'.concat("*", '"') : "", "]: ") +
            '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}'
        );
    }
    function Ss() {
        return "customIntegrations should be an object of type ".concat(JSON.stringify(ns), ".");
    }
    function Es(e) {
        if ((e && "object" !== s(e)) || Array.isArray(e)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(ts), ".")), !1;
        if (e)
            for (var t = 0, n = Object.entries(e); t < n.length; t++)
                for (var r = y(n[t], 1)[0], i = 0, o = Object.entries(e[r]); i < o.length; i++) {
                    var a = y(o[i], 2),
                        c = a[0],
                        l = a[1];
                    if (("iconPath" === c && !re(l)) || ("iconPathDarkMode" === c && !re(l))) return console.error("customTrayButton ".concat(c, " should be a url.")), !1;
                    var u = ts.id[c];
                    if (!u) return console.error("customTrayButton does not support key ".concat(c)), !1;
                    if (s(l) !== u) return console.error("customTrayButton ".concat(c, " should be a ").concat(u, ".")), !1;
                }
        return !0;
    }
    function ks(e) {
        if (!e || (e && "object" !== s(e)) || Array.isArray(e)) return console.error(Ss()), !1;
        for (
            var t = function (e) {
                    return "".concat(e, " should be ").concat(ns.id[e]);
                },
                n = function (e, t) {
                    return console.error("customIntegration ".concat(e, ": ").concat(t));
                },
                r = 0,
                i = Object.entries(e);
            r < i.length;
            r++
        ) {
            var o = y(i[r], 1)[0];
            if (!("label" in e[o])) return n(o, "label is required"), !1;
            if (!("location" in e[o])) return n(o, "location is required"), !1;
            if (!("src" in e[o]) && !("srcdoc" in e[o])) return n(o, "src or srcdoc is required"), !1;
            for (var a = 0, c = Object.entries(e[o]); a < c.length; a++) {
                var l = y(c[a], 2),
                    u = l[0],
                    d = l[1];
                switch (u) {
                    case "allow":
                    case "csp":
                    case "name":
                    case "referrerPolicy":
                    case "sandbox":
                        if ("string" != typeof d) return n(o, t(u)), !1;
                        break;
                    case "iconURL":
                        if (!re(d)) return n(o, "".concat(u, " should be a url")), !1;
                        break;
                    case "src":
                        if ("srcdoc" in e[o]) return n(o, "cannot have both src and srcdoc"), !1;
                        if (!re(d)) return n(o, 'src "'.concat(d, '" is not a valid URL')), !1;
                        break;
                    case "srcdoc":
                        if ("src" in e[o]) return n(o, "cannot have both src and srcdoc"), !1;
                        if ("string" != typeof d) return n(o, t(u)), !1;
                        break;
                    case "location":
                        if (!["main", "sidebar"].includes(d)) return n(o, t(u)), !1;
                        break;
                    case "controlledBy":
                        if (
                            "*" !== d &&
                            "owners" !== d &&
                            (!Array.isArray(d) ||
                                d.some(function (e) {
                                    return "string" != typeof e;
                                }))
                        )
                            return n(o, t(u)), !1;
                        break;
                    case "shared":
                        if (
                            (!Array.isArray(d) ||
                                d.some(function (e) {
                                    return "string" != typeof e;
                                })) &&
                            "owners" !== d &&
                            "boolean" != typeof d
                        )
                            return n(o, t(u)), !1;
                        break;
                    default:
                        if (!ns.id[u]) return console.error("customIntegration does not support key ".concat(u)), !1;
                }
            }
        }
        return !0;
    }
    function Ts(e, t) {
        if (void 0 === t) return !1;
        switch (s(t)) {
            case "string":
                return s(e) === t;
            case "object":
                if ("object" !== s(e)) return !1;
                for (var n in e) if (!Ts(e[n], t[n])) return !1;
                return !0;
            default:
                return !1;
        }
    }
    function Cs(e) {
        if ("object" !== s(e)) throw new Error('RemoteMediaPlayerSettings: must be "object" type');
        if (e.state && !Object.values(Ri).includes(e.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Ri));
        if (e.volume) {
            if ("number" != typeof e.volume) throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
            if (e.volume < 0 || e.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
        }
    }
    function Ms(e, t, n) {
        return !("number" != typeof e || e < t || e > n);
    }
    function As(e, t) {
        return e && !t && delete e.data, e;
    }
    const Os = (function (e) {
        if (e.__esModule) return e;
        var t = e.default;
        if ("function" == typeof t) {
            var n = function e() {
                return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
            };
            n.prototype = t.prototype;
        } else n = {};
        return (
            Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.keys(e).forEach(function (t) {
                var r = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(
                    n,
                    t,
                    r.get
                        ? r
                        : {
                              enumerable: !0,
                              get: function () {
                                  return e[t];
                              },
                          }
                );
            }),
            n
        );
    })(
        Object.freeze(
            Object.defineProperty(
                {
                    __proto__: null,
                    DAILY_ACCESS_LEVEL_FULL: Sr,
                    DAILY_ACCESS_LEVEL_LOBBY: "lobby",
                    DAILY_ACCESS_LEVEL_NONE: "none",
                    DAILY_ACCESS_UNKNOWN: wr,
                    DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE: "cam-mic-in-use",
                    DAILY_CAMERA_ERROR_CAM_IN_USE: "cam-in-use",
                    DAILY_CAMERA_ERROR_CONSTRAINTS: "constraints",
                    DAILY_CAMERA_ERROR_MIC_IN_USE: "mic-in-use",
                    DAILY_CAMERA_ERROR_NOT_FOUND: "not-found",
                    DAILY_CAMERA_ERROR_PERMISSIONS: "permissions",
                    DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES: "undefined-mediadevices",
                    DAILY_CAMERA_ERROR_UNKNOWN: "unknown",
                    DAILY_EVENT_ACCESS_STATE_UPDATED: Br,
                    DAILY_EVENT_ACTIVE_SPEAKER_CHANGE: di,
                    DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE: hi,
                    DAILY_EVENT_APP_MSG: ri,
                    DAILY_EVENT_CAMERA_ERROR: Ir,
                    DAILY_EVENT_CPU_LOAD_CHANGE: mi,
                    DAILY_EVENT_ERROR: Mi,
                    DAILY_EVENT_EXIT_FULLSCREEN: _i,
                    DAILY_EVENT_FACE_COUNTS_UPDATED: gi,
                    DAILY_EVENT_FULLSCREEN: vi,
                    DAILY_EVENT_IFRAME_LAUNCH_CONFIG: Tr,
                    DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG: kr,
                    DAILY_EVENT_INPUT_SETTINGS_UPDATED: Ti,
                    DAILY_EVENT_JOINED_MEETING: Dr,
                    DAILY_EVENT_JOINING_MEETING: Pr,
                    DAILY_EVENT_LANG_UPDATED: Ei,
                    DAILY_EVENT_LEFT_MEETING: xr,
                    DAILY_EVENT_LIVE_STREAMING_ERROR: Si,
                    DAILY_EVENT_LIVE_STREAMING_STARTED: yi,
                    DAILY_EVENT_LIVE_STREAMING_STOPPED: wi,
                    DAILY_EVENT_LIVE_STREAMING_UPDATED: bi,
                    DAILY_EVENT_LOADED: Or,
                    DAILY_EVENT_LOADING: Mr,
                    DAILY_EVENT_LOAD_ATTEMPT_FAILED: Ar,
                    DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED: ui,
                    DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED: ci,
                    DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED: li,
                    DAILY_EVENT_MEETING_SESSION_DATA_ERROR: "meeting-session-data-error",
                    DAILY_EVENT_MEETING_SESSION_STATE_UPDATED: Yr,
                    DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED: Vr,
                    DAILY_EVENT_NETWORK_CONNECTION: fi,
                    DAILY_EVENT_NETWORK_QUALITY_CHANGE: pi,
                    DAILY_EVENT_NONFATAL_ERROR: Ci,
                    DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED: Ur,
                    DAILY_EVENT_PARTICIPANT_JOINED: Rr,
                    DAILY_EVENT_PARTICIPANT_LEFT: Fr,
                    DAILY_EVENT_PARTICIPANT_UPDATED: jr,
                    DAILY_EVENT_RECEIVE_SETTINGS_UPDATED: ki,
                    DAILY_EVENT_RECORDING_DATA: ni,
                    DAILY_EVENT_RECORDING_ERROR: ei,
                    DAILY_EVENT_RECORDING_STARTED: Qr,
                    DAILY_EVENT_RECORDING_STATS: Zr,
                    DAILY_EVENT_RECORDING_STOPPED: Xr,
                    DAILY_EVENT_RECORDING_UPLOAD_COMPLETED: ti,
                    DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED: oi,
                    DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED: ai,
                    DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED: si,
                    DAILY_EVENT_STARTED_CAMERA: Lr,
                    DAILY_EVENT_THEME_UPDATED: Cr,
                    DAILY_EVENT_TRACK_STARTED: Jr,
                    DAILY_EVENT_TRACK_STOPPED: Wr,
                    DAILY_EVENT_TRANSCRIPTION_ERROR: Kr,
                    DAILY_EVENT_TRANSCRIPTION_MSG: ii,
                    DAILY_EVENT_TRANSCRIPTION_STARTED: zr,
                    DAILY_EVENT_TRANSCRIPTION_STOPPED: Hr,
                    DAILY_EVENT_WAITING_PARTICIPANT_ADDED: $r,
                    DAILY_EVENT_WAITING_PARTICIPANT_REMOVED: qr,
                    DAILY_EVENT_WAITING_PARTICIPANT_UPDATED: Gr,
                    DAILY_FATAL_ERROR_CONNECTION: "connection-error",
                    DAILY_FATAL_ERROR_EJECTED: "ejected",
                    DAILY_FATAL_ERROR_EOL: "end-of-life",
                    DAILY_FATAL_ERROR_EXP_ROOM: "exp-room",
                    DAILY_FATAL_ERROR_EXP_TOKEN: "exp-token",
                    DAILY_FATAL_ERROR_MEETING_FULL: "meeting-full",
                    DAILY_FATAL_ERROR_NBF_ROOM: "nbf-room",
                    DAILY_FATAL_ERROR_NBF_TOKEN: "nbf-token",
                    DAILY_FATAL_ERROR_NOT_ALLOWED: "not-allowed",
                    DAILY_FATAL_ERROR_NO_ROOM: "no-room",
                    DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY: "*",
                    DAILY_RECEIVE_SETTINGS_BASE_KEY: Er,
                    DAILY_STATE_ERROR: br,
                    DAILY_STATE_JOINED: _r,
                    DAILY_STATE_JOINING: vr,
                    DAILY_STATE_LEFT: yr,
                    DAILY_STATE_NEW: fr,
                    DAILY_TRACK_STATE_BLOCKED: "blocked",
                    DAILY_TRACK_STATE_INTERRUPTED: "interrupted",
                    DAILY_TRACK_STATE_LOADING: "loading",
                    DAILY_TRACK_STATE_OFF: "off",
                    DAILY_TRACK_STATE_PLAYABLE: "playable",
                    DAILY_TRACK_STATE_SENDABLE: "sendable",
                    default: os,
                },
                Symbol.toStringTag,
                { value: "Module" }
            )
        )
    );
    var Ls,
        Is = { exports: {} },
        Ps = "object" == typeof Reflect ? Reflect : null,
        Ds =
            Ps && "function" == typeof Ps.apply
                ? Ps.apply
                : function (e, t, n) {
                      return Function.prototype.apply.call(e, t, n);
                  };
    Ls =
        Ps && "function" == typeof Ps.ownKeys
            ? Ps.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : function (e) {
                  return Object.getOwnPropertyNames(e);
              };
    var xs =
        Number.isNaN ||
        function (e) {
            return e != e;
        };
    function Ns() {
        Ns.init.call(this);
    }
    (Is.exports = Ns),
        (Is.exports.once = function (e, t) {
            return new Promise(function (n, r) {
                function i(n) {
                    e.removeListener(t, o), r(n);
                }
                function o() {
                    "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments));
                }
                qs(e, t, o, { once: !0 }),
                    "error" !== t &&
                        (function (e, t, n) {
                            "function" == typeof e.on && qs(e, "error", t, n);
                        })(e, i, { once: !0 });
            });
        }),
        (Ns.EventEmitter = Ns),
        (Ns.prototype._events = void 0),
        (Ns.prototype._eventsCount = 0),
        (Ns.prototype._maxListeners = void 0);
    var Rs = 10;
    function js(e) {
        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }
    function Fs(e) {
        return void 0 === e._maxListeners ? Ns.defaultMaxListeners : e._maxListeners;
    }
    function Us(e, t, n, r) {
        var i, o, s;
        if (
            (js(n),
            void 0 === (o = e._events) ? ((o = e._events = Object.create(null)), (e._eventsCount = 0)) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), (o = e._events)), (s = o[t])),
            void 0 === s)
        )
            (s = o[t] = n), ++e._eventsCount;
        else if (("function" == typeof s ? (s = o[t] = r ? [n, s] : [s, n]) : r ? s.unshift(n) : s.push(n), (i = Fs(e)) > 0 && s.length > i && !s.warned)) {
            s.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            (a.name = "MaxListenersExceededWarning"),
                (a.emitter = e),
                (a.type = t),
                (a.count = s.length),
                (function (e) {
                    console && console.warn && console.warn(e);
                })(a);
        }
        return e;
    }
    function Bs() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Vs(e, t, n) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
            i = Bs.bind(r);
        return (i.listener = n), (r.wrapFn = i), i;
    }
    function Ys(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var i = r[t];
        return void 0 === i
            ? []
            : "function" == typeof i
            ? n
                ? [i.listener || i]
                : [i]
            : n
            ? (function (e) {
                  for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                  return t;
              })(i)
            : Gs(i, i.length);
    }
    function $s(e) {
        var t = this._events;
        if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length;
        }
        return 0;
    }
    function Gs(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n;
    }
    function qs(e, t, n, r) {
        if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
        else {
            if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(t, function i(o) {
                r.once && e.removeEventListener(t, i), n(o);
            });
        }
    }
    Object.defineProperty(Ns, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return Rs;
        },
        set: function (e) {
            if ("number" != typeof e || e < 0 || xs(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Rs = e;
        },
    }),
        (Ns.init = function () {
            (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
        }),
        (Ns.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || xs(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return (this._maxListeners = e), this;
        }),
        (Ns.prototype.getMaxListeners = function () {
            return Fs(this);
        }),
        (Ns.prototype.emit = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var r = "error" === e,
                i = this._events;
            if (void 0 !== i) r = r && void 0 === i.error;
            else if (!r) return !1;
            if (r) {
                var o;
                if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
                var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw ((s.context = o), s);
            }
            var a = i[e];
            if (void 0 === a) return !1;
            if ("function" == typeof a) Ds(a, this, t);
            else {
                var c = a.length,
                    l = Gs(a, c);
                for (n = 0; n < c; ++n) Ds(l[n], this, t);
            }
            return !0;
        }),
        (Ns.prototype.addListener = function (e, t) {
            return Us(this, e, t, !1);
        }),
        (Ns.prototype.on = Ns.prototype.addListener),
        (Ns.prototype.prependListener = function (e, t) {
            return Us(this, e, t, !0);
        }),
        (Ns.prototype.once = function (e, t) {
            return js(t), this.on(e, Vs(this, e, t)), this;
        }),
        (Ns.prototype.prependOnceListener = function (e, t) {
            return js(t), this.prependListener(e, Vs(this, e, t)), this;
        }),
        (Ns.prototype.removeListener = function (e, t) {
            var n, r, i, o, s;
            if ((js(t), void 0 === (r = this._events))) return this;
            if (void 0 === (n = r[e])) return this;
            if (n === t || n.listener === t) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
                for (i = -1, o = n.length - 1; o >= 0; o--)
                    if (n[o] === t || n[o].listener === t) {
                        (s = n[o].listener), (i = o);
                        break;
                    }
                if (i < 0) return this;
                0 === i
                    ? n.shift()
                    : (function (e, t) {
                          for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                          e.pop();
                      })(n, i),
                    1 === n.length && (r[e] = n[0]),
                    void 0 !== r.removeListener && this.emit("removeListener", e, s || t);
            }
            return this;
        }),
        (Ns.prototype.off = Ns.prototype.removeListener),
        (Ns.prototype.removeAllListeners = function (e) {
            var t, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener)
                return 0 === arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== n[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[e]), this;
            if (0 === arguments.length) {
                var i,
                    o = Object.keys(n);
                for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
            }
            if ("function" == typeof (t = n[e])) this.removeListener(e, t);
            else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
            return this;
        }),
        (Ns.prototype.listeners = function (e) {
            return Ys(this, e, !0);
        }),
        (Ns.prototype.rawListeners = function (e) {
            return Ys(this, e, !1);
        }),
        (Ns.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : $s.call(e, t);
        }),
        (Ns.prototype.listenerCount = $s),
        (Ns.prototype.eventNames = function () {
            return this._eventsCount > 0 ? Ls(this._events) : [];
        });
    var Js,
        Ws = Is.exports,
        zs = {},
        Hs = {};
    Object.defineProperty(Hs, "__esModule", { value: !0 }),
        (Hs.Api = Hs.HttpClient = Hs.ContentType = void 0),
        (function (e) {
            (e.Json = "application/json"), (e.FormData = "multipart/form-data"), (e.UrlEncoded = "application/x-www-form-urlencoded"), (e.Text = "text/plain");
        })(Js || (Hs.ContentType = Js = {}));
    class Ks {
        constructor(e = {}) {
            t(this, "baseUrl", "https://api.vapi.ai"),
                t(this, "securityData", null),
                t(this, "securityWorker"),
                t(this, "abortControllers", new Map()),
                t(this, "customFetch", (...e) => fetch(...e)),
                t(this, "baseApiParams", { credentials: "same-origin", headers: {}, redirect: "follow", referrerPolicy: "no-referrer" }),
                t(this, "setSecurityData", (e) => {
                    this.securityData = e;
                }),
                t(this, "contentFormatters", {
                    [Js.Json]: (e) => (null === e || ("object" != typeof e && "string" != typeof e) ? e : JSON.stringify(e)),
                    [Js.Text]: (e) => (null !== e && "string" != typeof e ? JSON.stringify(e) : e),
                    [Js.FormData]: (e) =>
                        Object.keys(e || {}).reduce((t, n) => {
                            const r = e[n];
                            return t.append(n, r instanceof Blob ? r : "object" == typeof r && null !== r ? JSON.stringify(r) : `${r}`), t;
                        }, new FormData()),
                    [Js.UrlEncoded]: (e) => this.toQueryString(e),
                }),
                t(this, "createAbortSignal", (e) => {
                    if (this.abortControllers.has(e)) {
                        const t = this.abortControllers.get(e);
                        return t ? t.signal : void 0;
                    }
                    const t = new AbortController();
                    return this.abortControllers.set(e, t), t.signal;
                }),
                t(this, "abortRequest", (e) => {
                    const t = this.abortControllers.get(e);
                    t && (t.abort(), this.abortControllers.delete(e));
                }),
                t(this, "request", async ({ body: e, secure: t, path: n, type: r, query: i, format: o, baseUrl: s, cancelToken: a, ...c }) => {
                    const l = (("boolean" == typeof t ? t : this.baseApiParams.secure) && this.securityWorker && (await this.securityWorker(this.securityData))) || {},
                        u = this.mergeRequestParams(c, l),
                        d = i && this.toQueryString(i),
                        h = this.contentFormatters[r || Js.Json],
                        p = o || u.format;
                    return this.customFetch(`${s || this.baseUrl || ""}${n}${d ? `?${d}` : ""}`, {
                        ...u,
                        headers: { ...(u.headers || {}), ...(r && r !== Js.FormData ? { "Content-Type": r } : {}) },
                        signal: (a ? this.createAbortSignal(a) : u.signal) || null,
                        body: typeof e > "u" || null === e ? null : h(e),
                    }).then(async (e) => {
                        const t = e;
                        (t.data = null), (t.error = null);
                        const n = p
                            ? await e[p]()
                                  .then((e) => (t.ok ? (t.data = e) : (t.error = e), t))
                                  .catch((e) => ((t.error = e), t))
                            : t;
                        if ((a && this.abortControllers.delete(a), !e.ok)) throw n;
                        return n;
                    });
                }),
                Object.assign(this, e);
        }
        encodeQueryParam(e, t) {
            return `${encodeURIComponent(e)}=${encodeURIComponent("number" == typeof t ? t : `${t}`)}`;
        }
        addQueryParam(e, t) {
            return this.encodeQueryParam(t, e[t]);
        }
        addArrayQueryParam(e, t) {
            return e[t].map((e) => this.encodeQueryParam(t, e)).join("&");
        }
        toQueryString(e) {
            const t = e || {};
            return Object.keys(t)
                .filter((e) => typeof t[e] < "u")
                .map((e) => (Array.isArray(t[e]) ? this.addArrayQueryParam(t, e) : this.addQueryParam(t, e)))
                .join("&");
        }
        addQueryParams(e) {
            const t = this.toQueryString(e);
            return t ? `?${t}` : "";
        }
        mergeRequestParams(e, t) {
            return { ...this.baseApiParams, ...e, ...(t || {}), headers: { ...(this.baseApiParams.headers || {}), ...(e.headers || {}), ...((t && t.headers) || {}) } };
        }
    }
    Hs.HttpClient = Ks;
    (Hs.Api = class extends Ks {
        constructor() {
            super(...arguments),
                t(this, "assistant", {
                    assistantControllerCreate: (e, t = {}) => this.request({ path: "/assistant", method: "POST", body: e, secure: !0, type: Js.Json, format: "json", ...t }),
                    assistantControllerFindAll: (e, t = {}) => this.request({ path: "/assistant", method: "GET", query: e, secure: !0, format: "json", ...t }),
                    assistantControllerFindOne: (e, t = {}) => this.request({ path: `/assistant/${e}`, method: "GET", secure: !0, format: "json", ...t }),
                    assistantControllerUpdate: (e, t, n = {}) => this.request({ path: `/assistant/${e}`, method: "PATCH", body: t, secure: !0, type: Js.Json, format: "json", ...n }),
                    assistantControllerReplace: (e, t, n = {}) => this.request({ path: `/assistant/${e}`, method: "PUT", body: t, secure: !0, type: Js.Json, format: "json", ...n }),
                    assistantControllerRemove: (e, t = {}) => this.request({ path: `/assistant/${e}`, method: "DELETE", secure: !0, format: "json", ...t }),
                }),
                t(this, "call", {
                    callControllerFindAll: (e, t = {}) => this.request({ path: "/call", method: "GET", query: e, secure: !0, format: "json", ...t }),
                    callControllerFindOne: (e, t = {}) => this.request({ path: `/call/${e}`, method: "GET", secure: !0, format: "json", ...t }),
                    callControllerDeleteCallData: (e, t = {}) => this.request({ path: `/call/${e}`, method: "DELETE", secure: !0, format: "json", ...t }),
                    callControllerUpdate: (e, t, n = {}) => this.request({ path: `/call/${e}`, method: "PATCH", body: t, secure: !0, type: Js.Json, format: "json", ...n }),
                    callControllerCreatePhoneCall: (e, t = {}) => this.request({ path: "/call/phone", method: "POST", body: e, secure: !0, type: Js.Json, format: "json", ...t }),
                    callControllerCreateWebCall: (e, t = {}) => this.request({ path: "/call/web", method: "POST", body: e, secure: !0, type: Js.Json, format: "json", ...t }),
                }),
                t(this, "credential", {
                    credentialControllerCreate: (e, t = {}) => this.request({ path: "/credential", method: "POST", body: e, secure: !0, type: Js.Json, format: "json", ...t }),
                    credentialControllerFindAll: (e, t = {}) => this.request({ path: "/credential", method: "GET", query: e, secure: !0, format: "json", ...t }),
                    credentialControllerFindOne: (e, t = {}) => this.request({ path: `/credential/${e}`, method: "GET", secure: !0, format: "json", ...t }),
                    credentialControllerUpdate: (e, t, n = {}) => this.request({ path: `/credential/${e}`, method: "PUT", body: t, secure: !0, type: Js.Json, format: "json", ...n }),
                    credentialControllerRemove: (e, t = {}) => this.request({ path: `/credential/${e}`, method: "DELETE", secure: !0, format: "json", ...t }),
                }),
                t(this, "phoneNumber", {
                    phoneNumberControllerBuy: (e, t = {}) => this.request({ path: "/phone-number/buy", method: "POST", body: e, secure: !0, type: Js.Json, format: "json", ...t }),
                    phoneNumberControllerImportTwilio: (e, t = {}) => this.request({ path: "/phone-number/import/twilio", method: "POST", body: e, secure: !0, type: Js.Json, format: "json", ...t }),
                    phoneNumberControllerImportVonage: (e, t = {}) => this.request({ path: "/phone-number/import/vonage", method: "POST", body: e, secure: !0, type: Js.Json, format: "json", ...t }),
                    phoneNumberControllerFindAll: (e, t = {}) => this.request({ path: "/phone-number", method: "GET", query: e, secure: !0, format: "json", ...t }),
                    phoneNumberControllerFindOne: (e, t = {}) => this.request({ path: `/phone-number/${e}`, method: "GET", secure: !0, format: "json", ...t }),
                    phoneNumberControllerUpdate: (e, t, n = {}) => this.request({ path: `/phone-number/${e}`, method: "PATCH", body: t, secure: !0, type: Js.Json, format: "json", ...n }),
                    phoneNumberControllerRemove: (e, t = {}) => this.request({ path: `/phone-number/${e}`, method: "DELETE", secure: !0, format: "json", ...t }),
                }),
                t(this, "metrics", { metricsControllerFindAll: (e, t = {}) => this.request({ path: "/metrics", method: "GET", query: e, secure: !0, format: "json", ...t }) }),
                t(this, "log", { loggingControllerGetLogs: (e, t = {}) => this.request({ path: "/log", method: "GET", query: e, secure: !0, format: "json", ...t }) }),
                t(this, "tool", {
                    toolControllerCreate: (e, t = {}) => this.request({ path: "/tool", method: "POST", body: e, secure: !0, type: Js.Json, format: "json", ...t }),
                    toolControllerFindAll: (e, t = {}) => this.request({ path: "/tool", method: "GET", query: e, secure: !0, format: "json", ...t }),
                    toolControllerFindOne: (e, t = {}) => this.request({ path: `/tool/${e}`, method: "GET", secure: !0, format: "json", ...t }),
                    toolControllerUpdate: (e, t, n = {}) => this.request({ path: `/tool/${e}`, method: "PATCH", body: t, secure: !0, type: Js.Json, format: "json", ...n }),
                    toolControllerRemove: (e, t = {}) => this.request({ path: `/tool/${e}`, method: "DELETE", secure: !0, format: "json", ...t }),
                }),
                t(this, "file", {
                    fileControllerCreate: (e, t = {}) => this.request({ path: "/file/upload", method: "POST", body: e, secure: !0, type: Js.FormData, format: "json", ...t }),
                    fileControllerFindAll: (e = {}) => this.request({ path: "/file", method: "GET", secure: !0, format: "json", ...e }),
                    fileControllerFindOne: (e, t = {}) => this.request({ path: `/file/${e}`, method: "GET", secure: !0, format: "json", ...t }),
                    fileControllerRemove: (e, t = {}) => this.request({ path: `/file/${e}`, method: "DELETE", secure: !0, format: "json", ...t }),
                });
        }
    }),
        Object.defineProperty(zs, "__esModule", { value: !0 }),
        (zs.client = void 0);
    const Qs = new Hs.Api({
        baseUrl: "https://api.vapi.ai",
        baseApiParams: { secure: !0 },
        securityWorker: async (e) => {
            if (e) return { headers: { Authorization: `Bearer ${e}` } };
        },
    });
    zs.client = Qs;
    var Xs =
        (n && n.__importDefault) ||
        function (e) {
            return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(r, "__esModule", { value: !0 });
    const Zs = Xs(Os),
        ea = Xs(Ws),
        ta = zs;
    async function na(e, t) {
        const n = document.createElement("audio");
        return (
            (n.dataset.participantId = t),
            document.body.appendChild(n),
            await (async function (e, t) {
                (e.muted = !1), (e.autoplay = !0), null != t && ((e.srcObject = new MediaStream([t])), await e.play());
            })(n, e),
            n
        );
    }
    class ra extends ea.default {
        on(e, t) {
            return super.on(e, t), this;
        }
        once(e, t) {
            return super.once(e, t), this;
        }
        emit(e, ...t) {
            return super.emit(e, ...t);
        }
        removeListener(e, t) {
            return super.removeListener(e, t), this;
        }
        removeAllListeners(e) {
            return super.removeAllListeners(e), this;
        }
    }
    var ia = (r.default = class extends ra {
        constructor(e, n) {
            super(), t(this, "started", !1), t(this, "call", null), t(this, "speakingTimeout", null), (ta.client.baseUrl = n ?? "https://api.vapi.ai"), ta.client.setSecurityData(e);
        }
        cleanup() {
            var e;
            (this.started = !1), null == (e = this.call) || e.destroy(), (this.call = null), (this.speakingTimeout = null);
        }
        async start(e, t, n) {
            var r, i;
            if (!e && !n) throw new Error("Assistant or Squad must be provided.");
            if (this.started) return null;
            this.started = !0;
            try {
                const o = (
                    await ta.client.call.callControllerCreateWebCall({
                        assistant: "string" == typeof e ? void 0 : e,
                        assistantId: "string" == typeof e ? e : void 0,
                        assistantOverrides: t,
                        squad: "string" == typeof n ? void 0 : n,
                        squadId: "string" == typeof n ? n : void 0,
                    })
                ).data;
                this.call && this.cleanup();
                const s = (null == (r = null == o ? void 0 : o.artifactPlan) ? void 0 : r.videoRecordingEnabled) ?? !1;
                if (
                    ((this.call = Zs.default.createCallObject({ audioSource: !0, videoSource: s })),
                    null == (i = this.call.iframe()) || i.style.setProperty("display", "none"),
                    this.call.on("left-meeting", () => {
                        var e;
                        this.emit("call-end"), s && (null == (e = this.call) || e.stopRecording()), this.cleanup();
                    }),
                    this.call.on("participant-left", (e) => {
                        e &&
                            (function (e) {
                                const t = document.querySelector(`audio[data-participant-id="${e}"]`);
                                null == t || t.remove();
                            })(e.participant.session_id);
                    }),
                    this.call.on("error", (e) => {
                        var t;
                        this.emit("error", e), s && (null == (t = this.call) || t.stopRecording());
                    }),
                    this.call.on("camera-error", (e) => {
                        this.emit("error", e);
                    }),
                    this.call.on("track-started", async (e) => {
                        var t, n, r;
                        !e ||
                            !e.participant ||
                            (null != (t = e.participant) && t.local) ||
                            ("audio" === e.track.kind &&
                                (await na(e.track, e.participant.session_id), "Vapi Speaker" === (null == (n = null == e ? void 0 : e.participant) ? void 0 : n.user_name) && (null == (r = this.call) || r.sendAppMessage("playable"))));
                    }),
                    this.call.on("participant-joined", (e) => {
                        !e ||
                            !this.call ||
                            (function (e, t, n) {
                                e.participant.local || t.updateParticipant(e.participant.session_id, { setSubscribedTracks: { audio: !0, video: n } });
                            })(e, this.call, s);
                    }),
                    await this.call.join({ url: o.webCallUrl, subscribeToTracksAutomatically: !1 }),
                    s)
                ) {
                    const e = new Date().getTime();
                    this.call.startRecording({ width: 1280, height: 720, backgroundColor: "#FF1F2D3D", layout: { preset: "default" } }),
                        this.call.on("recording-started", () => {
                            this.send({ type: "control", control: "say-first-message", videoRecordingStartDelaySeconds: (new Date().getTime() - e) / 1e3 });
                        });
                }
                return (
                    this.call.startRemoteParticipantsAudioLevelObserver(100),
                    this.call.on("remote-participants-audio-level", (e) => {
                        e && this.handleRemoteParticipantsAudioLevel(e);
                    }),
                    this.call.on("app-message", (e) => this.onAppMessage(e)),
                    this.call.on("nonfatal-error", (e) => {
                        var t;
                        "audio-processor-error" === (null == e ? void 0 : e.type) &&
                            (null == (t = this.call) ||
                                t.updateInputSettings({ audio: { processor: { type: "none" } } }).then(() => {
                                    var e;
                                    null == (e = this.call) || e.setLocalAudio(!0);
                                }));
                    }),
                    this.call.updateInputSettings({ audio: { processor: { type: "noise-cancellation" } } }),
                    o
                );
            } catch (e) {
                return console.error(e), this.emit("error", e), this.cleanup(), null;
            }
        }
        onAppMessage(e) {
            if (e)
                try {
                    if ("listening" === e.data) return this.emit("call-start");
                    try {
                        const t = JSON.parse(e.data);
                        this.emit("message", t);
                    } catch (e) {
                        console.log("Error parsing message data: ", e);
                    }
                } catch (e) {
                    console.error(e);
                }
        }
        handleRemoteParticipantsAudioLevel(e) {
            const t = Object.values(e.participantsAudioLevel).reduce((e, t) => e + t, 0);
            this.emit("volume-level", Math.min(1, t / 0.15)),
                t > 0.01 &&
                    (this.speakingTimeout ? (clearTimeout(this.speakingTimeout), (this.speakingTimeout = null)) : this.emit("speech-start"),
                    (this.speakingTimeout = setTimeout(() => {
                        this.emit("speech-end"), (this.speakingTimeout = null);
                    }, 1e3)));
        }
        stop() {
            var e;
            (this.started = !1), null == (e = this.call) || e.destroy(), (this.call = null);
        }
        send(e) {
            var t;
            null == (t = this.call) || t.sendAppMessage(JSON.stringify(e));
        }
        setMuted(e) {
            try {
                if (!this.call) throw new Error("Call object is not available.");
                this.call.setLocalAudio(!e);
            } catch (e) {
                throw e;
            }
        }
        isMuted() {
            try {
                return !!this.call && !1 === this.call.localAudio();
            } catch (e) {
                throw e;
            }
        }
        say(e, t) {
            this.send({ type: "say", message: e, endCallAfterSpoken: t });
        }
        setInputDevicesAsync(e) {
            var t;
            null == (t = this.call) || t.setInputDevicesAsync(e);
        }
        setOutputDeviceAsync(e) {
            var t;
            null == (t = this.call) || t.setOutputDeviceAsync(e);
        }
    });
    const oa = ({ position: e = "bottom", offset: t = "40px", width: n = "50px", height: r = "50px", idle: i, loading: o, active: s }, a = "vapi-support-btn") => {
        (({ idle: e, loading: t, active: n, width: r, height: i, position: o, offset: s }) => {
            const a = parseInt(r) / 2,
                c = parseInt(i) / 2,
                l = {
                    "bottom-right": `bottom: ${s}; right: ${s};`,
                    "bottom-left": `bottom: ${s}; left: ${s};`,
                    "top-right": `top: ${s}; right: ${s};`,
                    "top-left": `top: ${s}; left: ${s};`,
                    bottom: `bottom: ${s}; left: 50%; margin-left: -${a}px;`,
                    right: `top: 50%; right: ${s}; margin-top: -${c}px;`,
                    left: `top: 50%; left: ${s}; margin-top: -${c}px;`,
                    top: `top: ${s}; left: 50%; margin-left: -${a}px;`,
                },
                u = document.createElement("style");
            u.innerText = `
                @keyframes bounce {
                    30% {
                        transform: translateY(0%);
                    }

                    40% {
                        transform: translateY(-5%);
                    }

                    50% {
                        transform: translateY(-10%);
                    }

                    60% {
                        transform: translateY(-5%);
                    }

                    70% {
                        transform: translateY(0%);
                    }
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }

                    100% {
                        transform: rotate(360deg);
                    }
                }

                .vapi-btn {
                    border-radius: 50%;
                    min-width: ${r};
                    height: ${i};
                    color: white;
                    border: none;
                    transition: all 0.3s ease-in-out;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    position: absolute;
                    padding: 0;
                    cursor: context-menu;
                    animation: bounce 2s ease-in-out infinite;
                    ${l[o]}
                }

                .vapi-btn-round {
                    border-radius: 30px;
                    color: black;
                    background: white;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    padding: 5px 10px;
                    border: 0.1px solid rgba(0, 0, 0, 0.3);
                    font-family: sans-serif;
                }

                .vapi-btn-connect {
                    color: black;
                    background: white;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 10px;
                    border-radius: 50%;
                    border: 0.1px solid rgba(0, 0, 0, 0.3);
                    font-family: sans-serif;
                }

                .vapi-btn-pill {
                    border-radius: 8px;
                    color: black;
                    background: white;
                    justify-content: flex-start;
                    padding: 0px 5px;
                }

                .vapi-btn:hover {
                    animation: none;
                    transform: translateY(-5px);
                }

                #vapi-icon-container {
                    padding: 5px;
                    margin: 5px;
                    border-radius: 5px;
                }

                #vapi-title-container {
                    padding: 5px 10px;
                }

                #vapi-title {
                    font-size: 1.1em;
                }

                #vapi-subtitle {
                    font-size: 0.9em;
                }

                .vapi-btn-is-loading>#vapi-icon-container>img {
                    animation: spin 1s linear infinite;
                }

                .vapi-btn-is-active {
                    background: ${n.color};
                    box-shadow: 1px 1px 80px 20px ${n.color};
                    height: 320px;
                }

                .vapi-btn-pill.vapi-btn-is-active {
                    background: #37225b;
                }

                .vapi-btn-pill.vapi-btn-is-active>#vapi-icon-container {
                    background: #37225b;
                    width: 260px;
                }

                .vapi-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .vapi-call-btn {
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    padding: 10px;
                    width: 150px;
                    height: 40px;
                    color: #fff;
                    border-radius: 50px;
                    background-color: rgb(0, 0, 0);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    transition: background 0.3s ease;
                }

                .vapi-call-btn:hover {
                    background-color: rgb(206, 206, 206);
                    color: #000;
                }

                .vapi-call-btn:hover #vapi-subtitle {
                    color: black;
                    font-weight: bold;
                }

                .vapi-icon {
                    width: 20px;
                    height: 20px;
                    content: url("https://i.imghippo.com/files/gf3941lE.png");
                }

                .vapi-call-btn:hover .vapi-icon {
                    content: url("https://i.imghippo.com/files/On1255WA.png");
                }

                .vapi-call-icon {
                    width: 24px;
                    height: 24px;
                    color: #333;
                }

                #vapi-subtitle {
                    font-size: 12px;
                    text-align: center;
                    color: #fff;
                }

                .vapi-btn-is-idle {
                    background: ${e.color};
                    box-shadow: 1px 1px 10px ${e.color};
                    height: 60px;
                }

                .vapi-btn-pill.vapi-btn-is-idle {
                    background: white;
                }

                .vapi-btn-pill.vapi-btn-is-idle>#vapi-icon-container {
                    background: ${e.color};
                }

                .vapi-btn-is-loading {
                    background: ${t.color};
                    box-shadow: 1px 1px 80px 20px ${t.color};
                    height: 60px;
                }

                .vapi-btn-pill.vapi-btn-is-loading {
                    background: white;
                }

                .vapi-btn-pill.vapi-btn-is-loading>#vapi-icon-container {
                    background: ${t.color};
                }

                .vapi-btn-is-speaking {
                    /* Add speaking styles if different from active/loading/idle */
                }

                @font-face {
                    font-family: 'LucideIcons';
                    src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
                }
                `;
            for (let e = 0; e <= 10; e++) u.innerText += `\n      .vapi-btn-volume-${e} {\n        box-shadow: 1px 1px ${5 + 2 * e}px ${2 * e}px ${n.color}, inset 0px 0px 10px 0px rgba(0,0,0,0.1);\n      }\n    `;
            document.head.appendChild(u);
        })({ idle: i, loading: o, active: s, width: n, height: r, position: e, offset: t });
        const c = document.createElement("button");
        return (c.id = a), (c.className = "vapi-btn vapi-btn-round vapi-btn-is-idle"), (c.onclick = () => {}), c;
    };
    window.vapiSDK = {
        run: ({ apiKey: e = "", assistant: t, assistantOverrides: n, squad: r, config: i = {}, ...o }) => {
            const s = (function e(t, n) {
                const r = { ...t };
                return (
                    Object.keys(n).forEach((i) => {
                        "object" != typeof n[i] || null === n[i] || Array.isArray(n[i]) ? (r[i] = n[i]) : (r[i] = e(t[i] || {}, n[i]));
                    }),
                    r
                );
            })(
                {
                    position: "bottom",
                    offset: "40px",
                    width: "50px",
                    height: "50px",
                    idle: { color: "#FFFFFF", type: "round", title: "Have a quick question?", subtitle: "Voice Chat", icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg" },
                    loading: { color: "#FF8132", type: "connect", title: "Connecting...", subtitle: "Please wait", icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg" },
                    active: { color: "#37225b", type: "pill", title: "Call is in progress...", subtitle: "End call.", icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg" },
                },
                i
            );
            if (e && (t || r)) {
                const i = new ia(e),
                    o = oa(s),
                    a = ((e) => (t, n) => {
                        const r = e[n];
                        if (r)
                            if (((t.innerHTML = ""), (t.title = r.title ?? ""), (t.className = `vapi-btn vapi-btn-is-${n}`), "connect" === r.type)) {
                                t.classList.add("vapi-btn-connect");
                                const e = document.createElement("div");
                                (e.id = "vapi-icon-container"),
                                    (e.style.padding = "0"),
                                    (e.style.margin = "0"),
                                    (e.style.width = "40px"),
                                    (e.style.height = "40px"),
                                    (e.style.borderRadius = "50%"),
                                    (e.style.display = "flex"),
                                    (e.style.justifyContent = "center"),
                                    (e.style.alignItems = "center"),
                                    (e.style.boxSizing = "border-box");
                                const n = document.createElement("img");
                                (n.src = r.icon || "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg"),
                                    (n.alt = "Icon"),
                                    (n.style.width = "20px"),
                                    (n.style.height = "20px"),
                                    (n.style.display = "block"),
                                    e.appendChild(n),
                                    t.appendChild(e);
                            } else if ("round" === r.type) {
                                t.classList.add("vapi-btn-round");
                                const e = document.createElement("div");
                                (e.id = "vapi-container"),
                                    (e.style.display = "flex"),
                                    (e.style.alignItems = "center"),
                                    (e.style.justifyContent = "space-between"),
                                    (e.style.padding = "5px 0px 5px 8px"),
                                    (e.style.borderRadius = "30px"),
                                    (e.style.width = "fit-content"),
                                    (e.style.fontFamily = "Arial, sans-serif"),
                                    (e.style.color = "#333"),
                                    (e.style.fontSize = "14px"),
                                    (e.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)");
                                const n = document.createElement("div");
                                (n.style.display = "flex"), (n.style.flexDirection = "column"), (n.style.alignItems = "flex-start"), (n.style.marginRight = "10px");
                                const r = document.createElement("div");
                                (r.textContent = "Have a quick question?"), (r.style.fontSize = "14px"), (r.style.color = "#555");
                                const i = document.createElement("div");
                                (i.innerHTML = 'Talk with <span style="color: #5B52E7; font-weight: bold;">Audree</span>'), (i.style.fontSize = "14px");
                                const o = document.createElement("button");
                                (o.style.display = "flex"),
                                    (o.style.justifyContent = "center"),
                                    (o.style.alignItems = "center"),
                                    (o.style.background = "#FF7F41"),
                                    (o.style.border = "none"),
                                    (o.style.borderRadius = "50%"),
                                    (o.style.width = "40px"),
                                    (o.style.height = "40px"),
                                    (o.style.cursor = "pointer"),
                                    (o.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)");
                                const s = document.createElement("img");
                                (s.src = "https://i.imghippo.com/files/On1255WA.png"),
                                    (s.style.width = "18px"),
                                    (s.style.height = "18px"),
                                    o.appendChild(s),
                                    n.appendChild(r),
                                    n.appendChild(i),
                                    e.appendChild(n),
                                    e.appendChild(o),
                                    t.appendChild(e);
                            } else {
                                t.classList.add("vapi-btn-pill");
                                const e = document.createElement("div");
                                (e.id = "vapi-icon-container"),
                                    (e.style.backgroundColor = "#37225b"),
                                    (e.style.borderRadius = "16px"),
                                    (e.style.overflow = "hidden"),
                                    (e.style.padding = "10px"),
                                    (e.style.textAlign = "center"),
                                    (e.style.width = "240px"),
                                    (e.style.fontFamily = "Arial, sans-serif"),
                                    (e.style.color = "#fff");
                                const n = document.createElement("div");
                                (n.style.position = "relative"), (n.style.borderRadius = "10px"), (n.style.overflow = "hidden");
                                const r = document.createElement("img");
                                (r.src = "https://i.imghippo.com/files/nbp2634.png"), (r.alt = "Icon"), (r.style.width = "100%"), (r.style.height = "230px"), (r.style.borderRadius = "8px"), (r.style.display = "block"), n.appendChild(r);
                                const i = document.createElement("div");
                                (i.style.position = "absolute"),
                                    (i.style.bottom = "0"),
                                    (i.style.left = "0"),
                                    (i.style.right = "0"),
                                    (i.style.height = "15px"),
                                    (i.style.display = "flex"),
                                    (i.style.justifyContent = "space-between"),
                                    (i.style.alignItems = "center"),
                                    (i.style.background = "rgba(77, 87, 159, 0.93)"),
                                    (i.style.padding = "10px 10px"),
                                    (i.style.color = "#fff");
                                const o = document.createElement("div");
                                (o.style.display = "flex"), (o.style.alignItems = "center");
                                const s = document.createElement("span");
                                (s.style.width = "8px"), (s.style.height = "8px"), (s.style.borderRadius = "50%"), (s.style.backgroundColor = "limegreen"), (s.style.marginRight = "6px");
                                const a = document.createElement("span");
                                (a.textContent = "Audree"), (a.style.fontSize = "12px"), (a.style.fontWeight = "bold"), o.appendChild(s), o.appendChild(a);
                                const c = document.createElement("div");
                                (c.textContent = "00:00"), (c.style.fontSize = "12px"), (c.style.fontWeight = "bold");
                                let l = 0;
                                setInterval(() => {
                                    l++;
                                    const e = String(Math.floor(l / 60)).padStart(2, "0"),
                                        t = String(l % 60).padStart(2, "0");
                                    c.textContent = `${e}:${t}`;
                                }, 1e3),
                                    i.appendChild(o),
                                    i.appendChild(c),
                                    n.appendChild(i),
                                    e.appendChild(n);
                                const u = document.createElement("button");
                                (u.textContent = "End Call"),
                                    (u.style.fontSize = "0.9rem"),
                                    (u.style.fontWeight = "bold"),
                                    (u.style.borderRadius = "5px"),
                                    (u.style.padding = "10px 20px"),
                                    (u.style.backgroundColor = "#f6501d"),
                                    (u.style.border = "none"),
                                    (u.style.color = "white"),
                                    (u.style.cursor = "pointer"),
                                    (u.style.marginTop = "10px"),
                                    (u.style.width = "100%"),
                                    (u.style.transition = "background-color 0.3s"),
                                    u.addEventListener("mouseover", () => {
                                        u.style.backgroundColor = "#f96f45";
                                    }),
                                    u.addEventListener("mouseout", () => {
                                        u.style.backgroundColor = "#f6501d";
                                    }),
                                    e.appendChild(u),
                                    t.appendChild(e);
                            }
                        else console.warn(`No config found for type: ${n}`);
                    })(s);
                return (
                    document.body.appendChild(o),
                    a(o, "idle"),
                    (function (e, t, n, r, i, o) {
                        let s = !1;
                        e.on("call-start", () => {
                            o(t, "active");
                        }),
                            e.on("call-end", () => {
                                o(t, "idle");
                            }),
                            e.on("speech-start", () => {
                                t.classList.add("vapi-btn-is-speaking");
                            }),
                            e.on("speech-end", () => {
                                t.classList.remove("vapi-btn-is-speaking");
                            }),
                            t.addEventListener("click", () => {
                                o(t, "loading"), s ? (e.stop(), (s = !1)) : (n || r ? e.start(n, r) : (console.log("squad ,", i, n, r), e.start(void 0, void 0, i)), (s = !0));
                            }),
                            e.on("volume-level", (e) => {
                                const n = Math.floor(10 * e);
                                for (let e = 0; e <= 10; e++) t.classList.remove(`vapi-btn-volume-${e}`);
                                t.classList.add(`vapi-btn-volume-${n}`);
                            });
                    })(i, o, t, n, r, a),
                    (window.vapiSDK.vapi = i),
                    i
                );
            }
            return console.error("API Key and Assistant Configurations are required. are required"), null;
        },
    };
});

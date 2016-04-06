function _(a) {
	var b = window.currentLanguage || "ru";
	if ("ru" === b)return a;
	try {
		return window.locale[b][a]
	} catch (c) {
		return a
	}
}
function debounce(a, b, c) {
	var d;
	return function () {
		var e = this, f = arguments, g = function () {
			d = null, c || a.apply(e, f)
		}, h = c && !d;
		clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
	}
}
function _replacePosters() {
	$("video[poster]").each(function (a, b) {
		var c = $(b), d = c.data("at2x");
		d && c.attr("poster", d)
	})
}
function onDocumentReady() {
	"use strict";
	function a(a) {
		$.each(a, function (a, b) {
			$.each([s, t, mobileMenuView], function (a, c) {
				c && c.$element.find('a[rel="alternate"]').filter('[hreflang="' + b.lang + '"]').attr("href", b.url)
			})
		})
	}

	function b(a) {
		var b = (window.config ? window.config.staticUrl : "/static/") + window.currentLanguage + "/404.html";
		u ? a(u) : $.get(b).always(function (b) {
			u = b, "function" == typeof a && a(b)
		})
	}

	function c() {
		b(function (a) {
			function b() {
				i.removeClass("error_page"), c.remove(), d.hide(), d.off("click", b)
			}

			var c = $($.parseHTML(a)).filter(".modal_dialog__error_page"), d = $(".wrapsite__overlay");
			c.find(".modal_dialog__close").removeAttr("href"), i.addClass("error_page"), d.show(), i.append(c), isMobile.any() && $(".wrapsite").prepend($(".modal_dialog__error_page")), $(".wrapsite__overlay, .modal_dialog__close, .nav__item_error .nav__link, .error_right a, .topline__head").on("click", b)
		})
	}

	function d() {
		function a() {
			function d() {
				i.removeClass("error_page"), b.remove(), c.hide(), c.off("click", a)
			}

			var e = $(this).attr("href");
			e ? (k.one("loaded", d), k.handleURL($(this).attr("href"))) : (k.updateState({contentView: "/"}, "/", document.title), d())
		}

		k.handleURL("/", {from: "initial"});
		var b = $(".modal_dialog__error_page"), c = $(".wrapsite__overlay");
		b.find(".modal_dialog__close").removeAttr("href"), isMobile.any() && $(".wrapsite").prepend(b), $(".modal_dialog__message").focus(), $(window).on("keydown", function (b) {
			switch (b.keyCode) {
				case 9:
					$(b.target).hasClass("last-in-focus") && $(".modal_dialog__message").focus();
					break;
				case 27:
					a()
			}
		}), $(".wrapsite__overlay, .modal_dialog__close, .nav__item_error .nav__link, .error_right a, .topline__head").on("click", a)
	}

	function e() {
		if (!v) {
			var a = window.mobileMenuView = new MobileMenuView({
				element: $(".topline_nav_mobile"), button: $(".topline__togglemore"), onInit: function () {
					this.onRender()
				}, locale: window.currentLanguage
			});
			a.attachToDOM(), l.addView(a, "mobileMenuView"), v = !0
		}
	}

	function f() {
		var a = $(".read img.vertical");
		if (a.length) {
			var b = ".media__pic, .slider__block_vertical", c = a.closest(b), d = c.width();
			a.closest(".slider").length && (d = $(".cycle-slide-active .slider__block").width());
			var e = 420 * d / 680;
			c.height(e)
		}
	}

	function g() {
		function a() {
			try {
				return "localStorage" in window && null !== window.localStorage
			} catch (a) {
				return !1
			}
		}

		var b = $(".footer__special").offset().top, c = $(window).scrollTop() + $(window).height();
		return a() ? "visible" === localStorage.footerIcons && x === !1 ? void $(".footer__search i, .footer__smi i, .footer__special i").addClass("no-animation") : (2 >= w && c > b + 100 && x === !1 ? (setTimeout(function () {
			$(".footer__search i, .footer__smi i, .footer__special i").addClass("is-visible")
		}, 1e3), w++, x = !0) : 2 === w && localStorage.setItem("footerIcons", "visible"), w > 2 && $(".footer__search i, .footer__smi i, .footer__special i").addClass("no-animation"), void(b > c + 150 && ($(".footer__search i, .footer__smi i, .footer__special i").removeClass("is-visible"), x = !1))) : void $(".footer__search i, .footer__smi i, .footer__special i").addClass("no-animation")
	}

	function h(a) {
		function b(a) {
			a.preventDefault(), a.stopPropagation()
		}

		var c = $(a.target).closest("a")[0];
		if (c) {
			var d, e = l.isLinkExternal(c);
			if (e) {
				b(a);
				var f = '<div class="attention" tabindex="-1"><h4 class="attention_title" tabindex="1">' + _("Вы покидаете веб-сервер Кремля") + '</h4><p class="attention_message">' + _("Для перехода нажмите по ссылке:") + '</p><a class="outside_link button button_green" href="/" tabindex="2"><span></span></a><span class="modal_dialog__close last-in-focus" tabindex="3"></span></div>';
				d = $(c).attr("href"), i.addClass("leaving_site").append(f), $(".outside_link").off("click", h).attr("href", d).one("click", function (a) {
					b(a), window.open(d, "_blank"), i.removeClass("leaving_site"), $(".attention").remove(), i.unbind("touchmove", b)
				}), $(".outside_link span").text(d), $(".wrapsite__overlay").css("display", "block"), $(".attention").focus(), i.bind("touchmove", b);
				var g = function () {
					i.removeClass("leaving_site"), i.unbind("touchmove", b), $(".attention").remove()
				};
				$(".wrapsite__overlay, .wrapsite__outside, .modal_dialog__close").on("click", function () {
					g()
				}), $(window).on("keydown", function (a) {
					switch (a.keyCode) {
						case 9:
							i.hasClass("leaving_site") && $(a.target).hasClass("last-in-focus") && $(".attention").focus();
							break;
						case 27:
							g()
					}
				})
			} else"external" === $(c).attr("rel") && (b(a), d = $(c).attr("href"), window.open(d, "_blank"))
		}
	}

	var i = $(document.body);
	i.spotted(), i.sidebar(), window.NotificationCenter = new NotificationCenter;
	var j = !1;
	$(window).on("unload", function () {
		j = !0, $(document).off("ajaxError")
	}), $(document).ajaxError(function (a, b, d, e) {
		if (!j)switch (e) {
			case"timeout":
				NotificationCenter.notify(_("Превышено время ожидания ответа"));
				break;
			case"abort":
				break;
			default:
				var f;
				switch (b.status) {
					case 400:
						f = _("Неверный запрос");
						break;
					case 404:
						f = _("Не найдено");
						break;
					case 405:
						f = _("Метод не поддерживается");
						break;
					case 429:
						f = _("Слишком много запросов");
						break;
					case 500:
						f = _("Внутренняя ошибка сервера");
						break;
					case 502:
						f = _("Неверный шлюз");
						break;
					case 503:
						f = _("Сервис недоступен");
						break;
					case 504:
						f = _("Шлюз не отвечает");
						break;
					default:
						f = _("Ошибка загрузки")
				}
				404 === b.status ? c() : NotificationCenter.notify(f + " " + $.url().attr("base") + (b.url || d.url))
		}
	}), window.currentLanguage && "en" !== currentLanguage && $.validator.messages._locale && $.validator.messages._locale[currentLanguage] && $.extend($.validator.messages, $.validator.messages._locale[currentLanguage]), $.validator.addMethod("filesize", function (a, b, c) {
		var d = this.optional(b);
		return d ? d : b.files && b.files.length && b.files[0].size > c ? !1 : !0
	}, function (a) {
		return _("Пожалуйста, выберите файл, размер которого не более") + " " + humanFileSize(a, !0)
	});
	var k = new Router;
	window.router = k;
	var l = window.viewManager = new ViewManager(k), m = l.getView("readerView"), n = new ApplicationView({container: document.body, element: i});
	l.addView(n, "applicationView");
	var o = new ContentView({container: document.body, element: $(".content-view")});
	l.addView(o, "contentView"), window.contentView = o;
	var p = window.galleryView = new GalleryView({container: $(".gallery__wrap"), element: $(".gallery__wrap .gallery")});
	l.addView(p, "galleryView");
	var q = window.topView = new TopView({element: $(".topline")});
	l.addView(q, "topView");
	var r = window.subNavView = new SubnavView({
		element: $(".subnav-view"), onInit: function () {
			this.onRender()
		}
	});
	r.attachToDOM(), l.addView(r, "subNavView");
	var s = new View({element: $(".sidebar")});
	l.addView(s, "sidebarView");
	var t = new View({
		element: $(".footer"), onInit: function () {
			var a = this;
			o.on("update", function (b, c) {
				var d = a.$element.find("a"), e = $.url(c).attr("relative").split("/"), f = !1;
				d.each(function () {
					for (var a = $(this), b = a.attr("href").split("/"), c = 1; c < b.length && (e[c] === b[c] && e[c + 1] === b[c + 1]); c++)d.removeClass("is-active"), a.addClass("is-active"), f = !0
				}), f || d.removeClass("is-active")
			})
		}
	});
	l.addView(t, "footerView"), k.on("willLoad", function (a, b) {
		var c = $('a[href="' + b + '"]'), d = $(".hentry__assets a");
		(d.length || c.hasClass("tabs_audio")) && d.removeClass("is-active"), c.addClass("is-loading")
	}), window.resolveLanguageURLs = a, k.on("loaded", function () {
		_replacePosters()
	}), k.on("loaded", function (a, b) {
		var c = $('a[href="' + b + '"]'), d = $(".hentry__assets a");
		c.removeClass("is-loading").addClass("is-active"), d.length && c.closest(".hentry").addClass("is-active")
	}), k.on("abort failed", function () {
		$("a[href]").removeClass("is-loading")
	});
	var u = null;
	i.is(".error_page") && d();
	var v = !1;
	MobileMenuView.checkWidth(), $(window).resize(function () {
		MobileMenuView.checkWidth(), e(), mobileMenuView.applyWidth(), i.is(".is-viewing") || f();
		var a = $(".read");
		if (a.is(".video-transcript")) {
			var b = $(".read").find(".media__container_video").outerHeight(!0);
			$(".read__top").css("paddingTop", b)
		}
		if (!window.isMobile.any()) {
			var c = $(".feedback"), d = c.find(".feedback__wrapper");
			if (c.length && d.is(".is-visible")) {
				var g = window.innerHeight || $(window).height();
				d.height(g - $(".feedback-bar").height())
			}
			paginator.pause()
		}
		o.renameTitle(), i.hasClass("is-mobile") && i.hasClass("is-search") && ($(".nav__link_search").data("search").close(), i.off("mousewheel"))
	}), $(window).on("orientationchange", function () {
		(i.is(".is-mobile") || window.isMobile.any()) && (i.is(".is-viewing") || setTimeout(f, 100))
	});
	var w = 0, x = !1;
	if (g(), $(window).scroll(function () {
			g()
		}), (i.is(".is-mobile") || window.isMobile.any()) && (e(), mobileMenuView.applyWidth()), $(".nav__link_search").search(), isMobile.any() || i.hasClass("is-mobile")) {
		var y = new Nanobar({bg: "#30BE9A"});
		k.on("willLoad", function () {
			y && y.go(50)
		}), k.on("loaded", function () {
			y && y.go(100)
		})
	}
	i.on("click", "a", h), l.linkViews(), o.attachToDOM(), p.attachToDOM(), m.attachToDOM(), q.attachToDOM(), t.attachToDOM(), k.start()
}
!function (a, b) {
	a.prototype.toISOString || !function () {
		function b(a) {
			return 10 > a ? "0" + a : a
		}

		a.prototype.toISOString = function () {
			return this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
		}
	}();
	var c = a.parse, d = [1, 4, 5, 6, 7, 10, 11];
	a.parse = function (e) {
		var f, g, h = 0;
		if (g = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(e)) {
			for (var i, j = 0; i = d[j]; ++j)g[i] = +g[i] || 0;
			g[2] = (+g[2] || 1) - 1, g[3] = +g[3] || 1, "Z" !== g[8] && g[9] !== b && (h = 60 * g[10] + g[11], "+" === g[9] && (h = 0 - h)), f = a.UTC(g[1], g[2], g[3], g[4], g[5] + h, g[6], g[7])
		} else f = c ? c(e) : 0 / 0;
		return f
	}
}(Date), function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document)throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	function c(a) {
		var b = a.length, c = fb.type(a);
		return "function" === c || fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}

	function d(a, b, c) {
		if (fb.isFunction(b))return fb.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType)return fb.grep(a, function (a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (nb.test(b))return fb.filter(b, a, c);
			b = fb.filter(b, a)
		}
		return fb.grep(a, function (a) {
			return fb.inArray(a, b) >= 0 !== c
		})
	}

	function e(a, b) {
		do a = a[b]; while (a && 1 !== a.nodeType);
		return a
	}

	function f(a) {
		var b = vb[a] = {};
		return fb.each(a.match(ub) || [], function (a, c) {
			b[c] = !0
		}), b
	}

	function g() {
		pb.addEventListener ? (pb.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (pb.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
	}

	function h() {
		(pb.addEventListener || "load" === event.type || "complete" === pb.readyState) && (g(), fb.ready())
	}

	function i(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(Ab, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : zb.test(c) ? fb.parseJSON(c) : c
				} catch (e) {
				}
				fb.data(a, b, c)
			} else c = void 0
		}
		return c
	}

	function j(a) {
		var b;
		for (b in a)if (("data" !== b || !fb.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
		return !0
	}

	function k(a, b, c, d) {
		if (fb.acceptData(a)) {
			var e, f, g = fb.expando, h = a.nodeType, i = h ? fb.cache : a, j = h ? a[g] : a[g] && g;
			if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)return j || (j = h ? a[g] = W.pop() || fb.guid++ : g), i[j] || (i[j] = h ? {} : {toJSON: fb.noop}), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = fb.extend(i[j], b) : i[j].data = fb.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[fb.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[fb.camelCase(b)])) : e = f, e
		}
	}

	function l(a, b, c) {
		if (fb.acceptData(a)) {
			var d, e, f = a.nodeType, g = f ? fb.cache : a, h = f ? a[fb.expando] : fb.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					fb.isArray(b) ? b = b.concat(fb.map(b, fb.camelCase)) : b in d ? b = [b] : (b = fb.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					for (; e--;)delete d[b[e]];
					if (c ? !j(d) : !fb.isEmptyObject(d))return
				}
				(c || (delete g[h].data, j(g[h]))) && (f ? fb.cleanData([a], !0) : db.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
			}
		}
	}

	function m() {
		return !0
	}

	function n() {
		return !1
	}

	function o() {
		try {
			return pb.activeElement
		} catch (a) {
		}
	}

	function p(a) {
		var b = Lb.split("|"), c = a.createDocumentFragment();
		if (c.createElement)for (; b.length;)c.createElement(b.pop());
		return c
	}

	function q(a, b) {
		var c, d, e = 0, f = typeof a.getElementsByTagName !== yb ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== yb ? a.querySelectorAll(b || "*") : void 0;
		if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || fb.nodeName(d, b) ? f.push(d) : fb.merge(f, q(d, b));
		return void 0 === b || b && fb.nodeName(a, b) ? fb.merge([a], f) : f
	}

	function r(a) {
		Fb.test(a.type) && (a.defaultChecked = a.checked)
	}

	function s(a, b) {
		return fb.nodeName(a, "table") && fb.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function t(a) {
		return a.type = (null !== fb.find.attr(a, "type")) + "/" + a.type, a
	}

	function u(a) {
		var b = Wb.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function v(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++)fb._data(c, "globalEval", !b || fb._data(b[d], "globalEval"))
	}

	function w(a, b) {
		if (1 === b.nodeType && fb.hasData(a)) {
			var c, d, e, f = fb._data(a), g = fb._data(b, f), h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h)for (d = 0, e = h[c].length; e > d; d++)fb.event.add(b, c, h[c][d])
			}
			g.data && (g.data = fb.extend({}, g.data))
		}
	}

	function x(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !db.noCloneEvent && b[fb.expando]) {
				e = fb._data(b);
				for (d in e.events)fb.removeEvent(b, d, e.handle);
				b.removeAttribute(fb.expando)
			}
			"script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), db.html5Clone && a.innerHTML && !fb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Fb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
		}
	}

	function y(b, c) {
		var d = fb(c.createElement(b)).appendTo(c.body), e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : fb.css(d[0], "display");
		return d.detach(), e
	}

	function z(a) {
		var b = pb, c = ac[a];
		return c || (c = y(a, b), "none" !== c && c || (_b = (_b || fb("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (_b[0].contentWindow || _b[0].contentDocument).document, b.write(), b.close(), c = y(a, b), _b.detach()), ac[a] = c), c
	}

	function A(a, b) {
		return {
			get: function () {
				var c = a();
				if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}

	function B(a, b) {
		if (b in a)return b;
		for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = nc.length; e--;)if (b = nc[e] + c, b in a)return b;
		return d
	}

	function C(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = fb._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Db(d) && (f[g] = fb._data(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = Db(d), (c && "none" !== c || !e) && fb._data(d, "olddisplay", e ? c : fb.css(d, "display"))));
		for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function D(a, b, c) {
		var d = jc.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function E(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += fb.css(a, c + Cb[f], !0, e)), d ? ("content" === c && (g -= fb.css(a, "padding" + Cb[f], !0, e)), "margin" !== c && (g -= fb.css(a, "border" + Cb[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + Cb[f], !0, e), "padding" !== c && (g += fb.css(a, "border" + Cb[f] + "Width", !0, e)));
		return g
	}

	function F(a, b, c) {
		var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = bc(a), g = db.boxSizing() && "border-box" === fb.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = cc(a, b, f), (0 > e || null == e) && (e = a.style[b]), ec.test(e))return e;
			d = g && (db.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function G(a, b, c, d, e) {
		return new G.prototype.init(a, b, c, d, e)
	}

	function H() {
		return setTimeout(function () {
			oc = void 0
		}), oc = fb.now()
	}

	function I(a, b) {
		var c, d = {height: a}, e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = Cb[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function J(a, b, c) {
		for (var d, e = (uc[b] || []).concat(uc["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
	}

	function K(a, b, c) {
		var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Db(a), p = fb._data(a, "fxshow");
		c.queue || (h = fb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i()
		}), h.unqueued++, l.always(function () {
			l.always(function () {
				h.unqueued--, fb.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fb.css(a, "display"), k = z(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === fb.css(a, "float") && (db.inlineBlockNeedsLayout && "inline" !== k ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", db.shrinkWrapBlocks() || l.always(function () {
			n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
		}));
		for (d in b)if (e = b[d], qc.exec(e)) {
			if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
				if ("show" !== e || !p || void 0 === p[d])continue;
				o = !0
			}
			m[d] = p && p[d] || fb.style(a, d)
		}
		if (!fb.isEmptyObject(m)) {
			p ? "hidden" in p && (o = p.hidden) : p = fb._data(a, "fxshow", {}), f && (p.hidden = !o), o ? fb(a).show() : l.done(function () {
				fb(a).hide()
			}), l.done(function () {
				var b;
				fb._removeData(a, "fxshow");
				for (b in m)fb.style(a, b, m[b])
			});
			for (d in m)g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function L(a, b) {
		var c, d, e, f, g;
		for (c in a)if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand" in g) {
			f = g.expand(f), delete a[d];
			for (c in f)c in a || (a[c] = f[c], b[c] = e)
		} else b[d] = e
	}

	function M(a, b, c) {
		var d, e, f = 0, g = tc.length, h = fb.Deferred().always(function () {
			delete i.elem
		}), i = function () {
			if (e)return !1;
			for (var b = oc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
			return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
		}, j = h.promise({
			elem: a,
			props: fb.extend({}, b),
			opts: fb.extend(!0, {specialEasing: {}}, c),
			originalProperties: b,
			originalOptions: c,
			startTime: oc || H(),
			duration: c.duration,
			tweens: [],
			createTween: function (b, c) {
				var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
				return j.tweens.push(d), d
			},
			stop: function (b) {
				var c = 0, d = b ? j.tweens.length : 0;
				if (e)return this;
				for (e = !0; d > c; c++)j.tweens[c].run(1);
				return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
			}
		}), k = j.props;
		for (L(k, j.opts.specialEasing); g > f; f++)if (d = tc[f].call(j, a, k, j.opts))return d;
		return fb.map(k, J, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), fb.fx.timer(fb.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	function N(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0, f = b.toLowerCase().match(ub) || [];
			if (fb.isFunction(c))for (; d = f[e++];)"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function O(a, b, c, d) {
		function e(h) {
			var i;
			return f[h] = !0, fb.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
			}), i
		}

		var f = {}, g = a === Sc;
		return e(b.dataTypes[0]) || !f["*"] && e("*")
	}

	function P(a, b) {
		var c, d, e = fb.ajaxSettings.flatOptions || {};
		for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
		return c && fb.extend(!0, a, c), a
	}

	function Q(a, b, c) {
		for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];)i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
		if (e)for (g in h)if (h[g] && h[g].test(e)) {
			i.unshift(g);
			break
		}
		if (i[0] in c)f = i[0]; else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function R(a, b, c, d) {
		var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
		if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
		for (f = k.shift(); f;)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
				g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
				break
			}
			if (g !== !0)if (g && a["throws"])b = g(b); else try {
				b = g(b)
			} catch (l) {
				return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
			}
		}
		return {state: "success", data: b}
	}

	function S(a, b, c, d) {
		var e;
		if (fb.isArray(b))fb.each(b, function (b, e) {
			c || Wc.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		}); else if (c || "object" !== fb.type(b))d(a, b); else for (e in b)S(a + "[" + e + "]", b[e], c, d)
	}

	function T() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {
		}
	}

	function U() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {
		}
	}

	function V(a) {
		return fb.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}

	var W = [], X = W.slice, Y = W.concat, Z = W.push, $ = W.indexOf, _ = {}, ab = _.toString, bb = _.hasOwnProperty, cb = "".trim, db = {}, eb = "1.11.0", fb = function (a, b) {
		return new fb.fn.init(a, b)
	}, gb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, hb = /^-ms-/, ib = /-([\da-z])/gi, jb = function (a, b) {
		return b.toUpperCase()
	};
	fb.fn = fb.prototype = {
		jquery: eb, constructor: fb, selector: "", length: 0, toArray: function () {
			return X.call(this)
		}, get: function (a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
		}, pushStack: function (a) {
			var b = fb.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		}, each: function (a, b) {
			return fb.each(this, a, b)
		}, map: function (a) {
			return this.pushStack(fb.map(this, function (b, c) {
				return a.call(b, c, b)
			}))
		}, slice: function () {
			return this.pushStack(X.apply(this, arguments))
		}, first: function () {
			return this.eq(0)
		}, last: function () {
			return this.eq(-1)
		}, eq: function (a) {
			var b = this.length, c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		}, end: function () {
			return this.prevObject || this.constructor(null)
		}, push: Z, sort: W.sort, splice: W.splice
	}, fb.extend = fb.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fb.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (fb.isPlainObject(c) || (b = fb.isArray(c))) ? (b ? (b = !1, f = a && fb.isArray(a) ? a : []) : f = a && fb.isPlainObject(a) ? a : {}, g[d] = fb.extend(j, f, c)) : void 0 !== c && (g[d] = c));
		return g
	}, fb.extend({
		expando: "jQuery" + (eb + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
			throw new Error(a)
		}, noop: function () {
		}, isFunction: function (a) {
			return "function" === fb.type(a)
		}, isArray: Array.isArray || function (a) {
			return "array" === fb.type(a)
		}, isWindow: function (a) {
			return null != a && a == a.window
		}, isNumeric: function (a) {
			return a - parseFloat(a) >= 0
		}, isEmptyObject: function (a) {
			var b;
			for (b in a)return !1;
			return !0
		}, isPlainObject: function (a) {
			var b;
			if (!a || "object" !== fb.type(a) || a.nodeType || fb.isWindow(a))return !1;
			try {
				if (a.constructor && !bb.call(a, "constructor") && !bb.call(a.constructor.prototype, "isPrototypeOf"))return !1
			} catch (c) {
				return !1
			}
			if (db.ownLast)for (b in a)return bb.call(a, b);
			for (b in a);
			return void 0 === b || bb.call(a, b)
		}, type: function (a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[ab.call(a)] || "object" : typeof a
		}, globalEval: function (b) {
			b && fb.trim(b) && (a.execScript || function (b) {
				a.eval.call(a, b)
			})(b)
		}, camelCase: function (a) {
			return a.replace(hb, "ms-").replace(ib, jb)
		}, nodeName: function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		}, each: function (a, b, d) {
			var e, f = 0, g = a.length, h = c(a);
			if (d) {
				if (h)for (; g > f && (e = b.apply(a[f], d), e !== !1); f++); else for (f in a)if (e = b.apply(a[f], d), e === !1)break
			} else if (h)for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++); else for (f in a)if (e = b.call(a[f], f, a[f]), e === !1)break;
			return a
		}, trim: cb && !cb.call("﻿ ") ? function (a) {
			return null == a ? "" : cb.call(a)
		} : function (a) {
			return null == a ? "" : (a + "").replace(gb, "")
		}, makeArray: function (a, b) {
			var d = b || [];
			return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
		}, inArray: function (a, b, c) {
			var d;
			if (b) {
				if ($)return $.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
			}
			return -1
		}, merge: function (a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d;)a[e++] = b[d++];
			if (c !== c)for (; void 0 !== b[d];)a[e++] = b[d++];
			return a.length = e, a
		}, grep: function (a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		}, map: function (a, b, d) {
			var e, f = 0, g = a.length, h = c(a), i = [];
			if (h)for (; g > f; f++)e = b(a[f], f, d), null != e && i.push(e); else for (f in a)e = b(a[f], f, d), null != e && i.push(e);
			return Y.apply([], i)
		}, guid: 1, proxy: function (a, b) {
			var c, d, e;
			return "string" == typeof b && (e = a[b], b = a, a = e), fb.isFunction(a) ? (c = X.call(arguments, 2), d = function () {
				return a.apply(b || this, c.concat(X.call(arguments)))
			}, d.guid = a.guid = a.guid || fb.guid++, d) : void 0
		}, now: function () {
			return +new Date
		}, support: db
	}), fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		_["[object " + b + "]"] = b.toLowerCase()
	});
	var kb = function (a) {
		function b(a, b, c, d) {
			var e, f, g, h, i, j, l, o, p, q;
			if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a)return c;
			if (1 !== (h = b.nodeType) && 9 !== h)return [];
			if (I && !d) {
				if (e = sb.exec(a))if (g = e[1]) {
					if (9 === h) {
						if (f = b.getElementById(g), !f || !f.parentNode)return c;
						if (f.id === g)return c.push(f), c
					} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)return c.push(f), c
				} else {
					if (e[2])return _.apply(c, b.getElementsByTagName(a)), c;
					if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName)return _.apply(c, b.getElementsByClassName(g)), c
				}
				if (x.qsa && (!J || !J.test(a))) {
					if (o = l = N, p = b, q = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
						for (j = m(a), (l = b.getAttribute("id")) ? o = l.replace(ub, "\\$&") : b.setAttribute("id", o), o = "[id='" + o + "'] ", i = j.length; i--;)j[i] = o + n(j[i]);
						p = tb.test(a) && k(b.parentNode) || b, q = j.join(",")
					}
					if (q)try {
						return _.apply(c, p.querySelectorAll(q)), c
					} catch (r) {
					} finally {
						l || b.removeAttribute("id")
					}
				}
			}
			return v(a.replace(ib, "$1"), b, c, d)
		}

		function c() {
			function a(c, d) {
				return b.push(c + " ") > y.cacheLength && delete a[b.shift()], a[c + " "] = d
			}

			var b = [];
			return a
		}

		function d(a) {
			return a[N] = !0, a
		}

		function e(a) {
			var b = G.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function f(a, b) {
			for (var c = a.split("|"), d = a.length; d--;)y.attrHandle[c[d]] = b
		}

		function g(a, b) {
			var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
			if (d)return d;
			if (c)for (; c = c.nextSibling;)if (c === b)return -1;
			return a ? 1 : -1
		}

		function h(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function i(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function j(a) {
			return d(function (b) {
				return b = +b, d(function (c, d) {
					for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function k(a) {
			return a && typeof a.getElementsByTagName !== V && a
		}

		function l() {
		}

		function m(a, c) {
			var d, e, f, g, h, i, j, k = S[a + " "];
			if (k)return c ? 0 : k.slice(0);
			for (h = a, i = [], j = y.preFilter; h;) {
				(!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({value: d, type: e[0].replace(ib, " ")}), h = h.slice(d.length));
				for (g in y.filter)!(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({value: d, type: g, matches: e}), h = h.slice(d.length));
				if (!d)break
			}
			return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
		}

		function n(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
			return d
		}

		function o(a, b, c) {
			var d = b.dir, e = c && "parentNode" === d, f = Q++;
			return b.first ? function (b, c, f) {
				for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, f)
			} : function (b, c, g) {
				var h, i, j = [P, f];
				if (g) {
					for (; b = b[d];)if ((1 === b.nodeType || e) && a(b, c, g))return !0
				} else for (; b = b[d];)if (1 === b.nodeType || e) {
					if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)return j[2] = h[2];
					if (i[d] = j, j[2] = a(b, c, g))return !0
				}
			}
		}

		function p(a) {
			return a.length > 1 ? function (b, c, d) {
				for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
				return !0
			} : a[0]
		}

		function q(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function r(a, b, c, e, f, g) {
			return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
				var j, k, l, m = [], n = [], o = g.length, p = d || u(b || "*", h.nodeType ? [h] : h, []), r = !a || !d && b ? p : q(p, m, a, h, i), s = c ? f || (d ? a : o || e) ? [] : g : r;
				if (c && c(r, s, h, i), e)for (j = q(s, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
				if (d) {
					if (f || a) {
						if (f) {
							for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
							f(null, s = [], j, i)
						}
						for (k = s.length; k--;)(l = s[k]) && (j = f ? bb.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
					}
				} else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : _.apply(g, s)
			})
		}

		function s(a) {
			for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = o(function (a) {
				return a === b
			}, g, !0), j = o(function (a) {
				return bb.call(b, a) > -1
			}, g, !0), k = [function (a, c, d) {
				return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
			}]; e > h; h++)if (c = y.relative[a[h].type])k = [o(p(k), c)]; else {
				if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
					for (d = ++h; e > d && !y.relative[a[d].type]; d++);
					return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
				}
				k.push(c)
			}
			return p(k)
		}

		function t(a, c) {
			var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
				var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && y.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
				for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
					if (f && k) {
						for (l = 0; m = a[l++];)if (m(k, g, h)) {
							i.push(k);
							break
						}
						j && (P = u)
					}
					e && ((k = !m && k) && n--, d && p.push(k))
				}
				if (n += o, e && o !== n) {
					for (l = 0; m = c[l++];)m(p, r, g, h);
					if (d) {
						if (n > 0)for (; o--;)p[o] || r[o] || (r[o] = Z.call(i));
						r = q(r)
					}
					_.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
				}
				return j && (P = u, C = s), p
			};
			return e ? d(g) : g
		}

		function u(a, c, d) {
			for (var e = 0, f = c.length; f > e; e++)b(a, c[e], d);
			return d
		}

		function v(a, b, c, d) {
			var e, f, g, h, i, j = m(a);
			if (!d && 1 === j.length) {
				if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && y.relative[f[1].type]) {
					if (b = (y.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b)return c;
					a = a.slice(f.shift().value.length)
				}
				for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)if ((i = y.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
					if (f.splice(e, 1), a = d.length && n(f), !a)return _.apply(c, d), c;
					break
				}
			}
			return B(a, j)(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c
		}

		var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
			return a === b && (E = !0), 0
		}, V = "undefined", W = 1 << 31, X = {}.hasOwnProperty, Y = [], Z = Y.pop, $ = Y.push, _ = Y.push, ab = Y.slice, bb = Y.indexOf || function (a) {
				for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
				return -1
			}, cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", db = "[\\x20\\t\\r\\n\\f]", eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fb = eb.replace("w", "w#"), gb = "\\[" + db + "*(" + eb + ")" + db + "*(?:([*^$|!~]?=)" + db + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fb + ")|)|)" + db + "*\\]", hb = ":(" + eb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + gb.replace(3, 8) + ")*)|.*)\\)|)", ib = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$", "g"), jb = new RegExp("^" + db + "*," + db + "*"), kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"), lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]", "g"), mb = new RegExp(hb), nb = new RegExp("^" + fb + "$"), ob = {
			ID: new RegExp("^#(" + eb + ")"),
			CLASS: new RegExp("^\\.(" + eb + ")"),
			TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + gb),
			PSEUDO: new RegExp("^" + hb),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)", "i"),
			bool: new RegExp("^(?:" + cb + ")$", "i"),
			needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)", "i")
		}, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)", "ig"), wb = function (a, b, c) {
			var d = "0x" + b - 65536;
			return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
		};
		try {
			_.apply(Y = ab.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
		} catch (xb) {
			_ = {
				apply: Y.length ? function (a, b) {
					$.apply(a, ab.call(b))
				} : function (a, b) {
					for (var c = a.length, d = 0; a[c++] = b[d++];);
					a.length = c - 1
				}
			}
		}
		x = b.support = {}, A = b.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, F = b.setDocument = function (a) {
			var b, c = a ? a.ownerDocument || a : O, d = c.defaultView;
			return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !A(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function () {
				F()
			}, !1) : d.attachEvent && d.attachEvent("onunload", function () {
				F()
			})), x.attributes = e(function (a) {
				return a.className = "i", !a.getAttribute("className")
			}), x.getElementsByTagName = e(function (a) {
				return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
			}), x.getElementsByClassName = rb.test(c.getElementsByClassName) && e(function (a) {
					return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
				}), x.getById = e(function (a) {
				return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
			}), x.getById ? (y.find.ID = function (a, b) {
				if (typeof b.getElementById !== V && I) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, y.filter.ID = function (a) {
				var b = a.replace(vb, wb);
				return function (a) {
					return a.getAttribute("id") === b
				}
			}) : (delete y.find.ID, y.filter.ID = function (a) {
				var b = a.replace(vb, wb);
				return function (a) {
					var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), y.find.TAG = x.getElementsByTagName ? function (a, b) {
				return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
			} : function (a, b) {
				var c, d = [], e = 0, f = b.getElementsByTagName(a);
				if ("*" === a) {
					for (; c = f[e++];)1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, y.find.CLASS = x.getElementsByClassName && function (a, b) {
					return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
				}, K = [], J = [], (x.qsa = rb.test(c.querySelectorAll)) && (e(function (a) {
				a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
			}), e(function (a) {
				var b = c.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
			})), (x.matchesSelector = rb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
				x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", hb)
			}), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)for (; b = b.parentNode;)if (b === a)return !0;
				return !1
			}, U = b ? function (a, b) {
				if (a === b)return E = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0 : 4 & d ? -1 : 1)
			} : function (a, b) {
				if (a === b)return E = !0, 0;
				var d, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
				if (!f || !h)return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0;
				if (f === h)return g(a, b);
				for (d = a; d = d.parentNode;)i.unshift(d);
				for (d = b; d = d.parentNode;)j.unshift(d);
				for (; i[e] === j[e];)e++;
				return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
			}, c) : G
		}, b.matches = function (a, c) {
			return b(a, null, null, c)
		}, b.matchesSelector = function (a, c) {
			if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!x.matchesSelector || !I || K && K.test(c) || J && J.test(c)))try {
				var d = L.call(a, c);
				if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
			} catch (e) {
			}
			return b(c, G, null, [a]).length > 0
		}, b.contains = function (a, b) {
			return (a.ownerDocument || a) !== G && F(a), M(a, b)
		}, b.attr = function (a, b) {
			(a.ownerDocument || a) !== G && F(a);
			var c = y.attrHandle[b.toLowerCase()], d = c && X.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
			return void 0 !== d ? d : x.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}, b.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, b.uniqueSort = function (a) {
			var b, c = [], d = 0, e = 0;
			if (E = !x.detectDuplicates, D = !x.sortStable && a.slice(0), a.sort(U), E) {
				for (; b = a[e++];)b === a[e] && (d = c.push(e));
				for (; d--;)a.splice(c[d], 1)
			}
			return D = null, a
		}, z = b.getText = function (a) {
			var b, c = "", d = 0, e = a.nodeType;
			if (e) {
				if (1 === e || 9 === e || 11 === e) {
					if ("string" == typeof a.textContent)return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling)c += z(a)
				} else if (3 === e || 4 === e)return a.nodeValue
			} else for (; b = a[d++];)c += z(b);
			return c
		}, y = b.selectors = {
			cacheLength: 50,
			createPseudo: d,
			match: ob,
			attrHandle: {},
			find: {},
			relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}},
			preFilter: {
				ATTR: function (a) {
					return a[1] = a[1].replace(vb, wb), a[3] = (a[4] || a[5] || "").replace(vb, wb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				}, CHILD: function (a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
				}, PSEUDO: function (a) {
					var b, c = !a[5] && a[2];
					return ob.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && mb.test(c) && (b = m(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function (a) {
					var b = a.replace(vb, wb).toLowerCase();
					return "*" === a ? function () {
						return !0
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				}, CLASS: function (a) {
					var b = R[a + " "];
					return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a, function (a) {
							return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
						})
				}, ATTR: function (a, c, d) {
					return function (e) {
						var f = b.attr(e, a);
						return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
					}
				}, CHILD: function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode
					} : function (b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
						if (q) {
							if (f) {
								for (; p;) {
									for (l = b; l = l[p];)if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)if (1 === l.nodeType && ++m && l === b) {
									k[a] = [P, n, m];
									break
								}
							} else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)m = j[1]; else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
							return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				}, PSEUDO: function (a, c) {
					var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
					return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
						for (var d, e = f(a, c), g = e.length; g--;)d = bb.call(a, e[g]), a[d] = !(b[d] = e[g])
					}) : function (a) {
						return f(a, 0, e)
					}) : f
				}
			},
			pseudos: {
				not: d(function (a) {
					var b = [], c = [], e = B(a.replace(ib, "$1"));
					return e[N] ? d(function (a, b, c, d) {
						for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, d, f) {
						return b[0] = a, e(b, null, f, c), !c.pop()
					}
				}), has: d(function (a) {
					return function (c) {
						return b(a, c).length > 0
					}
				}), contains: d(function (a) {
					return function (b) {
						return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
					}
				}), lang: d(function (a) {
					return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(), function (b) {
						var c;
						do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
						return !1
					}
				}), target: function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				}, root: function (a) {
					return a === H
				}, focus: function (a) {
					return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				}, enabled: function (a) {
					return a.disabled === !1
				}, disabled: function (a) {
					return a.disabled === !0
				}, checked: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				}, selected: function (a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				}, empty: function (a) {
					for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
					return !0
				}, parent: function (a) {
					return !y.pseudos.empty(a)
				}, header: function (a) {
					return qb.test(a.nodeName)
				}, input: function (a) {
					return pb.test(a.nodeName)
				}, button: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				}, text: function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				}, first: j(function () {
					return [0]
				}), last: j(function (a, b) {
					return [b - 1]
				}), eq: j(function (a, b, c) {
					return [0 > c ? c + b : c]
				}), even: j(function (a, b) {
					for (var c = 0; b > c; c += 2)a.push(c);
					return a
				}), odd: j(function (a, b) {
					for (var c = 1; b > c; c += 2)a.push(c);
					return a
				}), lt: j(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
					return a
				}), gt: j(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
					return a
				})
			}
		}, y.pseudos.nth = y.pseudos.eq;
		for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})y.pseudos[w] = h(w);
		for (w in{submit: !0, reset: !0})y.pseudos[w] = i(w);
		return l.prototype = y.filters = y.pseudos, y.setFilters = new l, B = b.compile = function (a, b) {
			var c, d = [], e = [], f = T[a + " "];
			if (!f) {
				for (b || (b = m(a)), c = b.length; c--;)f = s(b[c]), f[N] ? d.push(f) : e.push(f);
				f = T(a, t(e, d))
			}
			return f
		}, x.sortStable = N.split("").sort(U).join("") === N, x.detectDuplicates = !!E, F(), x.sortDetached = e(function (a) {
			return 1 & a.compareDocumentPosition(G.createElement("div"))
		}), e(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || f("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), x.attributes && e(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || f("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), e(function (a) {
			return null == a.getAttribute("disabled")
		}) || f(cb, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), b
	}(a);
	fb.find = kb, fb.expr = kb.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = kb.uniqueSort, fb.text = kb.getText, fb.isXMLDoc = kb.isXML, fb.contains = kb.contains;
	var lb = fb.expr.match.needsContext, mb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, nb = /^.[^:#\[\.,]*$/;
	fb.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [d] : [] : fb.find.matches(a, fb.grep(b, function (a) {
			return 1 === a.nodeType
		}))
	}, fb.fn.extend({
		find: function (a) {
			var b, c = [], d = this, e = d.length;
			if ("string" != typeof a)return this.pushStack(fb(a).filter(function () {
				for (b = 0; e > b; b++)if (fb.contains(d[b], this))return !0
			}));
			for (b = 0; e > b; b++)fb.find(a, d[b], c);
			return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
		}, filter: function (a) {
			return this.pushStack(d(this, a || [], !1))
		}, not: function (a) {
			return this.pushStack(d(this, a || [], !0))
		}, is: function (a) {
			return !!d(this, "string" == typeof a && lb.test(a) ? fb(a) : a || [], !1).length
		}
	});
	var ob, pb = a.document, qb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, rb = fb.fn.init = function (a, b) {
		var c, d;
		if (!a)return this;
		if ("string" == typeof a) {
			if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : qb.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || ob).find(a) : this.constructor(b).find(a);
			if (c[1]) {
				if (b = b instanceof fb ? b[0] : b, fb.merge(this, fb.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : pb, !0)), mb.test(c[1]) && fb.isPlainObject(b))for (c in b)fb.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
				return this
			}
			if (d = pb.getElementById(c[2]), d && d.parentNode) {
				if (d.id !== c[2])return ob.find(a);
				this.length = 1, this[0] = d
			}
			return this.context = pb, this.selector = a, this
		}
		return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? "undefined" != typeof ob.ready ? ob.ready(a) : a(fb) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fb.makeArray(a, this))
	};
	rb.prototype = fb.fn, ob = fb(pb);
	var sb = /^(?:parents|prev(?:Until|All))/, tb = {children: !0, contents: !0, next: !0, prev: !0};
	fb.extend({
		dir: function (a, b, c) {
			for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !fb(e).is(c));)1 === e.nodeType && d.push(e), e = e[b];
			return d
		}, sibling: function (a, b) {
			for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), fb.fn.extend({
		has: function (a) {
			var b, c = fb(a, this), d = c.length;
			return this.filter(function () {
				for (b = 0; d > b; b++)if (fb.contains(this, c[b]))return !0
			})
		}, closest: function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = lb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
				f.push(c);
				break
			}
			return this.pushStack(f.length > 1 ? fb.unique(f) : f)
		}, index: function (a) {
			return a ? "string" == typeof a ? fb.inArray(this[0], fb(a)) : fb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		}, add: function (a, b) {
			return this.pushStack(fb.unique(fb.merge(this.get(), fb(a, b))))
		}, addBack: function (a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}), fb.each({
		parent: function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		}, parents: function (a) {
			return fb.dir(a, "parentNode")
		}, parentsUntil: function (a, b, c) {
			return fb.dir(a, "parentNode", c)
		}, next: function (a) {
			return e(a, "nextSibling")
		}, prev: function (a) {
			return e(a, "previousSibling")
		}, nextAll: function (a) {
			return fb.dir(a, "nextSibling")
		}, prevAll: function (a) {
			return fb.dir(a, "previousSibling")
		}, nextUntil: function (a, b, c) {
			return fb.dir(a, "nextSibling", c)
		}, prevUntil: function (a, b, c) {
			return fb.dir(a, "previousSibling", c)
		}, siblings: function (a) {
			return fb.sibling((a.parentNode || {}).firstChild, a)
		}, children: function (a) {
			return fb.sibling(a.firstChild)
		}, contents: function (a) {
			return fb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : fb.merge([], a.childNodes)
		}
	}, function (a, b) {
		fb.fn[a] = function (c, d) {
			var e = fb.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), this.length > 1 && (tb[a] || (e = fb.unique(e)), sb.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	});
	var ub = /\S+/g, vb = {};
	fb.Callbacks = function (a) {
		a = "string" == typeof a ? vb[a] || f(a) : fb.extend({}, a);
		var b, c, d, e, g, h, i = [], j = !a.once && [], k = function (f) {
			for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
				c = !1;
				break
			}
			b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
		}, l = {
			add: function () {
				if (i) {
					var d = i.length;
					!function f(b) {
						fb.each(b, function (b, c) {
							var d = fb.type(c);
							"function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
						})
					}(arguments), b ? e = i.length : c && (h = d, k(c))
				}
				return this
			}, remove: function () {
				return i && fb.each(arguments, function (a, c) {
					for (var d; (d = fb.inArray(c, i, d)) > -1;)i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
				}), this
			}, has: function (a) {
				return a ? fb.inArray(a, i) > -1 : !(!i || !i.length)
			}, empty: function () {
				return i = [], e = 0, this
			}, disable: function () {
				return i = j = c = void 0, this
			}, disabled: function () {
				return !i
			}, lock: function () {
				return j = void 0, c || l.disable(), this
			}, locked: function () {
				return !j
			}, fireWith: function (a, c) {
				return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
			}, fire: function () {
				return l.fireWith(this, arguments), this
			}, fired: function () {
				return !!d
			}
		};
		return l
	}, fb.extend({
		Deferred: function (a) {
			var b = [["resolve", "done", fb.Callbacks("once memory"), "resolved"], ["reject", "fail", fb.Callbacks("once memory"), "rejected"], ["notify", "progress", fb.Callbacks("memory")]], c = "pending", d = {
				state: function () {
					return c
				}, always: function () {
					return e.done(arguments).fail(arguments), this
				}, then: function () {
					var a = arguments;
					return fb.Deferred(function (c) {
						fb.each(b, function (b, f) {
							var g = fb.isFunction(a[b]) && a[b];
							e[f[1]](function () {
								var a = g && g.apply(this, arguments);
								a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
							})
						}), a = null
					}).promise()
				}, promise: function (a) {
					return null != a ? fb.extend(a, d) : d
				}
			}, e = {};
			return d.pipe = d.then, fb.each(b, function (a, f) {
				var g = f[2], h = f[3];
				d[f[1]] = g.add, h && g.add(function () {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		}, when: function (a) {
			var b, c, d, e = 0, f = X.call(arguments), g = f.length, h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fb.Deferred(), j = function (a, c, d) {
				return function (e) {
					c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
				}
			};
			if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
			return h || i.resolveWith(d, f), i.promise()
		}
	});
	var wb;
	fb.fn.ready = function (a) {
		return fb.ready.promise().done(a), this
	}, fb.extend({
		isReady: !1, readyWait: 1, holdReady: function (a) {
			a ? fb.readyWait++ : fb.ready(!0)
		}, ready: function (a) {
			if (a === !0 ? !--fb.readyWait : !fb.isReady) {
				if (!pb.body)return setTimeout(fb.ready);
				fb.isReady = !0, a !== !0 && --fb.readyWait > 0 || (wb.resolveWith(pb, [fb]), fb.fn.trigger && fb(pb).trigger("ready").off("ready"))
			}
		}
	}), fb.ready.promise = function (b) {
		if (!wb)if (wb = fb.Deferred(), "complete" === pb.readyState)setTimeout(fb.ready); else if (pb.addEventListener)pb.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1); else {
			pb.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
			var c = !1;
			try {
				c = null == a.frameElement && pb.documentElement
			} catch (d) {
			}
			c && c.doScroll && !function e() {
				if (!fb.isReady) {
					try {
						c.doScroll("left")
					} catch (a) {
						return setTimeout(e, 50)
					}
					g(), fb.ready()
				}
			}()
		}
		return wb.promise(b)
	};
	var xb, yb = "undefined";
	for (xb in fb(db))break;
	db.ownLast = "0" !== xb, db.inlineBlockNeedsLayout = !1, fb(function () {
		var a, b, c = pb.getElementsByTagName("body")[0];
		c && (a = pb.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = pb.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== yb && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (db.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
	}), function () {
		var a = pb.createElement("div");
		if (null == db.deleteExpando) {
			db.deleteExpando = !0;
			try {
				delete a.test
			} catch (b) {
				db.deleteExpando = !1
			}
		}
		a = null
	}(), fb.acceptData = function (a) {
		var b = fb.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
		return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
	};
	var zb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ab = /([A-Z])/g;
	fb.extend({
		cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (a) {
			return a = a.nodeType ? fb.cache[a[fb.expando]] : a[fb.expando], !!a && !j(a)
		}, data: function (a, b, c) {
			return k(a, b, c)
		}, removeData: function (a, b) {
			return l(a, b)
		}, _data: function (a, b, c) {
			return k(a, b, c, !0)
		}, _removeData: function (a, b) {
			return l(a, b, !0)
		}
	}), fb.fn.extend({
		data: function (a, b) {
			var c, d, e, f = this[0], g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = fb.data(f), 1 === f.nodeType && !fb._data(f, "parsedAttrs"))) {
					for (c = g.length; c--;)d = g[c].name, 0 === d.indexOf("data-") && (d = fb.camelCase(d.slice(5)), i(f, d, e[d]));
					fb._data(f, "parsedAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function () {
				fb.data(this, a)
			}) : arguments.length > 1 ? this.each(function () {
				fb.data(this, a, b)
			}) : f ? i(f, a, fb.data(f, a)) : void 0
		}, removeData: function (a) {
			return this.each(function () {
				fb.removeData(this, a)
			})
		}
	}), fb.extend({
		queue: function (a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = fb._data(a, b), c && (!d || fb.isArray(c) ? d = fb._data(a, b, fb.makeArray(c)) : d.push(c)), d || []) : void 0
		}, dequeue: function (a, b) {
			b = b || "fx";
			var c = fb.queue(a, b), d = c.length, e = c.shift(), f = fb._queueHooks(a, b), g = function () {
				fb.dequeue(a, b)
			};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		}, _queueHooks: function (a, b) {
			var c = b + "queueHooks";
			return fb._data(a, c) || fb._data(a, c, {
					empty: fb.Callbacks("once memory").add(function () {
						fb._removeData(a, b + "queue"), fb._removeData(a, c)
					})
				})
		}
	}), fb.fn.extend({
		queue: function (a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fb.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = fb.queue(this, a, b);
				fb._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fb.dequeue(this, a)
			})
		}, dequeue: function (a) {
			return this.each(function () {
				fb.dequeue(this, a)
			})
		}, clearQueue: function (a) {
			return this.queue(a || "fx", [])
		}, promise: function (a, b) {
			var c, d = 1, e = fb.Deferred(), f = this, g = this.length, h = function () {
				--d || e.resolveWith(f, [f])
			};
			for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)c = fb._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var Bb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Cb = ["Top", "Right", "Bottom", "Left"], Db = function (a, b) {
		return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a)
	}, Eb = fb.access = function (a, b, c, d, e, f, g) {
		var h = 0, i = a.length, j = null == c;
		if ("object" === fb.type(c)) {
			e = !0;
			for (h in c)fb.access(a, b, h, c[h], !0, f, g)
		} else if (void 0 !== d && (e = !0, fb.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
				return j.call(fb(a), c)
			})), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	}, Fb = /^(?:checkbox|radio)$/i;
	!function () {
		var a = pb.createDocumentFragment(), b = pb.createElement("div"), c = pb.createElement("input");
		if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", db.leadingWhitespace = 3 === b.firstChild.nodeType, db.tbody = !b.getElementsByTagName("tbody").length, db.htmlSerialize = !!b.getElementsByTagName("link").length, db.html5Clone = "<:nav></:nav>" !== pb.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), db.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", db.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", db.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, db.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
				db.noCloneEvent = !1
			}), b.cloneNode(!0).click()), null == db.deleteExpando) {
			db.deleteExpando = !0;
			try {
				delete b.test
			} catch (d) {
				db.deleteExpando = !1
			}
		}
		a = b = c = null
	}(), function () {
		var b, c, d = pb.createElement("div");
		for (b in{submit: !0, change: !0, focusin: !0})c = "on" + b, (db[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), db[b + "Bubbles"] = d.attributes[c].expando === !1);
		d = null
	}();
	var Gb = /^(?:input|select|textarea)$/i, Hb = /^key/, Ib = /^(?:mouse|contextmenu)|click/, Jb = /^(?:focusinfocus|focusoutblur)$/, Kb = /^([^.]*)(?:\.(.+)|)$/;
	fb.event = {
		global: {},
		add: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = fb._data(a);
			if (q) {
				for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = fb.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function (a) {
					return typeof fb === yb || a && fb.event.triggered === a.type ? void 0 : fb.event.dispatch.apply(k.elem, arguments)
				}, k.elem = a), b = (b || "").match(ub) || [""], h = b.length; h--;)f = Kb.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = fb.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = fb.event.special[n] || {}, l = fb.extend({
					type: n,
					origType: p,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && fb.expr.match.needsContext.test(e),
					namespace: o.join(".")
				}, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), fb.event.global[n] = !0);
				a = null
			}
		},
		remove: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = fb.hasData(a) && fb._data(a);
			if (q && (k = q.events)) {
				for (b = (b || "").match(ub) || [""], j = b.length; j--;)if (h = Kb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
					for (l = fb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;)g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
					i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), delete k[n])
				} else for (n in k)fb.event.remove(a, n + b[j], c, d, !0);
				fb.isEmptyObject(k) && (delete q.handle, fb._removeData(a, "events"))
			}
		},
		trigger: function (b, c, d, e) {
			var f, g, h, i, j, k, l, m = [d || pb], n = bb.call(b, "type") ? b.type : b, o = bb.call(b, "namespace") ? b.namespace.split(".") : [];
			if (h = k = d = d || pb, 3 !== d.nodeType && 8 !== d.nodeType && !Jb.test(n + fb.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[fb.expando] ? b : new fb.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fb.makeArray(c, [b]), j = fb.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
				if (!e && !j.noBubble && !fb.isWindow(d)) {
					for (i = j.delegateType || n, Jb.test(i + n) || (h = h.parentNode); h; h = h.parentNode)m.push(h), k = h;
					k === (d.ownerDocument || pb) && m.push(k.defaultView || k.parentWindow || a)
				}
				for (l = 0; (h = m[l++]) && !b.isPropagationStopped();)b.type = l > 1 ? i : j.bindType || n, f = (fb._data(h, "events") || {})[b.type] && fb._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && fb.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
				if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && fb.acceptData(d) && g && d[n] && !fb.isWindow(d)) {
					k = d[g], k && (d[g] = null), fb.event.triggered = n;
					try {
						d[n]()
					} catch (p) {
					}
					fb.event.triggered = void 0, k && (d[g] = k)
				}
				return b.result
			}
		},
		dispatch: function (a) {
			a = fb.event.fix(a);
			var b, c, d, e, f, g = [], h = X.call(arguments), i = (fb._data(this, "events") || {})[a.type] || [], j = fb.event.special[a.type] || {};
			if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
				for (g = fb.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();)for (a.currentTarget = e.elem, f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((fb.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
				return j.postDispatch && j.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (a, b) {
			var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
				for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? fb(c, this).index(i) >= 0 : fb.find(c, this, null, [i]).length), e[c] && e.push(d);
				e.length && g.push({elem: i, handlers: e})
			}
			return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
		},
		fix: function (a) {
			if (a[fb.expando])return a;
			var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
			for (g || (this.fixHooks[e] = g = Ib.test(e) ? this.mouseHooks : Hb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fb.Event(f), b = d.length; b--;)c = d[b], a[c] = f[c];
			return a.target || (a.target = f.srcElement || pb), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "), filter: function (a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
				var c, d, e, f = b.button, g = b.fromElement;
				return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || pb, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		special: {
			load: {noBubble: !0}, focus: {
				trigger: function () {
					if (this !== o() && this.focus)try {
						return this.focus(), !1
					} catch (a) {
					}
				}, delegateType: "focusin"
			}, blur: {
				trigger: function () {
					return this === o() && this.blur ? (this.blur(), !1) : void 0
				}, delegateType: "focusout"
			}, click: {
				trigger: function () {
					return fb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				}, _default: function (a) {
					return fb.nodeName(a.target, "a")
				}
			}, beforeunload: {
				postDispatch: function (a) {
					void 0 !== a.result && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function (a, b, c, d) {
			var e = fb.extend(new fb.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
			d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, fb.removeEvent = pb.removeEventListener ? function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function (a, b, c) {
		var d = "on" + b;
		a.detachEvent && (typeof a[d] === yb && (a[d] = null), a.detachEvent(d, c))
	}, fb.Event = function (a, b) {
		return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? m : n) : this.type = a, b && fb.extend(this, b), this.timeStamp = a && a.timeStamp || fb.now(), void(this[fb.expando] = !0)) : new fb.Event(a, b)
	}, fb.Event.prototype = {
		isDefaultPrevented: n, isPropagationStopped: n, isImmediatePropagationStopped: n, preventDefault: function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		}, stopPropagation: function () {
			var a = this.originalEvent;
			this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		}, stopImmediatePropagation: function () {
			this.isImmediatePropagationStopped = m, this.stopPropagation()
		}
	}, fb.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
		fb.event.special[a] = {
			delegateType: b, bindType: b, handle: function (a) {
				var c, d = this, e = a.relatedTarget, f = a.handleObj;
				return (!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), db.submitBubbles || (fb.event.special.submit = {
		setup: function () {
			return fb.nodeName(this, "form") ? !1 : void fb.event.add(this, "click._submit keypress._submit", function (a) {
				var b = a.target, c = fb.nodeName(b, "input") || fb.nodeName(b, "button") ? b.form : void 0;
				c && !fb._data(c, "submitBubbles") && (fb.event.add(c, "submit._submit", function (a) {
					a._submit_bubble = !0
				}), fb._data(c, "submitBubbles", !0))
			})
		}, postDispatch: function (a) {
			a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && fb.event.simulate("submit", this.parentNode, a, !0))
		}, teardown: function () {
			return fb.nodeName(this, "form") ? !1 : void fb.event.remove(this, "._submit")
		}
	}), db.changeBubbles || (fb.event.special.change = {
		setup: function () {
			return Gb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fb.event.add(this, "propertychange._change", function (a) {
				"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
			}), fb.event.add(this, "click._change", function (a) {
				this._just_changed && !a.isTrigger && (this._just_changed = !1), fb.event.simulate("change", this, a, !0)
			})), !1) : void fb.event.add(this, "beforeactivate._change", function (a) {
				var b = a.target;
				Gb.test(b.nodeName) && !fb._data(b, "changeBubbles") && (fb.event.add(b, "change._change", function (a) {
					!this.parentNode || a.isSimulated || a.isTrigger || fb.event.simulate("change", this.parentNode, a, !0)
				}), fb._data(b, "changeBubbles", !0))
			})
		}, handle: function (a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		}, teardown: function () {
			return fb.event.remove(this, "._change"), !Gb.test(this.nodeName)
		}
	}), db.focusinBubbles || fb.each({focus: "focusin", blur: "focusout"}, function (a, b) {
		var c = function (a) {
			fb.event.simulate(b, a.target, fb.event.fix(a), !0)
		};
		fb.event.special[b] = {
			setup: function () {
				var d = this.ownerDocument || this, e = fb._data(d, b);
				e || d.addEventListener(a, c, !0), fb._data(d, b, (e || 0) + 1)
			}, teardown: function () {
				var d = this.ownerDocument || this, e = fb._data(d, b) - 1;
				e ? fb._data(d, b, e) : (d.removeEventListener(a, c, !0), fb._removeData(d, b))
			}
		}
	}), fb.fn.extend({
		on: function (a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (f in a)this.on(f, b, c, a[f], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = n; else if (!d)return this;
			return 1 === e && (g = d, d = function (a) {
				return fb().off(a), g.apply(this, arguments)
			}, d.guid = g.guid || (g.guid = fb.guid++)), this.each(function () {
				fb.event.add(this, a, d, c, b)
			})
		}, one: function (a, b, c, d) {
			return this.on(a, b, c, d, 1)
		}, off: function (a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj)return d = a.handleObj, fb(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a)this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function () {
				fb.event.remove(this, a, c, b)
			})
		}, trigger: function (a, b) {
			return this.each(function () {
				fb.event.trigger(a, b, this)
			})
		}, triggerHandler: function (a, b) {
			var c = this[0];
			return c ? fb.event.trigger(a, b, c, !0) : void 0
		}
	});
	var Lb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Mb = / jQuery\d+="(?:null|\d+)"/g, Nb = new RegExp("<(?:" + Lb + ")[\\s/>]", "i"), Ob = /^\s+/, Pb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Qb = /<([\w:]+)/, Rb = /<tbody/i, Sb = /<|&#?\w+;/, Tb = /<(?:script|style|link)/i, Ub = /checked\s*(?:[^=]|=\s*.checked.)/i, Vb = /^$|\/(?:java|ecma)script/i, Wb = /^true\/(.*)/, Xb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Yb = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: db.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	}, Zb = p(pb), $b = Zb.appendChild(pb.createElement("div"));
	Yb.optgroup = Yb.option, Yb.tbody = Yb.tfoot = Yb.colgroup = Yb.caption = Yb.thead, Yb.th = Yb.td, fb.extend({
		clone: function (a, b, c) {
			var d, e, f, g, h, i = fb.contains(a.ownerDocument, a);
			if (db.html5Clone || fb.isXMLDoc(a) || !Nb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : ($b.innerHTML = a.outerHTML, $b.removeChild(f = $b.firstChild)), !(db.noCloneEvent && db.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a)))for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g)d[g] && x(e, d[g]);
			if (b)if (c)for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++)w(e, d[g]); else w(a, f);
			return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
		}, buildFragment: function (a, b, c, d) {
			for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)if (f = a[o], f || 0 === f)if ("object" === fb.type(f))fb.merge(n, f.nodeType ? [f] : f); else if (Sb.test(f)) {
				for (h = h || m.appendChild(b.createElement("div")), i = (Qb.exec(f) || ["", ""])[1].toLowerCase(), k = Yb[i] || Yb._default, h.innerHTML = k[1] + f.replace(Pb, "<$1></$2>") + k[2], e = k[0]; e--;)h = h.lastChild;
				if (!db.leadingWhitespace && Ob.test(f) && n.push(b.createTextNode(Ob.exec(f)[0])), !db.tbody)for (f = "table" !== i || Rb.test(f) ? "<table>" !== k[1] || Rb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;)fb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
				for (fb.merge(n, h.childNodes), h.textContent = ""; h.firstChild;)h.removeChild(h.firstChild);
				h = m.lastChild
			} else n.push(b.createTextNode(f));
			for (h && m.removeChild(h), db.appendChecked || fb.grep(q(n, "input"), r), o = 0; f = n[o++];)if ((!d || -1 === fb.inArray(f, d)) && (g = fb.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))for (e = 0; f = h[e++];)Vb.test(f.type || "") && c.push(f);
			return h = null, m
		}, cleanData: function (a, b) {
			for (var c, d, e, f, g = 0, h = fb.expando, i = fb.cache, j = db.deleteExpando, k = fb.event.special; null != (c = a[g]); g++)if ((b || fb.acceptData(c)) && (e = c[h], f = e && i[e])) {
				if (f.events)for (d in f.events)k[d] ? fb.event.remove(c, d) : fb.removeEvent(c, d, f.handle);
				i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== yb ? c.removeAttribute(h) : c[h] = null, W.push(e))
			}
		}
	}), fb.fn.extend({
		text: function (a) {
			return Eb(this, function (a) {
				return void 0 === a ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pb).createTextNode(a))
			}, null, a, arguments.length)
		}, append: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = s(this, a);
					b.appendChild(a)
				}
			})
		}, prepend: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = s(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		}, before: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		}, after: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		}, remove: function (a, b) {
			for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || fb.cleanData(q(c)), c.parentNode && (b && fb.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
			return this
		}, empty: function () {
			for (var a, b = 0; null != (a = this[b]); b++) {
				for (1 === a.nodeType && fb.cleanData(q(a, !1)); a.firstChild;)a.removeChild(a.firstChild);
				a.options && fb.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		}, clone: function (a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return fb.clone(this, a, b)
			})
		}, html: function (a) {
			return Eb(this, function (a) {
				var b = this[0] || {}, c = 0, d = this.length;
				if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(Mb, "") : void 0;
				if (!("string" != typeof a || Tb.test(a) || !db.htmlSerialize && Nb.test(a) || !db.leadingWhitespace && Ob.test(a) || Yb[(Qb.exec(a) || ["", ""])[1].toLowerCase()])) {
					a = a.replace(Pb, "<$1></$2>");
					try {
						for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (fb.cleanData(q(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {
					}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		}, replaceWith: function () {
			var a = arguments[0];
			return this.domManip(arguments, function (b) {
				a = this.parentNode, fb.cleanData(q(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		}, detach: function (a) {
			return this.remove(a, !0)
		}, domManip: function (a, b) {
			a = Y.apply([], a);
			var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = fb.isFunction(m);
			if (n || j > 1 && "string" == typeof m && !db.checkClone && Ub.test(m))return this.each(function (c) {
				var d = k.eq(c);
				n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
			});
			if (j && (h = fb.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
				for (f = fb.map(q(h, "script"), t), e = f.length; j > i; i++)d = h, i !== l && (d = fb.clone(d, !0, !0), e && fb.merge(f, q(d, "script"))), b.call(this[i], d, i);
				if (e)for (g = f[f.length - 1].ownerDocument, fb.map(f, u), i = 0; e > i; i++)d = f[i], Vb.test(d.type || "") && !fb._data(d, "globalEval") && fb.contains(g, d) && (d.src ? fb._evalUrl && fb._evalUrl(d.src) : fb.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Xb, "")));
				h = c = null
			}
			return this
		}
	}), fb.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
		fb.fn[a] = function (a) {
			for (var c, d = 0, e = [], f = fb(a), g = f.length - 1; g >= d; d++)c = d === g ? this : this.clone(!0), fb(f[d])[b](c), Z.apply(e, c.get());
			return this.pushStack(e)
		}
	});
	var _b, ac = {};
	!function () {
		var a, b, c = pb.createElement("div"), d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
		c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", db.opacity = /^0.5/.test(a.style.opacity), db.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", db.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, db.shrinkWrapBlocks = function () {
			var a, c, e, f;
			if (null == b) {
				if (a = pb.getElementsByTagName("body")[0], !a)return;
				f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = pb.createElement("div"), e = pb.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== yb && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
			}
			return b
		}
	}();
	var bc, cc, dc = /^margin/, ec = new RegExp("^(" + Bb + ")(?!px)[a-z%]+$", "i"), fc = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (bc = function (a) {
		return a.ownerDocument.defaultView.getComputedStyle(a, null)
	}, cc = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || bc(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || fb.contains(a.ownerDocument, a) || (g = fb.style(a, b)), ec.test(g) && dc.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
	}) : pb.documentElement.currentStyle && (bc = function (a) {
		return a.currentStyle
	}, cc = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || bc(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), ec.test(g) && !fc.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
	}), function () {
		function b() {
			var b, c, d = pb.getElementsByTagName("body")[0];
			d && (b = pb.createElement("div"), c = pb.createElement("div"), b.style.cssText = j, d.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", fb.swap(d, null != d.style.zoom ? {zoom: 1} : {}, function () {
				e = 4 === c.offsetWidth
			}), f = !0, g = !1, h = !0, a.getComputedStyle && (g = "1%" !== (a.getComputedStyle(c, null) || {}).top, f = "4px" === (a.getComputedStyle(c, null) || {width: "4px"}).width), d.removeChild(b), c = d = null)
		}

		var c, d, e, f, g, h, i = pb.createElement("div"), j = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", k = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
		i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = i.getElementsByTagName("a")[0], c.style.cssText = "float:left;opacity:.5", db.opacity = /^0.5/.test(c.style.opacity), db.cssFloat = !!c.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", db.clearCloneStyle = "content-box" === i.style.backgroundClip, c = i = null, fb.extend(db, {
			reliableHiddenOffsets: function () {
				if (null != d)return d;
				var a, b, c, e = pb.createElement("div"), f = pb.getElementsByTagName("body")[0];
				if (f)return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = pb.createElement("div"), a.style.cssText = j, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", d = c && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, d
			}, boxSizing: function () {
				return null == e && b(), e
			}, boxSizingReliable: function () {
				return null == f && b(), f
			}, pixelPosition: function () {
				return null == g && b(), g
			}, reliableMarginRight: function () {
				var b, c, d, e;
				if (null == h && a.getComputedStyle) {
					if (b = pb.getElementsByTagName("body")[0], !b)return;
					c = pb.createElement("div"), d = pb.createElement("div"), c.style.cssText = j, b.appendChild(c).appendChild(d), e = d.appendChild(pb.createElement("div")), e.style.cssText = d.style.cssText = k, e.style.marginRight = e.style.width = "0", d.style.width = "1px", h = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
				}
				return h
			}
		})
	}(), fb.swap = function (a, b, c, d) {
		var e, f, g = {};
		for (f in b)g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b)a.style[f] = g[f];
		return e
	};
	var gc = /alpha\([^)]*\)/i, hc = /opacity\s*=\s*([^)]*)/, ic = /^(none|table(?!-c[ea]).+)/, jc = new RegExp("^(" + Bb + ")(.*)$", "i"), kc = new RegExp("^([+-])=(" + Bb + ")", "i"), lc = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	}, mc = {letterSpacing: 0, fontWeight: 400}, nc = ["Webkit", "O", "Moz", "ms"];
	fb.extend({
		cssHooks: {
			opacity: {
				get: function (a, b) {
					if (b) {
						var c = cc(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0},
		cssProps: {"float": db.cssFloat ? "cssFloat" : "styleFloat"},
		style: function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = fb.camelCase(b), i = a.style;
				if (b = fb.cssProps[h] || (fb.cssProps[h] = B(i, h)), g = fb.cssHooks[b] || fb.cssHooks[h], void 0 === c)return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
				if (f = typeof c, "string" === f && (e = kc.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(fb.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || fb.cssNumber[h] || (c += "px"), db.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))try {
					i[b] = "", i[b] = c
				} catch (j) {
				}
			}
		},
		css: function (a, b, c, d) {
			var e, f, g, h = fb.camelCase(b);
			return b = fb.cssProps[h] || (fb.cssProps[h] = B(a.style, h)), g = fb.cssHooks[b] || fb.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = cc(a, b, d)), "normal" === f && b in mc && (f = mc[b]), "" === c || c ? (e = parseFloat(f), c === !0 || fb.isNumeric(e) ? e || 0 : f) : f
		}
	}), fb.each(["height", "width"], function (a, b) {
		fb.cssHooks[b] = {
			get: function (a, c, d) {
				return c ? 0 === a.offsetWidth && ic.test(fb.css(a, "display")) ? fb.swap(a, lc, function () {
					return F(a, b, d)
				}) : F(a, b, d) : void 0
			}, set: function (a, c, d) {
				var e = d && bc(a);
				return D(a, c, d ? E(a, b, d, db.boxSizing() && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), db.opacity || (fb.cssHooks.opacity = {
		get: function (a, b) {
			return hc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		}, set: function (a, b) {
			var c = a.style, d = a.currentStyle, e = fb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === fb.trim(f.replace(gc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = gc.test(f) ? f.replace(gc, e) : f + " " + e)
		}
	}), fb.cssHooks.marginRight = A(db.reliableMarginRight, function (a, b) {
		return b ? fb.swap(a, {display: "inline-block"}, cc, [a, "marginRight"]) : void 0
	}), fb.each({margin: "", padding: "", border: "Width"}, function (a, b) {
		fb.cssHooks[a + b] = {
			expand: function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + Cb[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, dc.test(a) || (fb.cssHooks[a + b].set = D)
	}), fb.fn.extend({
		css: function (a, b) {
			return Eb(this, function (a, b, c) {
				var d, e, f = {}, g = 0;
				if (fb.isArray(b)) {
					for (d = bc(a), e = b.length; e > g; g++)f[b[g]] = fb.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? fb.style(a, b, c) : fb.css(a, b)
			}, a, b, arguments.length > 1)
		}, show: function () {
			return C(this, !0)
		}, hide: function () {
			return C(this)
		}, toggle: function (a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				Db(this) ? fb(this).show() : fb(this).hide()
			})
		}
	}), fb.Tween = G, G.prototype = {
		constructor: G, init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px")
		}, cur: function () {
			var a = G.propHooks[this.prop];
			return a && a.get ? a.get(this) : G.propHooks._default.get(this)
		}, run: function (a) {
			var b, c = G.propHooks[this.prop];
			return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
		}
	}, G.prototype.init.prototype = G.prototype, G.propHooks = {
		_default: {
			get: function (a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			}, set: function (a) {
				fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
		set: function (a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, fb.easing = {
		linear: function (a) {
			return a
		}, swing: function (a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, fb.fx = G.prototype.init, fb.fx.step = {};
	var oc, pc, qc = /^(?:toggle|show|hide)$/, rc = new RegExp("^(?:([+-])=|)(" + Bb + ")([a-z%]*)$", "i"), sc = /queueHooks$/, tc = [K], uc = {
		"*": [function (a, b) {
			var c = this.createTween(a, b), d = c.cur(), e = rc.exec(b), f = e && e[3] || (fb.cssNumber[a] ? "" : "px"), g = (fb.cssNumber[a] || "px" !== f && +d) && rc.exec(fb.css(c.elem, a)), h = 1, i = 20;
			if (g && g[3] !== f) {
				f = f || g[3], e = e || [], g = +d || 1;
				do h = h || ".5", g /= h, fb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
			}
			return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
		}]
	};
	fb.Animation = fb.extend(M, {
		tweener: function (a, b) {
			fb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			for (var c, d = 0, e = a.length; e > d; d++)c = a[d], uc[c] = uc[c] || [], uc[c].unshift(b)
		}, prefilter: function (a, b) {
			b ? tc.unshift(a) : tc.push(a)
		}
	}), fb.speed = function (a, b, c) {
		var d = a && "object" == typeof a ? fb.extend({}, a) : {complete: c || !c && b || fb.isFunction(a) && a, duration: a, easing: c && b || b && !fb.isFunction(b) && b};
		return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
			fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue)
		}, d
	}, fb.fn.extend({
		fadeTo: function (a, b, c, d) {
			return this.filter(Db).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
		}, animate: function (a, b, c, d) {
			var e = fb.isEmptyObject(a), f = fb.speed(b, c, d), g = function () {
				var b = M(this, fb.extend({}, a), f);
				(e || fb._data(this, "finish")) && b.stop(!0)
			};
			return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		}, stop: function (a, b, c) {
			var d = function (a) {
				var b = a.stop;
				delete a.stop, b(c)
			};
			return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0, e = null != a && a + "queueHooks", f = fb.timers, g = fb._data(this);
				if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && sc.test(e) && d(g[e]);
				for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				(b || !c) && fb.dequeue(this, a)
			})
		}, finish: function (a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b, c = fb._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fb.timers, g = d ? d.length : 0;
				for (c.finish = !0, fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}), fb.each(["toggle", "show", "hide"], function (a, b) {
		var c = fb.fn[b];
		fb.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
		}
	}), fb.each({slideDown: I("show"), slideUp: I("hide"), slideToggle: I("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
		fb.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), fb.timers = [], fb.fx.tick = function () {
		var a, b = fb.timers, c = 0;
		for (oc = fb.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
		b.length || fb.fx.stop(), oc = void 0
	}, fb.fx.timer = function (a) {
		fb.timers.push(a), a() ? fb.fx.start() : fb.timers.pop()
	}, fb.fx.interval = 13, fb.fx.start = function () {
		pc || (pc = setInterval(fb.fx.tick, fb.fx.interval))
	}, fb.fx.stop = function () {
		clearInterval(pc), pc = null
	}, fb.fx.speeds = {slow: 600, fast: 200, _default: 400}, fb.fn.delay = function (a, b) {
		return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
			var d = setTimeout(b, a);
			c.stop = function () {
				clearTimeout(d)
			}
		})
	}, function () {
		var a, b, c, d, e = pb.createElement("div");
		e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = pb.createElement("select"), d = c.appendChild(pb.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", db.getSetAttribute = "t" !== e.className, db.style = /top/.test(a.getAttribute("style")), db.hrefNormalized = "/a" === a.getAttribute("href"), db.checkOn = !!b.value, db.optSelected = d.selected, db.enctype = !!pb.createElement("form").enctype, c.disabled = !0, db.optDisabled = !d.disabled, b = pb.createElement("input"), b.setAttribute("value", ""), db.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), db.radioValue = "t" === b.value, a = b = c = d = e = null
	}();
	var vc = /\r/g;
	fb.fn.extend({
		val: function (a) {
			var b, c, d, e = this[0];
			{
				if (arguments.length)return d = fb.isFunction(a), this.each(function (c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, fb(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fb.isArray(e) && (e = fb.map(e, function (a) {
						return null == a ? "" : a + ""
					})), b = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e)return b = fb.valHooks[e.type] || fb.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(vc, "") : null == c ? "" : c)
			}
		}
	}), fb.extend({
		valHooks: {
			option: {
				get: function (a) {
					var b = fb.find.attr(a, "value");
					return null != b ? b : fb.text(a)
				}
			}, select: {
				get: function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (db.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
						if (b = fb(c).val(), f)return b;
						g.push(b)
					}
					return g
				}, set: function (a, b) {
					for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--;)if (d = e[g], fb.inArray(fb.valHooks.option.get(d), f) >= 0)try {
						d.selected = c = !0
					} catch (h) {
						d.scrollHeight
					} else d.selected = !1;
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), fb.each(["radio", "checkbox"], function () {
		fb.valHooks[this] = {
			set: function (a, b) {
				return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0
			}
		}, db.checkOn || (fb.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var wc, xc, yc = fb.expr.attrHandle, zc = /^(?:checked|selected)$/i, Ac = db.getSetAttribute, Bc = db.input;
	fb.fn.extend({
		attr: function (a, b) {
			return Eb(this, fb.attr, a, b, arguments.length > 1)
		}, removeAttr: function (a) {
			return this.each(function () {
				fb.removeAttr(this, a)
			})
		}
	}), fb.extend({
		attr: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === yb ? fb.prop(a, b, c) : (1 === f && fb.isXMLDoc(a) || (b = b.toLowerCase(), d = fb.attrHooks[b] || (fb.expr.match.bool.test(b) ? xc : wc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = fb.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void fb.removeAttr(a, b))
		}, removeAttr: function (a, b) {
			var c, d, e = 0, f = b && b.match(ub);
			if (f && 1 === a.nodeType)for (; c = f[e++];)d = fb.propFix[c] || c, fb.expr.match.bool.test(c) ? Bc && Ac || !zc.test(c) ? a[d] = !1 : a[fb.camelCase("default-" + c)] = a[d] = !1 : fb.attr(a, c, ""), a.removeAttribute(Ac ? c : d)
		}, attrHooks: {
			type: {
				set: function (a, b) {
					if (!db.radioValue && "radio" === b && fb.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), xc = {
		set: function (a, b, c) {
			return b === !1 ? fb.removeAttr(a, c) : Bc && Ac || !zc.test(c) ? a.setAttribute(!Ac && fb.propFix[c] || c, c) : a[fb.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, fb.each(fb.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = yc[b] || fb.find.attr;
		yc[b] = Bc && Ac || !zc.test(b) ? function (a, b, d) {
			var e, f;
			return d || (f = yc[b], yc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, yc[b] = f), e
		} : function (a, b, c) {
			return c ? void 0 : a[fb.camelCase("default-" + b)] ? b.toLowerCase() : null
		}
	}), Bc && Ac || (fb.attrHooks.value = {
		set: function (a, b, c) {
			return fb.nodeName(a, "input") ? void(a.defaultValue = b) : wc && wc.set(a, b, c)
		}
	}), Ac || (wc = {
		set: function (a, b, c) {
			var d = a.getAttributeNode(c);
			return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
		}
	}, yc.id = yc.name = yc.coords = function (a, b, c) {
		var d;
		return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}, fb.valHooks.button = {
		get: function (a, b) {
			var c = a.getAttributeNode(b);
			return c && c.specified ? c.value : void 0
		}, set: wc.set
	}, fb.attrHooks.contenteditable = {
		set: function (a, b, c) {
			wc.set(a, "" === b ? !1 : b, c)
		}
	}, fb.each(["width", "height"], function (a, b) {
		fb.attrHooks[b] = {
			set: function (a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		}
	})), db.style || (fb.attrHooks.style = {
		get: function (a) {
			return a.style.cssText || void 0
		}, set: function (a, b) {
			return a.style.cssText = b + ""
		}
	});
	var Cc = /^(?:input|select|textarea|button|object)$/i, Dc = /^(?:a|area)$/i;
	fb.fn.extend({
		prop: function (a, b) {
			return Eb(this, fb.prop, a, b, arguments.length > 1)
		}, removeProp: function (a) {
			return a = fb.propFix[a] || a, this.each(function () {
				try {
					this[a] = void 0, delete this[a]
				} catch (b) {
				}
			})
		}
	}), fb.extend({
		propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
			var d, e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !fb.isXMLDoc(a), f && (b = fb.propFix[b] || b, e = fb.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		}, propHooks: {
			tabIndex: {
				get: function (a) {
					var b = fb.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : Cc.test(a.nodeName) || Dc.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		}
	}), db.hrefNormalized || fb.each(["href", "src"], function (a, b) {
		fb.propHooks[b] = {
			get: function (a) {
				return a.getAttribute(b, 4)
			}
		}
	}), db.optSelected || (fb.propHooks.selected = {
		get: function (a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	}), fb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		fb.propFix[this.toLowerCase()] = this
	}), db.enctype || (fb.propFix.enctype = "encoding");
	var Ec = /[\t\r\n\f]/g;
	fb.fn.extend({
		addClass: function (a) {
			var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
			if (fb.isFunction(a))return this.each(function (b) {
				fb(this).addClass(a.call(this, b, this.className))
			});
			if (j)for (b = (a || "").match(ub) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ec, " ") : " ")) {
				for (f = 0; e = b[f++];)d.indexOf(" " + e + " ") < 0 && (d += e + " ");
				g = fb.trim(d), c.className !== g && (c.className = g)
			}
			return this
		}, removeClass: function (a) {
			var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
			if (fb.isFunction(a))return this.each(function (b) {
				fb(this).removeClass(a.call(this, b, this.className))
			});
			if (j)for (b = (a || "").match(ub) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ec, " ") : "")) {
				for (f = 0; e = b[f++];)for (; d.indexOf(" " + e + " ") >= 0;)d = d.replace(" " + e + " ", " ");
				g = a ? fb.trim(d) : "", c.className !== g && (c.className = g)
			}
			return this
		}, toggleClass: function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(fb.isFunction(a) ? function (c) {
				fb(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function () {
				if ("string" === c)for (var b, d = 0, e = fb(this), f = a.match(ub) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else(c === yb || "boolean" === c) && (this.className && fb._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : fb._data(this, "__className__") || "")
			})
		}, hasClass: function (a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Ec, " ").indexOf(b) >= 0)return !0;
			return !1
		}
	}), fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		fb.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), fb.fn.extend({
		hover: function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}, bind: function (a, b, c) {
			return this.on(a, null, b, c)
		}, unbind: function (a, b) {
			return this.off(a, null, b)
		}, delegate: function (a, b, c, d) {
			return this.on(b, a, c, d)
		}, undelegate: function (a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var Fc = fb.now(), Gc = /\?/, Hc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	fb.parseJSON = function (b) {
		if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
		var c, d = null, e = fb.trim(b + "");
		return e && !fb.trim(e.replace(Hc, function (a, b, e, f) {
			return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
		})) ? Function("return " + e)() : fb.error("Invalid JSON: " + b)
	}, fb.parseXML = function (b) {
		var c, d;
		if (!b || "string" != typeof b)return null;
		try {
			a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
		} catch (e) {
			c = void 0
		}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || fb.error("Invalid XML: " + b), c
	};
	var Ic, Jc, Kc = /#.*$/, Lc = /([?&])_=[^&]*/, Mc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Oc = /^(?:GET|HEAD)$/, Pc = /^\/\//, Qc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Rc = {}, Sc = {}, Tc = "*/".concat("*");
	try {
		Jc = location.href
	} catch (Uc) {
		Jc = pb.createElement("a"), Jc.href = "", Jc = Jc.href
	}
	Ic = Qc.exec(Jc.toLowerCase()) || [], fb.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Jc,
			type: "GET",
			isLocal: Nc.test(Ic[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {"*": Tc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"},
			contents: {xml: /xml/, html: /html/, json: /json/},
			responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
			converters: {"* text": String, "text html": !0, "text json": fb.parseJSON, "text xml": fb.parseXML},
			flatOptions: {url: !0, context: !0}
		},
		ajaxSetup: function (a, b) {
			return b ? P(P(a, fb.ajaxSettings), b) : P(fb.ajaxSettings, a)
		},
		ajaxPrefilter: N(Rc),
		ajaxTransport: N(Sc),
		ajax: function (a, b) {
			function c(a, b, c, d) {
				var e, k, r, s, u, w = b;
				2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (fb.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (fb.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --fb.active || fb.event.trigger("ajaxStop")))
			}

			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var d, e, f, g, h, i, j, k, l = fb.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? fb(m) : fb.event, o = fb.Deferred(), p = fb.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
				readyState: 0,
				getResponseHeader: function (a) {
					var b;
					if (2 === t) {
						if (!k)for (k = {}; b = Mc.exec(g);)k[b[1].toLowerCase()] = b[2];
						b = k[a.toLowerCase()]
					}
					return null == b ? null : b
				},
				getAllResponseHeaders: function () {
					return 2 === t ? g : null
				},
				setRequestHeader: function (a, b) {
					var c = a.toLowerCase();
					return t || (a = s[c] = s[c] || a, r[a] = b), this
				},
				overrideMimeType: function (a) {
					return t || (l.mimeType = a), this
				},
				statusCode: function (a) {
					var b;
					if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
					return this
				},
				abort: function (a) {
					var b = a || u;
					return j && j.abort(b), c(0, b), this
				}
			};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Jc) + "").replace(Kc, "").replace(Pc, Ic[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = fb.trim(l.dataType || "*").toLowerCase().match(ub) || [""], null == l.crossDomain && (d = Qc.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Ic[1] && d[2] === Ic[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Ic[3] || ("http:" === Ic[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = fb.param(l.data, l.traditional)), O(Rc, l, b, v), 2 === t)return v;
			i = l.global, i && 0 === fb.active++ && fb.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Oc.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Gc.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Lc.test(f) ? f.replace(Lc, "$1_=" + Fc++) : f + (Gc.test(f) ? "&" : "?") + "_=" + Fc++)), l.ifModified && (fb.lastModified[f] && v.setRequestHeader("If-Modified-Since", fb.lastModified[f]), fb.etag[f] && v.setRequestHeader("If-None-Match", fb.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Tc + "; q=0.01" : "") : l.accepts["*"]);
			for (e in l.headers)v.setRequestHeader(e, l.headers[e]);
			if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))return v.abort();
			u = "abort";
			for (e in{success: 1, error: 1, complete: 1})v[e](l[e]);
			if (j = O(Sc, l, b, v)) {
				v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
					v.abort("timeout")
				}, l.timeout));
				try {
					t = 1, j.send(r, c)
				} catch (w) {
					if (!(2 > t))throw w;
					c(-1, w)
				}
			} else c(-1, "No Transport");
			return v
		},
		getJSON: function (a, b, c) {
			return fb.get(a, b, c, "json")
		},
		getScript: function (a, b) {
			return fb.get(a, void 0, b, "script")
		}
	}), fb.each(["get", "post"], function (a, b) {
		fb[b] = function (a, c, d, e) {
			return fb.isFunction(c) && (e = e || d, d = c, c = void 0), fb.ajax({url: a, type: b, dataType: e, data: c, success: d})
		}
	}), fb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		fb.fn[b] = function (a) {
			return this.on(b, a)
		}
	}), fb._evalUrl = function (a) {
		return fb.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
	}, fb.fn.extend({
		wrapAll: function (a) {
			if (fb.isFunction(a))return this.each(function (b) {
				fb(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = fb(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
					for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		}, wrapInner: function (a) {
			return this.each(fb.isFunction(a) ? function (b) {
				fb(this).wrapInner(a.call(this, b))
			} : function () {
				var b = fb(this), c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		}, wrap: function (a) {
			var b = fb.isFunction(a);
			return this.each(function (c) {
				fb(this).wrapAll(b ? a.call(this, c) : a)
			})
		}, unwrap: function () {
			return this.parent().each(function () {
				fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes)
			}).end()
		}
	}), fb.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !db.reliableHiddenOffsets() && "none" === (a.style && a.style.display || fb.css(a, "display"))
	}, fb.expr.filters.visible = function (a) {
		return !fb.expr.filters.hidden(a)
	};
	var Vc = /%20/g, Wc = /\[\]$/, Xc = /\r?\n/g, Yc = /^(?:submit|button|image|reset|file)$/i, Zc = /^(?:input|select|textarea|keygen)/i;
	fb.param = function (a, b) {
		var c, d = [], e = function (a, b) {
			b = fb.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
		};
		if (void 0 === b && (b = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a))fb.each(a, function () {
			e(this.name, this.value)
		}); else for (c in a)S(c, a[c], b, e);
		return d.join("&").replace(Vc, "+")
	}, fb.fn.extend({
		serialize: function () {
			return fb.param(this.serializeArray())
		}, serializeArray: function () {
			return this.map(function () {
				var a = fb.prop(this, "elements");
				return a ? fb.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !fb(this).is(":disabled") && Zc.test(this.nodeName) && !Yc.test(a) && (this.checked || !Fb.test(a))
			}).map(function (a, b) {
				var c = fb(this).val();
				return null == c ? null : fb.isArray(c) ? fb.map(c, function (a) {
					return {name: b.name, value: a.replace(Xc, "\r\n")}
				}) : {name: b.name, value: c.replace(Xc, "\r\n")}
			}).get()
		}
	}), fb.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
	} : T;
	var $c = 0, _c = {}, ad = fb.ajaxSettings.xhr();
	a.ActiveXObject && fb(a).on("unload", function () {
		for (var a in _c)_c[a](void 0, !0)
	}), db.cors = !!ad && "withCredentials" in ad, ad = db.ajax = !!ad, ad && fb.ajaxTransport(function (a) {
		if (!a.crossDomain || db.cors) {
			var b;
			return {
				send: function (c, d) {
					var e, f = a.xhr(), g = ++$c;
					if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
					a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
					for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
					f.send(a.hasContent && a.data || null), b = function (c, e) {
						var h, i, j;
						if (b && (e || 4 === f.readyState))if (delete _c[g], b = void 0, f.onreadystatechange = fb.noop, e)4 !== f.readyState && f.abort(); else {
							j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
							try {
								i = f.statusText
							} catch (k) {
								i = ""
							}
							h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
						}
						j && d(h, i, j, f.getAllResponseHeaders())
					}, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = _c[g] = b : b()
				}, abort: function () {
					b && b(void 0, !0)
				}
			}
		}
	}), fb.ajaxSetup({
		accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {
			"text script": function (a) {
				return fb.globalEval(a), a
			}
		}
	}), fb.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), fb.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c = pb.head || fb("head")[0] || pb.documentElement;
			return {
				send: function (d, e) {
					b = pb.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
						(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
					}, c.insertBefore(b, c.firstChild)
				}, abort: function () {
					b && b.onload(void 0, !0)
				}
			}
		}
	});
	var bd = [], cd = /(=)\?(?=&|$)|\?\?/;
	fb.ajaxSetup({
		jsonp: "callback", jsonpCallback: function () {
			var a = bd.pop() || fb.expando + "_" + Fc++;
			return this[a] = !0, a
		}
	}), fb.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (cd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && cd.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fb.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(cd, "$1" + e) : b.jsonp !== !1 && (b.url += (Gc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || fb.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, bd.push(e)), g && fb.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), fb.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a)return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || pb;
		var d = mb.exec(a), e = !c && [];
		return d ? [b.createElement(d[1])] : (d = fb.buildFragment([a], b, e), e && e.length && fb(e).remove(), fb.merge([], d.childNodes))
	};
	var dd = fb.fn.load;
	fb.fn.load = function (a, b, c) {
		if ("string" != typeof a && dd)return dd.apply(this, arguments);
		var d, e, f, g = this, h = a.indexOf(" ");
		return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), fb.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && fb.ajax({
			url: a,
			type: f,
			dataType: "html",
			data: b
		}).done(function (a) {
			e = arguments, g.html(d ? fb("<div>").append(fb.parseHTML(a)).find(d) : a)
		}).complete(c && function (a, b) {
				g.each(c, e || [a.responseText, b, a])
			}), this
	}, fb.expr.filters.animated = function (a) {
		return fb.grep(fb.timers, function (b) {
			return a === b.elem
		}).length
	};
	var ed = a.document.documentElement;
	fb.offset = {
		setOffset: function (a, b, c) {
			var d, e, f, g, h, i, j, k = fb.css(a, "position"), l = fb(a), m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && fb.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, fb.fn.extend({
		offset: function (a) {
			if (arguments.length)return void 0 === a ? this : this.each(function (b) {
				fb.offset.setOffset(this, a, b)
			});
			var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
			if (f)return b = f.documentElement, fb.contains(b, e) ? (typeof e.getBoundingClientRect !== yb && (d = e.getBoundingClientRect()), c = V(f), {
				top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
				left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
			}) : d
		}, position: function () {
			if (this[0]) {
				var a, b, c = {top: 0, left: 0}, d = this[0];
				return "fixed" === fb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fb.nodeName(a[0], "html") || (c = a.offset()), c.top += fb.css(a[0], "borderTopWidth", !0), c.left += fb.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - c.top - fb.css(d, "marginTop", !0),
					left: b.left - c.left - fb.css(d, "marginLeft", !0)
				}
			}
		}, offsetParent: function () {
			return this.map(function () {
				for (var a = this.offsetParent || ed; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position");)a = a.offsetParent;
				return a || ed
			})
		}
	}), fb.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
		var c = /Y/.test(b);
		fb.fn[a] = function (d) {
			return Eb(this, function (a, d, e) {
				var f = V(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? fb(f).scrollLeft() : e, c ? e : fb(f).scrollTop()) : a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), fb.each(["top", "left"], function (a, b) {
		fb.cssHooks[b] = A(db.pixelPosition, function (a, c) {
			return c ? (c = cc(a, b), ec.test(c) ? fb(a).position()[b] + "px" : c) : void 0
		})
	}), fb.each({Height: "height", Width: "width"}, function (a, b) {
		fb.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
			fb.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
				return Eb(this, function (b, c, d) {
					var e;
					return fb.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fb.css(b, c, g) : fb.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), fb.fn.size = function () {
		return this.length
	}, fb.fn.andSelf = fb.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return fb
	});
	var fd = a.jQuery, gd = a.$;
	return fb.noConflict = function (b) {
		return a.$ === fb && (a.$ = gd), b && a.jQuery === fb && (a.jQuery = fd), fb
	}, typeof b === yb && (a.jQuery = a.$ = fb), fb
}), function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
	function b(b) {
		var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
		}
	}

	function c() {
		f = null
	}

	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}

	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
	if (a.event.fixHooks)for (var j = g.length; j;)a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.12", setup: function () {
			if (this.addEventListener)for (var c = h.length; c;)this.addEventListener(h[--c], b, !1); else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		}, teardown: function () {
			if (this.removeEventListener)for (var c = h.length; c;)this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		}, getLineHeight: function (b) {
			var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		}, getPageHeight: function (b) {
			return a(b).height()
		}, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
	};
	a.fn.extend({
		mousewheel: function (a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		}, unmousewheel: function (a) {
			return this.unbind("mousewheel", a)
		}
	})
}), function (a) {
	"use strict";
	function b(a) {
		return (a || "").toLowerCase()
	}

	var c = "20130725";
	a.fn.cycle = function (c) {
		var d;
		return 0 !== this.length || a.isReady ? this.each(function () {
			var d, e, f, g, h = a(this), i = a.fn.cycle.log;
			if (!h.data("cycle.opts")) {
				(h.data("cycle-log") === !1 || c && c.log === !1 || e && e.log === !1) && (i = a.noop), i("--c2 init--"), d = h.data();
				for (var j in d)d.hasOwnProperty(j) && /^cycle[A-Z]+/.test(j) && (g = d[j], f = j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b), i(f + ":", g, "(" + typeof g + ")"), d[f] = g);
				e = a.extend({}, a.fn.cycle.defaults, d, c || {}), e.timeoutId = 0, e.paused = e.paused || !1, e.container = h, e._maxZ = e.maxZ, e.API = a.extend({_container: h}, a.fn.cycle.API), e.API.log = i, e.API.trigger = function (a, b) {
					return e.container.trigger(a, b), e.API
				}, h.data("cycle.opts", e), h.data("cycle.API", e.API), e.API.trigger("cycle-bootstrap", [e, e.API]), e.API.addInitialSlides(), e.API.preInitSlideshow(), e.slides.length && e.API.initSlideshow()
			}
		}) : (d = {s: this.selector, c: this.context}, a.fn.cycle.log("requeuing slideshow (dom not ready)"), a(function () {
			a(d.s, d.c).cycle(c)
		}), this)
	}, a.fn.cycle.API = {
		opts: function () {
			return this._container.data("cycle.opts")
		}, addInitialSlides: function () {
			var b = this.opts(), c = b.slides;
			b.slideCount = 0, b.slides = a(), c = c.jquery ? c : b.container.find(c), b.random && c.sort(function () {
				return Math.random() - .5
			}), b.API.add(c)
		}, preInitSlideshow: function () {
			var b = this.opts();
			b.API.trigger("cycle-pre-initialize", [b]);
			var c = a.fn.cycle.transitions[b.fx];
			c && a.isFunction(c.preInit) && c.preInit(b), b._preInitialized = !0
		}, postInitSlideshow: function () {
			var b = this.opts();
			b.API.trigger("cycle-post-initialize", [b]);
			var c = a.fn.cycle.transitions[b.fx];
			c && a.isFunction(c.postInit) && c.postInit(b)
		}, initSlideshow: function () {
			var b, c = this.opts(), d = c.container;
			c.API.calcFirstSlide(), "static" == c.container.css("position") && c.container.css("position", "relative"), a(c.slides[c.currSlide]).css("opacity", 1).show(), c.API.stackSlides(c.slides[c.currSlide], c.slides[c.nextSlide], !c.reverse), c.pauseOnHover && (c.pauseOnHover !== !0 && (d = a(c.pauseOnHover)), d.hover(function () {
				c.API.pause(!0)
			}, function () {
				c.API.resume(!0)
			})), c.timeout && (b = c.API.getSlideOpts(c.nextSlide), c.API.queueTransition(b, b.timeout + c.delay)), c._initialized = !0, c.API.updateView(!0), c.API.trigger("cycle-initialized", [c]), c.API.postInitSlideshow()
		}, pause: function (b) {
			var c = this.opts(), d = c.API.getSlideOpts(), e = c.hoverPaused || c.paused;
			b ? c.hoverPaused = !0 : c.paused = !0, e || (c.container.addClass("cycle-paused"), c.API.trigger("cycle-paused", [c]).log("cycle-paused"), d.timeout && (clearTimeout(c.timeoutId), c.timeoutId = 0, c._remainingTimeout -= a.now() - c._lastQueue, (c._remainingTimeout < 0 || isNaN(c._remainingTimeout)) && (c._remainingTimeout = void 0)))
		}, resume: function (a) {
			var b = this.opts(), c = !b.hoverPaused && !b.paused;
			a ? b.hoverPaused = !1 : b.paused = !1, c || (b.container.removeClass("cycle-paused"), 0 === b.slides.filter(":animated").length && b.API.queueTransition(b.API.getSlideOpts(), b._remainingTimeout), b.API.trigger("cycle-resumed", [b, b._remainingTimeout]).log("cycle-resumed"))
		}, add: function (b, c) {
			var d, e = this.opts(), f = e.slideCount, g = !1;
			"string" == a.type(b) && (b = a.trim(b)), a(b).each(function () {
				var b, d = a(this);
				c ? e.container.prepend(d) : e.container.append(d), e.slideCount++, b = e.API.buildSlideOpts(d), e.slides = c ? a(d).add(e.slides) : e.slides.add(d), e.API.initSlide(b, d, --e._maxZ), d.data("cycle.opts", b), e.API.trigger("cycle-slide-added", [e, b, d])
			}), e.API.updateView(!0), g = e._preInitialized && 2 > f && e.slideCount >= 1, g && (e._initialized ? e.timeout && (d = e.slides.length, e.nextSlide = e.reverse ? d - 1 : 1, e.timeoutId || e.API.queueTransition(e)) : e.API.initSlideshow())
		}, calcFirstSlide: function () {
			var a, b = this.opts();
			a = parseInt(b.startingSlide || 0, 10), (a >= b.slides.length || 0 > a) && (a = 0), b.currSlide = a, b.reverse ? (b.nextSlide = a - 1, b.nextSlide < 0 && (b.nextSlide = b.slides.length - 1)) : (b.nextSlide = a + 1, b.nextSlide == b.slides.length && (b.nextSlide = 0))
		}, calcNextSlide: function () {
			var a, b = this.opts();
			b.reverse ? (a = b.nextSlide - 1 < 0, b.nextSlide = a ? b.slideCount - 1 : b.nextSlide - 1, b.currSlide = a ? 0 : b.nextSlide + 1) : (a = b.nextSlide + 1 == b.slides.length, b.nextSlide = a ? 0 : b.nextSlide + 1, b.currSlide = a ? b.slides.length - 1 : b.nextSlide - 1)
		}, calcTx: function (b, c) {
			var d, e = b;
			return c && e.manualFx && (d = a.fn.cycle.transitions[e.manualFx]), d || (d = a.fn.cycle.transitions[e.fx]), d || (d = a.fn.cycle.transitions.fade, e.API.log('Transition "' + e.fx + '" not found.  Using fade.')), d
		}, prepareTx: function (a, b) {
			var c, d, e, f, g, h = this.opts();
			return h.slideCount < 2 ? void(h.timeoutId = 0) : (!a || h.busy && !h.manualTrump || (h.API.stopTransition(), h.busy = !1, clearTimeout(h.timeoutId), h.timeoutId = 0), void(h.busy || (0 !== h.timeoutId || a) && (d = h.slides[h.currSlide], e = h.slides[h.nextSlide], f = h.API.getSlideOpts(h.nextSlide), g = h.API.calcTx(f, a), h._tx = g, a && void 0 !== f.manualSpeed && (f.speed = f.manualSpeed), h.nextSlide != h.currSlide && (a || !h.paused && !h.hoverPaused && h.timeout) ? (h.API.trigger("cycle-before", [f, d, e, b]), g.before && g.before(f, d, e, b), c = function () {
				h.busy = !1, h.container.data("cycle.opts") && (g.after && g.after(f, d, e, b), h.API.trigger("cycle-after", [f, d, e, b]), h.API.queueTransition(f), h.API.updateView(!0))
			}, h.busy = !0, g.transition ? g.transition(f, d, e, b, c) : h.API.doTransition(f, d, e, b, c), h.API.calcNextSlide(), h.API.updateView()) : h.API.queueTransition(f))))
		}, doTransition: function (b, c, d, e, f) {
			var g = b, h = a(c), i = a(d), j = function () {
				i.animate(g.animIn || {opacity: 1}, g.speed, g.easeIn || g.easing, f)
			};
			i.css(g.cssBefore || {}), h.animate(g.animOut || {}, g.speed, g.easeOut || g.easing, function () {
				h.css(g.cssAfter || {}), g.sync || j()
			}), g.sync && j()
		}, queueTransition: function (b, c) {
			var d = this.opts(), e = void 0 !== c ? c : b.timeout;
			return 0 === d.nextSlide && 0 === --d.loop ? (d.API.log("terminating; loop=0"), d.timeout = 0, e ? setTimeout(function () {
				d.API.trigger("cycle-finished", [d])
			}, e) : d.API.trigger("cycle-finished", [d]), void(d.nextSlide = d.currSlide)) : void(e && (d._lastQueue = a.now(), void 0 === c && (d._remainingTimeout = b.timeout), d.paused || d.hoverPaused || (d.timeoutId = setTimeout(function () {
				d.API.prepareTx(!1, !d.reverse)
			}, e))))
		}, stopTransition: function () {
			var a = this.opts();
			a.slides.filter(":animated").length && (a.slides.stop(!1, !0), a.API.trigger("cycle-transition-stopped", [a])), a._tx && a._tx.stopTransition && a._tx.stopTransition(a)
		}, advanceSlide: function (a) {
			var b = this.opts();
			return clearTimeout(b.timeoutId), b.timeoutId = 0, b.nextSlide = b.currSlide + a, b.nextSlide < 0 ? b.nextSlide = b.slides.length - 1 : b.nextSlide >= b.slides.length && (b.nextSlide = 0), b.API.prepareTx(!0, a >= 0), !1
		}, buildSlideOpts: function (c) {
			var d, e, f = this.opts(), g = c.data() || {};
			for (var h in g)g.hasOwnProperty(h) && /^cycle[A-Z]+/.test(h) && (d = g[h], e = h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b), f.API.log("[" + (f.slideCount - 1) + "]", e + ":", d, "(" + typeof d + ")"), g[e] = d);
			g = a.extend({}, a.fn.cycle.defaults, f, g), g.slideNum = f.slideCount;
			try {
				delete g.API, delete g.slideCount, delete g.currSlide, delete g.nextSlide, delete g.slides
			} catch (i) {
			}
			return g
		}, getSlideOpts: function (b) {
			var c = this.opts();
			void 0 === b && (b = c.currSlide);
			var d = c.slides[b], e = a(d).data("cycle.opts");
			return a.extend({}, c, e)
		}, initSlide: function (b, c, d) {
			var e = this.opts();
			c.css(b.slideCss || {}), d > 0 && c.css("zIndex", d), isNaN(b.speed) && (b.speed = a.fx.speeds[b.speed] || a.fx.speeds._default), b.sync || (b.speed = b.speed / 2), c.addClass(e.slideClass)
		}, updateView: function (a) {
			var b = this.opts();
			if (b._initialized) {
				var c = b.API.getSlideOpts(), d = b.slides[b.currSlide];
				!a && (b.API.trigger("cycle-update-view-before", [b, c, d]), b.updateView < 0) || (b.slideActiveClass && b.slides.removeClass(b.slideActiveClass).eq(b.currSlide).addClass(b.slideActiveClass), a && b.hideNonActive && b.slides.filter(":not(." + b.slideActiveClass + ")").hide(), b.API.trigger("cycle-update-view", [b, c, d, a]), b.API.trigger("cycle-update-view-after", [b, c, d]))
			}
		}, getComponent: function (b) {
			var c = this.opts(), d = c[b];
			return "string" == typeof d ? /^\s*[\>|\+|~]/.test(d) ? c.container.find(d) : a(d) : d.jquery ? d : a(d)
		}, stackSlides: function (b, c, d) {
			var e = this.opts();
			b || (b = e.slides[e.currSlide], c = e.slides[e.nextSlide], d = !e.reverse), a(b).css("zIndex", e.maxZ);
			var f, g = e.maxZ - 2, h = e.slideCount;
			if (d) {
				for (f = e.currSlide + 1; h > f; f++)a(e.slides[f]).css("zIndex", g--);
				for (f = 0; f < e.currSlide; f++)a(e.slides[f]).css("zIndex", g--)
			} else {
				for (f = e.currSlide - 1; f >= 0; f--)a(e.slides[f]).css("zIndex", g--);
				for (f = h - 1; f > e.currSlide; f--)a(e.slides[f]).css("zIndex", g--)
			}
			a(c).css("zIndex", e.maxZ - 1)
		}, getSlideIndex: function (a) {
			return this.opts().slides.index(a)
		}
	}, a.fn.cycle.log = function () {
	}, a.fn.cycle.version = function () {
		return "Cycle2: " + c
	}, a.fn.cycle.transitions = {
		custom: {}, none: {
			before: function (a, b, c, d) {
				a.API.stackSlides(c, b, d), a.cssBefore = {opacity: 1, display: "block"}
			}
		}, fade: {
			before: function (b, c, d, e) {
				var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
				b.API.stackSlides(c, d, e), b.cssBefore = a.extend(f, {opacity: 0, display: "block"}), b.animIn = {opacity: 1}, b.animOut = {opacity: 0}
			}
		}, fadeout: {
			before: function (b, c, d, e) {
				var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
				b.API.stackSlides(c, d, e), b.cssBefore = a.extend(f, {opacity: 1, display: "block"}), b.animOut = {opacity: 0}
			}
		}, scrollHorz: {
			before: function (a, b, c, d) {
				a.API.stackSlides(b, c, d);
				var e = a.container.css("overflow", "hidden").width();
				a.cssBefore = {left: d ? e : -e, top: 0, opacity: 1, display: "block"}, a.cssAfter = {zIndex: a._maxZ - 2, left: 0}, a.animIn = {left: 0}, a.animOut = {left: d ? -e : e}
			}
		}
	}, a.fn.cycle.defaults = {
		allowWrap: !0,
		autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
		delay: 0,
		easing: null,
		fx: "fade",
		hideNonActive: !0,
		loop: 0,
		manualFx: void 0,
		manualSpeed: void 0,
		manualTrump: !0,
		maxZ: 100,
		pauseOnHover: !1,
		reverse: !1,
		slideActiveClass: "cycle-slide-active",
		slideClass: "cycle-slide",
		slideCss: {position: "absolute", top: 0, left: 0},
		slides: "> img",
		speed: 500,
		startingSlide: 0,
		sync: !0,
		timeout: 4e3,
		updateView: -1
	}, a(document).ready(function () {
		a(a.fn.cycle.defaults.autoSelector).cycle()
	})
}(jQuery), function (a) {
	"use strict";
	function b(b, d) {
		var e, f, g, h = d.autoHeight;
		if ("container" == h)f = a(d.slides[d.currSlide]).outerHeight(), d.container.height(f); else if (d._autoHeightRatio)d.container.height(d.container.width() / d._autoHeightRatio); else if ("calc" === h || "number" == a.type(h) && h >= 0) {
			if (g = "calc" === h ? c(b, d) : h >= d.slides.length ? 0 : h, g == d._sentinelIndex)return;
			d._sentinelIndex = g, d._sentinel && d._sentinel.remove(), e = a(d.slides[g].cloneNode(!0)), e.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), e.css({
				position: "static",
				visibility: "hidden",
				display: "block"
			}).prependTo(d.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), e.find("*").css("visibility", "hidden"), d._sentinel = e
		}
	}

	function c(b, c) {
		var d = 0, e = -1;
		return c.slides.each(function (b) {
			var c = a(this).height();
			c > e && (e = c, d = b)
		}), d
	}

	function d(b, c, d, e) {
		var f = a(e).outerHeight(), g = c.sync ? c.speed / 2 : c.speed;
		c.container.animate({height: f}, g)
	}

	function e(c, f) {
		f._autoHeightOnResize && (a(window).off("resize orientationchange", f._autoHeightOnResize), f._autoHeightOnResize = null), f.container.off("cycle-slide-added cycle-slide-removed", b), f.container.off("cycle-destroyed", e), f.container.off("cycle-before", d), f._sentinel && (f._sentinel.remove(), f._sentinel = null)
	}

	a.extend(a.fn.cycle.defaults, {autoHeight: 0}), a(document).on("cycle-initialized", function (c, f) {
		function g() {
			b(c, f)
		}

		var h, i = f.autoHeight, j = a.type(i), k = null;
		("string" === j || "number" === j) && (f.container.on("cycle-slide-added cycle-slide-removed", b), f.container.on("cycle-destroyed", e), "container" == i ? f.container.on("cycle-before", d) : "string" === j && /\d+\:\d+/.test(i) && (h = i.match(/(\d+)\:(\d+)/), h = h[1] / h[2], f._autoHeightRatio = h), "number" !== j && (f._autoHeightOnResize = function () {
			clearTimeout(k), k = setTimeout(g, 50)
		}, a(window).on("resize orientationchange", f._autoHeightOnResize)), setTimeout(g, 30))
	})
}(jQuery), function (a) {
	"use strict";
	a.extend(a.fn.cycle.defaults, {
		caption: "> .cycle-caption",
		captionTemplate: "{{slideNum}} / {{slideCount}}",
		overlay: "> .cycle-overlay",
		overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
		captionModule: "caption"
	}), a(document).on("cycle-update-view", function (b, c, d, e) {
		if ("caption" === c.captionModule) {
			a.each(["caption", "overlay"], function () {
				var a = this, b = d[a + "Template"], f = c.API.getComponent(a);
				f.length && b ? (f.html(c.API.tmpl(b, d, c, e)), f.show()) : f.hide()
			})
		}
	}), a(document).on("cycle-destroyed", function (b, c) {
		var d;
		a.each(["caption", "overlay"], function () {
			var a = this, b = c[a + "Template"];
			c[a] && b && (d = c.API.getComponent("caption"), d.empty())
		})
	})
}(jQuery), function (a) {
	"use strict";
	var b = a.fn.cycle;
	a.fn.cycle = function (c) {
		var d, e, f, g = a.makeArray(arguments);
		return "number" == a.type(c) ? this.cycle("goto", c) : "string" == a.type(c) ? this.each(function () {
			var h;
			return d = c, f = a(this).data("cycle.opts"), void 0 === f ? void b.log('slideshow must be initialized before sending commands; "' + d + '" ignored') : (d = "goto" == d ? "jump" : d, e = f.API[d], a.isFunction(e) ? (h = a.makeArray(g), h.shift(), e.apply(f.API, h)) : void b.log("unknown command: ", d))
		}) : b.apply(this, arguments)
	}, a.extend(a.fn.cycle, b), a.extend(b.API, {
		next: function () {
			var a = this.opts();
			if (!a.busy || a.manualTrump) {
				var b = a.reverse ? -1 : 1;
				a.allowWrap === !1 && a.currSlide + b >= a.slideCount || (a.API.advanceSlide(b), a.API.trigger("cycle-next", [a]).log("cycle-next"))
			}
		}, prev: function () {
			var a = this.opts();
			if (!a.busy || a.manualTrump) {
				var b = a.reverse ? 1 : -1;
				a.allowWrap === !1 && a.currSlide + b < 0 || (a.API.advanceSlide(b), a.API.trigger("cycle-prev", [a]).log("cycle-prev"))
			}
		}, destroy: function () {
			this.stop();
			var b = this.opts(), c = a.isFunction(a._data) ? a._data : a.noop;
			clearTimeout(b.timeoutId), b.timeoutId = 0, b.API.stop(), b.API.trigger("cycle-destroyed", [b]).log("cycle-destroyed"), b.container.removeData(), c(b.container[0], "parsedAttrs", !1), b.retainStylesOnDestroy || (b.container.removeAttr("style"), b.slides.removeAttr("style"), b.slides.removeClass(b.slideActiveClass)), b.slides.each(function () {
				a(this).removeData(), c(this, "parsedAttrs", !1)
			})
		}, jump: function (a) {
			var b, c = this.opts();
			if (!c.busy || c.manualTrump) {
				var d = parseInt(a, 10);
				if (isNaN(d) || 0 > d || d >= c.slides.length)return void c.API.log("goto: invalid slide index: " + d);
				if (d == c.currSlide)return void c.API.log("goto: skipping, already on slide", d);
				c.nextSlide = d, clearTimeout(c.timeoutId), c.timeoutId = 0, c.API.log("goto: ", d, " (zero-index)"), b = c.currSlide < c.nextSlide, c.API.prepareTx(!0, b)
			}
		}, stop: function () {
			var b = this.opts(), c = b.container;
			clearTimeout(b.timeoutId), b.timeoutId = 0, b.API.stopTransition(), b.pauseOnHover && (b.pauseOnHover !== !0 && (c = a(b.pauseOnHover)), c.off("mouseenter mouseleave")), b.API.trigger("cycle-stopped", [b]).log("cycle-stopped")
		}, reinit: function () {
			var a = this.opts();
			a.API.destroy(), a.container.cycle()
		}, remove: function (b) {
			for (var c, d, e = this.opts(), f = [], g = 1, h = 0; h < e.slides.length; h++)c = e.slides[h], h == b ? d = c : (f.push(c), a(c).data("cycle.opts").slideNum = g, g++);
			d && (e.slides = a(f), e.slideCount--, a(d).remove(), b == e.currSlide ? e.API.advanceSlide(1) : b < e.currSlide ? e.currSlide-- : e.currSlide++, e.API.trigger("cycle-slide-removed", [e, b, d]).log("cycle-slide-removed"), e.API.updateView())
		}
	}), a(document).on("click.cycle", "[data-cycle-cmd]", function (b) {
		b.preventDefault();
		var c = a(this), d = c.data("cycle-cmd"), e = c.data("cycle-context") || ".cycle-slideshow";
		a(e).cycle(d, c.data("cycle-arg"))
	})
}(jQuery), function (a) {
	"use strict";
	function b(b, c) {
		var d;
		return b._hashFence ? void(b._hashFence = !1) : (d = window.location.hash.substring(1), void b.slides.each(function (e) {
			return a(this).data("cycle-hash") == d ? (c === !0 ? b.startingSlide = e : (b.nextSlide = e, b.API.prepareTx(!0, !1)), !1) : void 0
		}))
	}

	a(document).on("cycle-pre-initialize", function (c, d) {
		b(d, !0), d._onHashChange = function () {
			b(d, !1)
		}, a(window).on("hashchange", d._onHashChange)
	}), a(document).on("cycle-update-view", function (a, b, c) {
		c.hash && "#" + c.hash != window.location.hash && (b._hashFence = !0, window.location.hash = c.hash)
	}), a(document).on("cycle-destroyed", function (b, c) {
		c._onHashChange && a(window).off("hashchange", c._onHashChange)
	})
}(jQuery), function (a) {
	"use strict";
	a.extend(a.fn.cycle.defaults, {loader: !1}), a(document).on("cycle-bootstrap", function (b, c) {
		function d(b, d) {
			function f(b) {
				var f;
				"wait" == c.loader ? (h.push(b), 0 === j && (h.sort(g), e.apply(c.API, [h, d]), c.container.removeClass("cycle-loading"))) : (f = a(c.slides[c.currSlide]), e.apply(c.API, [b, d]), f.show(), c.container.removeClass("cycle-loading"))
			}

			function g(a, b) {
				return a.data("index") - b.data("index")
			}

			var h = [];
			if ("string" == a.type(b))b = a.trim(b); else if ("array" === a.type(b))for (var i = 0; i < b.length; i++)b[i] = a(b[i])[0];
			b = a(b);
			var j = b.length;
			j && (b.hide().appendTo("body").each(function (b) {
				function g() {
					0 === --i && (--j, f(k))
				}

				var i = 0, k = a(this), l = k.is("img") ? k : k.find("img");
				return k.data("index", b), l = l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'), l.length ? (i = l.length, void l.each(function () {
					this.complete ? g() : a(this).load(function () {
						g()
					}).error(function () {
						0 === --i && (c.API.log("slide skipped; img not loaded:", this.src), 0 === --j && "wait" == c.loader && e.apply(c.API, [h, d]))
					})
				})) : (--j, void h.push(k))
			}), j && c.container.addClass("cycle-loading"))
		}

		var e;
		c.loader && (e = c.API.add, c.API.add = d)
	})
}(jQuery), function (a) {
	"use strict";
	function b(b, c, d) {
		var e, f = b.API.getComponent("pager");
		f.each(function () {
			var f = a(this);
			if (c.pagerTemplate) {
				var g = b.API.tmpl(c.pagerTemplate, c, b, d[0]);
				e = a(g).appendTo(f)
			} else e = f.children().eq(b.slideCount - 1);
			e.on(b.pagerEvent, function (a) {
				a.preventDefault(), b.API.page(f, a.currentTarget)
			})
		})
	}

	function c(a, b) {
		var c = this.opts();
		if (!c.busy || c.manualTrump) {
			var d = a.children().index(b), e = d, f = c.currSlide < e;
			c.currSlide != e && (c.nextSlide = e, c.API.prepareTx(!0, f), c.API.trigger("cycle-pager-activated", [c, a, b]))
		}
	}

	a.extend(a.fn.cycle.defaults, {
		pager: "> .cycle-pager",
		pagerActiveClass: "cycle-pager-active",
		pagerEvent: "click.cycle",
		pagerTemplate: "<span>&bull;</span>"
	}), a(document).on("cycle-bootstrap", function (a, c, d) {
		d.buildPagerLink = b
	}), a(document).on("cycle-slide-added", function (a, b, d, e) {
		b.pager && (b.API.buildPagerLink(b, d, e), b.API.page = c)
	}), a(document).on("cycle-slide-removed", function (b, c, d) {
		if (c.pager) {
			var e = c.API.getComponent("pager");
			e.each(function () {
				var b = a(this);
				a(b.children()[d]).remove()
			})
		}
	}), a(document).on("cycle-update-view", function (b, c) {
		var d;
		c.pager && (d = c.API.getComponent("pager"), d.each(function () {
			a(this).children().removeClass(c.pagerActiveClass).eq(c.currSlide).addClass(c.pagerActiveClass)
		}))
	}), a(document).on("cycle-destroyed", function (a, b) {
		var c = b.API.getComponent("pager");
		c && (c.children().off(b.pagerEvent), b.pagerTemplate && c.empty())
	})
}(jQuery), function (a) {
	"use strict";
	a.extend(a.fn.cycle.defaults, {
		next: "> .cycle-next",
		nextEvent: "click.cycle",
		disabledClass: "disabled",
		prev: "> .cycle-prev",
		prevEvent: "click.cycle",
		swipe: !1
	}), a(document).on("cycle-initialized", function (a, b) {
		if (b.API.getComponent("next").on(b.nextEvent, function (a) {
				a.preventDefault(), b.API.next()
			}), b.API.getComponent("prev").on(b.prevEvent, function (a) {
				a.preventDefault(), b.API.prev()
			}), b.swipe) {
			var c = b.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle", d = b.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
			b.container.on(c, function () {
				b.API.next()
			}), b.container.on(d, function () {
				b.API.prev()
			})
		}
	}), a(document).on("cycle-update-view", function (a, b) {
		if (!b.allowWrap) {
			var c = b.disabledClass, d = b.API.getComponent("next"), e = b.API.getComponent("prev"), f = b._prevBoundry || 0, g = void 0 !== b._nextBoundry ? b._nextBoundry : b.slideCount - 1;
			b.currSlide == g ? d.addClass(c).prop("disabled", !0) : d.removeClass(c).prop("disabled", !1), b.currSlide === f ? e.addClass(c).prop("disabled", !0) : e.removeClass(c).prop("disabled", !1)
		}
	}), a(document).on("cycle-destroyed", function (a, b) {
		b.API.getComponent("prev").off(b.nextEvent), b.API.getComponent("next").off(b.prevEvent), b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
	})
}(jQuery), function (a) {
	"use strict";
	a.extend(a.fn.cycle.defaults, {progressive: !1}), a(document).on("cycle-pre-initialize", function (b, c) {
		if (c.progressive) {
			var d, e, f = c.API, g = f.next, h = f.prev, i = f.prepareTx, j = a.type(c.progressive);
			if ("array" == j)d = c.progressive; else if (a.isFunction(c.progressive))d = c.progressive(c); else if ("string" == j) {
				if (e = a(c.progressive), d = a.trim(e.html()), !d)return;
				if (/^(\[)/.test(d))try {
					d = a.parseJSON(d)
				} catch (k) {
					return void f.log("error parsing progressive slides", k)
				} else d = d.split(new RegExp(e.data("cycle-split") || "\n")), d[d.length - 1] || d.pop()
			}
			i && (f.prepareTx = function (a, b) {
				var e, f;
				return a || 0 === d.length ? void i.apply(c.API, [a, b]) : void(b && c.currSlide == c.slideCount - 1 ? (f = d[0], d = d.slice(1), c.container.one("cycle-slide-added", function (a, b) {
					setTimeout(function () {
						b.API.advanceSlide(1)
					}, 50)
				}), c.API.add(f)) : b || 0 !== c.currSlide ? i.apply(c.API, [a, b]) : (e = d.length - 1, f = d[e], d = d.slice(0, e), c.container.one("cycle-slide-added", function (a, b) {
					setTimeout(function () {
						b.currSlide = 1, b.API.advanceSlide(-1)
					}, 50)
				}), c.API.add(f, !0)))
			}), g && (f.next = function () {
				var a = this.opts();
				if (d.length && a.currSlide == a.slideCount - 1) {
					var b = d[0];
					d = d.slice(1), a.container.one("cycle-slide-added", function (a, b) {
						g.apply(b.API), b.container.removeClass("cycle-loading")
					}), a.container.addClass("cycle-loading"), a.API.add(b)
				} else g.apply(a.API)
			}), h && (f.prev = function () {
				var a = this.opts();
				if (d.length && 0 === a.currSlide) {
					var b = d.length - 1, c = d[b];
					d = d.slice(0, b), a.container.one("cycle-slide-added", function (a, b) {
						b.currSlide = 1, b.API.advanceSlide(-1), b.container.removeClass("cycle-loading")
					}), a.container.addClass("cycle-loading"), a.API.add(c, !0)
				} else h.apply(a.API)
			})
		}
	})
}(jQuery), function (a) {
	"use strict";
	a.extend(a.fn.cycle.defaults, {tmplRegex: "{{((.)?.*?)}}"}), a.extend(a.fn.cycle.API, {
		tmpl: function (b, c) {
			var d = new RegExp(c.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g"), e = a.makeArray(arguments);
			return e.shift(), b.replace(d, function (b, c) {
				var d, f, g, h, i = c.split(".");
				for (d = 0; d < e.length; d++)if (g = e[d]) {
					if (i.length > 1)for (h = g, f = 0; f < i.length; f++)g = h, h = h[i[f]] || c; else h = g[c];
					if (a.isFunction(h))return h.apply(g, e);
					if (void 0 !== h && null !== h && h != c)return h
				}
				return c
			})
		}
	})
}(jQuery), function (a) {
	"use strict";
	a.event.special.swipe = a.event.special.swipe || {
			scrollSupressionThreshold: 10, durationThreshold: 1e3, horizontalDistanceThreshold: 30, verticalDistanceThreshold: 75, setup: function () {
				var b = a(this);
				b.bind("touchstart", function (c) {
					function d(b) {
						if (g) {
							var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b;
							e = {time: (new Date).getTime(), coords: [c.pageX, c.pageY]}, Math.abs(g.coords[0] - e.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && b.preventDefault()
						}
					}

					var e, f = c.originalEvent.touches ? c.originalEvent.touches[0] : c, g = {time: (new Date).getTime(), coords: [f.pageX, f.pageY], origin: a(c.target)};
					b.bind("touchmove", d).one("touchend", function () {
						b.unbind("touchmove", d), g && e && e.time - g.time < a.event.special.swipe.durationThreshold && Math.abs(g.coords[0] - e.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(g.coords[1] - e.coords[1]) < a.event.special.swipe.verticalDistanceThreshold && g.origin.trigger("swipe").trigger(g.coords[0] > e.coords[0] ? "swipeleft" : "swiperight"), g = e = void 0
					})
				})
			}
		}, a.event.special.swipeleft = a.event.special.swipeleft || {
			setup: function () {
				a(this).bind("swipe", a.noop)
			}
		}, a.event.special.swiperight = a.event.special.swiperight || a.event.special.swipeleft
}(jQuery), function (a) {
	"use strict";
	a(document).on("cycle-bootstrap", function (a, b, c) {
		"carousel" === b.fx && (c.getSlideIndex = function (a) {
			var b = this.opts()._carouselWrap.children(), c = b.index(a);
			return c % b.length
		}, c.next = function () {
			var a = b.reverse ? -1 : 1;
			b.allowWrap === !1 && b.currSlide + a > b.slideCount - b.carouselVisible || (b.API.advanceSlide(a), b.API.trigger("cycle-next", [b]).log("cycle-next"))
		})
	}), a.fn.cycle.transitions.carousel = {
		preInit: function (b) {
			b.hideNonActive = !1, b.container.on("cycle-destroyed", a.proxy(this.onDestroy, b.API)), b.API.stopTransition = this.stopTransition;
			for (var c = 0; c < b.startingSlide; c++)b.container.append(b.slides[0])
		}, postInit: function (b) {
			var c, d, e, f, g = b.carouselVertical;
			b.carouselVisible && b.carouselVisible > b.slideCount && (b.carouselVisible = b.slideCount - 1);
			var h = b.carouselVisible || b.slides.length, i = {display: g ? "block" : "inline-block", position: "static"};
			if (b.container.css({position: "relative", overflow: "hidden"}), b.slides.css(i), b._currSlide = b.currSlide, f = a('<div class="cycle-carousel-wrap"></div>').prependTo(b.container).css({
					margin: 0,
					padding: 0,
					top: 0,
					left: 0,
					position: "absolute"
				}).append(b.slides), b._carouselWrap = f, g || f.css("white-space", "nowrap"), b.allowWrap !== !1) {
				for (d = 0; d < (void 0 === b.carouselVisible ? 2 : 1); d++) {
					for (c = 0; c < b.slideCount; c++)f.append(b.slides[c].cloneNode(!0));
					for (c = b.slideCount; c--;)f.prepend(b.slides[c].cloneNode(!0))
				}
				f.find(".cycle-slide-active").removeClass("cycle-slide-active"), b.slides.eq(b.startingSlide).addClass("cycle-slide-active")
			}
			b.pager && b.allowWrap === !1 && (e = b.slideCount - h, a(b.pager).children().filter(":gt(" + e + ")").hide()), b._nextBoundry = b.slideCount - b.carouselVisible, this.prepareDimensions(b)
		}, prepareDimensions: function (b) {
			var c, d, e, f = b.carouselVertical, g = b.carouselVisible || b.slides.length;
			if (b.carouselFluid && b.carouselVisible ? b._carouselResizeThrottle || this.fluidSlides(b) : b.carouselVisible && b.carouselSlideDimension ? (c = g * b.carouselSlideDimension, b.container[f ? "height" : "width"](c)) : b.carouselVisible && (c = g * a(b.slides[0])[f ? "outerHeight" : "outerWidth"](!0), b.container[f ? "height" : "width"](c)), d = b.carouselOffset || 0, b.allowWrap !== !1)if (b.carouselSlideDimension)d -= (b.slideCount + b.currSlide) * b.carouselSlideDimension; else {
				e = b._carouselWrap.children();
				for (var h = 0; h < b.slideCount + b.currSlide; h++)d -= a(e[h])[f ? "outerHeight" : "outerWidth"](!0)
			}
			b._carouselWrap.css(f ? "top" : "left", d)
		}, fluidSlides: function (b) {
			function c() {
				clearTimeout(e), e = setTimeout(d, 20)
			}

			function d() {
				b._carouselWrap.stop(!1, !0);
				var a = b.container.width() / b.carouselVisible;
				a = Math.ceil(a - g), b._carouselWrap.children().width(a), b._sentinel && b._sentinel.width(a), h(b)
			}

			var e, f = b.slides.eq(0), g = f.outerWidth() - f.width() + .11 * f.width(), h = this.prepareDimensions;
			a(window).on("resize", c), b._carouselResizeThrottle = c, d()
		}, transition: function (b, c, d, e, f) {
			var g, h = {}, i = b.nextSlide - b.currSlide, j = b.carouselVertical, k = b.speed;
			if (b.allowWrap === !1) {
				e = i > 0;
				var l = b._currSlide, m = b.slideCount - b.carouselVisible;
				i > 0 && b.nextSlide > m && l == m ? i = 0 : i > 0 && b.nextSlide > m ? i = b.nextSlide - l - (b.nextSlide - m) : 0 > i && b.currSlide > m && b.nextSlide > m ? i = 0 : 0 > i && b.currSlide > m ? i += b.currSlide - m : l = b.currSlide, g = this.getScroll(b, j, l, i), b.API.opts()._currSlide = b.nextSlide > m ? m : b.nextSlide
			} else e && 0 === b.nextSlide ? (g = this.getDim(b, b.currSlide, j), f = this.genCallback(b, e, j, f)) : e || b.nextSlide != b.slideCount - 1 ? g = this.getScroll(b, j, b.currSlide, i) : (g = this.getDim(b, b.currSlide, j), f = this.genCallback(b, e, j, f));
			h[j ? "top" : "left"] = e ? "-=" + g : "+=" + g, b.throttleSpeed && (k = g / a(b.slides[0])[j ? "height" : "width"]() * b.speed), b._carouselWrap.animate(h, k, b.easing, f)
		}, getDim: function (b, c, d) {
			var e = a(b.slides[c]);
			return e[d ? "outerHeight" : "outerWidth"](!0)
		}, getScroll: function (a, b, c, d) {
			var e, f = 0;
			if (d > 0)for (e = c; c + d > e; e++)f += this.getDim(a, e, b); else for (e = c; e > c + d; e--)f += this.getDim(a, e, b);
			return f
		}, genCallback: function (b, c, d, e) {
			return function () {
				var c = a(b.slides[b.nextSlide]).position(), f = 0 - c[d ? "top" : "left"] + (b.carouselOffset || 0);
				b._carouselWrap.css(b.carouselVertical ? "top" : "left", f), e()
			}
		}, stopTransition: function () {
			var a = this.opts();
			a.slides.stop(!1, !0), a._carouselWrap.stop(!1, !0)
		}, onDestroy: function () {
			var b = this.opts();
			b._carouselResizeThrottle && a(window).off("resize", b._carouselResizeThrottle), b.slides.prependTo(b.container), b._carouselWrap.remove()
		}
	}
}(jQuery), function (a, b) {
	a.fn.extend({
		scrollspy: function (c) {
			var d = {min: 0, max: 0, mode: "vertical", buffer: 0, container: b, onEnter: c.onEnter ? c.onEnter : [], onLeave: c.onLeave ? c.onLeave : [], onTick: c.onTick ? c.onTick : []}, c = a.extend({}, d, c);
			return this.each(function () {
				var b = this, d = c, e = a(d.container), f = d.mode, g = d.buffer, h = leaves = 0, i = !1;
				e.bind("scroll", function () {
					var c = {top: a(this).scrollTop(), left: a(this).scrollLeft()}, j = "vertical" == f ? c.top + g : c.left + g, k = d.max, l = d.min;
					a.isFunction(d.max) && (k = d.max()), a.isFunction(d.min) && (l = d.min()), 0 == k && (k = "vertical" == f ? e.height() : e.outerWidth() + a(b).outerWidth()), j >= l && k >= j ? (i || (i = !0, h++, a(b).trigger("scrollEnter", {position: c}), a.isFunction(d.onEnter) && d.onEnter(b, c)), a(b).trigger("scrollTick", {
						position: c,
						inside: i,
						enters: h,
						leaves: leaves
					}), a.isFunction(d.onTick) && d.onTick(b, c, i, h, leaves)) : i && (i = !1, leaves++, a(b).trigger("scrollLeave", {position: c, leaves: leaves}), a.isFunction(d.onLeave) && d.onLeave(b, c))
				})
			})
		}
	})
}(jQuery, window), function (a) {
	a.extend(a.fn, {
		validate: function (b) {
			if (!this.length)return void(b && b.debug && window.console);
			var c = a.data(this[0], "validator");
			return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
				c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
			}), this.submit(function (b) {
				function d() {
					var d;
					return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
				}

				return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
			})), c)
		}, valid: function () {
			if (a(this[0]).is("form"))return this.validate().form();
			var b = !0, c = a(this[0].form).validate();
			return this.each(function () {
				b = b && c.element(this)
			}), b
		}, removeAttrs: function (b) {
			var c = {}, d = this;
			return a.each(b.split(/\s/), function (a, b) {
				c[b] = d.attr(b), d.removeAttr(b)
			}), c
		}, rules: function (b, c) {
			var d = this[0];
			if (b) {
				var e = a.data(d.form, "validator").settings, f = e.rules, g = a.validator.staticRules(d);
				switch (b) {
					case"add":
						a.extend(g, a.validator.normalizeRule(c)), delete g.messages, f[d.name] = g, c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
						break;
					case"remove":
						if (!c)return delete f[d.name], g;
						var h = {};
						return a.each(c.split(/\s/), function (a, b) {
							h[b] = g[b], delete g[b]
						}), h
				}
			}
			var i = a.validator.normalizeRules(a.extend({}, a.validator.classRules(d), a.validator.attributeRules(d), a.validator.dataRules(d), a.validator.staticRules(d)), d);
			if (i.required) {
				var j = i.required;
				delete i.required, i = a.extend({required: j}, i)
			}
			return i
		}
	}), a.extend(a.expr[":"], {
		blank: function (b) {
			return !a.trim("" + a(b).val())
		}, filled: function (b) {
			return !!a.trim("" + a(b).val())
		}, unchecked: function (b) {
			return !a(b).prop("checked")
		}
	}), a.validator = function (b, c) {
		this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
	}, a.validator.format = function (b, c) {
		return 1 === arguments.length ? function () {
			var c = a.makeArray(arguments);
			return c.unshift(b), a.validator.format.apply(this, c)
		} : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
			b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
				return c
			})
		}), b)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function (a) {
				this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
			},
			onfocusout: function (a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function (a, b) {
				(9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
			},
			onclick: function (a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
			},
			unhighlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
			}
		},
		setDefaults: function (b) {
			a.extend(a.validator.defaults, b)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: a.validator.format("Please enter no more than {0} characters."),
			minlength: a.validator.format("Please enter at least {0} characters."),
			rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			range: a.validator.format("Please enter a value between {0} and {1}."),
			max: a.validator.format("Please enter a value less than or equal to {0}."),
			min: a.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function () {
				function b(b) {
					var c = a.data(this[0].form, "validator"), d = "on" + b.type.replace(/^validate/, "");
					c.settings[d] && c.settings[d].call(c, this[0], b)
				}

				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var c = this.groups = {};
				a.each(this.settings.groups, function (b, d) {
					"string" == typeof d && (d = d.split(/\s/)), a.each(d, function (a, d) {
						c[d] = b
					})
				});
				var d = this.settings.rules;
				a.each(d, function (b, c) {
					d[b] = a.validator.normalizeRule(c)
				}), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
			}, form: function () {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			}, checkForm: function () {
				this.prepareForm();
				for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)this.check(b[a]);
				return this.valid()
			}, element: function (b) {
				b = this.validationTargetFor(this.clean(b)), this.lastElement = b, this.prepareElement(b), this.currentElements = a(b);
				var c = this.check(b) !== !1;
				return c ? delete this.invalid[b.name] : this.invalid[b.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
			}, showErrors: function (b) {
				if (b) {
					a.extend(this.errorMap, b), this.errorList = [];
					for (var c in b)this.errorList.push({message: b[c], element: this.findByName(c)[0]});
					this.successList = a.grep(this.successList, function (a) {
						return !(a.name in b)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			}, resetForm: function () {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
			}, numberOfInvalids: function () {
				return this.objectLength(this.invalid)
			}, objectLength: function (a) {
				var b = 0;
				for (var c in a)b++;
				return b
			}, hideErrors: function () {
				this.addWrapper(this.toHide).hide()
			}, valid: function () {
				return 0 === this.size()
			}, size: function () {
				return this.errorList.length
			}, focusInvalid: function () {
				if (this.settings.focusInvalid)try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (b) {
				}
			}, findLastActive: function () {
				var b = this.lastActive;
				return b && 1 === a.grep(this.errorList, function (a) {
						return a.element.name === b.name
					}).length && b
			}, elements: function () {
				var b = this, c = {};
				return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
					return !this.name && b.settings.debug && window.console, this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
				})
			}, clean: function (b) {
				return a(b)[0]
			}, errors: function () {
				var b = this.settings.errorClass.replace(" ", ".");
				return a(this.settings.errorElement + "." + b, this.errorContext)
			}, reset: function () {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
			}, prepareForm: function () {
				this.reset(), this.toHide = this.errors().add(this.containers)
			}, prepareElement: function (a) {
				this.reset(), this.toHide = this.errorsFor(a)
			}, elementValue: function (b) {
				var c = a(b).attr("type"), d = a(b).val();
				return "radio" === c || "checkbox" === c ? a("input[name='" + a(b).attr("name") + "']:checked").val() : "string" == typeof d ? d.replace(/\r/g, "") : d
			}, check: function (b) {
				b = this.validationTargetFor(this.clean(b));
				var c, d = a(b).rules(), e = !1, f = this.elementValue(b);
				for (var g in d) {
					var h = {method: g, parameters: d[g]};
					try {
						if (c = a.validator.methods[g].call(this, f, b, h.parameters), "dependency-mismatch" === c) {
							e = !0;
							continue
						}
						if (e = !1, "pending" === c)return void(this.toHide = this.toHide.not(this.errorsFor(b)));
						if (!c)return this.formatAndAdd(b, h), !1
					} catch (i) {
						throw this.settings.debug && window.console, i
					}
				}
				return e ? void 0 : (this.objectLength(d) && this.successList.push(b), !0)
			}, customDataMessage: function (b, c) {
				return a(b).data("msg-" + c.toLowerCase()) || b.attributes && a(b).attr("data-msg-" + c.toLowerCase())
			}, customMessage: function (a, b) {
				var c = this.settings.messages[a];
				return c && (c.constructor === String ? c : c[b])
			}, findDefined: function () {
				for (var a = 0; a < arguments.length; a++)if (void 0 !== arguments[a])return arguments[a];
				return void 0
			}, defaultMessage: function (b, c) {
				return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
			}, formatAndAdd: function (b, c) {
				var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
				"function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
					message: d,
					element: b
				}), this.errorMap[b.name] = d, this.submitted[b.name] = d
			}, addWrapper: function (a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			}, defaultShowErrors: function () {
				var a, b;
				for (a = 0; this.errorList[a]; a++) {
					var c = this.errorList[a];
					this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message)
				}
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (a = 0; this.successList[a]; a++)this.showLabel(this.successList[a]);
				if (this.settings.unhighlight)for (a = 0, b = this.validElements(); b[a]; a++)this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			}, validElements: function () {
				return this.currentElements.not(this.invalidElements())
			}, invalidElements: function () {
				return a(this.errorList).map(function () {
					return this.element
				})
			}, showLabel: function (b, c) {
				var d = this.errorsFor(b);
				d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
			}, errorsFor: function (b) {
				var c = this.idOrName(b);
				return this.errors().filter(function () {
					return a(this).attr("for") === c
				})
			}, idOrName: function (a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			}, validationTargetFor: function (a) {
				return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
			}, checkable: function (a) {
				return /radio|checkbox/i.test(a.type)
			}, findByName: function (b) {
				return a(this.currentForm).find("[name='" + b + "']")
			}, getLength: function (b, c) {
				switch (c.nodeName.toLowerCase()) {
					case"select":
						return a("option:selected", c).length;
					case"input":
						if (this.checkable(c))return this.findByName(c.name).filter(":checked").length
				}
				return b.length
			}, depend: function (a, b) {
				return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
			}, dependTypes: {
				"boolean": function (a) {
					return a
				}, string: function (b, c) {
					return !!a(b, c.form).length
				}, "function": function (a, b) {
					return a(b)
				}
			}, optional: function (b) {
				var c = this.elementValue(b);
				return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
			}, startRequest: function (a) {
				this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
			}, stopRequest: function (b, c) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			}, previousValue: function (b) {
				return a.data(b, "previousValue") || a.data(b, "previousValue", {old: null, valid: !0, message: this.defaultMessage(b, "remote")})
			}
		},
		classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}},
		addClassRules: function (b, c) {
			b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
		},
		classRules: function (b) {
			var c = {}, d = a(b).attr("class");
			return d && a.each(d.split(" "), function () {
				this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
			}), c
		},
		attributeRules: function (b) {
			var c = {}, d = a(b), e = d[0].getAttribute("type");
			for (var f in a.validator.methods) {
				var g;
				"required" === f ? (g = d.get(0).getAttribute(f), "" === g && (g = !0), g = !!g) : g = d.attr(f), /min|max/.test(f) && (null === e || /number|range|text/.test(e)) && (g = Number(g)), g ? c[f] = g : e === f && "range" !== e && (c[f] = !0)
			}
			return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c
		},
		dataRules: function (b) {
			var c, d, e = {}, f = a(b);
			for (c in a.validator.methods)d = f.data("rule-" + c.toLowerCase()), void 0 !== d && (e[c] = d);
			return e
		},
		staticRules: function (b) {
			var c = {}, d = a.data(b.form, "validator");
			return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
		},
		normalizeRules: function (b, c) {
			return a.each(b, function (d, e) {
				if (e === !1)return void delete b[d];
				if (e.param || e.depends) {
					var f = !0;
					switch (typeof e.depends) {
						case"string":
							f = !!a(e.depends, c.form).length;
							break;
						case"function":
							f = e.depends.call(c, c)
					}
					f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
				}
			}), a.each(b, function (d, e) {
				b[d] = a.isFunction(e) ? e(c) : e
			}), a.each(["minlength", "maxlength"], function () {
				b[this] && (b[this] = Number(b[this]))
			}), a.each(["rangelength", "range"], function () {
				var c;
				b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
			}), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
		},
		normalizeRule: function (b) {
			if ("string" == typeof b) {
				var c = {};
				a.each(b.split(/\s/), function () {
					c[this] = !0
				}), b = c
			}
			return b
		},
		addMethod: function (b, c, d) {
			a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
		},
		methods: {
			required: function (b, c, d) {
				if (!this.depend(d, c))return "dependency-mismatch";
				if ("select" === c.nodeName.toLowerCase()) {
					var e = a(c).val();
					return e && e.length > 0
				}
				return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
			}, email: function (a, b) {
				return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
			}, url: function (a, b) {
				return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
			}, date: function (a, b) {
				return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
			}, dateISO: function (a, b) {
				return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
			}, number: function (a, b) {
				return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			}, digits: function (a, b) {
				return this.optional(b) || /^\d+$/.test(a)
			}, creditcard: function (a, b) {
				if (this.optional(b))return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(a))return !1;
				var c = 0, d = 0, e = !1;
				a = a.replace(/\D/g, "");
				for (var f = a.length - 1; f >= 0; f--) {
					var g = a.charAt(f);
					d = parseInt(g, 10), e && (d *= 2) > 9 && (d -= 9), c += d, e = !e
				}
				return c % 10 === 0
			}, minlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
				return this.optional(c) || e >= d
			}, maxlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
				return this.optional(c) || d >= e
			}, rangelength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
				return this.optional(c) || e >= d[0] && e <= d[1]
			}, min: function (a, b, c) {
				return this.optional(b) || a >= c
			}, max: function (a, b, c) {
				return this.optional(b) || c >= a
			}, range: function (a, b, c) {
				return this.optional(b) || a >= c[0] && a <= c[1]
			}, equalTo: function (b, c, d) {
				var e = a(d);
				return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
					a(c).valid()
				}), b === e.val()
			}, remote: function (b, c, d) {
				if (this.optional(c))return "dependency-mismatch";
				var e = this.previousValue(c);
				if (this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), e.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = e.message, d = "string" == typeof d && {url: d} || d, e.old === b)return e.valid;
				e.old = b;
				var f = this;
				this.startRequest(c);
				var g = {};
				return g[c.name] = b, a.ajax(a.extend(!0, {
					url: d, mode: "abort", port: "validate" + c.name, dataType: "json", data: g, success: function (d) {
						f.settings.messages[c.name].remote = e.originalMessage;
						var g = d === !0 || "true" === d;
						if (g) {
							var h = f.formSubmitted;
							f.prepareElement(c), f.formSubmitted = h, f.successList.push(c), delete f.invalid[c.name], f.showErrors()
						} else {
							var i = {}, j = d || f.defaultMessage(c, "remote");
							i[c.name] = e.message = a.isFunction(j) ? j(b) : j, f.invalid[c.name] = !0, f.showErrors(i)
						}
						e.valid = g, f.stopRequest(c, g)
					}
				}, d)), "pending"
			}
		}
	}), a.format = a.validator.format
}(jQuery), function (a) {
	var b = {};
	if (a.ajaxPrefilter)a.ajaxPrefilter(function (a, c, d) {
		var e = a.port;
		"abort" === a.mode && (b[e] && b[e].abort(), b[e] = d)
	}); else {
		var c = a.ajax;
		a.ajax = function (d) {
			var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
			return "abort" === e ? (b[f] && b[f].abort(), b[f] = c.apply(this, arguments), b[f]) : c.apply(this, arguments)
		}
	}
}(jQuery), function (a) {
	a.extend(a.fn, {
		validateDelegate: function (b, c, d) {
			return this.bind(c, function (c) {
				var e = a(c.target);
				return e.is(b) ? d.apply(e, arguments) : void 0
			})
		}
	})
}(jQuery), $.validator.addMethod("require_from_group", function (a, b, c) {
	var d = $(c[1], b.form), e = d.eq(0), f = e.data("valid_req_grp") ? e.data("valid_req_grp") : $.extend({}, this), g = d.filter(function () {
			return f.elementValue(this)
		}).length >= c[0];
	return e.data("valid_req_grp", f), $(b).data("being_validated") || (d.data("being_validated", !0), d.each(function () {
		f.element(this)
	}), d.data("being_validated", !1)), g
}, $.validator.format("Please fill at least {0} of these fields.")), $.validator.addMethod("accept", function (a, b, c) {
	var d, e, f = "string" == typeof c ? c.replace(/\s/g, "").replace(/,/g, "|") : "image/*", g = this.optional(b);
	if (g)return g;
	if ("file" === $(b).attr("type") && (f = f.replace(/\*/g, ".*"), b.files && b.files.length))for (d = 0; d < b.files.length; d++)if (e = b.files[d], !e.type.match(new RegExp(".?(" + f + ")$", "i")))return !1;
	return !0
}, $.validator.format("Please enter a value with a valid mimetype.")), $.validator.messages._locale || ($.validator.messages._locale = {}), $.validator.messages._locale.ru = {
	required: "Это поле необходимо заполнить.",
	require_from_group: "Пожалуйста, заполните хотя бы {0} их этих полей.",
	remote: "Пожалуйста, введите правильное значение.",
	email: "Пожалуйста, введите корректный адрес электронной почты.",
	url: "Пожалуйста, введите корректный URL.",
	date: "Пожалуйста, введите корректную дату.",
	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
	number: "Пожалуйста, введите число.",
	digits: "Пожалуйста, вводите только цифры.",
	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
	extension: "Пожалуйста, выберите файл с правильным расширением.",
	maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
	minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
	rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
	range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
	max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
	min: $.validator.format("Пожалуйста, введите число, большее или равное {0}."),
	accept: $.validator.format("Неверный формат файла."),
	phone: "Пожалуйста, введите корректный номер телефона."
}, function (a) {
	"use strict";
	var b = function (b, c) {
		this.options = c, this.$element = a(b), a(this.$element).on("insert.limiter", a.proxy(this.check, this)), a(this.$element).on("keyup.limiter", a.proxy(this.check, this))
	};
	b.prototype.check = function (a) {
		var b = this.$element.val().length;
		this.options.limit && (b > this.options.limit && a.preventDefault(), this.options.counter && this.options.counter.text(this.options.limit - b), this.options.limit - b < 0 ? this.options.counter.addClass("negative") : this.options.counter.removeClass("negative"))
	}, b.prototype._getClipboardData = function (a, b) {
		var c;
		return a && a.originalEvent && a.originalEvent.clipboardData && a.originalEvent.clipboardData.items && a.originalEvent.clipboardData.items.length > 0 && "string" === a.originalEvent.clipboardData.items[0].kind && (c = a.originalEvent.clipboardData.items[0].getAsString(b)), c
	}, b.prototype.onPaste = function (a) {
		var b = this;
		if (this.options.limit) {
			{
				this.$element.val()
			}
			this._getClipboardData(a, function (a) {
				a && a.length && (b.$element.val(a.substring(0, b.options.limit)), b.options.counter && b.options.counter.text(b.options.limit - a.length))
			})
		}
	}, a.fn.limited = function (c) {
		return this.each(function () {
			var d = a(this), e = d.data("limiter"), f = "object" == typeof c && c;
			e || d.data("limiter", e = new b(this, f))
		})
	}
}(window.jQuery), function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
	function b(a) {
		return g.raw ? a : encodeURIComponent(a)
	}

	function c(a) {
		return g.raw ? a : decodeURIComponent(a)
	}

	function d(a) {
		return b(g.json ? JSON.stringify(a) : String(a))
	}

	function e(a) {
		0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return a = decodeURIComponent(a), g.json ? JSON.parse(a) : a
		} catch (b) {
		}
	}

	function f(b, c) {
		var d = g.raw ? b : e(b);
		return a.isFunction(c) ? c(d) : d
	}

	var g = a.cookie = function (e, h, i) {
		if (void 0 !== h && !a.isFunction(h)) {
			if (i = a.extend({}, g.defaults, i), "number" == typeof i.expires) {
				var j = i.expires, k = i.expires = new Date;
				k.setTime(+k + 864e5 * j)
			}
			return document.cookie = [b(e), "=", d(h), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
		}
		for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
			var p = m[n].split("="), q = c(p.shift()), r = p.join("=");
			if (e && e === q) {
				l = f(r, h);
				break
			}
			e || void 0 === (r = f(r)) || (l[q] = r)
		}
		return l
	};
	g.defaults = {}, a.removeCookie = function (b, c) {
		return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {expires: -1})), !a.cookie(b))
	}
}), function (a) {
	"function" == typeof define && define.amd ? define(a) : window.purl = a()
}(function () {
	function a(a, b) {
		for (var c = decodeURI(a), d = p[b ? "strict" : "loose"].exec(c), e = {attr: {}, param: {}, seg: {}}, g = 14; g--;)e.attr[n[g]] = d[g] || "";
		return e.param.query = f(e.attr.query), e.param.fragment = f(e.attr.fragment), e.seg.path = e.attr.path.replace(/^\/+|\/+$/g, "").split("/"), e.seg.fragment = e.attr.fragment.replace(/^\/+|\/+$/g, "").split("/"), e.attr.base = e.attr.host ? (e.attr.protocol ? e.attr.protocol + "://" + e.attr.host : e.attr.host) + (e.attr.port ? ":" + e.attr.port : "") : "", e
	}

	function b(a) {
		var b = a.tagName;
		return "undefined" != typeof b ? m[b.toLowerCase()] : b
	}

	function c(a, b) {
		if (0 === a[b].length)return a[b] = {};
		var c = {};
		for (var d in a[b])c[d] = a[b][d];
		return a[b] = c, c
	}

	function d(a, b, e, f) {
		var g = a.shift();
		if (g) {
			var h = b[e] = b[e] || [];
			"]" == g ? j(h) ? "" !== f && h.push(f) : "object" == typeof h ? h[k(h).length] = f : h = b[e] = [b[e], f] : ~g.indexOf("]") ? (g = g.substr(0, g.length - 1), !q.test(g) && j(h) && (h = c(b, e)), d(a, h, g, f)) : (!q.test(g) && j(h) && (h = c(b, e)), d(a, h, g, f))
		} else j(b[e]) ? b[e].push(f) : b[e] = "object" == typeof b[e] ? f : "undefined" == typeof b[e] ? f : [b[e], f]
	}

	function e(a, b, c) {
		if (~b.indexOf("]")) {
			var e = b.split("[");
			d(e, a, "base", c)
		} else {
			if (!q.test(b) && j(a.base)) {
				var f = {};
				for (var h in a.base)f[h] = a.base[h];
				a.base = f
			}
			"" !== b && g(a.base, b, c)
		}
		return a
	}

	function f(a) {
		return i(String(a).split(/&|;/), function (a, b) {
			try {
				b = decodeURIComponent(b.replace(/\+/g, " "))
			} catch (c) {
			}
			var d = b.indexOf("="), f = h(b), g = b.substr(0, f || d), i = b.substr(f || d, b.length);
			return i = i.substr(i.indexOf("=") + 1, i.length), "" === g && (g = b, i = ""), e(a, g, i)
		}, {base: {}}).base
	}

	function g(a, b, c) {
		var d = a[b];
		"undefined" == typeof d ? a[b] = c : j(d) ? d.push(c) : a[b] = [d, c]
	}

	function h(a) {
		for (var b, c, d = a.length, e = 0; d > e; ++e)if (c = a[e], "]" == c && (b = !1), "[" == c && (b = !0), "=" == c && !b)return e
	}

	function i(a, b) {
		for (var c = 0, d = a.length >> 0, e = arguments[2]; d > c;)c in a && (e = b.call(void 0, e, a[c], c, a)), ++c;
		return e
	}

	function j(a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	}

	function k(a) {
		var b = [];
		for (var c in a)a.hasOwnProperty(c) && b.push(c);
		return b
	}

	function l(b, c) {
		return 1 === arguments.length && b === !0 && (c = !0, b = void 0), c = c || !1, b = b || window.location.toString(), {
			data: a(b, c), attr: function (a) {
				return a = o[a] || a, "undefined" != typeof a ? this.data.attr[a] : this.data.attr
			}, param: function (a) {
				return "undefined" != typeof a ? this.data.param.query[a] : this.data.param.query
			}, fparam: function (a) {
				return "undefined" != typeof a ? this.data.param.fragment[a] : this.data.param.fragment
			}, segment: function (a) {
				return "undefined" == typeof a ? this.data.seg.path : (a = 0 > a ? this.data.seg.path.length + a : a - 1, this.data.seg.path[a])
			}, fsegment: function (a) {
				return "undefined" == typeof a ? this.data.seg.fragment : (a = 0 > a ? this.data.seg.fragment.length + a : a - 1, this.data.seg.fragment[a])
			}
		}
	}

	var m = {
		a: "href",
		img: "src",
		form: "action",
		base: "href",
		script: "src",
		iframe: "src",
		link: "href",
		embed: "src",
		object: "data"
	}, n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"], o = {anchor: "fragment"}, p = {
		strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
		loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	}, q = /^[0-9]+$/;
	return l.jQuery = function (a) {
		null != a && (a.fn.url = function (c) {
			var d = "";
			return this.length && (d = a(this).attr(b(this[0])) || ""), l(d, c)
		}, a.url = l)
	}, l.jQuery(window.jQuery), l
}), function (a, b) {
	"use strict";
	"object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Tooltip = b()
}(this, function () {
	"use strict";
	function a(a) {
		if (!a)throw new Error("Tooltip configuration required.");
		this.fixed = a.fixed, this.container = a.container, this.target = a.target, this.content = a.content, this.visible = !1, this.container || (this.container = document.createElement("div"), this.container.className = a.className ? a.className : "tooltip"), a.title && (this.titleElement = document.createElement("div"), this.titleElement.className = "tooltip-title", this.title = a.title, this.titleElement.innerHTML = this.title, this.container.appendChild(this.titleElement)), this.content || (this.contentElement = document.createElement("div"), this.contentElement.className = "tooltip-content", this.target && (this.content = this.target.getAttribute("data-tooltip-text")), this.contentElement.innerHTML = this.content || "", this.container.appendChild(this.contentElement)), this.offset = a.offset ? a.offset : {
			x: 0,
			y: 0
		}, this.getTargetBoundaries(), this.timeout = 500, a.onShow && (this.onShow = a.onShow.bind(this)), a.onHide && (this.onHide = a.onHide.bind(this)), this.attach()
	}

	return a.prototype.init = function () {
	}, a.prototype.toString = function () {
		return "[Tooltip]"
	}, a.prototype.getTargetBoundaries = function () {
		if (this.target) {
			var a = this.target.offsetLeft, b = this.target.offsetTop;
			if (this.target.offsetParent) {
				var c = this.target.offsetParent;
				do a += c.offsetLeft - c.scrollLeft, b += c.offsetTop - c.scrollTop; while (c = c.offsetParent)
			}
			return this.targetBoundaries = {left: a, top: b, right: a + this.target.offsetWidth, bottom: b + this.target.offsetHeight}, this.targetBoundaries
		}
	}, a.prototype._getTargetBoundaries = function () {
		return this.targetBoundaries = this.target.getBoundingClientRect(), this.targetBoundaries
	}, a.prototype.attach = function () {
		this.target && (this.target.addEventListener ? this.target.addEventListener("mouseover", this.onMouseOver.bind(this), !1) : this.target.attachEvent("onmouseover", this.onMouseOver.bind(this)), this.fixed || (this.target.addEventListener ? this.target.addEventListener("mousemove", this.onMouseMove.bind(this), !1) : this.target.attachEvent("onmousemove", this.onMouseMove.bind(this))), this.target.addEventListener ? this.target.addEventListener("mouseout", this.onMouseOut.bind(this), !1) : this.target.attachEvent("onmouseout", this.onMouseOut.bind(this)))
	}, a.prototype.onMouseOver = function (a) {
		this.onMouseMove(a), this.show(), this.hideTimer && (clearTimeout(this.hideTimer), delete this.hideTimer)
	}, a.prototype.onMouseMove = function (a) {
		if (a.pageX < this.targetBoundaries.left || a.pageX > this.targetBoundaries.right || a.pageY < this.targetBoundaries.top || a.pageY > this.targetBoundaries.bottom)return this.hide(), void(this.hideTimer && (clearTimeout(this.hideTimer), delete this.hideTimer));
		var b = a.pageX, c = a.pageY;
		this.offset && (b += this.offset.x, c += this.offset.y), this.container.style.left = b + "px", this.container.style.top = c + "px"
	}, a.prototype.onMouseOut = function (a) {
		function b() {
			c.hide(), clearTimeout(c.hideTimer), delete c.hideTimer
		}

		this.onMouseMove(a);
		var c = this;
		this.hideTimer || (this.hideTimer = setTimeout(b, this.timeout))
	}, a.prototype.onContainerMouseOver = function (a) {
		this.onMouseMove(a), this.hideTimer && (clearTimeout(this.hideTimer), delete this.hideTimer)
	}, a.prototype.onContainerMouseMove = function (a) {
		this.onMouseMove(a)
	}, a.prototype.onContainerMouseOut = function (a) {
		function b() {
			c.hide(), clearTimeout(c.hideTimer), delete c.hideTimer
		}

		this.onMouseMove(a);
		var c = this;
		this.hideTimer || (this.hideTimer = setTimeout(b, this.timeout))
	}, a.prototype.show = function () {
		return document.body.appendChild(this.container), this.container.style.display = "block", this.visible = !0, this.container.addEventListener ? this.container.addEventListener("mouseover", this.onContainerMouseOver.bind(this), !0) : this.container.attachEvent("onmouseover", this.onContainerMouseOver.bind(this)), this.fixed || (this.container.addEventListener ? this.container.addEventListener("mousemove", this.onContainerMouseMove.bind(this), !0) : this.container.attachEvent("onmousemove", this.onContainerMouseMove.bind(this))), this.container.addEventListener ? this.container.addEventListener("mouseout", this.onContainerMouseOut.bind(this), !0) : this.container.attachEvent("onmouseout", this.onContainerMouseOut.bind(this)), this.onShow(), this
	}, a.prototype.hide = function () {
		return this.container.style.display = "none", this.visible = !1, this.onHide(), this
	}, a.prototype.update = function (a) {
		this.content = a, this.contentElement.innerHTML = a
	}, a.prototype.position = function () {
	}, a.prototype.onShow = function () {
	}, a.prototype.onHide = function () {
	}, a.prototype.fadeOut = function () {
	}, a
}), function (a, b) {
	"use strict";
	"object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.PointingTooltip = b()
}(this, function () {
	"use strict";
	function a(a) {
		Tooltip.call(this, a), this.pointerOrigin = a.pointerOrigin, this.scrollContainer = a.scrollContainer || document.body, this.axis = a.axis, this.movingArrow = a.movingArrow, this.arrow = document.createElement("div"), this.arrow.className = "tooltip-arrow", this.container.appendChild(this.arrow), this.containerBoundaries = this.getContainerDimensions(), this.isHide = a.isHide
	}

	return Function.prototype.subclass || (Function.prototype.subclass = function (a) {
		var b = Function.prototype.subclass.nonconstructor;
		b.prototype = a.prototype, this.prototype = new b
	}, Function.prototype.subclass.nonconstructor = function () {
	}), a.subclass(Tooltip), a.prototype.getContainerDimensions = function () {
		return this.container.style.display = "block", this.container.style.position = "absolute", this.container.style.left = -1e4 + "px", this.container.style.top = -1e4 + "px", document.body.appendChild(this.container), {
			width: this.container.offsetWidth,
			height: this.container.offsetHeight
		}
	}, a.prototype.onMouseMove = function (a) {
		var b = a.x || a.clientX, c = a.y || a.clientY, d = this.getTargetBoundaries();
		if (this._getTargetBoundaries(), b < this.targetBoundaries.left || b > this.targetBoundaries.right || c < this.targetBoundaries.top || c > this.targetBoundaries.bottom)return this.isHide && this.hide(), void(this.hideTimer && (clearTimeout(this.hideTimer), delete this.hideTimer));
		var e = b, f = c;
		this.offset && (e += this.offset.x, f += this.offset.y);
		var g = this.pointerOrigin, h = Math.abs(this.targetBoundaries.right - this.targetBoundaries.left), i = Math.abs(this.targetBoundaries.bottom - this.targetBoundaries.top), j = this.offset.x, k = this.offset.y;
		if (g)switch ("x" === this.axis && this.targetBoundaries.top - this.scrollContainer.scrollTop - this.containerBoundaries.height < 0 && (g = "bottom"), "y" === this.axis && this.targetBoundaries.left - this.scrollContainer.scrollLeft - this.containerBoundaries.width < 0 && (g = "right"), d.left > parseInt(this.targetBoundaries.left.toFixed()) && (b < d.left ? "top" === g && (k -= i / 2) : "bottom" === g && (k -= i / 2)), g) {
			case"center":
				e = this.targetBoundaries.left + h / 2, f = this.targetBoundaries.top + i / 2;
				break;
			case"left":
				e = this.targetBoundaries.left - this.containerBoundaries.width - j, f = this.targetBoundaries.top + i / 2 - this.containerBoundaries.height / 2;
				break;
			case"right":
				e = this.targetBoundaries.right + j, f = this.targetBoundaries.top + i / 2 - this.containerBoundaries.height / 2;
				break;
			case"top":
				e = this.targetBoundaries.left + h / 2 - this.containerBoundaries.width / 2 + j, f = this.targetBoundaries.top - this.containerBoundaries.height - k;
				break;
			case"bottom":
				e = this.targetBoundaries.left + h / 2 - this.containerBoundaries.width / 2 + j, f = this.targetBoundaries.bottom + k
		}
		this.axis && ("x" === this.axis && (e = b - this.containerBoundaries.width / 2 + this.offset.x), "y" === this.axis && (f = c - this.containerBoundaries.height / 2 + this.offset.y)), e += document.body.scrollLeft || window.document.documentElement.scrollLeft, f += document.body.scrollTop || window.document.documentElement.scrollTop, e >= 0 ? e + this.containerBoundaries.width > document.body.offsetWidth && (e = document.body.offsetWidth - this.containerBoundaries.width) : e = this.offset.x, 0 > f && (f = this.offset.y), this.container.style.left = e + "px", this.container.style.top = f + "px", this.positionArrow(a, e, f, g)
	}, a.prototype.positionArrow = function (a, b, c, d) {
		switch (d) {
			case"left":
				return void(this.arrow.className = "tooltip-arrow tooltip-arrow-right");
			case"right":
				return void(this.arrow.className = "tooltip-arrow tooltip-arrow-left")
		}
		a.pageY < this.targetBoundaries.top + 15 && (this.arrow.className = "tooltip-arrow tooltip-arrow-up"), a.pageY > this.targetBoundaries.bottom - this.container.offsetHeight - 15 && (this.arrow.className = "tooltip-arrow tooltip-arrow-down"), a.pageX > this.targetBoundaries.right - this.container.offsetWidth - 15 && (this.arrow.className = "tooltip-arrow tooltip-arrow-right"), a.pageX < this.targetBoundaries.left + 15 && (this.arrow.className = "tooltip-arrow tooltip-arrow-left"), this.axis && ("x" === this.axis && ("top" === d && (this.arrow.className = "tooltip-arrow tooltip-arrow-down"), "bottom" === d && (this.arrow.className = "tooltip-arrow tooltip-arrow-up")), "y" === this.axis && ("left" === d && (this.arrow.className = "tooltip-arrow tooltip-arrow-right"), "right" === d && (this.arrow.className = "tooltip-arrow tooltip-arrow-left"))), this.movingArrow && this.axis && ("x" === this.axis && (this.arrow.style.left = b >= 0 ? a.pageX - b + "px" : a.pageX + "px"), "y" === this.axis && (this.arrow.style.top = c >= 0 ? a.pageY - c + "px" : a.pageY + "px"))
	}, a.prototype.__proto__ = Tooltip.prototype, a
}), function (a, b) {
	function c(a) {
		return function () {
			return this[a]
		}
	}

	function d(a, b) {
		var c = a.split("."), d = eb;
		!(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
		for (var e; c.length && (e = c.shift());)c.length || b === ab ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
	}

	function e(a) {
		return a.call.apply(a.bind, arguments)
	}

	function f(a, b) {
		if (!a)throw Error();
		if (2 < arguments.length) {
			var c = Array.prototype.slice.call(arguments, 2);
			return function () {
				var d = Array.prototype.slice.call(arguments);
				return Array.prototype.unshift.apply(d, c), a.apply(b, d)
			}
		}
		return function () {
			return a.apply(b, arguments)
		}
	}

	function g() {
		return g = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? e : f, g.apply(cb, arguments)
	}

	function h(a, b) {
		this.G = a, this.u = b || a, this.z = this.u.document, this.R = ab
	}

	function i(a, c, d) {
		a = a.z.getElementsByTagName(c)[0], a || (a = b.documentElement), a && a.lastChild && a.insertBefore(d, a.lastChild)
	}

	function j(a, b) {
		return a.createElement("link", {rel: "stylesheet", href: b})
	}

	function k(a, b) {
		return a.createElement("script", {src: b})
	}

	function l(a, b) {
		for (var c = a.className.split(/\s+/), d = 0, e = c.length; e > d; d++)if (c[d] == b)return;
		c.push(b), a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
	}

	function m(a, b) {
		for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; f > e; e++)c[e] != b && d.push(c[e]);
		a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
	}

	function n(a, b) {
		for (var c = a.className.split(/\s+/), d = 0, e = c.length; e > d; d++)if (c[d] == b)return bb;
		return db
	}

	function o(a) {
		if (a.R === ab) {
			var b = a.z.createElement("p");
			b.innerHTML = '<a style="top:1px;">w</a>', a.R = /top/.test(b.getElementsByTagName("a")[0].getAttribute("style"))
		}
		return a.R
	}

	function p(a) {
		var b = a.u.location.protocol;
		return "about:" == b && (b = a.G.location.protocol), "https:" == b ? "https:" : "http:"
	}

	function q(a, b, c) {
		this.w = a, this.T = b, this.Aa = c
	}

	function r(a, b, c, d) {
		this.e = a != cb ? a : cb, this.o = b != cb ? b : cb, this.ba = c != cb ? c : cb, this.f = d != cb ? d : cb
	}

	function s(a) {
		a = gb.exec(a);
		var b = cb, c = cb, d = cb, e = cb;
		return a && (a[1] !== cb && a[1] && (b = parseInt(a[1], 10)), a[2] !== cb && a[2] && (c = parseInt(a[2], 10)), a[3] !== cb && a[3] && (d = parseInt(a[3], 10)), a[4] !== cb && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4])), new r(b, c, d, e)
	}

	function t(a, b, c, d, e, f, g, h, i, j, k) {
		this.J = a, this.Ha = b, this.za = c, this.ga = d, this.Fa = e, this.fa = f, this.xa = g, this.Ga = h, this.wa = i, this.ea = j, this.k = k
	}

	function u(a, b) {
		this.a = a, this.H = b
	}

	function v(a) {
		var b = x(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
		return "" != b ? (/BB\d{2}/.test(b) && (b = "BlackBerry"), b) : (a = x(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1), "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown")
	}

	function w(a) {
		var b = x(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
		if (b || (b = x(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = x(a.a, /(iPhone )?OS ([\d_]+)/, 2)))return b;
		if (b = x(a.a, /(?:Linux|CrOS) ([^;)]+)/, 1))for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)if (/^[\d\._]+$/.test(b[c]))return b[c];
		return (a = x(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
	}

	function x(a, b, c) {
		return (a = a.match(b)) && a[c] ? a[c] : ""
	}

	function y(a) {
		return a.documentMode ? a.documentMode : void 0
	}

	function z(a) {
		this.va = a || "-"
	}

	function A(a, b) {
		this.J = a, this.U = 4, this.K = "n";
		var c = (b || "n4").match(/^([nio])([1-9])$/i);
		c && (this.K = c[1], this.U = parseInt(c[2], 10))
	}

	function B(a) {
		return a.K + a.U
	}

	function C(a) {
		var b = 4, c = "n", d = cb;
		return a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10)))), c + b
	}

	function D(a, b, c) {
		this.c = a, this.h = b, this.M = c, this.j = "wf", this.g = new z("-")
	}

	function E(a) {
		l(a.h, a.g.f(a.j, "loading")), G(a, "loading")
	}

	function F(a) {
		m(a.h, a.g.f(a.j, "loading")), n(a.h, a.g.f(a.j, "active")) || l(a.h, a.g.f(a.j, "inactive")), G(a, "inactive")
	}

	function G(a, b, c) {
		a.M[b] && (c ? a.M[b](c.getName(), B(c)) : a.M[b]())
	}

	function H(a, b) {
		this.c = a, this.C = b, this.s = this.c.createElement("span", {"aria-hidden": "true"}, this.C)
	}

	function I(a, b) {
		var c, d = a.s;
		c = [];
		for (var e = b.J.split(/,\s*/), f = 0; f < e.length; f++) {
			var g = e[f].replace(/['"]/g, "");
			c.push(-1 == g.indexOf(" ") ? g : "'" + g + "'")
		}
		c = c.join(","), e = "normal", f = b.U + "00", "o" === b.K ? e = "oblique" : "i" === b.K && (e = "italic"), c = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + c + ";" + ("font-style:" + e + ";font-weight:" + f + ";"), o(a.c) ? d.setAttribute("style", c) : d.style.cssText = c
	}

	function J(a) {
		i(a.c, "body", a.s)
	}

	function K(a, b, c, d, e, f, g, h) {
		this.V = a, this.ta = b, this.c = c, this.q = d, this.C = h || "BESbswy", this.k = e, this.F = {}, this.S = f || 5e3, this.Z = g || cb, this.B = this.A = cb, a = new H(this.c, this.C), J(a);
		for (var i in ib)ib.hasOwnProperty(i) && (I(a, new A(ib[i], B(this.q))), this.F[ib[i]] = a.s.offsetWidth);
		a.remove()
	}

	function L(a, b, c) {
		for (var d in ib)if (ib.hasOwnProperty(d) && b === a.F[ib[d]] && c === a.F[ib[d]])return bb;
		return db
	}

	function M(a) {
		var b = a.A.s.offsetWidth, c = a.B.s.offsetWidth;
		b === a.F.serif && c === a.F["sans-serif"] || a.k.T && L(a, b, c) ? fb() - a.ya >= a.S ? a.k.T && L(a, b, c) && (a.Z === cb || a.Z.hasOwnProperty(a.q.getName())) ? N(a, a.V) : N(a, a.ta) : setTimeout(g(function () {
			M(this)
		}, a), 25) : N(a, a.V)
	}

	function N(a, b) {
		a.A.remove(), a.B.remove(), b(a.q)
	}

	function O(a, b, c, d) {
		this.c = b, this.t = c, this.N = 0, this.ca = this.Y = db, this.S = d, this.k = a.k
	}

	function P(a, b, c, d, e) {
		if (0 === b.length && e)F(a.t); else for (a.N += b.length, e && (a.Y = e), e = 0; e < b.length; e++) {
			var f = b[e], h = c[f.getName()], i = a.t, j = f;
			l(i.h, i.g.f(i.j, j.getName(), B(j).toString(), "loading")), G(i, "fontloading", j), new K(g(a.ha, a), g(a.ia, a), a.c, f, a.k, a.S, d, h).start()
		}
	}

	function Q(a) {
		0 == --a.N && a.Y && (a.ca ? (a = a.t, m(a.h, a.g.f(a.j, "loading")), m(a.h, a.g.f(a.j, "inactive")), l(a.h, a.g.f(a.j, "active")), G(a, "active")) : F(a.t))
	}

	function R(a, b, c) {
		this.G = a, this.W = b, this.a = c, this.O = this.P = 0
	}

	function S(a, b) {
		lb.W.$[a] = b
	}

	function T(a, b) {
		this.c = a, this.d = b
	}

	function U(a, b) {
		this.c = a, this.d = b
	}

	function V(a) {
		var b = a.split(":");
		if (a = b[0], b[1]) {
			for (var c = b[1].split(","), b = [], d = 0, e = c.length; e > d; d++) {
				var f = c[d];
				if (f) {
					var g = mb[f];
					b.push(g ? g : f)
				}
			}
			for (c = [], d = 0; d < b.length; d += 1)c.push(new A(a, b[d]));
			return c
		}
		return [new A(a)]
	}

	function W(a, b, c) {
		this.a = a, this.c = b, this.d = c, this.m = []
	}

	function X(a, b) {
		this.c = a, this.d = b, this.m = []
	}

	function Y(a, b, c) {
		this.L = a ? a : b + nb, this.p = [], this.Q = [], this.da = c || ""
	}

	function Z(a) {
		this.p = a, this.aa = [], this.I = {}
	}

	function $(a, b, c) {
		this.a = a, this.c = b, this.d = c
	}

	function _(a, b) {
		this.c = a, this.d = b, this.m = []
	}

	var ab = void 0, bb = !0, cb = null, db = !1, eb = this;
	eb.Ba = bb;
	var fb = Date.now || function () {
			return +new Date
		};
	h.prototype.createElement = function (a, b, c) {
		if (a = this.z.createElement(a), b)for (var d in b)if (b.hasOwnProperty(d))if ("style" == d) {
			var e = a, f = b[d];
			o(this) ? e.setAttribute("style", f) : e.style.cssText = f
		} else a.setAttribute(d, b[d]);
		return c && a.appendChild(this.z.createTextNode(c)), a
	}, d("webfont.BrowserInfo", q), q.prototype.qa = c("w"), q.prototype.hasWebFontSupport = q.prototype.qa, q.prototype.ra = c("T"), q.prototype.hasWebKitFallbackBug = q.prototype.ra, q.prototype.sa = c("Aa"), q.prototype.hasWebKitMetricsBug = q.prototype.sa;
	var gb = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
	r.prototype.toString = function () {
		return [this.e, this.o || "", this.ba || "", this.f || ""].join("")
	}, d("webfont.UserAgent", t), t.prototype.getName = c("J"), t.prototype.getName = t.prototype.getName, t.prototype.pa = c("za"), t.prototype.getVersion = t.prototype.pa, t.prototype.la = c("ga"), t.prototype.getEngine = t.prototype.la, t.prototype.ma = c("fa"), t.prototype.getEngineVersion = t.prototype.ma, t.prototype.na = c("xa"), t.prototype.getPlatform = t.prototype.na, t.prototype.oa = c("wa"), t.prototype.getPlatformVersion = t.prototype.oa, t.prototype.ka = c("ea"), t.prototype.getDocumentMode = t.prototype.ka, t.prototype.ja = c("k"), t.prototype.getBrowserInfo = t.prototype.ja;
	var hb = new t("Unknown", new r, "Unknown", "Unknown", new r, "Unknown", "Unknown", new r, "Unknown", ab, new q(db, db, db));
	u.prototype.parse = function () {
		var a;
		if (-1 != this.a.indexOf("MSIE")) {
			a = v(this);
			var b = w(this), c = s(b), d = x(this.a, /MSIE ([\d\w\.]+)/, 1), e = s(d);
			a = new t("MSIE", e, d, "MSIE", e, d, a, c, b, y(this.H), new q("Windows" == a && 6 <= e.e || "Windows Phone" == a && 8 <= c.e, db, db))
		} else if (-1 != this.a.indexOf("Opera"))a:{
			a = "Unknown";
			var b = x(this.a, /Presto\/([\d\w\.]+)/, 1), c = s(b), d = w(this), e = s(d), f = y(this.H);
			if (c.e !== cb ? a = "Presto" : (-1 != this.a.indexOf("Gecko") && (a = "Gecko"), b = x(this.a, /rv:([^\)]+)/, 1), c = s(b)), -1 != this.a.indexOf("Opera Mini/")) {
				var g = x(this.a, /Opera Mini\/([\d\.]+)/, 1), h = s(g);
				a = new t("OperaMini", h, g, a, c, b, v(this), e, d, f, new q(db, db, db))
			} else {
				if (-1 != this.a.indexOf("Version/") && (g = x(this.a, /Version\/([\d\.]+)/, 1), h = s(g), h.e !== cb)) {
					a = new t("Opera", h, g, a, c, b, v(this), e, d, f, new q(10 <= h.e, db, db));
					break a
				}
				g = x(this.a, /Opera[\/ ]([\d\.]+)/, 1), h = s(g), a = h.e !== cb ? new t("Opera", h, g, a, c, b, v(this), e, d, f, new q(10 <= h.e, db, db)) : new t("Opera", new r, "Unknown", a, c, b, v(this), e, d, f, new q(db, db, db))
			}
		} else if (/AppleWeb(K|k)it/.test(this.a)) {
			a = v(this);
			var b = w(this), c = s(b), d = x(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1), e = s(d), f = "Unknown", g = new r, h = "Unknown", i = db;
			-1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? f = "Chrome" : /Silk\/\d/.test(this.a) ? f = "Silk" : "BlackBerry" == a || "Android" == a ? f = "BuiltinBrowser" : -1 != this.a.indexOf("Safari") ? f = "Safari" : -1 != this.a.indexOf("AdobeAIR") && (f = "AdobeAIR"), "BuiltinBrowser" == f ? h = "Unknown" : "Silk" == f ? h = x(this.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == f ? h = x(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != this.a.indexOf("Version/") ? h = x(this.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == f && (h = x(this.a, /AdobeAIR\/([\d\.]+)/, 1)), g = s(h), i = "AdobeAIR" == f ? 2 < g.e || 2 == g.e && 5 <= g.o : "BlackBerry" == a ? 10 <= c.e : "Android" == a ? 2 < c.e || 2 == c.e && 1 < c.o : 526 <= e.e || 525 <= e.e && 13 <= e.o, a = new t(f, g, h, "AppleWebKit", e, d, a, c, b, y(this.H), new q(i, 536 > e.e || 536 == e.e && 11 > e.o, "iPhone" == a || "iPad" == a || "iPod" == a || "Macintosh" == a))
		} else-1 != this.a.indexOf("Gecko") ? (a = "Unknown", b = new r, c = "Unknown", d = w(this), e = s(d), f = db, -1 != this.a.indexOf("Firefox") ? (a = "Firefox", c = x(this.a, /Firefox\/([\d\w\.]+)/, 1), b = s(c), f = 3 <= b.e && 5 <= b.o) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), g = x(this.a, /rv:([^\)]+)/, 1), h = s(g), f || (f = 1 < h.e || 1 == h.e && 9 < h.o || 1 == h.e && 9 == h.o && 2 <= h.ba || g.match(/1\.9\.1b[123]/) != cb || g.match(/1\.9\.1\.[\d\.]+/) != cb), a = new t(a, b, c, "Gecko", h, g, v(this), e, d, y(this.H), new q(f, db, db))) : a = hb;
		return a
	}, z.prototype.f = function () {
		for (var a = [], b = 0; b < arguments.length; b++)a.push(arguments[b].replace(/[\W_]+/g, "").toLowerCase());
		return a.join(this.va)
	}, A.prototype.getName = c("J"), H.prototype.remove = function () {
		var a = this.s;
		a.parentNode && a.parentNode.removeChild(a)
	};
	var ib = {Ea: "serif", Da: "sans-serif", Ca: "monospace"};
	K.prototype.start = function () {
		this.A = new H(this.c, this.C), J(this.A), this.B = new H(this.c, this.C), J(this.B), this.ya = fb(), I(this.A, new A(this.q.getName() + ",serif", B(this.q))), I(this.B, new A(this.q.getName() + ",sans-serif", B(this.q))), M(this)
	}, O.prototype.ha = function (a) {
		var b = this.t;
		m(b.h, b.g.f(b.j, a.getName(), B(a).toString(), "loading")), m(b.h, b.g.f(b.j, a.getName(), B(a).toString(), "inactive")), l(b.h, b.g.f(b.j, a.getName(), B(a).toString(), "active")), G(b, "fontactive", a), this.ca = bb, Q(this)
	}, O.prototype.ia = function (a) {
		var b = this.t;
		m(b.h, b.g.f(b.j, a.getName(), B(a).toString(), "loading")), n(b.h, b.g.f(b.j, a.getName(), B(a).toString(), "active")) || l(b.h, b.g.f(b.j, a.getName(), B(a).toString(), "inactive")), G(b, "fontinactive", a), Q(this)
	}, R.prototype.load = function (a) {
		var b = a.context || this.G;
		if (this.c = new h(this.G, b), b = new D(this.c, b.document.documentElement, a), this.a.k.w) {
			var c, d = this.W, e = this.c, f = [];
			for (c in a)if (a.hasOwnProperty(c)) {
				var i = d.$[c];
				i && f.push(i(a[c], e))
			}
			for (a = a.timeout, this.O = this.P = f.length, a = new O(this.a, this.c, b, a), c = 0, d = f.length; d > c; c++)e = f[c], e.v(this.a, g(this.ua, this, e, b, a))
		} else F(b)
	}, R.prototype.ua = function (a, b, c, d) {
		var e = this;
		d ? a.load(function (a, d, f) {
			var g = 0 == --e.P;
			g && E(b), setTimeout(function () {
				P(c, a, d || {}, f || cb, g)
			}, 0)
		}) : (a = 0 == --this.P, this.O--, a && (0 == this.O ? F(b) : E(b)), P(c, [], {}, cb, a))
	};
	var jb = a, kb = new u(navigator.userAgent, b).parse(), lb = jb.WebFont = new R(a, new function () {
		this.$ = {}
	}, kb);
	lb.load = lb.load, T.prototype.load = function (a) {
		var b, c, d = this.d.urls || [], e = this.d.families || [];
		for (b = 0, c = d.length; c > b; b++)i(this.c, "head", j(this.c, d[b]));
		for (d = [], b = 0, c = e.length; c > b; b++) {
			var f = e[b].split(":");
			if (f[1])for (var g = f[1].split(","), h = 0; h < g.length; h += 1)d.push(new A(f[0], g[h])); else d.push(new A(f[0]))
		}
		a(d)
	}, T.prototype.v = function (a, b) {
		return b(a.k.w)
	}, S("custom", function (a, b) {
		return new T(b, a)
	});
	var mb = {regular: "n4", bold: "n7", italic: "i4", bolditalic: "i7", r: "n4", b: "n7", i: "i4", bi: "i7"};
	U.prototype.v = function (a, b) {
		return b(a.k.w)
	}, U.prototype.load = function (a) {
		i(this.c, "head", j(this.c, p(this.c) + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
		for (var b = this.d.families, c = [], d = 0, e = b.length; e > d; d++)c.push.apply(c, V(b[d]));
		a(c)
	}, S("ascender", function (a, b) {
		return new U(b, a)
	}), W.prototype.v = function (a, b) {
		var c = this, d = c.d.projectId, e = c.d.version;
		if (d) {
			var f = c.c.u, g = c.c.createElement("script");
			g.id = "__MonotypeAPIScript__" + d;
			var h = db;
			g.onload = g.onreadystatechange = function () {
				if (!(h || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
					if (h = bb, f["__mti_fntLst" + d]) {
						var e = f["__mti_fntLst" + d]();
						if (e)for (var i = 0; i < e.length; i++)c.m.push(new A(e[i].fontfamily))
					}
					b(a.k.w), g.onload = g.onreadystatechange = cb
				}
			}, g.src = c.D(d, e), i(this.c, "head", g)
		} else b(bb)
	}, W.prototype.D = function (a, b) {
		var c = p(this.c), d = (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
		return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
	}, W.prototype.load = function (a) {
		a(this.m)
	}, S("monotype", function (a, c) {
		var d = new u(navigator.userAgent, b).parse();
		return new W(d, c, a)
	}), X.prototype.D = function (a) {
		var b = p(this.c);
		return (this.d.api || b + "//use.typekit.net") + "/" + a + ".js"
	}, X.prototype.v = function (a, b) {
		var c = this.d.id, d = this.d, e = this.c.u, f = this;
		c ? (e.__webfonttypekitmodule__ || (e.__webfonttypekitmodule__ = {}), e.__webfonttypekitmodule__[c] = function (c) {
			c(a, d, function (a, c, d) {
				for (var e = 0; e < c.length; e += 1) {
					var g = d[c[e]];
					if (g)for (var h = 0; h < g.length; h += 1)f.m.push(new A(c[e], g[h])); else f.m.push(new A(c[e]))
				}
				b(a)
			})
		}, c = k(this.c, this.D(c)), i(this.c, "head", c)) : b(bb)
	}, X.prototype.load = function (a) {
		a(this.m)
	}, S("typekit", function (a, b) {
		return new X(b, a)
	});
	var nb = "//fonts.googleapis.com/css";
	Y.prototype.f = function () {
		if (0 == this.p.length)throw Error("No fonts to load !");
		if (-1 != this.L.indexOf("kit="))return this.L;
		for (var a = this.p.length, b = [], c = 0; a > c; c++)b.push(this.p[c].replace(/ /g, "+"));
		return a = this.L + "?family=" + b.join("%7C"), 0 < this.Q.length && (a += "&subset=" + this.Q.join(",")), 0 < this.da.length && (a += "&text=" + encodeURIComponent(this.da)), a
	};
	var ob = {latin: "BESbswy", cyrillic: "&#1081;&#1103;&#1046;", greek: "&#945;&#946;&#931;", khmer: "&#x1780;&#x1781;&#x1782;", Hanuman: "&#x1780;&#x1781;&#x1782;"}, pb = {
		thin: "1",
		extralight: "2",
		"extra-light": "2",
		ultralight: "2",
		"ultra-light": "2",
		light: "3",
		regular: "4",
		book: "4",
		medium: "5",
		"semi-bold": "6",
		semibold: "6",
		"demi-bold": "6",
		demibold: "6",
		bold: "7",
		"extra-bold": "8",
		extrabold: "8",
		"ultra-bold": "8",
		ultrabold: "8",
		black: "9",
		heavy: "9",
		l: "3",
		r: "4",
		b: "7"
	}, qb = {i: "i", italic: "i", n: "n", normal: "n"}, rb = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
	Z.prototype.parse = function () {
		for (var a = this.p.length, b = 0; a > b; b++) {
			var c = this.p[b].split(":"), d = c[0].replace(/\+/g, " "), e = ["n4"];
			if (2 <= c.length) {
				var f, g = c[1];
				if (f = [], g)for (var g = g.split(","), h = g.length, i = 0; h > i; i++) {
					var j;
					if (j = g[i], j.match(/^[\w]+$/)) {
						j = rb.exec(j.toLowerCase());
						var k = ab;
						if (j == cb)k = ""; else {
							if (k = ab, k = j[1], k == cb || "" == k)k = "4"; else var l = pb[k], k = l ? l : isNaN(k) ? "4" : k.substr(0, 1);
							k = [j[2] == cb || "" == j[2] ? "n" : qb[j[2]], k].join("")
						}
						j = k
					} else j = "";
					j && f.push(j)
				}
				0 < f.length && (e = f), 3 == c.length && (c = c[2], f = [], c = c ? c.split(",") : f, 0 < c.length && (c = ob[c[0]]) && (this.I[d] = c))
			}
			for (this.I[d] || (c = ob[d]) && (this.I[d] = c), c = 0; c < e.length; c += 1)this.aa.push(new A(d, e[c]))
		}
	};
	var sb = {Arimo: bb, Cousine: bb, Tinos: bb};
	$.prototype.v = function (a, b) {
		b(a.k.w)
	}, $.prototype.load = function (a) {
		var b = this.c;
		if ("MSIE" == this.a.getName() && this.d.blocking != bb) {
			var c = g(this.X, this, a), d = function () {
				b.z.body ? c() : setTimeout(d, 0)
			};
			d()
		} else this.X(a)
	}, $.prototype.X = function (a) {
		for (var b = this.c, c = new Y(this.d.api, p(b), this.d.text), d = this.d.families, e = d.length, f = 0; e > f; f++) {
			var g = d[f].split(":");
			3 == g.length && c.Q.push(g.pop());
			var h = "";
			2 == g.length && "" != g[1] && (h = ":"), c.p.push(g.join(h))
		}
		d = new Z(d), d.parse(), i(b, "head", j(b, c.f())), a(d.aa, d.I, sb)
	}, S("google", function (a, c) {
		var d = new u(navigator.userAgent, b).parse();
		return new $(d, c, a)
	}), _.prototype.D = function (a) {
		return p(this.c) + (this.d.api || "//f.fontdeck.com/s/css/js/") + (this.c.u.location.hostname || this.c.G.location.hostname) + "/" + a + ".js"
	}, _.prototype.v = function (a, b) {
		var c = this.d.id, d = this.c.u, e = this;
		c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}), d.__webfontfontdeckmodule__[c] = function (a, c) {
			for (var d = 0, f = c.fonts.length; f > d; ++d) {
				var g = c.fonts[d];
				e.m.push(new A(g.name, C("font-weight:" + g.weight + ";font-style:" + g.style)))
			}
			b(a)
		}, c = k(this.c, this.D(c)), i(this.c, "head", c)) : b(bb)
	}, _.prototype.load = function (a) {
		a(this.m)
	}, S("fontdeck", function (a, b) {
		return new _(b, a)
	}), a.WebFontConfig && lb.load(a.WebFontConfig)
}(this, document), function () {
	function a(a) {
		for (var b = 1; b < arguments.length; b++)for (key in arguments[b])a[key] = arguments[b][key];
		return a
	}

	function b(a, b, c) {
		a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
	}

	function c(a) {
		a.preventDefault ? a.preventDefault() : a.returnValue = !1
	}

	function d(a) {
		a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
	}

	function e(a) {
		return a.pageX || a.pageY ? {pageX: a.pageX, pageY: a.pageY, clientX: a.clientX, clientY: a.clientY} : {
			pageX: a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
			pageY: a.clientY + document.body.scrollTop + document.documentElement.scrollTop,
			clientX: a.clientX,
			clientY: a.clientY
		}
	}

	var f = {backgroundColor: "#505050", color: "#ffffff", scaleColors: ["#b6d6ff", "#005ace"], normalizeFunction: "linear"};
	window.vectorMap = function (b, c) {
		var d = a({}, f, c);
		return d.container = b, new h(d)
	};
	var g = function (a, b) {
		if (this.mode = window.SVGAngle ? "svg" : "vml", "svg" == this.mode)this.createSvgNode = function (a) {
			return document.createElementNS(this.svgns, a)
		}; else {
			try {
				document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), this.createVmlNode = function (a) {
					return document.createElement("<rvml:" + a + ' class="rvml">')
				}
			} catch (c) {
				this.createVmlNode = function (a) {
					return document.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
				}
			}
			document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)")
		}
		"svg" == this.mode ? this.canvas = this.createSvgNode("svg") : (this.canvas = this.createVmlNode("group"), this.canvas.style.position = "absolute"), this.setSize(a, b)
	};
	g.prototype = {
		svgns: "http://www.w3.org/2000/svg", mode: "svg", width: 0, height: 0, canvas: null, setSize: function (a, b) {
			if ("svg" == this.mode)this.canvas.setAttribute("width", a), this.canvas.setAttribute("height", b); else if (this.canvas.style.width = a + "px", this.canvas.style.height = b + "px", this.canvas.coordsize = a + " " + b, this.canvas.coordorigin = "0 0", this.rootGroup) {
				for (var c = this.rootGroup.getElementsByTagName("shape"), d = 0, e = c.length; e > d; d++)c[d].coordsize = a + " " + b, c[d].style.width = a + "px", c[d].style.height = b + "px";
				this.rootGroup.coordsize = a + " " + b, this.rootGroup.style.width = a + "px", this.rootGroup.style.height = b + "px"
			}
			this.width = a, this.height = b
		}, createPath: function (a) {
			var b;
			if ("svg" == this.mode)b = this.createSvgNode("path"), b.setAttribute("d", a.path), b.setFill = function (a) {
				return a ? this.setAttribute("fill", a) : this.removeAttributeNS(null, "fill"), this
			}, b.setStroke = function (a, b) {
				return null != a && this.setAttribute("stroke", a), null != b && (/^\d+$/.test(b + "") && (b += "px"), this.setAttribute("stroke-width", b)), this
			}, b.getFill = function () {
				return this.style.getProperty("fill")
			}, b.setOpacity = function (a) {
				return null != a && this.setAttribute("fill-opacity", a), this
			}; else {
				b = this.createVmlNode("shape"), b.coordorigin = "0 0", b.coordsize = this.width + " " + this.height, b.style.width = this.width + "px", b.style.height = this.height + "px", b.fillcolor = "#ddd", b.stroked = !0, b.path = this.pathSvgToVml(a.path);
				var c = this.createVmlNode("skew");
				c.on = !0, c.matrix = "0.01,0,0,0.01,0,0", c.offset = "0,0", b.appendChild(c);
				var d = this.createVmlNode("stroke");
				d.weight = 0, b.appendChild(d);
				var e = this.createVmlNode("fill");
				e.chromakey = "#FFF", b.appendChild(e), b.setStroke = function (a, b) {
					var c = this.getElementsByTagName("stroke")[0];
					return null != a && (c.color = a), null != b && (c.weight = b / 3), this
				}, b.setFill = function (a) {
					return this.getElementsByTagName("fill")[0].color = a, this
				}, b.getFill = function () {
					return this.getElementsByTagName("fill")[0].color
				}, b.setOpacity = function (a) {
					return this.getElementsByTagName("fill")[0].opacity = parseInt(100 * a) + "%", this
				}
			}
			return b
		}, createGroup: function (a) {
			var b;
			return "svg" == this.mode ? b = this.createSvgNode("g") : (b = this.createVmlNode("group"), b.style.width = this.width + "px", b.style.height = this.height + "px", b.style.left = "0px", b.style.top = "0px", b.coordorigin = "0 0", b.coordsize = this.width + " " + this.height), a && (this.rootGroup = b), b
		}, applyTransformParams: function (a, b, c) {
			"svg" == this.mode ? this.rootGroup.setAttribute("transform", "scale(" + a + ") translate(" + b + ", " + c + ")") : (this.rootGroup.coordorigin = this.width - b + "," + (this.height - c), this.rootGroup.coordsize = this.width / a + "," + this.height / a)
		}, pathSvgToVml: function (a) {
			function b(a, b, c) {
				null === l && (l = {x: b, y: c}), g.push(a + b + "," + c)
			}

			function c() {
				var b;
				return h < j.length ? (b = j[h], h += 1) : (j = a[i].split(","), b = j[0], i += 1, h = 1), Math.round(100 * parseFloat(b))
			}

			a = a.split(" ");
			for (var d, e = 0, f = 0, g = [], h = 0, i = 0, j = [], k = "MCLHVmclhvz", l = null; i < a.length;)if ("z" == a[i] && l)b("l", l.x, l.y), l = null; else if (1 == a[i].length && -1 != k.indexOf(a[i]))d = a[i], i++; else switch (d) {
				case"m":
					e += c(), f += c(), b("m", e, f), d = "l";
					break;
				case"M":
					e = c(), f = c(), b("m", e, f), d = "L";
					break;
				case"l":
					e += c(), f += c(), b("l", e, f);
					break;
				case"L":
					e = c(), f = c(), b("l", e, f);
					break;
				case"h":
					e += c(), b("l", e, f);
					break;
				case"H":
					e = c(), b("l", e, f);
					break;
				case"v":
					f += c(), b("l", e, f);
					break;
				case"V":
					f = c(), b("l", e, f);
					break;
				case"c":
					c(), c(), c(), c(), e += c(), f += c(), b("l", e, f);
					break;
				case"C":
					c(), c(), c(), c(), e = c(), f = c(), b("l", e, f)
			}
			return g.join(" ")
		}
	};
	var h = function (a) {
		a = a || {};
		var b = this;
		this.container = a.container, this.defaultWidth = a.svg_width, this.defaultHeight = a.svg_height, "maxScale" in a && (this.maxScale = a.maxScale), "minScale" in a && (this.minScale = a.minScale), this.doubletouchEnabled = a.doubletouchEnabled || !1, this.color = a.color, this.stroke = a.stroke, this.label_locked = !1, this.width = this.containerWidth(), this.height = this.containerHeight(), this.resize(), this.do_resize = function () {
			b.width = a.container.clientWidth, b.height = a.container.clientHeight, b.resize(), b.canvas.setSize(b.width, b.height), b.applyTransform()
		}, this.canvas = new g(this.width, this.height), a.container.appendChild(this.canvas.canvas), this.rootGroup = this.canvas.createGroup(!0), this.index = h.mapIndex;
		for (var c in a.paths) {
			var d = this.canvas.createPath({path: a.paths[c]});
			d.setFill(this.color), this.stroke && d.setStroke(this.stroke[0], this.stroke[1]), "opacity" in a && d.setOpacity(a.opacity), d.id = "vectormap" + b.index + "_" + c, b.countries[c] = d, this.rootGroup.appendChild(d)
		}
		this.setColors(a.colors), this.canvas.canvas.appendChild(this.rootGroup), this.applyTransform(), "onTransform" in a && (this.onTransform = a.onTransform), this.colorScale = new i(a.scaleColors, a.normalizeFunction, a.valueMin, a.valueMax), a.values && (this.values = a.values, this.setValues(a.values)), h.mapIndex++
	};
	window.WorldMap = h, h.prototype = {
		transX: 0,
		transY: 0,
		scale: 1,
		baseTransX: 0,
		baseTransY: 0,
		baseScale: 1,
		maxScale: 1e3,
		minScale: null,
		doubletouchEnabled: !1,
		width: 0,
		height: 0,
		countries: {},
		countriesColors: {},
		countriesData: {},
		zoomStep: 1.4,
		zoomMaxStep: 4,
		zoomCurStep: 1,
		hasTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
		onTransform: function () {
		},
		setColors: function (a, b) {
			if ("string" == typeof a)this.countries[a].setFill(b); else {
				var c = a;
				for (var d in c)this.countries[d] && this.countries[d].setFill(c[d])
			}
		},
		setValues: function (a) {
			var b, c = 0, d = Number.MAX_VALUE;
			for (var e in a)b = parseFloat(a[e]), b > c && (c = a[e]), b && d > b && (d = b);
			this.colorScale.setMin(d), this.colorScale.setMax(c);
			var f = {};
			for (e in a)b = parseFloat(a[e]), f[e] = b ? this.colorScale.getColor(b) : this.color;
			this.setColors(f), this.values = a
		},
		setScaleColors: function (a) {
			this.colorScale.setColors(a), this.values && this.setValues(this.values)
		},
		setNormalizeFunction: function (a) {
			this.colorScale.setNormalizeFunction(a), this.values && this.setValues(this.values)
		},
		resize: function () {
			var a = this.baseScale;
			this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight, this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth, this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)), this.scale *= this.baseScale / a, this.transX *= this.baseScale / a, this.transY *= this.baseScale / a
		},
		applyTransform: function (a, b) {
			void 0 !== a && (this.transX = a), void 0 !== b && (this.transY = b), this.transX = Math.max(this.transX, this.width / this.scale - this.defaultWidth), this.transX = Math.min(this.transX, 0), this.transY = Math.max(this.transY, this.height / this.scale - this.defaultHeight), this.transY = Math.min(this.transY, 0), this.canvas.applyTransformParams(this.scale, this.transX, this.transY), this.onTransform()
		},
		fitToPath: function (a) {
			var b = a.getBBox(), c = Math.min(this.width / (1.2 * b.width), this.height / (1.2 * b.height));
			this.scale = this.correctScale(c), this.transX = -b.x + (this.width / this.scale - b.width) / 2, this.transY = -b.y + (this.height / this.scale - b.height) / 2, this.applyTransform()
		},
		setScale: function (a) {
			this.scale = this.correctScale(a), this.applyTransform()
		},
		getPath: function (a) {
			return document.getElementById("vectormap" + this.index + "_" + a)
		},
		getMaxScale: function () {
			var a = this.maxScale;
			return "string" == typeof a && "x" == a.charAt(0) && (a = this.baseScale * a.substr(1)), a
		},
		getMinScale: function () {
			var a = null !== this.minScale ? this.minScale : this.baseScale;
			return "string" == typeof a && "x" == a.charAt(0) && (a = this.baseScale * a.substr(1)), a
		},
		correctScale: function (a) {
			return Math.min(Math.max(a, this.getMinScale()), this.getMaxScale())
		},
		makeDraggable: function () {
			this.draggable || (this.draggable = !0, this.hasTouch ? this.makeDraggableByTouch() : this.makeDraggableByMouse())
		},
		makeDraggableByMouse: function () {
			function a(a) {
				if (h.scalable) {
					c(a), d(a);
					var b = a.wheelDelta || -a.detail, f = h.scale;
					0 > b ? f *= .9 : b > 0 && (f /= .9), f = h.correctScale(f);
					var g = 1 / h.scale - 1 / f, i = e(a), j = h.containerPosition();
					h.transX -= g * (i.pageX - j.x), h.transY -= g * (i.pageY - j.y), h.scale = f, h.applyTransform()
				}
			}

			var f, g = !1, h = this;
			h.dragged = !1, h.scalable = !1, b(document, "mousemove", function (a) {
				if (g) {
					var b = h.transX + (a.clientX - f.x) / h.scale, c = h.transY + (a.clientY - f.y) / h.scale;
					h.applyTransform(b, c), f = {x: a.clientX, y: a.clientY}, h.dragged = !0
				}
			}), b(document, "mouseup", function () {
				g = !1
			}), b(this.container, "mousedown", function (a) {
				g = !0, h.dragged = !1, f = {x: a.clientX, y: a.clientY}
			});
			var i = !1;
			b(this.container, "mouseenter", function () {
				setTimeout(function () {
					i && (h.scalable = !0, i = !1)
				}, 3e3)
			}), b(this.container, "mouseleave", function () {
				h.scalable = !1, i = !0
			}), b(this.container, "DOMMouseScroll", a), b(this.container, "mousewheel", a)
		},
		makeDraggableByTouch: function () {
			var a = null, e = null, f = null, g = this;
			g.dragged = !1, b(this.container, "touchmove", function (b) {
				if (g.dragged = !0, g.doubletouchEnabled && b.touches && 2 == b.touches.length) {
					c(b), d(b);
					var h = b.touches.item(0), i = b.touches.item(1), j = Math.sqrt(Math.pow(h.clientX - i.clientX, 2) + Math.pow(h.clientY - i.clientY, 2)), k = g.containerPosition(), l = {
						x: (h.pageX + i.pageX) / 2 - k.x,
						y: (h.pageY + i.pageY) / 2 - k.y
					};
					if (a) {
						var m = g.scale * (1 - a / j), n = g.scale * j / a;
						n = g.correctScale(n);
						var m = .5 * (1 / g.scale - 1 / n), o = l.x * m, p = l.y * m;
						g.transX += (l.x - e.x - o) / n, g.transY += (l.y - e.y - p) / n, g.scale = n, g.applyTransform()
					}
					a = j, e = l
				} else if (b.touches && 1 == b.touches.length) {
					if (g.scale > g.baseScale) {
						c(b), d(b), a = e = null;
						var q = {x: b.touches.item(0).clientX, y: b.touches.item(0).clientY};
						f && (g.transX += (q.x - f.x) / g.scale, g.transY += (q.y - f.y) / g.scale, g.applyTransform()), f = q
					}
				} else a = e = f = null
			}), b(this.container, "touchstart", function () {
				a = e = f = null, g.dragged = !1
			}), b(this.container, "touchend", function () {
				a = e = f = null
			})
		},
		addBubble: function (a, c) {
			var d = this, f = c.paths || this.rootGroup.getElementsByTagName("svg" == this.canvas.mode ? "path" : "shape");
			if (this.hasTouch) {
				for (var g = null, h = f.length; h--;) {
					var i = f[h];
					b(i, "touchstart", function (a) {
						var b = a.touches;
						1 == b.length && (this.mouseCoords = {pageX: b.item(0).pageX, pageY: b.item(0).pageY, clientX: b.item(0).clientX, clientY: b.item(0).clientY})
					}), b(i, "touchend", function (a) {
						d.dragged || (g == this || c.clickOnTouch ? c.click.call(this, a, this.mouseCoords) : (c.mouseover.call(this, this.mouseCoords), c.mousemove.call(this, this.mouseCoords)), g = this)
					})
				}
				a && (b(a, "touchmove", function () {
					this.style.display = "none", g = !1
				}), b(a, "touchend", function (a) {
					this.style.display = "none", c.click.call(this, a, this.mouseCoords)
				}))
			} else {
				for (var h = f.length; h--;) {
					var i = f[h];
					b(i, "mousemove", function (a) {
						var b = a.target || a.srcElement;
						c.mousemove.call(b, e(a))
					}), b(i, "mouseover", function (a) {
						var b = a.target || a.srcElement;
						c.mouseover.call(b, e(a)), c.mousemove.call(b, e(a))
					}), "svg" != this.canvas.mode ? b(i, "mouseup", function (a) {
						d.dragged || c.click.call(a.target || a.srcElement, a, e(a))
					}) : b(i, "click", function (a) {
						d.dragged || c.click.call(this, a, e(a))
					}), b(i, "mouseout", c.unhover)
				}
				a && b(a, "mousemove", function (a) {
					var b = a.target || a.srcElement, c = e(a);
					b.style.left = c.pageX + 5 + "px"
				})
			}
		},
		addShadowStyle: function (a, b, c, d) {
			var e = this.canvas;
			if ("svg" == e.mode) {
				var f = e.createSvgNode("defs"), g = e.createSvgNode("filter");
				g.setAttribute("id", "inner-shadow-" + this.index), f.appendChild(g);
				var h = e.createSvgNode("feOffset");
				h.setAttribute("dx", b), h.setAttribute("dy", c), g.appendChild(h), h = e.createSvgNode("feGaussianBlur"), h.setAttribute("stdDeviation", d), h.setAttribute("result", "offset-blur"), g.appendChild(h);
				var h = e.createSvgNode("feComposite");
				h.setAttribute("operator", "out"), h.setAttribute("in", "SourceGraphic"), h.setAttribute("in2", "offset-blur"), h.setAttribute("result", "inverse"), g.appendChild(h);
				var h = e.createSvgNode("feFlood");
				h.setAttribute("flood-color", a), h.setAttribute("flood-opacity", "0.75"), h.setAttribute("result", "color"), g.appendChild(h);
				var h = e.createSvgNode("feComposite");
				h.setAttribute("operator", "in"), h.setAttribute("in", "color"), h.setAttribute("in2", "inverse"), h.setAttribute("result", "shadow"), g.appendChild(h);
				var h = e.createSvgNode("feComposite");
				h.setAttribute("operator", "over"), h.setAttribute("in", "shadow"), h.setAttribute("in2", "SourceGraphic"), g.appendChild(h), e.canvas.insertBefore(f, this.rootGroup)
			}
		}
	}, h.mapIndex = 1, "undefined" != typeof MooTools ? a(h.prototype, {
		containerPosition: function () {
			return this.container.getPosition()
		}, containerWidth: function () {
			return this.container.getWidth()
		}, containerHeight: function () {
			return this.container.getHeight()
		}
	}) : "undefined" != typeof jQuery && a(h.prototype, {
		containerPosition: function () {
			var a = jQuery(this.container).offset();
			return {x: a.left, y: a.top}
		}, containerWidth: function () {
			return jQuery(this.container).width()
		}, containerHeight: function () {
			return jQuery(this.container).height()
		}
	});
	var i = function (a, b, c, d) {
		a && this.setColors(a), b && this.setNormalizeFunction(b), c && this.setMin(c), c && this.setMax(d)
	};
	i.prototype = {
		colors: [], setMin: function (a) {
			this.clearMinValue = a, this.minValue = "function" == typeof this.normalize ? this.normalize(a) : a
		}, setMax: function (a) {
			this.clearMaxValue = a, this.maxValue = "function" == typeof this.normalize ? this.normalize(a) : a
		}, setColors: function (a) {
			for (var b = 0; b < a.length; b++)a[b] = i.rgbToArray(a[b]);
			this.colors = a
		}, setNormalizeFunction: function (a) {
			"polynomial" === a ? this.normalize = function (a) {
				return Math.pow(a, .2)
			} : "linear" === a ? delete this.normalize : this.normalize = a, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue)
		}, getColor: function (a) {
			"function" == typeof this.normalize && (a = this.normalize(a));
			for (var b, c = [], d = 0, e = 0; e < this.colors.length - 1; e++)b = this.vectorLength(this.vectorSubtract(this.colors[e + 1], this.colors[e])), c.push(b), d += b;
			var f = (this.maxValue - this.minValue) / d;
			for (e = 0; e < c.length; e++)c[e] *= f;
			for (e = 0, a -= this.minValue; a - c[e] >= 0;)a -= c[e], e++;
			var g;
			for (g = e == this.colors.length - 1 ? this.vectorToNum(this.colors[e]).toString(16) : this.vectorToNum(this.vectorAdd(this.colors[e], this.vectorMult(this.vectorSubtract(this.colors[e + 1], this.colors[e]), a / c[e]))).toString(16); g.length < 6;)g = "0" + g;
			return "#" + g
		}, vectorToNum: function (a) {
			for (var b = 0, c = 0; c < a.length; c++)b += Math.round(a[c]) * Math.pow(256, a.length - c - 1);
			return b
		}, vectorSubtract: function (a, b) {
			for (var c = [], d = 0; d < a.length; d++)c[d] = a[d] - b[d];
			return c
		}, vectorAdd: function (a, b) {
			for (var c = [], d = 0; d < a.length; d++)c[d] = a[d] + b[d];
			return c
		}, vectorMult: function (a, b) {
			for (var c = [], d = 0; d < a.length; d++)c[d] = a[d] * b;
			return c
		}, vectorLength: function (a) {
			for (var b = 0, c = 0; c < a.length; c++)b += a[c] * a[c];
			return Math.sqrt(b)
		}
	}, i.arrayToRgb = function (a) {
		for (var b, c = "#", d = 0; d < a.length; d++)b = a[d].toString(16), c += 1 == b.length ? "0" + b : b;
		return c
	}, i.rgbToArray = function (a) {
		return "string" == typeof a ? (a = a.substr(1), [parseInt(a.substr(0, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(4, 2), 16)]) : a
	}
}(), function () {
	function a(a, b, c, d) {
		function e() {
			if (f)return null;
			var h = b;
			return b.childNodes && b.childNodes.length && !g ? b = b[d ? "lastChild" : "firstChild"] : b[d ? "previousSibling" : "nextSibling"] ? (b = b[d ? "previousSibling" : "nextSibling"], g = !1) : b.parentNode && (b = b.parentNode, b === a && (f = !0), g = !0, e()), h === c && (f = !0), h
		}

		d = !!d, b = b || a[d ? "lastChild" : "firstChild"];
		var f = !b, g = !1;
		return e
	}

	function b(a) {
		for (var b = 1; b < arguments.length; b++)for (var c in arguments[b])a[c] = arguments[b][c];
		return a
	}

	function c(a) {
		return (a || "").replace(/^\s+|\s+$/g, "")
	}

	function d(a, b) {
		var c = "";
		return document.defaultView && document.defaultView.getComputedStyle ? c = document.defaultView.getComputedStyle(a, "").getPropertyValue(b) : a.currentStyle && (b = b.replace(/\-(\w)/g, function (a, b) {
			return b.toUpperCase()
		}), c = a.currentStyle[b]), c
	}

	function e(a) {
		return a.textContent || a.innerText
	}

	function f(a, b) {
		for (; a && !m(a, b);)a = a.parentNode;
		return a || null
	}

	function g(b, c) {
		for (var d = a(b), e = null; e = d();)if (1 === e.nodeType && m(e, c))return e;
		return null
	}

	function h(a, b) {
		var c = j(a, b);
		return c ? c[c.length - 1] : null
	}

	function i(b) {
		for (var c = a(b), d = null; d = c();)if (3 === d.nodeType)return d;
		return d
	}

	function j(b, c) {
		if (b.getElementsByClassName)return b.getElementsByClassName(c);
		for (var d, e = [], f = a(b); d = f();)1 == d.nodeType && m(d, c) && e.push(d);
		return e
	}

	function k(b) {
		for (var c, d = [], e = a(b); c = e();)3 === c.nodeType && d.push(c);
		return d
	}

	function l(a) {
		return new RegExp("(^|\\s+)" + a + "(?:$|\\s+)", "g")
	}

	function m(a, b) {
		var c = l(b);
		return c.test(a.className)
	}

	function n(a, b) {
		var c = l(b);
		c.test(a.className) || (a.className = a.className + " " + b)
	}

	function o(a, b) {
		var d = l(b);
		d.test(a.className) && (a.className = c(a.className.replace(d, "$1")))
	}

	function p(a, b) {
		for (var c = 0, d = b.length; d > c; c++)if (b[c] === a)return c;
		return -1
	}

	function q(a, b, c) {
		a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
	}

	function r(a, b, c) {
		a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
	}

	function s(a) {
		a.preventDefault ? a.preventDefault() : a.returnValue = !1
	}

	function t(a) {
		a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
	}

	function u(a) {
		if (null == a.pageX) {
			var b = document.documentElement, c = document.body, d = a.clientX + (b && b.scrollLeft || c && c.scrollLeft || 0) - (b.clientLeft || 0), e = a.clientY + (b && b.scrollTop || c && c.scrollTop || 0) - (b.clientTop || 0);
			return {x: d, y: e}
		}
		return {x: a.pageX, y: a.pageY}
	}

	var v = function () {
	};
	v.prototype = {
		setHash: function (a) {
			window.location.hash = a
		}, getHash: function () {
			return window.location.hash
		}, addHashchange: function (a) {
			this.callback = a, q(window, "hashchange", a)
		}, destroy: function () {
			this.callback && r(window, "hashchange", this.callback)
		}, _removeHash: function () {
			window.history.pushState ? history.pushState("", document.title, window.location.pathname + window.location.search) : this.setHash("")
		}
	};
	var w = function (a) {
		a = a || {}, "select_message" in a && (a.selectMessage = a.select_message), "enable_haschange" in a && (a.enableHaschange = a.enable_haschange), "is_block" in a && (a.isBlock = a.is_block), this.options = b({}, w.defaultOptions, a), b(this, {
			counter: 0,
			ranges: {},
			blocks: {}
		}), this.init()
	};
	w.version = "25.04.2013-09:55:11", w.LocationHandler = v, w.defaultOptions = {
		regexp: "[^\\s,;:–.!?<>…\\n \\*]+",
		selectable: "selectable-content",
		marker: "txtselect_marker",
		ignored: null,
		selectMessage: null,
		location: new v,
		validate: !1,
		enableHaschange: !0,
		onMark: null,
		onUnmark: null,
		onHashRead: function () {
			var a = g(this.selectable, "user_selection_true");
			a && !this.hashWasRead && (this.hashWasRead = !0, window.setTimeout(function () {
				for (var b = 0, c = 0; a;)b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
				window.scrollTo(b, c - 150)
			}, 1))
		},
		isBlock: function (a) {
			return "BR" == a.nodeName || -1 == p(d(a, "display"), ["inline", "none"])
		}
	}, w.prototype = {
		init: function () {
			if (this.selectable = "string" == typeof this.options.selectable ? document.getElementById(this.options.selectable) : this.options.selectable, "string" == typeof this.options.marker ? (this.marker = document.getElementById(this.options.marker), null === this.marker && (this.marker = document.createElement("a"), this.marker.setAttribute("id", this.options.marker), this.marker.setAttribute("href", "#"), document.body.appendChild(this.marker))) : this.marker = this.options.marker, "string" != typeof this.options.regexp)throw"regexp is set as string";
			if (this.regexp = new RegExp(this.options.regexp, "ig"), this.selectable) {
				this.isIgnored = this.constructIgnored(this.options.ignored), this.options.selectMessage && this.initMessage(), this.enumerateElements();
				var a = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
				a ? (this.touchEnd = D(this.touchEnd, this), q(this.selectable, "touchend", this.touchEnd)) : (this.mouseUp = D(this.mouseUp, this), q(this.selectable, "mouseup", this.mouseUp)), this.markerClick = D(this.markerClick, this), q(this.marker, "click", this.markerClick), q(this.marker, "touchend", this.markerClick), this.hideMarker = D(this.hideMarker, this), q(document, "click", this.hideMarker), this.options.enableHaschange && (this.hashChange = D(this.hashChange, this), this.options.location.addHashchange(this.hashChange)), this.readHash()
			}
		}, destroy: function () {
			o(this.marker, "show"), this.options.selectMessage && this.hideMessage(), r(this.selectable, "mouseup", this.mouseUp), r(this.selectable, "touchEnd", this.touchEnd), r(this.marker, "click", this.markerClick), r(this.marker, "touchend", this.markerClick), r(document, "click", this.hideMarker), this.options.location.destroy();
			var a = j(this.selectable, "user_selection_true");
			this.removeTextSelection(a);
			for (var b = j(this.selectable, "closewrap"), c = b.length; c--;)b[c].parentNode.removeChild(b[c]);
			for (var d = j(this.selectable, "masha_index"), c = d.length; c--;)d[c].parentNode.removeChild(d[c])
		}, mouseUp: function (a) {
			var b = u(a);
			window.setTimeout(D(function () {
				this.showMarker(b)
			}, this), 1)
		}, touchEnd: function () {
			window.setTimeout(D(function () {
				var a = window.getSelection();
				if (a.rangeCount) {
					var b = a.getRangeAt(0).getClientRects();
					if (b.length) {
						var c = b[b.length - 1], d = document.body;
						this.showMarker({x: c.left + c.width + d.scrollLeft, y: c.top + c.height / 2 + d.scrollTop})
					}
				}
			}, this), 1)
		}, hashChange: function () {
			if (this.lastHash != this.options.location.getHash()) {
				var a = [];
				for (var b in this.ranges)a.push(b);
				this.deleteSelections(a), this.readHash()
			}
		}, hideMarker: function (a) {
			var b = a.target || a.srcElement;
			b != this.marker && o(this.marker, "show"), this.lastRange = null
		}, markerClick: function (a) {
			s(a), t(a);
			var b = a.target || a.srcElement;
			if ((!m(this.marker, "masha-marker-bar") || m(b, "masha-social") || m(b, "masha-marker")) && (o(this.marker, "show"), this.rangeIsSelectable() && (this.addSelection(), this.updateHash(), this.options.onMark && this.options.onMark.call(this), this.options.selectMessage && this._showMessage(), m(b, "masha-social")))) {
				var c = b.getAttribute("data-pattern");
				if (c) {
					var d = c.replace("{url}", encodeURIComponent(window.location.toString()));
					this.openShareWindow(d)
				}
			}
		}, openShareWindow: function (a) {
			window.open(a, "", "status=no,toolbar=no,menubar=no,width=800,height=400")
		}, getMarkerCoords: function (a, b) {
			return {x: b.x, y: b.y, width: b.width}
		}, getPositionChecksum: function (a) {
			for (var b = "", c = 0; 3 > c; c++) {
				var d = (a() || "").charAt(0);
				if (d) {
					var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890", f = d.charCodeAt(0) % e.length;
					d = e.charAt(f)
				}
				b += d
			}
			return b
		}, showMarker: function (a) {
			var b = new RegExp(this.options.regexp, "g"), c = window.getSelection().toString();
			if ("" != c && b.test(c) && this.rangeIsSelectable()) {
				var d = this.getMarkerCoords(this.marker, a);
				this.marker.style.top = d.y + "px";
				var e = window.getSelection();
				e.rangeCount && (this.lastRange = e.getRangeAt(0)), n(this.marker, "show")
			}
		}, deleteSelections: function (a) {
			for (var b = a.length; b--;) {
				var c = a[b], d = j(this.selectable, c), e = g(d[d.length - 1], "closewrap");
				e.parentNode.removeChild(e), this.removeTextSelection(d), delete this.ranges[c]
			}
		}, removeTextSelection: function (a) {
			for (var b = a.length; b--;) {
				for (var c = a[b], d = 0; d < c.childNodes.length; d++)c.parentNode.insertBefore(c.childNodes[d], c);
				c.parentNode.removeChild(c)
			}
		}, isInternal: function (a) {
			for (; a.parentNode;) {
				if (a == this.selectable)return !0;
				a = a.parentNode
			}
			return !1
		}, _siblingNode: function (a, b, c, d, e) {
			for (e = e || this.regexp; a.parentNode && this.isInternal(a);) {
				for (; a[b + "Sibling"];) {
					for (a = a[b + "Sibling"]; 1 == a.nodeType && a.childNodes.length;)a = a[c + "Child"];
					if (3 == a.nodeType && null != a.data.match(e))return {_container: a, _offset: d * a.data.length}
				}
				a = a.parentNode
			}
			return null
		}, prevNode: function (a, b) {
			return this._siblingNode(a, "previous", "last", 1, b)
		}, nextNode: function (a, b) {
			return this._siblingNode(a, "next", "first", 0, b)
		}, wordCount: function (a) {
			var b = 0;
			if (3 == a.nodeType) {
				var c = a.nodeValue.match(this.regexp);
				c && (b += c.length)
			} else if (a.childNodes && a.childNodes.length)for (var d = k(a), e = d.length; e--;)b += d[e].nodeValue.match(this.regexp).length;
			return b
		}, words: function (a, b, c) {
			1 == a.nodeType && (a = i(a));
			var d = a.data.substring(0, b).match(this.regexp);
			null != d ? ("start" == c && (d = d.length + 1), "end" == c && (d = d.length)) : d = 1;
			for (var e = a, f = this.getNum(a), g = this.getFirstTextNode(f); e && e != g;)e = this.prevNode(e, /.*/)._container, d += this.wordCount(e);
			return f + ":" + d
		}, symbols: function (a) {
			var b = 0;
			if (3 == a.nodeType)b = a.nodeValue.length; else if (a.childNodes && a.childNodes.length)for (var c = k(a), d = c.length; d--;)b += c[d].nodeValue.length;
			return b
		}, updateHash: function () {
			var a = [];
			for (var b in this.ranges)a.push(this.ranges[b]);
			if (a.length) {
				var c = "#sel=" + a.join(";");
				this.lastHash = c, this.options.location.setHash(c)
			} else this.options.location._removeHash()
		}, readHash: function () {
			var a = this.splittedHash();
			if (a) {
				for (var b = 0; b < a.length; b++)this.deserializeSelection(a[b]);
				this.updateHash(), this.options.onHashRead && this.options.onHashRead.call(this)
			}
		}, splittedHash: function () {
			var a = this.options.location.getHash();
			return a ? (a = a.replace(/^#/, "").replace(/;+$/, ""), /^sel\=(?:\d+\:\d+(?:\:[^:;]*)?\,|%2C\d+\:\d+(?:\:[^:;]*)?;)*\d+\:\d+(?:\:[^:;]*)?\,|%2C\d+\:\d+(?:\:[^:;]*)?$/.test(a) ? (a = a.substring(4, a.length), a.split(";")) : null) : null
		}, deserializeSelection: function (a) {
			var b = window.getSelection();
			b.rangeCount > 0 && b.removeAllRanges();
			var c = this.deserializeRange(a);
			c && this.addSelection(c)
		}, deserializeRange: function (a) {
			var b = /^([0-9A-Za-z:]+)(?:,|%2C)([0-9A-Za-z:]+)$/.exec(a), c = b[1].split(":"), d = b[2].split(":");
			if (parseInt(c[0], 10) < parseInt(d[0], 10) || c[0] == d[0] && parseInt(c[1], 10) <= parseInt(d[1], 10)) {
				var e = this.deserializePosition(c, "start"), f = this.deserializePosition(d, "end");
				if (e.node && f.node) {
					var g = document.createRange();
					if (g.setStart(e.node, e.offset), g.setEnd(f.node, f.offset), !this.options.validate || this.validateRange(g, c[2], d[2]))return g
				}
			}
			return window.console && "function" == typeof window.console.warn && window.console.warn("Cannot deserialize range: " + a), null
		}, validateRange: function (a, b, c) {
			var d, e = !0;
			return b && (d = this.getPositionChecksum(a.getWordIterator(this.regexp)), e = e && b == d), c && (d = this.getPositionChecksum(a.getWordIterator(this.regexp, !0)), e = e && c == d), e
		}, getRangeChecksum: function (a) {
			return [this.getPositionChecksum(a.getWordIterator(this.regexp)), this.getPositionChecksum(a.getWordIterator(this.regexp, !0))]
		}, deserializePosition: function (a, b) {
			for (var c, d = this.blocks[parseInt(a[0], 10)], e = 0; d;) {
				for (var f, g = new RegExp(this.options.regexp, "ig"); null != (f = g.exec(d.data));)if (e++, e == a[1])return "start" == b && (c = f.index), "end" == b && (c = g.lastIndex), {
					node: d,
					offset: parseInt(c, 10)
				};
				d = this.nextNode(d, /.*/), d = d ? d._container : null, d && this.isFirstTextNode(d) && (d = null)
			}
			return {node: null, offset: 0}
		}, serializeRange: function (a) {
			var b = this.words(a.startContainer, a.startOffset, "start"), c = this.words(a.endContainer, a.endOffset, "end");
			if (this.options.validate) {
				var d = this.getRangeChecksum(a);
				b += ":" + d[0], c += ":" + d[1]
			}
			return b + "," + c
		}, checkSelection: function (a) {
			return this.checkPosition(a, a.startOffset, a.startContainer, "start"), this.checkPosition(a, a.endOffset, a.endContainer, "end"), this.checkBrackets(a), this.checkSentence(a), a
		}, checkPosition: function (a, b, d, f) {
			function g(a) {
				return null != a.match(n.regexp)
			}

			function h(a) {
				return null == a.match(n.regexp)
			}

			function j(a, b, c) {
				for (; b > 0 && c(a.data.charAt(b - 1));)b--;
				return b
			}

			function l(a, b, c) {
				for (; b < a.data.length && c(a.data.charAt(b));)b++;
				return b
			}

			var m, n = this;
			if (1 == d.nodeType && b > 0)if (b < d.childNodes.length)d = d.childNodes[b], b = 0; else {
				var o = k(d);
				o.length && (d = o[o.length - 1], b = d.data.length)
			}
			if ("start" == f && (1 == d.nodeType && "" != c(e(d)) && (d = i(d), b = 0), (3 != d.nodeType || null == d.data.substring(b).match(this.regexp)) && (m = this.nextNode(d), d = m._container, b = m._offset), b = l(d, b, h), b = j(d, b, g), a.setStart(d, b)), "end" == f) {
				if (1 == d.nodeType && "" != c(e(d)) && 0 != b) {
					d = d.childNodes[a.endOffset - 1];
					var o = k(d);
					d = o[o.length - 1], b = d.data.length
				}
				(3 != d.nodeType || null == d.data.substring(0, b).match(this.regexp)) && (m = this.prevNode(d), d = m._container, b = m._offset), b = j(d, b, h), b = l(d, b, g), a.setEnd(d, b)
			}
		}, checkBrackets: function (a) {
			this._checkBrackets(a, "(", ")", /\(|\)/g, /\(x*\)/g), this._checkBrackets(a, "«", "»", /\\u00ab|\\u00bb/g, /\u00abx*\u00bb/g)
		}, _checkBrackets: function (a, b, c, d, e) {
			var f, g = a.toString(), h = g.match(d);
			if (h) {
				h = h.join("");
				for (var i = h.length + 1; h.length < i;)i = h.length, h = h.replace(e, "x");
				h.charAt(h.length - 1) == c && g.charAt(g.length - 1) == c && (1 == a.endOffset ? (f = this.prevNode(a.endContainer), a.setEnd(f.container, f.offset)) : a.setEnd(a.endContainer, a.endOffset - 1)), h.charAt(0) == b && g.charAt(0) == b && (a.startOffset == a.startContainer.data.length ? (f = this.nextNode(a.endContainer), a.setStart(f.container, f.offset)) : a.setStart(a.startContainer, a.startOffset + 1))
			}
		}, checkSentence: function (a) {
			function b() {
				a.setEnd(d._container, d._offset + 1)
			}

			var d, e;
			if (a.endOffset == a.endContainer.data.length) {
				if (d = this.nextNode(a.endContainer, /.*/), !d)return null;
				e = d._container.data.charAt(0)
			} else d = {_container: a.endContainer, _offset: a.endOffset}, e = a.endContainer.data.charAt(a.endOffset);
			if (e.match(/\.|\?|\!/)) {
				var f = a.toString();
				if (f.match(/(\.|\?|\!)\s+[A-Z\u0410-\u042f\u0401]/))return b();
				if (0 == a.startOffset && a.startContainer.previousSibling && 1 == a.startContainer.previousSibling.nodeType && m(a.startContainer.previousSibling, "masha_index"))return b();
				for (var g, h = a.getElementIterator(); g = h();)if (1 == g.nodeType && m(g, "masha_index"))return b();
				if (f.charAt(0).match(/[A-Z\u0410-\u042f\u0401]/)) {
					var i = a.startContainer.data.substring(0, a.startOffset);
					if (!i.match(/\S/)) {
						var j = this.prevNode(a.startContainer, /\W*/);
						i = j._container.data
					}
					if (i = c(i), i.charAt(i.length - 1).match(/(\.|\?|\!)/))return b()
				}
				return null
			}
		}, mergeSelections: function (a) {
			var b = [], c = a.getElementIterator(), d = c(), e = d, j = f(d, "user_selection_true");
			for (j && (j = /(num\d+)(?:$| )/.exec(j.className)[1], a.setStart(i(g(this.selectable, j)), 0), b.push(j)); d;) {
				if (1 == d.nodeType && m(d, "user_selection_true")) {
					var l = /(num\d+)(?:$|)/.exec(d.className)[0];
					-1 == p(l, b) && b.push(l)
				}
				e = d, d = c()
			}
			if (e = f(e, "user_selection_true")) {
				e = /(num\d+)(?:$| )/.exec(e.className)[1];
				var n = k(h(this.selectable, e)), o = n[n.length - 1];
				a.setEnd(o, o.length)
			}
			if (b.length) {
				var q = a.startContainer, r = a.startOffset, s = a.endContainer, t = a.endOffset;
				this.deleteSelections(b), a.setStart(q, r), a.setEnd(s, t)
			}
			return a
		}, addSelection: function (a) {
			a = a || this.getFirstRange(), a = this.checkSelection(a), a = this.mergeSelections(a);
			var b = "num" + this.counter;
			this.ranges[b] = this.serializeRange(a), a.wrapSelection(b + " user_selection_true"), this.addSelectionEvents(b)
		}, addSelectionEvents: function (a) {
			for (var b = !1, c = this, d = j(this.selectable, a), e = d.length; e--;)q(d[e], "mouseover", function () {
				for (var a = d.length; a--;)n(d[a], "hover");
				window.clearTimeout(b)
			}), q(d[e], "mouseout", function (a) {
				for (var c = a.relatedTarget; c && c.parentNode && c.className != this.className;)c = c.parentNode;
				c && c.className == this.className || (b = window.setTimeout(function () {
					for (var a = d.length; a--;)o(d[a], "hover")
				}, 2e3))
			});
			var f = document.createElement("a");
			f.className = "txtsel_close", f.href = "#";
			var g = document.createElement("span");
			g.className = "closewrap", g.appendChild(f), q(f, "click", function (b) {
				s(b), c.deleteSelections([a]), c.updateHash(), c.options.onUnmark && c.options.onUnmark.call(c)
			}), d[d.length - 1].appendChild(g), this.counter++, window.getSelection().removeAllRanges()
		}, getFirstRange: function () {
			var a = window.getSelection(), b = a.rangeCount ? a.getRangeAt(0) : null;
			return this.lastRange && b && b.endContainer == b.startContainer && b.endOffset == b.startOffset ? this.lastRange : b
		}, enumerateElements: function () {
			function a(b) {
				for (var d = b.childNodes, e = !1, f = !1, g = 0; g < d.length; ++g) {
					var h = d.item(g), i = h.nodeType;
					if (3 != i || h.nodeValue.match(c.regexp))if (3 == i) {
						if (!f) {
							c.captureCount++;
							var j = document.createElement("span");
							j.className = "masha_index masha_index" + c.captureCount, j.setAttribute("rel", c.captureCount), h.parentNode.insertBefore(j, h), g++, c.blocks[c.captureCount] = h, e = f = !0
						}
					} else if (1 == i && !c.isIgnored(h)) {
						var k = c.options.isBlock(h);
						if (k) {
							var l = a(h);
							e = e || l, f = !1
						} else f || (f = a(h), e = e || f)
					}
				}
				return e
			}

			var b = this.selectable;
			this.captureCount = this.captureCount || 0;
			var c = this;
			a(b)
		}, isFirstTextNode: function (a) {
			for (var b = [a.previousSibling, a.parentNode.previousSibling], c = b.length; c--;)if (b[c] && 1 == b[c].nodeType && "masha_index" == b[c].className)return !0;
			return !1
		}, getFirstTextNode: function (a) {
			if (!a)return null;
			var b = j(this.selectable, "masha_index" + a)[0];
			return b ? 1 == b.nextSibling.nodeType ? b.nextSibling.childNodes[0] : b.nextSibling : null
		}, getNum: function (a) {
			for (; a.parentNode;) {
				for (; a.previousSibling;) {
					for (a = a.previousSibling; 1 == a.nodeType && a.childNodes.length;)a = a.lastChild;
					if (1 == a.nodeType && m(a, "masha_index"))return a.getAttribute("rel")
				}
				a = a.parentNode
			}
			return null
		}, constructIgnored: function (a) {
			if ("function" == typeof a)return a;
			if ("string" == typeof a) {
				for (var b = [], d = [], e = [], f = a.split(","), g = 0; g < f.length; g++) {
					var h = c(f[g]);
					"#" == h.charAt(0) ? b.push(h.substr(1)) : "." == h.charAt(0) ? d.push(h.substr(1)) : e.push(h)
				}
				return function (a) {
					var c;
					for (c = b.length; c--;)if (a.id == b[c])return !0;
					for (c = d.length; c--;)if (m(a, d[c]))return !0;
					for (c = e.length; c--;)if (a.tagName == e[c].toUpperCase())return !0;
					return !1
				}
			}
			return function () {
				return !1
			}
		}, rangeIsSelectable: function () {
			var a, b, c, d = !0, e = this.getFirstRange();
			if (!e)return !1;
			for (var g = e.getElementIterator(); a = g();)if (3 == a.nodeType && null != a.data.match(this.regexp) && (b = b || a, c = a), a = d && 3 == a.nodeType ? a.parentNode : a, d = !1, 1 == a.nodeType) {
				for (var h = a; h != this.selectable && h.parentNode;) {
					if (this.isIgnored(h))return !1;
					h = h.parentNode
				}
				if (h != this.selectable)return !1
			}
			var i = f(b, "user_selection_true"), j = f(c, "user_selection_true");
			if (i && j) {
				var k = /(?:^| )(num\d+)(?:$| )/;
				return k.exec(i.className)[1] != k.exec(j.className)[1]
			}
			return !0
		}, initMessage: function () {
			this.msg = "string" == typeof this.options.selectMessage ? document.getElementById(this.options.selectMessage) : this.options.selectMessage, this.closeButton = this.getCloseButton(), this.msgAutoclose = null, this.closeMessage = D(this.closeMessage, this), q(this.closeButton, "click", this.closeMessage)
		}, closeMessage: function (a) {
			s(a), this.hideMessage(), this.saveMessageClosed(), clearTimeout(this.msgAutoclose)
		}, showMessage: function () {
			n(this.msg, "show")
		}, hideMessage: function () {
			o(this.msg, "show")
		}, getCloseButton: function () {
			return this.msg.getElementsByTagName("a")[0]
		}, getMessageClosed: function () {
			return window.localStorage ? !!localStorage.masha_warning : !!document.cookie.match(/(?:^|;)\s*masha-warning=/)
		}, saveMessageClosed: function () {
			window.localStorage ? localStorage.masha_warning = "true" : this.getMessageClosed() || (document.cookie += "; masha-warning=true")
		}, _showMessage: function () {
			var a = this;
			this.getMessageClosed() || (this.showMessage(), clearTimeout(this.msgAutoclose), this.msgAutoclose = setTimeout(function () {
				a.hideMessage()
			}, 1e4))
		}
	};
	var x = window.Range || document.createRange().constructor;
	x.prototype.splitBoundaries = function () {
		var a = this.startContainer, b = this.startOffset, c = this.endContainer, d = this.endOffset, e = a === c;
		3 == c.nodeType && d < c.length && c.splitText(d), 3 == a.nodeType && b > 0 && (a = a.splitText(b), e && (d -= b, c = a), b = 0), this.setStart(a, b), this.setEnd(c, d)
	}, x.prototype.getTextNodes = function () {
		for (var a, b = this.getElementIterator(), c = []; a = b();)3 == a.nodeType && c.push(a);
		return c
	}, x.prototype.getElementIterator = function (b) {
		return b ? a(null, this.endContainer, this.startContainer, !0) : a(null, this.startContainer, this.endContainer)
	}, x.prototype.getWordIterator = function (a, b) {
		function c() {
			if (g != h || i)b ? h-- : h++; else {
				do {
					do d = f(); while (d && 3 != d.nodeType);
					if (i = !d, !i) {
						var c = d.nodeValue;
						d == j.endContainer && (c = c.substr(0, j.endOffset)), d == j.startContainer && (c = c.substr(j.startOffset)), e = c.match(a)
					}
				} while (d && !e);
				e && (g = b ? 0 : e.length - 1, h = b ? e.length - 1 : 0)
			}
			return i ? null : e[h]
		}

		var d, e, f = this.getElementIterator(b), g = 0, h = 0, i = !1, j = this;
		return c
	}, x.prototype.wrapSelection = function (a) {
		this.splitBoundaries();
		for (var b = this.getTextNodes(), c = b.length; c--;) {
			var d = document.createElement("span");
			d.className = a, b[c].parentNode.insertBefore(d, b[c]), d.appendChild(b[c])
		}
	};
	var y = function (a) {
		this.prefix = a
	};
	y.prototype = {
		setHash: function (a) {
			a = a.replace("sel", this.prefix).replace(/^#/, ""), a.length == this.prefix.length + 1 && (a = "");
			var b, c = this.getHashPart();
			b = c ? window.location.hash.replace(c, a) : window.location.hash + "|" + a, b = "#" + b.replace("||", "").replace(/^#?\|?|\|$/g, ""), window.location.hash = b
		}, addHashchange: w.LocationHandler.prototype.addHashchange, getHashPart: function () {
			for (var a = window.location.hash.replace(/^#\|?/, "").split(/\||%7C/), b = 0; b < a.length; b++)if (a[b].substr(0, this.prefix.length + 1) == this.prefix + "=")return a[b];
			return ""
		}, getHash: function () {
			return this.getHashPart().replace(this.prefix, "sel")
		}
	};
	var z = function (a, c, d) {
		c = c || function (a) {
				return a.id
			};
		for (var e = 0; e < a.length; e++) {
			var f = a[e], g = c(f);
			if (g) {
				var h = b({}, d || {}, {selectable: f, location: new y(g)});
				new w(h)
			}
		}
	};
	window.MaSha = w, window.jQuery && (window.jQuery.fn.masha = function (a) {
		return a = a || {}, a = b({selectable: this[0]}, a), new w(a)
	}), window.MultiMaSha = z;
	var A = w.$M = {};
	A.extend = b, A.byClassName = j, A.addClass = n, A.removeClass = o, A.addEvent = q, A.removeEvent = r;
	var B = Function.prototype.bind, C = Array.prototype.slice, D = function (a, b) {
		if (a.bind === B && B)return B.apply(a, C.call(arguments, 1));
		var c = C.call(arguments, 2);
		return function () {
			return a.apply(b, c.concat(C.call(arguments)))
		}
	};
	A.bind = D
}(), function () {
	function a() {
		return b(window.pageYOffset ? window.pageYOffset : 0, document.documentElement ? document.documentElement.scrollTop : 0, document.body ? document.body.scrollTop : 0)
	}

	function b(a, b, c) {
		var d = a ? a : 0;
		return b && (!d || d > b) && (d = b), c && (!d || d > c) ? c : d
	}

	var c = MaSha.$M, d = function (a) {
		a = a || {}, this.options = c.extend({}, d.defaultOptions, a), c.extend(this, {counter: 0, savedSel: [], ranges: {}, childs: [], blocks: {}}), this.init()
	};
	d.defaultOptions = {selectable: "selectable-content", t_offsetTop: 100}, d.prototype = {
		init: function () {
			this.selectable = "string" == typeof this.options.selectable ? document.getElementById(this.options.selectable) : this.options.selectable, this.total = this.countTotal(), this.drawNav(), this.total > 1 ? (this.fillNav(), this.current = 0, this.getElements(), this.noScrollEvent = !1, document.getElementById("mashajs-nav-current").innerHTML = this.current + 1) : null != document.getElementById("mashajs-nav") && (document.getElementById("mashajs-nav").style.display = "none"), this.scrollTimeout = null
		}, addEvents: function () {
			var a = document.getElementById("mashajs-up"), b = document.getElementById("mashajs-down");
			this.windowScroll = c.bind(this.calculateCurrent, this), c.addEvent(window, "scroll", this.windowScroll), this.upClick = c.bind(function () {
				this.goTo(this.current - 1)
			}, this), c.addEvent(a, "click", this.upClick), this.downClick = c.bind(function () {
				this.goTo(this.current + 1)
			}, this), c.addEvent(b, "click", this.downClick)
		}, removeEvents: function () {
			var a = document.getElementById("mashajs-up"), b = document.getElementById("mashajs-down");
			c.removeEvent(window, "scroll", this.windowScroll), a && c.removeEvent(a, "click", this.upClick), b && c.removeEvent(b, "click", this.downClick)
		}, countTotal: function () {
			var a = 0;
			for (var b in this.options.ranges)for (var c in this.options.ranges[b])a++;
			return a
		}, fillNav: function () {
			this.total > 1 ? (document.getElementById("mashajs-nav").style.display = "block", document.getElementById("mashajs-nav-total").innerHTML = this.total) : null != document.getElementById("mashajs-nav") && (document.getElementById("mashajs-nav").style.display = "none")
		}, resetData: function (a) {
			this.options.ranges = [], this.options.ranges.push(a), this.total = this.countTotal(), this.drawNav(), this.fillNav(), this.total > 1 && this.calculateCurrent()
		}, calculateCurrent: function () {
			if (this.noScrollEvent)return this.noScrollEvent = !1, !1;
			window.clearTimeout(this.scrollTimeout);
			var b = a();
			this.getElements();
			var c = this.getClosestEl(b + this.options.t_offsetTop, this.elements);
			this.current = c[1], document.getElementById("mashajs-nav-current").innerHTML = this.current + 1, this.refreshArrows()
		}, getElements: function () {
			var a = {};
			for (i in this.options.ranges)for (j in this.options.ranges[i]) {
				var b = c.byClassName(this.options.selectable, j);
				a[j] = $(b[0]).offset().top
			}
			var d = [];
			for (var e in a)d.push([e, a[e]]);
			d.sort(function (a, b) {
				return a[1] - b[1]
			}), this.elements = d
		}, getClosestEl: function (a, b) {
			var c, d, e, f = 0;
			if (b.length) {
				for (c = b[0][1], closestEl = b[0][0], num = 0, f; f < b.length; f++)d = Math.abs(a - c), e = Math.abs(a - b[f][1]), d > e && (c = b[f][1], closestEl = b[f][0], num = f), d = null, e = null;
				return [closestEl, num]
			}
			return !1
		}, refreshArrows: function () {
			(0 == this.current ? c.addClass : c.removeClass)(document.getElementById("mashajs-up"), "disabled"), (this.current == this.total - 1 ? c.addClass : c.removeClass)(document.getElementById("mashajs-down"), "disabled")
		}, goTo: function (a) {
			if (!(a >= 0 && this.elements.length >= a + 1))return a > 0 && (this.current = this.elements.length - 1), !1;
			this.noScrollEvent = !0;
			var b = this.elements[a][1] - this.options.t_offsetTop > 0 ? this.elements[a][1] - this.options.t_offsetTop : 0;
			this.smoothScroll(b, this.elements[a]), this.current = a, document.getElementById("mashajs-nav-current").innerHTML = a + 1, this.refreshArrows()
		}, drawNav: function () {
			var a = document.getElementById("mashajs-nav-position");
			if (null == a) {
				var a = document.createElement("DIV");
				a.setAttribute("id", "mashajs-nav-position"), a.innerHTML = '<div id="mashajs-nav-center"><div id="mashajs-nav"><div id="mashajs-up"></div><div id="mashajs-down"></div><div class="num"><span id="mashajs-nav-current"></span> / <span id="mashajs-nav-total"></span><span class="right"></span></div></div></div></div>';
				var b = this.selectable.offsetWidth;
				a.style.width = b + "px", this.selectable.parentNode.insertBefore(a, this.selectable.nextSibling), this.addEvents()
			}
			a.style.display = this.total > 1 ? "block" : "none"
		}, smoothScroll: function (b) {
			function c() {
				d += g, g > 0 && d > b || 0 > g && b > d ? d = b : h.scrollTimeout = window.setTimeout(c, f), window.scrollTo(0, d), h.noScrollEvent = !0
			}

			var d = a(), e = b - d, f = Math.round(Math.abs(e) / 20);
			f >= 20 && (f = 20);
			var g = Math.round(e / 25);
			if (window.clearTimeout(this.scrollTimeout), Math.abs(g) < 2)return this.noScrollEvent = !0, void window.scrollTo(0, b);
			var h = this;
			this.scrollTimeout = window.setTimeout(c, f)
		}
	};
	var e = MaSha.prototype.updateHash;
	MaSha.prototype.showNav = function () {
		this.nav = new d({ranges: [this.ranges], selectable: this.selectable}), this.nav.calculateCurrent()
	}, MaSha.prototype.updateHash = function () {
		e.call(this), "undefined" != typeof this.nav && this.nav.resetData(this.ranges)
	}
}();
var Nanobar = function () {
	"use strict";
	var a, b, c, d, e, f, g = {width: "100%", height: "2px", zIndex: 9999, top: "0"}, h = {width: 0, height: "100%", clear: "both", transition: "height .3s"};
	return a = function (a, b) {
		var c;
		for (c in b)a.style[c] = b[c];
		a.style.float = "left"
	}, d = function () {
		var a = this, b = this.width - this.here;
		.1 > b && b > -.1 ? (e.call(this, this.here), this.moving = !1, 100 == this.width && (this.el.style.height = 0, setTimeout(function () {
			a.cont.el.removeChild(a.el)
		}, 300))) : (e.call(this, this.width - b / 4), setTimeout(function () {
			a.go()
		}, 16))
	}, e = function (a) {
		this.width = a, this.el.style.width = this.width + "%"
	}, f = function () {
		var a = new b(this);
		this.bars.unshift(a)
	}, b = function (b) {
		this.el = document.createElement("div"), this.el.style.backgroundColor = b.opts.bg, this.width = 0, this.here = 0, this.moving = !1, this.cont = b, a(this.el, h), b.el.appendChild(this.el)
	}, b.prototype.go = function (a) {
		a ? (this.here = a, this.moving || (this.moving = !0, d.call(this))) : this.moving && d.call(this)
	}, c = function (b) {
		var c, d = this.opts = b || {};
		d.bg = d.bg || "#000", this.bars = [], c = this.el = document.createElement("div"), a(this.el, g), d.id && (c.id = d.id), c.style.position = d.target ? "relative" : "fixed", d.target ? d.target.insertBefore(c, d.target.firstChild) : document.getElementsByTagName("body")[0].appendChild(c), f.call(this)
	}, c.prototype.go = function (a) {
		this.bars[0].go(a), 100 == a && f.call(this)
	}, c
}();
!function (a) {
	var b, c = {
		className: "autosizejs",
		id: "autosizejs",
		append: "\n",
		callback: !1,
		resizeDelay: 10,
		placeholder: !0
	}, d = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>', e = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace"], f = a(d).data("autosize", !0)[0];
	f.style.lineHeight = "99px", "99px" === a(f).css("lineHeight") && e.push("lineHeight"), f.style.lineHeight = "", a.fn.autosize = function (d) {
		return this.length ? (d = a.extend({}, c, d || {}), f.parentNode !== document.body && a(document.body).append(f), this.each(function () {
			function c() {
				var b, c = window.getComputedStyle ? window.getComputedStyle(m, null) : null;
				c ? (b = parseFloat(c.width), ("border-box" === c.boxSizing || "border-box" === c.webkitBoxSizing || "border-box" === c.mozBoxSizing) && a.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function (a, d) {
					b -= parseFloat(c[d])
				})) : b = n.width(), f.style.width = Math.max(b, 0) + "px"
			}

			function g() {
				var g = {};
				if (b = m, f.className = d.className, f.id = d.id, j = parseFloat(n.css("maxHeight")), a.each(e, function (a, b) {
						g[b] = n.css(b)
					}), a(f).css(g).attr("wrap", n.attr("wrap")), c(), window.chrome) {
					var h = m.style.width;
					m.style.width = "0px";
					{
						m.offsetWidth
					}
					m.style.width = h
				}
			}

			function h() {
				var a, e;
				b !== m ? g() : c(), f.value = !m.value && d.placeholder ? n.attr("placeholder") || "" : m.value, f.value += d.append || "", f.style.overflowY = m.style.overflowY, e = parseFloat(m.style.height) || 0, f.scrollTop = 0, f.scrollTop = 9e4, a = f.scrollTop, j && a > j ? (m.style.overflowY = "scroll", a = j) : (m.style.overflowY = "hidden", k > a && (a = k)), a += o, Math.abs(e - a) > .01 && (m.style.height = a + "px", f.className = f.className, p && d.callback.call(m, m), n.trigger("autosize.resized"))
			}

			function i() {
				clearTimeout(l), l = setTimeout(function () {
					var a = n.width();
					a !== r && (r = a, h())
				}, parseInt(d.resizeDelay, 10))
			}

			var j, k, l, m = this, n = a(m), o = 0, p = a.isFunction(d.callback), q = {
				height: m.style.height,
				overflow: m.style.overflow,
				overflowY: m.style.overflowY,
				wordWrap: m.style.wordWrap,
				resize: m.style.resize
			}, r = n.width(), s = n.css("resize");
			n.data("autosize") || (n.data("autosize", !0), ("border-box" === n.css("box-sizing") || "border-box" === n.css("-moz-box-sizing") || "border-box" === n.css("-webkit-box-sizing")) && (o = n.outerHeight() - n.height()), k = Math.max(parseFloat(n.css("minHeight")) - o || 0, n.height()), n.css({
				overflow: "hidden",
				overflowY: "hidden",
				wordWrap: "break-word"
			}), "vertical" === s ? n.css("resize", "none") : "both" === s && n.css("resize", "horizontal"), "onpropertychange" in m ? "oninput" in m ? n.on("input.autosize keyup.autosize", h) : n.on("propertychange.autosize", function () {
				"value" === event.propertyName && h()
			}) : n.on("input.autosize", h), d.resizeDelay !== !1 && a(window).on("resize.autosize", i), n.on("autosize.resize", h), n.on("autosize.resizeIncludeStyle", function () {
				b = null, h()
			}), n.on("autosize.destroy", function () {
				b = null, clearTimeout(l), a(window).off("resize", i), n.off("autosize").off(".autosize").css(q).removeData("autosize")
			}), h())
		})) : this
	}
}(jQuery || $);
var Query = function (a) {
	"use strict";
	var b = function (a) {
		var b, c, d, e, f = [];
		if ("undefined" == typeof a || null === a || "" === a)return f;
		for (0 === a.indexOf("?") && (a = a.substring(1)), c = a.toString().split(/[&;]/), b = 0; b < c.length; b++)d = c[b], e = d.split("="), f.push([e[0], e[1]]);
		return f
	}, c = b(a), d = function () {
		var a, b, d = "";
		for (a = 0; a < c.length; a++)b = c[a], d.length > 0 && (d += "&"), d += b.join("=");
		return d.length > 0 ? "?" + d : d
	}, e = function (a) {
		return a = decodeURIComponent(a), a = a.replace("+", " ")
	}, f = function (a) {
		var b, d;
		for (d = 0; d < c.length; d++)if (b = c[d], e(a) === e(b[0]))return b[1]
	}, g = function (a) {
		var b, d, f = [];
		for (b = 0; b < c.length; b++)d = c[b], e(a) === e(d[0]) && f.push(d[1]);
		return f
	}, h = function (a, b) {
		var d, f, g, h, i = [];
		for (d = 0; d < c.length; d++)f = c[d], g = e(f[0]) === e(a), h = e(f[1]) === e(b), (1 === arguments.length && !g || 2 === arguments.length && !g && !h) && i.push(f);
		return c = i, this
	}, i = function (a, b, d) {
		return 3 === arguments.length && -1 !== d ? (d = Math.min(d, c.length), c.splice(d, 0, [a, b])) : arguments.length > 0 && c.push([a, b]), this
	}, j = function (a, b, d) {
		var f, g, j = -1;
		if (3 === arguments.length) {
			for (f = 0; f < c.length; f++)if (g = c[f], e(g[0]) === e(a) && decodeURIComponent(g[1]) === e(d)) {
				j = f;
				break
			}
			h(a, d).addParam(a, b, j)
		} else {
			for (f = 0; f < c.length; f++)if (g = c[f], e(g[0]) === e(a)) {
				j = f;
				break
			}
			h(a), i(a, b, j)
		}
		return this
	};
	return {getParamValue: f, getParamValues: g, deleteParam: h, addParam: i, replaceParam: j, toString: d}
}, Uri = function (a) {
	"use strict";
	var b = !1, c = function (a) {
		for (var c = {
			strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
			loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
		}, d = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], e = {
			name: "queryKey",
			parser: /(?:^|&)([^&=]*)=?([^&]*)/g
		}, f = c[b ? "strict" : "loose"].exec(a), g = {}, h = 14; h--;)g[d[h]] = f[h] || "";
		return g[e.name] = {}, g[d[12]].replace(e.parser, function (a, b, c) {
			b && (g[e.name][b] = c)
		}), g
	}, d = c(a || ""), e = new Query(d.query), f = function (a) {
		return "undefined" != typeof a && (d.protocol = a), d.protocol
	}, g = null, h = function (a) {
		return "undefined" != typeof a && (g = a), null === g ? -1 !== d.source.indexOf("//") : g
	}, i = function (a) {
		return "undefined" != typeof a && (d.userInfo = a), d.userInfo
	}, j = function (a) {
		return "undefined" != typeof a && (d.host = a), d.host
	}, k = function (a) {
		return "undefined" != typeof a && (d.port = a), d.port
	}, l = function (a) {
		return "undefined" != typeof a && (d.path = a), d.path
	}, m = function (a) {
		return "undefined" != typeof a && (e = new Query(a)), e
	}, n = function (a) {
		return "undefined" != typeof a && (d.anchor = a), d.anchor
	}, o = function (a) {
		return f(a), this
	}, p = function (a) {
		return h(a), this
	}, q = function (a) {
		return i(a), this
	}, r = function (a) {
		return j(a), this
	}, s = function (a) {
		return k(a), this
	}, t = function (a) {
		return l(a), this
	}, u = function (a) {
		return m(a), this
	}, v = function (a) {
		return n(a), this
	}, w = function (a) {
		return m().getParamValue(a)
	}, x = function (a) {
		return m().getParamValues(a)
	}, y = function (a, b) {
		return 2 === arguments.length ? m().deleteParam(a, b) : m().deleteParam(a), this
	}, z = function (a, b, c) {
		return 3 === arguments.length ? m().addParam(a, b, c) : m().addParam(a, b), this
	}, A = function (a, b, c) {
		return 3 === arguments.length ? m().replaceParam(a, b, c) : m().replaceParam(a, b), this
	}, B = function () {
		var a = "", b = function (a) {
			return null !== a && "" !== a
		};
		return b(f()) ? (a += f(), f().indexOf(":") !== f().length - 1 && (a += ":"), a += "//") : h() && b(j()) && (a += "//"), b(i()) && b(j()) && (a += i(), i().indexOf("@") !== i().length - 1 && (a += "@")), b(j()) && (a += j(), b(k()) && (a += ":" + k())), b(l()) ? a += l() : b(j()) && (b(m().toString()) || b(n())) && (a += "/"), b(m().toString()) && (0 !== m().toString().indexOf("?") && (a += "?"), a += m().toString()), b(n()) && (0 !== n().indexOf("#") && (a += "#"), a += n()), a
	}, C = function () {
		return new Uri(B())
	};
	return {
		protocol: f,
		hasAuthorityPrefix: h,
		userInfo: i,
		host: j,
		port: k,
		path: l,
		query: m,
		anchor: n,
		setProtocol: o,
		setHasAuthorityPrefix: p,
		setUserInfo: q,
		setHost: r,
		setPort: s,
		setPath: t,
		setQuery: u,
		setAnchor: v,
		getQueryParamValue: w,
		getQueryParamValues: x,
		deleteQueryParam: y,
		addQueryParam: z,
		replaceQueryParam: A,
		toString: B,
		clone: C
	}
}, jsUri = Uri;
!function (a) {
	function b(a) {
		this.imageCandidates = [], this.srcValue = a.src, this.srcsetValue = a.srcset, this.isValid = !0, this.error = "", this._parse(this.srcsetValue), !this.isValid
	}

	function c(a) {
		this.src = a.src, this.w = a.w || 1 / 0, this.h = a.h || 1 / 0, this.x = a.x || 1
	}

	var d = /^[0-9]+$/;
	b.prototype._parse = function () {
		for (var a, b, d = this.srcsetValue, e = 0, f = []; "" !== d;) {
			for (; " " === d.charAt(0);)d = d.slice(1);
			if (e = d.indexOf(" "), -1 !== e) {
				if (a = d.slice(0, e), "" === a)break;
				d = d.slice(e + 1), e = d.indexOf(","), -1 === e ? (b = d, d = "") : (b = d.slice(0, e), d = d.slice(e + 1)), f.push({url: a, descriptors: b})
			} else f.push({url: d, descriptors: ""}), d = ""
		}
		for (var g = 0, h = f.length; h > g; g++) {
			var i = f[g], j = this._parseDescriptors(i.descriptors);
			this._addCandidate(new c({src: i.url, x: j.x, w: j.w, h: j.h}))
		}
		this.srcValue && this._addCandidate(new c({src: this.srcValue}))
	}, b.prototype._addCandidate = function (a) {
		for (var b = 0; b < this.imageCandidates.length; b++) {
			var c = this.imageCandidates[b];
			if (c.x == a.x && c.w == a.w && c.h == a.h)return
		}
		this.imageCandidates.push(a)
	}, b.prototype._parseDescriptors = function (a) {
		for (var b = a.split(/\s/), c = {}, e = 0; e < b.length; e++) {
			var f = b[e];
			if (f.length > 0) {
				var g = f[f.length - 1], h = f.substring(0, f.length - 1), i = parseInt(h, 10), j = parseFloat(h);
				h.match(d) && "w" === g ? c[g] = i : h.match(d) && "h" == g ? c[g] = i : isNaN(j) || "x" != g ? (this.error = 'Invalid srcset descriptor found in "' + f + '".', this.isValid = !1) : c[g] = j
			}
		}
		return c
	}, a.SrcsetInfo = b
}(window), function (a) {
	function b() {
		this.w = null, this.h = null, this.x = null
	}

	b.prototype.compute = function () {
		this.w = window.innerWidth || document.documentElement.clientWidth, this.h = window.innerHeight || document.documentElement.clientHeight, this.x = window.devicePixelRatio
	}, b.prototype.setForTesting = function (a) {
		this.w = a.w, this.h = a.h, this.x = a.x
	}, b.prototype.getBestImage = function (a) {
		var b = a.imageCandidates.slice(0), c = this._getBestCandidateIf(b, function (a, b) {
			return a.w > b.w
		});
		this._removeCandidatesIf(b, function (a) {
			return function (b) {
				return b.w < a.w
			}
		}(this)), 0 === b.length && (b = [c]);
		var d = this._getBestCandidateIf(b, function (a, b) {
			return a.h > b.h
		});
		this._removeCandidatesIf(b, function (a) {
			return function (b) {
				return b.h < a.h
			}
		}(this)), 0 === b.length && (b = [d]);
		var e = this._getBestCandidateIf(b, function (a, b) {
			return a.x > b.x
		});
		this._removeCandidatesIf(b, function (a) {
			return function (b) {
				return b.x < a.x
			}
		}(this)), 0 === b.length && (b = [e]);
		var f = this._getBestCandidateIf(b, function (a, b) {
			return a.w < b.w
		});
		this._removeCandidatesIf(b, function (a) {
			return a.w > f.w
		});
		this._getBestCandidateIf(b, function (a, b) {
			return a.h < b.h
		});
		this._removeCandidatesIf(b, function (a) {
			return a.h > f.h
		});
		var g = this._getBestCandidateIf(b, function (a, b) {
			return a.x < b.x
		});
		return this._removeCandidatesIf(b, function (a) {
			return a.x > g.x
		}), b[0]
	}, b.prototype._getBestCandidateIf = function (a, b) {
		for (var c = a[0], d = 0; d < a.length; d++) {
			var e = a[d];
			b(e, c) && (c = e)
		}
		return c
	}, b.prototype._removeCandidatesIf = function (a, b) {
		for (var c = a.length - 1; c >= 0; c--) {
			var d = a[c];
			b(d) && a.splice(c, 1)
		}
		return a
	}, b.prototype.getBestImage2 = function (a) {
		for (var b = null, c = a.imageCandidates, d = 0; d < c.length; d++) {
			var e = c[d], f = b ? b.x : 0;
			if (f <= e.x && e.x <= this.x) {
				if (null === b) {
					b = e;
					continue
				}
				this.w <= e.w && e.w <= b.w && (b = e)
			}
		}
		return b
	}, a.ViewportInfo = b
}(window), function () {
	function a() {
		var a = new Image;
		return "srcset" in a
	}

	function b() {
		if (!a() && document.querySelectorAll) {
			var b = new ViewportInfo;
			b.compute();
			for (var c = document.querySelectorAll("img"), d = 0; d < c.length; d++) {
				var e = c[d], f = e.getAttribute("srcset");
				if (f) {
					var g = new SrcsetInfo({src: e.src, srcset: f}), h = b.getBestImage(g);
					e.src = h.src, e.width || e.height || e.style.height || e.style.width || (e.style.webkitTransform = "scale(" + 1 / h.x + ")", e.style.webkitTransformOrigin = "0 0")
				}
			}
		}
	}

	var c = setInterval(function () {
		"complete" === document.readyState && (b(), clearInterval(c))
	}, 10)
}(window), jQuery.IFramePost = function (a) {
	function b(a) {
		a.stopPropagation()
	}

	var c = $(a.form), d = $('<iframe style="width: 0;height: 0;display: none" id="post-iframe" name="post-iframe"></iframe>');
	"function" == typeof a.beforeLoad && a.beforeLoad(), d.load(function () {
		resp = this.contentWindow.data, resp ? (a.success(resp), d.remove(), c[0].target = null, c.removeAttr("target")) : this.contentWindow.document.body.innerHTML && "function" == typeof a.error && a.error()
	}).appendTo(document.body);
	var e = window.addEventListener ? "addEventListener" : "attachEvent", f = window[e], g = "attachEvent" === e ? "onmessage" : "message";
	f(g, function (b) {
		b.data && "error" === b.data.type && ("function" == typeof a.error && a.error(b.data), c[0].target = null, c.removeAttr("target"))
	}, !1), c[0].target = d.attr("id"), c.attr("target", d.attr("id"));
	var h = c.attr("action"), i = a.url || h;
	i += (-1 === i.indexOf("?") ? "?" : "&") + "iframe=1", c[0].action = i, c.attr("action", i), c.on("submit", b), c.submit(), c.off("submit", b), c[0].action = h, c.attr("action", h)
}, function (a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery.autocomplete"], a) : a("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery)
}(function (a) {
	"use strict";
	function b(c, d) {
		var e = function () {
		}, f = this, g = {
			ajaxSettings: {},
			autoSelectFirst: !1,
			appendTo: document.body,
			serviceUrl: null,
			lookup: null,
			onSelect: null,
			width: "auto",
			minChars: 1,
			maxHeight: 300,
			deferRequestBy: 0,
			params: {},
			formatResult: b.formatResult,
			delimiter: null,
			zIndex: 9999,
			type: "GET",
			noCache: !1,
			onSearchStart: e,
			onSearchComplete: e,
			onSearchError: e,
			preserveInput: !1,
			containerClass: "autocomplete-suggestions",
			tabDisabled: !1,
			dataType: "text",
			currentRequest: null,
			triggerSelectOnValidInput: !0,
			preventBadQueries: !0,
			lookupFilter: function (a, b, c) {
				return -1 !== a.value.toLowerCase().indexOf(c)
			},
			paramName: "query",
			transformResult: function (b) {
				return "string" == typeof b ? a.parseJSON(b) : b
			},
			showNoSuggestionNotice: !1,
			noSuggestionNotice: "No results",
			orientation: "bottom",
			forceFixPosition: !1
		};
		f.element = c, f.el = a(c), f.suggestions = [], f.badQueries = [], f.selectedIndex = -1, f.currentValue = f.element.value, f.intervalId = 0, f.cachedResponse = {}, f.onChangeInterval = null, f.onChange = null, f.isLocal = !1, f.suggestionsContainer = null, f.noSuggestionsContainer = null, f.options = a.extend({}, g, d), f.classes = {
			selected: "autocomplete-selected",
			suggestion: "autocomplete-suggestion"
		}, f.hint = null, f.hintValue = "", f.selection = null, f.initialize(), f.setOptions(d)
	}

	var c = function () {
		return {
			escapeRegExChars: function (a) {
				return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
			}, createNode: function (a) {
				var b = document.createElement("div");
				return b.className = a, b.style.position = "absolute", b.style.display = "none", b
			}
		}
	}(), d = {ESC: 27, TAB: 9, RETURN: 13, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};
	b.utils = c, a.Autocomplete = b, b.formatResult = function (a, b) {
		var d = "(" + c.escapeRegExChars(b) + ")";
		return a.value.replace(new RegExp(d, "gi"), "<strong>$1</strong>")
	}, b.prototype = {
		killerFn: null, initialize: function () {
			var c, d = this, e = "." + d.classes.suggestion, f = d.classes.selected, g = d.options;
			d.element.setAttribute("autocomplete", "off"), d.killerFn = function (b) {
				0 === a(b.target).closest("." + d.options.containerClass).length && (d.killSuggestions(), d.disableKillerFn())
			}, d.noSuggestionsContainer = a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), d.suggestionsContainer = b.utils.createNode(g.containerClass), c = a(d.suggestionsContainer), c.appendTo(g.appendTo), "auto" !== g.width && c.width(g.width), c.on("mouseover.autocomplete", e, function () {
				d.activate(a(this).data("index"))
			}), c.on("mouseout.autocomplete", function () {
				d.selectedIndex = -1, c.children("." + f).removeClass(f)
			}), c.on("click.autocomplete", e, function () {
				d.select(a(this).data("index"))
			}), d.fixPositionCapture = function () {
				d.visible && d.fixPosition()
			}, a(window).on("resize.autocomplete", d.fixPositionCapture), d.el.on("keydown.autocomplete", function (a) {
				d.onKeyPress(a)
			}), d.el.on("keyup.autocomplete", function (a) {
				d.onKeyUp(a)
			}), d.el.on("blur.autocomplete", function () {
				d.onBlur()
			}), d.el.on("focus.autocomplete", function () {
				d.onFocus()
			}), d.el.on("change.autocomplete", function (a) {
				d.onKeyUp(a)
			}), d.el.on("input.autocomplete", function (a) {
				d.onKeyUp(a)
			})
		}, onFocus: function () {
			var a = this;
			a.fixPosition(), a.options.minChars <= a.el.val().length && a.onValueChange()
		}, onBlur: function () {
			this.enableKillerFn()
		}, setOptions: function (b) {
			var c = this, d = c.options;
			a.extend(d, b), c.isLocal = a.isArray(d.lookup), c.isLocal && (d.lookup = c.verifySuggestionsFormat(d.lookup)), d.orientation = c.validateOrientation(d.orientation, "bottom"), a(c.suggestionsContainer).css({
				"max-height": d.maxHeight + "px",
				width: d.width + "px",
				"z-index": d.zIndex
			})
		}, clearCache: function () {
			this.cachedResponse = {}, this.badQueries = []
		}, clear: function () {
			this.clearCache(), this.currentValue = "", this.suggestions = []
		}, disable: function () {
			var a = this;
			a.disabled = !0, clearInterval(a.onChangeInterval), a.currentRequest && a.currentRequest.abort()
		}, enable: function () {
			this.disabled = !1
		}, fixPosition: function () {
			var b = this, c = a(b.suggestionsContainer), d = c.parent().get(0);
			if (d === document.body || b.options.forceFixPosition) {
				var e = b.options.orientation, f = c.outerHeight(), g = b.el.outerHeight(), h = b.el.offset(), i = {top: h.top, left: h.left};
				if ("auto" === e) {
					var j = a(window).height(), k = a(window).scrollTop(), l = -k + h.top - f, m = k + j - (h.top + g + f);
					e = Math.max(l, m) === l ? "top" : "bottom"
				}
				if (i.top += "top" === e ? -f : g, d !== document.body) {
					var n, o = c.css("opacity");
					b.visible || c.css("opacity", 0).show(), n = c.offsetParent().offset(), i.top -= n.top, i.left -= n.left, b.visible || c.css("opacity", o).hide()
				}
				"auto" === b.options.width && (i.width = b.el.outerWidth() - 2 + "px"), c.css(i)
			}
		}, enableKillerFn: function () {
			var b = this;
			a(document).on("click.autocomplete", b.killerFn)
		}, disableKillerFn: function () {
			var b = this;
			a(document).off("click.autocomplete", b.killerFn)
		}, killSuggestions: function () {
			var a = this;
			a.stopKillSuggestions(), a.intervalId = window.setInterval(function () {
				a.hide(), a.stopKillSuggestions()
			}, 50)
		}, stopKillSuggestions: function () {
			window.clearInterval(this.intervalId)
		}, isCursorAtEnd: function () {
			var a, b = this, c = b.el.val().length, d = b.element.selectionStart;
			return "number" == typeof d ? d === c : document.selection ? (a = document.selection.createRange(), a.moveStart("character", -c), c === a.text.length) : !0
		}, onKeyPress: function (a) {
			var b = this;
			if (!b.disabled && !b.visible && a.which === d.DOWN && b.currentValue)return void b.suggest();
			if (!b.disabled && b.visible) {
				switch (a.which) {
					case d.ESC:
						b.el.val(b.currentValue), b.hide();
						break;
					case d.RIGHT:
						if (b.hint && b.options.onHint && b.isCursorAtEnd()) {
							b.selectHint();
							break
						}
						return;
					case d.TAB:
						if (b.hint && b.options.onHint)return void b.selectHint();
						if (-1 === b.selectedIndex)return void b.hide();
						if (b.select(b.selectedIndex), b.options.tabDisabled === !1)return;
						break;
					case d.RETURN:
						if (-1 === b.selectedIndex)return void b.hide();
						b.select(b.selectedIndex);
						break;
					case d.UP:
						b.moveUp();
						break;
					case d.DOWN:
						b.moveDown();
						break;
					default:
						return
				}
				a.stopImmediatePropagation(), a.preventDefault()
			}
		}, onKeyUp: function (a) {
			var b = this;
			if (!b.disabled) {
				switch (a.which) {
					case d.UP:
					case d.DOWN:
						return
				}
				clearInterval(b.onChangeInterval), b.currentValue !== b.el.val() && (b.findBestHint(), b.options.deferRequestBy > 0 ? b.onChangeInterval = setInterval(function () {
					b.onValueChange()
				}, b.options.deferRequestBy) : b.onValueChange())
			}
		}, onValueChange: function () {
			var b, c = this, d = c.options, e = c.el.val(), f = c.getQuery(e);
			return c.selection && c.currentValue !== f && (c.selection = null, (d.onInvalidateSelection || a.noop).call(c.element)), clearInterval(c.onChangeInterval), c.currentValue = e, c.selectedIndex = -1, d.triggerSelectOnValidInput && (b = c.findSuggestionIndex(f), -1 !== b) ? void c.select(b) : void(f.length < d.minChars ? c.hide() : c.getSuggestions(f))
		}, findSuggestionIndex: function (b) {
			var c = this, d = -1, e = b.toLowerCase();
			return a.each(c.suggestions, function (a, b) {
				return b.value.toLowerCase() === e ? (d = a, !1) : void 0
			}), d
		}, getQuery: function (b) {
			var c, d = this.options.delimiter;
			return d ? (c = b.split(d), a.trim(c[c.length - 1])) : b
		}, getSuggestionsLocal: function (b) {
			var c, d = this, e = d.options, f = b.toLowerCase(), g = e.lookupFilter, h = parseInt(e.lookupLimit, 10);
			return c = {
				suggestions: a.grep(e.lookup, function (a) {
					return g(a, b, f)
				})
			}, h && c.suggestions.length > h && (c.suggestions = c.suggestions.slice(0, h)), c
		}, getSuggestions: function (b) {
			var c, d, e, f, g = this, h = g.options, i = h.serviceUrl;
			if (h.params[h.paramName] = b, d = h.ignoreParams ? null : h.params, h.onSearchStart.call(g.element, h.params) !== !1) {
				if (a.isFunction(h.lookup))return void h.lookup(b, function (a) {
					g.suggestions = a.suggestions, g.suggest(), h.onSearchComplete.call(g.element, b, a.suggestions)
				});
				g.isLocal ? c = g.getSuggestionsLocal(b) : (a.isFunction(i) && (i = i.call(g.element, b)), e = i + "?" + a.param(d || {}), c = g.cachedResponse[e]), c && a.isArray(c.suggestions) ? (g.suggestions = c.suggestions, g.suggest(), h.onSearchComplete.call(g.element, b, c.suggestions)) : g.isBadQuery(b) ? h.onSearchComplete.call(g.element, b, []) : (g.currentRequest && g.currentRequest.abort(), f = {
					url: i,
					data: d,
					type: h.type,
					dataType: h.dataType
				}, a.extend(f, h.ajaxSettings), g.currentRequest = a.ajax(f).done(function (a) {
					var c;
					g.currentRequest = null, c = h.transformResult(a), g.processResponse(c, b, e), h.onSearchComplete.call(g.element, b, c.suggestions)
				}).fail(function (a, c, d) {
					h.onSearchError.call(g.element, b, a, c, d)
				}))
			}
		}, isBadQuery: function (a) {
			if (!this.options.preventBadQueries)return !1;
			for (var b = this.badQueries, c = b.length; c--;)if (0 === a.indexOf(b[c]))return !0;
			return !1
		}, hide: function () {
			var b = this;
			b.visible = !1, b.selectedIndex = -1, clearInterval(b.onChangeInterval), a(b.suggestionsContainer).hide(), b.signalHint(null)
		}, suggest: function () {
			if (0 === this.suggestions.length)return void(this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide());
			var b, c, d = this, e = d.options, f = e.groupBy, g = e.formatResult, h = d.getQuery(d.currentValue), i = d.classes.suggestion, j = d.classes.selected, k = a(d.suggestionsContainer), l = a(d.noSuggestionsContainer), m = e.beforeRender, n = "", o = e.formatGroup || function (a) {
					var c = a.data[f];
					return b === c ? "" : (b = c, '<div class="autocomplete-group"><strong>' + b + "</strong></div>")
				};
			return e.triggerSelectOnValidInput && (c = d.findSuggestionIndex(h), -1 !== c) ? void d.select(c) : (a.each(d.suggestions, function (a, b) {
				f && (n += o(b, h, a)), n += '<div class="' + i + '" data-index="' + a + '">' + g(b, h) + "</div>"
			}), this.adjustContainerWidth(), l.detach(), k.html(n), a.isFunction(m) && m.call(d.element, k), d.fixPosition(), k.show(), e.autoSelectFirst && (d.selectedIndex = 0, k.scrollTop(0), k.children().first().addClass(j)), d.visible = !0, void d.findBestHint())
		}, noSuggestions: function () {
			var b = this, c = a(b.suggestionsContainer), d = a(b.noSuggestionsContainer);
			this.adjustContainerWidth(), d.detach(), c.empty(), c.append(d), b.fixPosition(), c.show(), b.visible = !0
		}, adjustContainerWidth: function () {
			var b, c = this, d = c.options, e = a(c.suggestionsContainer);
			"auto" === d.width && (b = c.el.outerWidth() - 2, e.width(b > 0 ? b : 300))
		}, findBestHint: function () {
			var b = this, c = b.el.val().toLowerCase(), d = null;
			c && (a.each(b.suggestions, function (a, b) {
				var e = 0 === b.value.toLowerCase().indexOf(c);
				return e && (d = b), !e
			}), b.signalHint(d))
		}, signalHint: function (b) {
			var c = "", d = this;
			b && (c = d.currentValue + b.value.substr(d.currentValue.length)), d.hintValue !== c && (d.hintValue = c, d.hint = b, (this.options.onHint || a.noop)(c))
		}, verifySuggestionsFormat: function (b) {
			return b.length && "string" == typeof b[0] ? a.map(b, function (a) {
				return {value: a, data: null}
			}) : b
		}, validateOrientation: function (b, c) {
			return b = a.trim(b || "").toLowerCase(), -1 === a.inArray(b, ["auto", "bottom", "top"]) && (b = c), b
		}, processResponse: function (a, b, c) {
			var d = this, e = d.options;
			a.suggestions = d.verifySuggestionsFormat(a.suggestions), e.noCache || (d.cachedResponse[c] = a, e.preventBadQueries && 0 === a.suggestions.length && d.badQueries.push(b)), b === d.getQuery(d.currentValue) && (d.suggestions = a.suggestions, d.suggest())
		}, activate: function (b) {
			var c, d = this, e = d.classes.selected, f = a(d.suggestionsContainer), g = f.find("." + d.classes.suggestion);
			return f.find("." + e).removeClass(e), d.selectedIndex = b, -1 !== d.selectedIndex && g.length > d.selectedIndex ? (c = g.get(d.selectedIndex), a(c).addClass(e), c) : null
		}, selectHint: function () {
			var b = this, c = a.inArray(b.hint, b.suggestions);
			b.select(c)
		}, select: function (a) {
			var b = this;
			b.hide(), b.onSelect(a)
		}, moveUp: function () {
			var b = this;
			if (-1 !== b.selectedIndex)return 0 === b.selectedIndex ? (a(b.suggestionsContainer).children().first().removeClass(b.classes.selected), b.selectedIndex = -1, b.el.val(b.currentValue), void b.findBestHint()) : void b.adjustScroll(b.selectedIndex - 1)
		}, moveDown: function () {
			var a = this;
			a.selectedIndex !== a.suggestions.length - 1 && a.adjustScroll(a.selectedIndex + 1)
		}, adjustScroll: function (b) {
			var c = this, d = c.activate(b);
			if (d) {
				var e, f, g, h = a(d).outerHeight();
				e = d.offsetTop, f = a(c.suggestionsContainer).scrollTop(), g = f + c.options.maxHeight - h, f > e ? a(c.suggestionsContainer).scrollTop(e) : e > g && a(c.suggestionsContainer).scrollTop(e - c.options.maxHeight + h), c.options.preserveInput || c.el.val(c.getValue(c.suggestions[b].value)), c.signalHint(null)
			}
		}, onSelect: function (b) {
			var c = this, d = c.options.onSelect, e = c.suggestions[b];
			c.currentValue = c.getValue(e.value), c.currentValue === c.el.val() || c.options.preserveInput || c.el.val(c.currentValue), c.signalHint(null), c.suggestions = [], c.selection = e, a.isFunction(d) && d.call(c.element, e)
		}, getValue: function (a) {
			var b, c, d = this, e = d.options.delimiter;
			return e ? (b = d.currentValue, c = b.split(e), 1 === c.length ? a : b.substr(0, b.length - c[c.length - 1].length) + a) : a
		}, dispose: function () {
			var b = this;
			b.el.off(".autocomplete").removeData("autocomplete"), b.disableKillerFn(), a(window).off("resize.autocomplete", b.fixPositionCapture), a(b.suggestionsContainer).remove()
		}
	}, a.fn.autocomplete = a.fn.devbridgeAutocomplete = function (c, d) {
		var e = "autocomplete";
		return 0 === arguments.length ? this.first().data(e) : this.each(function () {
			var f = a(this), g = f.data(e);
			"string" == typeof c ? g && "function" == typeof g[c] && g[c](d) : (g && g.dispose && g.dispose(), g = new b(this, c), f.data(e, g))
		})
	}
}), function (a) {
	function b(a, b, c) {
		switch (arguments.length) {
			case 2:
				return null != a ? a : b;
			case 3:
				return null != a ? a : null != b ? b : c;
			default:
				throw new Error("Implement me")
		}
	}

	function c(a, b) {
		return Bb.call(a, b)
	}

	function d() {
		return {empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1}
	}

	function e(a) {
		vb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn
	}

	function f(a, b) {
		var c = !0;
		return o(function () {
			return c && (e(a), c = !1), b.apply(this, arguments)
		}, b)
	}

	function g(a, b) {
		sc[a] || (e(b), sc[a] = !0)
	}

	function h(a, b) {
		return function (c) {
			return r(a.call(this, c), b)
		}
	}

	function i(a, b) {
		return function (c) {
			return this.localeData().ordinal(a.call(this, c), b)
		}
	}

	function j(a, b) {
		var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months");
		return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
	}

	function k(a, b, c) {
		var d;
		return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
	}

	function l() {
	}

	function m(a, b) {
		b !== !1 && H(a), p(this, a), this._d = new Date(+a._d), uc === !1 && (uc = !0, vb.updateOffset(this), uc = !1)
	}

	function n(a) {
		var b = A(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
		this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = vb.localeData(), this._bubble()
	}

	function o(a, b) {
		for (var d in b)c(b, d) && (a[d] = b[d]);
		return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a
	}

	function p(a, b) {
		var c, d, e;
		if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Kb.length > 0)for (c in Kb)d = Kb[c], e = b[d], "undefined" != typeof e && (a[d] = e);
		return a
	}

	function q(a) {
		return 0 > a ? Math.ceil(a) : Math.floor(a)
	}

	function r(a, b, c) {
		for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;)d = "0" + d;
		return (e ? c ? "+" : "" : "-") + d
	}

	function s(a, b) {
		var c = {milliseconds: 0, months: 0};
		return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
	}

	function t(a, b) {
		var c;
		return b = M(b, a), a.isBefore(b) ? c = s(a, b) : (c = s(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
	}

	function u(a, b) {
		return function (c, d) {
			var e, f;
			return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = vb.duration(c, d), v(this, e, a), this
		}
	}

	function v(a, b, c, d) {
		var e = b._milliseconds, f = b._days, g = b._months;
		d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && pb(a, "Date", ob(a, "Date") + f * c), g && nb(a, ob(a, "Month") + g * c), d && vb.updateOffset(a, f || g)
	}

	function w(a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	}

	function x(a) {
		return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
	}

	function y(a, b, c) {
		var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
		for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && C(a[d]) !== C(b[d])) && g++;
		return g + f
	}

	function z(a) {
		if (a) {
			var b = a.toLowerCase().replace(/(.)s$/, "$1");
			a = lc[a] || mc[b] || b
		}
		return a
	}

	function A(a) {
		var b, d, e = {};
		for (d in a)c(a, d) && (b = z(d), b && (e[b] = a[d]));
		return e
	}

	function B(b) {
		var c, d;
		if (0 === b.indexOf("week"))c = 7, d = "day"; else {
			if (0 !== b.indexOf("month"))return;
			c = 12, d = "month"
		}
		vb[b] = function (e, f) {
			var g, h, i = vb._locale[b], j = [];
			if ("number" == typeof e && (f = e, e = a), h = function (a) {
					var b = vb().utc().set(d, a);
					return i.call(vb._locale, b, e || "")
				}, null != f)return h(f);
			for (g = 0; c > g; g++)j.push(h(g));
			return j
		}
	}

	function C(a) {
		var b = +a, c = 0;
		return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
	}

	function D(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}

	function E(a, b, c) {
		return jb(vb([a, 11, 31 + b - c]), b, c).week
	}

	function F(a) {
		return G(a) ? 366 : 365
	}

	function G(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function H(a) {
		var b;
		a._a && -2 === a._pf.overflow && (b = a._a[Db] < 0 || a._a[Db] > 11 ? Db : a._a[Eb] < 1 || a._a[Eb] > D(a._a[Cb], a._a[Db]) ? Eb : a._a[Fb] < 0 || a._a[Fb] > 24 || 24 === a._a[Fb] && (0 !== a._a[Gb] || 0 !== a._a[Hb] || 0 !== a._a[Ib]) ? Fb : a._a[Gb] < 0 || a._a[Gb] > 59 ? Gb : a._a[Hb] < 0 || a._a[Hb] > 59 ? Hb : a._a[Ib] < 0 || a._a[Ib] > 999 ? Ib : -1, a._pf._overflowDayOfYear && (Cb > b || b > Eb) && (b = Eb), a._pf.overflow = b)
	}

	function I(b) {
		return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length && b._pf.bigHour === a)), b._isValid
	}

	function J(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}

	function K(a) {
		for (var b, c, d, e, f = 0; f < a.length;) {
			for (e = J(a[f]).split("-"), b = e.length, c = J(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
				if (d = L(e.slice(0, b).join("-")))return d;
				if (c && c.length >= b && y(e, c, !0) >= b - 1)break;
				b--
			}
			f++
		}
		return null
	}

	function L(a) {
		var b = null;
		if (!Jb[a] && Lb)try {
			b = vb.locale(), require("./locale/" + a), vb.locale(b)
		} catch (c) {
		}
		return Jb[a]
	}

	function M(a, b) {
		var c, d;
		return b._isUTC ? (c = b.clone(), d = (vb.isMoment(a) || x(a) ? +a : +vb(a)) - +c, c._d.setTime(+c._d + d), vb.updateOffset(c, !1), c) : vb(a).local()
	}

	function N(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}

	function O(a) {
		var b, c, d = a.match(Pb);
		for (b = 0, c = d.length; c > b; b++)d[b] = rc[d[b]] ? rc[d[b]] : N(d[b]);
		return function (e) {
			var f = "";
			for (b = 0; c > b; b++)f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
			return f
		}
	}

	function P(a, b) {
		return a.isValid() ? (b = Q(b, a.localeData()), nc[b] || (nc[b] = O(b)), nc[b](a)) : a.localeData().invalidDate()
	}

	function Q(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}

		var d = 5;
		for (Qb.lastIndex = 0; d >= 0 && Qb.test(a);)a = a.replace(Qb, c), Qb.lastIndex = 0, d -= 1;
		return a
	}

	function R(a, b) {
		var c, d = b._strict;
		switch (a) {
			case"Q":
				return _b;
			case"DDDD":
				return bc;
			case"YYYY":
			case"GGGG":
			case"gggg":
				return d ? cc : Tb;
			case"Y":
			case"G":
			case"g":
				return ec;
			case"YYYYYY":
			case"YYYYY":
			case"GGGGG":
			case"ggggg":
				return d ? dc : Ub;
			case"S":
				if (d)return _b;
			case"SS":
				if (d)return ac;
			case"SSS":
				if (d)return bc;
			case"DDD":
				return Sb;
			case"MMM":
			case"MMMM":
			case"dd":
			case"ddd":
			case"dddd":
				return Wb;
			case"a":
			case"A":
				return b._locale._meridiemParse;
			case"x":
				return Zb;
			case"X":
				return $b;
			case"Z":
			case"ZZ":
				return Xb;
			case"T":
				return Yb;
			case"SSSS":
				return Vb;
			case"MM":
			case"DD":
			case"YY":
			case"GG":
			case"gg":
			case"HH":
			case"hh":
			case"mm":
			case"ss":
			case"ww":
			case"WW":
				return d ? ac : Rb;
			case"M":
			case"D":
			case"d":
			case"H":
			case"h":
			case"m":
			case"s":
			case"w":
			case"W":
			case"e":
			case"E":
				return Rb;
			case"Do":
				return d ? b._locale._ordinalParse : b._locale._ordinalParseLenient;
			default:
				return c = new RegExp($(Z(a.replace("\\", "")), "i"))
		}
	}

	function S(a) {
		a = a || "";
		var b = a.match(Xb) || [], c = b[b.length - 1] || [], d = (c + "").match(jc) || ["-", 0, 0], e = +(60 * d[1]) + C(d[2]);
		return "+" === d[0] ? e : -e
	}

	function T(a, b, c) {
		var d, e = c._a;
		switch (a) {
			case"Q":
				null != b && (e[Db] = 3 * (C(b) - 1));
				break;
			case"M":
			case"MM":
				null != b && (e[Db] = C(b) - 1);
				break;
			case"MMM":
			case"MMMM":
				d = c._locale.monthsParse(b, a, c._strict), null != d ? e[Db] = d : c._pf.invalidMonth = b;
				break;
			case"D":
			case"DD":
				null != b && (e[Eb] = C(b));
				break;
			case"Do":
				null != b && (e[Eb] = C(parseInt(b.match(/\d{1,2}/)[0], 10)));
				break;
			case"DDD":
			case"DDDD":
				null != b && (c._dayOfYear = C(b));
				break;
			case"YY":
				e[Cb] = vb.parseTwoDigitYear(b);
				break;
			case"YYYY":
			case"YYYYY":
			case"YYYYYY":
				e[Cb] = C(b);
				break;
			case"a":
			case"A":
				c._meridiem = b;
				break;
			case"h":
			case"hh":
				c._pf.bigHour = !0;
			case"H":
			case"HH":
				e[Fb] = C(b);
				break;
			case"m":
			case"mm":
				e[Gb] = C(b);
				break;
			case"s":
			case"ss":
				e[Hb] = C(b);
				break;
			case"S":
			case"SS":
			case"SSS":
			case"SSSS":
				e[Ib] = C(1e3 * ("0." + b));
				break;
			case"x":
				c._d = new Date(C(b));
				break;
			case"X":
				c._d = new Date(1e3 * parseFloat(b));
				break;
			case"Z":
			case"ZZ":
				c._useUTC = !0, c._tzm = S(b);
				break;
			case"dd":
			case"ddd":
			case"dddd":
				d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
				break;
			case"w":
			case"ww":
			case"W":
			case"WW":
			case"d":
			case"e":
			case"E":
				a = a.substr(0, 1);
			case"gggg":
			case"GGGG":
			case"GGGGG":
				a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = C(b));
				break;
			case"gg":
			case"GG":
				c._w = c._w || {}, c._w[a] = vb.parseTwoDigitYear(b)
		}
	}

	function U(a) {
		var c, d, e, f, g, h, i;
		c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Cb], jb(vb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Cb], jb(vb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = kb(d, e, f, h, g), a._a[Cb] = i.year, a._dayOfYear = i.dayOfYear
	}

	function V(a) {
		var c, d, e, f, g = [];
		if (!a._d) {
			for (e = X(a), a._w && null == a._a[Eb] && null == a._a[Db] && U(a), a._dayOfYear && (f = b(a._a[Cb], e[Cb]), a._dayOfYear > F(f) && (a._pf._overflowDayOfYear = !0), d = fb(f, 0, a._dayOfYear), a._a[Db] = d.getUTCMonth(), a._a[Eb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c)a._a[c] = g[c] = e[c];
			for (; 7 > c; c++)a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
			24 === a._a[Fb] && 0 === a._a[Gb] && 0 === a._a[Hb] && 0 === a._a[Ib] && (a._nextDay = !0, a._a[Fb] = 0), a._d = (a._useUTC ? fb : eb).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Fb] = 24)
		}
	}

	function W(a) {
		var b;
		a._d || (b = A(a._i), a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], V(a))
	}

	function X(a) {
		var b = new Date;
		return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
	}

	function Y(b) {
		if (b._f === vb.ISO_8601)return void ab(b);
		b._a = [], b._pf.empty = !0;
		var c, d, e, f, g, h = "" + b._i, i = h.length, j = 0;
		for (e = Q(b._f, b._locale).match(Pb) || [], c = 0; c < e.length; c++)f = e[c], d = (h.match(R(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), rc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), T(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f);
		b._pf.charsLeftOver = i - j, h.length > 0 && b._pf.unusedInput.push(h), b._pf.bigHour === !0 && b._a[Fb] <= 12 && (b._pf.bigHour = a), b._a[Fb] = k(b._locale, b._a[Fb], b._meridiem), V(b), H(b)
	}

	function Z(a) {
		return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
			return b || c || d || e
		})
	}

	function $(a) {
		return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function _(a) {
		var b, c, e, f, g;
		if (0 === a._f.length)return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0));
		for (f = 0; f < a._f.length; f++)g = 0, b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], Y(b), I(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b));
		o(a, c || b)
	}

	function ab(a) {
		var b, c, d = a._i, e = fc.exec(d);
		if (e) {
			for (a._pf.iso = !0, b = 0, c = hc.length; c > b; b++)if (hc[b][1].exec(d)) {
				a._f = hc[b][0] + (e[6] || " ");
				break
			}
			for (b = 0, c = ic.length; c > b; b++)if (ic[b][1].exec(d)) {
				a._f += ic[b][0];
				break
			}
			d.match(Xb) && (a._f += "Z"), Y(a)
		} else a._isValid = !1
	}

	function bb(a) {
		ab(a), a._isValid === !1 && (delete a._isValid, vb.createFromInputFallback(a))
	}

	function cb(a, b) {
		var c, d = [];
		for (c = 0; c < a.length; ++c)d.push(b(a[c], c));
		return d
	}

	function db(b) {
		var c, d = b._i;
		d === a ? b._d = new Date : x(d) ? b._d = new Date(+d) : null !== (c = Mb.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? bb(b) : w(d) ? (b._a = cb(d.slice(0), function (a) {
			return parseInt(a, 10)
		}), V(b)) : "object" == typeof d ? W(b) : "number" == typeof d ? b._d = new Date(d) : vb.createFromInputFallback(b)
	}

	function eb(a, b, c, d, e, f, g) {
		var h = new Date(a, b, c, d, e, f, g);
		return 1970 > a && h.setFullYear(a), h
	}

	function fb(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		return 1970 > a && b.setUTCFullYear(a), b
	}

	function gb(a, b) {
		if ("string" == typeof a)if (isNaN(a)) {
			if (a = b.weekdaysParse(a), "number" != typeof a)return null
		} else a = parseInt(a, 10);
		return a
	}

	function hb(a, b, c, d, e) {
		return e.relativeTime(b || 1, !!c, a, d)
	}

	function ib(a, b, c) {
		var d = vb.duration(a).abs(), e = Ab(d.as("s")), f = Ab(d.as("m")), g = Ab(d.as("h")), h = Ab(d.as("d")), i = Ab(d.as("M")), j = Ab(d.as("y")), k = e < oc.s && ["s", e] || 1 === f && ["m"] || f < oc.m && ["mm", f] || 1 === g && ["h"] || g < oc.h && ["hh", g] || 1 === h && ["d"] || h < oc.d && ["dd", h] || 1 === i && ["M"] || i < oc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
		return k[2] = b, k[3] = +a > 0, k[4] = c, hb.apply({}, k)
	}

	function jb(a, b, c) {
		var d, e = c - b, f = c - a.day();
		return f > e && (f -= 7), e - 7 > f && (f += 7), d = vb(a).add(f, "d"), {week: Math.ceil(d.dayOfYear() / 7), year: d.year()}
	}

	function kb(a, b, c, d, e) {
		var f, g, h = fb(a, 0, 1).getUTCDay();
		return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {year: g > 0 ? a : a - 1, dayOfYear: g > 0 ? g : F(a - 1) + g}
	}

	function lb(b) {
		var c, d = b._i, e = b._f;
		return b._locale = b._locale || vb.localeData(b._l), null === d || e === a && "" === d ? vb.invalid({nullInput: !0}) : ("string" == typeof d && (b._i = d = b._locale.preparse(d)), vb.isMoment(d) ? new m(d, !0) : (e ? w(e) ? _(b) : Y(b) : db(b), c = new m(b), c._nextDay && (c.add(1, "d"), c._nextDay = a), c))
	}

	function mb(a, b) {
		var c, d;
		if (1 === b.length && w(b[0]) && (b = b[0]), !b.length)return vb();
		for (c = b[0], d = 1; d < b.length; ++d)b[d][a](c) && (c = b[d]);
		return c
	}

	function nb(a, b) {
		var c;
		return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), D(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
	}

	function ob(a, b) {
		return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
	}

	function pb(a, b, c) {
		return "Month" === b ? nb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
	}

	function qb(a, b) {
		return function (c) {
			return null != c ? (pb(this, a, c), vb.updateOffset(this, b), this) : ob(this, a)
		}
	}

	function rb(a) {
		return 400 * a / 146097
	}

	function sb(a) {
		return 146097 * a / 400
	}

	function tb(a) {
		vb.duration.fn[a] = function () {
			return this._data[a]
		}
	}

	function ub(a) {
		"undefined" == typeof ender && (wb = zb.moment, zb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", vb) : vb)
	}

	for (var vb, wb, xb, yb = "2.9.0", zb = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, Ab = Math.round, Bb = Object.prototype.hasOwnProperty, Cb = 0, Db = 1, Eb = 2, Fb = 3, Gb = 4, Hb = 5, Ib = 6, Jb = {}, Kb = [], Lb = "undefined" != typeof module && module && module.exports, Mb = /^\/?Date\((\-?\d+)/i, Nb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ob = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Pb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Qb = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rb = /\d\d?/, Sb = /\d{1,3}/, Tb = /\d{1,4}/, Ub = /[+\-]?\d{1,6}/, Vb = /\d+/, Wb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Xb = /Z|[\+\-]\d\d:?\d\d/gi, Yb = /T/i, Zb = /[\+\-]?\d+/, $b = /[\+\-]?\d+(\.\d{1,3})?/, _b = /\d/, ac = /\d\d/, bc = /\d{3}/, cc = /\d{4}/, dc = /[+-]?\d{6}/, ec = /[+-]?\d+/, fc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gc = "YYYY-MM-DDTHH:mm:ssZ", hc = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], ic = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], jc = /([\+\-]|\d\d)/gi, kc = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
		Milliseconds: 1,
		Seconds: 1e3,
		Minutes: 6e4,
		Hours: 36e5,
		Days: 864e5,
		Months: 2592e6,
		Years: 31536e6
	}), lc = {
		ms: "millisecond",
		s: "second",
		m: "minute",
		h: "hour",
		d: "day",
		D: "date",
		w: "week",
		W: "isoWeek",
		M: "month",
		Q: "quarter",
		y: "year",
		DDD: "dayOfYear",
		e: "weekday",
		E: "isoWeekday",
		gg: "weekYear",
		GG: "isoWeekYear"
	}, mc = {dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear"}, nc = {}, oc = {
		s: 45,
		m: 45,
		h: 22,
		d: 26,
		M: 11
	}, pc = "DDD w W M D d".split(" "), qc = "M D H h m s w W".split(" "), rc = {
		M: function () {
			return this.month() + 1
		}, MMM: function (a) {
			return this.localeData().monthsShort(this, a)
		}, MMMM: function (a) {
			return this.localeData().months(this, a)
		}, D: function () {
			return this.date()
		}, DDD: function () {
			return this.dayOfYear()
		}, d: function () {
			return this.day()
		}, dd: function (a) {
			return this.localeData().weekdaysMin(this, a)
		}, ddd: function (a) {
			return this.localeData().weekdaysShort(this, a)
		}, dddd: function (a) {
			return this.localeData().weekdays(this, a)
		}, w: function () {
			return this.week()
		}, W: function () {
			return this.isoWeek()
		}, YY: function () {
			return r(this.year() % 100, 2)
		}, YYYY: function () {
			return r(this.year(), 4)
		}, YYYYY: function () {
			return r(this.year(), 5)
		}, YYYYYY: function () {
			var a = this.year(), b = a >= 0 ? "+" : "-";
			return b + r(Math.abs(a), 6)
		}, gg: function () {
			return r(this.weekYear() % 100, 2)
		}, gggg: function () {
			return r(this.weekYear(), 4)
		}, ggggg: function () {
			return r(this.weekYear(), 5)
		}, GG: function () {
			return r(this.isoWeekYear() % 100, 2)
		}, GGGG: function () {
			return r(this.isoWeekYear(), 4)
		}, GGGGG: function () {
			return r(this.isoWeekYear(), 5)
		}, e: function () {
			return this.weekday()
		}, E: function () {
			return this.isoWeekday()
		}, a: function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), !0)
		}, A: function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), !1)
		}, H: function () {
			return this.hours()
		}, h: function () {
			return this.hours() % 12 || 12
		}, m: function () {
			return this.minutes()
		}, s: function () {
			return this.seconds()
		}, S: function () {
			return C(this.milliseconds() / 100)
		}, SS: function () {
			return r(C(this.milliseconds() / 10), 2)
		}, SSS: function () {
			return r(this.milliseconds(), 3)
		}, SSSS: function () {
			return r(this.milliseconds(), 3)
		}, Z: function () {
			var a = this.utcOffset(), b = "+";
			return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + ":" + r(C(a) % 60, 2)
		}, ZZ: function () {
			var a = this.utcOffset(), b = "+";
			return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + r(C(a) % 60, 2)
		}, z: function () {
			return this.zoneAbbr()
		}, zz: function () {
			return this.zoneName()
		}, x: function () {
			return this.valueOf()
		}, X: function () {
			return this.unix()
		}, Q: function () {
			return this.quarter()
		}
	}, sc = {}, tc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], uc = !1; pc.length;)xb = pc.pop(), rc[xb + "o"] = i(rc[xb], xb);
	for (; qc.length;)xb = qc.pop(), rc[xb + xb] = h(rc[xb], 2);
	rc.DDDD = h(rc.DDD, 3), o(l.prototype, {
		set: function (a) {
			var b, c;
			for (c in a)b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
			this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
		},
		_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		months: function (a) {
			return this._months[a.month()]
		},
		_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		monthsShort: function (a) {
			return this._monthsShort[a.month()]
		},
		monthsParse: function (a, b, c) {
			var d, e, f;
			for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
				if (e = vb.utc([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a))return d;
				if (c && "MMM" === b && this._shortMonthsParse[d].test(a))return d;
				if (!c && this._monthsParse[d].test(a))return d
			}
		},
		_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		weekdays: function (a) {
			return this._weekdays[a.day()]
		},
		_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		weekdaysShort: function (a) {
			return this._weekdaysShort[a.day()]
		},
		_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		weekdaysMin: function (a) {
			return this._weekdaysMin[a.day()]
		},
		weekdaysParse: function (a) {
			var b, c, d;
			for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)if (this._weekdaysParse[b] || (c = vb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))return b
		},
		_longDateFormat: {LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM D, YYYY LT"},
		longDateFormat: function (a) {
			var b = this._longDateFormat[a];
			return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
				return a.slice(1)
			}), this._longDateFormat[a] = b), b
		},
		isPM: function (a) {
			return "p" === (a + "").toLowerCase().charAt(0)
		},
		_meridiemParse: /[ap]\.?m?\.?/i,
		meridiem: function (a, b, c) {
			return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
		},
		_calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"},
		calendar: function (a, b, c) {
			var d = this._calendar[a];
			return "function" == typeof d ? d.apply(b, [c]) : d
		},
		_relativeTime: {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		relativeTime: function (a, b, c, d) {
			var e = this._relativeTime[c];
			return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
		},
		pastFuture: function (a, b) {
			var c = this._relativeTime[a > 0 ? "future" : "past"];
			return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
		},
		ordinal: function (a) {
			return this._ordinal.replace("%d", a)
		},
		_ordinal: "%d",
		_ordinalParse: /\d{1,2}/,
		preparse: function (a) {
			return a
		},
		postformat: function (a) {
			return a
		},
		week: function (a) {
			return jb(a, this._week.dow, this._week.doy).week
		},
		_week: {dow: 0, doy: 6},
		firstDayOfWeek: function () {
			return this._week.dow
		},
		firstDayOfYear: function () {
			return this._week.doy
		},
		_invalidDate: "Invalid date",
		invalidDate: function () {
			return this._invalidDate
		}
	}), vb = function (b, c, e, f) {
		var g;
		return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), lb(g)
	}, vb.suppressDeprecationWarnings = !1, vb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
		a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
	}), vb.min = function () {
		var a = [].slice.call(arguments, 0);
		return mb("isBefore", a)
	}, vb.max = function () {
		var a = [].slice.call(arguments, 0);
		return mb("isAfter", a)
	}, vb.utc = function (b, c, e, f) {
		var g;
		return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), lb(g).utc()
	}, vb.unix = function (a) {
		return vb(1e3 * a)
	}, vb.duration = function (a, b) {
		var d, e, f, g, h = a, i = null;
		return vb.isDuration(a) ? h = {ms: a._milliseconds, d: a._days, M: a._months} : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Nb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = {
			y: 0,
			d: C(i[Eb]) * d,
			h: C(i[Fb]) * d,
			m: C(i[Gb]) * d,
			s: C(i[Hb]) * d,
			ms: C(i[Ib]) * d
		}) : (i = Ob.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function (a) {
			var b = a && parseFloat(a.replace(",", "."));
			return (isNaN(b) ? 0 : b) * d
		}, h = {
			y: f(i[2]),
			M: f(i[3]),
			d: f(i[4]),
			h: f(i[5]),
			m: f(i[6]),
			s: f(i[7]),
			w: f(i[8])
		}) : null == h ? h = {} : "object" == typeof h && ("from" in h || "to" in h) && (g = t(vb(h.from), vb(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new n(h), vb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e
	}, vb.version = yb, vb.defaultFormat = gc, vb.ISO_8601 = function () {
	}, vb.momentProperties = Kb, vb.updateOffset = function () {
	}, vb.relativeTimeThreshold = function (b, c) {
		return oc[b] === a ? !1 : c === a ? oc[b] : (oc[b] = c, !0)
	}, vb.lang = f("moment.lang is deprecated. Use moment.locale instead.", function (a, b) {
		return vb.locale(a, b)
	}), vb.locale = function (a, b) {
		var c;
		return a && (c = "undefined" != typeof b ? vb.defineLocale(a, b) : vb.localeData(a), c && (vb.duration._locale = vb._locale = c)), vb._locale._abbr
	}, vb.defineLocale = function (a, b) {
		return null !== b ? (b.abbr = a, Jb[a] || (Jb[a] = new l), Jb[a].set(b), vb.locale(a), Jb[a]) : (delete Jb[a], null)
	}, vb.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function (a) {
		return vb.localeData(a)
	}), vb.localeData = function (a) {
		var b;
		if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)return vb._locale;
		if (!w(a)) {
			if (b = L(a))return b;
			a = [a]
		}
		return K(a)
	}, vb.isMoment = function (a) {
		return a instanceof m || null != a && c(a, "_isAMomentObject")
	}, vb.isDuration = function (a) {
		return a instanceof n
	};
	for (xb = tc.length - 1; xb >= 0; --xb)B(tc[xb]);
	vb.normalizeUnits = function (a) {
		return z(a)
	}, vb.invalid = function (a) {
		var b = vb.utc(0 / 0);
		return null != a ? o(b._pf, a) : b._pf.userInvalidated = !0, b
	}, vb.parseZone = function () {
		return vb.apply(null, arguments).parseZone()
	}, vb.parseTwoDigitYear = function (a) {
		return C(a) + (C(a) > 68 ? 1900 : 2e3)
	}, vb.isDate = x, o(vb.fn = m.prototype, {
		clone: function () {
			return vb(this)
		}, valueOf: function () {
			return +this._d - 6e4 * (this._offset || 0)
		}, unix: function () {
			return Math.floor(+this / 1e3)
		}, toString: function () {
			return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
		}, toDate: function () {
			return this._offset ? new Date(+this) : this._d
		}, toISOString: function () {
			var a = vb(this).utc();
			return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : P(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : P(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
		}, toArray: function () {
			var a = this;
			return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
		}, isValid: function () {
			return I(this)
		}, isDSTShifted: function () {
			return this._a ? this.isValid() && y(this._a, (this._isUTC ? vb.utc(this._a) : vb(this._a)).toArray()) > 0 : !1
		}, parsingFlags: function () {
			return o({}, this._pf)
		}, invalidAt: function () {
			return this._pf.overflow
		}, utc: function (a) {
			return this.utcOffset(0, a)
		}, local: function (a) {
			return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(this._dateUtcOffset(), "m")), this
		}, format: function (a) {
			var b = P(this, a || vb.defaultFormat);
			return this.localeData().postformat(b)
		}, add: u(1, "add"), subtract: u(-1, "subtract"), diff: function (a, b, c) {
			var d, e, f = M(a, this), g = 6e4 * (f.utcOffset() - this.utcOffset());
			return b = z(b), "year" === b || "month" === b || "quarter" === b ? (e = j(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : q(e)
		}, from: function (a, b) {
			return vb.duration({to: this, from: a}).locale(this.locale()).humanize(!b)
		}, fromNow: function (a) {
			return this.from(vb(), a)
		}, calendar: function (a) {
			var b = a || vb(), c = M(b, this).startOf("day"), d = this.diff(c, "days", !0), e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
			return this.format(this.localeData().calendar(e, this, vb(b)))
		}, isLeapYear: function () {
			return G(this.year())
		}, isDST: function () {
			return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
		}, day: function (a) {
			var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return null != a ? (a = gb(a, this.localeData()), this.add(a - b, "d")) : b
		}, month: qb("Month", !0), startOf: function (a) {
			switch (a = z(a)) {
				case"year":
					this.month(0);
				case"quarter":
				case"month":
					this.date(1);
				case"week":
				case"isoWeek":
				case"day":
					this.hours(0);
				case"hour":
					this.minutes(0);
				case"minute":
					this.seconds(0);
				case"second":
					this.milliseconds(0)
			}
			return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
		}, endOf: function (b) {
			return b = z(b), b === a || "millisecond" === b ? this : this.startOf(b).add(1, "isoWeek" === b ? "week" : b).subtract(1, "ms")
		}, isAfter: function (a, b) {
			var c;
			return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this > +a) : (c = vb.isMoment(a) ? +a : +vb(a), c < +this.clone().startOf(b))
		}, isBefore: function (a, b) {
			var c;
			return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +a > +this) : (c = vb.isMoment(a) ? +a : +vb(a), +this.clone().endOf(b) < c)
		}, isBetween: function (a, b, c) {
			return this.isAfter(a, c) && this.isBefore(b, c)
		}, isSame: function (a, b) {
			var c;
			return b = z(b || "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this === +a) : (c = +vb(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
		}, min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) {
			return a = vb.apply(null, arguments), this > a ? this : a
		}), max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) {
			return a = vb.apply(null, arguments), a > this ? this : a
		}), zone: f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function (a, b) {
			return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
		}), utcOffset: function (a, b) {
			var c, d = this._offset || 0;
			return null != a ? ("string" == typeof a && (a = S(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateUtcOffset()), this._offset = a, this._isUTC = !0, null != c && this.add(c, "m"), d !== a && (!b || this._changeInProgress ? v(this, vb.duration(a - d, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, vb.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? d : this._dateUtcOffset()
		}, isLocal: function () {
			return !this._isUTC
		}, isUtcOffset: function () {
			return this._isUTC
		}, isUtc: function () {
			return this._isUTC && 0 === this._offset
		}, zoneAbbr: function () {
			return this._isUTC ? "UTC" : ""
		}, zoneName: function () {
			return this._isUTC ? "Coordinated Universal Time" : ""
		}, parseZone: function () {
			return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(S(this._i)), this
		}, hasAlignedHourOffset: function (a) {
			return a = a ? vb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
		}, daysInMonth: function () {
			return D(this.year(), this.month())
		}, dayOfYear: function (a) {
			var b = Ab((vb(this).startOf("day") - vb(this).startOf("year")) / 864e5) + 1;
			return null == a ? b : this.add(a - b, "d")
		}, quarter: function (a) {
			return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
		}, weekYear: function (a) {
			var b = jb(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
			return null == a ? b : this.add(a - b, "y")
		}, isoWeekYear: function (a) {
			var b = jb(this, 1, 4).year;
			return null == a ? b : this.add(a - b, "y")
		}, week: function (a) {
			var b = this.localeData().week(this);
			return null == a ? b : this.add(7 * (a - b), "d")
		}, isoWeek: function (a) {
			var b = jb(this, 1, 4).week;
			return null == a ? b : this.add(7 * (a - b), "d")
		}, weekday: function (a) {
			var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
			return null == a ? b : this.add(a - b, "d")
		}, isoWeekday: function (a) {
			return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
		}, isoWeeksInYear: function () {
			return E(this.year(), 1, 4)
		}, weeksInYear: function () {
			var a = this.localeData()._week;
			return E(this.year(), a.dow, a.doy)
		}, get: function (a) {
			return a = z(a), this[a]()
		}, set: function (a, b) {
			var c;
			if ("object" == typeof a)for (c in a)this.set(c, a[c]); else a = z(a), "function" == typeof this[a] && this[a](b);
			return this
		}, locale: function (b) {
			var c;
			return b === a ? this._locale._abbr : (c = vb.localeData(b), null != c && (this._locale = c), this)
		}, lang: f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (b) {
			return b === a ? this.localeData() : this.locale(b)
		}), localeData: function () {
			return this._locale
		}, _dateUtcOffset: function () {
			return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
		}
	}), vb.fn.millisecond = vb.fn.milliseconds = qb("Milliseconds", !1), vb.fn.second = vb.fn.seconds = qb("Seconds", !1), vb.fn.minute = vb.fn.minutes = qb("Minutes", !1), vb.fn.hour = vb.fn.hours = qb("Hours", !0), vb.fn.date = qb("Date", !0), vb.fn.dates = f("dates accessor is deprecated. Use date instead.", qb("Date", !0)), vb.fn.year = qb("FullYear", !0), vb.fn.years = f("years accessor is deprecated. Use year instead.", qb("FullYear", !0)), vb.fn.days = vb.fn.day, vb.fn.months = vb.fn.month, vb.fn.weeks = vb.fn.week, vb.fn.isoWeeks = vb.fn.isoWeek, vb.fn.quarters = vb.fn.quarter, vb.fn.toJSON = vb.fn.toISOString, vb.fn.isUTC = vb.fn.isUtc, o(vb.duration.fn = n.prototype, {
		_bubble: function () {
			var a, b, c, d = this._milliseconds, e = this._days, f = this._months, g = this._data, h = 0;
			g.milliseconds = d % 1e3, a = q(d / 1e3), g.seconds = a % 60, b = q(a / 60), g.minutes = b % 60, c = q(b / 60), g.hours = c % 24, e += q(c / 24), h = q(rb(e)), e -= q(sb(h)), f += q(e / 30), e %= 30, h += q(f / 12), f %= 12, g.days = e, g.months = f, g.years = h
		}, abs: function () {
			return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
		}, weeks: function () {
			return q(this.days() / 7)
		}, valueOf: function () {
			return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12)
		}, humanize: function (a) {
			var b = ib(this, !a, this.localeData());
			return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b)
		}, add: function (a, b) {
			var c = vb.duration(a, b);
			return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
		}, subtract: function (a, b) {
			var c = vb.duration(a, b);
			return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
		}, get: function (a) {
			return a = z(a), this[a.toLowerCase() + "s"]()
		}, as: function (a) {
			var b, c;
			if (a = z(a), "month" === a || "year" === a)return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * rb(b), "month" === a ? c : c / 12;
			switch (b = this._days + Math.round(sb(this._months / 12)), a) {
				case"week":
					return b / 7 + this._milliseconds / 6048e5;
				case"day":
					return b + this._milliseconds / 864e5;
				case"hour":
					return 24 * b + this._milliseconds / 36e5;
				case"minute":
					return 24 * b * 60 + this._milliseconds / 6e4;
				case"second":
					return 24 * b * 60 * 60 + this._milliseconds / 1e3;
				case"millisecond":
					return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
				default:
					throw new Error("Unknown unit " + a)
			}
		}, lang: vb.fn.lang, locale: vb.fn.locale, toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
			return this.toISOString()
		}), toISOString: function () {
			var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
			return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
		}, localeData: function () {
			return this._locale
		}, toJSON: function () {
			return this.toISOString()
		}
	}), vb.duration.fn.toString = vb.duration.fn.toISOString;
	for (xb in kc)c(kc, xb) && tb(xb.toLowerCase());
	vb.duration.fn.asMilliseconds = function () {
		return this.as("ms")
	}, vb.duration.fn.asSeconds = function () {
		return this.as("s")
	}, vb.duration.fn.asMinutes = function () {
		return this.as("m")
	}, vb.duration.fn.asHours = function () {
		return this.as("h")
	}, vb.duration.fn.asDays = function () {
		return this.as("d")
	}, vb.duration.fn.asWeeks = function () {
		return this.as("weeks")
	}, vb.duration.fn.asMonths = function () {
		return this.as("M")
	}, vb.duration.fn.asYears = function () {
		return this.as("y")
	}, vb.locale("en", {
		ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (a) {
			var b = a % 10, c = 1 === C(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
			return a + c
		}
	}), Lb ? module.exports = vb : "function" == typeof define && define.amd ? (define(function (a, b, c) {
		return c.config && c.config() && c.config().noGlobal === !0 && (zb.moment = wb), vb
	}), ub(!0)) : ub()
}.call(this), function (a, b) {
	"object" == typeof exports ? module.exports = b(require("moment")) : "function" == typeof define && define.amd ? define(["moment"], b) : a.moment = b(a.moment)
}(this, function (a) {
	var b, c;
	return c = {year: !0, month: !0, week: !0, day: !0, hour: !0, minute: !0, second: !0}, b = function () {
		function b(b, c) {
			this.start = a(b), this.end = a(c)
		}

		return b.prototype.clone = function () {
			return a().range(this.start, this.end)
		}, b.prototype.contains = function (a) {
			return a instanceof b ? this.start <= a.start && this.end >= a.end : this.start <= a && a <= this.end
		}, b.prototype._by_string = function (b, c) {
			var d, e;
			for (d = a(this.start), e = []; this.contains(d);)c.call(this, d.clone()), e.push(d.add(1, b));
			return e
		}, b.prototype._by_range = function (b, c) {
			var d, e, f, g;
			if (e = Math.floor(this / b), 1 / 0 === e)return this;
			for (g = [], d = f = 0; e >= 0 ? e >= f : f >= e; d = e >= 0 ? ++f : --f)g.push(c.call(this, a(this.start.valueOf() + b.valueOf() * d)));
			return g
		}, b.prototype.overlaps = function (a) {
			return null !== this.intersect(a)
		}, b.prototype.intersect = function (a) {
			var c, d, e, f, g, h, i, j;
			return this.start <= (d = a.start) && d < (c = this.end) && c < a.end ? new b(a.start, this.end) : a.start < (f = this.start) && f < (e = a.end) && e <= this.end ? new b(this.start, a.end) : a.start < (h = this.start) && h <= (g = this.end) && g < a.end ? this : this.start <= (j = a.start) && j <= (i = a.end) && i <= this.end ? a : null
		}, b.prototype.add = function (c) {
			return this.overlaps(c) ? new b(a.min(this.start, c.start), a.max(this.end, c.end)) : null
		}, b.prototype.subtract = function (a) {
			var c, d, e, f, g, h, i, j;
			return null === this.intersect(a) ? [this] : a.start <= (d = this.start) && d < (c = this.end) && c <= a.end ? [] : a.start <= (f = this.start) && f < (e = a.end) && e < this.end ? [new b(a.end, this.end)] : this.start < (h = a.start) && h < (g = this.end) && g <= a.end ? [new b(this.start, a.start)] : this.start < (j = a.start) && j < (i = a.end) && i < this.end ? [new b(this.start, a.start), new b(a.end, this.end)] : void 0
		}, b.prototype.by = function (a, b) {
			return "string" == typeof a ? this._by_string(a, b) : this._by_range(a, b), this
		}, b.prototype.valueOf = function () {
			return this.end - this.start
		}, b.prototype.center = function () {
			var b;
			return b = this.start + this.diff() / 2, a(b)
		}, b.prototype.toDate = function () {
			return [this.start.toDate(), this.end.toDate()]
		}, b.prototype.isSame = function (a) {
			return this.start.isSame(a.start) && this.end.isSame(a.end)
		}, b.prototype.diff = function (a) {
			return null == a && (a = void 0), this.end.diff(this.start, a)
		}, b
	}(), a.range = function (d, e) {
		return d in c ? new b(a(this).startOf(d), a(this).endOf(d)) : new b(d, e)
	}, a.range.constructor = b, a.fn.range = a.range, a.fn.within = function (a) {
		return a.contains(this._d)
	}, a
}), function (a) {
	"function" == typeof define && define.amd ? define(["moment"], a) : "object" == typeof exports ? module.exports = a(require("../moment")) : a(("undefined" != typeof global ? global : this).moment)
}(function (a) {
	function b(a, b) {
		var c = a.split("_");
		return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
	}

	function c(a, c, d) {
		var e = {mm: c ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет"};
		return "m" === d ? c ? "минута" : "минуту" : a + " " + b(e[d], +a)
	}

	function d(a, b) {
		var c = {
			nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
			accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
		}, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
		return c[d][a.month()]
	}

	function e(a, b) {
		var c = {
			nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
			accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
		}, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
		return c[d][a.month()]
	}

	function f(a, b) {
		var c = {
			nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
			accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
		}, d = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(b) ? "accusative" : "nominative";
		return c[d][a.day()]
	}

	return a.defineLocale("ru", {
		months: d,
		monthsShort: e,
		weekdays: f,
		weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
		weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
		monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
		longMonthsParse: [/^январ[ья]/i, /^феврал[ья]/i, /^марта?/i, /^апрел[ья]/i, /^ма[й|я]/i, /^июн[ья]/i, /^июл[ья]/i, /^августа?/i, /^сентябр[ья]/i, /^октябр[ья]/i, /^ноябр[ья]/i, /^декабр[ья]/i],
		shortMonthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
		longDateFormat: {LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., LT", LLLL: "dddd, D MMMM YYYY г., LT"},
		calendar: {
			sameDay: "[Сегодня в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function () {
				return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
			}, lastWeek: function (a) {
				if (a.week() === this.week())return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
				switch (this.day()) {
					case 0:
						return "[В прошлое] dddd [в] LT";
					case 1:
					case 2:
					case 4:
						return "[В прошлый] dddd [в] LT";
					case 3:
					case 5:
					case 6:
						return "[В прошлую] dddd [в] LT"
				}
			}, sameElse: "L"
		},
		relativeTime: {future: "через %s", past: "%s назад", s: "несколько секунд", m: c, mm: c, h: "час", hh: c, d: "день", dd: c, M: "месяц", MM: c, y: "год", yy: c},
		meridiemParse: /ночи|утра|дня|вечера/i,
		isPM: function (a) {
			return /^(дня|вечера)$/.test(a)
		},
		meridiem: function (a) {
			return 4 > a ? "ночи" : 12 > a ? "утра" : 17 > a ? "дня" : "вечера"
		},
		ordinalParse: /\d{1,2}-(й|го|я)/,
		ordinal: function (a, b) {
			switch (b) {
				case"M":
				case"d":
				case"DDD":
					return a + "-й";
				case"D":
					return a + "-го";
				case"w":
				case"W":
					return a + "-я";
				default:
					return a
			}
		},
		week: {dow: 1, doy: 7}
	})
});
var currentLanguage = $("html").prop("lang");
try {
	currentLanguage && (navigator.userLanguage = currentLanguage)
} catch (e) {
}
window.locale = {
	en: {
		Лица: "Persons",
		Термины: "Terms",
		Темы: "Topics",
		География: "Geography",
		"Превышено время ожидания ответа": "The connection has timed out",
		"Неверный запрос": "Bad request",
		"Не найдено": "Not found",
		"Метод не поддерживается": "Method not allowed",
		"Слишком много запросов": "Too many requests",
		"Внутренняя ошибка сервера": "Internal server error",
		"Неверный шлюз": "Bad gateway",
		"Сервис недоступен": "Service unavailable",
		"Шлюз не отвечает": "Gateway timeout",
		"Ошибка загрузки": "Error while loading",
		"Пожалуйста, выберите файл, размер которого не более": "Choose a file with the size less than",
		"Вы покидаете веб-сервер Кремля": "You are leaving the Kremlin web server",
		"Для перехода нажмите по ссылке:": "Click the link to go to:",
		"Ошибка отправки формы": "Error submitting the form",
		"Анкета отправлена": "Application form has been submitted",
		"Для отправки формы, пожалуйста, дождитесь окончания загрузки файлов.": "To submit the form, please wait for the file to finish uploading.",
		"Из альбома к материалу": "Back to document",
		Назад: "Back",
		из: "of",
		"Показать следующие материалы": "Next",
		"Показать предыдущие материалы": "Previous",
		"Несколько стран": "Several countries",
		"Несколько регионов": "Several regions",
		"Снять выделение": "Clear selection",
		Выделить: "Highlight",
		"Поисковые запросы": "Common searches",
		"Предыдущий элемент": "Previous element",
		"Следующий элемент": "Next element",
		"Ошибка серевера": "Server error",
		"Пожалуйста, для просмотра видео, установите": "To view this video, please install",
		"Извините, произошла ошибка загрузки видео": "Sorry, an error has occurred while downloading video",
		"Сообщение успешно отправлено": "Message sent successfully",
		"Произошла ошибка!": "An error has occurred",
		'Укажите интересующую вас дату. После заполнения поля нажмите клавишу "Enter". Несколько примеров того, как можно задать дату, приведены ниже.': "Specify the desired date. After filling the fields, press Enter. Examples of how you can set the date.",
		'Укажите интересующую вас дату. После заполнения поля нажмите клавишу "Enter". Несколько примеров того, как можно задать дату и период времени, приведены ниже.': "Specify the desired date. After filling the fields, press Enter. Examples of how you can set the date and time periods.",
		"Неправильно указана дата.": "Invalid date.",
		Развернуть: "Expand",
		Свернуть: "Minimise",
		"Уровень громкости": "Volume level",
		"Пожалуйста, введите корректный номер телефона": "Please enter a valid phone number",
		Отправить: "Send",
		"Ошибка отправки сообщения": "Error sending message",
		"Назад в раздел": "Back to section",
		"Назад в разделы сайта": "Back to sections list",
		"Найти документ": "Find document",
		Показать: "Show"
	}
}, window.readerUrlMap = ["^\\/events\\/president\\/news\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/news\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/president\\/news\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/news\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/president\\/news\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/news\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/president\\/news\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/president\\/news\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/president\\/news\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/transcripts\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/transcripts\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/president\\/transcripts\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/transcripts\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/president\\/transcripts\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/transcripts\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/president\\/transcripts\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/president\\/transcripts\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/president\\/transcripts\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/transcripts\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/transcripts\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/president\\/transcripts\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/transcripts\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/president\\/transcripts\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/transcripts\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/president\\/transcripts\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/president\\/transcripts\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/president\\/transcripts\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/president\\/trips\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/president\\/trips\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/president\\/trips\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/president\\/trips\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/president\\/trips\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/by\\-country\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/by\\-country\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/president\\/trips\\/by\\-country\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/by\\-country\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/president\\/trips\\/by\\-country\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/by\\-country\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/president\\/trips\\/by\\-country\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/president\\/trips\\/by\\-country\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/president\\/trips\\/by\\-country\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/by\\-region\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/by\\-region\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/president\\/trips\\/by\\-region\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/by\\-region\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/president\\/trips\\/by\\-region\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/trips\\/by\\-region\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/president\\/trips\\/by\\-region\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/president\\/trips\\/by\\-region\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/president\\/trips\\/by\\-region\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/letters\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/letters\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/president\\/letters\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/letters\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/president\\/letters\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/president\\/letters\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/president\\/letters\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/president\\/letters\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/president\\/letters\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/administration\\/(?:[1-9]\\d*|0)$", "^\\/events\\/administration\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/administration\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/administration\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/administration\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/administration\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/administration\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/administration\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/administration\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/security\\-council\\/(?:[1-9]\\d*|0)$", "^\\/events\\/security\\-council\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/security\\-council\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/security\\-council\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/security\\-council\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/security\\-council\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/security\\-council\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/security\\-council\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/security\\-council\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/state\\-council\\/(?:[1-9]\\d*|0)$", "^\\/events\\/state\\-council\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/state\\-council\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/state\\-council\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/state\\-council\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/state\\-council\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/state\\-council\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/state\\-council\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/state\\-council\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/councils\\/(?:[1-9]\\d*|0)$", "^\\/events\\/councils\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/councils\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/councils\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/councils\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/councils\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/councils\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/councils\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/councils\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/events\\/councils\\/by\\-council\\/(?:[1-9]\\d*|0)\\/(?:[1-9]\\d*|0)$", "^\\/events\\/councils\\/by\\-council\\/(?:[1-9]\\d*|0)\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/events\\/councils\\/by\\-council\\/(?:[1-9]\\d*|0)\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/councils\\/by\\-council\\/(?:[1-9]\\d*|0)\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/events\\/councils\\/by\\-council\\/(?:[1-9]\\d*|0)\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/events\\/councils\\/by\\-council\\/(?:[1-9]\\d*|0)\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/events\\/councils\\/by\\-council\\/(?:[1-9]\\d*|0)\\/(?:[1-9]\\d*|0)\\/work$", "^\\/events\\/councils\\/by\\-council\\/(?:[1-9]\\d*|0)\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/events\\/councils\\/by\\-council\\/(?:[1-9]\\d*|0)\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/supplement\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/news\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/news\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/acts\\/news\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/news\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/acts\\/news\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/news\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/acts\\/news\\/(?:[1-9]\\d*|0)\\/work$", "^\\/acts\\/news\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/acts\\/news\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/bank\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/bank\\/(?:[1-9]\\d*|0)\\/page\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/assignments\\/orders\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/assignments\\/orders\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/acts\\/assignments\\/orders\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/assignments\\/orders\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/acts\\/assignments\\/orders\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/assignments\\/orders\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/acts\\/assignments\\/orders\\/(?:[1-9]\\d*|0)\\/work$", "^\\/acts\\/assignments\\/orders\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/acts\\/assignments\\/orders\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/assignments\\/execution\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/assignments\\/execution\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/acts\\/assignments\\/execution\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/assignments\\/execution\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/acts\\/assignments\\/execution\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/acts\\/assignments\\/execution\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/acts\\/assignments\\/execution\\/(?:[1-9]\\d*|0)\\/work$", "^\\/acts\\/assignments\\/execution\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/acts\\/assignments\\/execution\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/structure\\/president\\/authority\\/[.a-zA-Z0-9:@&+$,_%%-]+$", "^\\/structure\\/president\\/income\\-reports$", "^\\/structure\\/administration\\/income\\-reports$", "^\\/structure\\/administration\\/info\\/[.a-zA-Z0-9:@&+$,_%%-]+$", "^\\/catalog\\/glossary\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/persons\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/persons\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/catalog\\/persons\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/persons\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/catalog\\/persons\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/persons\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/catalog\\/persons\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/work$", "^\\/catalog\\/persons\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/catalog\\/persons\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/keywords\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/keywords\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/catalog\\/keywords\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/keywords\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/catalog\\/keywords\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/keywords\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/catalog\\/keywords\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/work$", "^\\/catalog\\/keywords\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/catalog\\/keywords\\/(?:[1-9]\\d*|0)\\/events\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/regions\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/regions\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/catalog\\/regions\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/regions\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/catalog\\/regions\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/regions\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/catalog\\/regions\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/work$", "^\\/catalog\\/regions\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/catalog\\/regions\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/countries\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/countries\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/catalog\\/countries\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/countries\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/catalog\\/countries\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/catalog\\/countries\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/catalog\\/countries\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/work$", "^\\/catalog\\/countries\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/catalog\\/countries\\/[.a-zA-Z0-9:@&+$,_%%-]+\\/events\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/press\\/announcements\\/(?:[1-9]\\d*|0)$", "^\\/press\\/announcements\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/press\\/announcements\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/press\\/announcements\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/press\\/announcements\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/press\\/announcements\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/press\\/announcements\\/(?:[1-9]\\d*|0)\\/work$", "^\\/press\\/announcements\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/press\\/announcements\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/press\\/accreditation\\/(?:[1-9]\\d*|0)$", "^\\/press\\/accreditation\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/press\\/accreditation\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/press\\/accreditation\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/press\\/accreditation\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/press\\/accreditation\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/press\\/accreditation\\/(?:[1-9]\\d*|0)\\/work$", "^\\/press\\/accreditation\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/press\\/accreditation\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$", "^\\/misc\\/(?:[1-9]\\d*|0)$", "^\\/misc\\/(?:[1-9]\\d*|0)\\/photos$", "^\\/misc\\/(?:[1-9]\\d*|0)\\/photos\\/(?:[1-9]\\d*|0)$", "^\\/misc\\/(?:[1-9]\\d*|0)\\/videos$", "^\\/misc\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)$", "^\\/misc\\/(?:[1-9]\\d*|0)\\/videos\\/(?:[1-9]\\d*|0)\\/oembed$", "^\\/misc\\/(?:[1-9]\\d*|0)\\/work$", "^\\/misc\\/(?:[1-9]\\d*|0)\\/audios$", "^\\/misc\\/(?:[1-9]\\d*|0)\\/audios\\/(?:[1-9]\\d*|0)$"], function (a) {
	"use strict";
	a.fn.frameScrub = function (b) {
		function c(b) {
			for (var c = 0; c < b.length; c++)a("<img />").attr("src", b[c])
		}

		var d = a.extend({defaultImage: null, verticalAlignment: null, showTitles: null, frameWidth: null, eventDelegate: null}, b);
		return this.each(function () {
			function e() {
				a(i).css({position: "absolute", left: 0, top: 0}), a(i).children("img").map(function () {
					{
						var b, c, e = a(this).width(), f = a(this).height();
						a(this).attr("src").split("/")
					}
					d.frameWidth ? (b = d.frameWidth + "px", c = f * d.frameWidth / e + "px") : (b = "100%", c = "auto"), a(this).css({
						margin: "auto",
						display: "inline-block",
						position: "absolute",
						left: "0",
						width: b,
						height: c,
						"min-height": a(i).height(),
						"min-width": e * a(i).height() / f
					})
				})
			}

			function f() {
				d.verticalAlignment && a(i).children("img").map(function () {
					switch (d.verticalAlignment) {
						case"middle":
							a(this).css("top", -(a(this).height() / 2) + a(i).height() / 2);
							break;
						case"top":
							a(this).css("top", 0);
							break;
						case"bottom":
							a(this).css("top", -a(this).height() + a(i).height())
					}
				})
			}

			function g(b, c) {
				var d = a("#" + c).offset(), e = b.clientX - d.left < j ? Math.floor((b.clientX - d.left) / l) : m.length - 1;
				h(e, c)
			}

			function h(b, c) {
				b += 1;
				var e = b - 1, f = b + 1;
				a("#" + c + " img:nth-of-type(" + b + ")").css("z-index", "1"), d.showTitles && a("#" + d.showTitles).html(a("#" + a(i).attr("id") + " img:nth-of-type(" + b + ")").attr("title")), b < m.length && a("#" + c + " img:nth-of-type(" + f + ")").css("z-index", "0"), 0 !== e && a("#" + c + " img:nth-of-type(" + e + ")").css("z-index", "0")
			}

			var i = a(this), j = a(this).width(), k = a(this).children("img").length, l = j / k, m = [], n = "", o = [], p = a(this);
			b.eventDelegate && (p = b.eventDelegate), a(i.children("img")).each(function () {
				m.push(a(this).attr("src"))
			}), c(m), e(), a(this).find("img").css("z-index", "0"), d.defaultImage ? a(this).find("img#" + d.defaultImage).css("z-index", "1") : a(this).find("img").first().css("z-index", "1"), d.showTitles && a("#" + d.showTitles).html(d.defaultImage ? a(this).find("img#" + d.defaultImage).attr("title") : a(this).find("img").first().attr("title")), f(), a(window).resize(function () {
				j = a(i).width(), l = j / k, n = "", n = setTimeout(f, 500)
			}), d.showTitle && a(i).children("img").map(function () {
				var b = a(this).attr("title");
				o.push(b)
			}), p.on("mouseenter", function (b) {
				d.defaultImage ? a(this).find("img#" + d.defaultImage).css("z-index", "0") : a(this).find("img").first().css("z-index", "0"), g(b, a(i).attr("id"))
			}), p.on("mousemove", function (b) {
				g(b, a(i).attr("id"))
			}), p.on("mouseleave", function () {
				a(this).find("img").css("z-index", "0"), d.defaultImage ? a(this).find("img#" + d.defaultImage).css("z-index", "1") : a(this).find("img").first().css("z-index", "1"), d.showTitles && a("#" + d.showTitles).html(d.defaultImage ? a(this).find("img#" + d.defaultImage).attr("title") : a(this).find("img").first().attr("title"))
			})
		})
	}
}(jQuery), function () {
	"use strict";
	function a(a) {
		this.options = $.extend(b, a), $(window).on({blur: this.stop.bind(this)}), $(window).on($.map(this.options.activityEvents, function (a) {
			return a + ".updater"
		}).join(" "), this.onActivity.bind(this)), this.activityTime = new Date, this.updateTime = new Date
	}

	var b = {interval: 3e5, activityEvents: ["mousemove", "touchstart", "scroll", "keydown", "focus"]};
	a.prototype.start = function (a) {
		this.timer || (this.timer = window.setTimeout(this.update.bind(this), a || this.options.interval))
	}, a.prototype.stop = function () {
		this.timer && (window.clearTimeout(this.timer), this.timer = null)
	}, a.prototype.scheduleUpdate = function () {
		this.timer = window.setTimeout(this.update.bind(this), this.options.interval)
	}, a.prototype.update = function () {
		this.updateTime = new Date, this.checkActivity() && (this.immediateUpdate(), this.scheduleUpdate())
	}, a.prototype.immediateUpdate = function () {
		var a = this;
		this.request = $.get(this.options.url).done(function (b) {
			a.diff(b.ids)
		})
	}, a.prototype.diff = function (a) {
		var b = this.extractIds();
		if (a && a.length && b.length) {
			for (var c = 0, d = 0; d < a.length && -1 === $.inArray(a[d], b); d++)c++;
			this.options.found.call(this, c)
		}
	}, a.prototype.extractIds = function () {
		return $.map($(this.options.container).find(this.options.itemSelector), function (a) {
			return $(a).data("id")
		})
	}, a.prototype.onActivity = function () {
		this.activityTime = new Date;
		var a = Math.abs(this.activityTime.getTime() - this.updateTime.getTime());
		a > this.options.interval && !this.isDestroyed ? (this.start(), this.updateTime = new Date, this.immediateUpdate()) : this.start(a)
	}, a.prototype.checkActivity = function () {
		var a = Math.abs(this.activityTime.getTime() - this.updateTime.getTime());
		return a > this.options.interval && !this.isDestroyed ? (this.stop(), !1) : !0
	}, a.prototype.destroy = function () {
		this.stop(), $(window).off($.map(this.options.activityEvents, function (a) {
			return a + ".updater"
		}).join(" ")), this.options = null, this.isDestroyed = !0
	}, window.Updater = a
}(), Function.prototype.bind || (Function.prototype.bind = function (a) {
	"use strict";
	if ("function" != typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	var b = Array.prototype.slice.call(arguments, 1), c = this, d = function () {
	}, e = function () {
		return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
	};
	return d.prototype = this.prototype, e.prototype = new d, e
}), Function.prototype.subclass = function (a) {
	"use strict";
	var b = Function.prototype.subclass.nonconstructor;
	b.prototype = a.prototype, this.prototype = new b
}, Function.prototype.subclass.nonconstructor = function () {
}, window._ = _, window.SVGElement && (SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function (a) {
		return a.getScreenCTM().inverse().multiply(this.getScreenCTM())
	}), window.supportsTransitions = function () {
	"use strict";
	var a = document.body || document.documentElement, b = a.style, c = "transition";
	if ("string" == typeof b[c])return !0;
	var d = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
	c = c.charAt(0).toUpperCase() + c.substr(1);
	for (var e = 0; e < d.length; e++)if ("string" == typeof b[d[e] + c])return !0;
	return !1
}, jQuery.Animation.prefilter(function (a, b, c) {
	c.overrideOverflow && jQuery(a).css("overflow", c.overrideOverflow)
}), window.debounce = debounce, window.Modernizr = function (a, b, c) {
	function d(a) {
		s.cssText = a
	}

	function e(a, b) {
		return typeof a === b
	}

	function f(a, b) {
		return !!~("" + a).indexOf(b)
	}

	function g(a, b) {
		for (var d in a) {
			var e = a[d];
			if (!f(e, "-") && s[e] !== c)return "pfx" == b ? e : !0
		}
		return !1
	}

	function h(a, b, d) {
		for (var f in a) {
			var g = b[a[f]];
			if (g !== c)return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
		}
		return !1
	}

	function i(a, b, c) {
		var d = a.charAt(0).toUpperCase() + a.slice(1), f = (a + " " + v.join(d + " ") + d).split(" ");
		return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + w.join(d + " ") + d).split(" "), h(f, b, c))
	}

	var j, k, l, m = "2.8.3", n = {}, o = !0, p = b.documentElement, q = "modernizr", r = b.createElement(q), s = r.style, t = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), u = "Webkit Moz O ms", v = u.split(" "), w = u.toLowerCase().split(" "), x = {}, y = [], z = y.slice, A = function (a, c, d, e) {
		var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
		if (parseInt(d, 10))for (; d--;)h = b.createElement("div"), h.id = e ? e[d] : q + (d + 1), j.appendChild(h);
		return f = ["&#173;", '<style id="s', q, '">', a, "</style>"].join(""), j.id = q, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = p.style.overflow, p.style.overflow = "hidden", p.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), p.style.overflow = i), !!g
	}, B = {}.hasOwnProperty;
	l = e(B, "undefined") || e(B.call, "undefined") ? function (a, b) {
		return b in a && e(a.constructor.prototype[b], "undefined")
	} : function (a, b) {
		return B.call(a, b)
	}, Function.prototype.bind || (Function.prototype.bind = function (a) {
		var b = this;
		if ("function" != typeof b)throw new TypeError;
		var c = z.call(arguments, 1), d = function () {
			if (this instanceof d) {
				var e = function () {
				};
				e.prototype = b.prototype;
				var f = new e, g = b.apply(f, c.concat(z.call(arguments)));
				return Object(g) === g ? g : f
			}
			return b.apply(a, c.concat(z.call(arguments)))
		};
		return d
	}), x.flexbox = function () {
		return i("flexWrap")
	}, x.flexboxlegacy = function () {
		return i("boxDirection")
	}, x.csstransforms = function () {
		return !!i("transform")
	}, x.csstransforms3d = function () {
		var a = !!i("perspective");
		return a && "webkitPerspective" in p.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b) {
			a = 9 === b.offsetLeft && 3 === b.offsetHeight
		}), a
	};
	for (var C in x)l(x, C) && (k = C.toLowerCase(), n[k] = x[C](), y.push((n[k] ? "" : "no-") + k));
	return n.addTest = function (a, b) {
		if ("object" == typeof a)for (var d in a)l(a, d) && n.addTest(d, a[d]); else {
			if (a = a.toLowerCase(), n[a] !== c)return n;
			b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
		}
		return n
	}, d(""), r = j = null, n._version = m, n._prefixes = t, n._domPrefixes = w, n._cssomPrefixes = v, n.testProp = function (a) {
		return g([a])
	}, n.testAllProps = i, n.testStyles = A, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + y.join(" ") : ""), n
}(this, this.document), function (a, b, c) {
	function d(a) {
		return "[object Function]" == q.call(a)
	}

	function e(a) {
		return "string" == typeof a
	}

	function f() {
	}

	function g(a) {
		return !a || "loaded" == a || "complete" == a || "uninitialized" == a
	}

	function h() {
		var a = r.shift();
		s = 1, a ? a.t ? o(function () {
			("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
		}, 0) : (a(), h()) : s = 0
	}

	function i(a, c, d, e, f, i, j) {
		function k(b) {
			if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
				"img" != a && o(function () {
					v.removeChild(l)
				}, 50);
				for (var d in A[c])A[c].hasOwnProperty(d) && A[c][d].onload()
			}
		}

		var j = j || m.errorTimeout, l = b.createElement(a), n = 0, q = 0, t = {t: d, s: c, e: f, a: i, x: j};
		1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
			k.call(this, q)
		}, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
	}

	function j(a, b, c, d, f) {
		return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
	}

	function k() {
		var a = m;
		return a.loader = {load: j, i: 0}, a
	}

	var l, m, n = b.documentElement, o = a.setTimeout, p = b.getElementsByTagName("script")[0], q = {}.toString, r = [], s = 0, t = "MozAppearance" in n.style, u = t && !!b.createRange().compareNode, v = u ? n : p.parentNode, n = a.opera && "[object Opera]" == q.call(a.opera), n = !!b.attachEvent && !n, w = t ? "object" : n ? "script" : "img", x = n ? "script" : w, y = Array.isArray || function (a) {
			return "[object Array]" == q.call(a)
		}, z = [], A = {}, B = {
		timeout: function (a, b) {
			return b.length && (a.timeout = b[0]), a
		}
	};
	m = function (a) {
		function b(a) {
			var b, c, d, a = a.split("!"), e = z.length, f = a.pop(), g = a.length, f = {url: f, origUrl: f, prefixes: a};
			for (c = 0; g > c; c++)d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
			for (c = 0; e > c; c++)f = z[c](f);
			return f
		}

		function g(a, e, f, g, h) {
			var i = b(a), j = i.autoCallback;
			i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
				k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
			})))
		}

		function h(a, b) {
			function c(a, c) {
				if (a) {
					if (e(a))c || (l = function () {
						var a = [].slice.call(arguments);
						m.apply(this, a), n()
					}), g(a, l, b, 0, j); else if (Object(a) === a)for (i in h = function () {
						var b, c = 0;
						for (b in a)a.hasOwnProperty(b) && c++;
						return c
					}(), a)a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function () {
						var a = [].slice.call(arguments);
						m.apply(this, a), n()
					} : l[i] = function (a) {
						return function () {
							var b = [].slice.call(arguments);
							a && a.apply(this, b), n()
						}
					}(m[i])), g(a[i], l, b, i, j))
				} else!c && n()
			}

			var h, i, j = !!a.test, k = a.load || a.both, l = a.callback || f, m = l, n = a.complete || f;
			c(j ? a.yep : a.nope, !!k), k && c(k)
		}

		var i, j, l = this.yepnope.loader;
		if (e(a))g(a, 0, l, 0); else if (y(a))for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
	}, m.addPrefix = function (a, b) {
		B[a] = b
	}, m.addFilter = function (a) {
		z.push(a)
	}, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function () {
		b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
	}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
		var k, l, n = b.createElement("script"), e = e || m.errorTimeout;
		n.src = a;
		for (l in d)n.setAttribute(l, d[l]);
		c = j ? h : c || f, n.onreadystatechange = n.onload = function () {
			!k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
		}, o(function () {
			k || (k = 1, c(1))
		}, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
	}, a.yepnope.injectCss = function (a, c, d, e, g, i) {
		var j, e = b.createElement("link"), c = i ? h : c || f;
		e.href = a, e.rel = "stylesheet", e.type = "text/css";
		for (j in d)e.setAttribute(j, d[j]);
		g || (p.parentNode.insertBefore(e, p), o(c, 0))
	}
}(this, document), Modernizr.load = function () {
	yepnope.apply(window, [].slice.call(arguments, 0))
}, function (a) {
	"use strict";
	function b(b) {
		var c = a("body"), d = '<div class="dropdown_block unselectable" tabindex="0"></div>';
		c.find(".dropdown_block").length || c.append(d), this.container = a(".dropdown_block"), this.options = b, this.parent = b.parent, this.locale = b.locale, this.needLoad = b.needLoad, this.currentValue = b.currentValue, this.useLinks = b.useLinks, this._loadContent = !1, this._ajaxLoad = !1, this.isVisible = !1, this._reinitDropdown = !1, this.init()
	}

	b.prototype.classes = {
		link: "link",
		item: "list-item",
		letter: "letter",
		hidden: "hidden",
		hiddenBlock: "with_hidden_list",
		popular: "popular_list",
		group: "caption_group",
		dropdown: "dropdown_list",
		fullLink: "full_list",
		shortLink: "short_list",
		count: "count",
		allResults: "all_results"
	}, b.prototype.init = function () {
		var b = this, c = this.parent;
		if (this.$select = null, this.needLoad && !this._ajaxLoad) {
			var d = c.find(".docsearch__dropdown_content_place"), e = d.data("url");
			this.parent.addClass("is-loading"), this.container.load(e, function () {
				b.format(), a(b.element).stop().slideDown(200), b._ajaxLoad = !0, b.checkCurrentValue(), b.bindEvents(), b.parent.removeClass("is-loading"), b.show()
			})
		}
		if (!this.needLoad && !this._loadContent) {
			if (this._ajaxLoad = !1, a(this.parent).closest("form").length) {
				{
					var f = this.parent.find(".dropdown_select"), g = f.prop("id"), h = f.prop("name");
					a("<input/>").prop("type", "hidden").prop("name", h).prop("id", g).appendTo(b.parent)
				}
				f.removeAttr("name"), f.removeAttr("id")
			}
			this.$select = this.parent.find(".dropdown_select"), this.format(), this._loadContent = !0, this.checkCurrentValue(), this.bindEvents(), this.show()
		}
		this.options.items && this.add(this.options.items)
	}, b.prototype.reinit = function () {
		this._loadContent = !1, this._ajaxLoad = !1, this.isVisible = !1;
		var b = this, c = this.parent;
		if (this._reinitDropdown = !0, this.needLoad && !this._ajaxLoad) {
			var d = c.find(".docsearch__dropdown_content_place"), e = d.data("url");
			this.parent.addClass("is-loading"), this.container.load(e, function () {
				b.format(), a(b.element).stop().slideDown(200), b._ajaxLoad = !0, b.parent.removeClass("is-loading"), b.checkCurrentValue(), b.bindEvents()
			})
		}
		this.needLoad || this._loadContent || (this._ajaxLoad = !1, this.format(), this._loadContent = !0, this.checkCurrentValue(), this.bindEvents())
	}, b.prototype.show = function () {
		if (this.isVisible)return void this.close();
		var b = this.parent, c = a("body"), d = b.offset().top + b.height(), e = b.offset().left;
		this.container.css({
			top: d,
			left: e
		}), this.container.width(b.outerWidth()), b.addClass("is-active"), c.addClass("is-dropdown"), this.container.length && a(this.element).length && a(this.element).stop().height("auto").slideDown(200), a(this.container).focus(), this.checkCurrentValue(), this.isVisible = !0
	}, b.prototype.toggle = function (b) {
		var c = a(b.currentTarget);
		return a(this.container).find(this.element).length || this.reinit(), c.is(".is-active") ? (this.close(), this._reinitDropdown = !1, !1) : (this.show(), !1)
	}, b.prototype.bindEvents = function () {
		var b = this;
		this.container.on("mouseup", "." + this.classes.fullLink, this.showFullList.bind(this)), this.container.on("mouseup", "." + this.classes.shortLink, this.hideFullList.bind(this)), this._reinitDropdown || a(this.parent).on("mousedown", this.toggle.bind(this)), this.container.on("mousedown", "." + this.classes.link, this.select.bind(this)), this.container.on("mouseup", "." + this.classes.link, this.close.bind(this)), a(this.parent).on("keyup", function (a) {
			switch (a.keyCode) {
				case 13:
					b.show();
					break;
				case 27:
					b.close()
			}
		}), a(window).on("popstate.dropdown", function () {
			b.isVisible && b.close()
		}), this.container.on("blur", function (c) {
			a(c.relatedTarget).is(".dropdown") || b.close()
		}), this.element.on("mousewheel DOMMouseScroll", function (b) {
			var c = null;
			"mousewheel" === b.type ? c = -1 * b.originalEvent.wheelDelta : "DOMMouseScroll" === b.type && (c = 40 * b.originalEvent.detail), c && (b.preventDefault(), a(this).scrollTop(c + a(this).scrollTop()))
		})
	}, b.prototype.showFullList = function (b) {
		var c = a(b.currentTarget), d = c.closest(this.container.find("." + this.classes.hiddenBlock));
		d.find("." + this.classes.shortLink).slideDown(), d.find("." + this.classes.hidden).slideDown(), d.find("." + this.classes.popular).hide(), c.hide()
	}, b.prototype.hideFullList = function (b) {
		var c = a(b.currentTarget), d = c.closest(this.container.find("." + this.classes.hiddenBlock));
		d.find("." + this.classes.fullLink).show(), d.find("." + this.classes.popular).show(), d.find("." + this.classes.hidden).hide(), c.hide()
	}, b.prototype.select = function (b) {
		b.preventDefault(), b.stopPropagation();
		if (this.isVisible) {
			var c = a(b.currentTarget), d = this.parent.closest(".form"), e = (d.attr("name"), c.data("href"));
			d.find("a.submit").length && d.find("a.submit").attr("href", c.data("href")), this.parent.find("input").length && this.parent.find("input").val(e).trigger("change"), a(this.currentValue).text(c.text()).attr("data-href", e)
		}
	}, b.prototype.close = function () {
		this.isVisible && (this.container.find("." + this.classes.popular).show(), this.container.find("." + this.classes.fullLink).show(), this.container.find("." + this.classes.hidden).hide(), this.container.find("." + this.classes.shortLink).hide(), this.container.find("." + this.classes.dropdown).slideUp(350), a("body").removeClass("is-dropdown"), this.parent.removeClass("is-active"), this.isVisible = !1)
	}, b.prototype.format = function () {
		function b(b, d) {
			this.element = b;
			var e, f, g, h, i, j, k = "", l = [];
			for (e = 0; e < this.element.length; e++) {
				if (h = a(this.element[e]).data("title"), i = a(this.element[e]).data("href") || a(this.element[e]).val(), j = a(this.element[e]).data("count"), !h)return;
				j && (k = ', <span class="' + c.classes.count + '">' + j + "</span>"), f = a("<li></li>").addClass(d), g = c.useLinks ? a("<a></a>").attr("href", i).appendTo(f) : a("<span></span>").appendTo(f), g.addClass(c.classes.link).attr("data-href", i).html(h + k), l.push(f)
			}
			return l
		}

		var c = this, d = this.$select || this.container.find(".dropdown_select"), e = d.find(".without_filter"), f = d.find(".filter"), g = a("<ul></ul").addClass(c.classes.dropdown), h = [], i = [];
		if (e.length) {
			var j = c.classes.allResults + " " + c.classes.item, k = new b(e, j);
			g.append(k)
		}
		var l = a("<ul></ul>").appendTo(g);
		if (f.length)f.each(function () {
			var e = a(this).text(), f = a(this).data("type"), g = d.find('.letter[data-type="' + f + '"]'), j = a("<ul></ul>");
			if (g.length)g.each(function () {
				var e = a(this).text(), g = d.find('.alphabetical[data-type="' + f + "-" + e + '"]'), h = c.classes.hidden + " " + c.classes.item, i = a("<li></li>").appendTo(j).addClass(c.classes.letter + " " + h).html(e);
				j.append(i);
				var k = new b(g, h);
				j.append(k)
			}), h = a("<div></div>").addClass(c.classes.fullLink).html(_("Развернуть")), i = a("<div></div>").addClass(c.classes.shortLink).html(_("Свернуть")); else {
				var k = d.find('option[data-type="' + a(this).data("type") + '"]:not(.filter)'), m = new b(k);
				j.append(m)
			}
			var n = a("<li></li>").appendTo(l).addClass(c.classes.hiddenBlock + " " + c.classes.group).html(e), o = a("<ul></ul>").appendTo(n).addClass(c.classes.popular + " " + c.classes.item), p = new b(d.find('.popular[data-type="' + f + '"]')), q = p;
			o.append(q), n.append(j), h.length && n.append(h), i.length && n.append(i)
		}); else {
			var m = "";
			c.useLinks ? m = new b(d.find("a")) : (m = new b(d.find("option:not(.without_filter)")), a(this.$select).parent().next('[name="country"]').length && (m = new b(d.find('option[data-visible="true"]')))), l.append(m)
		}
		this.container.html(g), this.link = this.container.find("." + c.classes.link), this.element = this.container.find("." + c.classes.dropdown)
	}, b.prototype.checkCurrentValue = function () {
		var b = this;
		a(this.link).show(), a(this.link).each(function () {
			a(this).text() === a(b.currentValue).text() && a(this).hide()
		})
	}, b.prototype.add = function (b) {
		var c, d = this, e = a(d.element);
		for (c = 0; c < b.length; c++) {
			var f = b[c][1], g = b[c][0];
			e.append('<li class="' + this.classes.item + '"><span data-value="' + f + '" class="' + this.classes.link + '">' + g + "</span></li>")
		}
	}, b.prototype.remove = function () {
	}, window.Dropdown = b, a.fn.dropdown = function (c) {
		return this.each(function () {
			var d = a(this), e = d.data("dropdown");
			if (!e) {
				var f = "object" == typeof c && c;
				f = a.extend({parent: d, currentValue: d.find(".current-value")}, f), d.data("dropdown", e = new b(f))
			}
		})
	}
}(window.jQuery), function (a) {
	"use strict";
	function b(b, d) {
		this.$element = a(b);
		var e = d.selector, f = this;
		this.tooltip = c, this.position = "top";
		var g, h = 0;
		this.$element.on("mousemove", function (a) {
			f.position = a.pageY < h ? "bottom" : "top", h = a.pageY
		}), this.$element.on("click", e, function (a) {
			window.isMobile.any() || a.preventDefault()
		}), this.$element.on("mouseenter", e, function (b) {
			function e() {
				c.update(a(".read__tooltip", b.target).prop("outerHTML")), a(".read__tooltip", c.contentElement).removeClass("hidden"), c.getTargetBoundaries(), c.containerBoundaries = c.getContainerDimensions(), a(c.container).stop().fadeIn(function () {
					c.show()
				}), c.pointerOrigin = a(c.scrollContainer).is(".read") && h.position().top + a(c.container).height() - a(c.scrollContainer).find(".read__scroll").scrollTop() < a(window).height() ? f.position : "top", c.onMouseMove(b), clearTimeout(g), clearTimeout(f.tooltip.hideTimer)
			}

			var h = a(this);
			a(c.container).stop(!0), c.scrollContainer = f.$element.get(0), c.target = b.target, "function" == typeof d.onBeforeShow && d.onBeforeShow.apply(f, [b.target]), "requestAnimationFrame" in window ? window.requestAnimationFrame(e) : e()
		}), this.$element.on("mousemove", e, function (a) {
			c.onMouseMove(a)
		}), a(c.container).off("mouseenter").on("mouseenter", function () {
			clearTimeout(g)
		}), this.$element.on("mouseleave", e, function (b) {
			a(this).off("transitionend webkitTransitionEnd otransitionend MSTransitionEnd"), g = setTimeout(function () {
				a.contains(c.container, b.relatedTarget) || a(c.container).stop(!0).fadeOut(function () {
					c.hide()
				})
			}, 300)
		})
	}

	var c = new PointingTooltip({pointerOrigin: "top", axis: "x", movingArrow: !0, offset: {x: 0, y: 0}, isHide: !1});
	a.fn.sharedTooltip = function (c) {
		return this.each(function () {
			var d = a(this), e = d.data("sharedTooltip"), f = "object" == typeof c && c;
			e || d.data("sharedTooltip", e = new b(this, f))
		})
	}
}(jQuery), function () {
	"use strict";
	function a(a) {
		return this._options = $.extend({}, b, a), this._state = {
			firstPage: 1,
			lastPage: 1,
			currentPage: 1,
			totalPages: 0,
			pageCache: {},
			currentItem: null,
			firstInsertionPoint: null,
			lastInsertionPoint: null,
			requests: [],
			items: {}
		}, "object" == typeof this._options.edgePixels ? (this._options.edgePixelsTop = this._options.edgePixels.top, this._options.edgePixelsBottom = this._options.edgePixels.bottom) : (this._options.edgePixelsTop = this._options.edgePixels, this._options.edgePixelsBottom = this._options.edgePixels), "object" == typeof this._options.loadEdgePixels ? (this._options.loadEdgePixelsTop = this._options.loadEdgePixels.top, this._options.loadEdgePixelsBottom = this._options.loadEdgePixels.bottom) : (this._options.loadEdgePixelsTop = this._options.loadEdgePixels, this._options.loadEdgePixelsBottom = this._options.loadEdgePixels), this.bind(a.container, a), this._initState(a), this._options.preload && this.preloadPages(), "function" == typeof this._options.initialized && (this._options.initialized.call(this), this.trigger("initialized")), this
	}

	var b = {selfNavigation: !0, edgePixels: 100, dataType: "html", loadingPreventionCheck: !0, pageClass: "lister-page", preload: !1};
	a.prototype._scrollTo = function (a, b, c) {
		if (this._options.scrollTo)return this._options.scrollTo(a, b, c);
		var d = this._options.container === window ? document.body : this._options.container;
		$(d).animate({scrollTop: a}, b)
	}, a.prototype._initState = function (a) {
		this._options = $.extend({}, this._options, a);
		for (var b in this._state.pageCache)if (this._state.pageCache.hasOwnProperty(b)) {
			{
				this._state.pageCache[b]
			}
			$(this.container).find(this._options.itemSelector + '[data-page="' + b + '"]').remove(), delete this._state.pageCache[b]
		}
		var c = $(this._options.holder).data();
		c && (this._state.path = c.path, this._state.baseUrl = c.baseUrl, this._state.urlTemplate = c.urlTemplate, this._state.currentPage = parseInt(c.page, 10), this._state.totalPages = parseInt(c.pages, 10)), this._state.firstPage = this._state.lastPage = this._state.currentPage, this._state.firstInsertionPoint = this._options.holder, this._state.lastInsertionPoint = this._options.holder, this._state.items[this._state.currentPage] = {
			id: this._state.currentPage,
			rendered: !0
		}
	}, a.prototype.reinit = function (a) {
		return this._initState(a), "function" == typeof this._options.initialized && (this._options.initialized.call(this), this.trigger("initialized")), this
	}, a.prototype.load = function (a) {
		var b;
		return "jQuery" in window ? (b = $.ajax({dataType: a.dataType, url: a.url, data: a.data, success: a.success, error: a.error}), this._state.requests.push(b)) : "MooTools" in window ? (b = new Request({
			url: a.url,
			data: a.data,
			onSuccess: function (b) {
				"function" == typeof a.success && a.success(b)
			},
			onFailure: function (b) {
				"function" == typeof a.error && a.error(b)
			}
		}), b.send(), this._state.requests.push(b)) : (b = new XMLHttpRequest, b.open("GET", a.url), b.onreadystatechange = function () {
			4 === b.readyState && 200 === b.status && "function" == typeof a.success && a.success(b.responseText)
		}, b.onerror = function () {
			"function" == typeof a.success && a.error(b)
		}, b.send()), this
	}, a.prototype.cancel = function () {
		for (; this._state.requests.length;) {
			var a = this._state.requests.pop();
			a.abort()
		}
		return this
	}, a.prototype.loadPage = function (a) {
		if (!this._state.pageCache[a.page]) {
			var b, c = this._state.items;
			if (b = c.hasOwnProperty(a.page) ? this._state.items[a.page] : this._state.items[a.page] = {}, !b.loading) {
				var d = {page: a.page, direction: a.direction}, e = this._options.url;
				"function" == typeof this._options.url && (e = this._options.url.call(this, d)), a.url = e;
				var f = this;
				return "function" == typeof this._options.willLoad && this._options.willLoad.call(this, a), this._state.items[a.page] = {loading: !0}, this.load({
					url: e,
					dataType: this._options.dataType,
					success: function (b) {
						f.didLoadPage(a, b)
					},
					error: function (b) {
						f.didFailLoadPage(a, b)
					}
				}), this
			}
		}
	}, a.prototype.didFailLoadPage = function (a, b) {
		var c = this._state.items[a.page];
		$.extend(c, {loading: !1, loaded: !1}), "function" == typeof this._options.didFailLoad && this._options.didFailLoad(a, b), this.trigger("error", a, b)
	}, a.prototype.didLoadPage = function (a, b) {
		if ("function" == typeof this._options.didLoad && this._options.didLoad.call(this, a), this.trigger("load"), !this._state.pageCache[a.page]) {
			"next" === a.direction && (this._state.lastPage = a.page), "prev" === a.direction && (this._state.firstPage = a.page), this._state.pageCache[a.page] = {url: a.url, data: b};
			var c = this._state.items[a.page];
			$.extend(c, {id: a.page, url: a.url, data: b, loading: !1, loaded: !0}), a.render && this.renderPage(a, b)
		}
	}, a.prototype.withSavedScroll = function (a) {
		var b = $(this._options.container === window ? document.body : this._options.container), c = (b.scrollTop(), Math.max(b.prop("scrollHeight"), b.outerHeight()));
		a();
		var d = Math.max(b.prop("scrollHeight"), b.outerHeight()) - c;
		this._scrollTo((0 > d ? "-=" : "+=") + String(Math.abs(d)), 0, {force: !0})
	}, a.prototype.renderPage = function (a, b) {
		{
			var c;
			$(this._options.container === window ? document.body : this._options.container)
		}
		return this._state.items[a.page].rendered ? void 0 : (a.response = b, this._options.template ? c = $(this._options.template(b, a)) : (a.parsedResponse = $.parseHTML(b), c = $(a.parsedResponse).find(this._options.itemSelector), c = '<div class="' + this._options.pageClass + '" id="page-' + a.page + '" data-page="' + a.page + '">' + c.html() + "</div>", c = $(c)), "function" == typeof this._options.willRender && this._options.willRender.call(this, a, c), this.trigger("willRender", a, c), "next" === a.direction ? ($(this._state.lastInsertionPoint).after(c), this._state.lastInsertionPoint = c) : this.withSavedScroll(function () {
			$(this._state.firstInsertionPoint).before(c), this._state.firstInsertionPoint = c
		}.bind(this)), this._state.items[a.page].rendered = !0, "function" == typeof this._options.didRender && this._options.didRender.call(this, a, c), this.trigger("render", a, c), this)
	}, a.prototype.nextPage = function (a) {
		var b = this._state.currentPage + 1;
		return b <= this._state.totalPages ? this._state.pageCache[b] ? this.renderPage({page: b, direction: "next"}, this._state.pageCache[b].data) : (this.loadPage({
			page: b,
			direction: "next",
			render: !0
		}), a && a.prefetch && b + 1 < this._state.totalPages && this.loadPage({page: b + 1, direction: "next"})) : "function" == typeof this._options.onEnd && this._options.onEnd.call(this), this
	}, a.prototype.prevPage = function (a) {
		var b = this._state.currentPage - 1;
		return b > 0 ? this._state.pageCache[b] ? this.renderPage({page: b, direction: "prev"}, this._state.pageCache[b].data) : (this.loadPage({
			page: b,
			direction: "prev",
			render: !0
		}), a && a.prefetch && b > 1 && this.loadPage({page: b - 1, direction: "prev"})) : "function" == typeof this._options.onStart && this._options.onStart.call(this), this
	}, a.prototype.nearTheEdge = function (a) {
		var b, c, d, e, f = a.container, g = f === window ? document.body : f, h = $(f).scrollTop(), i = $(f).scrollLeft(), j = $(g).prop("scrollWidth"), k = $(g).prop("scrollHeight"), l = $(a.window ? window : f).width(), m = $(a.window ? window : f).height(), n = !0;
		if (b = 0 + h, c = 0 + j - i - l, d = 0 + k - h - m, e = 0 + $(f).scrollLeft(), this._options.loadingPreventionCheck) {
			if (this._options.top && b - this._options.edgePixelsTop < 0) {
				var o = this._options.top;
				"function" == typeof this._options.top && (o = this._options.top()), n = b >= o
			}
			if (this._options.bottom && d - this._options.edgePixelsBottom < 0) {
				var p = this._options.bottom;
				"function" == typeof this._options.bottom && (p = this._options.bottom()), n = d >= p
			}
		}
		if (!n) {
			"function" == typeof this._options.loadingPrevented && (this.cancel(), this._options.loadingPrevented.call(this));
			var q = {top: !1, right: !1, bottom: !1, left: !1};
			return {load: q, render: q}
		}
		return a.full ? a.load ? {
			load: {
				top: b - this._options.loadEdgePixelsTop < 0,
				right: c - this._options.loadEdgePixels < 0,
				bottom: d - this._options.loadEdgePixelsBottom < 0,
				left: e - this._options.loadEdgePixels < 0
			}, render: {top: b - this._options.edgePixelsTop < 0, right: c - this._options.edgePixels < 0, bottom: d - this._options.edgePixelsBottom < 0, left: e - this._options.edgePixels < 0}
		} : {
			top: b - this._options.edgePixelsTop < 0,
			right: c - this._options.edgePixels < 0,
			bottom: d - this._options.edgePixelsBottom < 0,
			left: e - this._options.edgePixels < 0
		} : b - this._options.edgePixelsTop < 0 || d - this._options.edgePixelsBottom < 0
	}, a.prototype.navigate = function (a) {
		if (!this._options.shouldNavigate || this._options.shouldNavigate.call(this, {page: a.index, navigated: !0})) {
			var b = this._options.url.call(this, {page: a.index, navigated: !0});
			return this._options.selfNavigation && window.location.href !== b && "replaceState" in window.history && window.history.replaceState({}, "", b), this.trigger("navigate", b), this
		}
	}, a.prototype.pause = function () {
		this._state.isPaused = !0
	}, a.prototype.resume = function () {
		this._state.isPaused = !1
	}, a.prototype.scrollToPage = function (a, b) {
		"undefined" == typeof b && (b = !0);
		var c = $("." + this._options.pageClass + '[data-page="' + a + '"]');
		if (c && c.length) {
			var d = $(c), e = d.offset().top - this._options.topOffset();
			this._scrollTo(e, 0)
		}
		return this
	}, a.prototype.preloadPages = function () {
		return this.prevPage(), this.nextPage(), this
	}, a.prototype.addEvent = function (a, b, c) {
		return "jQuery" in window && $(a).bind(b, c), "MooTools" in window && a.addEvent(b, c), this
	}, a.prototype.removeEvent = function (a, b, c) {
		return "jQuery" in window && $(a).unbind(b, c), "MooTools" in window && a.removeEvent(b, c), this
	};
	var c = 0;
	if (a.prototype.onScroll = function () {
			var a = this;
			if (!a._state.isPaused && !router._xhr) {
				if (!a._options.holder.closest("body").length)return void this.unbind();
				var b = $(a.container).scrollTop(), d = c > b ? "up" : "down";
				c = b;
				var e = a._options.topOffset() || 0, f = !1, g = 50;
				b = $(a._options.container).scrollTop() + e;
				for (var h = $(a._options.itemSelector, a._options.container === window ? document.body : a._options.container), i = 0; i < h.length; i++) {
					var j = $(h[i]), k = j.position().top - b, l = j.outerHeight(), m = j.data("page");
					if (g - Math.abs(k) > 0 || k + l > 0) {
						a._state.currentPage !== m && (a._state.currentPage = m, a.navigate({index: m}), f = !0);
						break
					}
				}
				!f && 0 > k + l && a._state.currentPage !== m && (a._state.currentPage = m, a.navigate({index: m}));
				var n = a.nearTheEdge({container: a._options.container, full: !0, load: !0, window: a._options.container === window}), o = n.load, p = n.render;
				o.top && "up" === d ? window.setTimeout(function () {
					a.prevPage()
				}, 100) : o.bottom && "down" === d && window.setTimeout(function () {
					a.nextPage()
				}, 100), p.top && "up" === d ? window.setTimeout(function () {
					a.prevPage({prefetch: !0})
				}, 100) : p.bottom && "down" === d && window.setTimeout(function () {
					a.nextPage({prefetch: !0})
				}, 100)
			}
		}, a.prototype.bind = function (a) {
			return this.addEvent(window, "keydown", function (b) {
				return a && a.tagName && !a.closest("body").length || !this._options.holder || !this._options.holder.length ? void this.unbind() : void(this._state.isPaused || ((34 === b.keyCode || 32 === b.keyCode || 9 === b.keyCode || 35 === b.keyCode || 40 === b.keyCode) && this.nextPage(), (b.shiftKey && 32 === b.keyCode || 38 === b.keyCode) && this.prevPage()))
			}.bind(this)), this.addEvent(a, "scroll", debounce(this.onScroll.bind(this), 75)), this
		}, a.prototype.unbind = function (a) {
			return this.removeEvent(a, "scroll"), this.removeEvent(window, "mousemove"), this.removeEvent(window, "keydown"), this
		}, a.prototype.trigger = function (a) {
			var b = Array.prototype.slice.call(arguments, 1);
			return $(this).trigger(a + ".paginator", b), this
		}, a.prototype.on = function (a, b) {
			return $(this).on(a + ".paginator", b), this
		}, a.prototype.off = function (a, b) {
			return $(this).off(a + ".paginator", b), this
		}, window.InfinityPaginator = a, "object" == typeof $ && $.fn) {
		var d = $.fn.paginator;
		$.fn.paginator = function (c, d) {
			return this.each(function () {
				var e = $(this), f = e.data("paginator"), g = $.extend({}, b, e.data(), "object" == typeof c && c);
				f || (g.element = this, e.data("paginator", f = new a(g))), "string" == typeof c ? f[c](d) : g.show && f.show(d)
			})
		}, $.fn.paginator.Constructor = a, $.fn.paginator.noConflict = function () {
			return $.fn.paginator = d, this
		}
	}
	"function" == typeof define && define.amd || (window.InfinityPaginator = a)
}(), function (a) {
	"use strict";
	a.fn.deserialize = function (b) {
		var c = a(this), d = {};
		return a.each(b.split("&"), function () {
			var a = this.split("="), b = decodeURIComponent(a[0]), c = a.length > 1 ? decodeURIComponent(a[1]) : null;
			c && (c = c.replace(/\+/g, " ")), b in d || (d[b] = []), d[b].push(c)
		}), a.each(d, function (a, b) {
			var d = c.find("[name='" + a + "']");
			d.each(function (a, c) {
				var d = $(c);
				"radio" === d.attr("type") ? -1 !== b.indexOf(c.value) ? d.prop("checked", !0).attr("checked", "checked") : d.prop("checked", !1).removeAttr("checked") : d.val() || "file" == d.attr("type") || ("SELECT" === d.prop("tagName") ? d.find("option").prop("selected", !1).removeAttr("selected").filter(function (a, c) {
					return -1 !== b.indexOf(c.value)
				}).prop("selected", !0).attr("selected", "selected") : d.val(b).trigger("insert"))
			})
		}), a("input:checkbox:checked,input:radio:checked").each(function () {
			$(this).attr("name") in d || (this.checked = !1)
		}), this
	}
}(jQuery), function () {
	"use strict";
	function a(a, b) {
		this.$element = $(a), this.options = b || {}, b.storeData !== !1 && this.bindEvents(), b.restore !== !1 && this.restore()
	}

	var b = "formstate";
	a.prototype.storage = function () {
		return window.sessionStorage ? sessionStorage : void 0
	}, a.prototype.bindEvents = function () {
		this.$element.bind("change", this.onChange.bind(this)), this.$element.bind("keyup", this.onKeyUp.bind(this)), this.$element.bind("paste", this.onPaste.bind(this)), this.$element.bind("reset", this.clear.bind(this))
	}, a.prototype.onChange = function () {
		this.store()
	}, a.prototype.onKeyUp = function () {
		this.store()
	}, a.prototype.onPaste = function () {
		this.store()
	}, a.prototype.store = function () {
		var a = this.getKey(), b = this.storage();
		b && b.setItem(a, JSON.stringify(this.$element.serialize()))
	}, a.prototype.restore = function () {
		var a, b = this.getKey(), c = this.storage();
		c && (a = $.parseJSON(c.getItem(b)), a && (this.$element.data("formstate-restored", !0), this.$element.deserialize(a)))
	}, a.prototype.getKey = function () {
		if (this.key = this.options.name || this.$element.attr("name") || this.$element.attr("id"), !this.key) {
			var a = this.$element.attr("class");
			"string" == typeof a && (this.key = a.replace(/ /g, "-"))
		}
		return b + "-" + this.key
	}, a.prototype.clear = function () {
		var a = this.getKey(), b = this.storage();
		b && b.removeItem(a)
	}, $.fn.formstate = function (b) {
		return this.each(function () {
			var c = $(this), d = c.data("formstate"), e = "object" == typeof b && b;
			d || c.data("formstate", d = new a(this, e))
		})
	}
}(), function () {
	"use strict";
	var a = $("<div/>");
	a.addClass("spot");
	var b = function (a, b) {
		this.$element = $(a), this.options = $.extend({width: "15px", newWidth: "20px", height: "15px", newHeight: "20px", opacity: .4}, b), $(this.$element).on("click", this.show.bind(this))
	};
	b.prototype.show = function (b) {
		var c = this;
		$("body").append(a), setTimeout(function () {
			a.stop().css({display: "block", left: b.pageX - 8 + "px", top: b.pageY - 8 + "px", width: c.options.width, height: c.options.height, opacity: c.options.opacity}).animate({
				opacity: 0,
				width: c.options.newWidth,
				height: c.options.newHeight,
				left: "-=3px",
				top: "-=4px"
			}, 300, function () {
				a.css("display", "none")
			})
		}, 150)
	}, $.fn.spotted = function (a) {
		return this.each(function () {
			var c = $(this), d = c.data("spot"), e = "object" == typeof a && a;
			d || c.data("spot", d = new b(this, e))
		})
	}
}(), function () {
	"use strict";
	function a(a) {
		this.options = a || {}, this.handlers = [], this.supportsPushState = "function" == typeof window.history.pushState, this.currentUid = this.uid = history.state && history.state.uid ? history.state.uid : 0, this.initialPop = !0, this.initialURL = window.location.href, "state" in window.history && (this.initialPop = !1), $(window).on("popstate.router", this.onPopState.bind(this))
	}

	a.prototype.onPopState = function (a) {
		var b = a.originalEvent.state;
		if (b && b.uid && !this.uid && (this.uid = this.currentUid = b.uid), this.skip)return void(this.skip = !1);
		if (!this.initialPop || !b || this.initialURL !== b.url) {
			if (b) {
				if ("function" == typeof this.options.beforeUnload) {
					var c = this.options.beforeUnload();
					if (c && !window.confirm(c))return b && b.uid > this.currentUid ? history.back() : history.forward(), void(this.skip = !0)
				}
				this.currentUid = b.uid, b.contentView && b.readerView && this._load(b.contentView, {shouldNavigate: !1, from: "popstate", state: b}), this._load($.url().attr("relative"), {
					shouldNavigate: !1,
					from: "popstate",
					state: b
				})
			}
			this.initialPop = !1
		}
	}, a.prototype.start = function () {
		if (!history.state) {
			var a = {contentView: viewManager.getView("contentView").currentURL, readerView: viewManager.getView("readerView").currentURL}, b = $.url().attr("relative");
			this.updateState(a, b, document.title)
		}
		this._route($.url().attr("relative"), $("html").html(), {from: "initial"})
	}, a.prototype.map = function (a) {
		this.handlers.push(a)
	}, a.prototype.navigate = function (a, b, c) {
		"pushState" in window.history && (this.currentUid = a.uid = ++this.uid, window.history.pushState(a, c, b))
	}, a.prototype.updateState = function (a, b, c) {
		b = b.replace(/\/+/g, "/"), "replaceState" in window.history && (a.uid = history.uid, window.history.replaceState(a, c, b))
	}, a.prototype._route = function (a, b, c, d) {
		c = $.extend({shouldNavigate: !0}, c), viewManager.onRoute(a, b, c.from, c.state, c);
		var d = d || viewManager.urlToView(a);
		"function" == typeof d.onRoute && d.onRoute(a, b, c.from, c.state, c)
	}, a.prototype._willEnter = function (a, b, c) {
		"function" == typeof a.onBeforeUpdate && a.onBeforeUpdate(b, c) !== !1
	}, a.prototype._load = function (a, b) {
		var c = viewManager.urlToView(a);
		if (!c.reloadIsRequired(a, b) && !b.force)return this._route(a, null, b, c), this.trigger("loaded", a, {}, b), void(b && b.onLoaded && b.onLoaded.call(this, a, {}, b));
		if (this._xhr)if (b.state && b.state.contentView == this._xhr.url && b.state.readerView == a); else if (this._xhr.url !== a)this.abort(); else if ("pending" === this._xhr.state())return;
		this.trigger("willLoad", a), b.state && (b.state.url = a);
		var d = b.data || [];
		if (!d instanceof Array)throw"options.data must be an array";
		if (history.state && history.state.contentView) {
			var e = history.state.contentView;
			"/search" == e.split("?")[0] && (d = Array.prototype.slice.call(d), d.push({name: "utm_contentview", value: e.split("#")[0]}))
		}
		this._xhr = $.get(a, d).done(function (d) {
			this._xhr = null, this._route(a, d, b, c), this.trigger("loaded", [a, d, b]), b && b.onLoaded && b.onLoaded.call(this, a, {}, b)
		}.bind(this)).fail(function (c, d) {
			this._xhr = null, "abort" !== d && (this.trigger("failed", {url: a}), b && b.onFailed && b.onFailed.call(this, {url: a}))
		}.bind(this)), this._xhr.url = a, this._xhr.options = b
	}, a.prototype.abort = function () {
		if (this._xhr) {
			var a = this._xhr.options, b = a && a.onAbort;
			b = "onFailed" === b ? a.onFailed : b;
			var c = this._xhr.url;
			this._xhr.abort(), this.trigger("abort", {url: c}), b && b.call(this, a)
		}
	}, a.prototype.handleURL = function (a, b) {
		if (!this.supportsPushState)return b && "initial" == b.from ? void this._load(a, b) : void this._fallback($.extend({url: a}, b));
		b || (b = {data: {}});
		var c = $.extend({}, {from: "external"}, b);
		this._load(a, c)
	}, a.prototype.on = function (a, b, c, d) {
		$(this).on(a, b, c, d)
	}, a.prototype.one = function (a, b, c, d) {
		$(this).one(a, b, c, d)
	}, a.prototype.off = function (a, b, c, d) {
		$(this).off(a, b, c, d)
	}, a.prototype.trigger = function (a, b) {
		$(this).trigger(a, b)
	}, a.prototype._fallback = function (a) {
		var b = $.isFunction(a.url) ? a.url() : a.url, c = a.type ? a.type.toUpperCase() : "GET", d = $("<form>", {method: "GET" === c ? "GET" : "POST", action: b, style: "display:none"});
		"GET" !== c && "POST" !== c && d.append($("<input>", {type: "hidden", name: "_method", value: c.toLowerCase()}));
		var e = a.data;
		if ("string" == typeof e)$.each(e.split("&"), function (a, b) {
			var c = b.split("=");
			d.append($("<input>", {type: "hidden", name: c[0], value: c[1]}))
		}); else if ($.isArray(e))for (var f = 0; f < e.length; f++)e[f].value && d.append($("<input>", $.extend({type: "hidden"}, e[f]))); else if ("object" == typeof e)for (var g in e)e.hasOwnProperty(g) && d.append($("<input>", {
			type: "hidden",
			name: g,
			value: e[g]
		}));
		d.append('<input type="submit" value="Submit" />'), $(document.body).append(d), d.submit()
	}, window.Router = a
}(), function (a) {
	"use strict";
	function b(a) {
		this.currentURL = a.url, a.onRender && (this.onRender = a.onRender), a.onInit && (this.onInit = a.onInit), a.onShow && (this.onShow = a.onShow), a.onHide && (this.onHide = a.onHide), a.isEmpty && "function" == typeof a.isEmpty && (this.isEmpty = a.isEmpty), this.container = a.container, this.element = a.element, this.isActive = !1, this.isLoading = !1, this.state = {}
	}

	b.prototype.attachToDOM = function (b, c) {
		if (this.$element)return !1;
		if (this.$element = a(c ? c : this.element), this.$container = a(b ? b : this.container), !this.isEmpty() && !this.currentURL) {
			var d = a.url(window.location.href), e = d.attr("fragment"), f = d.attr("query");
			this.currentURL = d.attr("path") + (f ? "?" + f : "") + (e ? "#" + e : "")
		}
		return this.bindEvents && "function" == typeof this.bindEvents && this.bindEvents(), this.init && "function" == typeof this.init && this.init(), this.onInit && "function" == typeof this.onInit && this.onInit(), this.$element.data("view", this), this.trigger("init"), this
	}, b.prototype.isEmpty = function () {
		return !this.$element.length || !this.$element.children().length
	}, b.prototype.updateState = function (a) {
		this.currentURL = a
	}, b.prototype.on = function (a, b, c, d) {
		return this.$element.on(a + ".view", b, c, d), this
	}, b.prototype.one = function (a, b, c, d) {
		this.$element.one(a, b, c, d)
	}, b.prototype.off = function (a, b, c, d) {
		return this.$element.off(a + ".view", b, c, d), this
	}, b.prototype.trigger = function (a, b) {
		return this.$element.trigger(a, b), this
	}, b.prototype.show = function () {
		return this.$element.show(), "function" == typeof this.onShow && this.onShow.apply(this), this.trigger("show"), this
	}, b.prototype.hide = function () {
		return this.$element.hide(), "function" == typeof this.onHide && this.onHide.apply(this), this.trigger("hide"), this
	}, b.prototype._extractTitle = function (b) {
		return a(a.parseHTML(b)).filter("title").text()
	}, b.prototype._extractAlternateURLs = function (b) {
		return a(a.parseHTML(b)).filter('[rel="alternate"][hreflang]').map(function (b, c) {
			return {lang: a(c).prop("hreflang"), url: a(c).prop("href")}
		})
	}, b.prototype.render = function (b) {
		var c = a(a.parseHTML(b)), d = c.find(this.$element.selector);
		d.length || (d = c.filter(this.$element.selector));
		var e = d.html();
		return this.$element.html(e), "function" == typeof this.onRender && this.onRender.apply(this), this.trigger("render"), this
	}, b.prototype.update = function (a) {
		this.clean(), this.currentTitle = this._extractTitle(a), this.alternateURLs = this._extractAlternateURLs(a), this.currentURL = arguments[1] ? arguments[1] : "", this.render(a), this.bind(), this.trigger("update", this.currentURL)
	}, b.prototype.bind = function () {
		return this
	}, b.prototype.unbind = function () {
		return this
	}, b.prototype.destroy = function () {
		return this.$element.remove(), this
	}, b.prototype.onBeforeClean = function () {
	}, b.prototype.clean = function () {
		return this.onBeforeClean(), this.currentURL = void 0, this.$element.empty(), this
	}, b.prototype.scrollTo = function (b, c, d) {
		if (this.$container) {
			var e = this.$container;
			e.get(0) === document.body && (e = a("html,body")), "number" != typeof window._technicalScroll && (window._technicalScroll = 0), window._technicalScroll += 1, c = c ? c : 0, d && d.force && e.finish(), e.animate({scrollTop: b}, {
				duration: c,
				queue: !0,
				done: function () {
					window.setTimeout(function () {
						window._technicalScroll -= 1
					}, 100)
				}
			})
		}
	}, b.prototype.scrollTarget = function () {
		var b = a.url(this.currentURL).attr("fragment") || a.url().attr("fragment");
		if (b && this.$element.find("#" + b) && a(href).length) {
			var c = a(href);
			return c.length ? c : void 0
		}
	}, window.View = b
}(window.jQuery), function () {
	"use strict";
	function a(a, b) {
		this.message = a, this.container = b
	}

	a.prototype.show = function () {
		$(this.container).find(".notification").remove(), this.$element = $('<div class="notification" role="alert">' + this.message + "</div>"), $(this.container).append(this.$element)
	}, a.prototype.hide = function () {
		this.$element.hide()
	}, a.prototype.destroy = function () {
		this.$element.remove()
	}, window.Notification = a
}(), function () {
	"use strict";
	function a(b) {
		return b = b || {}, this.holder = b.holder, this.container = b.container, this.messages = [], this.timeout = b.timeout || 4e3, a.prototype._singletonInstance ? a.prototype._singletonInstance : (a._singletonInstance = this, this)
	}

	a.prototype.notify = function (a, b) {
		if (!this.holder && !this.container) {
			var c = $('<div class="notifications"></div>');
			$(document.body).append(c), this.holder = this.container = c
		}
		"undefined" == typeof this.holder.startTop && (this.holder.startTop = parseInt(this.holder.css("top"), 10)), b || (b = this.timeout);
		var d = new Notification(a, this.container);
		this.messages.push(d), d.show(this.container), this.isShowing || (this.holder.show(), this.holder.stop(!0).animate({top: this.holder.startTop + 60}, 1e3)), this.isShowing = !0, this.hideTimeout && clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(function () {
			this.holder.stop(!0).animate({top: this.holder.startTop}, 1e3, function () {
				this.isShowing = !1, this.holder.hide(), d.hide(), d.destroy()
			}.bind(this))
		}.bind(this), b)
	}, a.prototype.alert = function (a) {
		window.alert(a)
	}, window.NotificationCenter = a
}(), function () {
	"use strict";
	function a(a, b) {
		(a instanceof Date || "number" == typeof a) && (a = moment.utc(a).startOf("day")), (b instanceof Date || "number" == typeof b) && (b = moment.utc(b).startOf("day")), this.start = a, this.end = b
	}

	var b = 1e3, c = 60 * b, d = 60 * c, e = 24 * d, f = 7 * e;
	a.prototype.days = function () {
		return Math.floor((this.end - this.start) / e)
	}, a.prototype.isInside = function (a) {
		return +this.start <= +a && +this.end >= +a
	}, a.SECOND = b, a.MINUTE = c, a.HOUR = d, a.DAY = e, a.WEEK = f, window.DateRange = a
}(), function () {
	function a(a) {
		var b = new Date(a);
		return [b.getUTCFullYear(), b.getUTCMonth() + 1, b.getUTCDate(), 0, 0, 0, 0]
	}

	function b(a) {
		var b = [].concat(a);
		return b[1]--, Date.UTC.apply(null, b)
	}

	function c(b, c, d) {
		var e = a(b);
		e[c] += d || 0;
		for (var f = c + 1; 7 > f; f++)e[f] = 3 > f ? 1 : 0;
		return e
	}

	function d(a, c, d) {
		var e = {};
		e.start = b(a);
		var f = Array.prototype.slice.call(a);
		return f[c] += d || 1, e.end = b(f), e.end = moment.utc(e.end).add(-1, "day").toDate(), e
	}

	function e(a, b, c, d) {
		if (!b && !c)return {};
		if ("<" === a || "->" === a || "-" === a)return b && !c ? {start: b.start, end: null} : !b && c ? {start: null, end: c.end} : c.rel ? {start: b.start, end: b.end + c.rel} : b.rel ? {
			start: c.start - b.rel,
			end: c.end
		} : {start: b.start, end: c.end};
		if ("<>" === a) {
			if (c) {
				if (!("rel" in c))throw"second term did not have a range";
				return {start: b.start - c.rel, end: b.end + c.rel}
			}
			return {start: b.start - n.defaultRange, end: b.end + n.defaultRange}
		}
		return b ? b.rel ? {start: d - b.rel, end: d + b.rel} : b.now ? {start: b.now - n.defaultRange, end: b.now + n.defaultRange} : {start: b.start, end: b.end} : {}
	}

	function f(a, b) {
		var c = new RegExp("(?:^|\\W)" + b + "+(?:$|\\W)");
		return !!a._f.match(c)
	}

	function g(a, b) {
		return b.min && a && b.min.isAfter(a.start) && (a.start = b.min.clone()), b.max && a && b.max.isBefore(a.end) && (a.end = b.max.clone().toDate()), +a.end < +a.start ? null : a
	}

	function h(b, e, h) {
		function i(a, b, f, i) {
			i = i || moment.utc(e).toDate();
			var j = c(e, a, b), k = d(j, a, f);
			return g(k, h)
		}

		b = $.trim(b);
		var j = moment.utc(b, m.momentFormats, !0);
		if (j.isValid()) {
			{
				j._f
			}
			f(j, "Y") || (h.now && j.year(moment.utc(+h.now).year()), j.clone().startOf("month").isAfter(h.now) && j.subtract(1, "year"));
			var k = j.toDate(), o = 0;
			f(j, "M") && (o = 1), f(j, "D") && (o = 2);
			var p = c(k, o), q = d(p, o);
			return g(q, h)
		}
		var r = b.replace(/\s/g, "").toLowerCase().match(l[window.currentLanguage].matcher);
		if (r) {
			if (r[1]) {
				switch (r[1]) {
					case m.common.now:
						return {start: e, end: e, now: e};
					case m.common.today:
						return i(2, 0);
					case m.common.thisweek:
						var s = moment.utc(e).startOf("week").toDate();
						return i(2, 0, 7, s);
					case m.common.lastweek:
						return i(2, -6, 7);
					case m.common.thismonth:
						return i(1, 0);
					case m.common.thisyear:
						return i(0, 0);
					case m.common.yesterday:
						return i(2, -1);
					case m.common.beforeyesterday:
						return i(2, -2);
					case m.common.pastweek:
						var s = moment.utc(e).startOf("week").toDate();
						return i(2, -8, 7, s);
					case m.common.lastmonth:
						return i(1, -1);
					case m.common.lastyear:
						return i(0, -1);
					case m.common.tomorrow:
						return i(2, 1);
					case m.common.nextweek:
						return i(2, 7, 7);
					case m.common.nextmonth:
						return i(1, 1);
					case m.common.nextyear:
						return i(0, 1)
				}
				return console && console.log && void 0, null
			}
			if (r[2]) {
				var t = a(e), p = r[2].match(/^(?:(\d{4})(?:\-(\d\d))?(?:\-(\d\d))?)? ?(?:(\d{1,2})(?:\:(\d\d)(?:\:(\d\d))?)?)?$/);
				if (!p)return null;
				p.shift();
				for (var o = 0, u = !1, v = 0; 7 > v; v++)p[v] ? (t[v] = parseInt(p[v], 10), o = v, u = !0) : u && (t[v] = 3 > v ? 1 : 0);
				var q = d(t, o);
				return g(q, h)
			}
			if (r[3]) {
				var t = a(e), p = r[3].match(/^(?:(\d\d))(?:\.(\d\d))?(?:\.(\d{4})?)? ?(?:(\d{1,2})(?:\:(\d\d)(?:\:(\d\d))?)?)?$/);
				if (null === p)return null;
				p.shift(), t[0] = p[2], t[1] = p[1], t[2] = p[0];
				var q = d(t, 3);
				return g(q, h)
			}
			if (r[4]) {
				var w = r[4].match(m.dayMatcher), x = parseInt(w[1], 10);
				return {rel: x * n._relTokens[w[2]]}
			}
			return console && console.log && void 0, null
		}
	}

	function i(a, b, c) {
		if ("[object RegExp]" !== Object.prototype.toString.call(b))return o.call(a, b, c);
		var d, e, f, g, h = [], i = (b.ignoreCase ? "i" : "") + (b.multiline ? "m" : "") + (b.extended ? "x" : "") + (b.sticky ? "y" : ""), j = 0, b = new RegExp(b.source, i + "g");
		for (a += "", p || (d = new RegExp("^" + b.source + "$(?!\\s)", i)), c = void 0 === c ? -1 >>> 0 : c >>> 0; (e = b.exec(a)) && (f = e.index + e[0].length, !(f > j && (h.push(a.slice(j, e.index)), !p && e.length > 1 && e[0].replace(d, function () {
			for (var a = 1; a < arguments.length - 2; a++)void 0 === arguments[a] && (e[a] = void 0)
		}), e.length > 1 && e.index < a.length && Array.prototype.push.apply(h, e.slice(1)), g = e[0].length, j = f, h.length >= c)));)b.lastIndex === e.index && b.lastIndex++;
		return j === a.length ? (g || !b.test("")) && h.push("") : h.push(a.slice(j)), h.length > c ? h.slice(0, c) : h
	}

	function j(a, b, c) {
		return new Date(Date.UTC(a, b - 1, c, 0, 0, 0, 0))
	}

	function k(a, b, c) {
		return new Date(+j(a, b, c))
	}

	var l = {
		ru: {
			lettersRange: "а-яё",
			matcher: /^([а-яё ]+)$|^([ 0-9:-]+)$|^([ 0-9:\\.]+)$|^(\d+[а-яё]+)$/,
			dayMatcher: /(\d+)\s*([а-яё]+)/i,
			fullDateMatcher: /(\d{1,2})\s*([а-яё ]+)\s*(\d{2,4})/i,
			momentFormats: ["DD-MM-YYYY", "YYYY-MM-DD", "DD.MM.YYYY", "DD.MM.YY", "DD MMM YYYY", "DD MMMM YYYY", "D MMM YYYY", "D MMMM YYYY", "MMM YYYY", "MMMM YYYY", "DD MMM", "DD MMMM", "D MMM", "D MMMM", "MMM YY", "MMMM YY", "До DD.MM.YYYY", "MMM", "MMMM"],
			rangeMatchers: [/с\s*([\d\wа-яА-ЯёЁ .-]+)\s*по\s*([\d\wа-яА-ЯёЁ .-]+)/, /([\dа-я.-]+)\s*(?:[-—])\s*([\dа-я.-]+)/i],
			alias: {yr: "г,год,года,лет", mon: "ме,мес,месяц,месяцев", day: "д,де,дн,день,дней", hr: "ч,ча,час,часа,часов", min: "м,мин,минута,минут", sec: "с,сек,секунд,секунда"},
			common: {
				now: "сейчас",
				today: "сегодня",
				thisweek: "нанеделе",
				lastweek: "занеделю",
				thismonth: "вэтоммесяце",
				thisyear: "вэтомгоду",
				yesterday: "вчера",
				beforeyesterday: "позавчера",
				pastweek: "напрошлойнеделе",
				lastmonth: "впрошломмесяце",
				lastyear: "впрошломгоду",
				tomorrow: "завтра",
				nextweek: "наследующейнеделе",
				nextmonth: "вследующеммесяце",
				nextyear: "наследующемгоду"
			}
		},
		en: {
			lettersRange: "a-z",
			matcher: /^([a-z ]+)$|^([ 0-9:-\\.]+)$|^(\d+[a-z]+)$/,
			dayMatcher: /(\d+)\s*([a-z]+)/i,
			fullDateMatcher: /(\d{1,2})\s*([а-яё ]+)\s*(\d{2,4})/i,
			momentFormats: ["DD-MM-YYYY", "YYYY-MM-DD", "DD.MM.YYYY", "DD.MM.YY", "DD MMM YYYY", "DD MMMM YYYY", "D MMM YYYY", "D MMMM YYYY", "MMM YYYY", "MMMM YYYY", "DD MMM", "DD MMMM", "D MMM", "D MMMM", "MMM YY", "MMMM YY", "Before DD.MM.YYYY", "MMM", "MMMM"],
			rangeMatchers: [/^from\s*([\d\w.-]+)\s*to\s*([\d\w.-]+)$/, /^([\d\w.-]+)\s*(?:[-—])\s*([\d\w.-]+)$/],
			alias: {yr: "y,yr,yrs,year,years", mon: "mo,mon,mos,mons,month,months", day: "d,dy,dys,day,days", hr: "h,hr,hrs,hour,hours", min: "m,min,mins,minute,minutes", sec: "s,sec,secs,second,seconds"},
			common: {
				now: "now",
				today: "today",
				thisweek: "thisweek",
				lastweek: "lastweek",
				thismonth: "thismonth",
				thisyear: "thisyear",
				yesterday: "yesterday",
				beforeyesterday: "beforeyesterday",
				pastweek: "pastweek",
				lastmonth: "lastmonth",
				lastyear: "lastyear",
				tomorrow: "tomorrow",
				nextweek: "nextweek",
				nextmonth: "nextmonth",
				nextyear: "nextyear"
			}
		}
	}, m = l[window.currentLanguage], n = window.dateRangeParser = {};
	n.defaultRange = 864e5, n.now = null, function () {
		n._relTokens = {};
		var a = {yr: 31536e6, mon: 26784e5, day: 864e5, hr: 36e5, min: 6e4, sec: 1e3}, b = m.alias;
		for (var c in b)if (b.hasOwnProperty(c))for (var d = b[c].split(","), e = 0; e < d.length; e++)n._relTokens[d[e]] = a[c]
	}(), n.unifiedDate = function (a) {
		return "number" == typeof a ? a = moment.utc(a) : a instanceof Date && (a = moment.utc([a.getFullYear(), a.getMonth(), a.getDate()])), a
	}, n.parse = function (a, b) {
		b = b || {}, b.max && (b.max = n.unifiedDate(b.max)), b.min && (b.min = n.unifiedDate(b.min));
		var c = b.now || this.now || (new Date).getTime();
		if (!a)return {start: null, end: null};
		for (var d = 0; d < m.rangeMatchers.length; d++)a = a.replace(m.rangeMatchers[d], "$1 -> $2");
		if (a.match(/\d\s*(-|–|—)\s*\d/) && (a = a.replace(/(-|–|—)/, "->")), " ".split(/\s+/)[1])var f = a.split(/\s*([^<>]*[^<>-])?\s*(->|<>|<)?\s*([^<>]+)?\s*/); else var f = i(a, /\s*([^<>]*[^<>-])?\s*(->|<>|<)?\s*([^<>]+)?\s*/);
		var g = f[1] ? h(f[1], c, b) : null, j = f[2] || "", k = f[3] ? h(f[3], c, b) : null;
		k && k.end && !g && /^\d+$/.test($.trim(f[1])) && /\d+/.test($.trim(f[3])) && (g = {start: moment.utc(k.end).clone().date(+f[1]).toDate()}, g.end = g.start);
		var l = e(j, g, k, c);
		return l
	}, n.parseToDate = function (a, b) {
		var c = n.parse(a, b);
		if (!c)return null;
		var d = {};
		return c.start && (d.start = new Date(c.start)), c.end && (d.end = new Date(c.end)), d
	};
	var o = String.prototype.split, p = void 0 === /()??/.exec("")[1];
	window.UTCDate = j, n.testCases = [{value: "сегодня", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2015, 6, 9), end: k(2015, 6, 9)}}, {
		value: "за неделю",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2015, 6, 3), end: k(2015, 6, 9)}
	}, {value: "в этом месяце", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2015, 6, 1), end: k(2015, 6, 9)}}, {
		value: "в этом году",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2015, 1, 1), end: k(2015, 6, 9)}
	}, {value: "вчера", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2015, 6, 8), end: k(2015, 6, 8)}}, {
		value: "позавчера",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2015, 6, 7), end: k(2015, 6, 7)}
	}, {value: "на прошлой неделе", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2015, 6, 1), end: k(2015, 6, 7)}}, {
		value: "в прошлом месяце",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2015, 5, 1), end: k(2015, 5, 31)}
	}, {value: "в прошлом году", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2014, 1, 1), end: k(2014, 12, 31)}}, {
		value: "2015",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2015, 1, 1), end: k(2015, 6, 9)}
	}, {value: "2014", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2014, 1, 1), end: k(2014, 12, 31)}}, {
		value: "1999",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(1999, 12, 31), end: k(1999, 12, 31)}
	}, {value: "декабрь", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2014, 12, 1), end: k(2014, 12, 31)}}, {
		value: "июнь",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2015, 6, 1), end: k(2015, 6, 9)}
	}, {value: "март", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2015, 3, 1), end: k(2015, 3, 31)}}, {
		value: "5 марта",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2015, 3, 5), end: k(2015, 3, 5)}
	}, {value: "9 июня", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2015, 6, 9), end: k(2015, 6, 9)}}, {
		value: "10 июня",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {}
	}, {value: "9 декабря", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2014, 12, 9), end: k(2014, 12, 9)}}, {
		value: "9 декабря",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2017, 6, 9)},
		out: {start: j(2014, 12, 9), end: k(2014, 12, 9)}
	}, {value: "9 декабря 2010", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2010, 12, 9), end: k(2010, 12, 9)}}, {
		value: "март 2010",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2010, 3, 1), end: k(2010, 3, 31)}
	}, {value: "10.10.2010", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2010, 10, 10), end: k(2010, 10, 10)}}, {
		value: "10.10.10",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2010, 10, 10), end: k(2010, 10, 10)}
	}, {value: "с 10 апреля по 20 апреля", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2015, 4, 10), end: k(2015, 4, 20)}}, {
		value: "с 10 по 20 апреля",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2015, 4, 10), end: k(2015, 4, 20)}
	}, {value: "с 10 по 20 апреля 2014", options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)}, out: {start: j(2014, 4, 10), end: k(2014, 4, 20)}}, {
		value: "Январь-Март",
		options: {now: j(2015, 6, 9), min: j(1999, 12, 31), max: j(2015, 6, 9)},
		out: {start: j(2015, 1, 1), end: k(2015, 3, 31)}
	}], n.runTests = function () {
		for (var a = 0, b = 0, c = 0; c < n.testCases.length; c++) {
			var d = n.testCases[c], e = n.parseToDate(d.value, d.options);
			if (null == d.out || null == e)var f = d.out == e; else var g = {start: d.out.start ? +d.out.start : "", end: d.out.end ? +d.out.end : ""}, h = {
				start: e.start ? +e.start : "",
				end: e.end ? +e.end : ""
			}, f = JSON.stringify(h) == JSON.stringify(g);
			if (!f);
			b += !f, a += !!f
		}
	}
}(), function (a) {
	"use strict";
	function b(b, c) {
		this.options = c, this.$element = a(b), this.isInput = this.$element.is("input");
		var d = moment(this.$element.attr("min") || this.$element.data("min"), "YYYY-MM-DD"), e = moment(this.$element.attr("max") || this.$element.data("max"), "YYYY-MM-DD");
		if (d.isValid() && (this.min = d.toDate()), e.isValid() && (this.max = e.toDate()), this.isInput) {
			var f = this.$element.val();
			"" !== f && (this.value = moment(f, ["YYYY-MM-DD", "DD.MM.YYYY"]).toDate())
		} else this.value = moment(this.$element.data("value"), ["YYYY-MM-DD", "DD.MM.YYYY"]).toDate();
		this.min || (this.min = moment("1900-01-01").toDate()), this.max || (this.max = moment().toDate()), this.format = this.$element.data("format") || "dd.mm.yyyy", this.zIndex = this.$element.data("zindex"), this.isRange = this.$element.data("range"), this.init()
	}

	a.fn.zIndex = function (b) {
		if (void 0 !== b)return this.css("zIndex", b);
		if (this.length)for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
			if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d))return d;
			e = e.parent()
		}
		return 0
	}, b.prototype.init = function () {
		function b() {
			var b = c.$element.data("target");
			if (b) {
				var e = c.calendar.format(c.value, c.format), f = b.replace("since", "till");
				a(b).val(e), a(b).closest("form").find(f).val(e), c.$element.text(c.calendar.format(c.value, c.format)), a('form[name="results_search"]').submit(), d.removeClass("is-active"), d.addClass("is-loading")
			} else if (c.isInput)c.$element.val(c.calendar.format(c.value, c.format)).trigger("change"); else if (c.value) {
				var g = c.value.toISOString();
				c.loadByDate(g)
			}
			c.hide()
		}

		var c = this, d = this.$element;
		this.$element.on("click", this.toggle.bind(this)), this.offset = {x: 0, y: 20};
		try {
			{
				this.$element.data("value").toString().split(" ")[0]
			}
		} catch (e) {
		}
		if (window.isTablet.any() || window.isMobile.any()) {
			var f = document.createElement("div");
			f.className = "calendar-container";
			var g = a('<span "current-value"></span>');
			g.text(d.text()), d.empty().append(g), d.find("input").remove(), d.append('<input type="date"/>');
			var h = d.find("input");
			return h.attr("min", d.data("min")), h.attr("max", d.data("max")), this.value && h.val(moment(this.value).format("YYYY-MM-DD")), h.css({
				position: "absolute",
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				opacity: 0,
				"z-index": 10
			}), void h.on("blur", function () {
				var b = c.$element.data("target");
				if (b) {
					var e = new Date(h.val());
					a(b).val(moment(e).format("DD.MM.YYYY")), c.$element.find(".current-value").text(moment(e).format("DD.MM.YYYY")), a(".search_results").find("form").submit(), d.removeClass("is-active"), d.addClass("is-loading")
				} else c.loadByDate(h.val())
			})
		}
		this.value && this.value.setHours(0, 0, 0), a(window).on("click.calendar", function (b) {
			a(b.target).closest(".calendar-container").length <= 0 && (d.removeClass("is-active"), c.hide())
		});
		var i = a("html").prop("lang");
		this.calendar = new Calendar(f, i, this.min, this.max, {
			isRange: this.isRange,
			reversed: !this.isRange
		}), this.isInput && "date" === this.$element.prop("type") && (this.$element.prop("type", "text"), this.value && this.$element.val(moment(this.value).format(this.format.toUpperCase())));
		var j = a(this.calendar.container);
		j.on("click", function (e) {
			if (a(e.target).closest(".dateblock") && (e.stopPropagation(), e.preventDefault()), a(e.target).hasClass("calendar-day") && !a(e.target).hasClass("calendar-not-this-month")) {
				var f = a(e.target).data("datetime"), g = new Date(Date.parse(f));
				if (d[0] === e.target)return;
				c.value = g, b()
			}
		}), this.$element.data("url") ? j.addClass("calendar-grey") : j.removeClass("calendar-grey"), j.on("select.range", function (d, e) {
			if (e && e.start && e.end) {
				var f = Math.floor((e.end - e.start) / 864e5);
				0 === f && (c.value = e.start, b()), a(".search__since_value", a('form[name="results_search"]')).val(c.calendar.format(e.start, c.format)), a(".search__till_value", a('form[name="results_search"]')).val(c.calendar.format(e.end, c.format)), a('form[name="results_search"]').submit()
			}
		});
		var k = {}, l = {}, m = {};
		j.on("render.month", function (b) {
			var e;
			e = b.detail ? b.detail : b.originalEvent.detail;
			var f = e.year(), g = e.month() + 1, h = d.data("url");
			if (h) {
				h = h.replace("YEAR", f).replace("MONTH", g);
				var i = e.year().toString(), j = i + e.month().toString();
				if (l.hasOwnProperty(f)) {
					var n = l[f + ""], o = n[g];
					o && c.setEnabledDates(e, o)
				} else {
					if (m[j] = !0, k.hasOwnProperty(i))return;
					k[i] = a.get(h).done(function (b) {
						var d;
						if (b && b.dates && (a.isArray(b.dates) && b.dates.length > 0 && (d = b.dates, c.setEnabledDates(e, d)), a.isPlainObject(b.dates))) {
							l[f] = b.dates;
							for (var g in b.dates) {
								var h = f.toString() + (g - 1).toString();
								m[h] && (c.setEnabledDates(new Date(f, g - 1, 1), b.dates[g]), delete m[h])
							}
						}
					})
				}
			}
		}), j.on("remove.month", function (a) {
			var b;
			b = a.detail ? a.detail : a.originalEvent.detail;
			var c = b.year().toString() + b.month().toString(), d = k[c];
			d && (d.abort(), delete k[c])
		}), this.$element.unbind("click").click(function (b, d) {
			b.stopPropagation(), b.preventDefault(), c.isVisible ? c.hide() : c.show(d), a.each(a.fn.datepick.pickers, function (a, b) {
				b !== c && b.hide()
			})
		}), this.calendar && (this.value ? this.calendar.setSelection(this.value) : this.calendar.fill(new Date))
	}, b.prototype.toggle = function (a) {
		a.stopPropagation()
	}, b.prototype.reposition = function () {
		var b = a(this.calendar.container), c = this.$element.get(0).getBoundingClientRect();
		b.css({position: "fixed", left: c.left + this.$element.outerWidth() / 2 - b.outerWidth() / 2 + this.offset.x, top: c.top + this.$element.outerHeight() + this.offset.y, zIndex: this.zIndex})
	}, b.prototype.show = function (b) {
		if (!this.isVisible) {
			var c = a(this.calendar.container);
			a(document.body).append(c), c.show(), this.$element.addClass("is-active");
			var d = this;
			if (a(window).bind("scroll.picker", function () {
					d.reposition()
				}), a(window).bind("resize.picker", debounce(function () {
					d.reposition()
				}, 300)), this.reposition(), this.value)this.calendar.setSelection(this.value); else {
				var e = new Date;
				this.calendar.fill(e), this.calendar.setSelection(e)
			}
			this.calendar.isVisible = !0, this.isVisible = !0, b && b.shouldFocusOnInput ? (this.calendar.renderYearsDropdown(), this.calendar.renderInput(), a(this.calendar.dateInput).removeAttr("aria-hidden").focus()) : a(this.calendar.accessibleInput).focus()
		}
	}, b.prototype.hide = function () {
		this.isVisible && (this.$element.removeClass("is-active"), a(this.calendar.container).hide(), a(window).unbind("scroll.picker"), a(window).unbind("resize.picker"), this.calendar.isVisible = !1, this.isVisible = !1, this.$element.trigger("hide"))
	}, b.prototype.setValue = function (b) {
		var c = this.$element.data("target");
		if (b.setHours(0, 0, 0), this.value = b, this.calendar && this.calendar.setSelection(this.value), c)a(c).val(moment(b).format("DD.MM.YYYY")); else {
			var d = this.$element.text(), e = moment(b).format(this.format.toUpperCase());
			d !== e && (window.isTablet.any() || window.isMobile.any() ? this.$element.find(".current-value").text(e) : this.$element.text(e)), this.$element.val(this.isInput && "date" === this.$element.prop("type") ? moment(b).format("YYYY-MM-DD") : moment(b).format("DD.MM.YYYY"))
		}
	}, b.prototype.setEnabledDate = function (b, c) {
		if (this.calendar) {
			b = this.calendar.unifiedDate(b).clone().date(c);
			var d = this.calendar.getDateCell(b);
			d && a(d).addClass("enabled")
		}
	}, b.prototype.setEnabledDates = function (a, b) {
		for (var c = 0; c < b.length; c++)this.setEnabledDate(a, b[c])
	}, b.prototype.loadByDate = function (a) {
		var b = new Date(Date.parse(a)), c = moment(b).format("DD.MM.YYYY"), d = this, e = this.$element.data("date-url");
		e && (e = e.replace("DATE", c)), this.$element.text(moment(b).format("MMMM, YYYY")), window.router.one("loaded.by-date", function () {
			window.router.off("loaded.by-date"), d.$element.removeClass("is-loading")
		}), this.$element.addClass("is-loading"), window.router.handleURL(e)
	}, b.prototype.destroy = function () {
		this.hide(), this.calendar && (a(this.calendar.container).detach(), this.calendar = null)
	}, a.fn.datepick = function (c) {
		this.each(function () {
			var d = a(this), e = d.data("datepick"), f = "object" == typeof c && c;
			if (!e) {
				var g = new b(this, f);
				a.fn.datepick.pickers.push(g), d.data("datepick", e = g)
			}
		})
	}, a.fn.datepick.pickers = []
}(jQuery), function () {
	"use strict";
	function a(a, b, c, d, e) {
		this.localize(b ? b : "en"), this.min = this.unifiedDate(c), this.max = this.unifiedDate(d), this.options = e, this.direction = "down", a = document.createElement("div"), a.className = "calendar-container", this.container = a, this.wrapperDate = document.createElement("div"), this.wrapperDate.className = "calendar-wrapper-date", this.container.appendChild(this.wrapperDate), this.container.appendChild(this.renderHeader()), this.scrollContainer = document.createElement("div"), this.scrollContainer.className = "scroll-view calendar-scroll-view", this.scrollContainer.setAttribute("aria-hidden", "true"), this.container.appendChild(this.scrollContainer), this.table = document.createElement("div"), this.table.className = "_table", this.body = document.createElement("div"), this.body.className = "body", this.table.appendChild(this.body), this.scrollContainer.appendChild(this.table), this.renderYearsDropdown(), this.renderInput(), this.boundEvents = {
			mouseMove: this.onMouseMove.bind(this),
			mouseLeave: this.onMouseLeave.bind(this),
			mouseScroll: this.onMouseScroll.bind(this),
			mouseWheel: this.onMouseWheel.bind(this),
			click: this.click.bind(this)
		}, $(this.container).bind("click", this.boundEvents.click), $(this.container).bind("mousemove", this.boundEvents.mouseMove), $(this.container).bind("mouseleave", this.boundEvents.mouseLeave), $(this.container).bind("mousewheel", this.boundEvents.mouseWheel);
		var f = this;
		$(this.container).bind("mousedown.calendar", function (a) {
			f.lastEventTime = a.timeStamp, f.hasMouseDown = !0
		}), $(document.body).bind("mouseup.calendar", function () {
			f.isVisible && f.hasMouseDown && (f.hasMouseDown = !1, f.onMouseScroll())
		}), $(this.scrollContainer).bind("scroll", this.boundEvents.mouseScroll), this.date = moment.utc().startOf("day"), this.monthHeaderMap = {}, this.rowsMap = {}, this.monthSpan = 4, this.monthsRendered = 0, this.renderedRange = new DateRange
	}

	var b = _('Укажите интересующую вас дату. После заполнения поля нажмите клавишу "Enter". Несколько примеров того, как можно задать дату, приведены ниже.'), c = _('Укажите интересующую вас дату. После заполнения поля нажмите клавишу "Enter". Несколько примеров того, как можно задать дату и период времени, приведены ниже.'), d = {
		dateInFuture: _("Неправильно указана дата."),
		dateNotParsed: _("Неправильно указана дата.")
	}, e = {
		en: {
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			dayNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			shortWeekDayNames: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			placeholder: "Enter date",
			help: [b, "Examples", "26 January 2015", "26.01.2015", "January 2015", "yesterday"],
			rangeHelp: [c, "Examples", "26 January 2015", "26.01.2015", "26.01.2015 - 12.02.2015", "January-February", "January 2015", "yesterday"],
			errors: d
		},
		ru: {
			monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
			dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
			shortWeekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
			placeholder: "Поиск по дате",
			help: [b, "Примеры", "26 января 2015", "26.01.2015", "Январь 2015"],
			rangeHelp: [c, "Примеры", "26 января 2015", "26.01.2015", "26.01.2015 - 12.02.2015", "Январь-Март", "Январь 2015", "вчера"],
			errors: d
		}
	};
	moment.locale(window.currentLanguage), a.prototype.classes = {
		row: "calendar-row",
		header: "calendar-header",
		day: "calendar-day",
		today: "calendar-today",
		input: "calendar-input-date"
	}, a.prototype.localize = function (a) {
		this.locale = a;
		var b;
		b = e[a] ? e[a] : e.en;
		for (var c in b)b.hasOwnProperty(c) && (this[c] = b[c])
	}, a.prototype.daysInMonth = function (a) {
		return moment.utc(a).endOf("month").date()
	}, a.prototype.firstDayOfWeek = function (a) {
		return a.clone().startOf("week")
	}, a.prototype.isToday = function (a) {
		var b = moment();
		return b.year() == a.year() && b.month() == a.month() && b.date() == a.date()
	}, a.prototype.nearTheEdge = function () {
		var a = this.scrollContainer.scrollTop, b = this.scrollContainer.scrollHeight, c = this.scrollContainer.offsetHeight, d = 0 + a, e = 0 + b - a - c, f = 100;
		return {top: 0 > d - f, bottom: 0 > e - f}
	}, a.prototype.onMouseMove = function (a) {
		if ($(a.target).hasClass(this.classes.day)) {
			var b = $(a.target).data("datetime"), c = new Date(b);
			this.highLightWeekDay(c.getDay())
		}
	}, a.prototype.onMouseLeave = function () {
		this.unhighLightWeekDays()
	}, a.prototype.onMouseWheel = function (a, b, c, d) {
		var e = $(this.scrollContainer).prop("scrollTop"), f = $(this.scrollContainer).prop("scrollHeight") - $(this.scrollContainer).outerHeight();
		(d > 0 && 0 === e || 0 > d && e === f) && (a.preventDefault(), this.onMouseScroll(a)), $(this.container).find(".calendar-wrapper-date").is(".is-active-input") || $(this.container).find(".dropdown").is(".opened") || $(".calendar-wrapper-date").toggleClass("closed", "down" === this.direction)
	}, a.prototype.onMouseScroll = function () {
		if (!this.doNotListenScrolling && !this.hasMouseDown) {
			var a = this.scrollContainer, b = a.scrollTop;
			0 === b && this.renderPrev(), a.scrollHeight - a.scrollTop - a.offsetHeight === 0 && this.renderNext(), this._lastScrollTop = b;
			for (var c in this.monthHeaderMap)if (this.monthHeaderMap.hasOwnProperty(c)) {
				var d = this.monthHeaderMap[c];
				if (b - Math.abs($(d).position().top) > 0) {
					var e = moment.utc([parseInt($(d).data("year"), 10), parseInt($(d).data("month"), 10), 1]);
					this.updateDropdownValue(e);
					break
				}
			}
		}
	}, a.prototype.click = function () {
		this.dropDown && this.hideYearDropdownList()
	}, a.prototype.renderYearsDropdown = function () {
		if (!this.yearDropdownRendered) {
			var a = document.createElement("div");
			a.className = "calendar-year-dropdown", a.setAttribute("aria-hidden", "true");
			var b = document.createElement("div");
			b.className = "dropdown";
			var c = document.createElement("div");
			c.className = "current-value";
			var d = document.createElement("ul");
			d.className = "dropdown_list";
			var e, f, g = (document.createElement("select"), this.min.year()), h = this.max.year();
			for (g = 1900 > g ? g + 1900 : g, h = 1900 > h ? h + 1900 : h, f = h - g; f >= 0; f--) {
				e = g + f;
				var i = document.createElement("li");
				i.innerHTML = e, i.className = "list-item", g === e && ($(i).addClass("current"), i.setAttribute("aria-selected", "true")), i.value = e, i.setAttribute("role", "menuitem"), d.appendChild(i)
			}
			c.innerHTML = h, b.appendChild(c), b.appendChild(d), a.appendChild(b);
			var j = this;
			$(d).on("mousewheel", function (a, b, c, e) {
				var f = $(d).prop("scrollTop"), g = $(d).prop("scrollHeight") - $(d).outerHeight();
				(e > 0 && 0 === f || 0 > e && f === g) && a.preventDefault()
			}), $(b).on("click", function (a) {
				if (a.stopPropagation(), !$(b).hasClass("opened") || $(a.target).hasClass("dropdown_list") || $(a.target).hasClass("list-item")) {
					if (j.showYearDropdownList(), $(a.target).hasClass("list-item") && !$(a.target).hasClass("current")) {
						j.onYearDropdownChange(a);
						for (var e = 0; e < d.childNodes.length; e++)$(d.childNodes[e]).removeClass("current");
						$(a.target).addClass("current"), c.innerHTML = a.target.value, j.hideYearDropdownList()
					}
				} else j.hideYearDropdownList()
			}), this.dropDown = b, this.dropDownCurrentValue = c, this.dropDownList = d, $(this.wrapperDate).prepend(a), this.yearDropdownRendered = !0
		}
	}, a.prototype.showYearDropdownList = function () {
		$(this.dropDown).addClass("opened"), $(this.wrapperDate).addClass("is-active-dropdown"), this.dropDownList.style.display = "block"
	}, a.prototype.hideYearDropdownList = function () {
		$(this.dropDown).removeClass("opened"), $(this.wrapperDate).removeClass("is-active-dropdown"), this.dropDownList.style.display = "none"
	}, a.prototype.onYearDropdownChange = function (a) {
		var b = parseInt(a.target.value, 10);
		this.doNotListenScrolling = !0, this.empty();
		var c = this.renderedRange.start.clone().year(b).month(0);
		this.isFilled = !1, this.fill(c), this.doNotListenScrolling = !1
	}, a.prototype.updateDropdownValue = function (a) {
		if (this.dropDownCurrentValue) {
			for (var b, c = a.year(), d = 0; d < this.dropDownList.childNodes.length; d++)$(this.dropDownList.childNodes[d]).removeClass("current"), parseInt(this.dropDownList.childNodes[d].innerHTML, 10) === c && (b = this.dropDownList.childNodes[d]);
			b && $(b).addClass("current"), this.dropDownCurrentValue.innerHTML = c
		}
	}, a.prototype.renderHeader = function () {
		var a = document.createElement("div");
		a.className = this.classes.header;
		var b = document.createElement("div");
		b.className = "thead", a.appendChild(b), a.setAttribute("aria-hidden", "true");
		for (var c = document.createElement("div"), d = 7, e = d - 1; e >= 0; e--) {
			var f = document.createElement("div");
			f.innerHTML = this.shortWeekDayNames[e], f.className = "calendar-week-day", c.appendChild(f)
		}
		return b.appendChild(c), this.weekDaysRow = c, a
	}, a.prototype.renderInput = function () {
		function a() {
			$(g).fadeIn(300)
		}

		if (!this.inputRender) {
			var b = this, c = document.createElement("div");
			c.className = this.classes.input;
			var d = document.createElement("input");
			d.setAttribute("aria-describedby", "calendar-help"), d.className = "special-hidden", c.appendChild(d);
			var f = document.createElement("input");
			f.setAttribute("aria-describedby", "calendar-help"), f.setAttribute("aria-hidden", "true"), c.appendChild(f);
			var g = document.createElement("div"), h = document.createElement("div");
			h.className = "calendar-help-description", g.className = "calendar-help", g.id = "calendar-help";
			var i = document.createElement("ul");
			i.setAttribute("tabindex", 0);
			var j = e[this.locale].help;
			this.options && this.options.isRange && (j = e[this.locale].rangeHelp);
			for (var k = 1; k < j.length; k++) {
				var l = document.createElement("li"), m = j[k];
				1 === k ? l.className = "calendar-help-caption" : ($(l).on("click", function () {
					$(f).val($(this).text()).trigger("keyup", {submit: !0})
				}), m += '<span class="special-hidden">,</span>'), l.innerHTML = m, i.appendChild(l)
			}
			h.innerHTML = j[0], g.appendChild(h), g.appendChild(i), this.container.appendChild(g), f.placeholder = e[this.locale].placeholder, f.setAttribute("aria-describedby", "calendar-help"), $(f).on("mouseenter", function () {
				$(c).closest(".calendar-wrapper-date").addClass("is-hover-input"), "requestAnimationFrame" in window ? $(f).one("transitionend webkitTransitionEnd otransitionend MSTransitionEnd", a) : a(), b.hideYearDropdownList()
			}).on("mouseleave", function () {
				$(f).data("hasFocus") || ($(g).fadeOut(200), $(c).closest(".calendar-wrapper-date").removeClass("is-hover-input"), $(f).off("webkitTransitionEnd transitionend otransitionend MSTransitionEnd"))
			}).on("focus", function () {
				$(c).closest(".calendar-wrapper-date").addClass("is-active-input"), $(g).show(), $(f).data("hasFocus", !0)
			}).on("blur", function () {
				$(c).closest(".calendar-wrapper-date").removeClass("is-active-input is-hover-input"), $(f).off("webkitTransitionEnd transitionend otransitionend MSTransitionEnd"), $(g).fadeOut(200), $(f).data("hasFocus", !1)
			}), this.lastInputValue = null, this.lastParsedRange = null, this.lastParsedDate = null, $(f).on("keyup", this.onInput.bind(this)), $(d).on("keyup", this.onAccessibleInput.bind(this)), $(this.wrapperDate).prepend(c), this.dateInput = f, this.inputRender = !0, this.inputHelp = g, this.inputContainer = c, this.accessibleInput = d
		}
	}, a.prototype.onAccessibleInput = function (a, b) {
		this.dateInput.value = this.accessibleInput.value, this.onInput(a, b)
	}, a.prototype.onInput = function (a, b) {
		function c(a, b) {
			a ? ($(d).removeClass("error"), $(d).removeAttr("title")) : ($(d).addClass("error"), $(d).attr("title", b || f.errors.dateInFuture))
		}

		var d = this.dateInput, f = e[this.locale], g = $(this.dateInput).val();
		if (g) {
			if (this.lastInputValue !== g) {
				this.lastInputValue = g;
				var h = dateRangeParser.parse(g, {min: this.min, max: this.max});
				if (h && h.start) {
					this.lastParsedRange = h;
					var i = moment.utc(h.start), j = moment.utc(h.end);
					this.lastParsedRange = {start: +i, end: +j}, this.lastParsedDate !== i && (this.isFilled = !1, this.fill(i), this.setSelection(i), this.lastParsedDate = i), c(!0)
				} else c(!1, f.errors.dateNotParsed), this.lastParsedRange = null
			}
			if (this.lastParsedRange && (13 === a.keyCode || b && b.submit)) {
				if ($(this.inputHelp).hide(), $(this.inputContainer).removeClass("is-active"), $(this.inputContainer).next(".calendar-year-dropdown").show(), this.options && !this.options.isRange) {
					var k = this.options.reversed ? this.lastParsedRange.end : this.lastParsedRange.start;
					this.lastParsedRange = {start: +k, end: +k}
				}
				var l = new DateRange(this.unifiedDate(this.lastParsedRange.start), this.unifiedDate(this.lastParsedRange.end));
				$(this.container).trigger("select.range", [l]), this.lastParsedRange = null, this.isFilled = !1, this.fill(l.start)
			}
		}
	}, a.prototype.renderDay = function (a) {
		var b = document.createElement("div");
		return b.className = this.classes.day, b.innerHTML = a.date(), $(b).data("datetime", a.toISOString()), this.isToday(a) && $(b).addClass(this.classes.today), !this.lastRange.start.isSame(a, "month") || a.isAfter(this.max) || a.isBefore(this.min) ? ($(b).addClass("calendar-not-this-month"), $(b).html("&#8226;")) : $(b).attr("title", a.format("D MMMM YYYY, dddd")), this.selection && +a == +this.selection && !$(b).hasClass("calendar-not-this-month") && (this.selectedDayContainer = b, $(b).addClass("active")), b
	}, a.prototype.renderWeek = function (a, b) {
		var c, d = 7, e = moment.utc(a).startOf("week"), f = e.clone().add(1, "week");
		if (!(this.min && f.isBefore(this.min) || this.max && moment.utc(e).isAfter(this.max))) {
			var g = document.createElement("div");
			g.className = this.classes.row;
			for (var h = d - 1; h >= 0; h--)c = e.clone().add(h, "days"), g.appendChild(this.renderDay(c));
			var i = b.year() + "" + b.month();
			return this.rowsMap[i] ? this.rowsMap[i].push(g) : this.rowsMap[i] = [g], $(g).data("month", b.month()), $(g).data("year", b.year()), g
		}
	}, a.prototype.empty = function () {
		for (var a in this.rowsMap)if (this.rowsMap.hasOwnProperty(a)) {
			for (var b = this.rowsMap[a], c = 0; c < b.length; c++)b[c].parentNode.removeChild(b[c]);
			delete this.rowsMap[a]
		}
		for (a in this.monthHeaderMap)if (this.monthHeaderMap.hasOwnProperty(a)) {
			var d = this.monthHeaderMap[a];
			d.parentNode.removeChild(d), delete this.monthHeaderMap[a]
		}
		this.monthsRendered = 0
	}, a.prototype.removeMonth = function () {
		var a;
		a = "up" === this.direction ? this.renderedRange.start : this.renderedRange.end;
		var b = a.year() + "" + a.month(), c = this.rowsMap[b];
		if (c) {
			for (var d = 0; d < c.length; d++)c[d].parentNode.removeChild(c[d]);
			delete this.rowsMap[b]
		}
		var e = this.monthHeaderMap[b];
		e && e.parentNode.removeChild(e), delete this.monthHeaderMap[b], "up" === this.direction ? this.renderedRange.start = a.clone().add(1, "month").startOf("month") : this.renderedRange.end = a.clone().add(-1, "month").endOf("month").startOf("day"), this.monthsRendered--;
		var f = jQuery.Event("delete", {detail: a});
		jQuery(this.container).trigger(f)
	}, a.prototype.renderMonth = function (a) {
		this.doNotListenScrolling = !0, this.monthsRendered > this.monthSpan && this.removeMonth();
		var b = moment.utc(a).startOf("month"), c = b.clone().endOf("month").startOf("day"), d = new DateRange(b, c);
		if (!(this.max && moment.utc(b).isAfter(this.max) || this.min && moment.utc(c).isBefore(this.min))) {
			var e = this.scrollContainer.scrollHeight;
			"up" === this.direction ? (this.renderWeeks(d), this.renderMonthHeader(a)) : (this.renderMonthHeader(a), this.renderWeeks(d)), "up" === this.direction && (this.scrollContainer.scrollTop += this.scrollContainer.scrollHeight - e);
			var f = jQuery.Event("render", {detail: a});
			jQuery(this.container).trigger(f), this.monthsRendered++, this.doNotListenScrolling = !1
		}
	}, a.prototype.renderMonthHeader = function (a) {
		var b = document.createElement("div");
		b.className = "calendar-month-header";
		var c = document.createElement("div");
		c.innerHTML = this.format(a, "mmmm, yyyy"), b.appendChild(c), "up" === this.direction ? $(this.table).prepend(b) : this.table.appendChild(b), $(b).data("month", a.month()), $(b).data("year", a.year()), this.monthHeaderMap[a.year() + "" + a.month()] = b
	}, a.prototype.renderWeeks = function (a) {
		this.lastRange = a;
		for (var b = a.start.clone().startOf("week"), c = [], d = 0; +b <= +a.end;) {
			var e = this.renderWeek(b, a.start);
			e && c.push(e), b = b.clone().add(1, "week")
		}
		if ("up" === this.direction)for (d; d < c.length; d++)$(this.table).prepend(c[d]); else for (c = c.reverse(), d = 0; d < c.length; d++)this.table.appendChild(c[d]);
		(!this.renderedRange.start || this.renderedRange.start.isAfter(a.start)) && (this.renderedRange.start = a.start), (!this.renderedRange.end || this.renderedRange.end.isBefore(a.end)) && (this.renderedRange.end = a.end)
	}, a.prototype.renderNext = function () {
		if (this.renderedRange.start) {
			var a = this.renderedRange.start.clone().subtract(1, "day").startOf("month"), b = a.clone().endOf("month").startOf("day");
			return this.min && +this.min <= +b && !this.renderedRange.isInside(a) ? (this.direction = "down", this.renderMonth(a), !0) : !1
		}
	}, a.prototype.renderPrev = function () {
		if (this.renderedRange.end) {
			var a = this.renderedRange.end.clone().add(1, "day");
			return this.max && +this.max >= +a && !this.renderedRange.isInside(a) ? (this.direction = "up", this.renderMonth(a), !0) : !1
		}
	}, a.prototype.fill = function (a) {
		return this.isFilled ? void 0 : (this.empty(), a = this.unifiedDate(a), this.renderedRange.start = a.clone().startOf("month"), this.renderedRange.end = a.clone().endOf("month").startOf("day"), a.clone().subtract(2, "month").isBefore(this.min) ? (a = this.min.clone(), this.renderMonth(a), this.renderPrev(), void this.renderPrev()) : void(a.isAfter(this.max) || (this.renderMonth(a), this.renderNext(), this.renderNext(), this.isFilled = !0)))
	}, a.prototype.getDate = function () {
		return this.date
	}, a.prototype.setDate = function (a) {
		this.date = moment.utc(a).startOf("day")
	}, a.prototype.setSelection = function (a) {
		if (a = this.unifiedDate(a), !this.selection || +a != +this.selection) {
			this.selection = a, this.selectedDayContainer && $(this.selectedDayContainer).removeClass("active");
			var b = this.getDateCell(a), c = !1;
			b ? (this.selectedDayContainer = b, $(b).addClass("active"), c = !0) : (this.isFilled = !1, this.fill(a)), this.scrollToMonth(a, c)
		}
	}, a.prototype.getDateCell = function (a) {
		if (a) {
			a = this.unifiedDate(a);
			var b = a.year() + "" + a.month();
			if (this.rowsMap[b])for (var c = this.rowsMap[b], d = 0; d < c.length; d++) {
				var e = c[d], f = $(e).find(".calendar-day").filter(function (b, c) {
					var d = moment.utc($(c).data("datetime"));
					return d.month() === a.month() && d.date() === a.date()
				});
				if (1 === f.length)return f.get(0)
			}
		}
	}, a.prototype.unifiedDate = dateRangeParser.unifiedDate, a.prototype.scrollToMonth = function (a) {
		a = this.unifiedDate(a);
		var b = a.year() + "" + a.month(), c = this.monthHeaderMap[b]
	}, a.prototype.highLightWeekDay = function (a) {
		this.unhighLightWeekDays(), 0 == a && (a = 7), $(this.weekDaysRow.childNodes[7 - a]).addClass("hover")
	}, a.prototype.unhighLightWeekDays = function () {
		for (var a = 0; a < this.weekDaysRow.childNodes.length; a++)$(this.weekDaysRow.childNodes[a]).removeClass("hover")
	}, a.prototype.format = function (a, b) {
		function c(a, b) {
			for (a = "" + a, b = b || 2; a.length < b;)a = "0" + a;
			return a
		}

		function d(a, b) {
			return a.replace(/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g, function (a) {
				return a in b ? b[a] : a
			})
		}

		a = this.unifiedDate(a);
		var f = a.date(), g = a.day(), h = a.month() + 1, i = a.year(), j = $("<a/>"), k = {
			d: f,
			dd: c(f),
			ddd: e[this.locale].shortWeekDayNames[g],
			dddd: e[this.locale].dayNames[g],
			m: h,
			mm: c(h),
			mmmm: e[this.locale].monthNames[h - 1],
			yy: String(i).slice(2),
			yyyy: i
		}, l = d(b, k);
		return j.html(l).html()
	}, window.Calendar = a
}(), $(function () {
	"use strict";
	function a() {
		c.any() && b.addClass("mobile"), c.Android() && b.addClass("android"), d.any() && b.addClass("tablet")
	}

	var b = $(document.body), c = {
		Android: function () {
			return navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Mobile/i)
		}, BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i)
		}, iOS: function () {
			return navigator.userAgent.match(/iPhone|iPod/i)
		}, Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i)
		}, Windows: function () {
			return navigator.userAgent.match(/IEMobile/i)
		}, any: function () {
			return c.Android() || c.BlackBerry() || c.iOS() || c.Opera() || c.Windows()
		}
	}, d = {
		Android: function () {
			return navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/Mobile/i)
		}, iOS: function () {
			return navigator.userAgent.match(/iPad/i)
		}, any: function () {
			return d.iOS() || d.Android()
		}
	};
	window.isMobile = c, window.isTablet = d, a()
}), function () {
	"use strict";
	function a(b) {
		if (void 0 !== a._singleton)return a._singleton._updateConfiguration(b), a._singleton;
		var c = a._singleton = this;
		this.router = b, this.views = [], this._activeView = null, this._namedViews = {}, $(window).on("keydown.view-manager", this.onKeyDown.bind(this)), $(window).on("click.view-manager", this.onClick.bind(this)), $(window).on("resize.view-manager", this.onResize.bind(this)), $(window).on("hashchange.view-manager", function () {
			function a(a) {
				var b = viewManager.getView(a), c = b.currentURL;
				return location.hash && -1 != location.hash.indexOf("=") ? c += "readerView" == a ? location.hash : "" : c && location.hash.length > 1 && b.element.find(location.hash) && (c += location.hash), c
			}

			var b = {contentView: a("contentView"), readerView: a("readerView")};
			c.router.updateState(b, $.url().attr("relative"), document.title)
		});
		var c = this;
		c._updateViewportState(), $(function () {
			c._updateViewportState()
		}), this.isSafari = !1;
		var d = navigator.userAgent.toLowerCase();
		return -1 !== d.indexOf("safari") && d.indexOf("chrome") <= -1 && (this.isSafari = !0), this
	}

	a.prototype.on = function (a, b, c, d) {
		$(this).on(a, b, c, d)
	}, a.prototype.one = function (a, b, c, d) {
		$(this).one(a, b, c, d)
	}, a.prototype.off = function (a, b, c, d) {
		$(this).off(a, b, c, d)
	}, a.prototype.trigger = function (a, b) {
		$(this).trigger(a, b)
	}, a.prototype.openReader = function () {
		var a = this.getView("readerView");
		a.isActive = !0, contentView.isActive = !1, a.open()
	}, a.prototype.closeReader = function (a) {
		var b = this.getView("readerView"), c = this.getView("contentView");
		b.isActive = !1, b.currentURL = null, c.isActive = !0, b.isClosed || this.hideReaderView(a)
	}, a.prototype.closeGallery = function () {
		function a() {
			b.isClosed = !0, c.setActiveView("readerView"), window.location.hash = "", $(document.body).removeClass("is-viewing"), $(b.container).hide(), $(b.container).off("webkitTransitionEnd transitionend otransitionend MSTransitionEnd")
		}

		var b = this.getView("galleryView"), c = this;
		b.isClosed || ($(b.container).removeClass("is-active"), $(".read").show(), "requestAnimationFrame" in window ? $(b.container).one("webkitTransitionEnd transitionend otransitionend MSTransitionEnd", a) : a())
	}, a.prototype.getActiveView = function () {
		return this._activeView
	}, a.prototype.hideReaderView = function (a) {
		var b = this.getView("readerView");
		b.close(a)
	}, a.prototype.setActiveView = function (a) {
		for (var b = ["contentView", "readerView", "galleryView"], c = 0; c < b.length; c++) {
			var d = b[c];
			if (d === a) {
				var e = this.getView(a);
				e === this._activeView && this.trigger("viewactivate", [a, e]), this._activeView = e
			}
		}
	}, a.prototype._updateConfiguration = function (a) {
		a && (this.router = a)
	}, a.prototype.addView = function (a, b) {
		this.views.push(a), b && (this._namedViews[b] = a)
	}, a.prototype.getView = function (a) {
		return this._namedViews[a]
	}, a.prototype.linkViews = function () {
		for (var a = 0; a < this.views.length; a++)this.views[a].attachToDOM();
		this.setActiveView(this.getView("readerView").isEmpty() ? "contentView" : "readerView")
	}, a.prototype.refresh = function () {
		for (var a = 0; a < this.views.length; a++)this.views[a].refresh()
	}, a.prototype.isInternalHost = function (a) {
		var b = (window.config.internalDomains, new RegExp("^(?:[\\w-\\.]+\\.)?(" + $.url().attr("host") + "|" + window.config.internalDomains.replace(/\./g, "\\.") + ")$"));
		return b.test(a)
	}, a.prototype.isLinkExternal = function (a) {
		{
			var b = $.url(), c = (b.attr("host"), b.attr("path"), $.url(a.href));
			c.attr("relative").split("#")[1]
		}
		return !a.href || $(a).hasClass("no-warning") ? !1 : 0 === a.href.indexOf("mailto:") || 0 === a.href.indexOf("tel:") ? !1 : !a.rel || "alternate" !== a.rel && "contact" !== a.rel ? !a.rel || "external" !== a.rel && "license" !== a.rel ? !this.isInternalHost(c.attr("host")) : !0 : !1
	}, a.prototype.shouldHandleLink = function (a) {
		if (!a.href)return !1;
		if (this.isLinkExternal(a))return !1;
		var b = $(a);
		if (b.hasClass("text_version_link"))return !1;
		if (b.hasClass("more-next") || b.hasClass("more-prev"))return !1;
		if (b.hasClass("nav__link_search") && !$(document.body).hasClass("is-mobile"))return !1;
		{
			var c = $.url(a.href);
			c.attr("relative").split("#")[1]
		}
		if (a.rel && "alternate" === a.rel)return !1;
		if (c.attr("file"))return !1;
		if (b.data("no-ajax") || b.data("special"))return !1;
		var d = $.url(), e = d.attr("host"), f = d.attr("path"), g = "/press/accreditation/request", h = f.substr(0, 28), i = c.attr("path").substr(0, 28);
		return c.attr("host") !== d.attr("host") || h != g && i != g || h == i ? c.attr("host") === e : !1
	}, a.prototype.onClick = function (a) {
		var b, c = a.target;
		if (!(a.metaKey || a.ctrlKey || a.shiftKey || 0 !== a.button || a.isDefaultPrevented())) {
			for (; c && "A" !== c.nodeName;)c = c.parentNode;
			if (c && "A" === c.nodeName && c.href && this.shouldHandleLink(c)) {
				if (b = c.getAttribute("href"), a.preventDefault(), a.stopPropagation(), $(c).hasClass("share_print_link"))return void window.print();
				if ("#" != b) {
					var d = {}, e = this.elementToView(c);
					if (e && e.startAnchorPreloader) {
						var f = e.startAnchorPreloader(c);
						e.completeAnchorPreloader && (d.onLoaded = function () {
							e.completeAnchorPreloader(f)
						}), e.cancelAnchorPreloader && (d.onFailed = function () {
							e.cancelAnchorPreloader(f)
						}, d.onAbort = "onFailed")
					}
					$(c).hasClass("has-updates") && (d.shouldNavigate = !1, d.force = !0), router.handleURL(b, d)
				}
			}
		}
	}, a.prototype.elementToView = function (a) {
		var b = $(a);
		return b.closest(".content-view").length ? this.getView("contentView") : b.closest(".subnav-view").length ? this.getView("subNavView") : b.closest(".topline").length ? this.getView("topView") : b.closest(".read").length ? this.getView("readerView") : void 0
	}, a.prototype.urlToView = function (a) {
		for (var b = 0; b < this.views.length; b++) {
			var c = this.views[b];
			if ("function" == typeof c.testRoute && c.testRoute(a))return c
		}
	}, a.prototype.onKeyDown = function (a) {
		var b = $("body");
		switch (a.keyCode) {
			case 27:
				if (b.is(".is-withsidebar") || b.is(".is-search") || b.is(".leaving_site"))return;
				if (this.getView("galleryView") === this.getActiveView())this.closeGallery(); else {
					var c = this.getView("readerView");
					c.close()
				}
		}
	}, a.prototype._updateViewportState = function () {
		function a() {
			var a = document.createElement("p");
			a.style.width = "100%", a.style.height = "200px";
			var b = document.createElement("div");
			b.style.position = "absolute", b.style.top = "0px", b.style.left = "0px", b.style.visibility = "hidden", b.style.width = "200px", b.style.height = "150px", b.style.overflow = "hidden", b.appendChild(a), document.body.appendChild(b);
			var c = a.offsetWidth;
			b.style.overflow = "scroll";
			var d = a.offsetWidth;
			return c === d && (d = b.clientWidth), document.body.removeChild(b), c - d
		}

		function b() {
			var b, d = $(document.body), e = window.innerWidth || $(window).width(), f = 0, g = 1574;
			f = a(), c.isSafari ? (b = g >= e ? 2 * f : f, g + b >= e ? d.removeClass("is-wide").addClass("is-narrow") : d.addClass("is-wide").removeClass("is-narrow")) : g >= e ? d.removeClass("is-wide").addClass("is-narrow") : d.addClass("is-wide").removeClass("is-narrow")
		}

		var c = this, d = this.getView("contentView");
		d && d.isLoading ? d.one("render", function () {
			b(), d.isLoading = !1
		}) : b()
	}, a.prototype.onResize = function () {
		this._updateViewportState(), $(document.body).hasClass("is-wide") && paginator.resume()
	}, a.prototype.onRoute = function (a, b, c, d, e) {
		"initial" !== e.from && viewManager.closeGallery();
		var f = this.getView("sidebarView");
		f.$element.trigger("close")
	}, window.ViewManager = a
}(), function (a) {
	"use strict";
	a.fn.formActive = function (b) {
		var c = a(this), d = c.find("input, textarea"), e = c.find("select"), f = d.length;
		if (c.hasClass("docs_search") || c.hasClass("doc_filter"))return void c.addClass("complete");
		var g = function () {
			setTimeout(function () {
				var a = c.find(".valid").length;
				"validate" === b && f === a ? c.addClass("complete") : "novalidate" === b && c.addClass("complete")
			}, 100)
		};
		d.on("keyup", function () {
			a(this).val() ? g() : c.removeClass("complete")
		}).on("change", function () {
			a(this).val() ? g() : c.removeClass("complete")
		}), e.on("change", function () {
			c.addClass("complete")
		}), d.each(function () {
			a(this).not(":hidden").val() && g()
		})
	}
}(window.jQuery), function (a) {
	"use strict";
	function b(b, d) {
		this.$element = a(b);
		var e = this;
		a.fn.mediaelementplayer ? e.init(d) : a.getScript(c + "mediaelement-and-player.js").done(function (b) {
			f = b, "en" !== currentLanguage ? a.getScript(c + "me-i18n-locale-" + currentLanguage + ".js").done(function () {
				e.init(d)
			}) : e.init(d)
		})
	}

	var c = (window.config ? window.config.staticUrl : "/static/") + "js/lib/", d = {
		customError: _("Пожалуйста, для просмотра видео, установите") + ' <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash</a> ' + _("or") + ' <a href="http://www.microsoft.com/getsilverlight/" target="_blank">Silverlight</a>.',
		enablePseudoStreaming: !0,
		enablePluginSmoothing: !0,
		iPadUseNativeControls: !0,
		iPhoneUseNativeControls: !0,
		hideVideoControlsOnLoad: !0,
		defaultAudioHeight: 40,
		videoVolume: "horizontal",
		aspectRatio: 16 / 9,
		pluginPath: (window.config ? window.config.staticUrl : "/static/") + "js/vendor/",
		features: ["playpause", "current", "progress", "duration", "tracks", "volumeext", "quality", "fullscreen"],
		toggleCaptionsButtonWhenOnlyOne: !0
	}, e = {startLanguage: currentLanguage};
	"en" == currentLanguage && (d = a.extend({}, d, e));
	var f = null;
	b.prototype.init = function (b) {
		var c = this, e = a.extend(!0, {
			success: function (a, d, e) {
				c.mediaElement = e, e.$media.addClass("processed"), e.showControls(), setTimeout(function () {
					e.media.addEventListener("play", function () {
						c.$element.trigger("play"), window.inactivityDisabled = !0
					}, !1), e.media.addEventListener("pause", function () {
						var a = !1;
						for (var b in mejs.players)if (mejs.players.hasOwnProperty(b)) {
							var c = mejs.players[b];
							c.media && (c = c.media), c.paused || c.ended || (a = !0)
						}
						a || (window.inactivityDisabled = !1)
					}, !1), e.media.addEventListener("error", c.onError.bind(c), !1), b.autoPlay && e.play(), e.setControlsSize(), e.container.on("collapse", function () {
						c.$element.trigger("collapse", e.collapsed)
					})
				}, 200), c.$element.trigger("success")
			}, error: function (a) {
				c.onError.call(c, a)
			}
		}, d, b);
		this.$element.find("video:not(.processed),audio:not(.processed)").mediaelementplayer(e), this.$element.on("pause", this.onPause.bind(this)), this.$element.find(".media__link, .media__videolink").remove(), this.player = this.$element.data("mediaelementplayer")
	}, b.prototype.onError = function (a) {
		this.mediaElement && (this.mediaElement.container.addClass("error"), this.mediaElement.disableControls()), this.$element.length && this.$element.addClass("error"), window.NotificationCenter.notify(_("Извините, произошла ошибка загрузки видео"))
	}, b.prototype.onPause = function () {
		this.player.killControlsTimer("enter"), this.player.showControls()
	}, a.fn.player = function (c) {
		return this.each(function () {
			var d = a(this), e = d.data("player"), f = "object" == typeof c && c;
			e || d.data("player", e = new b(this, f))
		})
	}, window.bindMediaLinks = function () {
		a(".media__videolink, .media__pic img").on("click", function (b) {
			b.preventDefault(), b.stopPropagation(), a(this).closest(".media__container").player({autoPlay: !0})
		})
	}, window.bindMediaLinks()
}(jQuery), function () {
	"use strict";
	function a(a) {
		this.options = a, this.container = a.container, this.currentPageIndex = 0, this.pageNumber = a.pageNumber, this.lastPositionX = 0, this.lastPositionY = 0, this.scroller = document.createElement("div"), this.scroller.className = "pager__scroller", this.scrollerLine = document.createElement("div"), this.scrollerLine.className = "pager__scroller_line", this.scroller.appendChild(this.scrollerLine), this.scroller.classList.add("horizontal" === a.direction ? "pager__horizontal" : "pager__vertical"), this.bounds = {
			knobMouseEnter: this.onKnobMouseEnter.bind(this),
			knobMouseLeave: this.onKnobMouseLeave.bind(this),
			knobMouseDown: this.onKnobMouseDown.bind(this),
			knobMouseUp: this.onKnobMouseUp.bind(this),
			documentMouseMove: this.onDocumentMouseMove.bind(this),
			documentMouseDown: this.onDocumentMouseDown.bind(this),
			documentMouseUp: this.onDocumentMouseUp.bind(this),
			scrollerMouseEnter: this.onScrollerMouseEnter.bind(this),
			scrollerMouseLeave: this.onScrollerMouseLeave.bind(this),
			scrollerClick: this.onScrollerClick.bind(this)
		}, this.knob = document.createElement("div"), this.knob.className = "pager__knob", this.knob.style.display = "none", this.knob.addEventListener("mouseenter", this.bounds.knobMouseEnter, !1), this.knob.addEventListener("mouseleave", this.bounds.knobMouseLeave, !1), this.knob.addEventListener("mousedown", this.bounds.knobMouseDown, !1), this.knob.addEventListener("mouseup", this.bounds.knobMouseUp, !1), this.scroller.appendChild(this.knob), this.container.appendChild(this.scroller), this.informer = document.createElement("div"), this.informer.className = "pager__informer", this.informer.style.display = "none", this.container.appendChild(this.informer), this.scroller.addEventListener("mouseenter", this.bounds.scrollerMouseEnter, !1), this.scroller.addEventListener("mouseleave", this.bounds.scrollerMouseLeave, !1), this.scroller.addEventListener("click", this.bounds.scrollerClick, !1)
	}

	a.prototype.onDocumentMouseDown = function () {
		document.body.classList.add("unselectable")
	}, a.prototype.onDocumentMouseUp = function () {
		document.body.removeEventListener("mousemove", this.bounds.documentMouseMove), this.isDraggingKnob = !1, document.body.classList.remove("unselectable")
	}, a.prototype.onDocumentMouseMove = function (a) {
		"horizontal" === this.options.direction ? this.knob.style.left = a.pageX + "px" : this.knob.style.top = a.pageY + "px", this.lastPositionX = a.pageX, this.lastPositionY = a.pageY
	}, a.prototype.onScrollerMouseEnter = function () {
		this.knob.style.display = "block"
	}, a.prototype.onScrollerMouseLeave = function () {
		this.knob.style.display = "none"
	}, a.prototype.onScrollerClick = function () {
		this.knob.style.display = "none"
	}, a.prototype.onKnobMouseEnter = function () {
		this.informer.style.display = "block"
	}, a.prototype.onKnobMouseLeave = function () {
		this.isDraggingKnob || (this.informer.style.display = "none")
	}, a.prototype.onKnobMouseDown = function () {
		document.body.addEventListener("mousemove", this.bounds.documentMouseMove, !1), document.body.addEventListener("mousedown", this.bounds.documentMouseDown, !1), document.body.addEventListener("mouseup", this.bounds.documentMouseUp, !1), this.isDraggingKnob = !0
	}, a.prototype.onKnobMouseUp = function () {
		document.body.removeEventListener("mousemove", this.bounds.documentMouseMove), this.isDraggingKnob = !1
	}, window.Pager = a
}(), function (a) {
	"use strict";
	function b(a) {
		this.isShareOpened = !1, this.container = a.container, this.locale = window.currentLanguage, this.hideTimeout = 0, this.init()
	}

	b.prototype.init = function () {
		this.show(), this.bindEvents()
	}, b.prototype.bindEvents = function () {
		a(this.container).find(".share_send_email").on("click", this.mailShow.bind(this)), a(this.container).find("i").on("click", this.toggle.bind(this)), a(this.container).on("mouseleave", this.hideTimeOut.bind(this)), a(this.container).on("mouseenter", this.clearHideTimeOut.bind(this)), a(this.container).find(".share_link_p").on("touchstart mouseenter", this.setSelection.bind(this)), a(this.container).find(".over_tabs").on("touchstart", this.hide.bind(this)), a(this.container).find(".krln-share_list .share_to_site").on("click", this.share.bind(this)), this.send()
	}, b.prototype.send = function () {
		function b(b) {
			var c, e = a(b), f = e.serializeArray(), g = e.attr("action"), h = {};
			e.data("submitting") || e.length && (a(f).each(function () {
				h[this.name] = this.value
			}), h.sid = a.cookie("sid"), e.data("submitting", !0), a.post(g, h, function (a) {
				a.success ? (c = setTimeout(function () {
					c && clearTimeout(c), d.hide()
				}, 2e3), NotificationCenter.notify(_("Сообщение успешно отправлено"))) : NotificationCenter.notify(_(a.error))
			}).fail(function () {
				NotificationCenter.notify(_("Произошла ошибка!"))
			}).complete(function () {
				e.data("submitting", !1)
			}))
		}

		function c(b) {
			return a(b).attr("title")
		}

		var d = this, e = a(d.container).find(".emailform");
		e.validate({messages: {mailto: {required: c}}, ignoreTitle: !0, submitHandler: b}), e.formActive("validate")
	}, b.prototype.show = function () {
		function b() {
			c && clearTimeout(c), a(e.container).addClass("hover is-animating"), e.isShareOpened = !0
		}

		if (!this.isShareOpened) {
			var c, d = a(this.container).find(".share_material"), e = this;
			d.show(), "requestAnimationFrame" in window ? window.requestAnimationFrame(b) : c = setTimeout(b, 1), a(e.container).find(".share_material").on("transitionend webkitTransitionEnd otransitionend MSTransitionEnd", function () {
				a(e.container).removeClass("is-animating")
			})
		}
	}, b.prototype.mailShow = function (b) {
		function c() {
			d && clearTimeout(d), e.addClass("is-visible")
		}

		b.preventDefault();
		var d, e = a(this.container).find(".share_mail");
		e.show(), "requestAnimationFrame" in window ? window.requestAnimationFrame(c) : d = setTimeout(c, 1)
	}, b.prototype.hide = function () {
		function b() {
			c.hide(), c.off("transitionend webkitTransitionEnd otransitionend MSTransitionEnd")
		}

		if (this.isShareOpened) {
			var c = a(this.container).find(".share_material");
			a(this.container).removeClass("hover"), "requestAnimationFrame" in window ? c.one("transitionend webkitTransitionEnd otransitionend MSTransitionEnd", b) : b(), this.isShareOpened = !1
		}
	}, b.prototype.toggle = function () {
		a(this.container).hasClass("hover") ? this.hide() : this.show()
	}, b.prototype.hideTimeOut = function () {
		if (this.isShareOpened && !a(this.container).hasClass("is-animating") && !a("#email").is(":focus")) {
			var b = this;
			b.hideTimeout = setTimeout(function () {
				b.hide(), b.clearSelection()
			}, 500)
		}
	}, b.prototype.clearHideTimeOut = function () {
		clearTimeout(this.hideTimeout)
	}, b.prototype.setSelection = function (b) {
		var c, d, e = a(b.currentTarget).get(0);
		document.createRange ? (d = window.getSelection(), window.setTimeout(function () {
			d.selectAllChildren && d.selectAllChildren(e)
		}, 100)) : (c = document.body.createTextRange(), c.moveToElementText(e), c.select())
	}, b.prototype.clearSelection = function () {
		try {
			window.getSelection().removeAllRanges()
		} catch (a) {
			document.selection.empty()
		}
	}, b.prototype.share = function (b) {
		if (!("standalone" in window.navigator && window.navigator.standalone || window.isMobile.Android())) {
			b.preventDefault();
			var c = {width: 600, height: 600}, d = {
				vkontakte: {width: 604, height: 451},
				twitter: {width: 530, height: 257},
				livejournal: {width: 665, height: 980},
				facebook: {width: 585, height: 300},
				googleplus: {width: 584, height: 361}
			}, e = a(b.target).data("service");
			e && d.hasOwnProperty(e) && (c = d[e]), c.width = Math.min(c.width, a(window).width()), c.height = Math.min(c.height, a(window).height());
			var f = window.screenX + a(window).width() / 2 - c.width / 2, g = window.screenY + a(window).height() / 2 - c.height / 2, h = window.open("", "sharer", "menubar=no,toolbar=0,status=0,scrollbar=yes,width=" + c.width + ",height=" + c.height + ",left=" + f + ",top=" + g);
			h.location.href = a(b.target).data("href") || b.target.href
		}
	}, window.Share = b, a.fn.shared = function (c) {
		return this.each(function () {
			var d = a(this), e = d.data("shared");
			if (!e) {
				var f = "object" == typeof c && c;
				f = a.extend({container: d}, f), d.data("shared", e = new b(f))
			}
		})
	}
}(jQuery), function (a) {
	"use strict";
	function b(a) {
		this.element = a.element, this.container = a.container, this.preload = a.preload, this.preview = a.preview, this.init()
	}

	b.prototype.init = function () {
		this.bindEvents()
	}, b.prototype.bindEvents = function () {
		a(this.element).on("change", this.change.bind(this)), a(this.container).find(".file_remove").on("click", this.remove.bind(this))
	}, b.prototype.formatName = function (b, c) {
		var d = a(b).val();
		"files" in b && b.files.length > 0 && (d = b.files[0].name), d = d.replace(/^.*[\\\/]/, ""), c.find(".file_name").text(d)
	}, b.prototype.change = function (b) {
		var c = b.currentTarget, d = a(c), e = a(this.container).find(".file-loaded");
		this.preload === !0 ? this.editorialOnChange(b) : (d.css("visibility", "hidden"), a(this.container).find(".submit").hide(), this.formatName(c, e), e.show())
	}, b.prototype.remove = function (b) {
		b.preventDefault();
		var c = a(b.currentTarget);
		if (c.closest(".file-loaded").hide(), a(this.element).css("visibility", "visible").val("").trigger("focusout"), a(this.container).find(".submit").show(), this.preload === !0) {
			var d = a(this.element).attr("name").replace("_", "-").replace("file-", "");
			a("#" + d).val(""), "photo" === d && (a("#photo-img").attr("src", "").show(), a("#photo-img").width("").height(""))
		}
	}, b.prototype.editorialOnChange = function (b) {
		var c = this, d = b.currentTarget, e = a(d), f = e.attr("name").replace("_", "-"), g = f.replace("file-", ""), h = a(c.container).find(".file-loaded");
		this.element = e.clone(), a(this.element).change(this.editorialOnChange.bind(this)).insertBefore(e);
		var i = a("#" + f + "-form").empty();
		i.append(a("<input type='hidden' name='sid'>").val(a.cookie("sid"))), e.removeAttr("id").appendTo(i), i.submit(), a("." + f + "-input-error-msg").hide(), a(c.container).find(".submit").addClass("is-loading"), a("#" + f + "-frame").load(function (b) {
			b.preventDefault();
			var f;
			void 0 !== b.target.contentDocument.data ? f = b.target.contentDocument.data : b.target.contentWindow ? f = b.target.contentWindow.data : b.target.document && (f = b.target.document.body.innerText), f ? f.valid ? (a("#" + g).val(f.uid), a("#" + g + "-link").attr("href", f.path + "?" + b.timeStamp).show(), "photo" === g && (a("#photo-img").attr("src", f.path + "?" + b.timeStamp).show(), a("#photo-img").width(200).height(300)), a(c.container).find(".file_input").hide(), a(c.container).find(".submit").hide(), c.formatName(d, h), h.show()) : (window.NotificationCenter.notify(f.error), a("#photo-img").width("").height("")) : window.NotificationCenter.notify(_("Ошибка серевера")), a(c.container).find(".submit").removeClass("is-loading"), a(this).unbind("load"), e.removeClass("is-loading")
		})
	}, window.InputFile = b, a.fn.inputFile = function (c) {
		return this.each(function () {
			var d = a(this), e = d.data("inputFile");
			if (!e) {
				var f = "object" == typeof c && c;
				f = a.extend({element: a(this), container: a(this).closest(".form__input_file")}, f), d.data("inputFile", e = new b(f))
			}
		})
	}
}(window.jQuery), $(document).ready(function () {
	"use strict";
	function a(a) {
		F = !1, o.removeClass("animation");
		var b = a.originalEvent.changedTouches[0];
		G = b.pageX, H = b.pageY
	}

	function b(a) {
		var b, c = a.originalEvent.changedTouches[0];
		F = !0, o.addClass("animation");
		var d = c.pageY - H;
		b = 0 > d ? "translateY(-" + i + "px)" : "translateY(0)", o.css({"-webkit-transform": b + " translateZ(0)"}), y = setTimeout(function () {
			F = !1, o.removeClass("animation")
		}, 750)
	}

	function c() {
		I = j.height(), J = k.height()
	}

	function d() {
		return F || p ? void(p = !1) : (g = o.find(".subnav_countries"), I = j.height(), z = window.scrollY || k.scrollTop(), A = z > q, B = Math.abs(q - z), q = z, h = A, s = 1 === B ? B : B / 3, r += A ? -s : s, (r > 60 || 0 >= z) && (r = 60), (0 > r || z > I - J) && (r = 0), z >= 60 ? g.length && (g.hide(), g.next().hide()) : g.length && (g.show(), g.next().show()), D = r - i, void(E !== D && (C = Modernizr.csstransforms3d ? "translate3d(0," + D + "px,0)" : "translateY(" + D + "px)", t ? o.css({"-webkit-transform": C}) : u || v || w ? o.css({
			position: "absolute",
			top: D
		}) : (o.css({"-webkit-transform": C}), o.css({"-moz-transform": C}), o.css({"-o-transform": C}), o.css({"-ms-transform": C}), o.css({transform: C})), o.data({y: r}), E = D)))
	}

	function e() {
		k.on("scroll.submenu", d), k.on("touchstart.submenu", a), k.on("touchmove.submenu", d), k.on("touchend.submenu", b)
	}

	function f() {
		k.off("scroll.submenu", d), k.off("touchstart.submenu", a), k.off("touchmove.submenu", d), k.off("touchend.submenu", b)
	}

	var g, h, i = $(".topline").height(), j = $(document), k = $(window), l = ".subnav-view .wrapfix__holder:not(.wrapfix__holder_small) .wrapfix", m = $(l), n = ".subnav-view .wrapfix__holder:not(.wrapfix__holder_small) .content_top__wrap", o = $(n), p = !0, q = k.scrollTop(), r = 0, s = 1, t = !1, u = !1, v = !1, w = !1, x = navigator.userAgent.toLowerCase();
	-1 !== navigator.appName.indexOf("Internet Explorer") && (u = -1 !== navigator.appVersion.indexOf("MSIE 6"), v = -1 !== navigator.appVersion.indexOf("MSIE 7"), w = -1 !== navigator.appVersion.indexOf("MSIE 8")), -1 !== x.indexOf("safari") && (t = x.indexOf("chrome") <= -1), window.isTablet.iOS() && m.css({
		transform: "none",
		"-webkit-transform": "none"
	});
	var y, z, A, B, C, D, E, F = !1, G = 0, H = 0, I = j.height(), J = k.height();
	k.on("resize", c), window._reinitStickNav = function () {
		p = !0, m = $(l), o = $(n), o.length ? e() : f()
	}, o.length && e()
}), function () {
	function a(a) {
		var b = $("html").attr("lang");
		return "en" === b ? {География: "Geography", "Несколько стран": "Several countries", "Несколько регионов": "Several regions"}[a] : a
	}

	function b(a, b) {
		return Math.round(1e3 * a) === Math.round(1e3 * b)
	}

	function c() {
		function a() {
		}

		var b = $("#map-region-picker");
		b.length || (b = $('<ul id="map-region-picker"></ul>'), b.mouseleave(a).appendTo(document.body), $(document.body).click(a));
		var c = $("#map-bubble");
		c.length || (c = $('<div id="map-bubble"><div id="regiontitle"></div></div>'), c.appendTo(document.body))
	}

	function d(d, e, f) {
		function g(a, b) {
			function c(a, b, c, d, e) {
				for (b = Math.max(0, b); c > b;) {
					var f = a.getPointAtLength(b);
					if (Math.pow(q.x - f.x, 2) + Math.pow(q.y - f.y, 2) <= d)return b;
					b += e
				}
				return null
			}

			function d(b) {
				var c = b.id.split("_")[1];
				c in f && (b === a || f[c].active) && -1 === w.indexOf(c) && w.push(c)
			}

			if ("svg" !== o.canvas.mode) {
				var e = a.id.split("_")[1];
				if (e in f)return [e]
			}
			var g = 4;
			"svg" === a.tagName && (g *= 2), window.devicePixelRatio && (g *= window.devicePixelRatio);
			var h = o.canvas.canvas, i = h.getBoundingClientRect();
			if (h.getIntersectionList) {
				var j = o.canvas.canvas.createSVGRect();
				j.x = b.clientX - i.left - g, j.y = b.clientY - i.top - g, j.width = 2 * g, j.height = 2 * g;
				var k = h.getIntersectionList(j, null)
			} else for (var l = {left: b.clientX - g, right: b.clientX + g, top: b.clientY - g, bottom: b.clientY + g}, k = [], m = o.rootGroup.childNodes.length; m--;) {
				var n = o.rootGroup.childNodes[m], p = n.getBoundingClientRect();
				l.left > p.right || p.left > l.right || l.top > p.bottom || p.top > l.bottom || k.push(n)
			}
			var q = o.canvas.canvas.createSVGPoint();
			q.x = b.clientX - i.left, q.y = b.clientY - i.top;
			var r = o.canvas.canvas.getTransformToElement(o.rootGroup);
			q = q.matrixTransform(r);
			var s = Math.pow(g / o.scale, 2), t = Math.pow(4 * g / o.scale, 2), u = g / o.scale / 2, v = 4 * u, w = [];
			d(a);
			for (var m = k.length; m--;) {
				var n = k[m];
				if (n != a)for (var x = 0, y = n.getTotalLength(); null !== x && y > x;)if (x = c(n, x, y, t, v), null !== x) {
					var z = c(n, x - v + u, x + v - u, s, u);
					if (null !== z) {
						d(n);
						break
					}
					x += v
				}
			}
			return w
		}

		function h(a) {
			o.reorder([]), k.hide();
			var b = $(a.relatedTarget);
			b && !b.is("#map-region-picker") && !b.parents("#map-region-picker").length
		}

		var i;
		d = $(d);
		var j = {CL1: "#606778", CL2: "#B9BEC8", CL3: "#606778", CL4: "#8C92A0", CL5: "#606778", CL6: "#E2E3E4", CL7: "#606778", CL8: "#0A3FB4", ST1: .3, ST2: .3};
		d.css("height", d.width() * e.svg_height / e.svg_width), c();
		var k = $("#map-bubble"), l = k.find("#regiontitle"), m = $("#map-region-picker"), n = $('<div class="map-scale"><button class="scale-minus world"><i></i></button><button class="scale-plus"><i></i></button></div>').insertBefore(d);
		n.find("button").bind("click", function () {
			var a = $(this).hasClass("scale-plus") ? o.scale / .67 : .67 * o.scale;
			if (a = o.correctScale(a), Math.round(1e4 * o.scale) === Math.round(1e4 * a)) {
				if ($(this).hasClass("scale-minus") && "russia" === e.name) {
					o.animate({scale: .25, transX: 1400, transY: -50, check: !1});
					var b = d.parents(".trips_map").find(".map-world");
					loadAndRunMap(b, "world", !0), window.setTimeout(function () {
						var a = $('path[id$="_RU"]')[0];
						a && a.setFill(j.CL4)
					}, 400), window.setTimeout(function () {
						var a = $('path[id$="_RU"]')[0];
						a && a.setFill(j.CL2)
					}, 1e3)
				}
			} else o.animate({scale: a});
			k.hide()
		}), e = $.extend({}, e, {
			color: j.CL2, stroke: [j.CL1, j.ST1], onTransform: function () {
				if (o.scale !== i) {
					b(o.scale, o.getMaxScale()) ? n.find(".scale-plus").addClass("inactive") : n.find(".scale-plus").removeClass("inactive"), b(o.scale, o.getMinScale()) && "russia" !== e.name ? n.find(".scale-minus").addClass("inactive").removeClass("world") : n.find(".scale-minus").removeClass("inactive");
					for (var a = $(o.rootGroup).find(p), c = a.length; c--;)a[c].setStroke(null, j.ST1 / o.scale);
					i = o.scale, b(i, o.getMinScale()) && "russia" === e.name ? n.find(".scale-minus").addClass("world") : n.find(".scale-minus").removeClass("world")
				}
			}
		});
		var o = vectorMap(d[0], e);
		o.addShadowStyle("#647290", e.shadow, e.shadow, Math.round(.8 * e.shadow)), o.onTransform(), d.data("map", o);
		var p = "svg" === o.canvas.mode ? "path" : "shape", q = ($(o.rootGroup).find(p).each(function () {
			var a = this.id.split("_")[1];
			a in f && f[a].active || this.setStroke(j.CL5, j.ST1 / o.scale).setFill(j.CL6)
		}), {
			mouseover: function () {
			}, mousemove: function (a) {
				var b = g(this, a);
				if (o.reorder(b), b.length) {
					var c = a.pageX - k.outerWidth() / 2;
					k.css({top: a.pageY - 10 - k.height(), left: c})
				}
			}, click: function (b, c) {
				var e = g(this, c);
				if (1 === e.length) {
					o.regionClick(e[0]);
					var h = b.type;
					o.handlerScrollToMap(h, d)
				} else if (e.length > 5) {
					var i = o.correctScale(1e3), j = 1 / o.scale - 1 / i, l = o.canvas.canvas.getBoundingClientRect();
					o.transX -= j * (c.clientX - l.left), o.transY -= j * (c.clientY - l.top), o.scale = i, o.applyTransform()
				} else if (e.length > 1) {
					k.hide(), m.empty(), m.append('<li class="picker_header">' + a("География") + "</li>");
					for (var n = 0; n < e.length; n++) {
						var p = $("<li>").data("code", e[n]).text(f[e[n]].title).appendTo(m);
						f[e[n]].active ? p.click(s) : p.addClass("disabled")
					}
					m.css({top: c.pageY + 30, left: c.pageX - 40}), o.hasTouch ? m.delay(500).show(1) : setTimeout(function () {
						m.show()
					}, 1)
				}
			}, unhover: h, clickOnTouch: !0
		});
		if ($("body").on("click", function () {
				m.hide()
			}), o.addBubble(k[0], q), "svg" === o.canvas.mode) {
			var r = Object.create(q);
			r.paths = [o.canvas.canvas], o.addBubble(k[0], r)
		}
		o.hasTouch || d.bind("mouseleave", h), o.makeDraggable();
		var s = function () {
			var a = $(this).data("code");
			o.regionClick(a)
		};
		if (o.regionClick = function (a) {
				if ("RU" === a && "world" === e.name) {
					o.animate({scale: 3, transX: -300, transY: 0, check: !1});
					var b = d.parents(".trips_map").find(".map-russia");
					loadAndRunMap(b, "russia", !0)
				} else if (a in f && f[a].active) {
					window.localStorage && "russia" == e.name ? window.localStorage.selectedRegion = a : window.localStorage && "world" == e.name && (window.localStorage.selectedCountry = a);
					var c = d.data("nav-to");
					if (c)o.reorder(void 0, a), d.closest(".trips__map_wrapper").find(".title").find(".loader").css("display", ""), window.router.handleURL(c.replace("CODE", a)); else if (f[a].url) {
						var g = d.parents(".trips_map").find(".trips_map-dropdown");
						$.get(f[a].url, function (a) {
							var b = $(a).css({position: "absolute", left: -1e4});
							g.empty(), g.append(b);
							var c = b.height(), e = "visible";
							g.hasClass("is-loaded") || (e = "hidden", g.css({height: 0, overflow: e}), g.addClass("is-loaded")), g.css({position: "relative", overflow: e}), b.css({
								position: "static",
								left: 0
							}), o.handlerChangeInitColorTitle(d), g.stop().animate({height: c}, {
								overrideOverflow: e, step: function () {
									return 2
								}, success: function () {
									g.css({overflow: "visible"})
								}, done: function () {
									o.handlerChangeColorTitle(d)
								}
							})
						}), o.reorder(void 0, a)
					}
				}
			}, o.handlerScrollToMap = function (a, b) {
				var c = b;
				if ("click" == a && !c.data("nav-to")) {
					var d = c.closest(".map_main"), e = d.offset().top - $(".topline").height() + 10;
					$("body").scrollTop() < e - $(".trips_map_show").outerHeight() && $("body,html").animate({scrollTop: e}, 500)
				}
			}, o.handlerChangeColorTitle = function (a) {
				var b = $(a).closest(".map_main");
				b.find(".region_link").addClass("is-animate")
			}, o.handlerChangeInitColorTitle = function (a) {
				$(a).closest(".map_main").find(".region_link").removeClass("is_init")
			}, o.resetItem = function (a) {
				var b = a.id.split("_")[1];
				b in f && f[b].active ? a.setStroke(j.CL1, j.ST1 / o.scale).setFill(j.CL2) : a.setStroke(j.CL5, j.ST1 / o.scale).setFill(j.CL6), "svg" === o.canvas.mode && a.setAttribute("style", "")
			}, o.highlightItem = function (a, b) {
				f[b].active ? a.setFill(j.CL4).setStroke(j.CL3, j.ST2 / o.scale) : a.setFill(j.CL2).setStroke(j.CL3, j.ST2 / o.scale)
			}, o.highlightItemSelected = function (a) {
				a.setFill(j.CL8).setStroke(j.CL7, j.ST2 / o.scale)
			}, o.hoverItems = [], o.reorder = function (b, c) {
				if (void 0 !== b) {
					for (var d = o.hoverItems.length; d--;) {
						var g = o.hoverItems[d];
						g && g != o.selectedItem && o.resetItem(g)
					}
					if (o.hoverItems = [], b.length) {
						for (var d = b.length; d--;) {
							var h = b[d], i = o.getPath(h);
							o.hoverItems.push(i), f[h].active && i !== o.selectedItem && o.highlightItem(i, h)
						}
						1 === b.length ? (l.text(f[b[0]].title), k.removeClass("bubble-multiple")) : (k.addClass("bubble-multiple"), l.text("world" === e.name ? a("Несколько стран") : a("Несколько регионов"))), k.show()
					} else o.hoverCode = o.hoverItem = null, l.text(""), k.hide()
				}
				void 0 !== c && (o.selectedItem && o.resetItem(o.selectedItem), c && c in f ? (o.selectedCode = c, o.selectedItem = o.getPath(c), o.highlightItemSelected(o.selectedItem, o.selectedCode)) : o.selectedCode = o.selectedItem = null), !h || h in f || !window.console || window.console.warn("unknown country: " + h), o.hoverItem && o.rootGroup.appendChild(o.hoverItem), o.selectedItem && o.rootGroup.appendChild(o.selectedItem)
			}, o.animate = function (a, b) {
				this.animateInterval && window.clearInterval(this.animateInterval);
				var c = 30, b = b || 210, d = Math.ceil(b / c), e = {x: this.transX * this.scale, y: this.transY * this.scale, scale: this.scale}, f = {scale: null === a.scale ? this.scale : a.scale};
				f.x = a.transX * f.scale, f.y = a.transY * f.scale;
				var g = 1;
				a.check = void 0 === a.check ? !0 : a.check, this.animateInterval = window.setInterval(function () {
					var b = jQuery.easing.swing(g / d), c = e.scale + (f.scale - e.scale) * b, h = 1 / o.scale - 1 / c;
					if (void 0 === a.transX)o.transX = o.transX - h * o.width / 2; else {
						var i = e.x + (f.x - e.x) * b;
						o.transX = i / c
					}
					if (void 0 === a.transY)o.transY = o.transY - h * o.height / 2; else {
						var j = e.y + (f.y - e.y) * b;
						o.transY = j / c
					}
					o.scale = c, a.check ? o.applyTransform() : o.canvas.applyTransformParams(o.scale, o.transX, o.transY), g === d && window.clearInterval(o.animateInterval), g += 1
				}, c)
			}, e.defaultRegion) {
			var t = d.data("nav-to");
			t ? o.reorder(void 0, e.defaultRegion) : o.regionClick(e.defaultRegion)
		}
		return o
	}

	var e = {russia: {svg_width: 1e3, svg_height: 580, maxScale: "x2.2", name: "russia", shadow: 5}, world: {svg_width: 580, svg_height: 336, maxScale: "x4", name: "world", shadow: 2}};
	window.loadAndRunMap = function (a, b, c, f) {
		function g() {
			var c = $.extend({}, e[b]);
			f ? c.defaultRegion = f : window.localStorage && window.localStorage.selectedCountry && "world" == b ? c.defaultRegion = window.localStorage.selectedCountry : window.localStorage && window.localStorage.selectedRegion && "russia" == b && (c.defaultRegion = window.localStorage.selectedRegion), d(a, c, i)
		}

		if (1 !== a.length)throw"loadAndRunMap argument's length should be 1";
		if (!a.hasClass(".is-active")) {
			a.parents(".trips_map").find(".trips_map-dropdown").empty().animate({height: 0}).removeClass("is-loaded");
			var h = a.parents(".trips_map").find(".map-switch").removeClass("is-active");
			if (a.addClass("is-active"), h.prev(".map-scale").hide(), a.prev(".map-scale").show(), c ? (h.fadeOut("slow"), a.fadeIn("slow")) : (h.hide(), a.show()), a.has("*").length)return b = a.data("map"), b.reorder([], null), b.scale = b.correctScale(0), void b.applyTransform();
			var i, j = !1, k = !1;
			$(function () {
				k = !0, j && e[b].paths && g()
			}), $.ajax({
				url: a.attr("data-url"), dataType: "json", success: function (a) {
					i = a, j = !0, k && e[b].paths && g()
				}
			}), e[b].paths || $.ajax({
				url: "/static/data/map_paths_" + b + ".js", dataType: "json", success: function (a) {
					e[b].paths = a, k && j && g()
				}
			})
		}
	}
}(), $(function () {
	"use strict";
	var a = new ReaderView({
		element: ".read", isEmpty: function () {
			return !this.$element || !this.$element.find(".read__in").children().length
		}, onInit: function () {
			if (!this.isEmpty()) {
				var a = this.$element.data();
				a && a.streamUrl && (this.streamUrl = a.streamUrl), this.onShow(), this._onShow()
			}
			this.isClosed = !this.$element.is(":visible");
			var b = this;
			b.on("update", function () {
				b.$element.find(".read__scroll").animate({scrollTop: 0})
			})
		}, onShow: function () {
			this.isShow = !0;
			var b = $("pre");
			if (b.length) {
				var c = this, d = function () {
					$(".acts_text_width").length || b.wrapInner('<span class="acts_text_width"></span>');
					var a = $(".acts_text_width"), d = a.width(), e = c.$element.find(".more");
					e.each(function () {
						$(this).width(d)
					})
				};
				d(), $(window).on("load resize", function () {
					d()
				})
			}
			isMobile.any() || $("body").is(".is-mobile") ? setTimeout(function () {
				a.initMobileSlide()
			}, 300) : a.initSlide(), this.assignHeightImage()
		}
	});
	new ViewManager(window.router).addView(a, "readerView")
}), function () {
	"use strict";
	function a(a) {
		View.call(this, a), this.isClosed = !0
	}

	a.subclass(View), a.prototype.bindEvents = function () {
		var a = $(document.body), b = this;
		a.on("click.gallery", ".photoset a", this.show.bind(this)), this.on("click", ".slider__close, .slider__slideback", this.close.bind(this)), this.on("click", ".slider__slidecontainer_block", function (a) {
			a.stopPropagation()
		}), this.on("click", ".slider__slideshare", this.share), a.on("keyup.gallery", function (a) {
			switch (a.keyCode) {
				case 27:
					b.close(a);
					break;
				case 37:
					b.$element.find(".slider").cycle("prev");
					break;
				case 39:
					b.$element.find(".slider").cycle("next")
			}
		}), $(window).on("orientationchange.gallery", b.assignHeightSlideMobile.bind(b)), $(window).on("resize.gallery", function () {
			b.sizing(), a.is(".is-mobile") || window.isMobile.any() ? $(".slider__imagewrap_vertical").height("") : ($(b.$element).height(""), $(".slider").height(""))
		})
	}, a.prototype.updateUrl = function () {
		if (window.history) {
			var a = this.$element.find(".slider").data("root-url");
			if (!this.$element.is(".is-active") && a)return void router.updateState(window.history.state, a, document.title);
			var b = this.$element.find(".cycle-slide-active").data("id"), c = this.$element.find(".slider").data("url-template");
			if (b && c) {
				var d = c.replace("ID", b);
				router.updateState(window.history.state, d, document.title)
			}
		}
	}, a.prototype.show = function (a) {
		$(a.currentTarget).is("a[href]") && a.metaKey || this.isClosed && (a.preventDefault(), $(document.body).addClass("is-viewing"), $(this.container).show().addClass("is-active"), $(".read").hide(), this.isClosed = !1, viewManager.setActiveView("galleryView"), this.render(a), this.updateUrl())
	}, a.prototype.close = function (a) {
		a.stopPropagation(), $(this.$element).removeClass("is-active"), window.viewManager.closeGallery(), this.updateUrl()
	}, a.prototype.render = function (a) {
		var b = this, c = $(a.currentTarget), d = $(c).closest(".photoset"), e = d.find("a"), f = $(".read__published").text(), g = $(".read__top_title").text(), h = $(".read .tabs_article").attr("href"), i = "", j = (d.find(".photoset__list").data("itemPreTitle"), $(c).closest(".photoset").data("url-template")), k = $(c).closest(".photoset").data("root-url");
		e.each(function (a, b) {
			var c = $("img", b).attr("alt"), d = $("img", b).data("place"), e = "";
			$("img", b).closest(".photoset__vertical").length && (e = " slider__imagewrap_vertical");
			var f = $("img", b).attr("id").replace("photo-", "");
			i += '<div class="slider__slide" data-id="' + f + '"><div class="slider__slidecontainer"><div class="slider__slidecontainer_block"><div class="slider__imagewrap' + e + '"><img src="' + b.href + '" alt="' + c + '" data-place="' + d + '"/></div></div></div></div>'
		});
		var l = "";
		l += '<div class="gallery__slider_description"><div class="slider__close"><i></i></div><div class="slider__table"><div class="slider__table_row"><div class="slider_table_cell slider_table_cell_title"><div class="slider__caption"></div><div class="slider__slide_title"></div></div></div><div class="slider__table_row"><div class="slider_table_cell description"><div class="slider_material">' + _("Из альбома к материалу") + '</div><div class="material__title"><a href="' + h + '">' + g + '</a></div><span class="slider__date">' + f + '</span><span class="slider__place"></span></div></div></div><div class="slider__slideback">' + _("Назад") + '</div><div class="slider__slideshare"><i></i></div></div>';
		var m = ['<div class="slider" ' + (j ? ' data-url-template="' + j + '"' : "") + (k ? ' data-root-url="' + k + '"' : "") + ">"];
		e.length > 1 && (m.push('<div class="slider__next"><i></i></div>'), m.push('<div class="slider__prev"><i></i></div>')), m.push('<div class="slider__slides cycle-slideshow">' + i + "</div>"), m.push("</div>"), m.push(l), b.$element.html(m.join("\n")), b.initializeSlider(a);
		var n = c.find("img").attr("alt"), o = c.find("img").data("place"), p = this.$element.find(".slider__place"), q = this.$element.find(".slider__slide_title");
		q.text(n), p.text(o), $(".gallery").addClass("is-active")
	}, a.prototype.initializeSlider = function (a) {
		var b = this, c = $(document.body);
		this.slider = this.$element.find(".slider");
		var d = this.$element.find(".slider"), e = this.$element.find(".slider__place"), f = this.$element.find(".slider__slide_title"), g = 0, h = $(a.currentTarget), i = ".photoset a";
		$(i).each(function (a) {
			$(this).attr("href") === h.attr("href") && (g = a)
		}), this.slider.on("cycle-initialized", this.sizing.bind(this)), d.cycle({
			paused: !0,
			slides: ".slider__slide",
			prev: ".slider__prev",
			next: ".slider__next",
			startingSlide: g,
			swipe: !0,
			fx: "scrollHorz",
			timeout: 0,
			caption: ".slider__caption",
			captionTemplate: "<span>{{slideNum}}</span> " + _("из") + " {{slideCount}}"
		}).on("cycle-before", function (a, d) {
			var g = $(d.slides[d.nextSlide]), h = g.find("img"), i = h.attr("alt"), j = g.find("img").data("place");
			f.text(i), e.text(j), (c.is(".is-mobile") || window.isMobile.any()) && b.countHeightSlideMobile(g), b.assignHeightVerticalSlide()
		}).on("cycle-update-view-after", function () {
			b.updateUrl()
		})
	}, a.prototype.assignHeightVerticalSlide = function () {
		if (!$(document.body).is(".is-mobile") && !window.isMobile.any()) {
			var a = $(this.slider), b = a.find(".slider__imagewrap_vertical img");
			if (!b.length)return;
			var c = b.closest(".slider__imagewrap_vertical"), d = a.width(), e = 420 * d / 680;
			c.height(e)
		}
	}, a.prototype.countHeightSlideMobile = function (a) {
		var b = this.$element.find(".description"), c = this.$element.find(".slider_table_cell.slider_table_cell_title"), d = c.outerHeight(), e = this.container.find(".gallery__overlay").height(), f = $(this.$element), g = this.$element.find(".slider__slideshare"), h = g.outerHeight(!0), i = e - a.outerHeight() - h - d;
		b.height(i);
		var j;
		j = a.height();
		var k = j + i;
		$(this.slider).height(j), f.height(f.height() < k ? k : "100%")
	}, a.prototype.assignHeightSlideMobile = function () {
		if ($(document.body).is(".is-mobile") || window.isMobile.any()) {
			var a = this;
			setTimeout(function () {
				var b = a.$element.find(".cycle-slide-active");
				a.countHeightSlideMobile(b)
			}, 1e3)
		}
	}, a.prototype.sizing = function () {
		this.assignHeightSlideMobile(), this.assignHeightVerticalSlide()
	}, a.prototype.share = function (a) {
		if (a.preventDefault(), !$(this).find(".share_material").length) {
			var b = $(".share_material").clone();
			$("<p></p>").addClass("over_tabs").appendTo($(this)), b.addClass("gallery_share").appendTo($(this))
		}
		$(this).shared()
	}, window.GalleryView = a
}(), function () {
	"use strict";
	function a() {
		this.sidebar = $(".sidebar"), this.sidebarClass = "is-withsidebar", this.fixedOverlay = $(".wrapsite__overlay"), this.contentWrapper = $(".main-wrapper"), this.fixClass = "correct", this.isSidebarOpened = !1, this.offsetTop = 0, this.init()
	}

	a.prototype.init = function () {
		this.bindEvents()
	}, a.prototype.bindEvents = function () {
		function a(a, b) {
			a.addClass("is-visible"), b.removeClass("is-visible"), g.toggleClass("is-fade")
		}

		function b() {
			d.sidebar.height($(window).height())
		}

		var c = $("body"), d = this;
		$(".topline__toggleaside").on("touchstart click",
				this.open.bind(this)),
				this.sidebar
						.on("open", this.open.bind(this)),
				this.sidebar.on("close", this.close.bind(this));
		var e = this.sidebar.find(".sidebar_lang .hidden"), f = this.sidebar.find(".sidebar_lang .sidebar_title_wrapper:not(.hidden)"), g = this.sidebar.find(".sidebar_list a, .sidebar_lang a");
		this.sidebar.find(".sidebar_lang a.is-active").on("mouseenter", function () {
			f.delay(200).queue(function () {
				$(this).hide()
			}), e.delay(200).queue(function () {
				$(this).show()
			}), "requestAnimationFrame" in window ? window.requestAnimationFrame(function () {
				a(e, f)
			}) : a(e, f)
		}).on("mouseleave", function () {
			e.clearQueue().hide(), f.clearQueue().show(), "requestAnimationFrame" in window ? window.requestAnimationFrame(function () {
				a(f, e)
			}) : a(f, e)
		}), this.sidebar.find(".sidebar_list a").hover(function () {
			d.sidebar.find(".sidebar_list a").toggleClass("is-fade")
		}), this.sidebar.on("wheel mousewheel", function (a) {
			if (d.isSidebarOpened) {
				var b;
				"mousewheel" === a.type ? b = -1 * a.originalEvent.wheelDelta : "wheel" === a.type && (b = 40 * a.originalEvent.deltaY), b && (a.preventDefault(), $(this).scrollTop(b + $(this).scrollTop()))
			}
		}), $(".wrapsite__outside").on("touchstart click", function (a) {
			a.preventDefault();
			var b = $(a.target);
			b.parents("." + d.sidebarClass).length && d.close(), $(document).find(c).unbind("touchmove")
		}), $(window).on("keydown", function (a) {
			switch (a.keyCode) {
				case 27:
					if (c.is(".leaving_site"))return;
					d.close()
			}
		}), c.on("mousewheel", function (a) {
			d.isSidebarOpened && a.preventDefault()
		}), b(), $(window).resize(function () {
			b(), c.is(".is-mobile") && (d.close(), $(document).find(c).unbind("touchmove")), window.isTablet.any() && d.contentWrapper.is(".is-special") && d.contentWrapper.css({
				top: -d.offsetTop + 60,
				height: window.innerHeight + d.offsetTop
			})
		})
	}, a.prototype.open = function () {
		function a() {
			$("body").addClass(b.sidebarClass), b.fixedOverlay.show(), setTimeout(function () {
				b.contentWrapper.addClass(b.fixClass)
			}, 1)
		}

		if (!this.isSidebarOpened) {
			var b = this;
			this.sidebar.show(), this.offsetTop = $("body").scrollTop();
			var c = window.innerHeight + this.offsetTop;
			window.isTablet.any() && (this.contentWrapper.addClass("is-special"), this.contentWrapper.css({
				top: -this.offsetTop,
				height: c
			})), "requestAnimationFrame" in window ? window.requestAnimationFrame(a) : a(), $(".sidebar").focus(), $(window).on("keydown", function (a) {
				switch (a.keyCode) {
					case 9:
						b.isSidebarOpened && $(a.target).hasClass("last-in-focus") && $(".sidebar").focus()
				}
			}), $(document).find("body").bind("touchmove", function (a) {
				$(a.target).closest(".sidebar").length || a.preventDefault()
			}), this.isSidebarOpened = !0
		}
	}, a.prototype.close = function () {
		function a() {
			b.sidebar.hide(), b.fixedOverlay.hide(), b.sidebar.off("webkitTransitionEnd transitionend otransitionend MSTransitionEnd"), b.isSidebarOpened = !1, b.contentWrapper.removeClass(b.fixClass)
		}

		if (this.isSidebarOpened) {
			var b = this, c = $("body");
			window.isTablet.any() && (c.scrollTop(this.offsetTop), this.contentWrapper.removeClass("is-special"), this.contentWrapper.css({
				top: "",
				height: ""
			})), c.removeClass(this.sidebarClass), "requestAnimationFrame" in window ? this.sidebar.one("webkitTransitionEnd transitionend otransitionend MSTransitionEnd", a) : a()
		}
	}, window.Sidebar = a, $.fn.sidebar = function (b) {
		return this.each(function () {
			var c = $(this), d = c.data("sidebar"), e = "object" == typeof b && b;
			d || c.data("sidebar", d = new a(this, e))
		})
	}
}(), $(function () {
	"use strict";
	function a(a, b) {
		this.$container = $(a), this.$element = $(b)
	}

	function b(a, b) {
		return $.grep(a, function (a) {
			return $.inArray(a, b) > -1
		})
	}

	function c(a, b) {
		if (!a)return void 0;
		var c = a.className, d = [];
		c && c.length && c.split && (c = $.trim(c), c = c.replace(/\s+/g, " "), d = c.split(" "));
		for (var e, f = [], g = 0; g < d.length; g++)e = d[g].split("_"), e[0] === b && f.push(parseInt(e[1], 0));
		return f
	}

	function d(a, b, c) {
		a[b] ? a[b].push(c) : a[b] = [c]
	}

	function e(a, e) {
		var f = [], g = 0;
		return a && a.length ? (a.each(function (h, i) {
			var j = a[h + 1], k = c(i, e), l = c(j, e);
			i.classList && (b(k, l).length ? d(f, g, i) : (d(f, g, i), g++))
		}), f) : void 0
	}

	function f(a, b, d) {
		return a ? a.map(function (a) {
			return a.filter(function (a) {
				return -1 !== $.inArray(d, c(a, b))
			})
		}).filter(function (a) {
			return a.length
		}) : void 0
	}

	function g(b) {
		this.$container = $(b), this.$scrollContainer = isTablet.any() ? $(document.body) : this.$container.find(".read__scroll"), this.$sidebar = this.$container.find(".transcript_sidebar"), this.$sidebarScrollContainer = this.$sidebar.find(".transcript_sidebar__tab.is-active .transcript_sidebar__items"), this.bindEvents(), this.videoTrascript = new a(this.$container, $(".media__container:first")), this.videoTrascript.init(this)
	}

	a.prototype.shouldTrackTimeUpdate = !0, a.prototype.init = function (a) {
		this.transcript = a;
		var b = this.$element.data("player");
		if (b) {
			var c = b.mediaElement;
			this.media = c.media
		}
		this.$timeElements = this.$container.find("*[data-time-start]"), this.times = this.$timeElements.map(function (a, b) {
			return {start: parseFloat($(b).data("timeStart")), end: parseFloat($(b).data("timeEnd")), $element: $(b)}
		}), this.bindEvents(), this.$container.addClass("video-transcript"), this.$container.addClass($(".transcript_sidebar").length ? "video-transcript-thin" : "video-transcript-wide"), $("body").is(".is-mobile") || window.isMobile.any() || (this.transcript.offset = !1, this.transcript.assignOffset())
	}, a.prototype.bindEvents = function () {
		$(".media__videolink, .media__pic img", this.$container).off("click touchstart").on("click touchstart", function (a) {
			a.preventDefault(), $(this).closest(".media__container").player({autoPlay: !0, features: ["playpause", "current", "progress", "duration", "tracks", "volumeext", "quality", "collapse"]})
		}), this.bounds = {onTimeUpdate: this.onTimeUpdate.bind(this)}, this.$element.on("play", this.onPlay.bind(this)), this.$element.on("pause", this.onPause.bind(this)), this.$element.on("collapse", this.onCollapse.bind(this));
		var a = this;
		this.$element.on("success", function () {
			var b = a.$element.data("player");
			if (b) {
				var c = b.mediaElement;
				a.media = c.media
			}
		}), this.$container.on("transcript-select", function (b, c) {
			a.shouldTrackTimeUpdate = !1;
			var d = $(c.element), e = d.data("timeStart");
			d.length && void 0 !== e && (a.media ? (a.media.setCurrentTime(e), a.media.paused || (a.media.play(), a.shouldTrackTimeUpdate = !0)) : (a.$element.find(".media__videolink").click(), a.$element.one("play", function () {
				var b = a.$element.data("player"), c = b.mediaElement;
				$(c.media).one("loadedmetadata", function () {
					c.setCurrentTime(e), a.shouldTrackTimeUpdate = !0
				})
			})))
		})
	}, a.prototype.onPlay = function () {
		this.media && (this.shouldTrackTimeUpdate = !0, this.media.addEventListener("timeupdate", this.bounds.onTimeUpdate, !1))
	}, a.prototype.onPause = function () {
		this.media && this.media.removeEventListener("timeupdate", this.bounds.onTimeUpdate)
	}, a.prototype.onTimeUpdate = function () {
		this.shouldTrackTimeUpdate && this.media && this.select(this.media.currentTime)
	}, a.prototype.onCollapse = function () {
		this.transcript && (this.transcript.updateNavPosition(), this.transcript.toggleOffset())
	}, a.prototype.select = function (a) {
		for (var b, c = 0; c < this.times.length; c++)a >= this.times[c].start && (b = this.times[c].$element);
		b && b.get(0) !== this.lastElement && ($(this.lastElement).removeClass("is-video-active").removeClass("is-video-highlighted"), this.$container.data("transcript")._scrollToElement(b), b.addClass("is-video-highlighted").addClass("is-video-active"), self.$lastSelectedSpans = b, this.lastElement = b.get(0))
	};
	var h = !1;
	g.prototype.bindEvents = function () {
		var a = this;
		this.$container.on("click", ".transcript_sidebar__tab", function (b) {
			b.preventDefault(), b.stopPropagation(), a.$container.find(".transcript_sidebar__tab").removeClass("is-active"), $(this).addClass("is-active"), a.$sidebarScrollContainer = a.$sidebar.find(".transcript_sidebar__tab.is-active .transcript_sidebar__items")
		}), this.$container.on("click", ".transcript_sidebar__item", function (b) {
			b.preventDefault(), b.stopPropagation(), a.init($(this))
		}), this.$container.on("click", ".transcript-nav", function (a) {
			a.preventDefault(), a.stopPropagation()
		}), this.$container.on("click touchstart", ".transcript-nav-btn", function (b) {
			b.stopPropagation(), b.preventDefault();
			var c = $(this);
			if (!c.hasClass("is-disabled") && "disabled" !== c.attr("disabled")) {
				var d = a.$sidebar.data("transcriptType"), g = a.$sidebar.data("transcriptUid"), h = a.$sidebar.data("transcriptIndex"), i = f(e(a.$allItems, d), d, g);
				c.hasClass("transcript-nav-up") ? h-- : h++, $(".transcript-counter").text(h + 1 + " / " + i.length), h >= 0 && h <= i.length - 1 && (a.select(h), a.$sidebar.data("transcriptIndex", h), a.updateNav(i, h))
			}
		}), this.$container.on("mousewheel", ".transcript-nav", debounce(function (b, c, d, e) {
			b.stopPropagation(), b.preventDefault(), h || (e > 0 ? a.next() : a.prev())
		}, 300)), this.$container.on("focus", ".highlighted_wrapper", function (b) {
			b.preventDefault(), h || a.select($(this).data("index"))
		}), this.$sidebar.on("mousewheel", function (b, c, d, e) {
			b.stopPropagation();
			var f = a.$sidebarScrollContainer, g = f.prop("scrollTop"), h = Math.abs(f.prop("scrollHeight") - f.height());
			(e > 0 && 0 === g || 0 > e && g >= h) && b.preventDefault()
		}), this.$sidebar.on("mouseenter", function () {
			$(this).addClass("is-active")
		}), this.$sidebar.on("mouseleave", function () {
			$(this).removeClass("is-active")
		})
	}, g.prototype.init = function (a) {
		var b;
		this.$scrollContainer.parent().length || (this.$scrollContainer = this.$container.find(".read__scroll"), this.$sidebar = this.$container.find(".transcript_sidebar"), this.$sidebarScrollContainer = this.$sidebar.find(".transcript_sidebar__tab.is-active .transcript_sidebar__items")), this.$nav && this.$nav.parent().length || (this.$nav = $('<div class="transcript-nav is-disabled"><button class="transcript-nav-btn transcript-nav-up" title="' + _("Предыдущий элемент") + '"><i></i></button><div class="transcript-counter"></div><button class="transcript-nav-btn transcript-nav-down" title="' + _("Следующий элемент") + '"><i></i></button></div>'), this.$container.append(this.$nav)), this.$allItems = $(".read *[class^=person_], .read *[class^=theme_]").not(".person_tag"), this.$container.find(".transcript_sidebar__item").removeClass("is-active"), this.$container.find(".transcript_sidebar__item button").remove(), a.addClass("is-active");
		var c, d;
		"undefined" != typeof a.data("index") && (c = "index", d = a.data("index")), "undefined" != typeof a.data("theme") && (c = "theme", d = a.data("theme")), "undefined" != typeof a.data("person") && (c = "person", d = a.data("person")), b = f(e(this.$allItems, c), c, d);
		var g = $(".read").find("." + c + "_" + d);
		b.length > 1 ? (this.$nav.removeClass("is-disabled"), $(".transcript-counter").text("1 / " + b.length)) : (this.$nav.addClass("is-disabled"), $(".transcript-counter").text("")), this.$sidebar.data("transcriptType", c), this.$sidebar.data("transcriptUid", d), this.$sidebar.data("transcriptIndex", 0), g.length > 0 && (this.select(0), $(".transcript").addClass("is-active")), this.updateNavPosition(), this.offset = !1
	}, g.prototype.reinit = function () {
		this.initVideo()
	}, g.prototype.initVideo = function () {
		function a() {
			b.$container.removeClass("video-transcript-wide video-transcript-thin video-transcript");
			var a = b.$container.find(".read__scroll");
			a.scrollTop(0), $(".read__tabs a").removeClass("is-active"), $(".read__tabs .tabs_article").addClass("is-active");
			var d = $(".media__container:first").data("player");
			d && d.mediaElement && d.mediaElement.pause();
			var e = $(".media__container:first");
			e.off("play.transcript"), b.clearOffset(), c = !1
		}

		var b = this, c = !1, d = this.$container.find("*[data-time-start]"), e = b.$container.find(".read__top");
		if (d.length && this.$container.find(".read__in").hasClass("transcript")) {
			if ($(".media__videolink, .media__pic img", this.$container).off("click touchstart").on("click touchstart", function (a) {
					a.preventDefault(), $(this).closest(".media__container").player({autoPlay: !0, features: ["playpause", "current", "progress", "duration", "tracks", "volumeext", "quality", "collapse"]})
				}), c)return void a();
			c = !0;
			var f = d.map(function (a, b) {
				return {start: parseFloat($(b).data("timeStart")), end: parseFloat($(b).data("timeEnd")), $element: $(b)}
			});
			b.$container.addClass("video-transcript"), b.$container.addClass($(".transcript_sidebar").length ? "video-transcript-thin" : "video-transcript-wide");
			var g = null, h = $(".media__container:first"), i = !1;
			if (h.length) {
				{
					h.data("player")
				}
				!$("body").is(".is-mobile") && !window.isMobile.any() && parseInt(e.css("paddingTop")) < this.$container.find(".media__container_video").outerHeight() && (this.offset = !1, this.assignOffset()), b.$container.off("transcript-select").on("transcript-select", function (a, b) {
					i = !0;
					var c = $(b.element), d = c.data("timeStart");
					if (c.length && void 0 !== d)if (h.data("player")) {
						var e = h.data("player"), f = e.mediaElement;
						f.setCurrentTime(d), f.media.paused || f.play()
					} else h.find(".media__videolink").click(), h.one("play", function () {
						var a = h.data("player"), b = a.mediaElement;
						$(b.media).one("loadedmetadata", function () {
							b.setCurrentTime(d)
						})
					})
				})
			}
			h.on("click", ".mejs-time-rail", function () {
				i = !1
			}), h.on("click", ".mejs-collapse-button", this.toggleOffset.bind(this)), h.on("play.transcript", function () {
				var a = $(this).data("player");
				if (a) {
					var c = a.mediaElement, d = c.media;
					d.addEventListener("timeupdate", function () {
						if (!i) {
							for (var a, d = c.media.currentTime, e = 0; e < f.length; e++)d >= f[e].start && (a = f[e].$element);
							a && a.get(0) !== g && ($(g).removeClass("is-active").removeClass("is-highlighted"), b._scrollToElement(a), a.addClass("is-highlighted").addClass("is-active"), b.$lastSelectedSpans = a, g = a.get(0))
						}
					}, !1)
				}
			})
		}
	}, g.prototype.updateNavPosition = function () {
		var a, b, c = $(".media__container").height(), d = $(".read__tabs").height(), e = $(".topline").height(), f = $(".transcript-nav");
		a = window.innerHeight - c - d - e - 20, b = e + 10 + c + a / 2, f.css("top", b), $(window).resize(function () {
			c = $(".media__container").height(), a = window.innerHeight - c - d - e - 20, b = e + 10 + c + a / 2 + "px", f.css("top", b)
		})
	}, g.prototype.assignOffset = function () {
		if (!this.offset) {
			var a = this.$container.find(".read__top"), b = parseInt(a.css("paddingTop")), c = this.$container.find(".media__container_video").outerHeight() + b;
			a.css("paddingTop", c), this.offset = !0
		}
	}, g.prototype.clearOffset = function () {
		if (this.offset) {
			var a = this.$container.find(".read__top");
			a.css("paddingTop", ""), this.offset = !1
		}
	}, g.prototype.toggleOffset = function () {
		return this.offset ? (this.clearOffset(), !1) : (this.assignOffset(), !1)
	}, g.prototype.next = function () {
		this.select(this.$sidebar.data("transcriptIndex") - 1)
	}, g.prototype.prev = function () {
		this.select(this.$sidebar.data("transcriptIndex") + 1)
	}, g.prototype.select = function (a) {
		var b = !0, c = this.$sidebar.data("transcriptType"), d = this.$sidebar.data("transcriptUid");
		this.$allItems.removeClass("is-active").removeClass("is-highlighted");
		var g = f(e(this.$allItems, c), c, d);
		if ($(g).each(function (a, b) {
				$(b).addClass("is-highlighted").addClass("is-active")
			}), a >= 0 && a < g.length) {
			var h = this, i = $(g[a]);
			this._scrollToElement(i.first(), function () {
				h.$lastSelectedSpans = i, i.addClass("is-active"), b = !1, a && h.$sidebar.data("transcriptIndex", a), h.$container.trigger("transcript-select", {index: a, element: i.first()}), h.updateNav()
			})
		}
	}, g.prototype._scrollToElement = function (a, b) {
		var c = this.$scrollContainer, d = a.position().top;
		d += isTablet.any() ? -window.innerHeight / 2 + $(".topline").height() : c.prop("scrollTop") - $(".media__container").height(), this.$scrollContainer.stop(!0).animate({scrollTop: d}, 500, b)
	}, g.prototype.updateNav = function () {
		var a = this.$sidebar.data("transcriptType"), b = this.$sidebar.data("transcriptUid"), c = this.$sidebar.data("transcriptIndex"), d = this.$nav.find(".transcript-nav-up"), g = this.$nav.find(".transcript-nav-down"), h = f(e(this.$allItems, a), a, b);
		1 === h.length ? this.$nav.addClass("is-disabled") : this.$nav.removeClass("is-disabled"), 0 === c ? d.attr("disabled", "disabled").addClass("is-disabled") : d.removeAttr("disabled").removeClass("is-disabled"), c === h.length - 1 ? g.attr("disabled", "disabled").addClass("is-disabled") : g.removeAttr("disabled").removeClass("is-disabled")
	}, $.fn.transcript = function (a) {
		var b = arguments;
		return this.each(function () {
			var c = $(this), d = c.data("transcript"), e = "object" == typeof a && a;
			d ? d.reinit() : c.data("transcript", d = new g(this, e)), "string" == typeof a && d[a].apply(d, Array.prototype.slice.call(b, 1))
		})
	}, $.fn.transcript.Constructor = g
}), function () {
	"use strict";
	function a() {
		this.container = $(".search"), this.mainElement = $(".simple_search"), this.additionalElement = $(".docs_search"), this.toggleLink = $(".nav__link_search"), this.label = $(".search__title_main"), this.mainTitle = $(this.label).html(), this.currentTitle = $(this.label).html(), this.filter = $(".search__filter_section"), this.isMainElementOpened = !1, this.isAdditionalElementShowed = !1, this.currentForm = this.mainElement, this.init()
	}

	a.prototype.classes = {active: "is-active", inactive: "inactive", search: "is-search", formFilter: "is-form_filter"}, a.prototype.selectors = {
		wrapFixedSelector: ".wrapsite__overlay",
		bankDocs: ".bank_docs",
		mainInput: ".search__form__input",
		itemFilter: ".search__filter__item"
	}, a.prototype.bodyClasses = {mobile: "is-mobile"}, a.prototype.init = function () {
		var a = this;
		$(this.container).find(a.selectors.mainInput).prop("type", "text"), $(".content-view").find(a.selectors.mainInput).length && $(".content-view").find(a.selectors.mainInput).prop("type", "text"), this.bindEvents(), this.completeForm()
	}, a.prototype.bindEvents = function () {
		var a = this,
				b = $(".content-view"),
				c = $(".search__section_value"),
				d = 100, e = $(".search"),
				f = $("body"),
				g = $(this.selectors.itemFilter),
				h = $(a.label),
				i = $(".search__filter_section"),
				j = $("a", i).not(".bank_docs a").not(".search_with_filter"),
				k = $(this.container).find(this.selectors.mainInput);
		$(".nav__link_search, .footer__search_open")
				.on("click", this.toggleSearch.bind(this)),
				$(".topline__menu a")
						.on("click", a.close.bind(a)),
				$(".wrapsite__outside, .topline__toggleaside").on("touchstart click", function (b) {
			$(".dropdown_list").is(":visible") || (b.preventDefault(), a.close(b))
		}), window.isTablet.any() || $(this.additionalElement).find(".dropdown").on("click", function (a) {
			a.stopPropagation(), $(this).dropdown({locale: window.currentLanguage, needLoad: $(this).data("need-load")})
		}), $(this.container).find(".bank_docs a").bind("click", this.showAdditionalElement.bind(this)), $(this.container).find(".search__filter__item:not(.bank_docs) a").bind("click", this.hideAdditionalElement.bind(this)), $(this.container).find(".search__filter__item a").bind("click", this.activeElement.bind(this)), $(this.container).find("input, button").bind("focus", this.trackingForms.bind(this)), $(this.container).find(".search_without_filter").bind({
			mouseenter: function () {
				h.html(a.mainTitle)
			}, mouseleave: function () {
				h.html(a.currentTitle)
			}, click: function (b) {
				b.preventDefault(), a.changeLabel($(this)), h.html(a.mainTitle)
			}
		}), $(this.container).find(".search_with_filter").bind("click", function (b) {
			b.preventDefault();
			var c = $(this).closest(".search__filter__item").find(".search__filter_section__item a").first();
			a.insertText(c.text()), a.changeLabel(c)
		}), $(this.container).find(i).closest(g).bind("mouseenter mouseleave", function () {
			$(this).toggleClass(a.classes.active), $(a.container).find("form").toggleClass(a.classes.inactive)
		}), $(this.container).find($(a.filter)).closest(g).mouseenter(function () {
			$(a.currentForm).find("input:visible").first().blur(), $(a.filter).fadeIn(d), e.find("form").removeClass("complete")
		}).mouseleave(function () {
			$(a.filter).fadeOut(d), a.completeForm()
		}), $(this.container).find(j).bind({
			mouseenter: function () {
				a.insertText($(this).text())
			}, mouseleave: function () {
				h.html(a.currentTitle)
			}, click: function (b) {
				b.preventDefault(), a.changeLabel($(this)), a.insertText($(this).text()), $(a.filter).fadeOut(d), a.activeElement(b)
			}
		}), $(this.container).find("form").on("submit", this.submitForm.bind(this)), b.on("submit", ".form_page_search", a.submitForm.bind(a)), b.on("click", ".search_section", function (a) {
			a.preventDefault();
			var b = $(".form_page_search"), c = $(this).data("value"), d = b.find(".search__section_value");
			window.contentView.element.find(".search_section").removeClass("is-active"), $(this).addClass("is-loading"), d.val(c), b.submit()
		}), b.on("click", ".form_page_search .search_icon", function (a) {
			a.preventDefault(), $(".form_page_search").submit()
		}), b.on("click", ".show_date_filter", this.showDateFilter.bind(this)), b.on("render", function () {
			var d = window.contentView.element.find(".search_section.is-active").data("value");
			c.val(d), b.find(".form_page_search").formActive("novalidate"), b.find(a.selectors.mainInput).length && b.find(a.selectors.mainInput).prop("type", "text")
		}), b.find(".form_page_search").formActive("novalidate"), !window.isMobile.any() && !window.isTablet.any() && f.width() > 700 && $("#search__form__input").on("focus", function () {
			a.open()
		}), $(window).bind("keyup", function (b) {
			switch (b.keyCode) {
				case 9:
					if ($("*:focus").not($(".search").find("*")).length)return a.close(b), !1;
					break;
				case 27:
					if ($("body").is(".leaving_site"))return;
					a.close()
			}
		}), this.initAutocomplete = this.initAutocomplete.bind(this), k.on("focus.autocomplete", this.initAutocomplete)
	}, a.prototype.toggleSearch = function (a) {
		a.preventDefault(), $(a.currentTarget).is(".is-opened") ? this.close(a) : this.open()
	}, a.prototype.open = function () {
		function a() {
			b && clearTimeout(b), c.hasClass(d.bodyClasses.mobile) || (d.toggleLink.addClass("is-opened"), c.addClass(d.classes.search), $(d.selectors.wrapFixedSelector).show()), d.isMainElementOpened = !0
		}

		if (!this.isMainElementOpened) {
			$(this.mainElement).removeClass("complete");
			var b,
					c = $("body"),
					d = this;
			$(this.container)
					.show(),
					"requestAnimationFrame" in window ?
							window.requestAnimationFrame(a) :
							b = setTimeout(a, 1),
					window.isTablet.any() ?
							$(d.container).find(d.selectors.mainInput).focus() : setTimeout(function () {
				$(d.container).find(d.selectors.mainInput).focus()
			}, 500), $(document).find(c).bind("touchmove", function (a) {
				a.preventDefault()
			}), c.bind("mousewheel", this.preventScrolling.bind(this))
		}
	}, a.prototype.close = function (a) {
		function b() {
			d.hasClass("is-withsidebar") || $(".wrapsite__overlay").hide(), e.removeClass(c.classes.active), e.first().addClass(c.classes.active), $(c.container).off("transitionend webkitTransitionEnd otransitionend MSTransitionEnd")
		}

		if (this.isMainElementOpened) {
			a && a.preventDefault(), this.hideAdditionalElement(a), $(this.mainElement).find(".search__form__input").val("");
			var c = this, d = $("body"), e = $(this.selectors.itemFilter);
			this.toggleLink.removeClass("is-opened"), d.removeClass(this.classes.search).removeClass(this.classes.formFilter), "requestAnimationFrame" in window ? $(c.container).one("transitionend webkitTransitionEnd otransitionend MSTransitionEnd", b) : b(), $(this.selectors.mainInput).blur(), $(document).find(d).unbind("touchmove"), this.isMainElementOpened = !1, d.unbind("mousewheel"), $(".autocomplete-suggestions").hide()
		}
	}, a.prototype.showAdditionalElement = function (a) {
		function b() {
			d.addClass(c.classes.formFilter), $(c.selectors.wrapFixedSelector).show(), c.isAdditionalElementShowed = !0
		}

		if (a.preventDefault(), !this.isAdditionalElementShowed) {
			$(this.selectors.mainInput).blur();
			var c = this, d = $("body");
			$(this.mainElement).trigger("reset"), "requestAnimationFrame" in window ? window.requestAnimationFrame(b) : setTimeout(b, 1), window.isTablet.any() ? $(c.additionalElement).find(".input_doc").focus() : setTimeout(function () {
				$(c.additionalElement).find(".input_doc").focus()
			}, 500), this.currentForm = this.additionalElement
		}
	}, a.prototype.hideAdditionalElement = function () {
		if (this.isAdditionalElementShowed) {
			var a = $("body");
			$(this.additionalElement).trigger("reset"), a.removeClass(this.classes.formFilter), this.isAdditionalElementShowed = !1, this.currentForm = this.mainElement
		}
	}, a.prototype.insertText = function (a) {
		var b = $(".search__filter_section"), c = '<span class="search__title_section">' + a + "</span>";
		$(this.label).html(b.data("info") + " " + c)
	}, a.prototype.changeLabel = function (a) {
		var b = $(".search__section_value");
		b.val(a.data("value")), this.completeForm(), this.currentTitle = $(this.label).html()
	}, a.prototype.completeForm = function () {
		$(this.mainElement).formActive("novalidate"), $(this.additionalElement).formActive("novalidate")
	}, a.prototype.activeElement = function (a) {
		var b = this, c = $(a.currentTarget);
		$(b.container).find(".search__filter__item").removeClass(b.classes.active), c.is(".search__filter__item") && c.addClass(b.classes.active), c.closest(".search__filter__item").length && c.closest(".search__filter__item").addClass(b.classes.active)
	}, a.prototype.trackingForms = function (a) {
		var b = $(a.currentTarget), c = b.closest("form"), d = c.prop("name");
		d !== $(this.currentForm).prop("name") && (d === $(this.additionalElement).prop("name") ? this.showAdditionalElement(a) : d === $(this.mainElement).prop("name") && this.hideAdditionalElement(a))
	}, a.prototype.showDateFilter = function (a) {
		a.preventDefault(), a.stopPropagation();
		var b = $(a.currentTarget), c = b.closest(".search__date-filter"), d = c.next(".search__date-filter"), e = d.find(".dateblock");
		c.hide(), d.show().removeClass("hidden").removeAttr("hidden"), e.triggerHandler("click", {shouldFocusOnInput: !0}), e.one("hide", this.hideDateFilter.bind(this))
	}, a.prototype.hideDateFilter = function () {
		var a = $(".search__date-filter.popup_link"), b = $(".search__date-filter.period");
		a.show(), b.hide().addClass("hidden").attr("hidden", "hidden")
	}, a.prototype.submitForm = function (a) {
		a.preventDefault();
		var b = this, c = $(a.currentTarget), d = c.attr("action"), e = $(this.container).find(this.selectors.mainInput);
		return c.addClass("is-loading"), c.is(".form_page_search") && c.find(".submit").addClass("is-loading").text("").append('<span class="loader"></span>'), this.currentSuggestion && this.currentSuggestion.data.url && this.getSuggestionTitle(this.currentSuggestion) == e.val() ? (this.navigateToSuggestion(this.currentSuggestion), void(this.currentSuggestion = null)) : (this.currentSuggestion = null, viewManager.shouldHandleLink($("<a>", {href: d})[0]) ? void router.handleURL(d, {
			data: c.serializeArray(),
			force: !0,
			onLoaded: function () {
				c.removeClass("is-loading").addClass("is-active"), c.is(".is-active") && (b.close(a), c.is(b.mainElement) && ($(".nav__link_search").addClass("is-active"), $(".footer__col a").removeClass("is-active"), $(".footer__search a").addClass("is-active"), $(".loader.loader_form").detach()))
			},
			onFailed: function () {
				c.removeClass("is-loading")
			},
			onAbort: "onFailed"
		}) : void(window.location = d))
	}, a.prototype.preventScrolling = function (a) {
		$(a.target).closest(".calendar-scroll-view").length || $(a.target).closest(".autocomplete-suggestions").length || a.preventDefault()
	}, window.Search = a, $.fn.search = function (b) {
		return this.each(function () {
			var c = $(this), d = c.data("search"), e = "object" == typeof b && b;
			d || c.data("search", d = new a(this, e))
		})
	}
}(), function () {
	"use strict";
	var a = window.Search;
	a.prototype.initAutocomplete = function (b) {
		if ("localStorage" in window) {
			var c = $(b.target);
			c.data("search-autocomplete") || c.data("search-autocomplete", new a.Autocomplete(this, c))
		}
	}, a.Autocomplete = function (b, c) {
		this.search = b, this.$input = c, a.autocompleteData = this.readAutocompleteCache("search-autocomplete"), a.autocompleteDataWords = this.readAutocompleteCache("search-autocomplete-words");
		var d = {
			triggerSelectOnValidInput: !1, zIndex: 10002, deferRequestBy: 100, minChars: 3, groupBy: "category", onSelect: this.onAutocompleteSelect.bind(this), lookupFilter: function (a, b, c) {
				return -1 !== a.value.toLowerCase().indexOf(c)
			}, beforeRender: function () {
				c.addClass("is-autocompleted")
			}, formatResult: this.autocompleteFormatResult.bind(this)
		};
		this.checkInitAutocomplete(d);
		var e = $(this.search.container).find(this.search.selectors.mainInput);
		a.autocompleteData || this.loadAutocompleteOptions({
			cacheKey: "search-autocomplete",
			storeTo: "autocompleteData",
			url: e.data("autocomplete-url"),
			opts: d,
			ttlMinutes: 4320
		}), a.autocompleteDataWords || this.loadAutocompleteOptions({cacheKey: "search-autocomplete-words", storeTo: "autocompleteDataWords", url: e.data("autocomplete-words-url"), opts: d, ttlMinutes: 240})
	}, a.Autocomplete.prototype.autocompleteFormatResult = function (a) {
		var b = a.data.image;
		b = b && (0 != b.indexOf("http://") ? window.config.mediaUrl : "") + b;
		var c = a.data;
		if ("person" === c.type) {
			var d = c.title || $.trim(c.ln + " " + c.fn + " " + c.mn);
			return '<div class="autocomplete-suggestion-person">' + (b ? '<img src="' + b + '"/>' : "") + (d ? '<div class="name">' + d + "</div>" : "") + "</div>"
		}
		return a.value
	}, a.Autocomplete.prototype.onAutocompleteSelect = function (a) {
		if (a.data.url) {
			this.navigateToSuggestion(a);
			var b = this.getSuggestionTitle(a);
			this.$input.val(b)
		} else this.$input.closest("form").submit()
	}, a.Autocomplete.prototype.navigateToSuggestion = function (a) {
		var b = $(this.search.container).find(this.search.selectors.mainInput).parent(".input_wrapper");
		return b.addClass("is-loading"), b.find(".search_icon").addClass("loader"), viewManager.shouldHandleLink($("<a>", {href: a.data.url})[0]) ? void router.handleURL(a.data.url, {
			onLoaded: function () {
				b.removeClass("is-loading"), b.find(".search_icon").removeClass("loader"), this.search.close()
			}.bind(this), onFailed: function () {
				b.removeClass("is-loading"), b.find(".search_icon").removeClass("loader")
			}, onAbort: "onFailed"
		}) : void(window.location = a.data.url)
	}, a.Autocomplete.prototype.getSuggestionTitle = function (a) {
		var b = a.data;
		return b.title || $.trim(b.ln + " " + b.fn + " " + b.mn)
	}, a.Autocomplete.prototype.readAutocompleteCache = function (a) {
		var b = localStorage.getItem(a + "-ttl"), c = 1445885352411;
		if (!b)return null;
		if (b && (b < +new Date || c > b))return localStorage.removeItem(a), localStorage.removeItem(a + "-ttl"), null;
		var d = $.parseJSON(localStorage.getItem(a));
		return this.prepareLookupData(d)
	}, a.Autocomplete.prototype.checkInitAutocomplete = function (b) {
		var c = this;
		a.autocompleteData && a.autocompleteDataWords && (b.lookup = a.autocompleteData.concat(a.autocompleteDataWords), this.$input.autocomplete(b), this.$input.autocomplete().adjustScroll = function (a) {
			$.Autocomplete.prototype.adjustScroll.call(this, a), c.currentSuggestion = this.suggestions[a];
			var b = c.getSuggestionTitle(this.suggestions[a]);
			c.$input.val(b)
		})
	}, a.Autocomplete.prototype.prepareLookupData = function (a) {
		return $.map(a, function (a) {
			var b;
			b = "person" === a.type && (a.ln || a.fn) ? a.mn ? a.fn + " " + a.ln + " " + a.fn + " " + a.mn + " " + a.ln : a.fn + " " + a.ln + " " + a.fn : a.title;
			var c = {value: b, data: a};
			return "person" === a.type ? c.data.category = _("Лица") : "word" === a.type ? (c.value = a.title || a.word, c.data.category = _("Поисковые запросы")) : c.data.category = _("term" === a.type ? "Термины" : "country" === a.type || "region" === a.type ? "География" : "Темы"), c
		})
	}, a.Autocomplete.prototype.loadAutocompleteOptions = function (b) {
		$.getJSON(b.url).done(function (c) {
			if (c && $.isArray(c)) {
				localStorage.setItem(b.cacheKey, JSON.stringify(c));
				var d = +new Date + 6e4 * b.ttlMinutes;
				localStorage.setItem(b.cacheKey + "-ttl", d), a[b.storeTo] = this.prepareLookupData(c), this.checkInitAutocomplete(b.opts)
			}
		}.bind(this))
	}
}(), function (a) {
	"use strict";
	function b(a, b, c) {
		var c = c.replace(/ё/g, "е");
		return -1 !== a.value.toLowerCase().replace(/ё/g, "е").indexOf(c)
	}

	function c() {
		this.init()
	}

	c.prototype.init = function () {
		this.bindEvents();
		a(".form_accreditation .accreditation-request");
		a("input:radio:checked").attr("data-checked", "checked");
		var c = a("#id-citizenship"), d = a("<input/>").attr({type: "text", id: c.attr("id")});
		d.appendTo(c.closest(".form__fieldlong"));
		var e = Array();
		c.find("option").each(function () {
			return e.push({value: a(this).text(), data: a(this).val()}), e
		}), d.autocomplete({
			lookup: e, lookupFilter: b, onSelect: function (b) {
				a("#id-citizenship-id").val(b.data);
				var c = a("#id-middlename, #id-passportseries").closest(".form__field").find(".label_required");
				c.toggleClass("hidden", "1" !== b.data)
			}
		}), a("#id-residence").autocomplete({
			lookup: a.grep(e, function (a) {
				return "1" !== a.data
			}), lookupFilter: b, onSelect: function (b) {
				a("#id-residence-id").val(b.data)
			}
		}), this.patchAutocomplete(d), this.patchAutocomplete(a("#id-residence")), c.remove()
	}, c.prototype.patchAutocomplete = function (a) {
		var b = a.data("autocomplete"), c = b.onValueChange;
		b.onValueChange = function () {
			var a = this.currentValue, b = this.suggestions;
			c.call(this), 0 == this.suggestions.length && b.length && !this.selection && (this.currentValue = a, this.el.val(a), this.suggestions = b, this.suggest())
		}
	}, c.prototype.bindEvents = function () {
		a("#id-inosmi, #id-rusmi, #id-inosmi-no-accred").on("click", this.toggleSmi.bind(this)), a("#id-visa_support").on("click", this.toggleVisa.bind(this)), a(".form_accreditation .accreditation-request").on("submit", this.submit.bind(this)), a("#accreditation_request-edit").on("click", function () {
			a(".form_check .accreditation-request").remove(), a(".accreditation-preview").addClass("hidden"), a("#firststep").removeClass("hidden"), a("#birth_date").attr("type", "hidden"), a("#id-rusmi:checked").length && a("#reg_date").attr("type", "hidden"), a("#id-inosmi:checked").length && a("#mid_rf_end_date").attr("type", "hidden")
		}), a("#id-workplace").on("keyup", function () {
			var b = a(this).data("max");
			a("#id-work_place_short").closest(".form__field").find(".label_required").toggle(a(this).val().length > b)
		}), a("#accreditation_request-submit").on("click", function (b) {
			b.preventDefault();
			var c = a(this), d = a(".form_accreditation .accreditation-request"), e = c.text(), f = a("#id-passportseries").val() + " " + a("#id-passportnumber").val();
			a("#id-passportdata-confirm").text(f), d.append('<input type="hidden" name="sid" value=' + a.cookie("sid") + " />"), a(this).addClass("is-loading").text("").append('<span class="loader"></span>');
			var g = d.serialize();
			g += "&sid=" + a.cookie("sid");
			var h = d.attr("action");
			a.post(h, g, "json").success(function (b) {
				b.errors ? window.NotificationCenter.notify(_("Ошибка отправки формы")) : (window.NotificationCenter.notify(_("Анкета отправлена")), c.removeClass("is-loading").html(e), a(".accreditation-success").removeClass("hidden"), a(".accreditation-preview, .accreditation-info").addClass("hidden"), a("body,html").animate({scrollTop: 0}, {}, 100))
			})
		}), a("#photo-img").on("click", function (b) {
			a("#photo").val() || a(b.target).closest(".form__field").find("input[type=file]").click()
		})
	}, c.prototype.preview = function (b) {
		b = a(b);
		{
			var c = b.clone(), d = a(".accreditation-preview");
			parseInt(d.prev(".sep").css("marginBottom"))
		}
		c.appendTo(".form_check"), d.removeClass("hidden"), b.closest("#firststep").addClass("hidden"), c.find("input:radio").not(":checked").closest("span").hide(), c.find("input:checkbox").not(":checked").closest(".field__check").hide(), c.find(".form_contact__act").remove(), c.find(".dropdown").each(function () {
			var b = a(this).find(".current-value");
			b.appendTo(a(this).closest(".form__field")), a(this).remove()
		}), a("#birth_date").attr("type", "text"), a("#id-rusmi:checked").length && a("#reg_date").attr("type", "text"), a("#id-inosmi:checked").length && a("#mid_rf_end_date").attr("type", "text"), c.find(".checkbox_tick").remove(), c.find('.form__field input[type="text"], .form__field input[type="email"]').each(function () {
			var b = a(this), c = a("<span></span>");
			c.insertAfter(b), c.text(b.val()), b.hide()
		});
		var e = ".subnav-view .wrapfix__holder:not(.wrapfix__holder_small) .content_top__wrap", f = a(e), g = (f.data("y") || 0, a(".accreditation-preview").offset().top - f.outerHeight());
		a("body,html").animate({scrollTop: g}, {
			step: function (a, b) {
				var c = f.data("y") || 0;
				b.end = g - c
			}
		}, 1e3)
	}, c.prototype.submit = function (b) {
		b.preventDefault();
		var c = this;
		if (a(".label_input_file.is-loading").length)return void window.NotificationCenter.notify(_("Для отправки формы, пожалуйста, дождитесь окончания загрузки файлов."), 8e3);
		var d = a(b.currentTarget);
		d.find("label.error").remove(), d.find(".error").removeClass("error");
		var e = a("#id-passportseries").val() + " " + a("#id-passportnumber").val(), f = a("#id-workplace"), g = a("#id-work_place_short"), h = f.val();
		h.length < f.data("max") && !g.val() && g.val(h), a("#id-passportdata-confirm").text(e), this.formatDate(a("#birth_date")), a("#id-rusmi:checked").length && this.formatDate(a("#reg_date")), a("#id-inosmi:checked").length && this.formatDate(a("#mid_rf_end_date")), d.find('[name="sid"]').val(a.cookie("sid"));
		var i = d.serialize();
		i += "&check=true";
		var j = d.attr("action");
		a.post(j, i, function (a) {
			a.valid && c.preview(d)
		}, "json").success(function (b) {
			if (b.errors) {
				for (var c in b.errors)if (b.errors.hasOwnProperty(c)) {
					var e = d.find('[name="' + c + '"]');
					("photo" === c || "license" === c || "editorial_letter" === c) && (e = d.find('[name="file-' + c + '"]'));
					var f = e.closest(".form__field");
					e.addClass("error"), e.closest(".dropdown").addClass("error"), e.hasClass("select-date") && e.closest(".form__field").find(".dropdown").addClass("error"), f.find("label.error").length || a('<label class="error">').text(b.errors[c]).appendTo(f)
				}
				var g = a(".error").closest(".form__field"), h = ".subnav-view .wrapfix__holder:not(.wrapfix__holder_small) .content_top__wrap", i = a(h), j = i.data("y") || 0, k = g.offset().top - i.outerHeight() - j;
				a("body,html").animate({scrollTop: k}, {
					step: function (a, b) {
						var c = i.data("y") || 0;
						b.end = k - c
					}
				}, 1e3)
			}
		})
	}, c.prototype.toggleSmi = function (b) {
		var c = a(b.currentTarget);
		if (!c.data("checked")) {
			var d = c.attr("id").replace("id-", "is-");
			a(".is-rusmi, .is-inosmi, .is-inosmi-no-accred").each(function (b, c) {
				a(c).toggleClass("hidden", !a(c).hasClass(d))
			});
			var e = c.closest(".form__fieldlong").find(":radio");
			e.prop("checked", !1), e.removeAttr("data-checked"), c.prop("checked", !0), c.attr("data-checked", "checked")
		}
	}, c.prototype.toggleVisa = function (b) {
		var c = a(b.currentTarget).prop("checked");
		a(".is-visa").toggleClass("hidden", !c)
	}, c.prototype.formatDate = function (b) {
		var c = a(b).closest(".form__field_medium"), d = c.find(".form__field_date .current-value"), e = "";
		d.each(function (b) {
			var c = ".";
			2 == b && (c = ""), e += a(this).attr("data-href") + c
		}), a(b).val(e)
	}, c.fillTest = function () {
		a("#id-lastname").val("Тестов"), a("#id-firstname").val("Тест"), a("#id-middlename").val("Тестович"), a("#id-citizenship").val("Россия"), a("#id-email").val("test@kremlin.ru"), a("#id-phone-or-email").val("+79999999999"), a("#id-passportnumber").val("123321"), a("#id-passportseries").val("1111"), a("#id-bpl").val("Нск"), a("#id-workplace").val("Нские новости"), a("#media_rf_reg_number").val("1231233"), a("#id-midrfnum").val("1234567"), a("#id-mid_rf_last_name").val("Тестов"), a("#id-mid_rf_first_name").val("Тест")
	}, window.Accreditation = c
}(window.jQuery), function () {
	"use strict";
	function a(a) {
		View.call(this, a || {})
	}

	a.subclass(View), a.prototype.onRender = function () {
	}, window.ApplicationView = a
}(), function () {
	"use strict";
	function a(a) {
		View.call(this, a), this.locale = a.locale, this.$element = a.element, this.button = a.button, this.container = $(".topline_nav_mobile"), this.header = $(".topline__head"), this.visible = !1, this.onLoad = !1, this.load(), this.onRender()
	}

	var b = {search: "is-search is-search_page", mobileMenu: "is-mobile_nav"};
	a.subclass(View), a.prototype.bindEvents = function () {
		var a = this;
		this.on("click", ".topline__nav_link", this.openSubMenu.bind(this)), $(window).on("popstate.mobileMenuView", this.closeMenu.bind(this)), $(document.body).on("click", ".back_nav", this.backSubMenu.bind(a)), $(document.body).on("click", ".topline__head", function () {
			a.indexPage = !0, a.hideTitleSection(), a.closeMenu(), $(this).removeClass("without_logo"), $(a.titleSection).hide()
		}), $(document.body).on("click", ".topline__togglemore", this.toggleMenu.bind(a))
	}, a.prototype.load = function () {
		if (!this.onLoad) {
			var a = this;
			$(this.$element).load($(this.button).data("url"), function () {
				a.onLoad = !0, resolveLanguageURLs(viewManager.getActiveView().alternateURLs)
			}), this.bindEvents()
		}
	}, a.prototype.toggleMenu = function (a) {
		var b = $(a.currentTarget);
		b.hasClass("is-active") ? (this.closeMenu(), $(document.body).off("click.topline")) : this.showMenu()
	}, a.prototype.onRender = function () {
		$(".content-view .content").length && $(".content-view .content").data("section-href") && ($(this.titleSection).length || this.createTitleSection(), this.showTitleSection())
	}, a.prototype.backSubMenu = function (a) {
		a.preventDefault();
		var b = this, c = $(a.currentTarget);
		this.parentMenu = this.currentMenu.parent("li").parent(".topline__nav"), this.currentMenu.removeClass("visible");
		var d = function () {
			b.currentMenu.find(".topline__nav").hide(), b.currentMenu.show(), b.currentMenu.children("li").show(), b.currentMenu.children("li").children("a").show()
		};
		"requestAnimationFrame" in window ? $(this.currentMenu).one("transitionend webkitTransitionEnd otransitionend MSTransitionEnd", d) : d(), this.parentMenu.length && ($(this.parentMenu).parents("ul").is(".topline_sub_nav") ? c.text(_("Назад в раздел") + this.parentSectionName) : (c.text(_("Назад в разделы сайта") + " "), $(".mob_section_title").text(this.parentSectionName)), this.currentMenu = this.parentMenu, $(this.parentMenu).is(".topline__nav_main") && this.defaultHeaderTitle()), "none" === $(this.elementTransitionBack).css("display") && $(".without_logo").length && $(this.titleSection).show()
	}, a.prototype.defaultHeaderTitle = function () {
		this.$element.find(".topline__nav_item").show(), this.$element.find(".topline__nav_item a").show(), this.$element.find(".topline_sub_nav").removeClass("visible").hide(), $(this.elementTransitionBack).hide(), $(this.header).show()
	}, a.prototype.showMenu = function () {
		function a() {
			c.addClass(b.mobileMenu), $(".topline").addClass("is-fixed"), $(".topline__nav_main").css("minHeight", $(window).innerHeight())
		}

		if (!this.visible) {
			var c = $("body");
			$(this.container).show(), "requestAnimationFrame" in window ? window.requestAnimationFrame(a) : setTimeout(a, 1), $(this.button).addClass("is-active"), $(this.header).after('<div class="topline_transition_back"></div>'), this.elementTransitionBack = $(".topline_transition_back"), $(this.elementTransitionBack).hide(), this.hideTitleSection(), this.indexPage = !1, this.visible = !0
		}
	}, a.prototype.closeMenu = function () {
		if (this.visible) {
			var a = this;
			this.defaultHeaderTitle(), $(this.elementTransitionBack).remove(), $("body").removeClass(b.mobileMenu), $(this.button).removeClass("is-active");
			var c = function () {
				$(a.container).off("transitionend webkitTransitionEnd otransitionend MSTransitionEnd"), $(a.container).hide(), $(".topline").removeClass("is-fixed")
			};
			"requestAnimationFrame" in window ? $(a.container).one("transitionend webkitTransitionEnd otransitionend MSTransitionEnd", c) : c(), $(".content-view .content").data("section-href") && this.showTitleSection(), this.visible = !1
		}
	}, a.prototype.openSubMenu = function (a) {
		var b = $(a.currentTarget);
		b.prop("hreflang").length || a.preventDefault();
		var c = window.router, d = new ViewManager(c);
		d.shouldHandleLink(this) && a.preventDefault(), this.navLink = b, this.parentCurrentMenu = b.parent("li"), this.currentMenu = this.parentCurrentMenu.children(".topline_sub_nav"), this.parentMenu = this.parentCurrentMenu.parent(".topline__nav"), this.itemParentMenu = this.parentMenu.children(".topline__nav_item"), this.parentSectionName = b.closest(".topline_sub_nav").parent().children("a").text(), this.currentSection = b.text();
		var e, f;
		f = this.parentSectionName.length ? _("Назад в раздел") + " " + this.parentSectionName : _("Назад в разделы сайта"), e = '<div class="back_nav">' + f + "</div>";
		var g = '<div class="mob_section_title">' + this.currentSection + "</div>";
		if (this.menuSectionTitie = $(".mob_section_title"), !b.prop("hreflang").length)if ($(this.currentMenu).length) {
			var h = parseInt($(this.container).css("paddingTop")), i = $(window).innerHeight() - h;
			$(".topline__nav_main").css("minHeight", i), $(this.elementTransitionBack).show(), $(this.elementTransitionBack).html(e + g), $(this.header).hide(), $(".back_nav").fadeTo(2e3, .99), this.navLink.hide(), this.itemParentMenu.hide(), this.currentMenu.show(), this.parentCurrentMenu.show();
			var j = function () {
				$(this.currentMenu).addClass("visible"), this.navLink.is(".topline__search") && $(".search__form__input").focus()
			}.bind(this);
			"requestAnimationFrame" in window ? window.requestAnimationFrame(j) : j()
		} else {
			var k = b, l = $(".footer__col ul li"), m = l.find("a");
			$(this.menuSectionTitie).addClass("is-loading"), $(this.titleSection).length || this.createTitleSection(), c.handleURL(k.attr("href"), {
				onLoaded: function () {
					this.$element.find("a").removeClass("is-active"), $(this.menuSectionTitie).removeClass("is-loading").addClass("is-active"), m.removeClass("is-active");
					var a = k.attr("href");
					"/" !== a && l.find('a[href$="' + a + '"]').addClass("is-active"), this.closeMenu()
				}.bind(this), onFailed: function () {
					$(this.menuSectionTitie).removeClass("is-loading")
				}.bind(this), onAbort: "onFailed"
			})
		}
		$(this.titleSection).hide()
	}, a.prototype.createTitleSection = function () {
		$(".topline__in").append('<a class="topline__head_title"></a>'), this.titleSection = $(".topline__head_title"), $(this.header).addClass("without_logo")
	}, a.checkWidth = function () {
		var a = $(document.body), b = window.innerWidth;
		viewManager.isSafari && (b = document.documentElement.clientWidth), 730 >= b ? a.addClass("is-mobile") : a.removeClass("is-mobile")
	}, a.prototype.applyWidth = function () {
		var a = $(document.body), b = $(".topline__head_title"), c = $(".topline__head");
		a.is(".is-mobile") ? b.length && b.removeClass("hidden") : (this.visible && window.mobileMenuView.closeMenu(), (b.length || c.length) && b.addClass("hidden"), c.length && c.removeClass("without_logo"))
	}, a.prototype.showTitleSection = function () {
		if ($(".content-view .content").length) {
			if ("block" === $(this.elementTransitionBack).css("display"))return void $(this.titleSection).hide();
			$(this.titleSection).show(), $(this.header).addClass("without_logo")
		}
	}, a.prototype.hideTitleSection = function () {
		$(this.titleSection).hide(), $(this.header).removeClass("without_logo")
	}, window.MobileMenuView = a
}(), function () {
	"use strict";
	function a(a) {
		View.call(this, a)
	}

	a.subclass(View), a.prototype.bindEvents = function () {
		var a = this, b = ".nav__item a";
		window.isMobile.any() || window.isTablet.any() || this.$element.find(b).on("mouseenter", function () {
			a.$element.find(b).not(this).addClass("is-fade")
		}).on("mouseleave", function () {
			a.$element.find(b).removeClass("is-fade")
		}), viewManager.getView("contentView").on("update", function (a, b) {
			var c = topView.$element.find("a"), d = $.url(b).attr("relative").split("/"), e = !1;
			c.each(function () {
				var a = $(this), b = a.attr("href");
				if (b)for (var f = b.split("/"), g = 1; g < f.length && d[g] === f[g]; g++)c.removeClass("is-active"), a.addClass("is-active"), e = !0
			}), e || c.removeClass("is-active")
		}), $(window).scroll(function () {
			if (!window.isMobile.any() && !$("body").is(".is-mobile") && !$("body").is(".is-reading")) {
				var b, c = $(".content_top__wrap"), d = $(".wrapfix"), e = a.$element.height(), f = d.height(), g = c.data("y") || 60, h = $(".footer").get(0), i = h.getBoundingClientRect();
				if (!i.top)return;
				i.top < f + g ? (d.css("transition", "none"), Modernizr.csstransforms3d ? d.css("transform", "translate3d(0, " + (i.top - f - g) + "px, 0)") : d.css("top", i.top - f + e)) : (d.css("transition", ""), d.css("transform", ""), d.css("top", "")), i.top < e ? (b = i.top - e, Modernizr.csstransforms3d ? (a.$element.css("transition", "none"), a.$element.css("transform", "translate3d(0, " + b + "px, 0)")) : a.$element.css("top", b)) : (a.$element.css("transition", ""), a.$element.css("transform", ""), a.$element.css("top", ""))
			}
		})
	}, a.prototype.startAnchorPreloader = function (a) {
		return {anchor: a, $anchor: $(a)}
	}, a.prototype.completeAnchorPreloader = function (a) {
		topView.$element.find("a").removeClass("is-active"), a.$anchor.removeClass("is-loading").addClass("is-active")
	}, a.prototype.cancelAnchorPreloader = function (a) {
		a.$anchor.removeClass("is-loading")
	}, window.TopView = a
}(), function () {
	"use strict";
	function a(a) {
		View.call(this, a)
	}

	a.subclass(View), a.prototype.bindEvents = function () {
		var a = new ViewManager(window.router), b = (a.getView("contentView"), this);
		(window.isMobile.any() || window.isTablet.any()) && this.on("change", '.dropdown_select[data-type="self-loading"]', this.loadSelect), this.on("touchstart mouseenter click", ".searchtop__subscribe, .subscribe_link", function () {
			var a = $(".subscribe_link input");
			a.select(), b.setSelection()
		}), window.isMobile.any() || window.isTablet.any() || (this.on("focus", ".dropdown", function () {
			b.on("keyup", ".dropdown", function (a) {
				switch (a.keyCode) {
					case 13:
						b.$element.find(".dropdown").dropdown({locale: window.currentLanguage, needLoad: $(this).data("need-load")})
				}
			})
		}), this.on("click", ".dropdown", function () {
			$(this).dropdown({locale: window.currentLanguage, needLoad: $(this).data("need-load")})
		})), this.on("submit", ".form", function (a) {
			a.stopPropagation(), a.preventDefault();
			var b = $(this), c = b.serializeArray(), d = b.attr("action");
			b.find(".submit").addClass("is-loading").text("").append('<span class="loader"></span>'), router.handleURL(d, {
				data: c, force: !0, onLoaded: function () {
					if (window.isMobile.any()) {
						var a = $(".content__flexible").outerHeight() + $(".main-wrapper").offset().top;
						$("body,html").animate({scrollTop: a}, 700)
					}
					b.find(".submit").removeClass("is-loading").html(_("Найти документ"))
				}, onFailed: function () {
					b.find(".submit").removeClass("is-loading").html(_("Найти документ"))
				}, onAbort: "onFailed"
			})
		})
	}, a.prototype.onRender = function () {
		var a = this;
		if (window.isMobile.any() || window.isTablet.any()) {
			var b = this.$element.find(".docsearch__dropdown_content_place"), c = b.data("url");
			b.children().length ? a.selectOption() : b.load(c, function () {
				a.selectOption()
			})
		}
		this.$element.find(".subnav a:not(.is-active)").on("mouseenter", function () {
			$(this).closest(".subnav").find("a").not(this).addClass("is-fade"), $(this).closest(".subnav").hasClass("subnav_secondary") || $(".subnav_secondary a").addClass("is-sub-fade")
		}).on("mouseleave", function () {
			a.$element.find(".subnav a").removeClass("is-fade").removeClass("is-sub-fade")
		}), this.$element.find(".dateblock").datepick(), window._reinitStickNav()
	}, a.prototype.startAnchorPreloader = function (a) {
		var b = $(a);
		return b.addClass("is-loading"), b.closest(".form").length && b.text("").append('<span class="loader"></span>'), {anchor: a, $anchor: b}
	}, a.prototype.completeAnchorPreloader = function (a) {
		var b = a.$anchor, c = ".subnav, .media, .hentry, .promoted__entry, .dropdown_list";
		contentView.$element.find(c).removeClass("is-active"), b.closest(c).find("a").removeClass("is-active"), b.closest(".form").length && b.removeClass("is-loading").addClass("is-active").html(_("Показать"))
	}, a.prototype.cancelAnchorPreloader = function (a) {
		var b = a.$anchor;
		b.closest(".form").length && b.removeClass("is-loading").html(_("Показать"))
	}, a.prototype.selectOption = function () {
		var a = this, b = a.$element.find(".docsearch__dropdown_content_place"), c = (b.data("url"), window.location.pathname);
		a.$element.find(".popular").remove();
		var d = b.find("select"), e = d.find("option");
		$(d.options).prop("selected", !1), d.show(), b.find(".current-value").hide(), e.each(function () {
			var a = $(this).data("href");
			a === c && $(this).prop("selected", !0)
		})
	}, a.prototype.loadSelect = function () {
		var a = $("body"), b = $(this.selectedOptions), c = this;
		a.removeClass("is-dropdown"), $(this).addClass("is-loading"), router.handleURL(b.data("href"), {
			onLoaded: function () {
				$(c).removeClass("is-loading").addClass("is-active")
			}, onFailed: function () {
				$(c).removeClass("is-loading")
			}
		})
	}, a.prototype.getCurrentNavItem = function () {
		return this.$element.find(".subnav .is-active:last")
	}, a.prototype.setSelection = function () {
		var a, b, c = this.$element.find(".subscribe_link_copy")[0] || window.contentView.$element.find(".subscribe_link_copy")[0];
		if (document.createRange) {
			b = window.getSelection();
			var d = document.createRange();
			d.selectNode(c), b.removeAllRanges(), b.addRange(d)
		} else a = document.body.createTextRange(), a.moveToElementText(c), a.select()
	}, a.prototype.onBeforeClean = function () {
		var a = this.$element.find(".dateblock");
		a.each(function (a, b) {
			var c = $(b).data("datepick");
			c && c.destroy()
		})
	}, window.SubnavView = a
}(), function () {
	"use strict";
	function ContentView(a) {
		View.call(this, a)
	}

	function shouldCloseReader(a, b) {
		return "popstate" === a ? b && !b.readerView : "initial" === a ? !1 : $body.hasClass("is-narrow")
	}

	var subNavSelector = ".subnav-view .wrapfix__holder:not(.wrapfix__holder_small) .content_top__wrap", elementIconSelector = ".tabs_article", elementsSelector = ".media, .hentry, .promoted__entry", elementIconSelectorParent = ".hentry__assets", $body = $(document.body);
	ContentView.subclass(View), ContentView.prototype.bindEvents = function () {
		this.on("click", ".full_list", this.showFullList.bind(this)), this.on("click", ".full_info", this.showFullInfo.bind(this)), this.on("click", ".full_info_hide", this.hideFullInfo.bind(this)), this.on("mouseenter", ".sites", function () {
			if (!$(this).is(".is-active") && ($(this).addClass("is-animation"), $("html").is(".ie9, .ie8"))) {
				var a = 300, b = 200;
				$(".sites ul").stop().delay(b).animate({height: $(".sites").data("minheight") + 60}, a).delay(600).animate({height: $(".sites").data("minheight")}, a)
			}
		}), this.on("mousedown", ".sites", this.toggleSiteModules.bind(this)), this.on("click", ".trips_map_show, .trips_map_hide", this.toggleMap.bind(this)), this.on("click", ".events_index__toggle", this.toggleIndexBlock.bind(this)), this.on("change", ".select_catalog .select", this.loadSelect), this.on("click", ".trips__count", this.showBlock.bind(this)), this.on("click", ".card_close", this.closeBlock.bind(this)), this.on("click", ".list_link_opening", this.addHash.bind(this)), this.on("update", this.onUpdate.bind(this)), this.on("mouseenter", ".searchtop__subscribe, .subscribe_link", function () {
			var a = $(".subscribe_link input");
			a.select(), window.subNavView.setSelection()
		})
	}, ContentView.prototype.init = function () {
		var a = new ViewManager(window.router), b = (a.getView("contentView"), a.getView("subNavView"), this);
		window.router.one("loaded", this.scrollToHash.bind(this)), this.tooltips = [], b.$element.sharedTooltip({
			selector: ".read__tag, .with_person_tag", onBeforeShow: function (a) {
				var b = $(a).find(".tooltip_description_dark");
				b.html(b.attr("data-value"))
			}
		}), b.tooltips.push(b.$element.data("sharedTooltip").tooltip), this.visibleListTrips = !1
	}, ContentView.prototype.changeTitleMenu = function () {
		var a = this.$element.find(".tags");
		if (a.length) {
			var b = $(".search_results__keyword"), c = b.next(".hidden"), d = a.offset().top, e = function () {
				var a = $(window).scrollTop();
				$(".is-search.is-search_page").length && (a += $(".search__form").height()), a > d ? (b.hide(), c.show()) : (b.show(), c.hide())
			};
			$(window).on("scroll", function () {
				e()
			})
		}
	}, ContentView.prototype.loadSelect = function (a) {
		a.preventDefault();
		var b = $(this.selectedOptions), c = b.data("href"), d = window.router, e = $(".topline__head_title");
		e.addClass("is-loading"), d.handleURL(c, {
			onLoaded: function () {
				e.removeClass("is-loading").addClass("is-active")
			}, onFailed: function () {
				e.removeClass("is-loading")
			}, onAbort: "onFailed"
		})
	}, ContentView.prototype.toggleIndexBlock = function (a) {
		a.preventDefault();
		var b = $(a.currentTarget), c = b.closest(".events_index_hidden");
		return this.setIndexBlockState(c, !c.is(".is-active"), !0), !1
	}, ContentView.prototype.setIndexBlockState = function (a, b, c) {
		var d = a.find(".reveal_block");
		b ? (d[c ? "fadeIn" : "show"](), a.addClass("is-active")) : (d.hide(), a.removeClass("is-active")), window.localStorage && (window.localStorage["block_state_" + a.data("block")] = b ? "open" : "")
	}, ContentView.prototype.startAnchorPreloader = function (a) {
		var b = $(a), c = $('<span class="loader"></span>'), d = b.closest(elementsSelector);
		return d.addClass("is-loading"), b.is(".bluebutton") && b.text("").append(c), b.is(".link__at_section") && b.append(c), this._$lastActiveAnchor && this._$lastActiveAnchor.removeClass("is-active"), this._$lastActiveAnchor = b, {
			anchor: a,
			$anchor: b,
			$loader: c,
			$elements: d
		}
	}, ContentView.prototype.completeAnchorPreloader = function (a) {
		var b = a.$anchor, c = a.$elements;
		b.addClass("is-active"), this.$element.find(elementsSelector).removeClass("is-active"), this.$element.find(elementsSelector).find(elementIconSelector).removeClass("is-active"), c.removeClass("is-loading").addClass("is-active"), c.find(elementIconSelector).addClass("is-active"), !b.hasClass("tabs_article") && b.closest(elementIconSelectorParent).length && c.find(elementIconSelector).removeClass("is-active");
		var d = $(".subnav_secondary a.is-active").data("value");
		b.hasClass("tabs_article") || "video" !== d || c.find(elementIconSelector).removeClass("is-active"), a.$loader.length && a.$loader.detach()
	}, ContentView.prototype.cancelAnchorPreloader = function (a) {
		a.$elements.removeClass("is-loading"), this._$lastActiveAnchor.addClass("is-active"), a.$loader.length && a.$loader.detach()
	}, ContentView.prototype.showFullInfo = function (a) {
		a.preventDefault(), a.stopPropagation();
		var b = $(a.currentTarget), c = $('<div class="page-view" style="display:none"></div>'), d = b.prop("href") || b.data("url"), e = $(subNavSelector), f = (e.data("y") || 0, ".institution_info"), g = 300, h = parseInt(this.$element.find(".institution").css("marginBottom")), i = $("body");
		b.hasClass("is-active") ? this.hideFullInfo() : ($.get(d).done(function (a) {
			var d = $($.parseHTML(a)), e = ".page", j = d.find(e), k = b.closest(f), l = $(".page-view");
			j.length || (j = d.filter(e).html()), b.addClass("is-active").removeClass("is-loading");
			var m = 0;
			l.length && l.prev(f).offset().top < k.offset().top && (m = l.outerHeight() + h, (window.isMobile.any() || i.is(".is-mobile")) && (m = l.outerHeight() + parseInt(k.find(".list_item").css("paddingBottom")))), k.after(c), c.html(j), c.slideDown(g, function () {
				var a = $("body").scrollTop() + $("html").scrollTop() - m;
				$("body,html").scrollTop(a), l.remove()
			})
		}).fail(function () {
			b.removeClass("is-loading")
		}), this.$element.find(".full_info").removeClass("is-active"), b.addClass("is-loading"))
	}, ContentView.prototype.hideFullInfo = function () {
		var a = 300;
		this.$element.find(".page-view").slideUp(a, function () {
			$(this).remove(), $(".read__tooltip").remove()
		}), this.$element.find(".full_info").removeClass("is-active")
	}, ContentView.prototype.toggleSiteModules = function (a) {
		if (!$(a.target).closest(".site").length) {
			a.preventDefault();
			var b = this.$element.find(".sites");
			b.removeClass("is-animation"), b.hasClass("is-active") ? this.hideSiteModules() : this.showSiteModules()
		}
	}, ContentView.prototype.showSiteModules = function () {
		var a = this.$element.find(".sites"), b = a.find("ul");
		a.addClass("is-active"), b.height(a.data("maxheight"))
	}, ContentView.prototype.hideSiteModules = function () {
		var a = this.$element.find(".sites"), b = a.find("ul");
		a.removeClass("is-active"), b.height(a.data("minheight"))
	}, ContentView.prototype.showOnceSiteModules = function () {
		var a = this.$element.find(".sites"), b = a.find("ul"), c = b.height();
		b.height(a.data("maxheight")), setTimeout(function () {
			b.height(c)
		}, 150)
	}, ContentView.prototype.handleDateUrl = function () {
		var a = $.url(this.currentURL), b = a.attr("path");
		if (-1 !== b.indexOf("by-date")) {
			var c = b.match(/by-date\/([\d.]+)/);
			if (c) {
				var d = c[1].split("."), e = d.reverse().join("-"), f = moment(e).add(1, "d"), g = [".events__title time", ".hentry time", ".media__meta time"], h = $(g.join(",")).filter(function (a, b) {
					return moment($(b).attr("datetime")).isBefore(f)
				})[0];
				if (h) {
					var i = $(h).closest(".events__title, .hentry, .cols, .media_wide");
					if (!i.length)return;
					var j = i.find("a");
					j.length || (j = $('<a class="special-hidden" href="#">').on("blur", function () {
						j.remove()
					}), i.prepend(j)), j.focus();
					var k = parseInt(i.prev(".hentry, .cols, .media_wide").css("margin-bottom") || 0, 10);
					this.scrollToBlock(i, {noPreventionCheck: !0, margin: k})
				}
			}
		}
	}, ContentView.prototype.spyForDates = function () {
		var a = $(".subnav-view .dateblock").data("datepick");
		if (a) {
			var b = ".events__title time, .media__meta time", c = $(b);
			if (c.length) {
				var d = new Date, e = $(subNavSelector), f = $(".wrapsite").offset().top;
				if (!e.length)var g = $(".subnav-view .wrapfix__holder .content_top__wrap").outerHeight() + $(".topline").outerHeight();
				$(window).unbind("scroll.spyfordates").bind("scroll.spyfordates", function () {
					var b, h = 50;
					b = e.length ? e.data("y") + e.height() : g;
					for (var i = $(window).scrollTop() - b, j = 0; j < c.length; j++) {
						var k = $(c[j]), l = k.offset().top - i - f, m = k.outerHeight();
						if (h - Math.abs(l) > 0 || l + m > 0) {
							var n = new Date(Date.parse(k.attr("datetime")));
							a && n && d.getTime() !== n.getTime() && (a.setValue(new Date(n.getTime())), d = n);
							break
						}
					}
				})
			}
		}
	}, ContentView.prototype.scrollToBlock = function (a, b) {
		b = b || {};
		var c, d = this.$element.find(".sep");
		c = d.length ? parseInt(this.$element.find(".sep").css("marginTop")) + this.$element.find(".sep").outerHeight() : 0;
		var e = $(".subnav-view .content_top__wrap"), f = a.offset().top - e.outerHeight() - c;
		b.margin && (f -= b.margin), b.noPreventionCheck && (paginator._options.loadingPreventionCheck = !1), $("body,html").animate({scrollTop: f}, {
			step: function (a, b) {
				var c = e.data("y") || 0;
				b.end = f - c
			}, complete: function () {
				b.noPreventionCheck && setTimeout(function () {
					paginator._options.loadingPreventionCheck = !0
				}, 5e3)
			}
		}, 1e3)
	}, ContentView.prototype.toggleMap = function (a) {
		var b = $(a.currentTarget), c = ".trips_map_hide";
		b.addClass("is-active"), $(c).length && !$(a.currentTarget).is(c) && $(c).addClass("is-active"), this.setMapState(b)
	}, ContentView.prototype.setMapState = function (a) {
		if (a.length) {
			var b = ".trips_map_hide", c = a.parent().find(".trips_map"), d = $(".sep_map"), e = a.hasClass("is-active") || a.hasClass("remember-state") && window.localStorage && (window.localStorage.selectedCountry || window.localStorage.selectedRegion);
			if (e && !this.isOpenMap) {
				if (d.hide(), !c.find(".map-switch.is-active").length) {
					var f = c.data("selected-map") || "russia", g = c.data("selected-region");
					window.loadAndRunMap(c.find(".map-" + f), f, void 0, g)
				}
				c.stop().slideDown(), a.addClass("is-active"), this.isOpenMap = !0
			} else $(b).length && a.is(b) ? c.stop().slideUp(function () {
				$(".trips_map_show").removeClass("is-active"), a.removeClass("is-active")
			}) : (c.stop().slideUp(), d.show(), a.removeClass("is-active")), this.isOpenMap = !1
		}
	}, ContentView.prototype.scrollToHash = function () {
		var a = this;
		if (this.currentURL) {
			var b = $.url(this.currentURL).attr("fragment");
			b && setTimeout(function () {
				var c;
				try {
					c = $("#" + b)
				} catch (d) {
				}
				c && c.length && a.scrollToBlock(c)
			}, 200)
		}
	}, ContentView.prototype.onRender = function () {
		var a = new ViewManager(window.router), b = window.paginator, c = a.getView("subNavView"), d = this, e = $("body"), f = this.$element.find(".lister-page");
		if (this.scrollTo(0), this.scrollToHash(), !$(".hover-block").length) {
			$("<div></div>").appendTo(".main-wrapper .content-view").addClass("hover-block")
		}
		if (c.$element.find("form").formActive("novalidate"), this.initializeSlider(), this.initializeSiteModules(), b.reinit({
				holder: f,
				noInitialScroll: !0
			}), b.off("navigate.content").on("navigate.content", function (b, c) {
				var d = a.getView("readerView");
				e.hasClass("is-wide") && e.hasClass("is-reading") || window.router.updateState({contentView: c, readerView: d.currentURL}, c, null)
			}), b.on("render", function (a, b, c) {
				d.spyForDates(c), d.initializeUpdater($.parseHTML(b.response)), $("audio, video").removeAttr("controls"), $(".media__videolink, .media__pic img", this.$element).on("click touchstart", function (a) {
					a.preventDefault();
					var b = ["playpause", "current", "progress", "duration", "tracks", "volumeext", "quality", "fullscreen"];
					if (-1 !== navigator.appName.indexOf("Internet Explorer"))try {
						b.pop()
					} catch (c) {
					}
					$(this).closest(".media__container").player({autoPlay: !0, features: b})
				}), $(".audio_link").closest(".media__container").player({
					autoPlay: !1,
					features: ["playpause", "current", "progress", "duration", "tracks", "volumeext", "quality", "fullscreen", "newwindow"]
				}), d.initializeSlider()
			}), $("audio, video").removeAttr("controls"), this.initializePlayer(), $(".dateblock", this.$element).datepick(), window.bindMediaLinks(), this.limitInputFields(), this.contactForm(), this.changeTitleMenu(), this.spyForLetter(), this.checkedTopic(), this.subscribe(), window.localStorage && this.$element.find(".events_index_hidden").each(function (a, b) {
				var c = $(b), d = window.localStorage["block_state_" + c.data("block")];
				void 0 !== d && this.setIndexBlockState(c, d)
			}.bind(this)), this.initializeUpdater(), this.spyForDates(this.$element), this.initializeMap(), this.renameTitle(), window.isTablet.any() || window.isMobile.any() || this.$element.find(".dropdown").on("click", function (a) {
				a.stopPropagation(), $(this).dropdown({locale: window.currentLanguage, needLoad: $(this).data("need-load")})
			}), this.$element.find(".form_accreditation").length) {
			new Accreditation
		}
		this.$element.find(".file_input").on("click", function () {
			$(this).inputFile({preload: $(this).data("preload")})
		}), this.$element.find(".search__form__input").on("focus.autocomplete", $(".nav__link_search").data("search").initAutocomplete)
	}, ContentView.prototype.onUpdate = function () {
		$(document.body);
		this.handleDateUrl()
	}, ContentView.prototype.showBlock = function (a) {
		var b, c = $(a.currentTarget), d = c.closest(".hentry_trips"), e = d.find(".trips_loader"), f = c.data("url"), g = 300;
		d.is(".has-loaded") ? (b = d.next(".card_wrapper"), d.is(".is-visible") ? (d.removeClass("is-visible"), b.stop().slideUp(g)) : (d.addClass("is-visible"), b.stop().slideDown(g))) : (b = $('<div class="card_wrapper"></div>'), d.after(b), e.addClass("is-loading"), b.load(f, function () {
			$(this).stop().slideDown(g), e.removeClass("is-loading"), d.addClass("has-loaded is-visible")
		}))
	}, ContentView.prototype.closeBlock = function (a) {
		var b = $(a.currentTarget), c = b.closest(".card_wrapper"), d = c.prev(".hentry_trips"), e = 300;
		d.is(".is-visible") && (d.removeClass("is-visible"), c.stop().slideUp(e))
	}, ContentView.prototype.showFullList = function (a) {
		a.stopPropagation();
		var b = $(a.currentTarget), c = b.closest(".with_hidden_list"), d = c.find(".list__links .hidden");
		b.hide(), d.show(500)
	}, ContentView.prototype.initializeUpdater = function (a) {
		var b = this, c = new ViewManager(window.router), d = c.getView("subNavView"), e = $(a || this.$element).find('.lister-page[data-page="1"]'), f = e.data("updates-url"), g = this.currentURL, h = e.data("base-url");
		this.updater && !a && (this.updater.destroy(), this.updater = null), e.length && f && g == h && (this.updater = new Updater({
			interval: 6e4,
			url: f,
			container: e,
			itemSelector: ".hentry,.media",
			found: function (a) {
				var c = d.getCurrentNavItem(), e = c.find(".updates-count-badge");
				return c.removeClass("has-updates"), a > 9 && (a = ">9", b.updater.stop()), 0 === a ? void e.remove() : (c.addClass("has-updates"), void(e.length ? e.text(a) : c.append('<span class="updates-count-badge">' + a + "</span>")))
			}
		}), this.updater.start())
	}, ContentView.prototype.checkedTopic = function () {
		var a = ".main-checked", b = ".cols", c = "all_checked", d = ".field__check", e = ":checkbox:not(" + a + ")", f = this.$element.find(a);
		f.each(function () {
			var a = $(this), f = $(this).parents(b);
			f.find(e).length !== f.find(e + ":checked").length && (a.parents(d).removeClass("is-active"), f.find(":checkbox").removeClass(c))
		}), this.$element.find(a).on("change", function () {
			$(this).closest(d).toggleClass("is-active"), $(this).parents(b).find(e).prop("checked", this.checked).toggleClass(c)
		}), this.$element.find(e).on("change", function () {
			var f = $(this).parents(b), g = f.find(a);
			g.prop("checked") && (f.find(":checkbox").removeClass(c).prop("checked", !1), $(this).parents(d).removeClass("is-active"), $(this).prop("checked", !0), g.prop("checked", !1).parents(d).removeClass("is-active")), f.find(e).length === f.find(e + ":checked").length && ($(this).parents(d).find(":checkbox").removeClass("is-active"), f.find(e).addClass(c), g.prop("checked", !0).parents(d).addClass("is-active"))
		})
	}, ContentView.prototype.spyForLetter = function () {
		var a = new ViewManager(window.router), b = a.getView("subNavView"), c = b.$element.find(".nav_letters");
		if (c.length) {
			var d = this.$element.find(".catalog_letter"), e = $(subNavSelector);
			$(window).unbind("scroll.spyforletter").bind("scroll.spyforletter", function () {
				var a = e.data("y") || 0, b = a + e.height(), f = $(window).scrollTop() + b;
				d.each(function (a, b) {
					var d, e = $(b).closest(".block__letter_wrapper");
					d = e.find(".sep").length ? parseInt(e.find(".sep").css("marginTop")) + 2 * e.find(".sep").outerHeight() : parseInt(e.prev().find(".sep").css("marginTop")) + 2 * e.prev().find(".sep").outerHeight();
					var g = $(b).offset().top - d, h = g + e.outerHeight(), i = $(b).attr("id");
					return f > g && h > f ? (c.find("a").removeClass("is-active"), c.find('a[href="#' + i + '"]').addClass("is-active"), !1) : void 0
				})
			})
		}
	}, ContentView.prototype.addHash = function (a) {
		var b = $(a.currentTarget), c = b.closest(".institution"), d = "#" + c.attr("id");
		location.hash !== d && (location.hash = d), b.addClass("is-loading"), window.router.one("loaded", function () {
			b.removeClass("is-loading")
		})
	}, ContentView.prototype.initializeSlider = function () {
		for (var a = this.$element.find(".slider__slides"), b = a.find(".slide"), c = 0, d = 0; d < b.length; d++)b.eq(d).hasClass("starting-slide") && (c = d);
		a.length && a.cycle({swipe: !0, fx: "scrollHorz", next: ">.slider__next", prev: ">.slider__prev", slides: ".slide", captionPlugin: "caption2", paused: !0, autoHeight: "680:420"})
	}, ContentView.prototype.initializeSiteModules = function () {
		var a = this.$element.find(".sites");
		if (a.length) {
			var b = a.find("ul"), c = b.height();
			b.height(a.data("minheight")), a.data("maxheight", c)
		}
	}, ContentView.prototype.initializeMap = function () {
		var a = $("body");
		this.isOpenMap = !1, window.isMobile.any() || a.is(".is-mobile") || this.setMapState(this.$element.find(".trips_map_show"))
	}, ContentView.prototype.initializePlayer = function () {
		$(".audio_link").closest(".media__container").player({autoPlay: !1, features: ["playpause", "current", "progress", "duration", "tracks", "volumeext", "quality", "fullscreen", "newwindow"]})
	}, ContentView.prototype.subscribe = function () {
		function onChangeValue(callback) {
			this.value != window.memo_values[this.id] && (window.memo_values[this.id] = this.value, callback instanceof Function ? callback.call(this) : eval(callback))
		}

		function reformatPhone() {
			var a = jQuery("#phone"), b = a.val(), c = b.replace("+7", "").replace(/[()\s+-]/g, "").replace(/^7/, "");
			c && (c = c.substring(0, 3) + "" + c.substring(3, 6) + c.substring(6, 8) + c.substring(8, 10), c.match(/\d{3}\d{3}\d{2}\d{2}/) && (a.val(c), a.trigger("keyup"), self.$element.find(".form_sms_daily").validate()))
		}

		function requiredMessageHandler(a, b) {
			return $(b).attr("title")
		}

		var self = this, mainChecked = ".main-checked", subScribe = function (a) {
			if (a = $(a), !(a.length <= 0)) {
				var b = $(this.submitButton), c = a.find(".subscribe_send"), d = a.find(".subscribe_inactive"), e = a.find(".subscribe_save"), f = a.find('input[name="email"]'), g = topics(a, f), h = b.attr("formaction");
				$.post(h, g, function (b) {
					b.success ? h.indexOf("send") >= 0 ? (NotificationCenter.notify(c.text()), a.find("#code").focus()) : h.indexOf("save") >= 0 ? NotificationCenter.notify(e.text()) : h.indexOf("subscribe") >= 0 && (NotificationCenter.notify(d.text()), location.reload()) : b.error && NotificationCenter.notify(b.error)
				}, "json")
			}
		};
		this.$element.find(".form_email_daily").validate({submitHandler: subScribe}), this.$element.find(".form_email_weekly").validate({
			highlight: function () {
				$(this.currentForm).removeClass("complete")
			}, unhighlight: function () {
				$(this.currentForm).addClass("complete")
			}, submitHandler: subScribe
		}), this.$element.find(".form_email_daily").formActive("validate");
		var topics = function (a, b) {
			var c = a.find(":checkbox").not(mainChecked).serializeArray(), d = a.find(b).val(), e = [{name: "email", value: d}, {name: "sid", value: $.cookie("sid")}];
			return a.find(mainChecked) && (e.push({name: "create", value: 1}), e = e.concat(c)), e
		}, formSmsDaily = function (a) {
			var b = $(a);
			if (!(b.length <= 0)) {
				var c = b.find(".subscribe_inactive"), d = b.find(".subscribe_active"), e = b.find(".subscribe_send"), f = $(this.submitButton), g = b.find("#phone").val(), h = b.find(".phone_number"), i = g.replace(/\D+/g, ""), j = b.find(":checkbox").not(mainChecked).serializeArray(), k = b.find("#code").serializeArray(), l = [{
					name: "phone",
					value: i
				}, {name: "create", value: 1}];
				l = l.concat(j), b.find("#code").val().length && (l = l.concat(k)), l.push({name: "sid", value: $.cookie("sid")});
				var m = f.attr("formaction");
				$.post(m, l, function (a) {
					a.success ? m.indexOf("send") >= 0 ? ($(".enter_code").removeClass("hidden"), h.hide(), $(".with_code").show(), b.find(".subscribe").addClass("hidden"), b.find("#phcurrent").val(i), NotificationCenter.notify(e.text())) : f.is(".enter_code") ? (NotificationCenter.notify(d.text()), location.reload()) : m.indexOf("save") >= 0 ? location.reload() : m.indexOf("unsubscribe") >= 0 && (location.reload(), NotificationCenter.notify(c.text())) : NotificationCenter.notify(a.error)
				}, "json")
			}
		};
		jQuery.validator.addMethod("phone", function (a) {
			return /^\d{10}$/.test(a.replace(/[()\s+-]/g, ""))
		}, _("Пожалуйста, введите корректный номер телефона")), window.timeouts = [], window.memo_values = [];
		var $phoneField = self.$element.find(".form_sms_daily #phone");
		$phoneField.focus(function () {
			var a = $(this).attr("id");
			window.timeouts[a] = setInterval(function () {
				onChangeValue.call(document.getElementById(a), reformatPhone)
			}, 500)
		}), $phoneField.blur(function () {
			var a = $(this).attr("id");
			onChangeValue.call(document.getElementById(a), reformatPhone), clearInterval(window.timeouts[a]), delete window.timeouts[a]
		}), this.$element.find(".form_sms_daily").validate({
			highlight: function () {
				$(this.currentForm).removeClass("complete")
			}, unhighlight: function () {
				$(this.currentForm).addClass("complete")
			}, messages: {phone: {required: requiredMessageHandler}}, ignoreTitle: !0, submitHandler: formSmsDaily, rules: {phone: {required: !0, phone: !0}, code: {required: !0, number: !0}}
		})
	}, ContentView.prototype.renameTitle = function () {
		var a = $("body");
		if (window.isMobile.any() || a.is(".is-mobile")) {
			var b = viewManager.getView("mobileMenuView");
			$(b.titleSection).length || b.createTitleSection();
			var c = $(".topline__head_title"), d = this.$element.find(".content"), e = d.data("section");
			e && d.length ? (b.showTitleSection(), c.text(e), c.attr("href", d.data("section-href"))) : b.hideTitleSection()
		}
	}, ContentView.prototype.contactForm = function () {
		function a(a, b) {
			return $(b).attr("title")
		}

		function b(a, b) {
			var c = b ? 1e3 : 1024;
			if (c > a)return a + " B";
			var d = b ? ["кБ", "МБ", "ГБ", "ТБ", "ПБ", "ЭБ", "ЗБ", "ЙБ"] : ["КиБ", "МиБ", "ГиБ", "ТиБ", "ПиБ", "ЭиБ", "ЗиБ", "ЙиБ"], e = -1;
			do a /= c, ++e; while (a >= c);
			return a.toFixed(1) + " " + d[e]
		}

		var c = this.$element.find(".form_contact");
		c.submit(function (a) {
			return c.attr("target") ? !0 : void(c.valid() && (a.stopPropagation(), c.find("[name=sid]").val($.cookie("sid")), c.addClass("is-sending"), c.find("button.submit").addClass("is-loading").text("").append('<span class="loader"></span>'), $.IFramePost({
				form: c, error: function () {
					NotificationCenter.notify(_("Ошибка отправки формы")), c.find("button.submit").removeClass("is-loading").html(_("Отправить")), setTimeout(function () {
						c.removeClass("is-sending")
					}, 800)
				}, success: function (a) {
					if (setTimeout(function () {
							c.removeClass("is-sending")
						}, 800), a.valid)a.sent && (NotificationCenter.notify(_("Сообщение успешно отправлено")), c.trigger("reset"), c.find("#contacts-file-input").show(), c.find(".file-loaded").hide()), a.sent || NotificationCenter.notify(a.allowed_at ? a.allowed_at : _("Ошибка отправки сообщения")); else if (a.errors)for (var b in a.errors)if (a.errors.hasOwnProperty(b)) {
						var d = c.find('[name="' + b + '"]'), e = d.closest(".form__field");
						d.addClass("error"), e.find("label.error").length || $('<label class="error">').text(a.errors[b]).appendTo(e)
					}
					c.find("button.submit").removeClass("is-loading").html(_("Отправить"))
				}
			})))
		});
		var d = c.find(".file_input");
		d.on("click", function () {
			$(this).inputFile()
		}), window.humanFileSize = b;
		var e = c.find('textarea[name="message"]'), f = parseInt(e.attr("maxlength"), 10);
		e.removeAttr("maxlength"), c.validate({
			messages: {message: {required: a}, firstname: {required: a}, lastname: {required: a}, email: {required: a}, fromplace: {required: a}},
			rules: {message: {maxlength: f, minlength: 3}, file: {filesize: 5e6, accept: "image/png,image/jpeg,image/bmp"}},
			ignoreTitle: !0,
			errorPlacement: function (a, b) {
				a.appendTo(b.closest(".form__field"))
			},
			highlight: function () {
				$(this.currentForm).removeClass("complete")
			},
			unhighlight: function () {
				this.objectLength(this.invalid) || $(this.currentForm).addClass("complete")
			},
			onkeyup: function (a) {
				var b = this.elements();
				b.is(a) && (a.value.length >= 3 && a.value.length < f ? $(this.currentForm).addClass("complete") : $(this.currentForm).removeClass("complete"))
			}
		}), c.formActive("validate"), c.formstate()
	}, ContentView.prototype.limitInputFields = function () {
		var a = this.$element.find(".limited-input");
		a.each(function () {
			var a = $(this), b = a.find("textarea"), c = a.find(".textarea__left"), d = parseInt(b.attr("maxlength"), 10);
			b.limited({counter: c, limit: d}), c.dblclick(function () {
				var a = b.val(), c = a.substr(0, d);
				b.val(c), b.trigger("insert.limiter"), b.trigger("input.autosize")
			})
		})
	}, ContentView.prototype.onBeforeClean = function () {
		var a = this.$element.find(".dateblock");
		a.each(function (a, b) {
			var c = $(b).data("datepick");
			c && c.destroy()
		})
	}, ContentView.prototype.testRoute = function (a) {
		var b = viewManager.getView("readerView");
		return !b.testRoute(a)
	}, ContentView.prototype.reloadIsRequired = function (a) {
		return a = a.split("#")[0], !this.currentURL || a && this.currentURL.split("#")[0] !== a
	}, ContentView.prototype.onRoute = function (a, b, c, d, e) {
		var f = $.url(a);
		if (b) {
			if ($body.toggleClass("index_page", "/" === f.attr("path")), e.data && !$.isEmptyObject(e.data)) {
				var g = $.param(e.data);
				g = g.replace(/[^=&]+=(&|$)/g, "").replace(/&$/, ""), a = f.attr("path") + "?" + g + f.attr("fragment"), f = $.url(a)
			}
			subNavView.update(b), contentView.update(b, a)
		} else if (a.split("#")[1]) {
			var h = this.currentURL.split("#")[0], i = a.split("#")[1];
			this.currentURL = h + (i ? "#" + i : ""), this.scrollToHash()
		}
		var j = viewManager.getView("readerView");
		if (shouldCloseReader(c, d))viewManager.closeReader({silent: !0}); else if (!j.isClosed)return void(e.shouldNavigate && history.state && history.state.contentView && contentView.currentURL !== history.state.contentView && router.navigate({
			contentView: contentView.currentURL,
			readerView: j.currentURL
		}, j.currentURL, j.currentTitle));
		if (resolveLanguageURLs(contentView.alternateURLs), !("initial" === c || history.state && contentView.currentURL === history.state.contentView)) {
			var k = contentView.currentTitle;
			if ("popstate" === c)return void(document.title = k);
			var d = {readerView: j.currentURL, contentView: contentView.currentURL};
			return viewManager.setActiveView("contentView"), e.shouldNavigate && router.navigate(d, a, k), document.title = k, [d, k]
		}
	}, window.ContentView = ContentView
}(), function () {
	"use strict";
	function a(a) {
		View.call(this, a), this.isShareOpened = !1, this.scrollWidth = 0;
		var b = document.createElement("div");
		b.style.overflowY = "scroll", b.style.width = "50px", b.style.height = "50px", b.style.visibility = "hidden", document.body.appendChild(b);
		var c = b.offsetWidth - b.clientWidth;
		document.body.removeChild(b), c > 0 && (this.scrollWidth = c), this.isShow = !1
	}

	var b = $(".topline__head").attr("href");
	if (b && "/" == b.charAt(0) && "/" != b)for (var c = b.replace(/\//g, "\\/"), d = window.readerUrlMap.length; d--;)window.readerUrlMap[d] = window.readerUrlMap[d].replace("\\/", c);
	a.subclass(View), a.prototype.bindEvents = function () {
		var a = $("body"), b = this;
		this.on("click", ".read__close", this.close.bind(this)), this.on("show", this._onShow.bind(this)), $(window).on("orientationchange", this.recalcVideoAspectRation.bind(this)), this.on("click", ".read__tagsmore", this.showTags), this.on("click", ".tabs_share", function () {
			$(this).closest(".right_tabs").shared()
		}), this.on("touchstart touchmove", ".read__internal_content > p", this.handleDoubleTap.bind(this)), this.on("mousemove", this.$element, function (a) {
			$(this).toggleClass("is-cursor", b.countOffset(a))
		}), this.on("mouseenter mousemove", this.container, function (a) {
			$(a.target).closest(".read__content").length || $(a.target).closest(".read__tabs").length ? ($(".read").removeClass("is-hover"), $(".hover-block").removeClass("is-active")) : ($(".read").addClass("is-hover"), $(".hover-block").addClass("is-active"))
		}), this.on("mouseleave", this.container, function () {
			$(".read").removeClass("is-hover"), $(".hover-block").removeClass("is-active")
		}), a.on("click", ".tooltip_link", this.imitationLinks.bind(this)), a.on("mouseenter", ".tooltip__close", function () {
			$(this).closest(".read__tooltip").fadeOut(500)
		}), a.off("click.reader").on("click.reader", ".read", function (a) {
			var c = $(a.target), d = window.getSelection(), e = !0, f = ".read__content, .read__tabs, .transcript_sidebar, .read__close_wrapper_transcript";
			if (d.rangeCount) {
				var g = d.getRangeAt(0);
				g.collapsed || (e = !1)
			}
			!c.closest(f).length && e && b.countOffset(a) && b.close(a)
		})
	}, a.prototype.onBeforeClean = function () {
		if (this.tooltips && this.tooltips.length)for (var a = 0; a < this.tooltips.length; a++) {
			var b = this.tooltips[a];
			b.container && $(b.container).remove(), b = null
		}
		this.tooltips = []
	}, a.prototype._onShow = function () {
		$(".hover-block").show(), this.recalcVideoAspectRation()
	}, a.prototype.recalcVideoAspectRation = function () {
		(window.isMobile.any() || window.isTablet.any()) && $(".media__videolink", this.$element).each(function () {
			var a = $(this).closest(".media__container"), b = a.find("video"), c = 16 / 9, d = b.width();
			b.height(d / c)
		})
	}, a.prototype.testRoute = function (a) {
		for (var b = $.url(a).attr("path").replace(/\/+/g, "/"), c = 0; c < readerUrlMap.length; c++)if (b.match(readerUrlMap[c]))return !0;
		return !1
	}, a.prototype.reloadIsRequired = function (a) {
		a = a.split("#")[0];
		var b = this.currentURL && this.currentURL.split("#")[0];
		return b !== a || this.isClosed
	}, a.prototype.onBeforeUpdate = function () {
		this.isClosed || (this.$element.append('<div class="read__loader_wrapper"><div class="read__loader_mask"></div><div class="read__loader" title="Loading..."></div></div>'), this.$element.find(".read__loader").click(function () {
			window.router.abort(), this.$element.find(".read__loader_wrapper").remove()
		}.bind(this)), this.$element.find(".read__loader_wrapper").animate({opacity: 1}, 750))
	}, a.prototype.scrollToHash = function (a) {
		var b = this;
		if (a = void 0 === a ? this.scrollDelay : a, this.currentURL) {
			var c = $.url(this.currentURL).attr("fragment");
			if (c.match(/^photo-[\d,]+$/))for (var d = c.replace("photo-", "").split(","), e = d.length; e--;)$("#photo-" + d[e]).addClass("is-found");
			c && setTimeout(function () {
				var a;
				try {
					a = $("#" + c)
				} catch (d) {
				}
				a && a.length && b.scrollToBlock(a)
			}, a)
		}
	}, a.prototype.scrollToBlock = function (a, b) {
		b = b || {};
		var c = $(".read__scroll"), d = a.offset().top - c.offset().top + c.scrollTop();
		b.margin && (d -= b.margin), c.animate({scrollTop: d}, {}, 1e3)
	}, a.prototype.onRoute = function (a, b, c, d, e) {
		if (b)this.update(b, a); else if (a.split("#")[1]) {
			var f = this.currentURL.split("#")[0], g = a.split("#")[1];
			this.currentURL = f + (g ? "#" + g : ""), this.scrollToHash(0)
		}
		if ("initial" !== c && (viewManager.openReader(), viewManager.setActiveView("readerView")), viewManager.getView("contentView").isEmpty() && (history.state && history.state.contentView ? (contentView.isLoading = !0, router.handleURL(history.state.contentView, {from: "initial"})) : this.streamUrl && (contentView.isLoading = !0, router.handleURL(this.streamUrl, {from: "initial"}))), resolveLanguageURLs(this.alternateURLs), !("initial" === c || history.state && this.currentURL === history.state.readerView)) {
			var h = this.currentTitle;
			if ("popstate" === c)return void(document.title = h);
			var d = {readerView: a, contentView: contentView.currentURL};
			return e.shouldNavigate && router.navigate(d, a, h), document.title = h, [d, h]
		}
	}, a.prototype.onRender = function () {
		$(".content-view").attr("aria-hidden", "true");
		var a = (new ViewManager(window.router), $(document.body)), b = this;
		window.isMobile.any() || $("body").is(".is-mobile") ? this.isShow && this.initMobileSlide() : this.initSlide(), this.assignHeightImage();
		var c = 10;
		$(".read__tabs").css("right", this.scrollWidth + c), $(".transcript_sidebar").css("right", this.scrollWidth + c), $(".transcript").length && !$(".transcript").is(".transcript_full") && $(".media__container").css("right", this.scrollWidth + c), $(".transcript_sidebar").length && $(".media__container").css("right", $(".transcript_sidebar").width() + this.scrollWidth + c), this.scrollWidth > 0 && $(".read").addClass("is-visible-scroll"), $("audio, video").removeAttr("controls");
		var d = this.$element.data();
		d && d.streamUrl && (this.streamUrl = d.streamUrl), this.$element.find(".slider, .media__container, .media", ".read__internal_content").is(":first-child") && this.$element.find(".read__top").addClass("is-top_media"), $(".media__videolink, .media__pic img", this.$element).on("click touchstart", function () {
			$(this).closest(".media__container").player({autoPlay: !0}), $(".read").css("transition", "none")
		}), $(".audio_link").closest(".media__container").player({autoPlay: !1, features: ["playpause", "current", "progress", "duration", "tracks", "volumeext", "quality", "fullscreen", "newwindow"]});
		var e = this.$element.find(".read__categ").text(), f = this.$element.find(".read__categ");
		f.data("info") && f.mouseenter(function () {
			$(this).stop();
			var a = $(this).data("info") + ' "' + e + '"';
			$(this).text(a)
		}).mouseleave(function () {
			$(this).stop(), $(this).text(e)
		});
		var g = $(".dateblock");
		g.each(function (a, b) {
			var c = $(b).data("datepick");
			c && c.hide()
		}), this.$element.find(".read__taglist a, .read__status a").hover(function () {
			$(this).parents(".read__tagscol, .read__status").find("h3").toggleClass("is-hover")
		}), this.initializeTooltips(), this.$element.find(".bubble").each(function () {
			var a = $(this);
			a.parents("a").on("mouseenter", function () {
				var b = (a.parents("a").outerWidth() - a.outerWidth()) / 2;
				a.css("left", b)
			})
		});
		var h = $(".read__scroll");
		h.attr("tabindex", "-1"), h.on("mousewheel", function (b, c, d, e) {
			if (!a.hasClass("is-mobile")) {
				var f = h.prop("scrollTop"), g = h.prop("scrollHeight") - h.height();
				(e > 0 && 0 === f || 0 > e && f >= g) && b.preventDefault()
			}
		});
		var i = this.$element.find(".read__tabs, .read__close, .media__container");
		i.on("mousewheel", function (b) {
			if (a.is(".is-wide")) {
				if ($(b.target).closest(".read__scroll").length && !$(b.target).closest(".video-transcript").length)return;
				b.preventDefault()
			}
		});
		var j = this.$element.find(".read__content"), k = this.$element.find(".read__tabs");
		h.on("scroll", function () {
			var a = h.scrollTop() + h.outerHeight();
			a === j.outerHeight() ? k.addClass("tabs_bottom") : k.removeClass("tabs_bottom")
		}), h.focus(), setTimeout(function () {
			var a = location.hash;
			if (/^[-_\w\d]+$/.test(a.substr(1))) {
				var c = b.$element.find(a);
				if (!c.length)return;
				c.parents(".assignment__block").length && (c = c.parents(".assignment__block"));
				var d = $(".read__scroll").offset().top;
				b.$element.find(".read__scroll").scrollTop(c.offset().top - d), c.addClass("opening")
			}
		}, 100), this.$element.find(".small_tooltip").each(function () {
			var a = $(this);
			a.closest(".with_small_tooltip:not(.tabs_share)").on("mouseenter", function () {
				var b = (a.closest("a").outerWidth() - a.outerWidth()) / 2;
				a.css("left", b)
			})
		});
		var l = 0, m = 0, n = $(".read__content"), o = $(".read__close_wrapper");
		h.scroll(function () {
			m = $(this).scrollTop(), m > l ? o.removeClass("scrolling_up") : o.addClass("scrolling_up"), l = m
		}), n.on("mousemove", function (b) {
			a.hasClass("is-wide") && b.clientX > 880 && b.clientX < 1840 && b.clientY > 10 && b.clientY < 200 ? o.addClass("cross_visible") : a.hasClass("is-narrow") && b.clientX > 10 && b.clientX < 990 && b.clientY > 70 && b.clientY < 260 ? o.addClass("cross_visible") : o.removeClass("cross_visible")
		}), this.initializeTranscript(), this.initializePaginator(), this.initializeMaSha(), this.$element.find(".cut__item, .cut__filetype").hover(function () {
			$(this).closest(".cut__description").toggleClass("is-hover"), $(".cut__title", $(this).closest(".cut")).toggleClass("is-hover")
		});
		var p = this.$element.find(".letter");
		if (p.length ? a.addClass("letter") : a.removeClass("letter"), window.isMobile.any()) {
			var q = $(".mobile_image");
			q.length && (q.closest(".read").find(".read__tabs").appendTo(".read__scroll"), q.height(screen.height), $(".read__top__image").height(screen.height - $(".topline__menu").outerHeight()))
		}
		this.$element.find(".photoset_a[data-selected=true]").trigger("click"), this.scrollToHash()
	}, a.prototype.scrollDelay = 1e3, window.setTimeout(function () {
		a.prototype.scrollDelay = 200
	}, 1e3), a.prototype.initializePaginator = function () {
		if (this.$element.find(".lister-page").length) {
			var a = this;
			this.infinityPaginator = new window.InfinityPaginator({
				container: this.$element.find(".read__scroll"),
				holder: this.$element.find(".lister-page"),
				itemSelector: ".entry-content .lister-page",
				noInitialScroll: !0,
				topOffset: function () {
					return 0
				},
				top: function () {
					return this.top = a.$element.find(".read__top").outerHeight()
				},
				bottom: function () {
					return this.bottom = 0
				},
				edgePixels: {top: this.$element.find(".read__top").outerHeight() + 300, bottom: a.$element.find(".read__bottommeta").outerHeight(!0) + a.$element.find(".more-next-acts").outerHeight(!0)},
				initialized: function () {
					var a = this;
					$(this._options.container).on("click", ".more-prev-acts", function (b) {
						b.preventDefault(), b.stopPropagation(), a.prevPage()
					}).on("click", ".more-next-acts", function (b) {
						b.preventDefault(), b.stopPropagation(), a.nextPage()
					})
				},
				url: function (a) {
					return this._state.urlTemplate.replace("PAGE", a.page)
				},
				template: function (a, b) {
					var c = $($.parseHTML(a)), d = c.find(this.itemSelector), e = c.find(".read__top");
					e.length && $(".read__content").prepend(e);
					var f = c.find(".read__cut");
					return f.length && $(".entry-content").prepend(f), d = '<div class="lister-page" id="page-' + b.page + '" data-page="' + b.page + '">' + d.html() + "</div>"
				},
				loadingPrevented: function () {
					$(".more-prev-acts,.more-next-acts", this._options.container).removeClass("more_alt").removeClass("is-loading")
				},
				willLoad: function (a) {
					var b;
					b = "next" === a.direction ? $(".more-next-acts", this._options.container) : $(".more-prev-acts", this._options.container), b.addClass("more_alt").addClass("is-loading")
				},
				didLoad: function (a) {
					var b;
					"next" === a.direction ? (b = $(".more-next-acts", this._options.container), a.page <= this._state.totalPages && b.attr("href", this._options.url.call(this, {page: a.page + 1}))) : (b = $(".more-prev-acts", this._options.container), a.page <= this._state.totalPages && a.page - 1 > 0 && b.attr("href", this._options.url.call(this, {page: a.page - 1}))), b.removeClass("more_alt").removeClass("is-loading")
				},
				didRender: function (a) {
					"next" === a.direction ? this._state.lastInsertionPoint.after($(".more-next-acts", this._options.container)) : this._state.firstInsertionPoint.before($(".more-prev-acts", this._options.container))
				},
				onStart: function () {
					$(".more-prev-acts", this._options.container).hide()
				},
				onEnd: function () {
					$(".more-next-acts", this._options.container).hide()
				}
			}), this.pager = new window.Pager({container: this.$element.get(0), pageNumber: 100})
		}
	}, a.prototype.initializeTranscript = function () {
		this.$element.find(".read__in").is(".transcript") ? this.$element.transcript() : this.$element.removeClass("video-transcript video-transcript-wide video-transcript-thin").removeClass("transcript transcript_full")
	}, a.prototype._scrollToElement = function (a) {
		var b = this.$element.find(".read__scroll"), c = a.position().top;
		c += isTablet.any() ? -window.innerHeight / 2 + $(".topline").height() : b.prop("scrollTop") - b.height() / 2, b.stop(!0).animate({scrollTop: c}, 500)
	}, a.prototype.initializeVideoTranscript = function () {
	}, a.prototype.open = function () {
		function a() {
			b.$element.removeClass("opening"), b.isClosed = !1, window.isMobile.any() || b.$element.find(".read__scroll").focus(), b.show()
		}

		if (this.isClosed) {
			$(".content-view").attr("aria-hidden", "true");
			var b = this, c = $(document.body);
			this.isClosed && (this.$element.addClass("show-up"), window.setTimeout(function () {
				b.$element.removeClass("show-up")
			}, 1e3)), this.show(), c.data("lastScrollTop", c.scrollTop()), window.isMobile.any() && c.scrollTop(0), window.supportsTransitions() ? b.$element.one("webkitAnimationEnd animationend oanimationend MSAnimationEnd", a) : a(), b.isClosed && b.$element.addClass("opening"), c.addClass("is-reading"), $(".wrapsite").addClass("is-not-visible"), this.isClosed = !1, isTablet.any() && $(document.body).scrollTop(0);
			var d = window.paginator;
			c.hasClass("is-wide") || d.pause()
		}
	}, a.prototype.close = function (a) {
		function b() {
			this.isClosing = !1, d.removeClass("is-reading letter"), c.$element.removeClass("closing"), d.removeClass("with-perspective"), c.$element.off("webkitAnimationEnd animationend oanimationend MSAnimationEnd"), c.isClosed = !0, d.find(".hentry__assets a, .hentry, .hentry a, .media").removeClass("is-active"), c.$element.find("video, audio").each(function (a, b) {
				var c = $(b).data("mediaelementplayer");
				c && c.pause()
			}), c.masha && (c.masha.nav && c.masha.nav.removeEvents(), c.masha.destroy()), c.$element.removeClass("video-transcript"), a && a.silent ? c.$element.hide() : c.hide()
		}

		if (!this.isClosed) {
			$(".content-view").attr("aria-hidden", "false");
			var c = this, d = $(document.body);
			$(".wrapsite").removeClass("is-not-visible"), a && a.preventDefault && (a.preventDefault(), a.stopPropagation());
			var e = -1 !== navigator.appVersion.indexOf("MSIE 7"), f = -1 !== navigator.appVersion.indexOf("MSIE 8"), g = -1 !== navigator.appVersion.indexOf("MSIE 9");
			(e || f || g) && router.handleURL(this.$element.find(".read__close").attr("href")), window.supportsTransitions() ? this.$element.one("webkitAnimationEnd animationend oanimationend MSAnimationEnd", b) : b(), $(".hover-block").hide(), d.addClass("with-perspective"), this.isShow = !1, this.isClosing = !0, this.$element.addClass("closing"), paginator.resume()
		}
	}, a.prototype.initSlide = function () {
		function a() {
			{
				var a = b.find("img.vertical");
				b.find("img:not(.vertical)")
			}
			if (a.length) {
				var c = a.closest(".slider__block_vertical"), d = b.width(), e = 420 * d / 680;
				c.height(e)
			}
		}

		var b = this.$element.find(".slider__slides");
		if (b.length) {
			for (var c = b.find(".slide"), d = 0, e = 0; e < c.length; e++)c.eq(e).hasClass("starting-slide") && (d = e);
			a(), b.cycle({
				swipe: !0,
				swipeFx: "scrollHorz",
				fx: "scrollHorz",
				next: ">.slider__next",
				prev: ">.slider__prev",
				slides: ".slide",
				captionPlugin: "caption2",
				paused: !0,
				overlayFxSel: ">div",
				overlay: ".slider_overlay",
				caption: ".slider_caption",
				startingSlide: d
			}).on("cycle-before", a)
		}
	}, a.prototype.initMobileSlide = function () {
		function a() {
			var a = b.find("img.vertical");
			if (a.length) {
				var c = a.closest(".slider__block_vertical"), d = c.width(), e = 420 * d / 680;
				c.height(e)
			}
		}

		var b = this.$element.find(".slider__slides");
		if (b.length) {
			for (var c = b.find(".slide"), d = 0, e = 0; e < c.length; e++)c.eq(e).hasClass("starting-slide") && (d = e);
			b.cycle({
				fx: "carousel",
				captionPlugin: "caption2",
				carouselOffset: 16,
				carouselVisible: 1,
				carouselFluid: !0,
				swipe: !0,
				swipeFx: "carousel",
				next: ">.slider__next",
				prev: ">.slider__prev",
				slides: ".slide",
				paused: !0,
				overlayFxSel: ">div",
				overlay: ".slider_overlay",
				caption: ".slider_caption",
				startingSlide: d,
				timeout: 0
			}), a()
		}
	}, a.prototype.imitationLinks = function (a) {
		a.preventDefault();
		var b = $(a.currentTarget), c = b.data("href"), d = window.router;
		b.closest(".read__tooltip").fadeOut(500), d.handleURL(c)
	}, a.prototype.showTags = function (a) {
		a.preventDefault();
		var b = 300;
		$(this).parents(".with_hidden_list").find(".hidden").show(b), $(this).hide(b)
	}, a.prototype.initializeTooltips = function () {
		var a = this;
		this.tooltips = [], window.isMobile.any() || (a.$element.sharedTooltip({
			selector: ".read__tag, .with_person_tag", onBeforeShow: function (a) {
				var b = $(a).find(".tooltip_description_dark");
				b.html(b.attr("data-value"))
			}
		}), a.tooltips.push(a.$element.data("sharedTooltip").tooltip))
	}, a.prototype.assignHeightImage = function () {
		var a = this.$element.find(".media__pic .img.vertical");
		if (a.length) {
			var b = a.closest(".media__pic"), c = b.width(), d = .617 * c;
			b.height(d)
		}
	}, a.prototype.handleDoubleTap = function (a) {
		function b(a) {
			var c = [];
			if (a)for (a = a.firstChild; null != a;)3 == a.nodeType ? c[c.length] = a : c = c.concat(b(a)), a = a.nextSibling;
			return c
		}

		var c = this, d = $(".read");
		if ("touchmove" == a.type)return void(this.tapped = null);
		if (this.tapped) {
			a.preventDefault(), clearTimeout(this.tapped), this.tapped = null;
			var e = a.originalEvent.touches[0].pageX, f = a.originalEvent.touches[0].pageY, g = a.originalEvent.touches[0].clientY, h = $(a.target).offset().top;
			if ($(a.target).find("span.z").length || $.each(b(a.target), function (a, b) {
					var c = b.textContent, d = c.split(/\s+/);
					b.textContent = "";
					for (var e = 0; e < d.length; e++) {
						var f = document.createElement("span");
						if (f.className = "z", f.textContent = d[e], b.parentNode.appendChild(f), e !== d.length - 1) {
							var g = document.createTextNode(" ");
							b.parentNode.appendChild(g)
						}
					}
				}), $(a.target).hasClass("z"))var i = $(a.target); else var i = $(a.target).find("span.z").filter(function (a, b) {
				var c = $(b).offset(), d = $(b).width(), g = $(b).height();
				return c.top < f && c.top + g > f && c.left < e && c.left + d > e
			});
			d.toggleClass("double_tapped");
			var j = $(a.target).offset().top, k = j / h;
			if (window.isMobile.any() || window.isTablet.any()) {
				var l, m = 50;
				if (i.length) {
					l = i.offset().top + i.height() / 2 - g;
					var n = parseInt(i.css("line-height"), 10);
					n && (m = n), i.addClass("is-tapped")
				} else l = $("body").scrollTop() - (h - j) - m * k;
				$("body").stop(!0).scrollTop(l), setTimeout(function () {
					i.removeClass("is-tapped")
				}, 9e3)
			}
		} else this.tapped = setTimeout(function () {
			c.tapped = null
		}, 300)
	}, a.prototype.countOffset = function (a) {
		var b, c = $("body"), d = this, e = 10, f = window.innerWidth && $(window).width();
		b = c.is("is-wide") ? 2 * d.scrollWidth : d.scrollWidth;
		var g = f - b - e, h = a.clientX < g;
		return h
	}, a.prototype.startAnchorPreloader = function (a) {
		var b = $(a);
		return b.addClass("is-loading"), {anchor: a, $anchor: b}
	}, a.prototype.completeAnchorPreloader = function (a) {
		a.$anchor.removeClass("is-loading").addClass("is-active")
	}, a.prototype.cancelAnchorPreloader = function (a) {
		a.$anchor.removeClass("is-loading")
	}, a.prototype.onHide = function () {
		router.navigate({contentView: contentView.currentURL}, contentView.currentURL, contentView.currentTitle), document.title = contentView.currentTitle, resolveLanguageURLs(contentView.alternateURLs)
	}, window.ReaderView = a
}(), jQuery(function (a) {
	"use strict";
	var b = a(window), c = a(".topline"), d = a(".promoted"), e = a(".footer"), f = a('<span class="loader"></span>'), g = a(".more-prev").text() || _("Показать следующие материалы"), h = a(".more-next").text() || _("Показать предыдущие материалы"), i = window.paginator = new InfinityPaginator({
		container: window,
		holder: a(".content__in .lister-page"),
		itemSelector: ".content__in .lister-page",
		dataType: "html",
		selfNavigation: !1,
		noInitialScroll: !0,
		edgePixels: {top: c.outerHeight() + 300, bottom: e.outerHeight() + d.outerHeight() + 300},
		loadEdgePixels: {top: c.outerHeight() + 500, bottom: e.outerHeight() + d.outerHeight() + 500},
		top: function () {
			return this.top = c.outerHeight()
		},
		bottom: function () {
			return this.bottom = e.outerHeight()
		},
		topOffset: function () {
			var c, d = a(".content_top__wrap");
			return d.length && (c = d.offset().top - b.scrollTop() + d.outerHeight()), c >= 0 ? c : 0
		},
		scrollTo: function (a, b, c) {
			window.viewManager.getView("contentView").scrollTo(a, b, c)
		},
		initialized: function () {
			a(".content__in").on("click", ".more-prev", function (a) {
				a.preventDefault(), i.prevPage()
			}).on("click", ".more-next", function (a) {
				a.preventDefault(), i.nextPage()
			}), g = a(".more-prev").text(), h = a(".more-next").text()
		},
		url: function (a) {
			return 1 === a.page ? this._state.baseUrl : this._state.urlTemplate.replace("PAGE", a.page)
		},
		shouldNavigate: function () {
			return !window.viewManager.getView("readerView").$element.is(".opening")
		},
		template: function (b, c) {
			var d = a(a.parseHTML(b)).find(".content__in .lister-page");
			return d.find(".more-prev").remove(), d.find(".more-next").remove(), d = '<div class="lister-page" id="page-' + c.page + '" data-page="' + c.page + '" role="list">' + d.html() + "</div>"
		},
		loadingPrevented: function () {
			a(".more-prev, .more-next").removeClass("more_alt").removeClass("is-loading"), a(".more-next").text(h), a(".more-prev").text(g), f.detach()
		},
		willLoad: function (b) {
			var c;
			c = a("next" === b.direction ? ".more-next" : ".more-prev"), c.text("").addClass("more_alt").addClass("is-loading").append(f)
		},
		didLoad: function (b) {
			var c;
			"next" === b.direction ? (c = a(".more-next"), c.removeClass("more_alt").removeClass("is-loading").text(h)) : (c = a(".more-prev"), c.removeClass("more_alt").removeClass("is-loading").text(g)), f.detach()
		},
		didRender: function (b) {
			"next" === b.direction ? (this._state.lastInsertionPoint.after(a(".more-next")), a(".more-next").toggleClass("hidden", b.page === this._state.totalPages)) : (this._state.firstInsertionPoint.before(a(".more-prev")), this.withSavedScroll(function () {
				a(".more-prev").toggleClass("hidden", 1 === b.page)
			}))
		},
		onStart: function () {
			this._options.holder && a(this._options.holder).parent().find(".more-prev").hide()
		},
		onEnd: function () {
			this._options.holder && a(this._options.holder).parent().find(".more-next").hide()
		}
	})
}), function () {
	"use strict";
	Object.create || (Object.create = function (a, b) {
		function c() {
		}

		if ("object" != typeof a && "function" != typeof a)throw new TypeError("Object prototype may only be an Object: " + a);
		if (null === a)throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
		if ("undefined" != typeof b)throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
		return c.prototype = a, new c
	});
	var a = function () {
	};
	a.prototype = Object.create(MaSha.LocationHandler.prototype), a.prototype.setHash = function (a) {
		window.location.hash = a;
		var b = viewManager.getView("readerView"), c = b.currentURL.split("#")[0];
		b.currentURL = c + a
	}, ReaderView.prototype.initializeMaSha = function () {
		function b(a) {
			$(l.marker).addClass("masha-unmark-mode"), k.find("span").text(_("Снять выделение")), k.bind("click.removal", function (b) {
				b.stopPropagation(), $(l.marker).removeClass("show"), l.deleteSelections([a]), l.updateHash()
			})
		}

		function c() {
			$(l.marker).removeClass("masha-unmark-mode"), k.find("span").text(_("Выделить")), k.unbind("click.removal")
		}

		function d(a) {
			if (a) {
				var b = $(a).attr("class");
				if (b) {
					var c = b.match(/(num\d+)/);
					if (c && c.length)return c[1]
				}
			}
		}

		var e = this, f = this.$element.find(".entry-content");
		if (f.length && !f.hasClass("no-masha")) {
			var e = this;
			e.masha && (e.masha.nav && (e.masha.nav.removeEvents(), delete e.masha.nav), e.masha.destroy(), delete e.masha);
			var g = this.$element.find(".read__scroll"), h = this.$element.find(".read__tabs"), i = $(".topline"), j = this.$element.find(".krln-share_list").clone();
			j.removeAttr("class"), j.addClass("masha-marker-bar").addClass("popover"), j.find("ul:last").remove(), j.find("ul:first").append(j.find("li")), j.find("ul:last").remove(), j.find("li").addClass("masha-social");
			var k = $('<li class="masha-mark"><span>Выделить</span></li>');
			j.find("ul:last").append(k).removeClass("share_sites"), j.find("li:first").addClass("first"), j.find("li:last").addClass("last"), j.find(".share_send_email").closest("li").remove(), j.attr("id", "txtselect_marker"), g.append(j);
			var l = f.masha({
				location: new a, ignored: function (a) {
					return a = $(a), a.hasClass("masha-ignore") || a.is("script") || a.is("blockquote")
				}
			});
			l.showNav(), l.nav.options.t_offsetTop = 0, l.nav.smoothScroll = function (a, b) {
				var c;
				c = window.isMobile.any() ? $(document.body) : g;
				var d = c.find("." + b[0]), e = d.position().top;
				isTablet.any() || isMobile.any() ? e += -window.innerHeight / 2 + i.height() : (e -= c.parent().outerHeight(!0) / 2, $(document.body).hasClass("is-narrow") && (e += i.height())), c.stop(!0).animate({scrollTop: e}, 500)
			}, l.counter > 0 && setTimeout(function () {
				l.nav.goTo(0)
			}, 100), l.selectable.removeEventListener ? (l.selectable.removeEventListener("mouseup", l.mouseUp, !1), l.selectable.removeEventListener("touchend", l.touchEnd, !1), l.marker.removeEventListener("click", l.markerClick, !1)) : (l.selectable.detachEvent("mouseup", l.mouseUp), l.selectable.detachEvent("touchend", l.touchEnd), l.marker.detachEvent("click", l.markerClick)), l.mouseUp = function (a) {
				var b = $.event.fix(a), d = window.getSelection();
				if (d.rangeCount) {
					var f = {x: 0, y: 0}, i = g.scrollTop();
					window.isMobile.any() && (i = $(document.body).scrollTop());
					var j = d.getRangeAt(0), k = $(l.marker).outerHeight(), m = e.$element.position(), n = 10;
					if (j.getClientRects) {
						var o, p = j.getClientRects();
						if (o = j.startContainer.parentNode === j.endContainer.parentNode ? p[p.length - 1] : 3 === j.endContainer.nodeType ? p[p.length - 1] : p[p.length - 2]) {
							f = {x: o.left + o.width + document.body.scrollLeft, y: o.top + o.height + i + n};
							var q = $(window).height(), r = o.top + o.height + k + h.height() + m.top + n + n;
							if (r > q) {
								var s = p[0];
								f.y = s.top - k + i - n
							}
						}
						f.y -= m.top
					} else b.originalEvent.layerY ? f.y = b.originalEvent.layerY : (f = {x: b.clientX, y: b.clientY}, f.y += i);
					c(), window.setTimeout(function () {
						l.showMarker(f)
					}, 1)
				}
			}, $(l.marker).on("mouseenter", function () {
				$(this).addClass("hover")
			}), $(l.marker).on("mouseleave", function () {
				$(this).removeClass("hover")
			});
			var m = null;
			$(l.selectable).on("mouseenter touchstart", ".user_selection_true", function (a) {
				m = a.target;
				var f = window.getSelection();
				if (f.rangeCount) {
					var j = f.getRangeAt(0);
					if (!j.collapsed)return
				}
				if (!$(l.marker).hasClass("show")) {
					var k = g.scrollTop();
					window.isMobile.any() && (k = $(document.body).scrollTop());
					var n = $(l.marker).outerHeight(), o = e.$element.position(), p = 10, q = d(a.target);
					if (q) {
						var r = {x: a.clientX, y: a.clientY};
						r.y += k;
						var s = $("." + q + ":last").get(0);
						if (s && s.getClientRects) {
							r = {x: 0, y: 0};
							var t = s.getClientRects(), u = t[t.length - 1];
							r = {x: u.left + u.width + document.body.scrollLeft, y: u.top + u.height + k};
							var v = $(window).height(), w = u.top + u.height + n + h.height() + o.top + p + p;
							if (w > v) {
								var x = t[0];
								r.y = x.top - n + k - p
							}
						}
						$(document.body).hasClass("is-narrow") && (r.y -= i.height());
						var y = l.getMarkerCoords(l.marker, r);
						c(), b(q), window.setTimeout(function () {
							l.marker.style.top = y.y + "px", $(l.marker).addClass("show")
						}, 1)
					}
				}
			}), $(l.selectable).on("mouseleave", ".user_selection_true", function (a) {
				var b = window.getSelection();
				if (b.rangeCount) {
					var c = b.getRangeAt(0);
					if (c.collapsed)return
				}
				setTimeout(function () {
					var b = $(a.toElement).closest(".masha-marker-bar").get(0) || a.toElement;
					$(l.marker).hasClass("hover") || l.hideMarker({target: b})
				}, 300)
			}), l.markerClick = function (a) {
				if (a.preventDefault(), a.stopPropagation(), (l.rangeIsSelectable() || $(l.marker).hasClass("masha-unmark-mode")) && (($(a.target).hasClass("masha-mark") || $(a.target).closest(".masha-mark").length || ($(a.target).hasClass("masha-social") || $(a.target).closest(".masha-social").length) && !$(l.marker).hasClass("masha-unmark-mode")) && (l.addSelection(), l.updateHash(), l.nav.resetData(l.ranges), $(l.marker).removeClass("show")), $(a.target).hasClass("masha-social") || $(a.target).closest(".masha-social").length)) {
					var b = encodeURIComponent(window.location.href.split("#")[0]).replace(/%2F/g, "/"), c = new RegExp(b, "g");
					if (a.target.href) {
						var d = a.target.href.replace(c, "<url>"), e = new RegExp("<url>", "g");
						$(a.target).data("href", d.replace(e, encodeURIComponent(window.location.href))), window.Share.prototype.share(a), $(l.marker).removeClass("show")
					}
				}
			}, $(l.selectable).bind("mouseup touchend", l.mouseUp), $(l.marker).bind("click", l.markerClick), $(l.marker).bind("touchstart", l.markerClick), this.masha = l
		}
	}
}(), $("html").removeClass("no-js"), $("audio, video").removeAttr("controls"), function () {
	"use strict";
	var a = new ViewportInfo;
	a.compute(), a.x > 1 && _replacePosters()
}(), window.WebFontConfig = {
	custom: {
		families: ["ITCFranklinGothicW10-Bk 862339", "ITCFranklinGothicW10-Bk 862348", "ITCFranklinGothicW10-Md 862399", "ITCFranklinGothicW10-Md 862390", "ITCFranklinGothicW10-Dm 862366", "ITCFranklinGothicW10-Dm 862375"],
		urls: [(window.config ? window.config.staticUrl : "/static/") + "css/all_fonts.css"]
	}
}, WebFont.load(window.WebFontConfig), window.mobileMenuView = window.mobileMenuView || null, window.galleryView = window.galleryView || null, $(document).ready(onDocumentReady);
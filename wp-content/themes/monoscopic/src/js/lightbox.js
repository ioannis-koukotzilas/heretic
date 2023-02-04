! function(e, n) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = n();
    else if ("function" == typeof define && define.amd) define([], n);
    else {
        var t = n();
        for (var o in t)("object" == typeof exports ? exports : e)[o] = t[o]
    }
}(self, (() => (() => {
    "use strict";
    var e = {};
    (e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    })(e);
    var n, t = "fslightbox-",
        o = "".concat(t, "styles"),
        r = "".concat(t, "full-dimension"),
        i = "".concat(t, "display-none"),
        s = "".concat(t, "cursor-grabbing"),
        a = "".concat(t, "flex-centered"),
        c = "".concat(t, "open"),
        u = "".concat(t, "transform-transition"),
        d = "".concat(t, "absoluted"),
        l = "".concat(t, "opacity-1"),
        p = "".concat(t, "ui-fade-out"),
        h = "".concat(t, "slide-btn"),
        m = "".concat(h, "-container"),
        f = "".concat(t, "fade-in"),
        g = "".concat(t, "fade-out"),
        b = f + "-strong",
        v = g + "-strong",
        x = "".concat(t, "caption"),
        w = x + "-inner",
        S = "".concat(t, "source"),
        y = "".concat(S, "-wrappers-container"),
        T = "".concat(y, "-pinching"),
        A = "".concat(t, "thumb"),
        C = A + "s",
        L = "".concat(C, "-loader"),
        I = "".concat(C, "-cursorer"),
        W = "".concat(C, "-inner"),
        z = A + "-wrapper",
        E = A + "-invalid",
        F = A + "-active";

    function M(e) {
        return M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, M(e)
    }

    function P(e, n) {
        var t = this,
            o = e.elements.sourceMainWrappers,
            r = e.props,
            i = 0,
            s = 0,
            a = 0;
        this.translate = function(e, n) {
            return s = e, void 0 !== n && (a = n), t
        }, this.getTranslateX = function() {
            return i
        }, this.getTranslateY = function() {
            return a
        }, this.negative = function() {
            c(-(1 + r.slideDistance) * innerWidth)
        }, this.zero = function() {
            c(0)
        }, this.noTransform = function() {
            o[n].style.removeProperty("transform")
        }, this.positive = function() {
            c((1 + r.slideDistance) * innerWidth)
        };
        var c = function(e) {
                i = e + s, u(), s = 0
            },
            u = function() {
                o[n].style.transform = "translate(".concat(i, "px, ").concat(a, "px)")
            }
    }

    function N(e) {
        var n = e.componentsServices,
            t = e.core,
            o = t.sourceEnhancementWrappersTransformer,
            r = t.thumbsRenderDispatcher,
            i = t.zoomer,
            s = e.data,
            a = e.props.sources,
            c = e.ui;

        function u() {
            for (var e = 0; e < a.length; e++) o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e)
        }
        this.openThumbs = function() {
            i.ifZoomingResetZoom(), s.isThumbing = !0, c.fadeInThumbsFadeOutCaption(), u(), r.renderThumbsIfNotYetAndAllTypesDetected(), s.unloadedThumbsCount && n.appendThumbsLoaderIfNotYet()
        }, this.closeThumbs = function() {
            i.ifZoomingResetZoom(), s.isThumbing = !1, c.fadeOutThumbsFadeInCaption(), u()
        }
    }

    function B(e, n) {
        var t = e.classList;
        t.contains(n) && t.remove(n)
    }

    function H(e, n) {
        var t = e.classList;
        t.contains(n) || t.add(n)
    }

    function k(e) {
        var n = e.data,
            t = e.elements,
            o = e.stageIndexes;
        this.runActions = function() {
            B(t.thumbsContainer, a);
            var e = innerWidth / 2,
                i = t.thumbsWrappers[o.current],
                s = i.offsetLeft + i.offsetWidth / 2,
                c = n.thumbsInnerWidth - s;
            s > e && c > e ? r(e - s) : s > e ? r(innerWidth - n.thumbsInnerWidth - 9) : c > e && r(0)
        }, this.runToThinThumbsActions = function() {
            H(t.thumbsContainer, a), r(0)
        };
        var r = function(e) {
            n.thumbsTransform = e, t.thumbsInner.style.transform = "translateX(".concat(e, "px)")
        }
    }

    function O(e, n) {
        var t = [];
        return function() {
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
            t.push(!0), setTimeout((function() {
                t.pop(), t.length || e.apply(void 0, r)
            }), n)
        }
    }

    function D(e) {
        var n = this,
            t = e.core,
            o = t.eventsDispatcher,
            r = t.globalEventsController,
            i = t.scrollbarRecompensor,
            s = t.slideshowManager,
            a = t.zoomer,
            u = e.data,
            d = e.elements,
            l = e.fs,
            p = e.props,
            h = e.sourcePointerProps,
            m = e.thumbsSwipingProps;
        this.isLightboxFadingOut = !1, this.runActions = function() {
            n.isLightboxFadingOut = !0, d.container.classList.add(v), r.removeListeners(), s.resetSlideshow(), p.exitFullscreenOnClose && u.ifs && l.exitFullscreen(), a.ifZoomingResetZoom(), setTimeout((function() {
                n.isLightboxFadingOut = !1, h.isPointering = !1, m && (m.isPointering = !1), d.container.classList.remove(v), document.documentElement.classList.remove(c), i.removeRecompense(), document.body.removeChild(d.container), o.dispatch("onClose")
            }), 270)
        }
    }

    function R(e) {
        requestAnimationFrame((function() {
            requestAnimationFrame((function() {
                e()
            }))
        }))
    }

    function X(e, n, t, o) {
        var r = e.collections.sourceMainWrapperTransformers,
            s = e.core,
            a = s.sourceWrappersStager,
            c = s.stageManager,
            u = e.elements,
            d = u.sourceAnimationWrappers,
            l = u.sourceMainWrappers,
            p = e.data.isSourceLoadedArray,
            h = e.props.slideChangeAnimation,
            m = e.stageIndexes,
            f = n.previous,
            b = n.current,
            v = n.next;

        function x() {
            c.isSourceInStage(b) ? b === m.previous ? r[b].negative() : b === m.next && r[b].positive() : (l[b].classList.add(i), r[b].noTransform())
        }

        function w(e, n, t) {
            e && d[n].classList.add(t)
        }
        this.runJumpReflowedActions = function() {
            w(t, b, g), w(o, m.current, h), a.displayNotDisplayedStageSourceMainWrappers(), void 0 !== m.previous && m.previous !== b && r[m.previous].negative(), r[m.current].noTransform(), void 0 !== m.next && m.next !== b && r[m.next].positive(), a.possiblyUnstageSourceMainWrapperAtIndex(f), a.possiblyUnstageSourceMainWrapperAtIndex(v), p[b] ? setTimeout(x, 260) : x()
        }
    }

    function Y(e) {
        var n, t = e.core,
            o = t.slideshowManager,
            r = t.slideChangeFacade,
            i = e.componentsServices,
            s = e.elements,
            a = e.props,
            c = !1;

        function u() {
            c = !1, clearTimeout(n), s.slideshowBar.classList.remove(l), i.stopSlideshow()
        }

        function d() {
            s.slideshowBar.style.transition = "opacity .2s", s.slideshowBar.style.width = "0px", s.slideshowBar.offsetWidth, s.slideshowBar.style.transition = "opacity .2s, width linear ".concat(a.slideshowTime, "ms"), s.slideshowBar.style.width = innerWidth + "px", n = setTimeout((function() {
                r.changeToNext(), d()
            }), a.slideshowTime)
        }
        o.toggleSlideshow = function() {
            c ? u() : (c = !0, i.startSlideshow(), s.slideshowBar.classList.add(l), d())
        }, o.resetSlideshow = function() {
            c && u()
        }
    }

    function U(e) {
        var n = e.core.pointeringBucket,
            t = e.data,
            o = e.elements,
            r = e.thumbsSwipingProps;
        this.runActions = function(e) {
            n.runSwipingMoveActionsForPropsAndEvent(r, e), o.thumbsInner.style.transform = "translateX(".concat(t.thumbsTransform + r.swipedX, "px)"), o.thumbsContainer.contains(o.thumbsCursorer) || o.thumbsContainer.appendChild(o.thumbsCursorer)
        }
    }

    function Z(e) {
        var n = e.data,
            t = e.resolve,
            o = e.thumbsSwipingProps,
            r = t(U),
            i = window.innerWidth;
        this.listener = function(e) {
            n.thumbsInnerWidth > i && o.isPointering && r.runActions(e)
        }
    }

    function j(e, n) {
        e.contains(n) && e.removeChild(n)
    }

    function q(e) {
        var n = e.data,
            t = e.core,
            o = t.slideIndexChanger,
            r = t.thumbsTransformTransitioner,
            i = t.pointeringBucket,
            s = e.elements,
            a = e.thumbsSwipingProps,
            c = s.thumbsWrappers;
        this.runNoSwipeActionsForEvent = function(e) {
            j(s.thumbsContainer, s.thumbsCursorer), a.isPointering = !1;
            for (var n = 0; n < c.length; n++)
                if (c[n] && c[n].contains(e.target)) return void o.jumpTo(n)
        }, this.runActions = function() {
            if (j(s.thumbsContainer, s.thumbsCursorer), n.thumbsTransform += a.swipedX, i.runSwipingTopActionsForPropsAndEvent(a), n.thumbsTransform > 0) return u(0);
            n.thumbsTransform < innerWidth - n.thumbsInnerWidth - 9 && u(innerWidth - n.thumbsInnerWidth - 9)
        };
        var u = function(e) {
            n.thumbsTransform = e, r.callActionWithTransition((function() {
                s.thumbsInner.style.transform = "translateX(".concat(e, "px)")
            }))
        }
    }

    function V(e) {
        var n = e.resolve,
            t = e.thumbsSwipingProps,
            o = n(q);
        this.listener = function(e) {
            t.isPointering && (t.swipedX ? o.runActions() : o.runNoSwipeActionsForEvent(e))
        }
    }

    function _(e) {
        var n = e.collections.sourceMainWrapperTransformers,
            t = e.core.zoomer,
            o = e.data,
            r = e.sourcePointerProps;
        this.runZoomingPinchActionsForHypot = function(e) {
            var n = e - r.pinchedHypot,
                i = o.zoom + n / Math.hypot(innerWidth, innerHeight) * 10;
            i < .9 && (i = .9), t.zoomTo(i), r.pinchedHypot = e
        }, this.translateSourceMainWrapperAtIndexUsingMethod = function(e, t) {
            n[e].translate(r.swipedX)[t]()
        }
    }

    function J(e) {
        var n = Object.keys(e.pointers),
            t = e.pointers[n[0]],
            o = e.pointers[n[1]];
        return Math.hypot(t.screenX - o.screenX, t.screenY - o.screenY)
    }

    function $(e) {
        var n = e.collections.sourceMainWrapperTransformers,
            t = e.core.pointeringBucket,
            o = e.data,
            r = e.elements,
            i = e.resolve,
            s = e.sourcePointerProps,
            a = e.stageIndexes,
            c = i(_);
        this.runActions = function(e) {
            t.runSwipingMoveActionsForPropsAndEvent(s, e), r.container.contains(r.slideSwipingHoverer) || r.container.appendChild(r.slideSwipingHoverer)
        }, this.runPinchActions = function() {
            var e = J(s);
            s.pinchedHypot ? c.runZoomingPinchActionsForHypot(e) : s.pinchedHypot = e
        }, this.runNormalSwipeActions = function() {
            c.translateSourceMainWrapperAtIndexUsingMethod(a.current, "zero"), void 0 !== a.previous && s.swipedX > 0 ? c.translateSourceMainWrapperAtIndexUsingMethod(a.previous, "negative") : void 0 !== a.next && s.swipedX < 0 && c.translateSourceMainWrapperAtIndexUsingMethod(a.next, "positive")
        }, this.runZoomSwipeActions = function(e) {
            s.swipedX = (e.screenX - s.downScreenX) / o.zoom, s.swipedY = (e.screenY - s.downScreenY) / o.zoom, n[a.current].translate(s.upSwipedX + s.swipedX, s.upSwipedY + s.swipedY).zero()
        }
    }

    function G(e) {
        var n = e.data,
            t = e.props.sources,
            o = e.resolve,
            r = e.sourcePointerProps,
            i = o($);
        this.listener = function(e) {
            if (r.isPinching) return i.runActions(e), void i.runPinchActions();
            2 !== r.pointersCount && (i.runActions(e), 1 === n.zoom ? 1 === t.length ? r.swipedX = 1 : i.runNormalSwipeActions() : i.runZoomSwipeActions(e))
        }
    }

    function K(e) {
        var n = e.collections.sourceMainWrapperTransformers,
            t = e.core,
            o = t.clickZoomer,
            r = t.slideIndexChanger,
            s = t.sourceWrappersStager,
            a = e.data,
            c = e.elements,
            d = e.sourcePointerProps,
            l = e.stageIndexes,
            p = c.sourceMainWrappers;

        function h(e) {
            p[l.current].classList.add(u), n[l.current][e]()
        }

        function m(e, t) {
            void 0 !== e && (B(p[e], i), n[e][t]())
        }
        this.runPositiveSwipedXActions = function() {
            if (void 0 === l.previous) h("zero");
            else {
                h("positive");
                var e = l.next;
                r.changeTo(l.previous), s.removeAnimationsFromSourceAnimationWrapperAtIndexIfThereAre(l.previous), s.possiblyUnstageSourceMainWrapperAtIndex(e), h("zero"), m(l.previous, "negative")
            }
        }, this.runNegativeSwipedXActions = function() {
            if (void 0 === l.next) h("zero");
            else {
                h("negative");
                var e = l.previous;
                r.changeTo(l.next), s.removeAnimationsFromSourceAnimationWrapperAtIndexIfThereAre(l.next), s.possiblyUnstageSourceMainWrapperAtIndex(e), h("zero"), m(l.next, "positive")
            }
        }, this.saveCurrentSourceMainWrapperPosition = function() {
            d.upSwipedX = n[l.current].getTranslateX(), d.upSwipedY = n[l.current].getTranslateY()
        }, this.runSourceDownEventTargetActions = function() {
            a.zoom <= 1 ? o.zoomIn() : o.zoomOut()
        }
    }

    function Q(e) {
        var n = e.core,
            t = n.lightboxCloser,
            o = n.pointeringBucket,
            r = e.data,
            i = e.elements,
            s = e.resolve,
            a = e.props.doNotCloseOnBackgroundTouch,
            c = e.sourcePointerProps,
            u = s(K);
        this.runActions = function() {
            j(i.container, i.slideSwipingHoverer), c.isPinching = !1, c.pinchedHypot = 0, o.runSwipingTopActionsForPropsAndEvent(c), B(i.sourceWrappersContainer, T)
        }, this.runSwipeActions = function() {
            1 === r.zoom ? c.swipedX > 0 ? u.runPositiveSwipedXActions() : u.runNegativeSwipedXActions() : u.saveCurrentSourceMainWrapperPosition()
        }, this.runNoSwipeActions = function() {
            c.isSourceDownEventTarget ? u.runSourceDownEventTargetActions() : a && "touch" === c.pointerType || t.close()
        }
    }

    function ee(e) {
        var n = e.data,
            t = e.resolve,
            o = e.sourcePointerProps,
            r = e.core.zoomer,
            i = t(Q);
        this.listener = function(e) {
            o.pointers = {}, o.isPointering && (o.isPinching || (o.swipedX ? i.runSwipeActions() : i.runNoSwipeActions()), i.runActions(e), n.zoom < 1 && (r.zoomTo(1), r.stopZooming()))
        }
    }

    function ne(e) {
        return e.sourcePointerProps.isPointering
    }

    function te(e, n) {
        var t = e.sourcePointerProps;
        t.pointers[n.pointerId] = {
            screenX: n.screenX,
            screenY: n.screenY
        };
        var o = Object.keys(t.pointers).length;
        return t.pointersCount = o, o <= 2
    }

    function oe(e) {
        return !e.sourcePointerProps.isPointering
    }

    function re(e) {
        var n = e.core.zoomer,
            t = e.data;
        this.listener = function(e) {
            if (1 === t.zoom) {
                if (e.deltaY > 0) return;
                n.startZooming()
            }
            var o = .1 * t.zoom,
                r = t.zoom;
            e.deltaY < 0 ? r += o : (r -= o) < 1 && (r = 1), n.zoomTo(r), 1 === r && n.stopZooming()
        }
    }

    function ie(e) {
        var n, t = e.middleware,
            o = e.props,
            r = e.resolve,
            i = (e.sourcePointerProps, e.ui),
            s = r(G),
            a = r(ee),
            c = r(Z),
            u = r(V),
            d = r(re),
            l = (n = !1, function() {
                return !n && (n = !0, requestAnimationFrame((function() {
                    n = !1
                })), !0)
            });
        this.moveListener = function(e) {
            i.scheduleFadeOutAndPossiblyFadeIn(), t(t(s.listener, te), ne)(e), o.disableThumbs || c.listener(e)
        }, this.upListener = function(e) {
            a.listener(e), o.disableThumbs || u.listener(e)
        }, this.wheelListener = t((function(e) {
            i.scheduleFadeOutAndPossiblyFadeIn(), l() && d.listener(e)
        }), oe)
    }

    function se(e) {
        var n = e.core.zoomer,
            t = e.data,
            o = e.elements,
            r = e.sourcePointerProps;
        this.runPinchActions = function() {
            r.isPinching = !0, r.pinchedHypot = J(r), H(o.sourceWrappersContainer, T), 1 === t.zoom && n.startZooming()
        }
    }

    function ae(e) {
        var n, t, o, r = e.data,
            i = e.elements,
            s = r.captionHeights,
            a = r.notThumbedSourceEnhancementWrapperScales,
            c = r.notThumbedSourceEnhancementWrapperTranslatesY,
            u = i.sourceEnhancementWrappers,
            d = i.sources;
        this.setUpThumbedEnhancementWrapperTransform = function() {
            n = i.thumbsContainer.offsetHeight, t = r.thumbedSourceEnhancementWrapperTranslateY, o = "translateY(".concat(t, "px) scale(").concat(r.thumbedSourceEnhancementWrapperScale, ")")
        }, this.setUpNotThumbedEnhancementWrapperTransformAtIndex = function(e) {
            n = s[e], t = c[e], o = "translateY(".concat(t, "px) scale(").concat(a[e], ")")
        }, this.ifSourceIsLoadedTransformEnhancementWrapperAtIndex = function(e) {
            d[e] && (innerWidth < innerHeight && d[e].offsetWidth > d[e].offsetHeight + n ? u[e].style.transform = "translateY(".concat(t / 2, "px) scale(1)") : u[e].style.transform = o)
        }
    }

    function ce(e) {
        ! function(e) {
            var n = e.core,
                t = n.classFacade,
                o = n.stageManager,
                r = e.elements;
            t.removeFromEachElementClassIfContains = function(e, n) {
                for (var t = 0; t < r[e].length; t++) B(r[e][t], n)
            }, t.stagedRemovalAndOutstagedAddingOfClassIfContains = function(e, n) {
                for (var t = 0; t < r[e].length; t++) o.isSourceInStage(t) ? B(r[e][t], n) : H(r[e][t], n)
            }
        }(e),
        function(e) {
            var n = e.core,
                t = n.clickZoomer,
                o = n.zoomer,
                r = e.data,
                i = e.elements,
                s = e.props.zoomIncrement,
                a = O((function() {
                    B(i.sourceWrappersContainer, u)
                }), 300);
            t.zoomIn = function() {
                c(), d(r.zoom + s)
            }, t.zoomOut = function() {
                r.zoom - s <= 1 ? 1 !== r.zoom && (d(1), o.stopZooming()) : (c(), d(r.zoom - s), 1 === r.zoom && o.stopZooming())
            };
            var c = function() {
                    1 === r.zoom && o.startZooming()
                },
                d = function(e) {
                    H(i.sourceWrappersContainer, u), o.zoomTo(e), a()
                }
        }(e),
        function(e) {
            var n = e.core.enhancementActiver,
                t = e.data,
                o = e.elements.thumbs,
                r = e.ui;
            n.changeActiveCaptionFromTo = function(e, n) {
                t.isThumbing || (r.fadeOutCaption(e), r.fadeInCaption(n))
            }, n.changeActiveThumbFromTo = function(e, n) {
                o && o[e] && (o[e].classList.remove(F), o[n].classList.add(F))
            }
        }(e),
        function(e) {
            var n = e.core.eventsDispatcher,
                t = e.props;
            n.dispatch = function(n) {
                t[n] && t[n](e)
            }
        }(e),
        function(e) {
            var n = e.componentsServices,
                t = e.data,
                o = e.fs,
                r = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];

            function i(e) {
                for (var n = 0; n < r.length; n++) document[e](r[n], s)
            }

            function s() {
                document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement ? n.ofs() : n.xfs()
            }
            o.o = function() {
                n.ofs();
                var e = document.documentElement;
                e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
            }, o.x = function() {
                n.xfs(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
            }, o.t = function() {
                t.ifs ? o.x() : o.o()
            }, o.l = function() {
                i("addEventListener")
            }, o.q = function() {
                i("removeEventListener")
            }
        }(e),
        function(e) {
            var n, t = e.core,
                o = t.globalEventsController,
                r = t.windowResizeActioner,
                i = e.fs,
                s = e.resolve,
                a = e.ui,
                c = s(ie);
            o.addListeners = function() {
                document.addEventListener("pointerdown", a.scheduleFadeOutAndPossiblyFadeIn), document.addEventListener("pointermove", c.moveListener), document.addEventListener("pointerup", c.upListener), addEventListener("resize", r.runActions), n = function(n) {
                    return function(e, n) {
                        var t = e.core,
                            o = t.clickZoomer,
                            r = t.lightboxCloser,
                            i = t.slideChangeFacade,
                            s = t.slideshowManager,
                            a = t.thumbsToggler,
                            c = e.fs,
                            u = e.middleware,
                            d = e.props;
                        if (e.ui.scheduleFadeOutAndPossiblyFadeIn(), "Space" !== n.code) switch (n.key) {
                            case "Escape":
                                r.close();
                                break;
                            case "ArrowLeft":
                                i.changeToPrevious();
                                break;
                            case "ArrowRight":
                                i.changeToNext();
                                break;
                            case "t":
                                d.disableThumbs || a.toggleThumbs();
                                break;
                            case "+":
                                u(o.zoomIn, oe)();
                                break;
                            case "-":
                                u(o.zoomOut, oe)();
                                break;
                            case "F11":
                                n.preventDefault(), c.t()
                        } else s.toggleSlideshow()
                    }(e, n)
                }, document.addEventListener("keydown", n), document.addEventListener("wheel", c.wheelListener), i.l()
            }, o.removeListeners = function() {
                document.removeEventListener("pointerdown", a.scheduleFadeOutAndPossiblyFadeIn), document.removeEventListener("pointermove", c.moveListener), document.removeEventListener("pointerup", c.upListener), removeEventListener("resize", r.runActions), document.removeEventListener("keydown", n), document.removeEventListener("wheel", c.wheelListener), i.q()
            }
        }(e),
        function(e) {
            var n = e.data,
                t = e.elements,
                o = e.props.UIFadeOutTime,
                r = e.stageIndexes,
                i = e.ui,
                s = !1,
                a = O((function() {
                    s = !0, c(v)
                }), o);

            function c(e) {
                u(e), d(e), l(e)
            }

            function u(e) {
                e(t.nav)
            }

            function d(e) {
                t.slideButtonPrevious && (e(t.slideButtonPrevious), e(t.slideButtonNext))
            }

            function l(e) {
                n.isThumbing ? b(e) : f(e)
            }

            function h(e, n) {
                g(e, n)
            }

            function m(e) {
                d(e), l(e)
            }

            function f(e) {
                g(e, r.current)
            }

            function g(e, n) {
                var o = t.captions[n];
                o && e(o)
            }

            function b(e) {
                e(t.thumbsContainer)
            }

            function v(e) {
                e.classList.add(p)
            }

            function x(e) {
                e.classList.remove(p)
            }
            i.scheduleFadeOutAndPossiblyFadeIn = function() {
                i.scheduleFadeOut() && s && (s = !1, 1 === n.zoom ? c(x) : u(x))
            }, i.scheduleFadeOut = function() {
                return a(), !0
            }, i.fadeInCaption = function(e) {
                h(x, e)
            }, i.fadeOutCaption = function(e) {
                h(v, e)
            }, i.zoomFadeOut = function() {
                m(v)
            }, i.zoomFadeIn = function() {
                m(x)
            }, i.fadeInThumbsFadeOutCaption = function() {
                b(x), f(v)
            }, i.fadeOutThumbsFadeInCaption = function() {
                b(v), f(x)
            }
        }(e),
        function(e) {
            var n = e.core.lightboxCloser,
                t = (0, e.resolve)(D);
            n.close = function() {
                t.isLightboxFadingOut || t.runActions()
            }
        }(e), De(e),
            function(e) {
                var n = e.core.pointeringBucket,
                    t = e.elements;
                n.runSwipingDownActionsForPropsAndEvent = function(e, n) {
                    e.isPointering = !0, e.downScreenX = n.screenX, e.swipedX = 0
                }, n.runSwipingMoveActionsForPropsAndEvent = function(e, n) {
                    H(t.slideSwipingHoverer, s), e.swipedX = n.screenX - e.downScreenX
                }, n.runSwipingTopActionsForPropsAndEvent = function(e) {
                    B(t.slideSwipingHoverer, s), e.isPointering = !1
                }
            }(e),
            function(e) {
                var n = e.data,
                    t = e.core.scrollbarRecompensor;
                t.addRecompense = function() {
                    "complete" === document.readyState ? o() : window.addEventListener("load", (function() {
                        o(), t.addRecompense = o
                    }))
                };
                var o = function() {
                    document.body.offsetHeight > window.innerHeight && (document.body.style.marginRight = n.scrollbarWidth + "px")
                };
                t.removeRecompense = function() {
                    document.body.style.removeProperty("margin-right")
                }
            }(e), Y(e),
            function(e) {
                var n = e.core,
                    t = n.slideChangeFacade,
                    o = n.slideIndexChanger,
                    r = n.stageManager;
                e.props.sources.length > 1 ? (t.changeToPrevious = function() {
                    o.jumpTo(r.getPreviousSlideIndex())
                }, t.changeToNext = function() {
                    o.jumpTo(r.getNextSlideIndex())
                }) : (t.changeToPrevious = function() {}, t.changeToNext = function() {})
            }(e),
            function(e) {
                var n = e.componentsServices,
                    t = e.core,
                    o = t.enhancementActiver,
                    r = t.classFacade,
                    i = t.eventsDispatcher,
                    s = t.slideIndexChanger,
                    a = t.sourceDisplayFacade,
                    c = t.sourceWrappersStager,
                    d = t.stageManager,
                    l = t.thumbsTransformer,
                    p = t.zoomer,
                    h = e.data.isSourceLoadedArray,
                    m = e.props.disableThumbs,
                    f = e.resolve,
                    g = e.stageIndexes;
                s.changeTo = function(e) {
                    p.ifZoomingResetZoom(), o.changeActiveCaptionFromTo(g.current, e);
                    var t = g.current;
                    g.current = e, d.updateStageIndexes(), n.setSlideNumber(e + 1), m || (o.changeActiveThumbFromTo(t, e), l.transformToCurrentWithTransition()), o.changeActiveCaptionFromTo(t, e), a.displaySourcesWhichShouldBeDisplayed(), i.dispatch("onSlideChange")
                }, s.jumpTo = function(e) {
                    if (g.current !== e) {
                        var n = g.current,
                            t = f(X, [{
                                previous: g.previous,
                                current: n,
                                next: g.next
                            }, h[n], h[e]]);
                        s.changeTo(e), r.removeFromEachElementClassIfContains("sourceMainWrappers", u), c.removeAnimationsFromSourceAnimationWrapperAtIndexIfThereAre(n), c.removeAnimationsFromStageSourceAnimationWrappersIfThereAre(), R(t.runJumpReflowedActions)
                    }
                }
            }(e),
            function(e) {
                var n = e.core.sourceEnhancementWrappersTransformer,
                    t = e.data,
                    o = (0, e.resolve)(ae);
                n.ifSourceIsLoadedTransformEnhancementWrapperAtIndex = function(e) {
                    t.isThumbing ? o.setUpThumbedEnhancementWrapperTransform() : o.setUpNotThumbedEnhancementWrapperTransformAtIndex(e), o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e)
                }, n.ifSourceIsLoadedTransformThumbedEnhancementWrapperAtIndex = function(e) {
                    o.setUpThumbedEnhancementWrapperTransform(e), o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e)
                }, n.ifSourceIsLoadedTransformNotThumbedEnhancementWrapperAtIndex = function(e) {
                    o.setUpNotThumbedEnhancementWrapperTransformAtIndex(e), o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e)
                }
            }(e),
            function(e) {
                var n = e.collections.sourcesRenderFunctions,
                    t = e.core.sourceDisplayFacade,
                    o = e.props.loadOnlyCurrentSource,
                    r = e.stageIndexes;

                function i(e) {
                    n[e] && (n[e](), delete n[e])
                }
                t.displaySourcesWhichShouldBeDisplayed = function() {
                    if (o) i(r.current);
                    else
                        for (var e in r) i(r[e])
                }
            }(e),
            function(e) {
                var n = e.collections.sourceMainWrapperTransformers,
                    t = e.core,
                    o = t.sourceWrappersStager,
                    r = t.stageManager,
                    s = e.data.isSourceLoadedArray,
                    a = e.elements,
                    c = a.sourceAnimationWrappers,
                    u = a.sourceMainWrappers,
                    d = e.props,
                    l = d.initialAnimation,
                    p = d.slideChangeAnimation,
                    h = e.stageIndexes;
                o.displayNotDisplayedStageSourceMainWrappers = function() {
                    for (var e in h) B(u[h[e]], i)
                }, o.possiblyUnstageSourceMainWrapperAtIndex = function(e) {
                    void 0 === e || r.isSourceInStage(e) || (u[e].classList.add(i), n[e].noTransform())
                }, o.removeAnimationsFromStageSourceAnimationWrappersIfThereAre = function() {
                    for (var e in h) o.removeAnimationsFromSourceAnimationWrapperAtIndexIfThereAre(h[e])
                }, o.removeAnimationsFromSourceAnimationWrapperAtIndexIfThereAre = function(e) {
                    if (s[e]) {
                        var n = c[e];
                        B(n, l), B(n, p), B(n, g)
                    }
                }
            }(e),
            function(e) {
                var n = e.core,
                    t = n.sourcesPointerDown,
                    o = n.pointeringBucket,
                    r = e.elements,
                    i = r.sources,
                    s = r.sourceMainWrappers,
                    a = e.resolve,
                    c = e.sourcePointerProps,
                    d = e.stageIndexes,
                    l = a(se);
                t.listener = function(e) {
                    if ("touch" !== e.pointerType && "VIDEO" !== e.target.tagName && e.preventDefault(), o.runSwipingDownActionsForPropsAndEvent(c, e), c.downScreenY = e.screenY, c.pointerType = e.pointerType, 2 === c.pointersCount) l.runPinchActions();
                    else
                        for (var n in d) B(s[d[n]], u);
                    var t = i[d.current],
                        r = t && t.contains(e.target);
                    c.isSourceDownEventTarget = r
                }
            }(e),
            function(e) {
                var n = e.collections,
                    t = n.sourceMainWrapperTransformers,
                    o = n.sourceSizers,
                    r = e.core,
                    i = r.sourceEnhancementWrappersTransformer,
                    s = r.windowResizeActioner,
                    a = r.thumbsTransformer,
                    c = e.data,
                    d = e.elements,
                    l = e.props,
                    p = l.disableThumbs,
                    h = l.sources,
                    m = e.stageIndexes,
                    f = c.notThumbedSourceEnhancementWrapperScales,
                    g = c.captionHeights,
                    b = c.notThumbedSourceEnhancementWrapperTranslatesY,
                    v = d.captions,
                    x = d.sourceMainWrappers,
                    w = d.thumbs;
                s.runActions = function() {
                    innerWidth < 992 ? c.maxSourceWidth = innerWidth : c.maxSourceWidth = .9 * innerWidth, c.maxSourceHeight = .9 * innerHeight, p || (c.thumbedSourceEnhancementWrapperScale = 1 - d.thumbsContainer.offsetHeight / innerHeight, c.thumbedSourceEnhancementWrapperTranslateY = -d.thumbsContainer.offsetHeight / 2), 0 === c.unloadedThumbsCount && s.runThumbsActions(), void 0 !== m.previous && t[m.previous].negative(), void 0 !== m.next && t[m.next].positive();
                    for (var e = 0; e < h.length; e++) {
                        if (v[e]) {
                            g[e] = v[e].offsetHeight;
                            var n = g[e] - 25;
                            f[e] = 1 - n / innerHeight, b[e] = -n / 2
                        } else f[e] = 1, b[e] = 0;
                        B(x[e], u), i.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e), o[e] && o[e].adjustSize()
                    }
                }, s.runThumbsActions = function() {
                    c.thumbsInnerWidth = 0;
                    for (var e = 0; e < h.length; e++) c.thumbsInnerWidth += w[e].offsetWidth + 8;
                    a.transformToCurrent()
                }
            }(e),
            function(e) {
                var n = e.collections.sourceMainWrapperTransformers,
                    t = e.core.zoomer,
                    o = e.data,
                    r = e.elements,
                    i = e.sourcePointerProps,
                    s = e.stageIndexes,
                    a = e.ui,
                    c = r.sources,
                    d = r.sourceMainWrappers;
                t.zoomTo = function(e) {
                    o.zoom = p(e), r.sourceWrappersContainer.style.transform = "scale(".concat(o.zoom, ")")
                }, t.ifZoomingResetZoom = function() {
                    1 !== o.zoom && (t.zoomTo(1), t.stopZooming())
                }, t.startZooming = function() {
                    l("grab"), a.zoomFadeOut()
                }, t.stopZooming = function() {
                    l("zoom-in"), a.zoomFadeIn(), d[s.current].classList.add(u), n[s.current].translate(0, 0).zero(), i.upSwipedX = 0, i.upSwipedY = 0
                };
                var l = function(e) {
                        c[s.current] && (c[s.current].style.cursor = e)
                    },
                    p = function(e) {
                        return parseFloat(e.toPrecision(12))
                    }
            }(e)
    }

    function ue(e, n, o, r, i) {
        var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        s.setAttributeNS(null, "width", n), s.setAttributeNS(null, "height", n), s.setAttributeNS(null, "viewBox", r);
        var a = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return a.setAttributeNS(null, "class", "".concat(t, "svg-path")), a.setAttributeNS(null, "d", i), s.appendChild(a), e.appendChild(s), s
    }

    function de(e, n) {
        var o = document.createElement("div");
        return o.className = "".concat(t, "toolbar-button ").concat(a), o.title = n, e.appendChild(o), o
    }

    function le(e, n, t) {
        var o = de(e, n.title);
        o.onclick = t, ue(o, n.width, n.height, n.viewBox, n.d)
    }

    function pe(e) {
        var n = e.props.sources,
            o = e.elements,
            r = document.createElement("div");
        o.nav = r, r.className = "".concat(t, "nav"), o.container.appendChild(r),
            function(e, n) {
                var o = e.core,
                    r = o.clickZoomer,
                    i = r.zoomIn,
                    s = r.zoomOut,
                    a = o.lightboxCloser.close,
                    c = o.thumbsToggler,
                    u = e.props,
                    d = u.customToolbarButtons,
                    l = u.disableThumbs,
                    p = u.toolbarButtons,
                    h = document.createElement("div");
                h.className = "".concat(t, "toolbar"), n.appendChild(h);
                for (var m = function(n) {
                        le(h, d[n], (function() {
                            return d[n].onClick(e)
                        }))
                    }, f = 0; f < d.length; f++) m(f);
                l || le(h, p.thumbs, c.toggleThumbs), le(h, p.zoomIn, i), le(h, p.zoomOut, s),
                    function(e, n) {
                        var t = e.core.slideshowManager.toggleSlideshow,
                            o = e.componentsServices,
                            r = e.props.toolbarButtons.slideshow,
                            i = r.start,
                            s = r.pause,
                            a = de(n, i.title);
                        a.onclick = t;
                        var c = ue(a, i.width, i.height, i.viewBox, i.d);

                        function u(e) {
                            a.title = e.title, c.setAttributeNS(null, "width", e.width), c.setAttributeNS(null, "height", e.height), c.setAttributeNS(null, "viewBox", e.viewBox), c.firstChild.setAttributeNS(null, "d", e.d)
                        }
                        o.startSlideshow = function() {
                            u(s)
                        }, o.stopSlideshow = function() {
                            u(i)
                        }
                    }(e, h),
                    function(e, n) {
                        var t = e.componentsServices,
                            o = e.data,
                            r = e.fs,
                            i = e.props.toolbarButtons.fullscreen,
                            s = i.enter,
                            a = i.exit,
                            c = de(n, s.title),
                            u = ue(c, s.width, s.height, s.viewBox, s.d);

                        function d(e) {
                            c.title = e.title, u.setAttributeNS(null, "width", e.width), u.setAttributeNS(null, "height", e.height), u.setAttributeNS(null, "viewBox", e.viewBox), u.firstChild.setAttributeNS(null, "d", e.d)
                        }
                        t.ofs = function() {
                            o.ifs = !0, d(a)
                        }, t.xfs = function() {
                            o.ifs = !1, d(s)
                        }, c.onclick = r.t
                    }(e, h), le(h, p.close, a)
            }(e, r), n.length > 1 && function(e, n) {
                var o = e.componentsServices,
                    r = e.props.sources,
                    i = document.createElement("div");
                i.className = "".concat(t, "slide-number-container");
                var s = document.createElement("div");
                s.className = a;
                var c = document.createElement("span");
                o.setSlideNumber = function(e) {
                    return c.innerHTML = e
                };
                var u = document.createElement("span");
                u.className = "".concat(t, "slash");
                var d = document.createElement("div");
                d.innerHTML = r.length, i.appendChild(s), s.appendChild(c), s.appendChild(u), s.appendChild(d), n.appendChild(i), setTimeout((function() {
                    s.offsetWidth > 55 && (i.style.justifyContent = "flex-start")
                }))
            }(e, r)
    }

    function he(e) {
        var n = "fslightbox-loader",
            t = document.createElement("div");
        t.className = n;
        for (var o = 0; o < 3; o++) {
            var r = document.createElement("div");
            r.className = "".concat(n, "-child"), t.appendChild(r)
        }
        return e.appendChild(t), t
    }

    function me(e, n) {
        var t = e.core.stageManager,
            o = e.elements,
            s = o.sourceWrappersContainer,
            c = o.sourceMainWrappers;
        c[n] = document.createElement("div");
        var u = "".concat(d, " ").concat(r, " ").concat(a);
        t.isSourceInStage(n) || (u += " ".concat(i)), c[n].className = u, s.appendChild(c[n]),
            function(e, n) {
                var t = e.elements,
                    o = t.sourceMainWrappers,
                    r = t.sourceEnhancementWrappers;
                r[n] = document.createElement("div"), o[n].appendChild(r[n]),
                    function(e, n) {
                        var t = e.elements,
                            o = t.sourceAnimationWrappers,
                            r = t.sourceEnhancementWrappers;
                        o[n] = document.createElement("div"), he(o[n]), r[n].appendChild(o[n])
                    }(e, n)
            }(e, n)
    }

    function fe(e, n) {
        var t = e.data.isThumbing,
            o = e.elements,
            r = o.captions,
            i = o.container,
            s = e.props.captions,
            c = e.stageIndexes.current;
        r[n] = document.createElement("div");
        var u = "".concat(x, " ").concat(a);
        (c !== n || t) && (u += " ".concat(p)), r[n].className = u;
        var d = document.createElement("div");
        d.className = w, d.innerHTML = s[n], r[n].appendChild(d), i.appendChild(r[n])
    }

    function ge(e, n) {
        var t = e.core.slideChangeFacade,
            o = e.elements,
            r = e.props.slideButtons,
            i = n.charAt(0).toUpperCase() + n.slice(1),
            s = "slideButton".concat(i),
            c = r[n];
        o[s] = document.createElement("div"), o[s].className = "".concat(m, " ").concat(m, "-").concat(n), o[s].title = c.title, o[s].onclick = t["changeTo".concat(i)],
            function(e, n) {
                var t = document.createElement("div");
                t.className = "".concat(h, " ").concat(a), ue(t, n.width, n.height, n.viewBox, n.d), e.appendChild(t)
            }(o[s], c), o.container.appendChild(o[s])
    }
    //"object" === ("undefined" == typeof document ? "undefined" : M(document)) && ((n = document.createElement("style")).className = o, n.appendChild(document.createTextNode("")), document.head.appendChild(n));
    var be = "fslightbox-types";

    function ve(e) {
        var n, t = e.props,
            o = 0,
            r = {};
        this.getSourceTypeFromLocalStorageByUrl = function(e) {
            return n[e] ? n[e] : i(e)
        }, this.handleReceivedSourceTypeForUrl = function(e, t) {
            if (!1 === r[t] && (o--, "invalid" !== e ? r[t] = e : delete r[t], 0 === o)) {
                ! function(e, n) {
                    for (var t in n) e[t] = n[t]
                }(n, r);
                try {
                    localStorage.setItem(be, JSON.stringify(n))
                } catch (e) {}
            }
        };
        var i = function(e) {
            o++, r[e] = !1
        };
        if (t.disableLocalStorage) this.getSourceTypeFromLocalStorageByUrl = function() {}, this.handleReceivedSourceTypeForUrl = function() {};
        else {
            try {
                n = JSON.parse(localStorage.getItem(be))
            } catch (e) {}
            n || (n = {}, this.getSourceTypeFromLocalStorageByUrl = i)
        }
    }
    var xe = "image",
        we = "video",
        Se = "youtube",
        ye = "custom",
        Te = "invalid";

    function Ae(e, n, t, o) {
        var r = e.data,
            i = e.elements.sources,
            s = t / o,
            a = 0;
        this.adjustSize = function() {
            if ((a = r.maxSourceWidth / s) < r.maxSourceHeight) return t < r.maxSourceWidth && (a = o), c();
            a = o > r.maxSourceHeight ? r.maxSourceHeight : o, c()
        };
        var c = function() {
            var e = i[n].style;
            e.width = a * s + "px", e.height = a + "px"
        }
    }

    function Ce(e, n) {
        var t = this,
            o = e.collections.sourceSizers,
            r = e.core.sourceEnhancementWrappersTransformer,
            i = e.data.isSourceLoadedArray,
            s = e.elements,
            a = s.sourceAnimationWrappers,
            c = s.sourceEnhancementWrappers,
            d = (s.sourceMainWrappers, s.sources),
            p = e.props.initialAnimation,
            h = e.resolve;

        function m(e, t) {
            o[n] = h(Ae, [n, e, t]), o[n].adjustSize()
        }
        this.runActions = function(e, o) {
            i[n] = !0, d[n].classList.add(l), a[n].classList.add(p), a[n].removeChild(a[n].firstChild), r.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(n), R((function() {
                c[n].classList.add(u)
            })), m(e, o), t.runActions = m
        }
    }

    function Le(e, n) {
        var t, o = this,
            r = e.elements.sources,
            i = e.props,
            s = (0, e.resolve)(Ce, [n]);
        this.handleImageLoad = function(e) {
            var n = e.target,
                t = n.naturalWidth,
                o = n.naturalHeight;
            s.runActions(t, o)
        }, this.handleVideoLoad = function(e) {
            var n = e.target,
                o = n.videoWidth,
                r = n.videoHeight;
            t = !0, s.runActions(o, r)
        }, this.handleNotMetaDatedVideoLoad = function() {
            t || o.handleYoutubeLoad()
        }, this.handleYoutubeLoad = function() {
            var e = 1920,
                n = 1080;
            i.maxYoutubeDimensions && (e = i.maxYoutubeDimensions.width, n = i.maxYoutubeDimensions.height), s.runActions(e, n)
        }, this.handleCustomLoad = function() {
            var e = r[n];
            e.offsetWidth && e.offsetHeight ? s.runActions(e.offsetWidth, e.offsetHeight) : setTimeout(o.handleCustomLoad)
        }
    }

    function Ie(e, n, t) {
        var o = e.elements.sources,
            r = e.props.customClasses,
            i = r[n] ? r[n] : "";
        o[n].className = t + " " + i
    }

    function We(e, n) {
        var t = e.elements.sources,
            o = e.props.customAttributes;
        for (var r in o[n]) t[n].setAttribute(r, o[n][r])
    }

    function ze(e, n) {
        var t = e.collections.sourceLoadHandlers,
            o = e.elements,
            r = o.sources,
            i = o.sourceAnimationWrappers,
            s = e.props.sources;
        r[n] = document.createElement("img"), Ie(e, n, S), r[n].src = s[n], r[n].onload = t[n].handleImageLoad, We(e, n), i[n].appendChild(r[n])
    }

    function Ee(e, n) {
        var t = e.collections.sourceLoadHandlers,
            o = e.elements,
            r = o.sources,
            i = o.sourceAnimationWrappers,
            s = e.props,
            a = s.sources,
            c = s.videosPosters;
        r[n] = document.createElement("video"), Ie(e, n, S), r[n].src = a[n], r[n].onloadedmetadata = function(e) {
            t[n].handleVideoLoad(e)
        }, r[n].controls = !0, We(e, n), c[n] && (r[n].poster = c[n]);
        var u = document.createElement("source");
        u.src = a[n], r[n].appendChild(u), setTimeout(t[n].handleNotMetaDatedVideoLoad, 3e3), i[n].appendChild(r[n])
    }

    function Fe(e, n) {
        var o = e.collections.sourceLoadHandlers,
            r = e.elements,
            i = r.sources,
            s = r.sourceAnimationWrappers,
            a = e.props.sources;
        i[n] = document.createElement("iframe"), Ie(e, n, "".concat(S, " ").concat(t, "youtube-iframe"));
        var c = a[n],
            u = c.split("?")[1];
        i[n].src = "https://www.youtube.com/embed/".concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?").concat(u || ""), i[n].allowFullscreen = !0, We(e, n), s[n].appendChild(i[n]), o[n].handleYoutubeLoad()
    }

    function Me(e, n) {
        var t = e.collections.sourceLoadHandlers,
            o = e.elements,
            r = o.sources,
            i = o.sourceAnimationWrappers,
            s = e.props.sources;
        r[n] = s[n], Ie(e, n, "".concat(r[n].className, " ").concat(S)), i[n].appendChild(r[n]), t[n].handleCustomLoad()
    }

    function Pe(e, n) {
        e.data.isSourceLoaded;
        var o = e.elements,
            r = o.sources,
            i = o.sourceAnimationWrappers;
        o.sourceMainWrappers, e.props.sources, r[n] = document.createElement("div"), r[n].className = "".concat(t, "invalid-file-wrapper ").concat(a, " ").concat(b), r[n].innerHTML = "Invalid source", i[n].removeChild(i[n].firstChild), i[n].appendChild(r[n])
    }

    function Ne(e, n, t) {
        var o = e.props.thumbsIcons;
        if (o[t]) {
            n.appendChild(o[t].cloneNode(!0));
            var r = document.createElement("div");
            r.className = "fslightboxtd", n.appendChild(r)
        }
    }

    function Be(e, n, t) {
        var o = e.elements,
            r = o.thumbsWrappers,
            i = o.thumbsInner;
        r[n] = document.createElement("div"), r[n].className = z, Ne(e, r[n], n),
            function(e, n, t, o) {
                var r = e.core.thumbLoadHandler.handleLoad,
                    i = e.elements.thumbs,
                    s = e.stageIndexes.current;
                i[t] = document.createElement("img"), i[t].src = o;
                var a = A;
                s === t && (a += " ".concat(F)), i[t].className = a, i[t].onload = r, n.appendChild(i[t])
            }(e, r[n], n, t), i.appendChild(r[n])
    }

    function He(e) {
        var n = e.core.thumbsRenderDispatcher,
            t = e.data,
            o = e.props,
            r = o.showThumbsOnMount,
            i = o.sources,
            s = o.thumbs;
        this.buildThumbForTypeAndIndex = function(o, c) {
            var u;
            u = s[c] ? function() {
                return Be(e, c, s[c])
            } : o === xe ? function() {
                return Be(e, c, i[c])
            } : function() {
                return function(e, n) {
                    var t = e.elements,
                        o = t.thumbsWrappers,
                        r = t.thumbsInner;
                    o[n] = document.createElement("div"), o[n].className = "".concat(E, " ").concat(z), Ne(e, o[n], n),
                        function(e, n, t) {
                            var o = e.core.thumbLoadHandler.handleLoad,
                                r = e.elements.thumbs,
                                i = e.stageIndexes.current;
                            r[t] = document.createElement("div");
                            var s = "".concat(A, " ").concat(a);
                            i === t && (s += " ".concat(F)), r[t].className = s, ue(r[t], "22px", 0, "0 0 30 30", "M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.212,8l-0.2,9h-2.024l-0.2-9 H16.212z M15.003,22.189c-0.828,0-1.323-0.441-1.323-1.182c0-0.755,0.494-1.196,1.323-1.196c0.822,0,1.316,0.441,1.316,1.196 C16.319,21.748,15.825,22.189,15.003,22.189z"), n.appendChild(r[t]), setTimeout(o)
                        }(e, o[n], n), r.appendChild(o[n])
                }(e, c)
            }, n.addFunctionToToBeRenderedAtIndex(u, c), (r || t.isThumbing) && n.renderThumbsIfNotYetAndAllTypesDetected()
        }
    }

    function ke(e) {
        var n, t = e.collections,
            o = t.sourceLoadHandlers,
            r = t.sourcesRenderFunctions,
            i = e.core.sourceDisplayFacade,
            s = e.props.disableThumbs,
            a = e.resolve;
        s || (n = a(He)), this.runActionsForSourceTypeAndIndex = function(t, c) {
            var u;
            switch (t !== Te && (o[c] = a(Le, [c])), t) {
                case xe:
                    u = ze;
                    break;
                case we:
                    u = Ee;
                    break;
                case Se:
                    u = Fe;
                    break;
                case ye:
                    u = Me;
                    break;
                default:
                    u = Pe
            }
            r[c] = function() {
                return u(e, c)
            }, i.displaySourcesWhichShouldBeDisplayed(), s || n.buildThumbForTypeAndIndex(t, c)
        }
    }

    function Oe(e, n, t) {
        var o = e.props,
            r = o.types,
            i = o.type,
            s = o.sources;
        this.getTypeSetByClientForIndex = function(e) {
            var n;
            return r && r[e] ? n = r[e] : i && (n = i), n
        }, this.retrieveTypeWithXhrForIndex = function(e) {
            ! function(e, n) {
                var t = document.createElement("a");
                t.href = e;
                var o = t.hostname;
                if ("www.youtube.com" === o || "youtu.be" === o) return n(Se);
                var r = new XMLHttpRequest;
                r.onreadystatechange = function() {
                    if (4 !== r.readyState) {
                        if (2 === r.readyState) {
                            var e, t = r.getResponseHeader("content-type");
                            switch (t.slice(0, t.indexOf("/"))) {
                                case "image":
                                    e = xe;
                                    break;
                                case "video":
                                    e = we;
                                    break;
                                default:
                                    e = Te
                            }
                            r.onreadystatechange = null, r.abort(), n(e)
                        }
                    } else n(Te)
                }, r.open("GET", e), r.send()
            }(s[e], (function(o) {
                n.handleReceivedSourceTypeForUrl(o, s[e]), t.runActionsForSourceTypeAndIndex(o, e)
            }))
        }
    }

    function De(e) {
        var n, o, i, s = e.collections.sourceMainWrapperTransformers,
            a = e.componentsServices,
            h = e.core,
            m = h.enhancementActiver,
            f = h.eventsDispatcher,
            g = h.lightboxOpener,
            v = h.globalEventsController,
            x = h.scrollbarRecompensor,
            w = h.sourceDisplayFacade,
            S = h.sourceWrappersStager,
            T = h.stageManager,
            A = h.windowResizeActioner,
            z = e.data,
            E = e.elements,
            F = e.stageIndexes,
            M = e.ui;

        function B() {
            ! function(e) {
                var n = e.stageIndexes,
                    t = e.core.stageManager,
                    o = e.props.sources.length - 1;
                t.getPreviousSlideIndex = function() {
                    return 0 === n.current ? o : n.current - 1
                }, t.getNextSlideIndex = function() {
                    return n.current === o ? 0 : n.current + 1
                }, t.updateStageIndexes = 0 === o ? function() {} : 1 === o ? function() {
                    0 === n.current ? (n.next = 1, delete n.previous) : (n.previous = 0, delete n.next)
                } : function() {
                    n.previous = t.getPreviousSlideIndex(), n.next = t.getNextSlideIndex()
                }, t.isSourceInStage = o <= 2 ? function() {
                    return !0
                } : function(e) {
                    var t = n.current;
                    if (0 === t && e === o || t === o && 0 === e) return !0;
                    var r = t - e;
                    return -1 === r || 0 === r || 1 === r
                }
            }(e)
        }

        function H() {
            var n = e.props,
                o = n.disableThumbs,
                i = n.showThumbsOnMount,
                s = n.sources;
            z.isInitialized = !0, z.scrollbarWidth = function() {
                    var e = document.createElement("div"),
                        n = e.style,
                        t = document.createElement("div");
                    n.visibility = "hidden", n.width = "100px", n.msOverflowStyle = "scrollbar", n.overflow = "scroll", t.style.width = "100%", document.body.appendChild(e);
                    var o = e.offsetWidth;
                    return e.appendChild(t), o - t.offsetWidth
                }(), z.unloadedThumbsCount = s.length,
                function(e) {
                    for (var n = e.collections.sourceMainWrapperTransformers, t = e.props.sources, o = e.resolve, r = 0; r < t.length; r++) n[r] = o(P, [r])
                }(e), o || (z.isThumbing = i, function(e) {
                    var n = e.core,
                        t = e.data,
                        o = e.elements,
                        r = e.props;
                    t.isThumbing = r.showThumbsOnMount, t.thumbsInnerWidth = null, t.thumbsTransform = 0, t.thumbedSourceEnhancementWrapperScale = null, t.thumbedSourceEnhancementWrapperTranslateY = null, t.unloadedThumbsCount = r.sources.length, e.thumbsSwipingProps = {
                            isPointering: !1,
                            downScreenX: null,
                            swipedX: null
                        }, n.thumbLoadHandler = {}, n.thumbsRenderDispatcher = {}, n.thumbsSwipingDown = {}, n.thumbsToggler = {}, n.thumbsTransformer = {}, n.thumbsTransformTransitioner = {}, o.thumbsContainer = null, o.thumbs = [], o.thumbsWrappers = [], o.thumbsComponents = [], o.thumbsInner = null,
                        function(e) {
                            var n = e.core,
                                t = n.thumbLoadHandler,
                                o = n.windowResizeActioner,
                                r = e.componentsServices,
                                i = e.data,
                                s = e.elements.thumbsWrappers;
                            t.handleLoad = function() {
                                if (i.unloadedThumbsCount--, 0 === i.unloadedThumbsCount) {
                                    for (var e = 0; e < s.length; e++) s[e].classList.add(l);
                                    o.runThumbsActions(), r.hideThumbsLoader()
                                }
                            }
                        }(e),
                        function(e) {
                            var n = e.core.thumbsRenderDispatcher,
                                t = e.props.sources,
                                o = [],
                                r = !1,
                                i = 0;
                            n.addFunctionToToBeRenderedAtIndex = function(e, n) {
                                o[n] = e, i++
                            }, n.renderThumbsIfNotYetAndAllTypesDetected = function() {
                                if (!r && i === t.length) {
                                    r = !0;
                                    for (var e = 0; e < t.length; e++) o[e]()
                                }
                            }
                        }(e),
                        function(e) {
                            var n = e.core,
                                t = n.thumbsSwipingDown,
                                o = n.pointeringBucket,
                                r = e.thumbsSwipingProps;
                            t.listener = function(e) {
                                e.preventDefault(), o.runSwipingDownActionsForPropsAndEvent(r, e)
                            }
                        }(e),
                        function(e) {
                            var n = e.core.thumbsToggler,
                                t = e.data,
                                o = (0, e.resolve)(N);
                            n.toggleThumbs = function() {
                                t.isThumbing ? o.closeThumbs() : o.openThumbs()
                            }
                        }(e),
                        function(e) {
                            var n = e.core,
                                t = n.thumbsTransformer,
                                o = n.thumbsTransformTransitioner,
                                r = e.data,
                                i = (0, e.resolve)(k);
                            t.transformToCurrent = function() {
                                r.thumbsInnerWidth > innerWidth ? i.runActions() : i.runToThinThumbsActions()
                            }, t.transformToCurrentWithTransition = function() {
                                r.thumbsInnerWidth > innerWidth && o.callActionWithTransition(i.runActions)
                            }
                        }(e),
                        function(e) {
                            var n = e.core.thumbsTransformTransitioner,
                                t = e.elements,
                                o = O((function() {
                                    t.thumbsInner.classList.remove(u)
                                }), 300);
                            n.callActionWithTransition = function(e) {
                                t.thumbsInner.classList.add(u), e(), o()
                            }
                        }(e)
                }(e)), ce(e),
                function(e) {
                    var n = e.elements,
                        o = document.createElement("div");
                    o.className = "".concat(t, "container ").concat(r, " ").concat(b), n.container = o
                }(e),
                function(e) {
                    var n = e.elements;
                    n.slideSwipingHoverer = document.createElement("div"), n.slideSwipingHoverer.className = "".concat(t, "slide-swiping-hoverer ").concat(r, " ").concat(d)
                }(e), pe(e),
                function(e) {
                    var n = e.elements;
                    n.slideshowBar = document.createElement("div"), n.slideshowBar.className = "".concat(t, "slideshow-bar ").concat(d), n.container.appendChild(n.slideshowBar)
                }(e),
                function(e) {
                    var n = e.core.sourcesPointerDown.listener,
                        t = e.elements,
                        o = e.middleware,
                        i = e.props.sources,
                        s = document.createElement("div");
                    s.className = "".concat(y, " ").concat(d, " ").concat(r), t.container.appendChild(s), s.addEventListener("pointerdown", o(n, te)), t.sourceWrappersContainer = s;
                    for (var a = 0; a < i.length; a++) me(e, a)
                }(e),
                function(e) {
                    for (var n = e.props.captions, t = 0; t < n.length; t++) n[t] && fe(e, t)
                }(e), s.length > 1 && function(e) {
                    ge(e, "previous"), ge(e, "next")
                }(e), o || function(e) {
                    var n = e.componentsServices,
                        t = e.elements,
                        o = e.data;
                    t.thumbsContainer = document.createElement("div");
                    var i, s, a = C;

                    function c() {
                        s = !0, (i = he(t.thumbsContainer)).classList.add(L)
                    }
                    o.isThumbing ? c() : a += " ".concat(p), n.appendThumbsLoaderIfNotYet = function() {
                            s || c()
                        }, n.hideThumbsLoader = function() {
                            t.thumbsContainer.removeChild(i)
                        }, t.thumbsContainer.className = a, t.container.appendChild(t.thumbsContainer),
                        function(e) {
                            var n = e.elements;
                            n.thumbsCursorer = document.createElement("div"), n.thumbsCursorer.className = "".concat(I, " ").concat(r, " ").concat(d)
                        }(e),
                        function(e) {
                            var n = e.core.thumbsSwipingDown.listener,
                                t = e.elements;
                            t.thumbsInner = document.createElement("div"), t.thumbsInner.className = W, t.thumbsInner.addEventListener("pointerdown", n), t.thumbsContainer.appendChild(t.thumbsInner)
                        }(e)
                }(e),
                function(e) {
                    for (var n = e.props.sources, t = e.resolve, o = t(ve), r = t(ke), i = t(Oe, [o, r]), s = 0; s < n.length; s++)
                        if ("string" == typeof n[s]) {
                            var a = i.getTypeSetByClientForIndex(s);
                            if (a) r.runActionsForSourceTypeAndIndex(a, s);
                            else {
                                var c = o.getSourceTypeFromLocalStorageByUrl(n[s]);
                                c ? r.runActionsForSourceTypeAndIndex(c, s) : i.retrieveTypeWithXhrForIndex(s)
                            }
                        } else r.runActionsForSourceTypeAndIndex(ye, s)
                }(e), f.dispatch("onInit")
        }

        function D() {
            S.removeAnimationsFromStageSourceAnimationWrappersIfThereAre(), S.displayNotDisplayedStageSourceMainWrappers(), S.possiblyUnstageSourceMainWrapperAtIndex(n), S.possiblyUnstageSourceMainWrapperAtIndex(o), S.possiblyUnstageSourceMainWrapperAtIndex(i), m.changeActiveCaptionFromTo(o, F.current), m.changeActiveThumbFromTo(o, F.current), f.dispatch("onShow")
        }
        g.open = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            n = F.previous, o = F.current, i = F.next, F.current = e, z.isInitialized || B(), T.updateStageIndexes(), z.isInitialized ? D() : H(), w.displaySourcesWhichShouldBeDisplayed(), a.setSlideNumber(e + 1), document.body.appendChild(E.container), document.documentElement.classList.add(c), x.addRecompense(), v.addListeners(), A.runActions(), s[F.current].noTransform(), M.scheduleFadeOut(), f.dispatch("onOpen")
        }
    }

    function Re(e) {
        return function(e) {
            if (Array.isArray(e)) return Xe(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return Xe(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Xe(e, n) : void 0
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Xe(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
        return o
    }

    function Ye(e, n, t) {
        return Ye = Ue() ? Reflect.construct.bind() : function(e, n, t) {
            var o = [null];
            o.push.apply(o, n);
            var r = new(Function.bind.apply(e, o));
            return t && Ze(r, t.prototype), r
        }, Ye.apply(null, arguments)
    }

    function Ue() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function Ze(e, n) {
        return Ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
            return e.__proto__ = n, e
        }, Ze(e, n)
    }

    function je(e) {
        return function(e) {
            if (Array.isArray(e)) return qe(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return qe(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? qe(e, n) : void 0
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function qe(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
        return o
    }

    function Ve() {
        for (var e = document.getElementsByTagName("a"), n = function(n) {
                if (!e[n].hasAttribute("data-fslightbox")) return "continue";
                var t = e[n].getAttribute("href");
                if (!t) return console.warn('The "data-fslightbox" attribute was set but the "href" wasn\'t.'), "continue";
                var o = e[n].getAttribute("data-fslightbox");
                fsLightboxInstances[o] || (fsLightboxInstances[o] = new FsLightbox);
                var r = null;
                "#" === t.charAt(0) ? (r = document.getElementById(t.substring(1)).cloneNode(!0)).removeAttribute("id") : r = t, fsLightboxInstances[o].props.sources.push(r), fsLightboxInstances[o].elements.a.push(e[n]);
                var i = fsLightboxInstances[o].props.sources.length - 1;
                e[n].onclick = function(e) {
                    e.preventDefault(), fsLightboxInstances[o].open(i)
                }, l("captions", "data-caption"), l("customClasses", "data-class"), l("customClasses", "data-custom-class"), l("types", "data-type"), l("thumbs", "data-thumb"), l("videosPosters", "data-video-poster");
                for (var s = ["href", "data-fslightbox", "data-caption", "data-class", "data-custom-class", "data-type", "data-thumb", "data-video-poster"], a = e[n].attributes, c = fsLightboxInstances[o].props.customAttributes, u = 0; u < a.length; u++)
                    if (-1 === s.indexOf(a[u].name) && "data-" === a[u].name.substr(0, 5)) {
                        c[i] || (c[i] = {});
                        var d = a[u].name.substr(5);
                        c[i][d] = a[u].value
                    }
                function l(t, r) {
                    e[n].hasAttribute(r) && (fsLightboxInstances[o].props[t][i] = e[n].getAttribute(r))
                }
            }, t = 0; t < e.length; t++) n(t);
        var o = Object.keys(fsLightboxInstances);
        window.fsLightbox = fsLightboxInstances[o[o.length - 1]]
    }
    return window.FsLightbox = function() {
        var e = this;
        this.props = {
            sources: [],
            maxYoutubeDimensions: null,
            customAttributes: [],
            customClasses: [],
            types: [],
            type: null,
            thumbs: [],
            thumbsIcons: [],
            captions: [],
            videosPosters: [],
            customToolbarButtons: [],
            initialAnimation: b,
            slideChangeAnimation: f,
            slideDistance: .3,
            slideshowTime: 8e3,
            UIFadeOutTime: 8e3,
            zoomIncrement: .25,
            toolbarButtons: {
                thumbs: {
                    width: "17px",
                    height: "17px",
                    viewBox: "0 0 22 22",
                    d: "M 3 2 C 2.448 2 2 2.448 2 3 L 2 6 C 2 6.552 2.448 7 3 7 L 6 7 C 6.552 7 7 6.552 7 6 L 7 3 C 7 2.448 6.552 2 6 2 L 3 2 z M 10 2 C 9.448 2 9 2.448 9 3 L 9 6 C 9 6.552 9.448 7 10 7 L 13 7 C 13.552 7 14 6.552 14 6 L 14 3 C 14 2.448 13.552 2 13 2 L 10 2 z M 17 2 C 16.448 2 16 2.448 16 3 L 16 6 C 16 6.552 16.448 7 17 7 L 20 7 C 20.552 7 21 6.552 21 6 L 21 3 C 21 2.448 20.552 2 20 2 L 17 2 z M 3 9 C 2.448 9 2 9.448 2 10 L 2 13 C 2 13.552 2.448 14 3 14 L 6 14 C 6.552 14 7 13.552 7 13 L 7 10 C 7 9.448 6.552 9 6 9 L 3 9 z M 10 9 C 9.448 9 9 9.448 9 10 L 9 13 C 9 13.552 9.448 14 10 14 L 13 14 C 13.552 14 14 13.552 14 13 L 14 10 C 14 9.448 13.552 9 13 9 L 10 9 z M 17 9 C 16.448 9 16 9.448 16 10 L 16 13 C 16 13.552 16.448 14 17 14 L 20 14 C 20.552 14 21 13.552 21 13 L 21 10 C 21 9.448 20.552 9 20 9 L 17 9 z M 3 16 C 2.448 16 2 16.448 2 17 L 2 20 C 2 20.552 2.448 21 3 21 L 6 21 C 6.552 21 7 20.552 7 20 L 7 17 C 7 16.448 6.552 16 6 16 L 3 16 z M 10 16 C 9.448 16 9 16.448 9 17 L 9 20 C 9 20.552 9.448 21 10 21 L 13 21 C 13.552 21 14 20.552 14 20 L 14 17 C 14 16.448 13.552 16 13 16 L 10 16 z M 17 16 C 16.448 16 16 16.448 16 17 L 16 20 C 16 20.552 16.448 21 17 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 17 C 21 16.448 20.552 16 20 16 L 17 16 z",
                    title: "Thumbnails"
                },
                zoomIn: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 30 30",
                    d: "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 12.984375 7.9863281 A 1.0001 1.0001 0 0 0 12 9 L 12 12 L 9 12 A 1.0001 1.0001 0 1 0 9 14 L 12 14 L 12 17 A 1.0001 1.0001 0 1 0 14 17 L 14 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 14 12 L 14 9 A 1.0001 1.0001 0 0 0 12.984375 7.9863281 z",
                    title: "Zoom In"
                },
                zoomOut: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 30 30",
                    d: "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 9 12 A 1.0001 1.0001 0 1 0 9 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 9 12 z",
                    title: "Zoom Out"
                },
                slideshow: {
                    start: {
                        width: "16px",
                        height: "16px",
                        viewBox: "0 0 30 30",
                        d: "M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z",
                        title: "Turn on slideshow"
                    },
                    pause: {
                        width: "14px",
                        height: "14px",
                        viewBox: "0 0 356.19 356.19",
                        d: "M121,0c18,0,33,15,33,33v372c0,18-15,33-33,33s-32-15-32-33V33C89,15,103,0,121,0zM317,0c18,0,32,15,32,33v372c0,18-14,33-32,33s-33-15-33-33V33C284,15,299,0,317,0z",
                        title: "Turn off slideshow"
                    }
                },
                fullscreen: {
                    enter: {
                        width: "20px",
                        height: "20px",
                        viewBox: "0 0 18 18",
                        d: "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                        title: "Enter fullscreen"
                    },
                    exit: {
                        width: "24px",
                        height: "24px",
                        viewBox: "0 0 950 1024",
                        d: "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",
                        title: "Exit fullscreen"
                    }
                },
                close: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 24 24",
                    d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",
                    title: "Close"
                }
            },
            slideButtons: {
                previous: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 20 20",
                    d: "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z",
                    title: "Previous"
                },
                next: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 20 20",
                    d: "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z",
                    title: "Next"
                }
            }
        }, this.data = {
            isInitialized: !1,
            isThumbing: !1,
            maxSourceWidth: 0,
            maxSourceHeight: 0,
            scrollbarWidth: 0,
            isSlideshowOn: !1,
            isSourceLoadedArray: [],
            captionHeights: [],
            notThumbedSourceEnhancementWrapperScales: [],
            notThumbedSourceEnhancementWrapperTranslatesY: [],
            zoom: 1
        }, this.ifs = !1, this.sourcePointerProps = {
            isPointering: !1,
            pointers: {},
            pointersCount: 0,
            downScreenX: null,
            downScreenY: null,
            isSourceDownEventTarget: !1,
            swipedX: 0,
            swipedY: 0,
            upSwipedX: 0,
            upSwipedY: 0,
            pinchedHypot: 0
        }, this.stageIndexes = {}, this.elements = {
            a: [],
            captions: [],
            container: null,
            nav: null,
            slideSwipingHoverer: null,
            slideButtonPrevious: null,
            slideButtonNext: null,
            sourceWrappersContainer: null,
            slideshowBar: null,
            sourceAnimationWrappers: [],
            sourceEnhancementWrappers: [],
            sourceMainWrappers: [],
            sources: []
        }, this.componentsServices = {
            enterFullscreen: null,
            exitFullscreen: null,
            setSlideNumber: function() {},
            startSlideshow: null,
            stopSlideshow: null
        }, this.middleware = function(n, t) {
            return function(e, n, t) {
                return function() {
                    for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                    var s = t ? [].concat(Re(t), r) : r;
                    n.apply(void 0, Re(s)) && e.apply(void 0, r)
                }
            }(n, t, [e])
        }, this.resolve = function(n) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return t.unshift(e), Ye(n, je(t))
        }, this.collections = {
            sourceMainWrapperTransformers: [],
            sourceLoadHandlers: [],
            sourcesRenderFunctions: [],
            sourceSizers: []
        }, this.core = {
            enhancementActiver: {},
            classFacade: {},
            clickZoomer: {},
            eventsDispatcher: {},
            globalEventsController: {},
            lightboxCloser: {},
            lightboxOpener: {},
            lightboxUpdater: {},
            pointeringBucket: {},
            scrollbarRecompensor: {},
            slideshowManager: {},
            slideChangeFacade: {},
            slideIndexChanger: {},
            sourceDisplayFacade: {},
            sourceEnhancementWrappersTransformer: {},
            sourceWrappersStager: {},
            sourcesPointerDown: {},
            stageManager: {},
            swipingActioner: {},
            windowResizeActioner: {},
            zoomer: {}
        }, this.fs = {}, this.ui = {}, De(this), this.open = this.core.lightboxOpener.open, this.close = function() {
            return e.core.lightboxCloser.close()
        }
    }, window.fsLightboxInstances = {}, Ve(), window.refreshFsLightbox = function() {
        for (var e in fsLightboxInstances) {
            var n = fsLightboxInstances[e].props;
            fsLightboxInstances[e] = new FsLightbox, fsLightboxInstances[e].props = n, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = []
        }
        Ve()
    }, e
})()));
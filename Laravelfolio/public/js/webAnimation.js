/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/webAnimation.js ***!
  \**************************************/
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var animations = {
  bodychilds: document.body.getElementsByTagName("*"),
  hr: document.querySelectorAll('.hr'),
  init: function init() {
    // activer check resize
    animations.checkResize();
    var _iterator = _createForOfIteratorHelper(animations.hr),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var hr = _step.value;
        // mettre le hr en scale 0 , voir la class css
        hr.classList.add('transformScaleOff');
      }
      // creer la boucle qui rajoute la class opacityOff sur tous les element de la page
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(animations.bodychilds),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var bodychild = _step2.value;
        if (!bodychild.classList.contains("curtain") && bodychild.tagName.toLowerCase() === 'section') {
          bodychild.classList.add('opacityOff');
        }

        // if ( !bodychild.classList.contains( "visitorsNb" ) ) {
        //     bodychild.classList.remove( 'opacityOff' )
        // }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },
  // gérer le fait qu'au resize on n'est pas de ralentissement du à la propriété css "transition"
  checkResize: function checkResize() {
    window.addEventListener("resize", animations.handleResize);
  },
  handleResize: function handleResize() {
    var _iterator3 = _createForOfIteratorHelper(animations.bodychilds),
      _step3;
    try {
      var _loop = function _loop() {
        var bodychild = _step3.value;
        bodychild.classList.remove('opacityOff');
        setTimeout(function () {
          bodychild.classList.add('opacityOff');
        }, 2000);
      };
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
};
document.addEventListener("DOMContentLoaded", animations.init);

// oberserver qui permet de gérer le fade au scroll
var observer = new IntersectionObserver(function (entries) {
  var _iterator4 = _createForOfIteratorHelper(entries),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var entry = _step4.value;
      if (entry.isIntersecting && !entry.target.classList.contains('curtain')) {
        entry.target.classList.add('opacityOn');
      } else {
        entry.target.classList.remove('opacityOn');
      }
      if (entry.isIntersecting && entry.target.classList.contains('hr')) {
        entry.target.classList.add('transformScaleOn');
      } else {
        entry.target.classList.remove('transformScaleOn');
      }
      if (entry.isIntersecting && entry.target.classList.contains('carousel-child')) {
        entry.target.classList.add('myAnim');
      } else {
        entry.target.classList.remove('myAnim');
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
});

// boucle qui oberserve chaque élément de la page
var _iterator5 = _createForOfIteratorHelper(animations.bodychilds),
  _step5;
try {
  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
    var element = _step5.value;
    //oberser tout le monde
    observer.observe(element);
  }
} catch (err) {
  _iterator5.e(err);
} finally {
  _iterator5.f();
}
/******/ })()
;
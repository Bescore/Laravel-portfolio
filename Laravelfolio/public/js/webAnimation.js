(()=>{function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw o}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n={bodychilds:document.body.getElementsByTagName("*"),hr:document.querySelectorAll(".hr"),init:function(){n.checkResize();var e,r=t(n.hr);try{for(r.s();!(e=r.n()).done;){e.value.classList.add("transformScaleOff")}}catch(t){r.e(t)}finally{r.f()}var a,i=t(n.bodychilds);try{for(i.s();!(a=i.n()).done;){var o=a.value;o.classList.contains("curtain")||"section"!==o.tagName.toLowerCase()||o.classList.add("opacityOff")}}catch(t){i.e(t)}finally{i.f()}},checkResize:function(){window.addEventListener("resize",n.handleResize)},handleResize:function(){var e,r=t(n.bodychilds);try{var a=function(){var t=e.value;t.classList.remove("opacityOff"),setTimeout((function(){t.classList.add("opacityOff")}),2e3)};for(r.s();!(e=r.n()).done;)a()}catch(t){r.e(t)}finally{r.f()}}};document.addEventListener("DOMContentLoaded",n.init);var r,a=new IntersectionObserver((function(e){var n,r=t(e);try{for(r.s();!(n=r.n()).done;){var a=n.value;a.isIntersecting&&!a.target.classList.contains("curtain")?a.target.classList.add("opacityOn"):a.target.classList.remove("opacityOn"),a.isIntersecting&&a.target.classList.contains("hr")?a.target.classList.add("transformScaleOn"):a.target.classList.remove("transformScaleOn"),a.isIntersecting&&a.target.classList.contains("carousel-child")?a.target.classList.add("myAnim"):a.target.classList.remove("myAnim")}}catch(t){r.e(t)}finally{r.f()}})),i=t(n.bodychilds);try{for(i.s();!(r=i.n()).done;){var o=r.value;a.observe(o)}}catch(t){i.e(t)}finally{i.f()}})();
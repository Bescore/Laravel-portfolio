/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/lightMode.js ***!
  \***********************************/
// change theme

var theme = {
  changeThemeBtn: document.querySelector('#light-mode'),
  jmPhoto: document.querySelector('#jean_marie'),
  init: function init() {
    // préférence dark/lightmode
    //localStorage.setItem( "lightMode", "0" )
    theme.checkTheme();
    theme.changeThemeBtn.addEventListener('click', theme.handleChangeTheme);
  },
  handleChangeTheme: function handleChangeTheme() {
    if (localStorage.getItem("lightMode") === "0" || !localStorage.getItem("lightMode")) {
      theme.purpleMode();
      localStorage.setItem("lightMode", "1");
    } else {
      theme.yellowMode();
      localStorage.setItem("lightMode", "0");
    }
  },
  checkTheme: function checkTheme() {
    if (localStorage.getItem("lightMode") == "1") {
      theme.purpleMode();
    } else {
      theme.yellowMode();
    }
  },
  yellowMode: function yellowMode() {
    theme.setOfColor('--primary-project-color', '#e7a631');
    theme.setOfColor('--secondary-project-color', '#1d2125');
    theme.setOfColor('--tertiary-project-color', '#ffffff');
    theme.setOfColor('--background-text-color', '#424549');
    document.querySelector('.body').style.color = "#ffffff";
    theme.jmPhoto.src = "/img/jm.png";
  },
  purpleMode: function purpleMode() {
    theme.setOfColor('--secondary-project-color', '#302d4f');
    theme.setOfColor('--tertiary-project-color', '#1d2125');
    theme.setOfColor('--primary-project-color', '#c4f1be');
    theme.setOfColor('--background-text-color', '#ffffff');
    document.querySelector('.body').style.color = "#ffffff";
    document.querySelector('#nom').style.backgroundColor = "#2D3135";
    document.querySelector('#message').style.backgroundColor = "#2D3135";
    document.querySelector('#email').style.backgroundColor = "#2D3135";
    if (window.location.pathname.split('/')[1] == "home" || window.location.pathname.split('/')[1] == "#home") {
      document.querySelector('#nom').style.backgroundColor = "#2d3135";
      document.querySelector('#email').style.backgroundColor = "#2d3135";
      document.querySelector('#message').style.backgroundColor = "#2d3135";
    }
    theme.jmPhoto.src = "/img/JM_linkedin.jpg";
  },
  setOfColor: function setOfColor(nameofcolor, thecolor) {
    document.documentElement.style.setProperty(nameofcolor, thecolor);
  }
};
document.addEventListener("DOMContentLoaded", theme.init);
/******/ })()
;
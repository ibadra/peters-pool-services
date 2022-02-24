var myNav = document.getElementById("nav");

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

window.onscroll = function () {
  "use strict";
  if (viewportWidth >= 1024) {
    if (
      document.body.scrollTop >= 700 ||
      document.documentElement.scrollTop >= 700
    ) {
      myNav.classList.add("scroll");
    } else {
      myNav.classList.remove("scroll");
    }
  } else {
    if (
      document.body.scrollTop >= 280 ||
      document.documentElement.scrollTop >= 280
    ) {
      myNav.classList.add("scroll");
    } else {
      myNav.classList.remove("scroll");
    }
  }
};

// if (viewportWidth >= 1024) {
//   if (
//     document.body.scrollTop >= 700 ||
//     document.documentElement.scrollTop >= 700
//   ) {
//     myNav.classList.add("scroll");
//   } else {
//     myNav.classList.remove("scroll");
//   }
// } else {
//   if (
//     document.body.scrollTop >= 280 ||
//     document.documentElement.scrollTop >= 280
//   ) {
//     myNav.classList.add("scroll");
//   } else {
//     myNav.classList.remove("scroll");
//   }
// }

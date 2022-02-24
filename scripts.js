var myNav = document.getElementById("nav");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 700 ||
    document.documentElement.scrollTop >= 700
  ) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

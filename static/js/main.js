(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".my-navbar img");
    const title = document.querySelector(".my-navbar h1");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "images/logo/logo2.webp";
      title.classList.remove("text-white");
    } else {
      logo.src = "images/logo/logo.svg";
      title.classList.add("text-white");
    }
  };

  // ===== wow js
  new WOW().init();
})();

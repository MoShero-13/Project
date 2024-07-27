/*=============== Animation Script ===============*/
//common reveal options to create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".front-image", { delay: 200, origin: "right" });
ScrollReveal().reveal(" .para-about ", { delay: 300, origin: "left" });
ScrollReveal().reveal(".box", { delay: 150, origin: "bottom" });
ScrollReveal().reveal(".map", { delay: 100, origin: "bottom" });
ScrollReveal().reveal(".main-h1", { delay: 200, origin: "left" });
ScrollReveal().reveal(".news-1", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".slide1", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".slide2", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".logo-footer", { delay: 200, origin: "left" });
ScrollReveal().reveal(".inner-contact-1", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal(".inner-contact-2", { delay: 200, origin: "top" });
ScrollReveal().reveal(".inner-contact-3", {
  delay: 200,
  origin: "bottom",
});

paceOptions = {
  ajax: true,
  document: true,
  eventLag: false,
};

Pace.on("done", function () {
  $(".p")
    .delay(500)
    .animate(
      { top: "30%", opacity: "0" },
      3000,
      $.bez([0.12, 0.63, 0.3, 0.99])
    );

  $("#preloader")
    .delay(500)
    .animate(
      { top: "-130%", opacity: "0.5" },
      2000,
      $.bez([0.12, 0.63, 0.3, 0.99])
    );

  TweenMax.from(".title", 2, {
    delay: 1.8,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut,
  });
});

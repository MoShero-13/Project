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

/*=============== Toggle List ===============*/
/* When the user clicks on the button,toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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

/*=============== Header Scroll ===============*/
var lasrScrollTop = 0;
header = document.getElementById("header");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lasrScrollTop) {
    header.style.top = "-140px";
  } else {
    header.style.top = "0";
  }
  lasrScrollTop = scrollTop;
});

/*=============== Animation Script ===============*/
//common reveal options to create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".h1", { delay: 1000, origin: "bottom" });
ScrollReveal().reveal(".h2", { delay: 1200, origin: "bottom" });
ScrollReveal().reveal(".pattern", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".pattern-1", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".pattern-2", { delay: 1000, origin: "bottom" });
ScrollReveal().reveal(".text-box", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".image", { delay: 200, origin: "top" });
ScrollReveal().reveal(".text-box-1", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".image-1", { delay: 200, origin: "top" });

/*=============== Search Filter ===============*/
function myFilter() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementsByClassName("myUL");
  li = document.getElementsByClassName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
/*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) => {
  const searchBar = document.getElementById(search),
    searchButton = document.getElementById(button);

  searchButton.addEventListener("click", () => {
    // We add the show-search class, so that the search bar expands
    searchBar.classList.toggle("show-search");
  });
};
toggleSearch("search-bar", "search-button");

/*=============== Search Button ===============*/
/* When the user clicks on the button,toggle between hiding and showing the dropdown content */
function mySearch() {
  document.getElementById("myDropdown-1").classList.toggle("show-1");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn-1")) {
    var dropdowns = document.getElementsByClassName("dropdown-content-1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show-1")) {
        openDropdown.classList.remove("show-1");
      }
    }
  }
};

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

/* animation on scroll of time line */
function container() {
    var containers = document.querySelectorAll(".container");
  
    for (var i = 0; i < containers.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = containers[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        containers[i].classList.add("active");
      } else {
        containers[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", container);

/* animation on scroll of language skill bars */
function lang() {
    var langs = document.querySelectorAll(".lang");
  
    for (var i = 0; i < langs.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = langs[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        langs[i].classList.add("active");
      } else {
        langs[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", lang);  
  
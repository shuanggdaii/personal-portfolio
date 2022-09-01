/* animation on scroll of time line */
function container() {
    var containers = document.querySelectorAll(".tlcontainer");
  
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



/* animation on scroll of stars block */
function star() {
  var stars = document.querySelectorAll(".star");

  for (var i = 0; i < stars.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = stars[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      stars[i].classList.add("checked");
    } else {
      stars[i].classList.remove("checked");
    }
  }
}

window.addEventListener("scroll", star);




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





  
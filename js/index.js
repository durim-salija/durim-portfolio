function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav__menu") {
      x.className += " responsive";
    } else {
      x.className = "nav__menu";
    }
  }
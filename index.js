let body = document.body;

var clicked = false;

function clickedEmail() {
  if (clicked == true) {
    return;
  }

  clicked = true;
  input = document.createElement("input");
  body.appendChild(input);
  input.value = "william.h.cottingham@gmail.com";
  input.select();
  document.execCommand("copy");

  body.removeChild(input);

  document.getElementById("email").innerHTML = "Copied to Clipboard";

  setTimeout(function() {
    document.getElementById("email").style.opacity = "0";
  }, 2000);

  setTimeout(function() {
    document.getElementById("email").innerHTML = "Email";
    document.getElementById("email").style.opacity = "1";
  }, 3000);

  setTimeout(function() {
    clicked = false;
  }, 4000);
}

function clickedContact() {
  changeMenu();
  document.getElementById("contact").style.fontSize = "3em";
  document.getElementById("contact-contents").style.display = "block";
  document.getElementById("about-contents").style.display = "none";
}

function clickedAbout() {
  changeMenu();
  document.getElementById("about").style.fontSize = "3em";
  document.getElementById("about-contents").style.display = "block";
  document.getElementById("contact-contents").style.display = "none";
}

function changeMenu() {
  var all = document.getElementsByClassName("nav-item");

  for (var i = 0; i < all.length; i++) {
    all[i].style.fontSize = "2em";
  }
}

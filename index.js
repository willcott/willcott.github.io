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

let body = document.body;

let clicked = false;

function copyHandler(id) {
  if (clicked == true) {
    return;
  }

  clicked = true;
  let input = document.createElement("input");
  body.appendChild(input);
  input.value = "william.h.cottingham@gmail.com";
  input.select();
  document.execCommand("copy");

  body.removeChild(input);
  let oldHtml = document.getElementById(id).innerHTML;

  document.getElementById(id).innerHTML = "Copied to Clipboard";

  setTimeout(function() {
    document.getElementById(id).style.opacity = "0";
  }, 2000);

  setTimeout(function() {
    document.getElementById(id).innerHTML = oldHtml;
    document.getElementById(id).style.opacity = "1";
  }, 3000);

  setTimeout(function() {
    clicked = false;
  }, 4000);
}

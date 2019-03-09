let body = document.body;
let title = document.getElementById("title");
let root = document.documentElement;

let items = document.getElementsByClassName("item");

var mouseDown = false;
var mouseOut = false;

function include() {
    mouseOut = false;
}

function disclude() {
    mouseOut = true;
}

body.addEventListener("mousemove", function (e) {


    var pageX = e.clientX;
    var pageY = e.clientY;

    var centerWidth = getWidth() / 2;
    var centerHeight = getHeight() / 2;

    var xTranslation = -50 - (centerWidth - pageX) / 200;
    var yTranslation = -50 - (centerHeight - pageY) / 200;



    if (!mouseDown) {

        root.style.setProperty('--translation', "translate(" + Math.floor(xTranslation) + "%, " + Math.floor(yTranslation) + "%)");

    } else {
        root.style.setProperty('--x-pos', pageX + "px");
        root.style.setProperty('--y-pos', pageY + "px");
    }

});

body.addEventListener("mousedown", function (e) {

    if (mouseOut) {
        return;
    }

    mouseDown = true;

    var pageX = e.clientX;
    var pageY = e.clientY;

    var centerWidth = getWidth() / 2;
    var centerHeight = getHeight() / 2;

    var xTranslation = -50 - (centerWidth - pageX) / 2;
    var yTranslation = -50 - (centerHeight - pageY) / 2;

    root.style.setProperty('--x-pos', pageX + "px");
    root.style.setProperty('--y-pos', pageY + "px");

});

body.addEventListener("mouseup", function (e) {

    if (mouseOut) {
        return;
    }

    mouseDown = false;

    root.style.setProperty('--x-pos', "50%");
    root.style.setProperty('--y-pos', "50%");

});

function copy() {


    input = document.createElement("input");
    body.appendChild(input);
    input.value = "william.h.cottingham@gmail.com";
    input.select();
    document.execCommand("copy");

    body.removeChild(input);

    document.getElementById("popup").style.opacity = "1";
    setTimeout(function () {
        document.getElementById("popup").style.opacity = "0";
    }, 4000);
}

function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

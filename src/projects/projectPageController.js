const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get("page");

const getHeight = element => {
  const children = element.children;
  console.log(children);

  let height = 0;

  const keys = Object.keys(children);
  for (let i = 0; i < children.length; i++) {
    console.log("client heihgt", children[i].clientHeight);

    height += children[i].clientHeight;
    //height += parseInt(window.getComputedStyle(children[i]).getPropertyValue('margin-top'));
    //height += parseInt(window.getComputedStyle(children[i]).getPropertyValue('margin-bottom'));

    console.log(height);
  }

  return height;
};

let headTitle = document.createElement("title");

let project = projects.filter(obj => {
  return obj.id === param;
});

project = project[0];

headTitle.innerHTML = project.title;

const title = document.getElementById("title");
const image = document.getElementById("image");
const body = document.getElementById("body");
const video = document.getElementById("video");


title.innerHTML = project.title;
if (project.showImage) image.src = project.imageSrc;
else image.style.display = "none";

if (project.videoEmbed !== undefined) video.innerHTML = project.videoEmbed;
else video.style.display = "none";



body.innerHTML = project.body || "";

document.getElementsByTagName("head")[0].appendChild(headTitle);

const center = document.getElementById("center");

center.style.visibility = "hidden";

let loading = document.getElementById("loading");

window.onresize = () => {
  if (window.innerWidth < 900) center.style.top = 0;
  else center.style.top = center.offsetHeight / 2 + 200;
};

window.onload = () => {
  if (window.innerWidth > 900) center.style.top = center.offsetHeight / 2 + 200;
  loading.style.display = "none";
  center.style.visibility = "visible";
};


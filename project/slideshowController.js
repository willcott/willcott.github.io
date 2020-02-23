const slideshow = document.getElementById("slideshow");
const leftArrow = document.createElement("div");
const rightArrow = document.createElement("div");

leftArrow.classList = "arrow";
rightArrow.classList = "arrow";

leftArrow.innerHTML = "<";
rightArrow.innerHTML = ">";
leftArrow.style.zindex = "10";
rightArrow.style.zindex = "10";

let currentImg = 0;
const slide = document.createElement("div");
slide.classList = "slide";

slide.appendChild(leftArrow);
slideshow.appendChild(slide);
slide.appendChild(rightArrow);

const populateSlideshow = () => {
  slide.style.backgroundImage =
    "url(" + project.slideshowImgs[currentImg] + ")";
};

const leftArrowClicked = () => {
  if (currentImg - 1 === -1) {
    currentImg = project.slideshowImgs.length - 1;
  } else {
    currentImg = currentImg - 1;
  }
  populateSlideshow();
};
const rightArrowClicked = () => {
  if (currentImg + 1 === project.slideshowImgs.length) {
    currentImg = 0;
  } else {
    currentImg = currentImg + 1;
  }
  populateSlideshow();
};

leftArrow.onclick = leftArrowClicked;
rightArrow.onclick = rightArrowClicked;

if (project.slideshowImgs !== undefined)
  populateSlideshow(project.slideshowImgs);
else slideshow.style.display = "none";

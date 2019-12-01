const slideshow = document.getElementById("slideshow");
const leftArrow = document.createElement("div");
const rightArrow = document.createElement("div");

leftArrow.classList= "arrow";
rightArrow.classList = "arrow";

leftArrow.innerHTML = "<";
rightArrow.innerHTML = ">";

let currentImg = 0;

const slide = document.createElement("img");
slide.classList = "slide";

slideshow.appendChild(leftArrow);
slideshow.appendChild(slide);
slideshow.appendChild(rightArrow);

const populateSlideshow = () => {
    slide.src = project.slideshowImgs[currentImg];
};

const leftArrowClicked = () => {
  if (currentImg - 1 === -1) {
    currentImg = project.slideshowImgs.length - 1;
  } else {
    currentImg = currentImg - 1;
  }
  console.log(currentImg);
  populateSlideshow();
};
const rightArrowClicked = () => {
    if (currentImg + 1 === project.slideshowImgs.length) {
      currentImg = 0;
    } else {
      currentImg = currentImg + 1;
    }
    console.log(currentImg);
    populateSlideshow();
  };

leftArrow.onclick = leftArrowClicked;
rightArrow.onclick = rightArrowClicked;

if (project.slideshowImgs !== undefined)
  populateSlideshow(project.slideshowImgs);
else slideshowImgs.style.display = "none";

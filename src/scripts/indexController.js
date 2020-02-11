const contact = document.getElementById('contact-contents');
const canvasContents = document.getElementById('canvas-contents');
const about = document.getElementById('about-contents');
const projMenu = document.getElementById('projMenu-contents');
const cvContents = document.getElementById('cv-contents');

const aboutButton = document.getElementById('about');
const contactButton = document.getElementById('contact');
const projMenuButton = document.getElementById('projects');
const cvButton = document.getElementById('cv');

function clickHandler(id) {
  everClicked = true;
  if (id == 'about') {
    aboutButton.style.textDecoration = 'underline';
    contactButton.style.textDecoration = 'none';
    projMenuButton.style.textDecoration = 'none';
    cvButton.style.textDecoration = 'none';

    about.style.display = 'block';
    contact.style.display = 'none';
    canvasContents.style.display = 'none';
    projMenu.style.display = 'none';
    cvContents.style.display = 'none';
  }

  if (id == 'contact') {
    contactButton.style.textDecoration = 'underline';
    aboutButton.style.textDecoration = 'none';
    projMenuButton.style.textDecoration = 'none';
    cvButton.style.textDecoration = 'none';

    contact.style.display = 'block';
    about.style.display = 'none';
    canvasContents.style.display = 'none';
    projMenu.style.display = 'none';
    cvContents.style.display = 'none';
  }
  if (id == 'projects') {
    projMenuButton.style.textDecoration = 'underline';
    aboutButton.style.textDecoration = 'none';
    contactButton.style.textDecoration = 'none';
    cvButton.style.textDecoration = 'none';

    projMenu.style.display = 'block';
    about.style.display = 'none';
    canvasContents.style.display = 'none';
    contact.style.display = 'none';
    cvContents.style.display = 'none';
  }
  if (id == 'cv') {
    cvButton.style.textDecoration = 'underline';
    aboutButton.style.textDecoration = 'none';
    contactButton.style.textDecoration = 'none';
    projMenuButton.style.textDecoration = 'none';

    cvContents.style.display = 'block';
    about.style.display = 'none';
    canvasContents.style.display = 'none';
    contact.style.display = 'none';
    projMenu.style.display = 'none';
  }
}

const elems = document.getElementsByClassName('li contacts');
let time = 0.25;
for (elem of elems) {
  elem.style.animation = `growIn ${time}s`;
  time += 0.25;
}

const projItems = document.getElementsByClassName('project-item-container');
time = 0.25;
for (elem of projItems) {
  elem.style.animation = `growIn ${time}s`;
  time += 0.25;
}

const cvItems = document.getElementsByClassName('cv-item');
time = 0.25;
for (elem of cvItems) {
  elem.style.animation = `growIn ${time}s`;
  time += 0.25;
}

let audioOn = true;
const audioButton = document.getElementById('audio-button');
const audioIcon = document.getElementById('audio-icon');
const audioSwitcher = () => {
  audioOn = audioOn ? false : true;
  if (audioOn) {
    audioIcon.classList = 'fa fa-volume-up';
    audioIcon.style.width = '32px';
    muteNode.gain.setValueAtTime(1, audioCtx.currentTime);
  } else {
    audioIcon.classList = 'fa fa-volume-off';
    audioIcon.style.width = '20px';
    muteNode.gain.setValueAtTime(0, audioCtx.currentTime);
  }
};

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get('projects');
  window.history.replaceState(null, null, window.location.pathname);
  if (param !== null) clickHandler('projects');

  if (window.innerWidth <= 900) canvasContents.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.onresize = () => {
  if (window.innerWidth <= 900) {
    canvasContents.style.display = 'none';
    if (text != undefined) text.style.display = 'none';
  } else canvasContents.style.display = 'block';
};

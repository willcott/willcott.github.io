const video = document.getElementById("video");
const audio = document.getElementById("audio");

const { audioUrl, videoId } = project;

const vidIframeString = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

const audioIframeString = `<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"${audioUrl}\"></iframe>`;

if (project.videoId !== undefined) video.innerHTML = vidIframeString;
else video.style.display = "none";

if (project.audioEmbed !== undefined) audio.innerHTML = audioIframeString;
else audio.style.display = "none";

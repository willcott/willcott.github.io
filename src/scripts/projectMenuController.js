const { projects } = {
  projects: [
    {
      title: "Birdies",
      id: "birdies",
      imageSrc: "https://i.imgur.com/suUehCZ.png"
    },
    {
      title: "Architexture III",
      id: "architexture_3",
      imageSrc: "https://i.imgur.com/PWJmUMB.jpg"
    },
    {
      title: "Always Be With You - SLTR (2018)",
      id: "always_be_with_you",
      imageSrc: "https://i.imgur.com/MAflyHG.jpg"
    },
    {
      title: "Somebody Else - Stereo Recording",
      id: "somebody_else",
      imageSrc: "https://i.imgur.com/BM8nkEM.jpg"
    },
    {
      title: "Showreel",
      id: "showreel",
      imageSrc: "https://i.imgur.com/mYwGlqb.png"
    }
  ]
};

const projContainer = document.getElementById("project-container");

populate = () => {
  let count = 0;

  projects.forEach(item => {
    let newItem = document.createElement("a");
    let title = document.createElement("div");
    let image = document.createElement("img");

    title.innerHTML = item.title;
    image.src = item.imageSrc;

    title.style.display = "inline";
    image.style.display = "inline";

    if (count % 2 == 0) {
      newItem.appendChild(title);
      newItem.appendChild(image);
    } else {
      newItem.appendChild(image);
      newItem.appendChild(title);
    }

    title.classList += "title";
    newItem.classList += "project-item-container";

    //newItem.href = "src/projects/" + item.id + ".html";
    newItem.href = "src/projects/project.html?page=" + item.id;

    projContainer.appendChild(newItem);

    count++;
  });
};

populate();

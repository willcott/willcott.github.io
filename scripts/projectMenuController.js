const projContainer = document.getElementById("project-container");

populate = () => {
  let count = 0;

  //console.log(typeof projects);

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
    newItem.href = "https://willcott.github.io/project?page=" + item.id;

    projContainer.appendChild(newItem);

    count++;
  });
};

populate();

let bottom = document.createElement("div");
bottom.style.paddingBottom = 40;

projContainer.appendChild(bottom);

const contact = document.getElementById("contact-contents");
const about = document.getElementById("about-contents");
const projMenu = document.getElementById("projMenu-contents");


const aboutButton = document.getElementById("about");
const contactButton = document.getElementById("contact");
const projMenuButton = document.getElementById("projects");

function clickHandler(id){
    if(id=="about"){
        aboutButton.style.textDecoration = "underline";
        contactButton.style.textDecoration = "none";
        projMenuButton.style.textDecoration = "none";

        about.style.display = "block";
        contact.style.display = "none";
        projMenu.style.display = "none";
    }

    if(id=="contact"){
        contactButton.style.textDecoration = "underline";
        aboutButton.style.textDecoration = "none";
        projMenuButton.style.textDecoration = "none";

        contact.style.display = "block";
        about.style.display = "none";
        projMenu.style.display = "none";
    }
    if(id=="projects"){
        projMenuButton.style.textDecoration = "underline";
        aboutButton.style.textDecoration = "none";
        contactButton.style.textDecoration = "none";

        projMenu.style.display = "block";
        about.style.display = "none";
        contact.style.display = "none";
    }
}
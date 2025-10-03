import menuPage from "./menu.js";
import contactUsPage from "./contactUs.js";
export default function setupNavigation() {
    const menuButton = document.getElementById("Menu");
    const homeButton = document.getElementById("Home");
    const contactUsButton = document.getElementById("contactUs");

    menuButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.innerHTML = "";
        menuPage();
    });

    homeButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.innerHTML = "";
        homePage();
    });

    contactUsButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.innerHTML = "";
        contactUsPage();
    });

}
import { dishMaker } from ".";
import background from './background.jpg';

export default function homePage() {
    //the restaurant logo
    const img = document.createElement("img");

    //the food sections images
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");

    //about us section
    const bg = document.createElement("img");
    bg.id = "bg";
    const about_us_header = document.createElement("h1");
    const about_us = document.createElement("p");

    about_us_header.textContent = "About Us";
    about_us.textContent = "Our restaurant started with a simple idea, why not make our customer always have better experience with every visit, and so, our restaurant depends on your own reviews, we will consider every review to make your every experience better than before.";

    const [pepperoniPizza, baconCheeseburger, chickenWrap] = dishMaker();

    // Create dish elements using the Dish class
    const dish1Element = pepperoniPizza.createElement();
    const dish2Element = baconCheeseburger.createElement();
    const dish3Element = chickenWrap.createElement();
    // Remove the image inside the dish cards to avoid duplicates
    [dish1Element, dish2Element, dish3Element].forEach(el =>
    el.querySelector('.dish-image')?.remove()
    );
    
    img.src = "https://img.freepik.com/premium-vector/retro-kitchen-design-restaurant-logo_23-2148464114.jpg?ga=GA1.1.212007023.1755782234&semt=ais_hybrid&w=740&q=80";
    img.style.height = "150px";

    bg.src = background;

    img1.src = "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=";
    img1.className = "dish-image";

    img2.src = "https://www.sargento.com/assets/Uploads/Recipe/Image/cheddarbaconcheeseburger__FocusFillWyIwLjAwIiwiMC4wMCIsODAwLDQ3OF0_CompressedW10.jpg";
    img2.className = "dish-image";

    img3.src = "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bef6ab8a-1288-4dea-9869-95a00b1a6bf8.jpg";
    img3.className = "dish-image";

    const sections = document.createElement("div");
    const section1 = document.createElement("div");
    const section2 = document.createElement("div");
    const section3 = document.createElement("div");

    sections.id = "sections";
    section1.id = "section1";
    section2.id = "section2";
    section3.id = "section3";

    const section1Image = document.createElement("div");
    const section1Text = document.createElement("div");

    const section2Image = document.createElement("div");
    const section2Text = document.createElement("div");

    const section3Image = document.createElement("div");
    const section3Text = document.createElement("div");

    section1Text.id = "section1Text";
    section1Image.id = "section1Image";

    section2Text.id = "section2Text";
    section2Image.id = "section2Image";

    section3Text.id = "section3Text";
    section3Image.id = "section3Image";

    const header_img = document.getElementById("header_img");
    header_img.innerHTML = "";

    const about_us_img = document.createElement("div");
    const about_us_text = document.createElement("div");
    const about_us_html = document.createElement("div");

    about_us_img.id = "about_us_img";
    about_us_text.id = "about_us_text";
    about_us_html.id = "about_us";

    about_us_html.appendChild(about_us_text);
    about_us_html.appendChild(about_us_img);

    header_img.prepend(img);

    about_us_img.append(bg);
    about_us_text.append(about_us_header);
    about_us_text.append(about_us);

    section1Image.appendChild(img1);
    section1Text.appendChild(dish1Element);

    section2Image.appendChild(img2);
    section2Text.style.marginRight = "10%";
    section2Text.appendChild(dish2Element);

    section3Image.appendChild(img3);
    section3Text.appendChild(dish3Element);

    section1.append(section1Text);
    section1.append(section1Image);

    section2.append(section2Image);
    section2.append(section2Text);

    section3.append(section3Text);
    section3.append(section3Image);

    sections.append(section1);
    sections.append(section2);
    sections.append(section3);

    content.appendChild(about_us_html);
    content.appendChild(sections);

    bg.onload = () => bg.classList.add('loaded');
    img1.onload = () => img1.classList.add('loaded');
    img2.onload = () => img2.classList.add('loaded');
    img3.onload = () => img3.classList.add('loaded');

        setTimeout(() => {
        about_us_header.classList.add('loaded');
        about_us.classList.add('loaded');
        
        // Add these lines to make the containers visible
        dish1Element.classList.add('loaded');
        dish2Element.classList.add('loaded');
        dish3Element.classList.add('loaded');
        
        dish1Element.querySelector('.dish-description').classList.add('loaded');
        dish1Element.querySelector('.dish-price').classList.add('loaded');
        dish1Element.querySelector('.dish-name')?.classList.add('loaded');
        
        dish2Element.querySelector('.dish-description').classList.add('loaded');
        dish2Element.querySelector('.dish-price').classList.add('loaded');
        dish2Element.querySelector('.dish-name')?.classList.add('loaded');
        
        dish3Element.querySelector('.dish-description').classList.add('loaded');
        dish3Element.querySelector('.dish-price').classList.add('loaded');
        dish3Element.querySelector('.dish-name')?.classList.add('loaded');
    }, 900);
}
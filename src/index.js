import "./styles.css";
import background from './background.jpg'
import menuPage from "./menu.js";
import { menu, Menu } from "./menu.js";

const content = document.getElementById("content");
class Dish {
  constructor(name, description, price, category = 'main', image = '', type) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
    this.type = type;
  }

  getFormattedPrice() {
    // ensure price is a number
    const p = Number(this.price) || 0;
    return `$${p.toFixed(2)}`;
  }

  createElement() {
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("dish-container");

    // Dish image (add class so it can be queried)
    if (this.image) {
      const img = document.createElement("img");
      img.src = this.image;
      img.classList.add("dish-image");
      dishContainer.appendChild(img);
    }

    // Dish name (add class)
    const nameElement = document.createElement("h3");
    nameElement.textContent = this.name;
    nameElement.classList.add("dish-name");
    dishContainer.appendChild(nameElement);

    // Dish description (add class)
    const desc = document.createElement("p");
    desc.textContent = this.description;
    desc.classList.add("dish-description");
    dishContainer.appendChild(desc);

    // Dish price (add class)
    const priceElement = document.createElement("span");
    priceElement.textContent = this.getFormattedPrice();
    priceElement.classList.add("dish-price");
    dishContainer.appendChild(priceElement);

    return dishContainer;
  }
}

function appendContent() {
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
appendContent();
function setupNavigation() {
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
        appendContent();
    });

    contactUsButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.innerHTML = "";
        contactUsPage();
    });

}
setupNavigation();
//this function makes dishes and adds it to the menu
function dishMaker() {
    if (menu.dishes.length === 0) {
        const classicBurger = new Dish(
            "Classic Burger",
            "Savor our classic gourmet beef burger, crafted with a juicy, flame-grilled beef patty nestled in a golden, sesame-seeded bun. Each bite is complemented by crisp green leaf lettuce, fresh-sliced tomatoes, and a layer of creamy cheese, delivering a satisfying crunch and rich, savory flavor. The burger is finished with a hint of shredded parmesan for an extra touch of indulgence. Perfectly balanced and packed with freshness, this burger offers a timeless taste experience that’s both hearty and delicious.",
            8.99,
            "main",
            "https://img.freepik.com/free-photo/side-view-burger-with-beef-meat-melted-cheese-vegetables-wooden-board_140725-11865.jpg"
        );

        const pepperoniPizza = new Dish(
            "Classic Pepperoni Pizza",
            "Savor our classic pepperoni pizza, featuring our hand-tossed dough made fresh daily and topped with our rich, slow-simmered tomato sauce. Generously covered with premium mozzarella cheese that stretches with every bite and topped with perfectly spiced pepperoni that crisps beautifully in our wood-fired oven. The result is a perfect balance of tangy sauce, creamy cheese, and savory pepperoni on a crispy yet chewy crust that exemplifies what authentic Italian pizza should taste like.",
            12.99,
            "main",
            "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU="
        );

        const baconCheeseburger = new Dish(
            "Signature Bacon Cheeseburger",
            "Indulge in our signature bacon cheeseburger, a masterpiece crafted with a juicy, hand-formed beef patty grilled to perfection and topped with melted aged cheddar cheese. Crispy strips of premium bacon add a smoky crunch, while fresh lettuce, ripe tomatoes, and red onions provide the perfect balance of textures. All nestled between our house-made sesame seed buns that are toasted to golden perfection. Every bite delivers an explosion of flavors that will leave you craving more.",
            15.49,
            "main",
            "https://www.sargento.com/assets/Uploads/Recipe/Image/cheddarbaconcheeseburger__FocusFillWyIwLjAwIiwiMC4wMCIsODAwLDQ3OF0_CompressedW10.jpg"
        );

        const chickenWrap = new Dish(
            "Mediterranean Chicken Wrap",
            "Experience our Mediterranean-inspired chicken wrap, featuring tender grilled chicken breast marinated in aromatic herbs and spices. Wrapped in a soft flour tortilla with crisp lettuce, diced tomatoes, cucumber, red onions, and our signature garlic aioli sauce. The combination of fresh vegetables and perfectly seasoned chicken creates a harmonious blend of Mediterranean flavors that's both satisfying and refreshing. A healthy yet indulgent choice that transports your taste buds straight to the coast.",
            11.99,
            "main",
            "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bef6ab8a-1288-4dea-9869-95a00b1a6bf8.jpg"
        );
        const cheeseCake = new Dish(
            "Classic Cheesecake",
            "Delight in our creamy, classic cheesecake with a crumbly graham cracker crust, crafted for the perfect balance of richness and lightness. Each slice is adorned with juicy, halved strawberries and plump grapes, adding a burst of freshness and color. A garnish of vibrant mint leaves elevates the presentation and infuses a subtle aromatic note. This dessert showcases a harmonious blend of smooth, tangy cheesecake, buttery crust, and naturally sweet fruit, making it both a comforting treat and a refined finish to any meal.",
            4.99,
            "dessert",
            "https://img.freepik.com/free-photo/classic-cheesecake-with-strawberry-cherry-slices_140725-3241.jpg?t=st=1759328161~exp=1759331761~hmac=1aff669dc56d2bb9b3761739acf063c56569672f87344999ee7c3694a0bf7241&w=2000"
        );
        // add all to menu
        menu.addDish(pepperoniPizza);
        menu.addDish(baconCheeseburger);
        menu.addDish(chickenWrap);
        menu.addDish(classicBurger);
        menu.addDish(cheeseCake);

        return menu.getAllDishes();
    }

    return menu.getAllDishes();
}
function contactUsPage() {
    const contactUsImage = document.createElement("div");
    const contactUs = document.createElement("div");
    const contactUsTitle = document.createElement("h1");
    const contactUsBackground = document.createElement("img");
    const formTitle = document.createElement("h2");
    const contactUsForm = document.createElement("form");

    contactUs.id = "contactUs";
    contactUsImage.id = "contactUs"; 
    contactUsForm.id = "contactUsForm";
    contactUsTitle.id = "contactUsTitle";

    // Title for the form
    formTitle.textContent = "Your Details";

    // Contact Us Text over the Background Image
    contactUsTitle.textContent = "Contact Us";

    contactUsBackground.src = "https://img.freepik.com/free-photo/frame-meat-vegetables_23-2148599848.jpg?t=st=1759186741~exp=1759190341~hmac=a2bcdbfb38b0a21777bdef0723fd0b20adb0fda3fd4236c6e0fac6bc15a01a01&w=1480";
    contactUsBackground.id = "contactUsBackground";

    // Append title + background
    content.appendChild(contactUs);
    contactUsImage.appendChild(contactUsTitle);
    contactUsImage.appendChild(contactUsBackground);
    contactUs.appendChild(contactUsImage);

    // Append form to content
    contactUs.appendChild(contactUsForm);
    contactUsForm.appendChild(formTitle);

    const upperFormPart = document.createElement("div");
    const middleFormPart = document.createElement("div");
    const downFormPart = document.createElement("div");

    upperFormPart.id = "upperFormPart";
    middleFormPart.id = "middleFormPart";
    downFormPart.id = "downFormPart";

    contactUsForm.appendChild(upperFormPart);
    contactUsForm.appendChild(middleFormPart);
    contactUsForm.appendChild(downFormPart);
    // Utility to create label + input
    function createInput(labelText, id, name, placeholder, wrapperId) {
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = labelText;

        const wrapper = document.createElement("div");
        wrapper.id = wrapperId;

        const input = document.createElement("input");
        input.type = "text";
        input.id = id;
        input.name = name;
        input.placeholder = placeholder;

        //put a wrapper for every label and input so that the text and its value can be manipulated individually.
        wrapper.appendChild(label);
        wrapper.appendChild(input);

        if(id == "name" || id == "emailAddress")
        {
        upperFormPart.appendChild(wrapper);
        }
        else if(id == "subject")
        {
        middleFormPart.appendChild(wrapper);
        }
        else
        {
        downFormPart.appendChild(wrapper);
        }
    }

    // Add form fields
    createInput("Name", "name", "name", "John", "formName");
    createInput("Email Address", "emailAddress", "emailAddress", "Example@gmail.com", "formEmail");
    createInput("Subject", "subject", "subject", "subject", "formSubject");
    createInput("Comments", "comments", "comments", "Question", "formComment");

    // Submit button
    const formSubmitBtn = document.createElement("input");
    formSubmitBtn.id = "formSubmitBtn";
    formSubmitBtn.type = "submit";
    formSubmitBtn.value = "Submit";

    contactUsForm.appendChild(formSubmitBtn);
    
    //adding same transition in home page to contact us page
    setTimeout(() => {
    contactUsTitle.classList.add('loaded');
    contactUsBackground.classList.add('loaded');
    formTitle.classList.add('loaded');
    upperFormPart.classList.add('loaded');
    middleFormPart.classList.add('loaded');
    downFormPart.classList.add('loaded');
}, 900);
}

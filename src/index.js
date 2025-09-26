import "./styles.css";
import background from './background.jpg'

const content = document.getElementById("content");
class Dish {
  constructor(name, description, price, category = 'main', image = '') {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
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


class Menu {
    constructor() {
        this.dishes = [];
    }

    addDish(dish) {
        this.dishes.push(dish);
    }

    getAllDishes() {
        return this.dishes;
    }
}
const menu = new Menu;
function appendContent() {
    //the restaurant logo
    const img = document.createElement("img");

    //the food sections images
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");

    //about us section
    const bg = document.createElement("img");
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
    bg.style.width = "100%";
    bg.style.height = "10%";
    bg.style.maxHeight = "800px";
    bg.style.filter = "brightness(60%)";

    img1.src = "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=";
    img1.style.height = "50%";
    img1.style.width = "40%";
    img1.style.minHeight = "500px";
    img1.style.minWidth = "650px";

    img2.src = "https://www.sargento.com/assets/Uploads/Recipe/Image/cheddarbaconcheeseburger__FocusFillWyIwLjAwIiwiMC4wMCIsODAwLDQ3OF0_CompressedW10.jpg";
    img2.style.height = "50%";
    img2.style.width = "40%";
    img2.style.minHeight = "500px";
    img2.style.minWidth = "650px";

    img3.src = "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bef6ab8a-1288-4dea-9869-95a00b1a6bf8.jpg";
    img3.style.height = "50%";
    img3.style.width = "40%";
    img3.style.minHeight = "500px";
    img3.style.minWidth = "650px";
    
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
    const dishesButton = document.getElementById("Dishes");
    const specialsButton = document.getElementById("Specials");

    menuButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.innerHTML = "";
        addDishesToMenu();
    });


    homeButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.innerHTML = "";
        appendContent();
    });

    dishesButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.innerHTML = "";
    });

    specialsButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.innerHTML = "";
    });
}
setupNavigation();
function addDishesToMenu()
{
    let color = true;
    const menuDishes = document.createElement("div");
    menuDishes.id = "menuDishes";
    content.appendChild(menuDishes);
    //make a for loop that iterates over an array of dishes that contains every info of the dish
    for(let i = 0; i < menu.dishes.length; i++)
    {
        //for every dish make a card with black or grey background
        const dishElement = menu.dishes[i].createElement();
        dishElement.id = `dish${i}`;
        // Alternate background colors
        if (i % 3 == 0) {
            dishElement.style.backgroundColor = "black";
            dishElement.style.color = "white";
        } else {
            dishElement.style.backgroundColor = "#131313";
            dishElement.style.color = "white";
        }
        dishElement.style.display = "flex";
        dishElement.style.width = "40%";
        dishElement.style.flexDirection = "column";
        dishElement.textAlign = "center";
        color = !color;
        //append it to content
        menuDishes.appendChild(dishElement);
    //end if
    }
}
//this function makes dishes and adds it to the menu
function dishMaker() {
    if (menu.dishes.length === 0) {
        const classicBurger = new Dish(
            "Classic Burger",
            "Like cheese burger but classic",
            5.99,
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

        // add all to menu
        menu.addDish(pepperoniPizza);
        menu.addDish(baconCheeseburger);
        menu.addDish(chickenWrap);
        menu.addDish(classicBurger);

        return [pepperoniPizza, baconCheeseburger, chickenWrap, classicBurger];
    }

    return menu.getAllDishes();
}
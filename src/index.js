import "./styles.css";
import background from './background.jpg'

class Dish {
    constructor(name, description, price, category = 'main') {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    // Method to format price with currency
    getFormattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }

    // Method to create the dish element with price
    createElement() {
        const dishContainer = document.createElement("div");
        dishContainer.classList.add("dish-container");

        // Dish name
        const nameElement = document.createElement("h3");
        nameElement.textContent = this.name;
        nameElement.classList.add("dish-name");

        // Dish description
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = this.description;
        descriptionElement.classList.add("dish-description");

        // Dish price
        const priceElement = document.createElement("span");
        priceElement.textContent = this.getFormattedPrice();
        priceElement.classList.add("dish-price");

        // Create a wrapper for description and price to display them together
        const textContainer = document.createElement("div");
        textContainer.classList.add("dish-text-container");
        textContainer.appendChild(descriptionElement);
        textContainer.appendChild(priceElement);

        dishContainer.appendChild(nameElement);
        dishContainer.appendChild(textContainer);

        return dishContainer;
    }

    // Method to update price
    updatePrice(newPrice) {
        this.price = newPrice;
    }

    // Method to get dish info
    getDishInfo() {
        return {
            name: this.name,
            description: this.description,
            price: this.price,
            formattedPrice: this.getFormattedPrice(),
            category: this.category
        };
    }
}

function appendContent() {
    // Create dish instances
    const pepperoniPizza = new Dish(
        "Classic Pepperoni Pizza",
        "Savor our classic pepperoni pizza, featuring our hand-tossed dough made fresh daily and topped with our rich, slow-simmered tomato sauce. Generously covered with premium mozzarella cheese that stretches with every bite and topped with perfectly spiced pepperoni that crisps beautifully in our wood-fired oven. The result is a perfect balance of tangy sauce, creamy cheese, and savory pepperoni on a crispy yet chewy crust that exemplifies what authentic Italian pizza should taste like.",
        12.99
    );

    const baconCheeseburger = new Dish(
        "Signature Bacon Cheeseburger",
        "Indulge in our signature bacon cheeseburger, a masterpiece crafted with a juicy, hand-formed beef patty grilled to perfection and topped with melted aged cheddar cheese. Crispy strips of premium bacon add a smoky crunch, while fresh lettuce, ripe tomatoes, and red onions provide the perfect balance of textures. All nestled between our house-made sesame seed buns that are toasted to golden perfection. Every bite delivers an explosion of flavors that will leave you craving more.",
        15.49
    );

    const chickenWrap = new Dish(
        "Mediterranean Chicken Wrap",
        "Experience our Mediterranean-inspired chicken wrap, featuring tender grilled chicken breast marinated in aromatic herbs and spices. Wrapped in a soft flour tortilla with crisp lettuce, diced tomatoes, cucumber, red onions, and our signature garlic aioli sauce. The combination of fresh vegetables and perfectly seasoned chicken creates a harmonious blend of Mediterranean flavors that's both satisfying and refreshing. A healthy yet indulgent choice that transports your taste buds straight to the coast.",
        11.99
    );

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

    // Create dish elements using the Dish class
    const dish1Element = pepperoniPizza.createElement();
    const dish2Element = baconCheeseburger.createElement();
    const dish3Element = chickenWrap.createElement();
    
    img.src = "https://img.freepik.com/premium-vector/retro-kitchen-design-restaurant-logo_23-2148464114.jpg?ga=GA1.1.212007023.1755782234&semt=ais_hybrid&w=740&q=80";
    img.style.height = "150px";

    bg.src = background;
    bg.style.width = "100%";
    bg.style.height = "10%";
    bg.style.maxHeight = "700px";
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
    
    const section1Image = document.getElementById("section1Image");
    const section1Text = document.getElementById("section1Text");

    const section2Image = document.getElementById("section2Image");
    const section2Text = document.getElementById("section2Text");

    const section3Image = document.getElementById("section3Image");
    const section3Text = document.getElementById("section3Text");

    const header = document.getElementById("header");

    const about_us_img = document.getElementById("about_us_img");
    const about_us_text = document.getElementById("about_us_text");

    header.prepend(img);

    about_us_img.append(bg);
    about_us_text.append(about_us_header);
    about_us_text.append(about_us);

    section1Image.appendChild(img1);
    section1Text.appendChild(dish1Element); // Using dish class instead of text1

    section2Image.appendChild(img2);
    section2Text.appendChild(dish2Element); // Using dish class instead of text2

    section3Image.appendChild(img3);
    section3Text.appendChild(dish3Element); // Using dish class instead of text3

    bg.onload = () => bg.classList.add('loaded');
    img1.onload = () => img1.classList.add('loaded');
    img2.onload = () => img2.classList.add('loaded');
    img3.onload = () => img3.classList.add('loaded');

    setTimeout(() => {
        about_us_header.classList.add('loaded');
        about_us.classList.add('loaded');
        
        // Add loaded class to dish elements
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
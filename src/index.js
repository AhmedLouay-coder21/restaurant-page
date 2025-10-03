import "./styles.css";
import menuPage from "./menu.js";
import { menu, Menu } from "./menu.js";
import contactUsPage from "./contactUs.js";
import homePage from "./homePage.js";

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
homePage();
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
        homePage();
    });

    contactUsButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.innerHTML = "";
        contactUsPage();
    });

}
setupNavigation();
//this function makes dishes and adds it to the menu
export function dishMaker() {
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
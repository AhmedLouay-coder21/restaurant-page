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
export const menu = new Menu;

export default function menuPage()
{
    //dishType is a section to make the customer select the dish type he wants to see
    const dishType = document.createElement("div");
    const mainDishesButton = document.createElement("button");
    const dessertButton = document.createElement("button");

    const hr = document.createElement("hr");

    content.append(hr);

    dishType.id = "dishType";
    mainDishesButton.id = "mainDishesButton";
    dessertButton.id = "dessertButton";

    mainDishesButton.textContent = "Main dishes";
    dessertButton.textContent = "Dessert";

    content.appendChild(dishType);
    dishType.appendChild(mainDishesButton);
    dishType.appendChild(dessertButton);

    let color = true;
    const menuDishes = document.createElement("div");
    menuDishes.id = "menuDishes";
    content.appendChild(menuDishes);

    function mainDishesButtonDisplay()
    {
        //make a for loop that iterates over an array of dishes that contains every info of the dish
        for(let i = 0; i < menu.dishes.length; i++)
        {
            //if the dish category is a main dish show it
            if(menu.dishes[i].category == "main")
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
            //adding same transition in home page to menu page
            setTimeout(() => {
            dishElement.classList.add('loaded');
            dishElement.querySelector('.dish-name')?.classList.add('loaded');
            dishElement.querySelector('.dish-description')?.classList.add('loaded');
            dishElement.querySelector('.dish-price')?.classList.add('loaded');
        }, 900);
            //end if
            }
        }
    }
    mainDishesButtonDisplay();
    //if the user clicked on the dessert button show him desserts only
    dessertButton.addEventListener("click", (event) => {
        event.preventDefault();
        menuDishes.innerHTML = "";
        for(let i = 0; i < menu.dishes.length; i++)
        {
        //if the dish category is dessert show it
        if(menu.dishes[i].category == "dessert")
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
        //adding same transition in home page to menu page
        setTimeout(() => {
            dishElement.classList.add('loaded');
            dishElement.querySelector('.dish-name')?.classList.add('loaded');
            dishElement.querySelector('.dish-description')?.classList.add('loaded');
            dishElement.querySelector('.dish-price')?.classList.add('loaded');
        }, 900);

        //end if
        }
        }
        if(menuDishes.innerHTML == "")
        {
            const notFound = document.createElement("h1");
            notFound.textContent = "No dishes found";
            content.appendChild(notFound);
        }
    });
    mainDishesButton.addEventListener("click", (event) => {
        event.preventDefault();
        menuDishes.innerHTML = "";
        mainDishesButtonDisplay();
    });
}
Describe: Za()

Test: "Constructor should return a Za object with properties for size and two toppings"
Code: Za(pizzaSize, toppingMeat, toppingVeg)
const myZa = new Za("medium", "pepperoni", "olives");
Expected Output: myZa {size: "medium", meat: "pepperoni", veggies: "olives"}

Test: "Constructor should return a value for price"
Code: Za(pizzaSize, toppingMeat, toppingVeg)
const myZa = new Za("medium", "pepperoni", "olives");
Expected Output: 
Expected Output: myZa {size: "medium", meat: "pepperoni", veggies: "olives", price: 0}

Describe: Za.prototype.price

test: "Prototype should classify values for each topping and size and add selected together"
code: const myZa = new Za("medium", "pepperoni", "olives");
Expected Output: myZa {size: "medium", meat: "pepperoni", veggies: "olives", price: $13.50}














Code: const myZa = new Za([document.querySelector("input[name='toppingMeat']:checked").value, document.querySelector("input[])])
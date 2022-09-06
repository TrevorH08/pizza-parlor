Describe: Za()

Test: "Constructor should return a Za object with properties for size and two toppings"
Code: Za(pizzaSize, toppingMeat, toppingVeg)
const myZa = new Za("medium", "pepperoni", "olives");
Expected Output: myZa {size: "medium", meat: "pepperoni", veggies: "olives"}















Code: const myZa = new Za([document.querySelector("input[name='toppingMeat']:checked").value, document.querySelector("input[])])
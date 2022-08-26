Describe: Za()

Test: "Constructor should return a Za object with properties for size and two toppings"
Code: const myZa = new Za(["pepperoni", "olives"], "medium");
Expected Output: Za {toppings: ["pepperoni", "olives"], size: "medium"}















Code: const myZa = new Za([document.querySelector("input[name='toppingMeat']:checked").value, document.querySelector("input[])])
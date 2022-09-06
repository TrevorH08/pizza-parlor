//Business Logic ---------------

function Za(pizzaSize, toppingMeat, toppingVeg) {
  this.size = pizzaSize;
  this.meat = toppingMeat;
  this.veggie = toppingVeg;
  this.price = 0;
}

Za.prototype.price = function () {
  // const personal = 8;
  // const small = 10;
  // const medium = 12;
  // const large = 14;
  // const xlarge = 16;
  // const pepperoni = .75;
  // const sausage = 1;
  // const ham = 1;
  // const olives = .50;
  // const gpeppers = .50;
  // const spinach = .50;
  if (this.size === "Personal") {
    this.price = this.price + 8;
  } else if (this.size === "Small") {
    this.price = this.price + 10;
  } else if (this.size === "Medium") {
    this.price + 12;
  } else if (this.size === "Large") {
    this.price = this.price + 14;
  } else if (this.size === "X-Large") {
    this.price = this.price + 16;
  } else if (this.meat === "Pepperoni") {
    this.price = this.price + 0.75;
  } else if (this.meat === "Sausage") {
    this.price = this.price + 1;
  } else if (this.meat === "Ham") {
    this.price = this.price + 1;
  } else if (this.veggie === "Olives") {
    this.price = this.price + 0.50;
  } else if (this.veggie === "Green Peppers") {
    this.price = this.price + 0.50;
  } else if (this.veggie === "Spinach") {
    this.price = this.price + 0.50;
  } else {
    return "Please select Size and Toppings";
  }
}
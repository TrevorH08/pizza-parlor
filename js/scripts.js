//Business Logic ---------------

function Za(pizzaSize, toppingMeat, toppingVeg) {
  this.size = pizzaSize;
  this.meat = toppingMeat;
  this.veggie = toppingVeg;
  this.totalPrice = 0;
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
  if (this.veggie === "Spinach") {
    this.totalPrice += 0.50;
  } else if (this.veggie === "Green Peppers") {
    this.totalPrice += 0.50;
  } else if (this.veggie === "Olives") {
    this.totalPrice += 0.50;
  } else if (this.meat === "Ham") {
    this.totalPrice += 1;
  } else if (this.meat === "Sausage") {
    this.totalPrice += 1;
  } else if (this.meat === "Pepperoni") {
    this.totalPrice += 0.75;
  } else if (this.size === "X-Large") {
      this.totalPrice += 16;
  } else if (this.size === "Large") {
      this.totalPrice += 14;
  } else if (this.size === "Medium") {
      this.totalPrice += 12;
  } else if (this.size === "Small") {
      this.totalPrice += 10;
  } else if (this.size === "Personal") {
        this.totalPrice += 8;
  } else {
    // return "Please select Size and Toppings";
  }
};


//UI LOGIC ---------------

window.addEventListener("load", function (){
  
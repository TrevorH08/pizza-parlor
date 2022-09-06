//Business Logic ---------------

function Za(pizzaSize, toppingMeat, toppingVeg) {
  this.size = pizzaSize;
  this.meat = toppingMeat;
  this.veggie = toppingVeg;
  this.totalPrice = 0;
}

Za.prototype.price = function () {
  if (this.veggie === "Olives" || this.veggie === "Green Peppers" || this.veggie === "Spinach") {
  this.totalPrice += .50;
  }
  if (this.meat === "Pepperoni" || this.meat === "Sausage" || this.meat === "Ham") {
  this.totalPrice += 1;
  }
  if (this.size === "Personal") {
    this.totalPrice += 8;
  } else if (this.size === "Small") {
    this.totalPrice += 10;
  } else if (this.size === "Medium") {
    this.totalPrice += 12;
  } else if (this.size === "Large") {
    this.totalPrice += 14;
  } else if (this.size === "X-Large") {
    this.totalPrice += 16;
  } else {
  }
};


//UI LOGIC ---------------

function formHandler(event) {
  event.preventDefault();
  if (document.getElementById("custom-za").value = "") {
    document.getElementById("results").removeAttribute("hidden")
    document.getElementById("results").innerText = "Please choose a Size for your Za!!"
  } else {
    const myZa = new Za(document.getElementById("custom-za").value, document.querySelector("input[name='toppingMeat']:checked").value, document.querySelector("input[name='toppingVeg']:checked").value);
    myZa.price();
    let price = myZa.totalPrice.toFixed(2);
    let time = document.querySelector("input#time").value;
    document.getElementById("results").removeAttribute("hidden");
    document.querySelector("span#orderTime").innerText = time;
    document.querySelector("span#orderPrice").innerText = price;

  }

}

window.addEventListener("load", function() {
  document.querySelector("form#custom-za").addEventListener("submit", formHandler);
});
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
  document.getElementById("results").setAttribute("class", "hidden");
  document.getElementById("fail").setAttribute("class", "hidden")
  if (document.getElementsByName("toppingMeat").checked = false || document.getElementsByName("toppingVeg").checked === false) {
    document.getElementById("fail").removeAttribute("class", "hidden")
  } else {
    document.getElementById("results").removeAttribute("class","hidden");
    const myZa = new Za(document.getElementById("pizza-size").value, document.querySelector("input[name='toppingMeat']:checked").value, document.querySelector("input[name='toppingVeg']:checked").value);
    myZa.price();
    let price = "$" + myZa.totalPrice.toFixed(2);
    let time = document.querySelector("input#time").value;
    
    document.querySelector("span#orderTime").innerText = time;
    document.querySelector("span#orderPrice").innerText = price;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#custom-za").addEventListener("submit", formHandler);
});
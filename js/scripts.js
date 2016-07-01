// **************************************************************************************************************
// Business logic

// Create a new customer (unique customer id would be generated, here we assign id = 1)
function Customer(name, address, telephone) {
  this.customerID = 1;
  this.customerName = name;
  this.customerAddress = address;
  this.customerTelephone = telephone;
  console.log("I am " + this.customerName + ", customer #" + this.customerID + " - " + this.customerAddress + " " + this.customerTelephone);
}

// Customer can create a new online order by clicking an 'Order Online' button
function Order(customerid, selection, type, price) {
  this.orderCustomerID = customerid;
  this.orderSelection = selection;
  this.orderType = type;
  this.orderPrice = 0;
  this.orderDateTime = Date();
  this.orderTotalPrice = 0;
  console.log("I am a " + this.orderType + " order for customer #" + this.orderCustomerID + " for a " + this.orderSelection + " of the type: " + this.orderType + ", ordered at " + this.orderDateTime);
}

// Customer can add a pizza to their order by clicking the "Add a Pizza" button
function Pizza(size, dough, sauce, toppings) {
  this.pizzaSize = size;
  this.pizzaDough = dough;
  this.pizzaSauce = sauce;
  this.pizzaToppings = toppings;
  console.log("I am a " + this.pizzaSize + " pizza on a " + this.pizzaDough + " crust with " + this.pizzaSauce + " sauce and the following toppings: " + this.pizzaToppings);
}

// A pizza class prototype method which calculates the price of the pizza based on its size and it's number of toppings
Pizza.prototype.calculatePizzaPrice = function() {
  var sizeCost;
  if (this.pizzaSize === "Small") {
    sizeCost = 10;
  } else if (this.pizzaSize === "Medium") {
    sizeCost = 15;
  } else if (this.pizzaSize === "Large") {
    sizeCost = 20;
  } else {
    alert("Sorry, but I don't know what size pizza you want");
  }
  var toppingCost = this.pizzaToppings.length * 1.5
  console.log(sizeCost);
  console.log(toppingCost);
  return sizeCost + toppingCost;
}

// An order class prototype method which calculates the total price of the order
Order.prototype.calculateOrderPrice = function(pizza, type) {
  var fee = 0;
  if (type === "Delivery") {
    fee = 5; // add $5 delivery fee
  }
  var totalPrice = (pizza + (pizza*.10) + fee);
  return totalPrice;
}

var pizzaPrice = 0;
var orderTotalPrice = 0;
// **************************************************************************************************************
// User Interface logic
// console displays for testing
var myCustomer = new Customer("Dr. Gonzo", "2000 2nd Avenue, # 5, Seattle", "206-555-1212");
var myOrder = new Order(1, "Pizza", "Delivery");
var myPizza = new Pizza("Small", "Whole Wheat", "Garlic", ["Mushrooms", "Sausage", "Green Pepper", "Onion", "Mozzarella"]);

pizzaPrice = myPizza.calculatePizzaPrice();
console.log("Pizza total price = $" + pizzaPrice.toFixed(2));
orderTotalPrice = myOrder.calculateOrderPrice(pizzaPrice, myOrder.orderType);
console.log("Order total price = $" + orderTotalPrice.toFixed(2));

$(document).ready(function(){


  // Fullfillment method always shows - selection of one will trigger option to pick food type
  $("#delivery").click(function (event) {
    event.preventDefault();
    console.log("wants delivery");
    $("#food-selection").show();
  });
  $("#eatin").click(function (event) {
    event.preventDefault();
    console.log("wants to eat in");
    $("#food-selection").show();
  });
  $("#pickup").click(function (event) {
    event.preventDefault();
    console.log("wants to pick up");
    $("#food-selection").show();
  });

  // Selection of food type will trigger option to pick pizza size
  $("#pasta").click(function (event) {
    event.preventDefault();
    console.log("wants pasta");
  });
  $("#pizza").click(function (event) {
    event.preventDefault();
    console.log("wants pizza");
    $("#size-selection").show();
  });
  $("#sandwich").click(function (event) {
    event.preventDefault();
  });

  // Selection of size will trigger option to add ingredients
  $("#small").click(function (event) {
    event.preventDefault();
    console.log("wants small");
    $("#ingredients-selection").show();
  });
  $("#medium").click(function (event) {
    event.preventDefault();
    console.log("wants medium");
    $("#ingredients-selection").show();
  });
  $("#large").click(function (event) {
    event.preventDefault();
    console.log("wants large");
    $("#ingredients-selection").show();
  });



});

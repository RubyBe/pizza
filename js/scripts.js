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
var fulfillType;
var orderType;
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

  $("#order-online").click(function(event) {
    event.preventDefault();
    orderType="Online";
    $("#fullfillment-selection").show();
  });

  // Fullfillment method always shows - selection of one will trigger option to pick food type
  $("#delivery").click(function() {
    $("#fullfill-output").text("Your order will be delivered.");
    $("#food-selection").show();
  });
  $("#eatin").click(function() {
    $("#fullfill-output").text("Your order and a table will be waiting for you here.");
    $("#food-selection").show();
  });
  $("#pickup").click(function() {
    $("#fullfill-output").text("Your order will be waiting for you to pick up here.");
    $("#food-selection").show();
  });

  // Selection of food type will trigger option to pick pizza size
  $("#pasta").click(function() {
    $("#food-output").text("You've selected pasta for your meal.");
    $("#size-selection").hide();
  });
  $("#pizza").click(function() {
    $("#food-output").text("You've selected a pizza for your meal.");
    $("#size-selection").show();
  });
  $("#sandwich").click(function (event) {
    $("#food-output").text("You've selected a sandwich for your meal.");
    $("#size-selection").hide();
  });

  // Selection of size will trigger option to add ingredients
  $("#small").click(function() {
    $("#size-output").text("You've decided a small pizza will work.");
    $("#ingredients-selection").show();
  });
  $("#medium").click(function() {
    $("#size-output").text("You've decided a medium pizza will work.");
    $("#ingredients-selection").show();
  });
  $("#large").click(function() {
    $("#size-output").text("You've decided a large pizza will work.");
    $("#ingredients-selection").show();
  });

  // Select the crust type
  $("#sourdough").click(function() {
    $("#crust-output").text("You've chosen a sourdough crust.");
  });
  $("#white").click(function() {
    $("#crust-output").text("You've chosen a white crust.");
  });
  $("#whole-wheat").click(function() {
    $("#crust-output").text("You've chosen a whole wheat crust.");
  });

  // Select the sauce type
  $("#garlic").click(function() {
    $("#sauce-output").text("Your pizza will have a garlic sauce.");
  });
  $("#marinara").click(function() {
    $("#sauce-output").text("Your pizza will have a marinara sauce");
  });
  $("#white").click(function() {
    $("#sauce-output").text("Your pizza will have a white sauce.");
  });

  // Select the cheese type
  $("#feta").click(function() {
    $("#cheese-output").text("Feta cheese is your choice.");
  });
  $("#fontanella").click(function() {
    $("#cheese-output").text("Fontanella cheese is your choice.");
  });
  $("#mozzarella").click(function() {
    $("#cheese-output").text("Mozarella cheese is your choice.");
  });

});

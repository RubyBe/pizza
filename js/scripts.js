// Pizza ordering website
// ************************************************************************
// Business logic

// Constructor to create a new customer (unique customer id would be generated, here we assign id = 1)
function Customer(name, address, telephone) {
  this.customerID = 1;
  this.customerName = name;
  this.customerAddress = address;
  this.customerTelephone = telephone;
  console.log("I am " + this.customerName + ", customer #" + this.customerID + " - " + this.customerAddress + " " + this.customerTelephone);
}

// Constructor to create a new online order
function Order(customerid, selection, type, price) {
  this.orderCustomerID = customerid;
  this.orderSelection = selection;
  this.orderType = type;
  this.orderDateTime = new Date();
  this.orderTotalPrice = 0;
}

// Constructor to create a new pizza
function Pizza(size, dough, sauce, cheese) {
  this.pizzaSize = size;
  this.pizzaDough = dough;
  this.pizzaSauce = sauce;
  this.pizzaCheese = cheese;
  this.pizzaToppings = [];
}

// A pizza class prototype method which calculates the price of the pizza based on its size and it's number of toppings
Pizza.prototype.calculatePizzaPrice = function() {
  if (this.pizzaSize === "Small") {
    pizzaSizePrice = 10;
  } else if (this.pizzaSize === "Medium") {
    pizzaSizePrice = 15;
  } else if (this.pizzaSize === "Large") {
    pizzaSizePrice = 20;
  } else {
    alert("Sorry, but I don't know what size pizza you want");
  }
  pizzaToppingsPrice = (this.pizzaToppings.length -3) * 1.5
  return pizzaSizePrice + pizzaToppingsPrice;
}

// An order class prototype method which calculates the total price of the order
Order.prototype.calculateOrderPrice = function(pizza, type) {
  deliveryFee = 0;
  if (type === "Delivery") {
    deliveryFee = 5; // add $5 delivery fee
  }
  orderTaxes = (pizza*.10);
  var totalPrice = (pizza + orderTaxes + deliveryFee);
  return totalPrice;
}

// global variables
var pizzaPrice;
var pizzaSizePrice;
var pizzaToppingsPrice;
var orderTotalPrice;
var fulfillType;
var orderType;
var deliveryFee;
var orderTaxes;
var myOrder;

// Variables to hold the parameter values to pass to the pizza constructor
var myPizzaSize;
var myPizzaCrust;
var myPizzaSauce;
var myPizzaCheese;
var myPizza; // this Pizza object is created after the customer has made the cheese selection; it's then ready to add the toppings

// create a placeholder customer
var myCustomer = new Customer("Dr. Gonzo", "2000 2nd Avenue, # 5, Seattle", "206-555-1212");
// **************************************************************************
// User Interface logic
$(document).ready(function(){
  // Customer object (customerID = 1) is hard-coded in business logic

  // Click to start a new online order and create a new Order object
  $("#order-online").click(function() {
    orderType="Online";
    myOrder = new Order(1);
    $(".conOptions").show(); // display the container which holds all of the dropdown menu items
    $("#fullfillment-selection").show(); // show the fullfillment options selector
  });

  // Select the fullfillment option and then display the food type options selector
  $("#delivery").click(function() {
    $("#fullfill-output").text("Your order will be delivered.");
    $("#food-selection").show();
    myOrder.orderType="Delivery";
  });
  $("#eatin").click(function() {
    $("#fullfill-output").text("Your order and a table will be waiting for you here.");
    $("#food-selection").show();
    myOrder.orderType="Eatin";
  });
  $("#pickup").click(function() {
    $("#fullfill-output").text("Your order will be waiting for you to pick up here.");
    $("#food-selection").show();
    myOrder.orderType="Pickup";
  });

  // Select the food type, and if pizza, create a new pizza object and display the pizza size selector
  $("#pasta").click(function() {
    $("#food-output").text("You've selected pasta for your meal.");
    $("#size-selection").hide();
    myOrder.orderSelection="Pasta";
  });
  $("#pizza").click(function() {
    $("#food-output").text("You've selected a pizza for your meal.");
    $("#size-selection").show();
    myOrder.orderSelection="Pizza";
  });
  $("#sandwich").click(function (event) {
    $("#food-output").text("You've selected a sandwich for your meal.");
    $("#size-selection").hide();
    myOrder.orderSelection="Sandwich";
  });

  // Select the pizza size and display the crust selector
  $("#small").click(function() {
    $("#size-output").text("You've decided a small pizza will work.");
    $("#crust-selection").show();
    myPizzaSize ="Small";
  });
  $("#medium").click(function() {
    $("#size-output").text("You've decided a medium pizza will work.");
    $("#crust-selection").show();
    myPizzaSize ="Medium";
  });
  $("#large").click(function() {
    $("#size-output").text("You've decided a large pizza will work.");
    $("#crust-selection").show();
    myPizzaSize ="Large";
  });

  // Select the crust type and display the sauce selector
  $("#sourdough").click(function() {
    $("#crust-output").text("You've chosen a sourdough crust.");
    myPizzaCrust ="Sourdough";
    $("#sauce-selection").show();
  });
  $("#regular").click(function() {
    $("#crust-output").text("You've chosen a regular white crust.");
    myPizzaCrust ="Regular";
    $("#sauce-selection").show();
  });
  $("#whole-wheat").click(function() {
    $("#crust-output").text("You've chosen a whole wheat crust.");
    myPizzaCrust ="Whole Wheat";
    $("#sauce-selection").show();
  });

  // Select the sauce type and display the cheese selector
  $("#garlic").click(function() {
    $("#sauce-output").text("Your pizza will have a garlic sauce.");
    myPizzaSauce ="Garlic";
    $("#cheese-selection").show();
  });
  $("#marinara").click(function() {
    $("#sauce-output").text("Your pizza will have a marinara sauce.");
    myPizzaSauce ="Marinara";
    $("#cheese-selection").show();
  });
  $("#white").click(function() {
    $("#sauce-output").text("Your pizza will have a white sauce.");
    myPizzaSauce ="White";
    $("#cheese-selection").show();
  });

  // Select the cheese type, create the pizza object, and then display the ingredients selector and submit button
  $("#feta").click(function() {
    $("#cheese-output").text("Feta cheese is your choice.");
    myPizzaCheese ="Feta";
    myPizza = new Pizza(myPizzaSize, myPizzaCrust, myPizzaSauce, myPizzaCheese);
    $(".conToppings").show();
    $("#ingredients-selection").show();
    $("#submit-toppings").show();
  });
  $("#fontanella").click(function() {
    $("#cheese-output").text("Fontanella cheese is your choice.");
    myPizzaCheese ="Fontanella";
    myPizza = new Pizza(myPizzaSize, myPizzaCrust, myPizzaSauce, myPizzaCheese);
    $(".conToppings").show();
    $("#ingredients-selection").show();
    $("#submit-toppings").show();
  });
  $("#mozzarella").click(function() {
    $("#cheese-output").text("Mozarella cheese is your choice.");
    myPizzaCheese ="Mozarella";
    myPizza = new Pizza(myPizzaSize, myPizzaCrust, myPizzaSauce, myPizzaCheese);
    $(".conToppings").show();
    $("#ingredients-selection").show();
    $("#submit-toppings").show();
  });


  // Add the selected ingredients to the pizza
  $("#submit-toppings").click(function() {
    $('input[name="pizza-toppings"]:checked').each(function() {
      myPizza.pizzaToppings.push($(this).val());
    });
    $("#show-price-order").show();
    $("#toppings-output").html("<em>And the following are your toppings: </em>" + myPizza.pizzaToppings);
  });

  // Click to view the order pricing details in the orderDisplay div
  $("#button-price").click(function() {
    pizzaPrice = myPizza.calculatePizzaPrice(); // call to function to calculate base pizza price with toppings
    orderTotalPrice = myOrder.calculateOrderPrice(pizzaPrice, myOrder.orderType); // call to function to calculate total order price by adding pizza price, sales tax, delivery charges
    myOrder.orderTotalPrice = orderTotalPrice;
    $("#show-price-details").show();
    $("#pizza-price-output").text(pizzaSizePrice.toFixed(2));
    $("#toppings-price-output").text(pizzaToppingsPrice.toFixed(2));
    $("#delivery-price-output").text(deliveryFee.toFixed(2));
    $("#taxes-price-output").text(orderTaxes.toFixed(2));
    $("#total-price-output").text(orderTotalPrice.toFixed(2));
  });

  $("#button-order").click(function() {
    var displayDateTime = myOrder.orderDateTime.toLocaleString();
    $("#order-confirmation-output").text("Your order, created " + displayDateTime + ", will be ready within one hour.");
    $("#show-confirmation").show();
    console.log(myPizza);
    console.log(myOrder);
  });

});

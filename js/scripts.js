function Customer(name, address, telephone) {
  this.customerID = 1;
  this.customerName = name;
  this.customerAddress = address;
  this.customerTelephone = telephone;
  console.log("I am " + this.customerName + ", customer #" + this.customerID + " - " + this.customerAddress + " " + this.customerTelephone);
}

function Order(customerid, selection, type) {
  this.orderCustomerID = customerid;
  this.orderSelection = selection;
  this.orderType = type;
  this.orderPrice = 0;
  this.orderDateTime = Date();
  this.orderTotalPrice = 0;
  console.log("I am a " + this.orderType + " order for customer #" + this.orderCustomerID + " for a " + this.orderSelection + " of the type: " + this.orderType + ", ordered at " + this.orderDateTime);
}

function Pizza(size, dough, sauce, toppings) {
  this.pizzaSize = size;
  this.pizzaDough = dough;
  this.pizzaSauce = sauce;
  this.pizzaToppings = toppings;
  console.log("I am a " + this.pizzaSize + " pizza on a " + this.pizzaDough + " crust with " + this.pizzaSauce + " sauce and the following toppings: " + this.pizzaToppings);
}

var myCustomer = new Customer("Dr. Gonzo", "2000 2nd Avenue, # 5, Seattle", "206-555-1212");
var myOrder = new Order(1, "Pizza", "Delivery");
var myPizza = new Pizza("Small", "Whole Wheat", "Garlic", ["Mushrooms", "Sausage", "Green Pepper", "Onion", "Mozzarella"]);

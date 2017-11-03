// back end
function Pizza(toppingsArray, size, cheese, price){
  this.toppings = toppingsArray;
  this.size = size;
  this.cheese = cheese;
  this.price = 0;
  this.addPrice();
}

// totals price
Pizza.prototype.addPrice = function () {
  if (this.size === "Small") {
    this.price += 10;
  } else if (this.size === "Medium") {
    this.price += 15;
  } else if (this.size === "Large") {
    this.price += 20;
  }
  if (this.cheese === "No Cheese") {
    this.price -=1;
  }

  var numberOfToppings = (this.toppings.length) * 2;
  this.price += numberOfToppings;

  return this.price;
}

// front end
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    var cheese = $("#cheese").val();
    var toppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      toppings.push($(this).val());
    });
    var newPizza = new Pizza(toppings, size, cheese);
    $("ul#order").text("");
    $("ul#order").append("<li> Size: " + newPizza.size + "</li>" + "<li> Cheese: " + newPizza.cheese + "</li>" + "<li> Toppings: " + newPizza.toppings + "</li>" + "<li> Total: $" + newPizza.price + "</li>");
  });
});

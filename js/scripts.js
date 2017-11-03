// back end
function Pizza(toppingsArray, size, price){
  this.toppings = toppingsArray;
  this.size = size;
  this.price = 0;
  this.addPrice();
}

// totals price
Pizza.prototype.addPrice = function () {
  if (this.size === "small") {
    this.price += 10;
  } else if (this.size === "medium") {
    this.price += 15;
  } else if (this.size === "large") {
    this.price += 20;
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
    var toppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      toppings.push($(this).val());
    });
    var newPizza = new Pizza(toppings, size);
    $("ul#order").text("");
    $("ul#order").append("<li> Size: " + newPizza.size + "</li>" + "<li> Toppings: " + newPizza.toppings + "</li>" + "<li> Total: $" + newPizza.price + "</li>");
  });
});

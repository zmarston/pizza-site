// back end
function Pizza(toppings, size, price){
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

function addSizePrice(newPizza) {
  if (newPizza.size === "small") {
    alert("small");
    price = 10;
    return this.price
  } else if (size === "medium") {
    alert("medium");
    price = 15;
    alert(pizza.price);
  } else if (size === "large") {
    alert("large");
    price = 20;
    alert(pizza.price);
  }

}


// front end
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    debugger
    event.preventDefault;
    var size = $("#size").val();

    var newPizza = new Pizza(size);

    addSizePrice(newPizza);
  });
});

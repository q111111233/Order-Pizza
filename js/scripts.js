$(function(){
  var total = 0;
  $("form#pizzaform").submit(function(event){
    event.preventDefault();
    var topping = $(".topping").val();
    var size = $(".size").val();
    var newPizza = new Pizza(topping,size);
    total += newPizza.price();

    $("#orders").append('<li><span class="single-pizza">' + size + '" ' + topping + " " +"pizza</span>(click to see details)</li>");

    $(".single-pizza").last().click(function(){
      $("#details").text("Your topping is: " + newPizza.topping + ", size is: " + newPizza.size + '", price is: $' + newPizza.price());
    })
  })

  $("#total").click(function(){
    $("#cost").show().text("Your Total Cost is: $" + total);
    $("#delivery").show();
  });

  $("#delivery-btn").click(function(){
    var done = $(".delivery").val();
    if(done === "yes"){
      $("#textarea").show();
    }else{
      $("#done").text("your order is done");
      $("#textarea").hide();
    }
      $("#done").show();
  })

  $("#final").click(function(){
      var address = $("#address").val();
      $("#done").text("Your pizza will be delivered to: " + address);
      $("#done").show();
  })
})

function Pizza(topping, size){
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.price = function(){
  var price = 100;
  if(this.topping === "cheese"){price += 1;}
  else if(this.topping === "pepperoni"){price += 2;}
  else if(this.topping === "artichoke"){price += 3;}
  else{price += 4;}
  if(this.size === "11"){price += 10;}
  else if(this.size === "12"){price += 20;}
  else if(this.size === "13"){price += 30;}
  else{price += 40;}
  return price;
}

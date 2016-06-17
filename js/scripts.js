$(function(){
  $("#more").click(function(){
    $("#pizza").append('<div class="pizza">'+
                          '<h3>Another Pizza</h3>'+
                          '<div class="form-group">'+
                            '<h2>Topping</h2>'+
                            '<select class="form-control topping">'+
                              '<option value="cheese">cheese</option>'+
                              '<option value="pepperoni">pepperoni</option>'+
                              '<option value="artichoke">artichoke</option>'+
                              '<option value="anchovy">anchovy</option>'+
                            '</select>'+
                            '</div>'+
                            '<div class="form-group">'+
                            '<h2>size</h2>'+
                            '<select class="form-control size">'+
                              '<option value="11">11</option>'+
                              '<option value="12">12</option>'+
                              '<option value="13">13</option>'+
                            '</select>'+
                          '</div>'+
                        '</div>'
                    )
  })
  $("form#pizzaform").submit(function(event){
    event.preventDefault();
    var num = $(".topping").val();
    var total =0;
    $(".pizza").each(function(){
      var topping = $(this).find(".topping").val();
      var size = $(this).find(".size").val();
      total += new Pizza(topping,size).price();
    });


    $("#aaa").text(num+ " "+total);
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

$(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();
    var num = $("#number").val();
    var topping = $("input:radio[name=topping]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var newPizza =[];
    for(var i=0; i<num; i++){
      newPizza.push(new Pizza(topping,size).price());
    }
    var total = newPizza.reduce(function(a,b){
      return a+b;
    })
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

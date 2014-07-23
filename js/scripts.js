
var Purchase = {
  total: function() {
    return this.price * this.quantity
 }

};

// var Category = {
//   add: function(){
// return
//   }
// };


$(document).ready(function(){
 $("form#expense-input").submit(function(event){

    var newPurchase = Object.create(Purchase);
    newPurchase.description = $("input#desc").val();
    newPurchase.price = $("input#price").val();
    newPurchase.quantity = $("input#quant").val();

    $("table#table-value").append("<tr><td>" + $("input#desc").val() + "</td>"
                      + "<td>$" + $("input#price").val() + "</td>" +
                       "<td>" + $("input#quant").val() + "</td>" + "<td>$" +
                       newPurchase.total() + "</td></tr>");

    $("#table").show();

    $("input#desc").val("");
    $("input#price").val("");
    $("input#quant").val("");

    event.preventDefault();

  });
 $("form#new-category").submit(function(event){


    $("ul#category-submit").append("<li>" + $("input#categories").val() + "</li>");

    $("#expense-input").show();

    $("input#categories").val("");

    event.preventDefault();

 })
});

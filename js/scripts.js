
var Purchase = {
  total: function() {
    return this.price * this.quantity
 }

};


$(document).ready(function(){
 $("form#expense-input").submit(function(event){

    Purchase.description = $("input#desc").val();
    Purchase.price = $("input#price").val();
    Purchase.quantity = $("input#quant").val();

$("table#table-value").append("<tr><td>" + $("input#desc").val() + "</td>"
                      + "<td>$" + $("input#price").val() + "</td>" +
                       "<td>" + $("input#quant").val() + "</td>" + "<td>$" +
                       Purchase.total() + "</td></tr>");


event.preventDefault();


$("input#desc").val("");
$("input#price").val("");
$("input#quant").val("");



  });
});

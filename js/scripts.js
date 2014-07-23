$(document).ready(function() {
 $("form#expense-input").submit(function(event){

    var pDescription = $("input#desc").val();
    var pPrice = $("input#price").val();
    var pQuantity = $("input#quant").val();

event.preventDefault();


$("table#table-value").append("<tr><td>" + $("input#desc").val() + "</td>"
                      + "<td>" + $("input#price").val() + "</td>" +
                       "<td>" + $("input#quant").val() "</td></tr>");


$("input#desc").val("");
$("input#price").val("");

  });
});

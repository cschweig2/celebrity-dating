$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    const name = $("input#name").val();
    const age = parseInt($("input#age").val());
    const hair = $("input#hair").val();
    const gender = $("input#gender").val();

    $("#dennis").hide();
    $("#scarlett").hide();

    if (hair === 'brown' && age > 45 && gender === 'male' || gender === 'either') {
      $("#dennis").show()
    } 
    else (hair === 'brown' && age < 45 && gender === 'female' || gender === 'either') {
      $("#scarlett").show();
    }
  
    event.preventDefault();
  });
});
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    const name = $("input#name").val();
    const age = parseInt($("input#age").val());
    const hair = $("select#hair").val();
    const gender = $("select#gender").val();

    if (hair === 'Brown' && age >= 45 && gender === 'Male' || gender === 'Either') {
      $("#dennis").show()
    } 
    else if (hair === 'Brown' && age <= 45 && gender === 'Female' || gender === 'Either') {
      $("#scarlett").show();
    }
  
    event.preventDefault();
  });
});
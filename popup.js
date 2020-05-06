function validateForm() {
  var Email = document.forms["myForm"]["Email"].value;
  var E_name = document.forms["myForm"]["E_name"].value;
  var E_date = document.forms["myForm"]["E_date"].value;
  var E_time = document.forms["myForm"]["E_time"].value;
  var E_description = document.forms["myForm"]["E_description"].value;

  var bt = document.getElementById('btSubmit');

  if (Email == "" || E_name == "" || E_date == "" || E_time == "" || E_description == "") {
    bt.disabled = true;
  }
  else
  {
    bt.disabled = false;
  }

}

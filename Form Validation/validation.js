function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;

  /*checks for empty name value*/
  if (name == null || name == "") {
    alert("Please enter name");
    return false;
  } 
  /*checks for length of password*/
  else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  } 
  /*checks for password value as 'password'*/
  else if (password == "password") {
    alert("This password is invalid");
    return false;
  }
}

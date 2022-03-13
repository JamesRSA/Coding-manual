function validateName() { //testing whether the input has 2 - 15 characters
  var firstName = document.getElementById('name').value;
  var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

  if (re1.test(firstName)) { //if the input is valid, update page to prompt successful entry
    document.getElementById('NamePrompt').style.color = "Green";
    document.getElementById('NamePrompt').innerHTML = "<strong>Valid input!</strong>";
    return (true);
  }
  else { //if the input is invalid, update page to prompt a new entry
    document.getElementById('NamePrompt').style.color = "Red";
    document.getElementById('NamePrompt').innerHTML = "<strong>Name must be between 2 and 15 characters long!</strong>";
    return (false);
  }


function validateForm() {
    var i = document.forms["myevent"]["event"].value;
    var e = document.forms["myevent"]["title"].value;
    var x = document.forms["myevent"]["dates1"].value;
    var y= document.forms["myevent"]["dates2"].value;
    var z= document.forms["myevent"]["posting"].value;
    if (i == "") {
      alert("Please select event type");
      return false;
    }
    if (e == "") {
        alert("Please enter event title");
        return false;
      }
    if (x == "") {
        alert("Please enter start date of event");
        return false;
    }
  
    if (y == "") {
        alert("Please enter end date of event");
        return false;
    }
  
    if (z == "") {
        alert("Please enter the post date of the event");
        return false;
    }
    else{
    alert("Event saved!")
    }
}

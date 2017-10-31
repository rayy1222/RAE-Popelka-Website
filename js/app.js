/********************************
JavaScript Function
********************************/
function submitFunction(event) {

var x= document.forms["myForm"]["Name"].value;
var y= document.forms["myForm"]["email"].value;    

if(x === null ||x === ""||y === null||y === "")
{
alert("One or more fields is empty!");

    event.preventDefault();

  }
 else {
 alert ("Successfully Submitted!");
}
}







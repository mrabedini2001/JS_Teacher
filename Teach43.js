// iteration methods
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);  //The forEach() method calls a function (a callback function) once for each array element.

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
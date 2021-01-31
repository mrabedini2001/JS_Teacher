//  scopes in js


// code here can NOT use carName
function myFunction() {
    var carName = "Volvo";
  // code here CAN use carName
}


var carName = "Volvo";
// code here can use carName
function myFunction() {
// code here can also use carName
}


myFunction();
// code here can use carName
function myFunction() {
  carName = "Volvo";
}
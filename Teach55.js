// In JavaScript there are 5 different data types that can contain values:
// string
// number
// boolean
// object
// function

// There are 6 types of objects:
// Object
// Date
// Array
// String
// Number
// Boolean

// And 2 data types that cannot contain values:
// null
// undefined

typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}

String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression

x.toString()
(123).toString()
(100 + 23).toString()

Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN

var y = "5";      // y is a string
var x = + y;      // x is a number

var y = "John";   // y is a string
var x = + y;      // x is a number (NaN)

Number(false)     // returns 0
Number(true)      // returns 1
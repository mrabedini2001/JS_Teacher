// YES / NO
// ON / OFF
// TRUE / FALSE

Boolean(10 > 9)        // returns true
(10 > 9)              // also returns true
10 > 9                // also returns true

var x = 0;
Boolean(x);       // returns false

var x = null;
Boolean(x);       // returns false

var x = false;
var y = new Boolean(false);
// typeof x returns boolean
// typeof y returns object
var a = require("prompt-sync");
var prompt = a();

var x = prompt("Enter the number: ");
if (x % 2 == 0) 
{
    console.log(x + " is an even number");
} 
else 
{
    console.log(x + " is an odd number");
}
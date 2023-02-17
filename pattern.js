var a = require("prompt-sync");
var prompt = a();

var x = prompt("Enter the number: ");
var i,j;
for(i=1;i<=x;i++)
{
    var row = '';
    for(j=1;j<=i;j++)
    {
        row += '*';
    }
    console.log(row);
}
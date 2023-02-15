var a = require("prompt-sync");
var prompt = a();
var name = prompt("Enter the name of student: ");
var score = prompt("Enter the marks: ");

var grade;
if (score >= 97)
{
    grade = 'A+';
}
else if (score >= 93)
{
    grade = 'A';
}
else if (score >= 90)
{
    grade = 'A-';
}
else if (score >= 87)
{
    grade = 'B+';
}
else if (score >= 83)
{
    grade = 'B';
}
else if (score >= 80)
{
    grade = 'B-';
}
else if (score >= 77)
{
    grade = 'C+';
}
else if (score >= 73)
{
    grade = 'C';
}
else if (score >= 70)
{
    grade = 'C-';
}
else if (score >= 67)
{
    grade = 'D+';
}
else if (score >= 65)
{
    grade = 'D';
}
else 
{
    grade = 'E';
}

console.log(name + " has scored " + grade);
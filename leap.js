function isLeapYear(year)
{
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function findNextLeapYear(year)
{
    let nextLeapYear = year;
    while (!isLeapYear(nextLeapYear))
    {
        nextLeapYear++;
    }
    return nextLeapYear
}

const a = require("prompt-sync");
const prompt = a();

const year = prompt("Enter the year: ");

if (isLeapYear(year))
{

    console.log(year +" is a leap year");
}
else
{
    var nextLeapYear = findNextLeapYear(year);
    console.log(year + " is not a leap year. After ",year + ", ",nextLeapYear + " is next leap year")
}

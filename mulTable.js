const fs = require('fs');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter a number: ',(number) => {
    const fileName = `table-${number}.txt`;
    let tableContent = '';
    for (let i = 1; i <= 10; i++){
        tableContent += `${number} x ${i} = ${number * i}\n`;
    }
    fs.writeFile(fileName, tableContent, (err) => {
        if (err) throw err;
        console.log(`Table saved to ${fileName}`);
        r1.close();
    });
});
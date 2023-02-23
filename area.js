const a = require("prompt-sync");;
const prompt = a();

const shape = prompt("Enter the shape: ");
function calcArea(shape, ...params)
{
    switch (shape)
    {
        case 'circle':
            const [radius] = params;
            return Math.PI * radius * radius;
        case 'triangle':
            const [base, height] = params;
            return 0.5 * base * height;
        case 'square':
            const [side] = params;
            return side * side;
        case 'rectangle':
            const [length, breadth] = params;
            return length * breadth;
        default:
            throw new Error(`${shape} is invalid`);
    }
}


const params = prompt("Enter the parameters: ");
const area = calcArea(shape, ...params);
console.log (`The area of the ${shape} is ${area}`);
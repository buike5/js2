alert("Simple Javascript calculator ");
// program for a simple calculator
let result;

// enter first number
const number1 = parseFloat(prompt('Enter first number: '));
// enter operator

const operator = prompt('Enter operator ( either +, -, * or / ): ');
// enter another number

const number2 = parseFloat(prompt('Enter second number: '));
//let's use the switch statement to run the arithmetic
switch (operator) {
    case '+':
        result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
        result = number1 - number2;
        alert(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
        result = number1 * number2;
        alert(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
        result = number1 / number2;
        alert(`${number1} / ${number2} = ${result}`);
        break;

    default:
        alert('Invalid operator or input');
        break;
}
// voila it is done!
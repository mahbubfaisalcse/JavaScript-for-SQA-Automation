// 0 1 1 2 3 5 8 13 21 34 55 89........ 

function fibonaci(index) {
    let firstNumber = 0;
    let secondNumber = 1;
    console.log(`${firstNumber}\n${secondNumber}`);
    let currentNumber;
    for (let i = 3; i <= index; i++) {
        currentNumber = firstNumber + secondNumber;
        console.log(currentNumber);
        firstNumber = secondNumber;
        secondNumber = currentNumber;
    }
}

fibonaci(8);
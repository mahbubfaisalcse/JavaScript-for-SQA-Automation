// function Display(some) {
//   console.log(some);
// }

// function Calculator(num1, num2) {
//   let sum = num1 + num2;
//   Display (sum);
// }

// let result = Calculator(5, 5);
// // Display(result);

function calculator(num1, num2, callback){ 
    let sum = num1 + num2;
    if(callback) callback(sum);
    return sum;
}
// c


// calculator(5, 5, function(result){  // Annonymous callback function
//     console.log(result);
// });





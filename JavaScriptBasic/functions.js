// Name function
// function batch_16(DataOne, DataTwo, DataThree) {
//     const sum = DataOne + DataTwo + DataThree;
//     console.log(sum);
// }
// batch_16(10, 20, 30);

// Return function
function batch_16(DataOne, DataTwo) {
    const sum = DataOne + DataTwo;
    return { sum, DataOne, DataTwo };
}

function  two(a, b){
    const result = batch_16(a, b);
    console.log(result);
}
two(5, 10);

// 5! = 5 * 4! = 120

function facRecursion(number) {
    if (number === 1 ) {
        return 1;
    }
    return number * facRecursion(number - 1);
}
console.log(facRecursion(5));


// 5 * facRecursion(4)
// 5 * 4 * facRecursion(3)
// 5 * 4 * 3 * facRecursion(2)
// 5 * 4 * 3 * 2 * facRecursion(1)
// 5 * 4 * 3 * 2 * 1 = 120
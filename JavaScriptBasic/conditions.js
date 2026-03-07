// 4/2 = 2 (কোন সংখ্যাকে ২ দ্বারা ভাগ করলে ভাগশেষ 1 হয়, তাহলে সেটি বিজোড় সংখ্যা)
// 4%2 = 0 (কোন সংখ্যাকে ২ দ্বারা ভাগ করলে ভাগশেষ ০ হয়, তাহলে সেটি জোড় সংখ্যা)

// function OddEvnChecker(numbers){
//     if (numbers % 2 == 0){
//         // console.log(numbers + " is even number");
//         console.log(`${numbers} is even number`);
//     } else {
//         // console.log(numbers + " is odd number");
//         console.log(`${numbers} is odd number`);
//     }
// };

// OddEvnChecker(100);

//number validation with multiple conditions
function OddEvnChecker(data){
    if (data % 2 == 0 && typeof data === "number"){
        // console.log(numbers + " is even number");
        console.log(`${data} is even number`);
    } else if (data % 2=== 1 && typeof data === "number"){
        // console.log(numbers + " is odd number");
        console.log(`${data} is odd number`);
    } else {
        console.log(`${data} is not a valid number`);
    }
};

OddEvnChecker(10);



// Initialization,  condition, activity, increment/decrement

// while loop example

// const all_names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Hannah'];

// function whileLoop(data) {
//     let i = 0;
//     while (i < data.length) {
//         console.log(data[i]);
//         i++; // Can define i = i + 1 also for increment but i++ is good practice
// }
// }
// whileLoop(all_names);

// for loop example
// function forLoop(data) {
//     for (let i = 0; i < data.length; i++) {
//         console.log(data[i]);
//     }
// }
// forLoop(all_names);

// for in loop example (It shows all the indexes of an array without length property)
//  function forInLoop(data) {
//      for (let index in data) {
//          console.log(data[index]);
//      }
// }
//     forInLoop(all_names);

// each loop example (It shows all the values of an array directly)
// function forEachLoop(data) {
//     data.forEach((name, i) => {
//         console.log(name, i);
//     });
// }
// forEachLoop(all_names);

// let i = 0;
// for (; ; i++) {
//     if (i > 10)
//         break;
//     else{
//         console.log(i);
//     }
// }

// console.log("I am done");

// forEach loop example
// let bugs = ["UI bug", "API bug", "Performance bug"];

// bugs.forEach(function(bug) {
//   console.log(bug);
// });

// bugs.forEach(bug => {    // mordern way using arrow function
//   console.log(bug);
// });


// let statuses = ["PASS", "FAIL", "BLOCKED"]; // array of test statuses

// statuses.forEach(status => {
//   console.log("Test status:", status);
// });

// for in loop example for object
// let testCase = {
//   id: 101,
//   title: "Login Test",
//   status: "PASS"
// };

// for (let key in testCase) {
//   console.log(key, ":", testCase[key]);
// }

// let modules = ["Login", "Cart", "Payment"]; // array of test modules

// for (let index in modules) {
//   console.log(index, modules[index]);
// }


// let products = [
//   { id: 101, name: "Laptop", price: 800, inStock: true },
//   { id: 102, name: "Mouse", price: 20, inStock: false }
// ];

// products.forEach((product, index) => {

//   console.log("Checking product:", index + 1);
//  // ID validation
//   if (product.id) {
//     console.log("✅ ID exists");
//   } else {
//     console.log("❌ ID missing");
//   }

//   // Name validation
//   if (product.name && product.name.length > 0) {
//     console.log("✅ Name is valid");
//   } else {
//     console.log("❌ Name invalid");
//   }

//   // Price validation
//   if (product.price > 0) {
//     console.log("✅ Price valid");
//   } else {
//     console.log("❌ Price invalid");
//   }

//   // Stock validation
//   if (typeof product.inStock === "boolean") {
//     console.log("✅ Stock value correct");
//   } else {
//     console.log("❌ Stock value wrong");
//   }

//   console.log("----------------------");
// });  

// for in loop used for object
// it returns indexes of an array and keys of an object

// const employees = { id: 1, name: "Alice", department: "HR" };
// for (let x in employees) {
//   console.log(employees[x]);
// }

// for of loop used for array
// It loop through the values of an iterable object like array, string, map, set etc.
// it returns the values of an array directly without using index and length property
// let a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10], c = 'HELLO';

// for (let x of [...a, ...b, ...c]) {
//   console.log(x);
// }

// while loop example
// it checks the condition first then executes the code block
// হোয়াইল লুপ ব্যবহারের কারণ হলো যখন লুপের কতবার চলবে সেটা আগে থেকে জানা না থাকে তখন হোয়াইল লুপ ব্যবহার করা হয়।
// let i = 0;
// let text = "";

// while (i < 20) {
//   text += "The number is " + i + "\n";
//   i++;
// }
// console.log(text);

// it checks the code block first then the condition
// ডু হোয়াইল লুপ ব্যবহারের কারণ হলো যখন লুপের কতবার চলবে সেটা আগে থেকে জানা না থাকে এবং অন্তত একবার লুপটি চলতেই হবে তখন ডু হোয়াইল লুপ ব্যবহার করা হয়।
// let i = 20;
// let text = "";

// do {
//   text += "The number is " + i + "\n";
//   i++;
// } while (i < 20) 

// console.log(text);



//  for (let i = 0; i < 3; i++) {

//  setTimeout(() => console.log(i), 100); // সেটটাইমআউটের ভিতরে আই এর মান দেখাবে ০,১,২ কারণ লুপ শেষ হওয়ার পর আই এর মান হবে ৩ কিন্তু সেটটাইমআউট কলব্যাক ফাংশনটি তখনই এক্সিকিউট হবে যখন লুপ সম্পূর্ণ শেষ হয়ে যাবে। তাই এখানে ব্লক স্কোপড ভ্যারিয়েবল ব্যবহার করা হয়েছে।

// }



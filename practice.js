// const text_one = "I'm";
// const text_two = "a";
// const text_three = "SQA trainee at";
// const text_four = "Ostad Limited!";
// const full_data = ["I'm", "a", "SQA trainee at", "Ostad Limited!", ["It's", "nice", "platform"]];
// const last_index = full_data.length - 1;
// const second_last_index = full_data[last_index]; 
// const second_last_index_value = second_last_index.length - 1;
//console.log(full_data);
// console.log(second_last_index[second_last_index_value]);
//console.log(last_index[last_index=full_data.length - 1]);

// function sum(){
//     let a = 10;
//     let b = 20;
//     const result = a + b;
//     return result;
// }
// console.log(sum());

// for (let i = 0; i < 5; i++) {
//     console.log("inside loop " + i);
// }

// const dhaka = "dhanmondi";
// const chittagong = "pahartoli";
// const sylhet = "zindabazar";
// const rajshahi = "boalia";
// const khulna = "bagerhat";
// const rangpur = "mithapukur";
// const maymensingh = "dapunia";
// const all_cities = [dhaka, chittagong, sylhet, rajshahi, khulna, rangpur, maymensingh, ["noakhali", " barishal"]];
// const last_index = all_cities.length - 1;
// const second_last_index = all_cities[last_index];
// const second_last_index_value = second_last_index.length - 1;



// console.log(all_cities.length - 1);
// //console.log(dhaka, chittagong, sylhet, rajshahi, khulna, rangpur, maymensingh);
// console.log (second_last_index[second_last_index_value]);

// let, const, var
// const appName = "Test App";
// let testStatus = "FAIL";

// testStatus = "PASS";
// testStatus = "BLOCKED";

// console.log(appName);
// console.log(testStatus);

// primitive data types
// nn bb ss u

// let a = null
// let b = 25 // number
// let c = true // boolean
// let d = BigInt(9007199254741991) // bigInt
// let e = "SQA Trainee" // string
// let f = Symbol("SQA") // symbol
// let g // undefined

// console.log(a, b, c, d, e, f, g);
// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

// non-primitive data types/ object (make key value pair)
// const item = {
//     "harry": true,
//     "porter": false,
//     "james": 25,
//     "bond": undefined
// }
// console.log(item["porter"]);    
// // const testName = "Login Test"; // string
// // const testCaseCount = 25; // number
// // const isAutomated = false; // boolean
// // let testResult; // undefined
// // const testDetails = null; // null

// operators
// console.log("Operators in JavaScript:");

// let x = 10;
// let y = 5;
// console.log("Addition: " + (x + y)); // Addition
// console.log("Subtraction: " + (x - y)); // Subtraction
// console.log("Multiplication: " + (x * y)); // Multiplication
// console.log("Exponentiation: " + (x ** y)); // Exponentiation
// console.log("Division: " + (x / y)); // Division
// console.log("Modulus: " + (x % y)); // Modulus  

// Arrow function
// const runTest = (a, b) => {
//   console.log(a + b);
// };

// runTest(10, 20);

// Template literals 
// স্ট্রিং টেম্পলেটে ভেরিয়েবল ইন্সার্ট করাকে টেম্পলেট লিটারেল অথবা ইন্টারপোলেশন বলে।
// const testName = "Login Test";
// const result = "PASS";

// console.log(`Test: ${testName} \nResult: ${result}`);


// let country = "Bangladesh";
// let a = 16;
// let b = 2;
// let about = (`We live in ${country} and total population in this country is ${a + b} cr.`); // variable substitution using template literals
// console.log(about);
// 
// let x = 2.7;
// let z = x.toFixed(2); 
// console.log(z);

//destructuring
// const response = {
//   status: 200,
//   message: "Success"
// };

// const { status, message } = response;

// console.log(response);
// console.log(status);
// console.log(message);

// Spread operator
// const baseUser = { role: "user" };

// const testUser = {
//   ...baseUser,
//   name: "QA Tester"
// };

// console.log(testUser);

//promises
// const apiCall = new Promise((resolve) => {
//   resolve("API Passed");
// });

// apiCall.then(result => {
//   console.log(result);
// });

// async await
// const fetchData = async () => {
//   const result = await Promise.resolve("Data Loaded");
//   console.log(result);
// };

// fetchData();

// const testApi = async (testName) => {
//   const response = { status: 200, message: "OK" };
//   const { status, message } = response;

//   console.log(`Test: ${testName} | Status: ${status} | Message: ${message}`);
// };

// testApi("User Login API");


// Practice 1
// function fruit() {
//     
// 
//     var name = "apple";
//     let price = 20;
// 
//     console.log(name);
//     console.log(price);
// }
// fruit();


// Practice 2
// for (let i = 0; i < 3; i++){
//     setTimeout(() => console.log(i), 1);
// }

// 
// console.log(5 == "5");     // true
// console.log(true == 1);    // true
// console.log(null == undefined); // true

// let name = "Jane Smith is a professional writher. He is an also university pofessor".split(" ")[10]
// console.log(name);

const testCases = ["Login Test", "Signup Test", "Payment Test"];

testCases.forEach(test => {
  console.log(`${test} executed`);
});
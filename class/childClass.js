// import { parant } from "./parantClass.js";
// const parantObj = new parant();
// export class child {

//     calculation(type, numOne, numTwo){
//         let result;
//         if(type === "sum"){
//             result = parantObj.sum(numOne, numTwo);
//         }else{
//            result =  parantObj.subs(numOne, numTwo);
//         }
//         return result;
//     }
// }
// const childObj = new child();
// console.log(childObj.calculation("sum", 20, 10));
// console.log(childObj.calculation("subs", 20, 10));


// practiece 2 inheritance functionality
import { parant } from "./parantClass.js";

const parantObj = new parant();
export class child extends parant{
    calculation(a, b) {
    const result = a * b;
    return result;
    }

}


const childObj = new child();
console.log(childObj.calculation(20, 10)); // child class এর calculation method কল করলে subtraction হবে


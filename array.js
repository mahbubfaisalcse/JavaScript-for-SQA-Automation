const t_1 = "Hello Batch 16.";
const t_2 = "Welcome to Ostad Limited.";
const D_3 =3;
const D_4 = 8;
const D_5 = "text";
const all_data = ["Hello Batch 16.", 3, 8, "text", ["arr_2_1", "arr_2_2"]];
//console.log(all_data[1]); // See a particular index from array 0,1,2,3...
//all_data.push("Bangladesh"); // Adding new data to array
//all_data.pop("Bangladesh"); //Remove last data from array
const last_index = all_data.length - 1; //Get last index using length property
const second_last_index = all_data[last_index];
const second_last_index_value = second_last_index.length - 1;

console.log(all_data[last_index]); // See last index from array using length property
console.log(all_data[last_index][1]); // See second last index from nested array
console.log(all_data[all_data.length - 1][all_data[all_data.length - 1].length - 1]); //// elaborately See second last index from nested array 
console.log(all_data[last_index][all_data[last_index].length - 1]); // See second last index from nested array 
console.log(second_last_index[second_last_index_value]); // dynamically See second last index from nested array 

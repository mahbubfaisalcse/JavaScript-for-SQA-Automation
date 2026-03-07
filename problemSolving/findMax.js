//  Find maximum number from the array
const data = [18, 12, 54, 5, 76, 34, 23];

function findMax(data){
    let maxNumber = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i] > maxNumber) {
            maxNumber = data[i];
        }
       
    }
    console.log(maxNumber);
}

findMax(data);
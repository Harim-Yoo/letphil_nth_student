// function findMax(arr) {
//     const maxArr = Math.max(...arr);
//     return maxArr;
// }

// console.log(findMax([1,2,3,3,3,4]));

function findMax(arr) {
    if (arr.length === 0 ) {
        return undefined;
    }

    let max = arr[0];

    for (let i = 1; i<arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1,2,2,2,3,3,3,4]));
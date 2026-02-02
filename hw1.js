const data1 = [1,2,3];

function sum(arr) {
    let total = 0;
    for(const n of arr) {
        total += n;
    }
    return total;
}

console.log("Sum: ", sum(data1))

function average(arr) {
    return sum(arr)/arr.length;
}

console.log("Average: ", average(data1))

const data2 = [3,1,2];

function min(arr) {
    let min = arr[0];
    for(const n of arr) {
        if(min>n) {min=n;}
    }
    return min;
}

console.log("Min: ", min(data2))

function max(arr) {
    let max = arr[0];
    for (const n of arr) {
        if (max<n) {max=n;}
    }
    return max;
}

console.log("Max: ", max(data2))
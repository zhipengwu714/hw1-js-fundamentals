const data = [1,2,3];

function sum(arr) {
    let total = 0;
    for(const n of arr) {
        total += n;
    }
    return total;
}

console.log("Sum: ", sum(data))

function average(arr) {
    return sum(data)/data.length;
}

console.log("Average: ", average(data))


const arr = [1,2,3];

function sum(arr) {
    let total = 0;
    for(const n of arr) {
        total += n;
    }
    return total;
}

console.log(sum(arr))
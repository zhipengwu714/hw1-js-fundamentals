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



//HW PART 2
const string = "hello";

function capitalize(str) {
    let split = str.split("");
    split[0] = split[0].toUpperCase();
    return split.join("");
}
console.log("Capitalized: ", capitalize(string))

function reverse(str) {
    let string = str.split("");
    string = string.reverse();
    return string.join("");
}
console.log("Reversed String: ", reverse(string))

function countVowels(str) {
    const vowels = ["a","e","i","o","u"];
    let total = 0;
    let string = str.toLowerCase().split("");
    for (const n of string) {
        if (vowels.includes(n)) {
            total++;
        }
    }
    return total;
}
console.log("Vowels Contained: ", countVowels(string))


//HW PART 3

const student = {
    name: "Zhi Peng Wu",
    age: 20,
    grades: [85, 90, 78],
    getAverage: function() {
        let total = 0;
        for (const n of this.grades) {
            total += n;
        }
        return total/this.grades.length;
    },
    isHonorRoll: function() {
        return this.getAverage() > 85;
    }
}
console.log(student.getAverage().toFixed(2))
console.log(student.isHonorRoll())
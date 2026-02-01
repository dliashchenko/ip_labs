function findMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(findMax(3, 4));



const subtract = function(a, b) {
    return a - b;
}
console.log(subtract(10, 4));



const sqrt = (n) => Math.sqrt(n);
console.log(sqrt(9));



function geometricProgression(n, a ,r) {
    if (n === 1) {
        return a;
    } else {
        return geometricProgression(n - 1, a , r) + a * Math.pow(r, n - 1);
    }
}
console.log(geometricProgression(3, 2, 3));



function createDivider(divisor) {
    return function(number) {
        return number / divisor;
    }
}
const divideByTwo = createDivider(2);
console.log(divideByTwo(10));



function processSet(set, callback) {
    set.forEach((value) => {
        callback(value);
    });
}
const mySet = new Set([1, 2, 3]);
processSet(mySet, (val) => console.log("Element:", val * 2));
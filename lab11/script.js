let n = +prompt("Enter a number");
let current = 0;
let martix = ""

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n; j++) {
        row += ((i + j) % 2) + " ";
    }
    martix += row + "\n"
}

console.log(martix);




// let a = +prompt("Enter number a: ")
// let r = +prompt("Enter number r: ")
// let n = +prompt("Enter number n: ")

// let sum = 0
// let sequence = []

// for (let i = 0; i < n; i++) {
//     let currentTern = a * Math.pow(r, i)

//     sequence.push(currentTern.toFixed(2))
//     sum += currentTern
// }

// console.log(sequence.join(" + "));
// console.log(sum.toFixed(2));




// while (true) {
//     let o = prompt('Enter number o: ')
    
//     if (o == "end") {
//         break
//     }

//     let num1 = +prompt('Enter number num1: ')
//     let num2 = +prompt('Enter number num2: ')

//     switch (o) {
//         case '+':
//             console.log(num1 + num2);
//             break;
//         case '-':
//             console.log(num1 - num2);
//             break;
//         case '*':
//             console.log(num1 * num2);
//             break;
//         case '/':
//             console.log(num1 / num2);
//             break;
//         case '%':
//             console.log(num1 % num2);
//             break;
//     }
// }





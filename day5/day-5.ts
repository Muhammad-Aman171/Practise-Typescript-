// let input : string = (prompt('enter your string') ?? '0')

// let input: number[] = [1, 20, 3, 40000, 5];
// let largeNumber = input[0];

// // console.log(largeNumber);

// for (let i = 1; i < input.length; i++) {
//   if (input[i] >= largeNumber) {
//     largeNumber = input[i];
//   }
// }
// console.log(`${input} large number is ${largeNumber}`);

// string ko array my find karna

// let names: string[] = ["aman", "zain", "abubakar", "talha"];

// let findName = prompt("enter name to find name in string" )

// for (let i = 0; i < names.length; i++) {
//     if (names[i] === findName) {
//       console.log("this name is here");
//     }
// }

// combine the two arrays

let number1: number[] = [1, 2, 3];
let number2: number[] = [4, 5, 6];

let combineArray: number[] = [];

for (let i = 0; i < number1.length; i++) {
  combineArray.push(number1[i]);
}
for (let i = 0; i < number2.length; i++) {
  combineArray.push(number2[i]);
}

console.log(combineArray);

// console.log(combineArray);

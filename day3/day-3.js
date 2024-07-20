"use strict";
// let a: number = +(prompt("enter your number") ?? "1");
// let b: number = +(prompt("enter your number again") ?? "1");
// if (a > b) {
//   document.write("a is bigger than b");
// } else if (a == b) {
//   document.write("a is equal than b");
// } else {
//   document.write("b is smaller than a");
// }
// let a: boolean = 6==6;
// console.log(a);
// let c: number = a+b;
// console.log(c);
// function reverseString(str: string): string {
//   let newString: string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// let string: string | null = prompt("enter your string");
// if (string !== null) {
//   let result = reverseString(string);
//   console.log(result);
// }
// else {
//   console.log("nothing output");
// }
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
let string = prompt("Enter your string");
if (string !== null) {
    let result = reverseString(string);
    console.log(result);
}
else if (string == null) {
    console.log("No input provided.");
}
else {
}

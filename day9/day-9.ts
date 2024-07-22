// let a = document.getElementById("div")
// if (a){
//         a.style.backgroundColor = " yellow"
// }
// let b = document.querySelector("button")

// if (b){

// }

// let c = (num1: number, num2: number) => {
//   let d = num1 + num2;
//   // console.log(result);
//   return d;
// };

// let a: number = +(prompt("enter your number") ?? "0");
// let b: number = +(prompt("enter your number") ?? "0");
// var result = c(a, b);
// console.log(`your result is ${result}`);

let numbers: number[] = [5, 2, 4, 9];

let a = () => {
  let result = numbers.map((i) => i * 5);
  console.log(result);
  
};
// console.log(a);
a()

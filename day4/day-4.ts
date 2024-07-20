// let a: number = +(prompt("enter your number")?? '0');
// let b: number = +(prompt("enter your number")?? '0');

// for (let i = 1; i <= b; i++) {
//   let table = a * i;
//   console.log(`${a} * ${i} = ${table}`);
// }

// if ((a && b) == 0){
//         console.log("a and b is null");
//  }
//  else if

//  Arrays

// var fruitsName: string[] = ["banana", "apple", "pineapple", "orange"];

// console.log(fruitsName);

// fruitsName.splice(0, 1, "grapes");
// fruitsName.splice(1, 1, "peach");
// fruitsName.splice(2, 1, "watermelon");
// fruitsName.splice(3, 1, "melon");

// console.log(fruitsName);


let numbers: number[] = [1, 2, 3, 4, 5];

console.log("Looping through numbers:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

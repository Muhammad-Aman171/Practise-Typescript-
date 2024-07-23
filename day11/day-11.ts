// find the average

function calAvg(a: number[]) {
  let avg = a.reduce((a,b) => a + b );
  return avg / a.length;
}

let numbers: number[] = [1, 5, 5, 9];
let result = calAvg(numbers);

console.log(result);

// find the greatest number in the string

let maxValue = (b:number[])=> {
  let max = b.reduce((h1, h2) => h1 > h2 ? h1:h2, b[0])
  return max
}

let a :number[] = [8,9,10,456,7897,4654,3311 ]

let result = maxValue(a)
console.log(result);

// converting string into uppercase

let upperCaseFunc = (string: string[]) => {
  let uppercase = string.map((str) => str.toUpperCase());
  return uppercase;
};

let string: string[] = ["aman", "zain", "abubakar"];
let result = upperCaseFunc(string);
console.log(result);

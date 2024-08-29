"use strict";
// let a: number = +(prompt("enter your number") ?? "0");
// let factorial: any = (a: number) => {
//   if (a === 0 || a === 1) return 1;
//   return a * (a - 1);
// };
// console.log(factorial(a));
let generateOtp = (length = 6) => {
    const digits = "0123456789";
    let otp = "";
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
};
let password = generateOtp();
console.log(password);

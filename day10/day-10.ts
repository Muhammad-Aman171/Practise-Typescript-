

// class Calculator {
//   private display: HTMLInputElement;

//   constructor() {
//     this.display = document.getElementById("display") as HTMLInputElement;
//     this.initialize();
//   }

//   private initialize() {
//     document.querySelectorAll(".btn").forEach((button) => {
//       button.addEventListener("click", () => {
//         const value = (button as HTMLButtonElement).dataset.value;
//         if (value) this.onButtonClick(value);
//       });
//     });
//   }

//   private onButtonClick(value: string) {
//     if (value === "=") {
//       this.calculate();
//     } else if (value === "C") {
//       this.clear();
//     } else {
//       this.appendToDisplay(value);
//     }
//   }

//   private appendToDisplay(value: string) {
//     this.display.value += value;
//   }

//   private calculate() {
//     try {
//       this.display.value = eval(this.display.value);
//     } catch {
//       this.display.value = "Error";
//     }
//   }

//   private clear() {
//     this.display.value = "";
//   }
// }

// // Initialize the calculator when the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", () => {
//   new Calculator();
// });



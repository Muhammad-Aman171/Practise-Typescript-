"use strict";
// class Calculator {
//   private display: HTMLInputElement;
//   constructor() {
//     this.display = document.getElementById("display") as HTMLInputElement;
//     this.initialize();
//   }
//   initialize() {
//     const buttons = document.querySelectorAll(".btn");
//     buttons.forEach((button) => {
//       button.addEventListener("click", () => {
//         const value = (button as HTMLButtonElement).dataset.value;
//         if (value) {
//           this.onButtonClick(value);
//         }
//       });
//     });
//   }
//   onButtonClick(value: string) {
//     if (value === "=") {
//       this.calculate();
//     } else if (value === "C") {
//       this.clear();
//     } else {
//       this.appendToDisplay(value);
//     }
//   }
//   appendToDisplay(value: string) {
//     this.display.value += value;
//   }
//   calculate() {
//     try {
//       this.display.value = this.evaluateExpression(this.display.value);
//     } catch (error) {
//       this.display.value = "Error";
//     }
//   }
//   evaluateExpression(expression: string): string {
//     // Safer alternative to eval()
//     // Implement a simple parser or use a library like mathjs
//     try {
//       // Example using math.js
//       // const result = math.evaluate(expression);
//       // return result.toString();
//       // For simplicity, here's a basic implementation:
//       const result = new Function(`return ${expression}`)();
//       return result.toString();
//     } catch {
//       throw new Error("Invalid expression");
//     }
//   }
//   clear() {
//     this.display.value = "";
//   }
// }
// // Initialize the calculator
// document.addEventListener("DOMContentLoaded", () => {
//   new Calculator();
// });
class Calculator {
    constructor() {
        this.display = document.getElementById("display");
        this.initialize();
    }
    initialize() {
        document.querySelectorAll(".btn").forEach((button) => {
            button.addEventListener("click", () => {
                const value = button.dataset.value;
                if (value)
                    this.onButtonClick(value);
            });
        });
    }
    onButtonClick(value) {
        if (value === "=") {
            this.calculate();
        }
        else if (value === "C") {
            this.clear();
        }
        else {
            this.appendToDisplay(value);
        }
    }
    appendToDisplay(value) {
        this.display.value += value;
    }
    calculate() {
        try {
            this.display.value = eval(this.display.value);
        }
        catch (_a) {
            this.display.value = "Error";
        }
    }
    clear() {
        this.display.value = "";
    }
}
// Initialize the calculator when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    new Calculator();
});

"use strict";
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll("#resetbtn");
let msgContainer = document.querySelectorAll(".msg-container");
let winnerMsg = document.querySelectorAll(".msg");
let newGame = document.querySelectorAll("#newbtn");
let turnO = true;
let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        checkWinner();
        resetBtn();
    });
});
const showWinner = (winner) => {
    winnerMsg.forEach((winnerMsg) => {
        winnerMsg.innerText = `congratulations, winner is ${winner}`;
    });
    winnerMsg.forEach((remove) => {
        remove.classList.remove("hide");
    });
};
let checkWinner = () => {
    for (const pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val && pos3val === pos1val) {
                console.log(`you are winner ${pos1val}`);
                showWinner(pos1val);
            }
        }
    }
};
resetbtn.forEach((reset) => {
    reset.addEventListener("click", resetBtn);
});

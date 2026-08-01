const container = document.querySelector(".button-container");
const display = document.querySelector(".display");

const symbols = ["x", "AC", "...", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "...", 0, ".", "="];

const operators=["*","-","+","/","...","."]

symbols.map((element) => {
    const newBtn = document.createElement("button");
    newBtn.textContent = element;
newBtn.classList=("newy")
    container.appendChild(newBtn);

    newBtn.addEventListener("click", function () {
        if (element === "AC") {
            display.textContent = "";
        } else if (element === "x") {
            const newString = display.textContent.slice(0, display.textContent.length - 1);
            display.textContent = newString;
        } else if (element === "=") {
            calculate();
        } 

        else {const last=display.textContent.slice(-1);

            
            if(operators.includes(element) && operators.includes(last)){
                  display.textContent.slice(0,-1)+element;return;
                }
                display.textContent = display.textContent + element;
        }
    });
});

function calculate() {
    const values = display.textContent.match(/(\d+\.?\d*|[\+\-\*\/])/g);

    let result = 0;

    let i = 0;
    while (i < values.length) {
        if (values[i] === "*") {
            result = values[i - 1] * values[i + 1];
            values.splice(i - 1, 3, result);
            i--;
        } else if (values[i] === "/") {
            result = values[i - 1] / values[i + 1];
            values.splice(i - 1, 3, result);
            i--;
        } else {
            i++;
        }
    }

    let total = Number(values[0]);
    for (let i = 0; i < values.length; i++) {
        if (values[i] === "+") {
            total += Number(values[i + 1]);
        } else if (values[i] === "-") {
            total -= values[i + 1];
        }
    }
    display.textContent = total;
}

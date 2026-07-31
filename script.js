const container=document.querySelector(".container")
const display=document.querySelector(".but")


const symbols = ["x", "AC", "...", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "...", 0, ".", "="];
operators=["-","+","/"]
symbols.map((element) => {
    const newBtn = document.createElement("button");
    newBtn.textContent = element;

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
        else if(operators.includes(element)){}
            else {
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
        }

        
        else  {
            i++
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

// const symbols = ["x", "AC", "...", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "...", 0, ".", "="];
// const numbers=[7,6,8,9,0,1,2,3,4,5];
// symbols.map((element)=>{
//     const Newbtn=document.createElement("button")
//     Newbtn.textContent=element; 
//       container.appendChild(Newbtn)
//     Newbtn. addEventListener("click",function(){
//     //     numbers.textContent=Number
//     //     const value=Number(Newbtn.textContent)
//     //  if(numbers.includes(value)){
//     //        display.textContent=Newbtn.textContent

//     //   }
      
//     })

// })


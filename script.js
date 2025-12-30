function add(a, b){

    return a + b;
}

function subtract(a, b){

    return a - b;
}

function multiply(a, b){

    return a * b;
}

function divide(a, b){

    return a/b;

}

function operate(a, b, opp){
    switch (opp){
        case (opp == "+"):
            add(a, b);
            break;
        case (opp == "-"):
            subtract(a, b);
            break;
        case (opp == "*"):
            multiply(a, b);
            break;
        case (opp == "÷"):
            divide(a, b);
            break;
    }

}



const buttonContainer = document.querySelector('.buttons');
const width = parseFloat(getComputedStyle(buttonContainer).width);


const buttons = document.querySelectorAll('.buttons button');
console.log(buttons);

const row = 4
const column = 5

console.log(width);
console.log(row);

const boxWidth = width / row

console.log(boxWidth);

buttons.forEach((item) => {
    item.style.width = boxWidth - 8 + "px";
    item.style.height = boxWidth - 8 + "px"; 
});

const equals = document.querySelector("#equals");
equals.style.width = (2 * (boxWidth - 4)) + "px";
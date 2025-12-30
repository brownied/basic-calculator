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

function power(a, b){
    return Math.pow
}

function operate(a, b, opp){
    switch (opp){
        case ("+"):
            return add(a, b);
            break;
        case ("-"):
            return subtract(a, b);
            break;
        case ("x"):
            return multiply(a, b);
            break;
        case ("÷"):
            return divide(a, b);
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

let calcList = [];


buttonContainer.addEventListener('click', (key =>{
    let target = key.target;
    if (!target.matches('button')) return;
    calcList.push(target.textContent)
    setDisplay();

}));

console.log(calcList);

const displayText = document.querySelector("#displayText");

let a = 0;
let b = 0;
let opp = ''
let lastCalc = 0;

let displayMaintenence = false;

function setVals(){
    
    const operators = ["+", "-", "x", "÷"];
    let indexOp = -1;
    
    for (let i = calcList.length - 1; i >= 0; i--){
        if (operators.includes(calcList[i])){
            indexOp = i;
            opp = calcList[i];
            break;
        }
    }

    if (indexOp === -1) return; 

  
    a = Number(calcList.slice(0, indexOp).join(''));
    b = Number(calcList.slice(indexOp + 1, calcList.length - 1).join('')); 
}

let operatorClicked = false;

function equalSign(lastInput){

if (lastInput == "="){
        setVals();
        val = operate(a, b, opp);
        calcList = [];
        calcList.push(val);
        console.log(val);
        console.log(a)
        console.log(b)
        console.log(opp);
        displayText.textContent = String(val);
        displayMaintenence = true;
    }
}

let firstTime = false;

function setDisplay(){
    lastInput = calcList[calcList.length - 1]
    const operators = ["+", "-", "x", "÷"];
    
    

    equalSign(lastInput);

    
    if (lastInput == "AC"){
        displayText.textContent = "";
        calcList = [];
        operatorClicked = false;
        firstTime = true;
    }

  

    else if (lastInput == "C"){
        calcList.pop();
        calcList.pop();
        console.log(calcList);
        if (firstTime) {
            operatorClicked = false;
        }
        displayText.textContent = displayText.textContent.substring(0, displayText.textContent.length - 1);
        
    }
    
    
    
    else if (operators.includes(lastInput) && operatorClicked) {
        calcList.pop();
        calcList.push("=");
        equalSign("=");
        calcList.push(lastInput);
        displayMaintenence = true;
        firstTime = false;
        console.log("activated");
    }

    else if(operators.includes(lastInput) && !operatorClicked){
        operatorClicked = true;
        firstTime = true;
    }
    
   

    //parse it to find whether or not it's an integer and restarts the calculations if it is.

    if ((lastInput != "=") && (lastInput != "AC") && (lastInput != "C")) {
        lastInputCopy = lastInput
        lastInput = parseInt(lastInput)
        if (displayMaintenence && !isNaN(lastInput)) {
            calcList = [];
            calcList.push(lastInput);
            displayText.textContent = String(lastInput);
            displayMaintenence = false;
        }
        else{
            displayText.textContent += String(lastInputCopy);
            displayMaintenence = false;
        }    
    }

      

    console.log(calcList);
    console.log("op clicked:" + operatorClicked);
    console.log("first time:" + firstTime);

}
let num = document.getElementsByClassName("num");
let result = document.querySelector(".result span");
let signs = document.getElementsByClassName("signs");
let ac = document.querySelector(".del");
let plusMinus = document.querySelector(".opposit");
let persent = document.querySelector(".persent");
let equal = document.querySelector(".equal");

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (i = 0; i < num.length; i++) {
    num[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false) {
            getFirstValue(atr);
        }
        if(isSecondValue === false) {
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = '';
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if (firstValue!= '' && sign!= '') {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

equal.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
        resultValue= firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else if (sign === "÷") {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";

    checkResultLength();
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);
    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

ac.onclick = () => {
    result.innerHTML = "0";

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
}

plusMinus.onclick = () => {
    result.innerHTML = '';
    if (firstValue != '') {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue != '' && secondValue != "" && sign != '') {
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
}

persent.onclick = () => {
    result.innerHTML = '';
    if (firstValue != '') {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != '' && secondValue != "" && sign != '') {
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;
}
//@ts-nocheck
function getHistory() {
    return document.getElementById("history-value").innerText | undefined;
}

function printHIstory(num) {
    try {
        document.getElementById("history-value").innerText = num;
    } catch (err) {
        throw err
    }
}

function getOutput() {
    return document.getElementById("output-value").innerText | undefined;
}

function printOutput(num) {
    document.getElementById("output-value").innerText =
        (num == "") ?
            num :
            getFormativeNum(num);
}

function getFormativeNum(num) {
    return (num == "-") ? "" : Number(num).toLocaleString('en');
}

function reverseNumberFormat(num) {
    return Number(String(num).replace(/,/g, ''));
}

// printOutput("99999");

// alert(reverseNumberFormat( getOutput() ));

const operators = document.getElementsByClassName("operator");

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        switch (this.id) {
            case "clear":
                printHIstory("");
                printOutput("");
                break;
            case "backspace":
                let output = reverseNumberFormat(getOutput()).toString();
                if (output) {
                    output = output.substr(0, output.length - 1);
                    printOutput(output);
                }
                break;
            case "sign":
                let output = getOutput();
                let history = getHistory();
                history += output;
                let res = eval(history);
                res *= -1;
                printOutput(res);
                printHIstory("");
                break;
            case "!":
                let output = getOutput();
                let history = getHistory();
                console.log(output);
                console.log(history);
                let n = output;
                console.log("v");
                let answer = 1;
                if (n == 0 || n == 1) {
                    answer = 1;
                }
                else {
                    for (let i = n; i >= 1; i--) answer *= i;
                    output = answer;
                    history += output;
                    let res = eval(history);
                    printOutput(res);
                    printHIstory("");
                }
                break;
            default:
                let output = getOutput();
                let history = getHistory();

                if (output == "" && history != "") {
                    if (isNaN(history[history.length - 1])) {
                        history = history.substr(0, history.length - 1);
                    }
                }

                if (output != "" || history != "") {
                    output = (output === "") ? output : reverseNumberFormat(output);
                    history += output;

                    if (this.id == "=") {
                        let res = eval(history);
                        printOutput(res);
                        printHIstory("");
                    }
                    else {
                        history += this.id;
                        printHIstory(history);
                        printOutput("");
                    }
                }
                break;
        }
    })
}

const numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        let output = reverseNumberFormat(getOutput());
        console.log(output);
        if (output != NaN) {
            output += this.id;
            printOutput(output);
        }
    });
}


// For Darkmode
document.getElementById("toggle-icon").onclick = function () {
    document.body.classList.toggle("dark-theme");
    document.getElementById("toggle-icon").src =
        (document.body.classList.contains("dark-theme")) ?
            "img/sun.png" :
            "img/moon.png";
}

let play = true;
let count = 1;
document.querySelector("#mute").addEventListener('click', function () {
    if (count % 2) {
        play = false;
        mute.innerText = '🔇';
    }
    else {
        play = true;
        mute.innerText = '🔊';
    }
    count++;
});

document.querySelector(".keyboard").addEventListener('click', function () {
    if (play) {
        new Audio("./Audio/calculatorclick.mp3").play();
    }
});

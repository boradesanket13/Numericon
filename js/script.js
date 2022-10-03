function getHistory() {
    return document.getElementById("history-value").innerText;

}
function printHIstory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {

    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormativeNum(num);
    }
}

function getFormativeNum(num) {

    if (num == '-') {
        return "";
    }

    var n = Number(num);
    var value = n.toLocaleString('en');
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

// printOutput("99999");

// alert(reverseNumberFormat( getOutput() ));

var oprators = document.getElementsByClassName("operator");

for (var i = 0; i < oprators.length; i++) {
    oprators[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHIstory("");
            printOutput("");
        }
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();

            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }

            if (output != "" || history != "") {
                output = output === "" ? output : reverseNumberFormat(output);
                history = history + output;

                if (this.id == "=") {
                    var res = eval(history);
                    printOutput(res);
                    printHIstory("");
                }
                else {
                    history = history + this.id;
                    printHIstory(history);
                    printOutput("");
                }
            }
        }
    })
}

var numbers = document.getElementsByClassName("number");

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput());
        console.log(output);
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    });
}


// For Darkmode
var darkmode = document.getElementById("darkmode-icon");

darkmode.onclick = function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        document.getElementsByClassName("container")[0].style.backgroundImage = "url(img/light.jpg)";
        
        darkmode.src = "/img/moon.png";

    }
    else {
        
        document.getElementsByClassName("container")[0].style.backgroundImage = "url(img/dark.jpg)";
        darkmode.src = "/img/sun.png";
    }

}

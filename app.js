const theScreen = document.getElementById("theScreen");
let number1 = 0;
let number2 = 0;
let operation;
let whichNumber = 1;
let del = false;

document.addEventListener('keydown', function(event) {
    console.log(event.key);
    if (event.key === '1') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (theScreen.textContent === "0") {
            theScreen.textContent = 1;
        } else {
            theScreen.textContent += 1;
        }
    }
    if (event.key === '2') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (theScreen.textContent === "0") {
            theScreen.textContent = 2;
        } else {
            theScreen.textContent += 2;
        }
    }
    if (event.key === '3') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (theScreen.textContent === "0") {
            theScreen.textContent = 3;
        } else {
            theScreen.textContent += 3;
        }
    }
    if (event.key === '4') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (theScreen.textContent === "0") {
            theScreen.textContent = 4;
        } else {
            theScreen.textContent += 4;
        }
    }
    if (event.key === '5') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (theScreen.textContent === "0") {
            theScreen.textContent = 5;
        } else {
            theScreen.textContent += 5;
        }
    }
    if (event.key === '6') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (theScreen.textContent === "0") {
            theScreen.textContent = 6;
        } else {
            theScreen.textContent += 6;
        }
    }
    if (event.key === '7') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (theScreen.textContent === "0") {
            theScreen.textContent = 7;
        } else {
            theScreen.textContent += 7;
        }
    }
    if (event.key === '8') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (theScreen.textContent === "0") {
            theScreen.textContent = 8;
        } else {
            theScreen.textContent += 8;
        }
    }
    if (event.key === '9') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (theScreen.textContent === "0") {
            theScreen.textContent = 9;
        } else {
            theScreen.textContent += 9;
        }
    }
    if (event.key === '0') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }
        if (theScreen.textContent === "0") {
            theScreen.textContent = 0;
        } else {
            theScreen.textContent += 0;
        }

    }
    if (event.key === '.') {
        if (del) {
            theScreen.textContent = "0";
            del = false;
        }

        if (!theScreen.textContent.includes(".")) {
            if (!theScreen.textContent.includes(".")) {
                theScreen.textContent += ".";
            }
        }
    }

    if (event.key === "+") {
        plus();
    }

    if (event.key === "-") {
        minus();
    }

    if (event.key === "*") {
        mult();
    }

    if (event.key === "/") {
        div();
    }

    if (event.key === "=") {
        equal();
    }
    if (event.key === "Enter") {
        equal();
    }
    if (event.key === "Backspace") {
        reset();
    }

});


document.getElementById("one").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (theScreen.textContent === "0") {
        theScreen.textContent = 1;
    } else {
        theScreen.textContent += 1;
    }
});
document.getElementById("tow").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (theScreen.textContent === "0") {
        theScreen.textContent = 2;
    } else {
        theScreen.textContent += 2;
    }
});

document.getElementById("three").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (theScreen.textContent === "0") {
        theScreen.textContent = 3;
    } else {
        theScreen.textContent += 3;
    }
});
document.getElementById("four").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (theScreen.textContent === "0") {
        theScreen.textContent = 4;
    } else {
        theScreen.textContent += 4;
    }
});
document.getElementById("five").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (theScreen.textContent === "0") {
        theScreen.textContent = 5;
    } else {
        theScreen.textContent += 5;
    }
});
document.getElementById("six").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (theScreen.textContent === "0") {
        theScreen.textContent = 6;
    } else {
        theScreen.textContent += 6;
    }
});
document.getElementById("seven").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (theScreen.textContent === "0") {
        theScreen.textContent = 7;
    } else {
        theScreen.textContent += 7;
    }
});
document.getElementById("eight").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (theScreen.textContent === "0") {
        theScreen.textContent = 8;
    } else {
        theScreen.textContent += 8;
    }
});
document.getElementById("nine").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (theScreen.textContent === "0") {
        theScreen.textContent = 9;
    } else {
        theScreen.textContent += 9;
    }
});
document.getElementById("zero").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (theScreen.textContent === "0") {
        theScreen.textContent = 0;
    } else {
        theScreen.textContent += 0;
    }
});
document.getElementById("dot").addEventListener("click", event => {
    if (del) {
        theScreen.textContent = "0";
        del = false;
    }
    if (!theScreen.textContent.includes(".")) {
        theScreen.textContent += ".";
    }
});

document.getElementById("reset").addEventListener("click", event => {
    reset();
});


//---------------------------the Operation-------------------------------

document.getElementById("plus").addEventListener("click", event => {
    plus();
});

document.getElementById("minus").addEventListener("click", event => {
    minus();
});

document.getElementById("mult").addEventListener("click", event => {
    mult();
});

document.getElementById("div").addEventListener("click", event => {
    div();
});

document.getElementById("equal").addEventListener("click", event => {
    equal();
});


function equation(num1, op, num2) {

    console.log(num1, op, num2);
    switch (op) {
        case '+':
            {
                return num1 + num2;
            }
        case '-':
            {
                return num1 - num2;
            }
        case 'X':
            {
                return num1 * num2;
            }
        case '/':
            {
                if (num2 === 0) return "Can't divide on '0'";
                return num1 / num2;
            }
    }
}

function plus() {
    let theScreenNumber = parseFloat(theScreen.textContent);


    if (whichNumber === 2) {
        number1 = equation(number1, op, theScreenNumber)
        op = "+";
    } else {
        number1 = theScreenNumber;
        op = "+";
        whichNumber = 2;
    }

    theScreen.textContent = "0";
    del = false;
    77
}

function minus() {
    let theScreenNumber = parseFloat(theScreen.textContent);

    if (whichNumber === 2) {
        number1 = equation(number1, op, theScreenNumber)
        op = "-";
    } else {
        number1 = theScreenNumber;
        op = "-";
        whichNumber = 2;
    }

    theScreen.textContent = "0";
    del = false;
}

function mult() {
    let theScreenNumber = parseFloat(theScreen.textContent);

    if (whichNumber === 2) {
        number1 = equation(number1, op, theScreenNumber);
        op = "X";
    } else {
        number1 = theScreenNumber;
        op = "X";
        whichNumber = 2;
    }

    theScreen.textContent = "0";
    del = false;
}

function div() {
    let theScreenNumber = parseFloat(theScreen.textContent);

    if (whichNumber === 2) {
        number1 = equation(number1, op, theScreenNumber)
        op = "/";
    } else {
        number1 = theScreenNumber
        op = "/";
        whichNumber = 2;
    }

    theScreen.textContent = "0";
    del = false;
}

function equal() {
    if (whichNumber != 1) {
        let theScreenNumber = parseFloat(theScreen.textContent);
        number2 = theScreenNumber;
        theScreen.textContent = equation(number1, op, number2);
        whichNumber = 1;
        number1 = 0;
        number2 = 0;
        del = true;

    }

}

function reset() {
    theScreen.textContent = "0";
    del = false;
    whichNumber = 1;
    number1 = 0;
    number2 = 0;
}
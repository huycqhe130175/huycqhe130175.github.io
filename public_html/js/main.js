function display(val)
{
    if (document.getElementById("screen").value === 'undefined' || document.getElementById("screen").value === 'NaN' ||
            document.getElementById("screen").value === 'Infinity') {
        clr();
    }
    document.getElementById("screen").value += val;
}

function keyboard(event) {
    if (document.getElementById("screen").value === 'undefined' || document.getElementById("screen").value === 'NaN' ||
            document.getElementById("screen").value === 'Infinity') {
        clr();
    }
    if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' ||
            event.key === '7' || event.key === '8' || event.key === '9' || event.key === '0' || event.key === '+' || event.key === '-' ||
            event.key === '*' || event.key === '/' || event.key === '(' || event.key === ')' || event.key === '.') {
        document.getElementById("screen").value += event.key;
    } else if (event.key === 'c') {
        clr();
    } else if (event.key === 'Enter' || event.key === '=') {
        event.preventDefault();
        result();
    } else if (event.key === 'Backspace') {
        del();
    }
}

function result()
{
    let x = document.getElementById("screen").value;
    let y = eval(x);
    document.getElementById("screen").value = y;
}

function clr()
{
    document.getElementById("screen").value = "";
}

function del() {
    if (document.getElementById("screen").value === 'undefined' || document.getElementById("screen").value === 'NaN' ||
            document.getElementById("screen").value === 'Infinity') {
        clr();
    } else {
        let myString = document.getElementById("screen").value;
        let result = myString.slice(0, -1);
        document.getElementById("screen").value = result;
    }
}

window.onload = function () {
    document.onkeydown = keyboard;
};
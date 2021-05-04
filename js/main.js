var items = ["L", "E", "X", "I", "C", "O", "N"];

function lexiconRotation() {
    items.unshift(items.pop());
    Helper.setValue("rotator", items.join(""));
}

function start() {
    resetFields();
    Helper.setValue("rotator", items.join(""));
    let timer = setInterval(() => {
        lexiconRotation();
    }, 3000);
}
function resetFields() {
    let items = document.getElementsByTagName('input');

    for (i = 0; i < items.length; i++) {
        items[i].value = "";
    }
    Helper.setValue("closeTo100", "");
    daysToXmas();
}

function randomInt(id) {
    let randomNumber = Math.floor(Math.random() * 10);

    let tmp = Helper.getValue(id);
    document.getElementById(id).style.textAlign = "center";
    if (randomNumber == tmp) {
        Helper.setValue(id, "Good Work");
    }
    else {
        Helper.setValue(id, "Not matched");
    }

    let t1 = setTimeout(() => {
        Helper.setValue(id, "");
        Helper.focus(id);
        document.getElementById(id).style.textAlign = "center";
    }, 2000);
}

function daysToXmas() {
    let today = new Date();
    let xmas = new Date('December 24 ' + today.getFullYear());

    let diff = (Date.parse(xmas) - Date.parse(today)) / 1000 / 60 / 60 / 24;
    Helper.setValue("xMasDays", Math.floor(diff).toString() + " days left.");
}

function itemFocus(tag) {
    let align = "right";

    if (tag == "pyIsIt") {
        align = "left";
    }
    else if (tag == "ran-int") {
        align = "right";
    }
    else {
        align = "left";
    }

    document.getElementById(tag).style.textAlign = align;
}

function pyText(tag) {
    const str = Helper.getValue(tag);
    let tmp = str.slice(0, 2);

    if (tmp == "Py") {
        Helper.setValue(tag, str);
    } else {
        Helper.setValue(tag, "Py" + str);
    }
    document.getElementById(tag).style.textAlign = "center";
}

function century(data) {
    let num1 = Helper.getValue("num1");
    let num2 = Helper.getValue("num2");
    let ok = num1 == num2 ? true : false;
    let res = "";

    if (ok) {
        res = "The numbers are equal.";
    }
    else if (!ok && Math.abs(100 - num1) > Math.abs(100 - num2)) {
        res = `The second number ${num2} is closer to 100.`;
    }
    else {
        res = `The first number ${num1} is closer to 100.`;
    }

    Helper.setValue("closeTo100", res);
}
var blurBtn = document.getElementById("blurBtn");
var themeBtn = document.getElementById("themeBtn");

var btnEn = document.getElementById("en");
var btnUa = document.getElementById("ua");
var btnRu = document.getElementById("ru");
var btns = [btnEn, btnRu, btnUa];

function themeActivator() {
    // Активация темы
    var darkT = localStorage["theme"];
    if (darkT != null) {
        document.body.classList.toggle('dark');
    }
}

function btnActivator() {
    /*Проверка активирована ли кнопка фильтра*/
    var blur = localStorage["blurBtnActivated"];
    if (blur == null) {
        blurBtn.checked = false;
    }
    else {
        blurBtn.checked = true;
    }
    /*Проверка активирована ли кнопка темы*/
    var darkT = localStorage["theme"];
    if (darkT == null) {
        themeBtn.checked = false;
    }
    else {
        themeBtn.checked = true;
    }
    /*Проверка кнопок языка*/
    var lang = JSON.parse(localStorage.getItem('langs'))
    if (lang == null) {
        btnUa.style.backgroundColor = "#677b90";
        btnUa.style.color = "#a2a0a0";
    } else {
        btns.forEach(function (element) {
            if (element.id == lang) {
                element.style.backgroundColor = "#677b90";
                element.style.color = "#a2a0a0";
            }
        });
    }
}

function blurControl() {
    /*Управление фильтром*/
    var blur = localStorage["blurBtnActivated"];
    if (blur == null) {
        localStorage["blurBtnActivated"] = "true";
    }
    else {
        delete localStorage["blurBtnActivated"];
    }
}

function themeControl() {
    //Управление темой
    var darkT = localStorage["theme"];
    if (darkT == null) {
        localStorage["theme"] = "dark";
        document.body.classList.toggle('dark');
    }
    else {
        delete localStorage["theme"];
        document.body.classList.remove('dark');
    }
}
//Деактивируем кнопки после нажатия
function dis(val) {
    btns.forEach(function (element) {
        if (element.id == val) {
            element.style.backgroundColor = "#677b90";
            element.style.color = "#a2a0a0";
        } else {
            element.style.backgroundColor = "#79bbff";
            element.style.color = "#ffffff";
        }
    });
}





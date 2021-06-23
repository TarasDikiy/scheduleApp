var content = document.getElementById('content');
var menu = document.getElementById('menuConteiner');
var startingX;
var isOpen = false;

//Свайп
function contentHandleTouchStart(evt) {
    startingX = evt.touches[0].clientX;
    console.log("startingPoint = " + startingX);
}

function contentHandleTouchMove(evt) {
    var touch = evt.touches[0];
    var alpha = 0.3;
    var change = (startingX - touch.clientX) * alpha;
        
    if (change > 0) {
        return;
    }
    var maxLeft = 0;
    if ((-100 - change) > maxLeft) {
        menu.style.left = maxLeft + '%';
    } else {
        menu.style.left = (-100 - change) + '%';
    }
    evt.preventDefault();
}

function contentHandleTouchEnd(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var treshold = screen.width / 2;

    if (-change < treshold) {
        menu.style.left = -100 + '%';

    } else {
        menu.style.left = 0 + '%';
        isOpen = true;
        addFilter();
        console.log(isOpen);
    }
}

function menuConteinerHandleTouchStart(evt) {
    startingX = evt.touches[0].clientX;
}

function menuConteinerHandleTouchMove(evt) {
    var touch = evt.touches[0];
    var alpha = 0.3;
    var change = (touch.clientX - startingX) * alpha;
        
    if (change > 0) {
        return;
    }

    var minLeft = -100;

    if (change < minLeft) {
        menu.style.left = minLeft + '%';
    } else {
        menu.style.left = (change) + '%';
    }
}

function menuConteinerTouchEnd(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var treshold = screen.width / 4;

    if (-change < treshold) {
        menu.style.left = 0 + '%';

    } else {
        menu.style.left = -100 + '%';
        isOpen = false;
        addFilter();
        console.log(isOpen);
    }
}
//Кнопки
function openMenu() {
    menu.style.left = 0 + '%';
    isOpen = true;
    addFilter();
}
function closeMenu() {
    menu.style.left = -100 + '%';
    isOpen = false;
    addFilter();
}

function addFilter() {
    
    var blur = localStorage["blurBtnActivated"];
    if (blur == null) {
        return;
    }
    else {
        if (isOpen) {
            content.style.filter = "blur(5px)";
        }
        else {
            content.style.filter = "none";
        }
    }
}


var firstWeek = document.getElementById("firstWeek");
var secondWeek = document.getElementById("secondWeek");

var firstName = document.getElementById("firstWeekName");
var secondName = document.getElementById("secondWeekName");

var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");

var nowOpen = 1;

function goPrev() {
    secondWeek.style.display = "none";
    secondName.style.display = "none";
    firstWeek.style.display = "block";
    firstName.style.display = "block";
    rightBtn.style.fill = "white";
    leftBtn.style.fill = "grey";
}

function goNext() {
    firstWeek.style.display = "none";
    firstName.style.display = "none";
    secondWeek.style.display = "block";
    secondName.style.display = "block";
    leftBtn.style.fill = "white";
    rightBtn.style.fill = "grey";


}

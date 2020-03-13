const defaultHeight = "400px"
const openedHeight = "100%"
const readLess = `<svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 15.5833L16.2237 3.10933e-07H17.7763L34 15.5833L32.4863 17L17 4.47368L1.5137 17L0 15.5833Z" fill="#ffffff"/>
</svg>Read less`
const readMore = `<svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.0771484 1.7592L16.2271 17.9092H17.7726L33.9226 1.7592L32.4158 0.291016L16.9999 13.2728L1.58397 0.291016L0.0771484 1.7592Z" fill="#ffffff" /></svg>Read more`



var buttonOne = document.getElementById("button-one")
var acc = document.getElementsByClassName("corona-info__sections__one-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonOne.innerHTML = readLess

        var panel = document.getElementById("content-one")
        if (panel.style.height === openedHeight) {
            buttonOne.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}


var buttonTwo = document.getElementById("button-two")
var acc = document.getElementsByClassName("corona-info__sections__two-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonTwo.innerHTML = readLess

        var panel = document.getElementById("content-two")
        if (panel.style.height === openedHeight) {
            buttonTwo.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}

var buttonThree = document.getElementById("button-three")
var acc = document.getElementsByClassName("corona-info__sections__three-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonThree.innerHTML = readLess

        var panel = document.getElementById("content-three")
        if (panel.style.height === openedHeight) {
            buttonThree.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}

var buttonFour = document.getElementById("button-four")
var acc = document.getElementsByClassName("corona-info__sections__four-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonFour.innerHTML = readLess

        var panel = document.getElementById("content-four")
        if (panel.style.height === openedHeight) {
            buttonFour.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}

var buttonFive = document.getElementById("button-five")
var acc = document.getElementsByClassName("corona-info__sections__five-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonFive.innerHTML = readLess

        var panel = document.getElementById("content-five")
        if (panel.style.height === openedHeight) {
            buttonFive.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}

var buttonSix = document.getElementById("button-six")
var acc = document.getElementsByClassName("corona-info__sections__six-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonSix.innerHTML = readLess

        var panel = document.getElementById("content-six")
        if (panel.style.height === openedHeight) {
            buttonSix.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}

var buttonSeven = document.getElementById("button-seven")
var acc = document.getElementsByClassName("corona-info__sections__seven-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonSeven.innerHTML = readLess

        var panel = document.getElementById("content-seven")
        if (panel.style.height === openedHeight) {
            buttonSeven.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}

var buttonEight = document.getElementById("button-eight")
var acc = document.getElementsByClassName("corona-info__sections__eight-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonEight.innerHTML = readLess

        var panel = document.getElementById("content-eight")
        if (panel.style.height === openedHeight) {
            buttonEight.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}


var buttonNine = document.getElementById("button-nine")
var acc = document.getElementsByClassName("corona-info__sections__nine-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonNine.innerHTML = readLess

        var panel = document.getElementById("content-nine")
        if (panel.style.height === openedHeight) {
            buttonNine.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}

var buttonTen = document.getElementById("button-ten")
var acc = document.getElementsByClassName("corona-info__sections__ten-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonTen.innerHTML = readLess

        var panel = document.getElementById("content-ten")
        if (panel.style.height === openedHeight) {
            buttonTen.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}

var buttonEleven = document.getElementById("button-eleven")
var acc = document.getElementsByClassName("corona-info__sections__eleven-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        buttonEleven.innerHTML = readLess

        var panel = document.getElementById("content-eleven")
        if (panel.style.height === openedHeight) {
            buttonEleven.innerHTML = readMore
            panel.style.height = defaultHeight;
        } else {
            panel.style.height = openedHeight;
        }
    });
}
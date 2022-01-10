const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");

btnHamburger.addEventListener("click", function() {
    console.log("click hambuger");

    if (header.classList.contains("open")) { //close the hamburger menu
        body.classList.remove("noScroll");
        header.classList.remove("open");
        fadeElems.forEach(function(element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    }
    else {                                   //opens the hamburger menu
        body.classList.add("noScroll");
        header.classList.add("open");
        fadeElems.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    }
});

window.onscroll = function() {fadeNav()};

function fadeNav() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('highlight');
        console.log("OK");
    } else {
        header.classList.remove('highlight');
    }
};
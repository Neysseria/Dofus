// Accordion de la sidebar
var accordion = document.getElementsByClassName("accordion");
var sidebar = document.querySelector(".sidebar");
var accordionStuff = document.getElementsByClassName("accordion-stuff");

for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            sidebar.classList.remove("scroller");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            sidebar.classList.add("scroller");
        } 
    });
}

// Faire apparaitre/disparaitre la sidebar au clic + décaler la section stuff sur la droite qd sidebar active

var burgerMenu = function (){
    var burger = document.querySelector(".burger");
    var sidebar = document.querySelector(".sidebar");
    var containerAllStuff = document.querySelector(".container-all-stuff");

    burger.addEventListener("click", function(){
        sidebar.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        containerAllStuff.classList.toggle("marginLeft");
    })
}
burgerMenu();

// Accordion stuff section
for (var i = 0; i < accordionStuff.length; i++) {
    accordionStuff[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}
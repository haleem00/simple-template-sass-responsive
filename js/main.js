// navbar menu

let butt = document.querySelector(".check-i"),

mynavlink = document.querySelector(".menu-nav"),

mylogin = document.querySelector(".login"),

icon = document.querySelector(".check-i i");



butt.onclick = function() {

    mynavlink.classList.toggle("open");
    mylogin.classList.toggle("open");

    
    if (mynavlink.classList.contains("open")) {
        icon.classList.remove("fa-list")
        icon.classList.add("fa-times")
    } else {
        icon.classList.add("fa-list")
        icon.classList.remove("fa-times")
    }
};


// scroll button to scroll top automaticly and smothly

let mybutt = document.getElementById("goup");


document.addEventListener("scroll", (e) => {

    if(window.pageYOffset >= 500) {

        mybutt.style.display = "block"
    
        mybutt.onclick = function () {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
        } else {
            mybutt.style.display = "none";
        }
    
})







let mobileMenu = document.querySelector(".mobile-menu");
let screen = document.querySelector(".screen");
let hamburgerMenu = document.querySelector(".nav-expander");

// click on nav-expander button
// slide mobile-menu into view
hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.add("display-menu");
    //document.getElementsByClassName("mobile-menu").style.transform = "translateX(-100%)";
    screen.classList.add("show");
})

// click on nav-close button
// slide mobile-menu out of view
document.querySelector(".nav-close").addEventListener("click", () => {
    screen.classList.remove("show");
    mobileMenu.classList.remove("display-menu");
})

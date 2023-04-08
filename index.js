// click on nav-expander button
// slide mobile-menu into view
document.querySelector(".nav-expander").addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.add("display-menu");
    document.querySelector(".screen").classList.add("show");
})

// click on nav-close button
// slide mobile-menu out of view
document.querySelector(".nav-close").addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.remove("display-menu");
    document.querySelector(".screen").classList.remove("show");
})

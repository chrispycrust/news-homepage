// click on nav-expander button
// slide nav-expanded into view
document.querySelector(".nav-expander").addEventListener("click", () => {
    document.querySelector(".nav-expanded").classList.add("display");
    document.querySelector(".screen").classList.add("show");
})

// click on nav-close button
// slide nav-expanded out of view
document.querySelector(".nav-close").addEventListener("click", () => {
    document.querySelector(".nav-expanded").classList.remove("display");
    document.querySelector(".content").classList.remove("opacity");
    document.querySelector(".screen").classList.remove("show");
})

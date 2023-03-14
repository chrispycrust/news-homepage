// click on nav-expander button
// slide nav-expanded into view
document.querySelector(".nav-expander").addEventListener("click", () => {
    document.querySelector(".nav-expanded").classList.add("display");
})

// click on nav-close button
// slide nav-expanded out of view
document.querySelector(".nav-close").addEventListener("click", () => {
    document.querySelector(".nav-expanded").classList.remove("display");
})
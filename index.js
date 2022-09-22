const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupcontainerEl = document.querySelector(".popup-container");
const closeiconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupcontainerEl.classList.remove("active");
});

closeiconEl.addEventListener("click", () => {
    popupcontainerEl.classList.add("active");
    containerEl.classList.remove("active");
})
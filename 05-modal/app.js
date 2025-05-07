const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
    document.querySelector(".modal-container").classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
    document.querySelector(".modal-container").classList.add("hide");
});
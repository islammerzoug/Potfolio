const images = document.querySelectorAll(".slider img");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    images[currentIndex].classList.remove("active");

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }

    images[currentIndex].classList.add("active");
});
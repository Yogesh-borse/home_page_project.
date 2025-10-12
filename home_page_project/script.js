document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    document.getElementById("next").addEventListener("click", function () {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    });

    document.getElementById("prev").addEventListener("click", function () {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Existing weather script...

    // Slider functionality
    const sliderImages = document.querySelectorAll(".slider-img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentSlide = 0;

    // Function to update the visible slide
    function updateSlide(index) {
        sliderImages.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    // Show the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        updateSlide(currentSlide);
    }

    // Show the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
        updateSlide(currentSlide);
    }

    // Add event listeners for buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Initialize the slider
    updateSlide(currentSlide);
});

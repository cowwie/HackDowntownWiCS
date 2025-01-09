document.addEventListener("DOMContentLoaded", () => {
    // Countdown Timer Code
    const countdownDate = new Date("2025-02-22T00:00:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const timerElement = document.getElementById("timer");
        if (timerElement) {
            timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            if (timerElement) {
                timerElement.textContent = "EXPIRED";
            }
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    // Slideshow Code
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function updateSlides() {
        const slideshow = document.querySelector(".slides");
        const slideWidth = document.querySelector(".slideshow-container").offsetWidth;
        slideshow.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        updateSlides();
    }

    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));

    setInterval(() => {
        changeSlide(1);
    }, 5000);

    updateSlides();
});

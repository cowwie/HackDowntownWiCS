// Set the target date to February 22, 2025, at midnight (local time)
const countdownDate = new Date("2025-02-22T00:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in an element with the ID "timer"
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // If the countdown is over, display "EXPIRED"
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        if (timerElement) {
            timerElement.textContent = "EXPIRED";
        }
    }
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);

// Initialize the timer immediately
updateTimer();
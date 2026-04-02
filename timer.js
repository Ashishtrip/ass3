// Task 4: Countdown Timer (External JS)
// One hour in seconds (60 minutes * 60 seconds)
const ONE_HOUR = 60 * 60;

let timeRemaining = ONE_HOUR;
let timerInterval = null;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const message = document.getElementById('message');

// Format time as MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update the display
function updateDisplay() {
    display.textContent = formatTime(timeRemaining);
}

// Start the timer - Disables start button while running
function startTimer() {
    if (isRunning) return;
    
    if (timeRemaining <= 0) {
        showMessage("Timer already finished! Reset to start again.");
        return;
    }

    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    message.textContent = "";
    display.classList.remove('ended');

    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateDisplay();
        } else {
            // Timer reached zero
            clearInterval(timerInterval);
            isRunning = false;
            display.classList.add('ended');
            showMessage("Time's up! Countdown complete.");
            startBtn.disabled = false;
            pauseBtn.disabled = true;
        }
    }, 1000);
}

// Pause the timer - Persistent feedback via status change
function pauseTimer() {
    if (!isRunning) return;
    
    clearInterval(timerInterval);
    isRunning = false;
    startBtn.disabled = false;  // Re-enable start after pause for resume
    pauseBtn.disabled = true;
    message.textContent = "Timer paused - Click Start to resume";
    message.classList.add('show');  // Make persistent, no auto-hide
}

// Reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeRemaining = ONE_HOUR;
    updateDisplay();
    display.classList.remove('ended');
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    message.textContent = "";
    message.classList.remove('show');
}

// Show message (persistent for pause)
function showMessage(msg) {
    message.textContent = msg;
    message.classList.add('show');
}

// Initialize display on load
document.addEventListener('DOMContentLoaded', updateDisplay);

// Make functions global for onclick handlers
window.startTimer = startTimer;
window.pauseTimer = pauseTimer;
window.resetTimer = resetTimer;


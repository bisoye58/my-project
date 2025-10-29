// Selecting DOM elements
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timer = null;
let seconds = 0;

// Format time as HH:MM:SS
function formatTime(sec) {
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = sec % 60;

  return (
    String(hrs).padStart(2, "0") +
    ":" +
    String(mins).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0")
  );
}

// Start the timer
function startTimer() {
  if (timer !== null) return; // Prevent multiple intervals

  timer = setInterval(() => {
    seconds++;
    display.textContent = formatTime(seconds);
  }, 1000);
}

// Stop the timer
function stopTimer() {
  clearInterval(timer);
  timer = null;
}

// Reset the timer
function resetTimer() {
  stopTimer();
  seconds = 0;
  display.textContent = "00:00:00";
}

// Attach event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

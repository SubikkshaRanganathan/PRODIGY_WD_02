let startTime;
let elapsedTime = 0;
let timerInterval;
let lapCounter=1;
function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    document.getElementById('startBtn').disabled = true;
}

function pauseStopwatch() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').disabled = false;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').disabled = false;
    elapsedTime = 0;
    //updateDisplay();
    document.getElementById('display').innerHTML = '00:00:00';
    lapCounter=1;
    document.getElementById('laps').innerHTML = '';
}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById('display').innerText = formattedTime;
}

function formatTime(milliseconds) {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}

function recordLap() {
    const currentTime = Date.now();
    const lapTime = currentTime - startTime;
    const formattedLapTime = formatTime(lapTime);
    
    // Create a new list item for the lap time and append it to the laps list
    const lapListItem = document.createElement('li');
    lapListItem.innerText = `Lap ${lapCounter}: ${formattedLapTime}`;
    document.getElementById('laps').appendChild(lapListItem);
    
    lapCounter++; // Increment lap counter
}
//your JS code here. If requi

function updateTime() {
    const timer = document.getElementById("timer");
    timer.textContent = new Date().toLocaleTimeString();
}

// Update immediately
updateTime();

// Update every second
setInterval(updateTime, 1000);
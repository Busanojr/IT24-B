const logButton = document.getElementById('logButton');
const resetButton = document.getElementById('resetButton');
const logsDiv = document.getElementById('logs');
const totalDiv = document.getElementById('total');

let logCount = 0;

logButton.addEventListener('click', () => {
    const date = new Date().toLocaleString();
    const newLog = `Log #${++logCount}: ${date}`;
    const logEntry = document.createElement('div');
    logEntry.textContent = newLog;
    logEntry.className = 'logEntry';
    logsDiv.appendChild(logEntry);

    totalDiv.textContent = `Total Logs: ${logCount}`;
});

resetButton.addEventListener('click', () => {
    logsDiv.innerHTML = 'Logs:';
    logCount = 0;
    totalDiv.textContent = `Total Logs: ${logCount}`;
});

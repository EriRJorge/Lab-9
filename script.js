document.addEventListener("DOMContentLoaded", function() {
    const addLogButton = document.getElementById("add-log");
    const calorieCount = document.getElementById("calorie-count");
    const logList = document.getElementById("log-list");

    addLogButton.addEventListener("click", function() {
        const logName = document.getElementById("log-name").value;
        const calorieAmount = parseFloat(document.getElementById("calorie-amount").value);
        const logType = document.getElementById("log-type").value;

        if (logName && !isNaN(calorieAmount)) {
            const logEntry = document.createElement("div");
            logEntry.classList.add("log-entry", logType);
            logEntry.innerHTML = `<span>${logName}</span> <span>${calorieAmount}</span>`;

            logList.appendChild(logEntry);

            calorieCount.textContent = (parseFloat(calorieCount.textContent) + (logType === "food" ? calorieAmount : -calorieAmount)).toFixed(2);

            document.getElementById("log-name").value = "";
            document.getElementById("calorie-amount").value = "";
        }
    });
});
 
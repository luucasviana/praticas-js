function updateClock() {
    const hoursElement = document.querySelector(".hours");
    const minutesElement = document.querySelector(".minutes");
    const secondsElement = document.querySelector(".seconds");
    // const millisecondsElement = document.querySelector(".milliseconds");

    const now = new Date()

    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")
    // const milliseconds = now.getMilliseconds().toString().padStart(3, "0")

    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds
    // millisecondsElement.textContent = milliseconds
}

setInterval(updateClock)
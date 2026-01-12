function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const smoothSeconds = seconds + milliseconds / 1000;

    const secondDeg = smoothSeconds * 6;
    const minuteDeg = minutes * 6 + smoothSeconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    document.getElementById("second").style.transform =
        `rotate(${secondDeg}deg)`;

    document.getElementById("minute").style.transform =
        `rotate(${minuteDeg}deg)`;

    document.getElementById("hour").style.transform =
        `rotate(${hourDeg}deg)`;

    requestAnimationFrame(updateClock);
}

requestAnimationFrame(updateClock);

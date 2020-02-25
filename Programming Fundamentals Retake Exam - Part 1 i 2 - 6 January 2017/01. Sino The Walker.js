function sinoTheWalker(input) {
    let totalTime = parseInt(input[1]) * parseInt(input[2]) +
        input[0].split(':')
            .map((el, index) => {
                if (index === 0) return Number(el) * 3600;
                if (index === 1) return Number(el) * 60;
                if (index === 2) return Number(el);
            })
            .reduce((a, b) => (a + b), 0)

    let hoursArriving = Math.floor(totalTime / 3600) % 24;
    let minutesArriving = Math.floor(totalTime % 3600 / 60);
    let secondsArriving = totalTime % 60;

    console.log(`Time Arrival: ${String(hoursArriving).padStart(2, '0')}:${String(minutesArriving).padStart(2, '0')}:${String(secondsArriving).padStart(2, '0')}`);
}
sinoTheWalker(['12:30:30', '90', '1']);
sinoTheWalker(['23:49:13', '5424', '2', ''])
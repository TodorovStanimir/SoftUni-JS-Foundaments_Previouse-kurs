function dayOfWeek(day) {
    let dayWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day >= 1 && day <= 7) {
        console.log(dayWeek[day - 1]);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(2);
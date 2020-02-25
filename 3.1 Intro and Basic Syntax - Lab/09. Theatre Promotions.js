function solve(typeDay, age) {
    let price = 0;
    let isAgeNotInRage = false;
    if (typeDay == 'Weekday') {
        if (age >= 0 && age <= 18) {
            price = 12;
        } else if (age > 18 && age <= 64) {
            price = 18;
        } else if (age >= 64 && age <= 122) {
            price = 12;
        } else {
            isAgeNotInRage = true;
        }
    } else if (typeDay == 'Weekend') {
        if (age >= 0 && age <= 18) {
            price = 15;
        } else if (age > 18 && age <= 64) {
            price = 20;
        } else if (age >= 64 && age <= 122) {
            price = 15;
        } else {
            isAgeNotInRage = true;
        }
    } else if (typeDay == 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = 5;
        } else if (age > 18 && age <= 64) {
            price = 12;
        } else if (age >= 64 && age <= 122) {
            price = 10;
        } else {
            isAgeNotInRage = true;
        }
    }
    if (isAgeNotInRage) {
        console.log('Error!');
    } else {
        console.log(`${price}$`);
    }
}
solve('Weekday', 42)
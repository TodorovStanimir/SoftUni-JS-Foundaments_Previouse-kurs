function perfectNumber(num) {
    let i = 1;
    let isPerfectNumber = true;
    if (num % 2 === 0) {
        num1 = num / 2;
        while (num1 > 0) {
            if (num % i === 0) {
                num1 -= i;
                i++;
            } else {
                i++;
            }
        }
        if (num1 !== 0) {
            isPerfectNumber = false;
        }
    } else {
        isPerfectNumber = false;
    }
    if (isPerfectNumber) {
        console.log('We have a perfect number!');
    } else {
        console.log('It’s not so perfect.');
    }
}
perfectNumber(28);
perfectNumber(6);
perfectNumber(1236498);
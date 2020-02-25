function evenAndOddSutraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    let difference = sumEven - sumOdd;
    console.log(difference);
}
evenAndOddSutraction(['1', '2', '3', '4', '5', '6']);
evenAndOddSutraction(['3', '5', '7', '9']);
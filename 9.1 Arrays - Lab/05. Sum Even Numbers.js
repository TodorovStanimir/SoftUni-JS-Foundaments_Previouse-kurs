function sumEvenNumbers(arr) {
    let numarr = [];
    let sum = 0;
    for (let num = 0; num < arr.length; num++) {
        numarr[num] = Number(arr[num]);
    }
    for (let index of numarr) {
        if (index % 2 === 0) {
            sum += index;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])
function maxNumber(arr) {
    let arr1 = [];
    let isNotTopInteger = false;
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let y = i + 1; y <= arr.length - 1; y++) {
            if (arr[i] <= arr[y]) {
                isNotTopInteger = true;
                break;
            }
        }
        if (!isNotTopInteger) {
            arr1.push(arr[i]);
        }
        isNotTopInteger = false;
    }
    console.log(arr1.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
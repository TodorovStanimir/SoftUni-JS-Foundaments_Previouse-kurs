function condenseArrayToNumber(arr) {
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i] + arr[i + 1];
        }
        arr.splice(arr.length - 1, 1);
    }
    console.log(Number(arr[0]));
}
condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([1])
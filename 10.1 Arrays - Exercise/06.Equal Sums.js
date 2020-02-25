function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let isEquals = false;
    let index = 0;
    for (let i = 1; i <= arr.length - 1; i++) {
        for (let y = 0; y < i; y++) {
            leftSum += arr[y];
        }
        for (let y = i + 1; y <= arr.length - 1; y++) {
            rightSum += arr[y];
        }
        if (leftSum == rightSum) {
            index = i;
            isEquals = true
            break;
        }
        leftSum = 0;
        rightSum = 0;
    }
    if (isEquals) {
        console.log(index);
    } else {
        if (arr.length === 1) {
            console.log(index);
        } else {
            console.log('no');
        }
    }
}
equalSums([1, 2, 3, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
equalSums([1,2,3])
function arrayRotation(arr, num) {
    let arr1 = []
    let n = num % arr.length;
    arr1 = arr.splice(n, (arr.length - n));
    for (let i of arr) {
        arr1.push(i);
    }
    console.log(arr1.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([2, 4, 15, 31], 5);
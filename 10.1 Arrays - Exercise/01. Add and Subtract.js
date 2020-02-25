function addAndSubstract(arr) {
    let sumOriginalArray = 0;
    let sumModifiedArray = 0;
    for (let index in arr) {
        if (arr[index] % 2 === 0) {
            sumOriginalArray += arr[index];
            arr[index] = arr[index] + Number(index);
            sumModifiedArray += arr[index];
        } else {
            sumOriginalArray += arr[index];
            arr[index] = arr[index] - Number(index);
            sumModifiedArray += arr[index];
        }
    }
    console.log(arr);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}
addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2])
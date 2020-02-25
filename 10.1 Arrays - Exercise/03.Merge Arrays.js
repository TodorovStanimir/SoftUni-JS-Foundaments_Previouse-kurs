function mergeArrays(arr1, arr2) {
    let arr3 = []
    for (let index in arr1) {
        if (index % 2 === 0) {
            arr3[index] = Number(arr1[index]) + Number(arr2[index]);
        } else {
            arr3[index] = arr1[index] + arr2[index];
        }
    }
    console.log(arr3.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
function equalsArrays(arr1, arr2) {
    let differenceIndex = 0;
    let isArr1AndArr2Different = false;
    let sumArr = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sumArr += Number(arr1[i]);
        } else {
            differenceIndex = i;
            isArr1AndArr2Different = true;
            break;
        }
    }
    if (isArr1AndArr2Different) {
        console.log(`Arrays are not identical. Found difference at ${differenceIndex} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sumArr}`);
    }
}
equalsArrays(['10', '20', '30'], ['10', '20', '30']);
equalsArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalsArrays(['1'],['10']);
function maxSequenceOfEqualsElements(arr) {
    let arr1 = String(arr)
    arr1 = arr1.split(' ');
    let currentSequenceOfEqualsElements = [];
    currentSequenceOfEqualsElements[0] = arr1[0];
    let maxSequenceOfEqualsElements = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr1[i + 1]) {
            currentSequenceOfEqualsElements.push(arr1[i + 1])
            if (currentSequenceOfEqualsElements.length > maxSequenceOfEqualsElements.length) {
                maxSequenceOfEqualsElements = currentSequenceOfEqualsElements;
            }
        } else {
            currentSequenceOfEqualsElements = [];
            currentSequenceOfEqualsElements.push(arr1[i + 1]);
        }
    }
    console.log(maxSequenceOfEqualsElements.join(' '));
}
maxSequenceOfEqualsElements(['2 1 1 2 3 3 2 2 2 1']);
maxSequenceOfEqualsElements(['1 1 1 2 3 1 3 3']);
maxSequenceOfEqualsElements(['4 4 4 4']);
maxSequenceOfEqualsElements(['0 1 1 5 2 2 6 3 3']);
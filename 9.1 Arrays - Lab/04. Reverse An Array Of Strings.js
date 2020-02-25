function reverseAnArrayOfStrings(arrOfString) {
    for (let i = 0; i < arrOfString.length / 2; i++) {
        let lowerElement = arrOfString[i];
        arrOfString[i] = arrOfString[arrOfString.length - 1 - i];
        arrOfString[arrOfString.length - 1 - i] = lowerElement;
    }
    console.log(arrOfString.join(' '));
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
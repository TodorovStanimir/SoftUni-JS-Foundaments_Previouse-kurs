function pageQuit1(input) {
    let inputArray = String(input[0]).split('');
    let currArray = [];
    let currArrayCounter = [];
    let currentString = '';
    let newIndex = 0;
    let count = '';
    for (let index = 0; index < inputArray.length; index++) {
        if (48 <= inputArray[index].charCodeAt() && inputArray[index].charCodeAt() <= 57) {
            [newIndex, count] = startNextString(inputArray, index);
        } else {
            currentString += inputArray[index];
            newIndex = index;
        }
        if (newIndex != index || newIndex === inputArray.length - 1) {
            currentString = currentString.toUpperCase();
            currArray.push(currentString);
            currArrayCounter.push(Number(count));
            currentString = '';
            count = ''
            if (newIndex !== inputArray.length - 1) {
                index = newIndex - 1;
            } else {
                break
            }
        }
    }

    for (let i = 0; i < currArray.length; i++) {
        currArray[i] = currArray[i].repeat(currArrayCounter[i]);
    }
    let uniqueSymbols = [...new Set(currArray.join(''))].length;

    console.log(`Unique symbols used: ${uniqueSymbols}`);
    console.log(currArray.join(''));

    function startNextString(inputArray, index) {
        newIndex = index;
        let lastPart = ''
        while (48 <= inputArray[newIndex].charCodeAt() && inputArray[newIndex].charCodeAt() <= 57) {
            lastPart += inputArray[newIndex];
            newIndex++;
            if (newIndex === inputArray.length) {
                newIndex--;
                break;
            }
        }
        return [newIndex, lastPart];
    }
}
pageQuit1(['aSd2&5s@1']);
pageQuit1(['a3']);
pageQuit1(['e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15'])
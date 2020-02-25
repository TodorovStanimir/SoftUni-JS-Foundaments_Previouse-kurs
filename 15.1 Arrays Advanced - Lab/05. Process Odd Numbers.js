function processOddNumbers(arrayOfNumbers) {
    let output=[];
    for (let i=arrayOfNumbers.length-1; i>=0; i--){
        if (i%2!==0){
            let currentItem=2*arrayOfNumbers[i];
            output.push(currentItem);
        }
    }
    console.log(output.join(' '));
}
processOddNumbers([10,15,20,25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
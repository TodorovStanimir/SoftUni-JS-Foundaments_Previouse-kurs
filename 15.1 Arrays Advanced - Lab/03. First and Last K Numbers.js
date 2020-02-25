function firstAndLastKNumbers(input) {
    let kElements=input[0];
    let firstKElements=input.slice(1,kElements+1);
    let lastKElements=input.slice(input.length-kElements,input.length);
    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}
firstAndLastKNumbers([2,7,8,9]);
firstAndLastKNumbers([3,6,7,8,9]);
firstAndLastKNumbers([4,1,2,3,4,5,6]);
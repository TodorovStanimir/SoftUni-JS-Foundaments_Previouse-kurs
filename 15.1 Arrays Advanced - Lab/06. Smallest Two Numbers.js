function smallestTwoNumbers(input) {
input.sort((a,b) => {a - b});
console.log(input.slice(0,2).join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

function smallestTwoNumbers(input) {
    let  array=input.slice();
    let arrayOutput=[];

    smallestNumber();
    smallestNumber();

    function smallestNumber(){
        let output=Number.MAX_SAFE_INTEGER;
        let index=0;
        for (let i=0;i<array.length;i++){
            if (array[i]<output){
                output=array[i];
                index=i;
            }
        }
        array.splice(index,1);
        arrayOutput.push(output);
    }
    console.log(arrayOutput.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

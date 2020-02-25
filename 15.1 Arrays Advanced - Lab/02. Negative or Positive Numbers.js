function negativeOrPositiveNumbers(input) {
let output=[]
    for (let i=0;i<input.length;i++){
        if (input[i]<0){
            output.unshift(input[i]);
        } else {
            output.push(input[i]);
        }
    }
    for (let i=0;i<output.length;i++){
        console.log(output[i])
    }
}
negativeOrPositiveNumbers([3,-2,0,-1])
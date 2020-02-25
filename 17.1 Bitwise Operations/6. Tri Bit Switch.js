// function triBitSwitch(input, p) {
//     let mask = 7 << p;
//     let result = input ^ mask;

//     console.log(result);

// }
// triBitSwitch(1234, 7);
// triBitSwitch(44444, 4);

function triBitSwitch(input, p) {
    let result;
    let currentNumber=input;
    for (let i = p; i < p + 3; i++) {
        let mask = 1 << i;
        result=currentNumber^mask;
        currentNumber=result;
    }
    
    console.log(result);

}
triBitSwitch(1234, 7);
triBitSwitch(44444, 4);
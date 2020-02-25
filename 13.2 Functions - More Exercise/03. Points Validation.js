function pointsValidation(input) {
    
    let result1 = Math.sqrt(Math.abs(input[0] - 0) * Math.abs(input[0] - 0) + Math.abs(input[1] - 0) * Math.abs(input[1] - 0));
    if (result1 === Math.floor(result1)) {
        console.log(`{${input[0]}, ${input[1]}} to {0, 0} is valid`);
    } else {
        console.log(`{${input[0]}, ${input[1]}} to {0, 0} is invalid`);
    }
    let result2 = Math.sqrt(Math.abs(input[2] - 0) * Math.abs(input[2] - 0) + Math.abs(input[3] - 0) * Math.abs(input[3] - 0));
    if (result2 === Math.floor(result2)) {
        console.log(`{${input[2]}, ${input[3]}} to {0, 0} is valid`);
    } else {
        console.log(`{${input[2]}, ${input[3]}} to {0, 0} is invalid`);
    }
    let result3 = Math.sqrt(Math.abs(input[0] - input[2]) * Math.abs(input[0] - input[2]) + Math.abs(input[1] - input[3]) * Math.abs(input[1] - input[3]));
    if (result3 === Math.floor(result3)) {
        console.log(`{${input[0]}, ${input[1]}} to {${input[2]}, ${input[3]}} is valid`);
    } else {
        console.log(`{${input[0]}, ${input[1]}} to {${input[2]}, ${input[3]}} is invalid`);
    }
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);
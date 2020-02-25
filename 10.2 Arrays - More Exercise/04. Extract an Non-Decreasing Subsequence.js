function extractNonDescreasingSubsequence(input) {
    let maxNumber = input[0]
    let output = [];
    output[0] = maxNumber;
    for (let i = 1; i < input.length; i++) {
        if (maxNumber <= input[i]) {
            maxNumber = input[i];
            output.push(maxNumber);
        }
    }
    console.log(output.join(' '));
}
extractNonDescreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractNonDescreasingSubsequence([1, 2, 3, 4]);
extractNonDescreasingSubsequence([20, 3, 2, 15, 6, 1]);
function sortNumbers(num1, num2, num3) {
    let maxNum = Math.max(num1, num2, num3);
    let minNum = Math.min(num1, num2, num3);
    let midNum = num1 + num2 + num3 - maxNum - minNum;
    console.log(maxNum);
    console.log(midNum);
    console.log(minNum);
}
sortNumbers(-5, -1, 2);
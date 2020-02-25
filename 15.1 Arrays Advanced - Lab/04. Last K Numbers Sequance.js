function lastKNumbersSequance(n,k) {
    let output=[1];
    for (let i=1;i<n;i++){
        let startIndex=Math.max(0,i-k);
        let subOutput=output.slice(startIndex);
        let currentElement=subOutput.reduce((a, b) => a+b);
        output.push(currentElement);
    }
    console.log(output.join(' '));
}
lastKNumbersSequance(6,3);
lastKNumbersSequance(8,2);
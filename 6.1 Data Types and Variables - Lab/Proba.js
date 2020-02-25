function PrimePairs(input) {
    let beginingAmountFirsPairs = parseInt(input.shift());
    let beginingAmountSecondPairs = parseInt(input.shift());
    let differenseFirstPairs = parseInt(input.shift());
    let differenseSecondPairs = parseInt(input.shift());
    let isFirstPairsNotPrime = false;
    let isSecondPairsNotPrime = false;

    for (let firstpairs = beginingAmountFirsPairs; firstpairs <= (beginingAmountFirsPairs + differenseFirstPairs); firstpairs++) {
        for (let secondpairs = beginingAmountSecondPairs; secondpairs <= (beginingAmountSecondPairs + differenseSecondPairs); secondpairs++) {
            for (let i = 2; i <= Math.sqrt(firstpairs); i++) {
                if (firstpairs % i == 0) {
                    isFirstPairsNotPrime = true;
                    break;
                }
            }
            for (let y = 2; y <= Math.sqrt(secondpairs); y++) {
                if (secondpairs % y == 0) {
                    isSecondPairsNotPrime = true;
                    break;
                }
            }
            if (!isFirstPairsNotPrime && !isSecondPairsNotPrime) {
                console.log(`${firstpairs}${secondpairs}`);
            }
            isFirstPairsNotPrime = false;
            isSecondPairsNotPrime = false;
        }

    }
}
PrimePairs([10,30,9,6])
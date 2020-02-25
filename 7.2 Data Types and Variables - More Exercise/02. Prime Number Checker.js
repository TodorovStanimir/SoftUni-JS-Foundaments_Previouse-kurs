function PrimeNumberChecker(arg) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(arg); i++) {
        if (arg % i == 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime)
}
PrimeNumberChecker(8)
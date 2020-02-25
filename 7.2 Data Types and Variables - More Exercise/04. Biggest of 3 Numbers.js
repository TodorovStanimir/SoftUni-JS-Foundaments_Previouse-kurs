function Biggestof3Numbers(arg1, arg2, arg3) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    if (arg1 >= arg2) {
        biggestNumber = arg1;
    } else if (arg1 < arg2) {
        biggestNumber = arg2;
    }
    if (biggestNumber <= arg3) {
        biggestNumber = arg3;
    }
    console.log(biggestNumber);
}
Biggestof3Numbers(-2, 7, 3)
Biggestof3Numbers(130, 5, 99)
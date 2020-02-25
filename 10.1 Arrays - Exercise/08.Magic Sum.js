function magicSum(arr) {
    let num = Number(arr.pop());
    arr1 = String(arr).split(' ');

    for (let i = 0; i < arr1.length; i++) {
        for (let y = 1 + i; y < arr1.length; y++) {
            if ((Number(arr1[i]) + Number(arr1[y])) === num) {
                console.log(`${arr1[i]} ${arr1[y]}`);
            }
        }
    }
}
magicSum(['1 7 6 2 19 23', '8']);
magicSum(['14 20 60 13 7 19 8', '27']);
magicSum(['1 2 3 4 5 6', '6'])
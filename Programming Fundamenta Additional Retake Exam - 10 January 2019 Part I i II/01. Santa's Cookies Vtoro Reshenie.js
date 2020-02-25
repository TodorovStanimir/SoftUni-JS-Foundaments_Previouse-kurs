function santasCookies(input) {
    let numberBatchs = parseInt(input.shift());
    let totalBoxes = 0;

    for (let i = 1; i <= numberBatchs; i++) {
        let flour = parseInt(input.shift());
        let sugar = parseInt(input.shift());
        let cocoa = parseInt(input.shift());

        let totalCookies = (140 + 10 + 20) * Math.min(Math.floor(flour / 140), Math.floor(sugar / 20), Math.floor(cocoa / 10)) / 25;

        if (totalCookies) {
            console.log(`Boxes of cookies: ${Math.floor(totalCookies/5)}`)
            totalBoxes+=Math.floor(totalCookies/5);
        } else {
            console.log('Ingredients are not enough for a box of cookies.')
        }
    }
    console.log(`Total boxes: ${totalBoxes}`);
    
}
santasCookies([2, 200, 300, 500, 100, 200, 50]);
santasCookies([1, 1400, 200, 100])
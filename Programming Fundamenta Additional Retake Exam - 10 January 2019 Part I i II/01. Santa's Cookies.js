function santasCookies(input) {
    let numberBatchs = input.shift();
    let totalBoxes = 0;
    for (let batch = 1; batch <= numberBatchs; batch++) {
        let flour = parseInt(input.shift());
        let sugar = parseInt(input.shift());
        let cocoa = parseInt(input.shift());

        let flourCups = parseInt(flour / 140);
        let sugarSpoons = parseInt(sugar / 20);
        let cocoaSpoons = parseInt(cocoa / 10);
        let cookiesQuantity = 0;
        let cookiesBoxes = 0;
        if (flourCups > 0 && sugarSpoons > 0 && cocoaSpoons) {
            cookiesQuantity = (140 + 20 + 10) * Math.min(flourCups, sugarSpoons, cocoaSpoons) / 25;
            cookiesBoxes = Math.floor(cookiesQuantity / 5);
            totalBoxes += cookiesBoxes;
            console.log(`Boxes of cookies: ${cookiesBoxes}`);
        } else {
            console.log('Ingredients are not enough for a box of cookies.');
        }
    }
    console.log(`Total boxes: ${totalBoxes}`);
}
santasCookies([2, 200, 300, 500, 100, 200, 50]);
santasCookies([1, 1400, 200, 100])
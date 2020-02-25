function radioCrystals(input) {
    for (let i = 1; i < input.length; i++) {
        let targetThickness = input[0];
        let numberCut = 0;
        let numberLap = 0;
        let numberGrind = 0;
        let numberEtch = 0;
        let numberXRay = 0;
        let presentThickness = input[i];

        for (let i = 1;; i++) {
            if (presentThickness / 4 >= targetThickness) {
                presentThickness = presentThickness / 4;
                numberCut++;
            } else {
                break;
            }
        }
        presentThickness = Math.floor(presentThickness);
        for (let i = 1;; i++) {
            if ((presentThickness - presentThickness * 0.2) >= targetThickness) {
                presentThickness -= 0.20 * presentThickness;
                numberLap++;
            } else {
                break;
            }
        }
        presentThickness = Math.floor(presentThickness);
        for (let i = 1;; i++) {
            if ((presentThickness - 20) >= targetThickness) {
                presentThickness -= 20;
                numberGrind++;
            } else {
                break;
            }
        }
        presentThickness = Math.floor(presentThickness);
        for (let i = 1;; i++) {
            if ((presentThickness - 2) >= targetThickness - 1) {
                presentThickness -= 2;
                numberEtch++;
            } else {
                break;
            }
        }
        presentThickness = Math.floor(presentThickness);
        if ((presentThickness + 1) === targetThickness) {
            presentThickness += 1;
            numberXRay++;
        }
        console.log(`Processing chunk ${input[i]} microns`);
        if (numberCut > 0) {
            console.log(`Cut x${numberCut}`);
            console.log('Transporting and washing');
        }
        if (numberLap > 0) {
            console.log(`Lap x${numberLap}`);
            console.log('Transporting and washing');
        }
        if (numberGrind > 0) {
            console.log(`Grind x${numberGrind}`);
            console.log('Transporting and washing');
        }
        if (numberEtch > 0) {
            console.log(`Etch x${numberEtch}`);
            console.log('Transporting and washing');
        }
        if (numberXRay > 0) {
            console.log(`X-ray x${numberXRay}`);
        }
        console.log(`Finished crystal ${input[0]} microns`)
    }
}
//radioCrystals([1000,4000,8100]);
radioCrystals([1375, 50000]);
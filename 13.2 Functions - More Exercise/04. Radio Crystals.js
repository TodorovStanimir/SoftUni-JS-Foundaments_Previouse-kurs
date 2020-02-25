function radioCrystals(input) {
    for (let i = 1; i < input.length; i++) {
        let targetThickness = input[0];
        let numberCut = 0;
        let numberLap = 0;
        let numberGrind = 0;
        let numberEtch = 0;
        let numberXRay = 0;
        let presentThickness = input[i];

        while (presentThickness !== targetThickness) {
            if (presentThickness / 4 >= targetThickness) {
                presentThickness = presentThickness / 4;
                numberCut++;
            } else if ((Math.floor(presentThickness -presentThickness * 0.2)) >= targetThickness) {
                if (numberLap === 0) {
                    presentThickness = Math.floor(presentThickness);
                }
                presentThickness -= 0.20 * presentThickness;
                numberLap++;
            } else if (Math.floor(presentThickness) - 20 >= targetThickness) {
                if (numberGrind === 0) {
                    presentThickness = Math.floor(presentThickness);
                }
                presentThickness -= 20;
                numberGrind++;
            } else if (Math.floor(presentThickness)-2 >= targetThickness-1) {
                if (numberEtch === 0) {
                    presentThickness = Math.floor(presentThickness);
                }
                presentThickness -= 2;
                numberEtch++;
            } else if (Math.floor(presentThickness) + 1 === targetThickness) {
                if (numberXRay === 0) {
                    presentThickness = Math.floor(presentThickness);
                }
                presentThickness += 1;
                numberXRay++;
            }
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
            console.log(`X-ray x${numberXRay}`);;
        }
        console.log(`Finished crystal ${input[0]} microns`)
    }
}
radioCrystals([1000, 4000, 8100]);
radioCrystals([1375, 50000]);
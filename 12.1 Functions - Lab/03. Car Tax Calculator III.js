function carTaxCalculatorIII(typeVehicle, kw, age) {
    switch (typeVehicle) {
        case 'motorcycle':
            let taxMotorcycle = calcTaxMotorcycle(kw)
            taxMotorcycle = taxMotorcycle.toFixed(2);
            console.log(taxMotorcycle + ' lv.');
            break;
        case 'car':
            let coefficient = calcCoeff(age);
            let tax = calcPowerPrice(kw);
            totalPrice = (coefficient * tax).toFixed(2) + ' lv.'
            console.log(totalPrice);
            break;
    }

    function calcTaxMotorcycle(volume) {
        let taxMotorcycle = 0.00;
        if (volume > 750) {
            taxMotorcycle = 125;
        } else if (volume > 490) {
            taxMotorcycle = 94;
        } else if (volume > 350) {
            taxMotorcycle = 63;
        } else if (volume > 250) {
            taxMotorcycle = 44;
        } else if (volume > 125) {
            taxMotorcycle = 31;
        } else {
            taxMotorcycle = 15;
        }
        return taxMotorcycle;
    }

    function calcCoeff(age) {
        let coefficient = 0;
        if (age < 5) {
            coefficient = 2.80;
        } else if (5 <= age && age <= 14) {
            coefficient = 1.50;
        } else {
            coefficient = 1;
        }
        return coefficient;
    }

    function calcPowerPrice(kw) {
        let power = Number(kw);
        let tax = 0;
        if (power <= 37) {
            tax = 0.43 * power;
        } else if (37 < power && power <= 55) {
            tax = 0.50 * power;
        } else if (55 < power && power <= 74) {
            tax = 0.68 * power;
        } else if (74 < power && power <= 110) {
            tax = 1.38 * power;
        } else {
            tax = 1.54 * power;
        }
        tax = tax.toFixed(2);
        return tax;
    }
}

carTaxCalculatorIII('motorcycle', 450, 10);
carTaxCalculatorIII('car', 90, 7);
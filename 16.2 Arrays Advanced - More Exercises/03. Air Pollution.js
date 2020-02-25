    function airPollution(mapOfSofia, pollutingFactors) {
        let mapOfSofiaInNumber = [];
        mapOfSofia.forEach(line => mapOfSofiaInNumber.push(line.split(' ').map(Number)));

        let currentPollutingFactor = pollutingFactors.shift();

        while (currentPollutingFactor !== undefined) {
            let [currentPollutingActivity, currentPollutingArea] = currentPollutingFactor.split(' ');

            if (currentPollutingActivity === 'breeze') {
                for (let col = 0; col <= 4; col++) {
                    mapOfSofiaInNumber[currentPollutingArea][col] = Math.max(0, mapOfSofiaInNumber[currentPollutingArea][col] - 15);
                }
            } else if (currentPollutingActivity === 'gale') {
                for (let row = 0; row <= 4; row++) {
                    mapOfSofiaInNumber[row][currentPollutingArea] = Math.max(0, mapOfSofiaInNumber[row][currentPollutingArea] - 20);
                }
            } else if (currentPollutingActivity === 'smog') {
                for (let row = 0; row <= 4; row++) {
                    for (let col = 0; col <= 4; col++) {
                        mapOfSofiaInNumber[row][col] = mapOfSofiaInNumber[row][col] + Number(currentPollutingArea);
                    }
                }
            }
            currentPollutingFactor = pollutingFactors.shift();
        }
        let output = [];
        let isTherePolutedArea = false;

        for (let row = 0; row <= 4; row++) {
            for (let col = 0; col <= 4; col++) {
                if (mapOfSofiaInNumber[row][col] >= 50) {
                    output.push(`[${row}-${col}]`);
                    isTherePolutedArea = true;
                }
            }
        }
        if (isTherePolutedArea) {
            console.log(`Polluted areas: ${output.join(', ')}`);
        } else {
            console.log('No polluted areas')
        }
    }
airPollution(["5 7 72 14 4", "41 35 37 27 33", "23 16 27 42 12", "2 20 28 39 14", "16 34 31 10 24"],
    ["breeze 1", "gale 2", "smog 25"]);
airPollution(["5 7 3 28 32", "41 12 49 30 33", "3 16 20 42 12", "2 20 10 39 14", "7 34 4 27 24"],
    ["smog 11", "gale 3", "breeze 1", "smog 2"]);
airPollution(["5 7 2 14 4", "21 14 2 5 3", "3 16 7 42 12", "2 20 8 39 14", "7 34 1 10 24"],
    ["breeze 1", "gale 2", "smog 35"]);
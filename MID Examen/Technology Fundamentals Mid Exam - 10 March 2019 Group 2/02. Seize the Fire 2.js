function seizTheFire(input) {
    let levelOfFire = [];
    let effort = 0;
    let totalFire = 0;

    let water = Number(input[1]);
    input[0]
        .split('#')
        .forEach(cell => {
            let kindFire = cell.split(' = ')[0];
            let power = Number(cell.split(' = ')[1]);
            if ((kindFire === 'High' && power >= 81 && power <= 125) ||
                (kindFire === 'Medium' && power >= 51 && power <= 80) ||
                (kindFire === 'Low' && power >= 1 && power <= 50)) {
                if (water >= power) {
                    levelOfFire.push(power);
                    water -= power;
                    effort += 0.25 * power
                    totalFire += power;
                }
            }
        });

    console.log('Cells:');
    levelOfFire.forEach(cell => console.log(` - ${cell}`));
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);

}
seizTheFire(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']);
seizTheFire(['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77', '220']);
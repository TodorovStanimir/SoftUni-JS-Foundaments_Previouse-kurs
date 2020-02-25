seizTheFire = (input) => {
    let effort = 0;
    let water = input[1]
    let cells = []
    let totalFire = 0;
    input[0]
        .split('#')
        .forEach(cell => {
            let [kindFire, power] = cell.split(' = ');
            power = Number(power);
            if ((kindFire === 'High' && 81 <= Number(power) && Number(power) <= 125) ||
                (kindFire === 'Medium' && 51 <= Number(power) && Number(power) <= 80) ||
                (kindFire === 'Low' && 1 <= Number(power) && Number(power) <= 50)) {
                if (water - power >= 0) {
                    water -= power;
                    totalFire += power;
                    effort += 0.25 * power;
                    cells.push(parseInt(power));
                }
            }
        });
    console.log('Cells:');
    cells.forEach(cell => {
        console.log(` - ${cell}`);
    });
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);
}
seizTheFire(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']);
seizTheFire(['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77', '220']);
netherRealms = (input) => {
    let demons = {};
    input[0].split(',').map(el => el.trim()).forEach(line => {
        let health = line.match(/[^0-9+\-*/.]/gi).map(el => el.charCodeAt()).reduce((a, b) => a + b, 0);
        let damage = 0;
        if (line.match(/[-+]*[0-9]+[.]*[0-9]*/g))
            damage = line.match(/[-+]*[0-9]+[.]*[0-9]*/g).map(Number).reduce((a, b) => a + b, 0);
        if (line.match(/[*/]/g))
            line.match(/[*/]/g).forEach(el => (el === '*') ? damage *= 2 : damage /= 2)
        demons[line] = { health, damage };
    });

    Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0])).forEach(demon => {
        console.log(`${demon[0]} - ${demon[1].health} health, ${demon[1].damage.toFixed(2)} damage`);
    });
}
netherRealms(['M3ph-0.5s-0.5t0.0**']);
netherRealms(['M3ph1st0**,    Azazel']);
netherRealms(['Gos/ho'])
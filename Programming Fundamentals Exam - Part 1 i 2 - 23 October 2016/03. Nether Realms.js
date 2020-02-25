netherRealms = (input) => {
    let demons = input[0].split(',').map(el => el.trim()).sort((a, b) => a.localeCompare(b));
    for (let demon of demons) {
        let health = 0;
        let damage = 0;
        health = demon.match(/[^0-9+\-*/.]/g).map(el => el.charCodeAt()).reduce((a, b) => a + b, 0);
        if (demon.match(/[-+]*[0-9]+[.]*[0-9]*/g)) {
            damage = demon.match(/[-+]*[0-9]+[.]*[0-9]*/g).map(Number).reduce((a, b) => a + b, 0);
            if (demon.match(/[*]|[/]/g)) {
                demon.match(/[*]|[/]/g).forEach(el => el === '*' ? damage *= 2 : damage /= 2);
            }
        }
        console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
    }
}
netherRealms(['M3ph-0.5s-0.5t0.0**']);
netherRealms(['M3ph1st0**,   Azazel']);
netherRealms(['Gos/ho'])
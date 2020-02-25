netherRealms = (input) => {
    let demons = [];
    let outputDemons = {}
    input[0]
        .split(',')
        .forEach((element, index) => {
            demons[index] = element.trim();
        });

    for (let demon of demons) {
        let health = 0;
        let damage = 0;
        health = demon.match(/[^0123456789+\-*/.]/g)
            .map(element => element.charCodeAt())
            .reduce((a, b) => (a + b), 0)
        let pattern = /([-\|+]{0,1}[0-9.]+)/g;
        while ((token = pattern.exec(demon)) !== null) {
            damage += Number(token[0])
        }
        demon.split('').forEach(element => {
            if (element === '*') {
                damage = damage * 2;
            } else if (element === '/') {
                damage = damage / 2;
            }
        });
        outputDemons[demon] = { 
            health, 
            damage }
    }
    Object.entries(outputDemons)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(demon => {
            console.log(`${demon[0]} - ${demon[1].health} health, ${demon[1].damage.toFixed(2)} damage`);
        })
}
netherRealms(['M3ph-0.5s-0.5t0.0**']);
netherRealms(['M3ph1st0**,    Azazel']);
netherRealms(['Gos/ho'])
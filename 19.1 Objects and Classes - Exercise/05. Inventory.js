function inventory(input) {
    let hero = [];
    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(' / ');
        items = items.split(', ');
        hero.push({
            name: name,
            level: Number(level),
            items: items
        });
    }
    console.log(JSON.stringify(hero));
}
inventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);
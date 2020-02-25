function TownInfo(arg1, arg2, arg3) {
    let town = String(arg1);
    let population = Number(arg2);
    let area = Number(arg3);
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`)
}
TownInfo('Sofia', '1286383', '492')
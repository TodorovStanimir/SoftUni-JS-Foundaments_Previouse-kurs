function jsonTown(inputstring) {
    let towns = [];
    for (let i = 1; i < inputstring.length; i++) {
        let [Town, Latitude, Longitude] = inputstring[i].split(/[\| \ | \ |\#\s]/).filter(x => x !== '');
        Latitude=Number(Latitude).toFixed(2);
        Longitude=Number(Longitude).toFixed(2);
        towns.push({
            Town: Town,
            Latitude: Number(Latitude),
            Longitude: Number(Longitude)
        })
    }

console.log(JSON.stringify(towns))
}
jsonTown(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
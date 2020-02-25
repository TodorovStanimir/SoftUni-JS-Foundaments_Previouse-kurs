anonymosCashe = (input) => {
    let dataSets = {};
    let cashe = {};
    for (let line of input) {
        if (line === 'thetinggoesskrra') {
            break;
        }
        if (line.includes(' -> ')) {
            let [dataKey, tokens] = line.split(' -> ');
            let [size, dataSet] = tokens.split(' | ');
            if (dataSet in dataSets) {
                dataSets[dataSet].totalSize += Number(size);
                dataSets[dataSet].datakeys.push(dataKey);
            } else {
                if (!(dataSet in cashe)) {
                    cashe[dataSet] = {};
                }
                cashe[dataSet][dataKey] = Number(size);
            }
        } else {
            dataSet = line;
            if (!(dataSet in dataSets)) {
                dataSets[dataSet] = { totalSize: 0, datakeys: [] };
            }
            if (dataSet in cashe) {
                Object.entries(cashe[dataSet]).forEach(element => {
                    dataSets[dataSet].totalSize += element[1];
                    dataSets[dataSet].datakeys.push(element[0]);
                });
                delete cashe[dataSet];
            }
        }
    }
    let output = Object.entries(dataSets);
    if (output.length > 0) {
        output.sort((a, b) => b[1].totalSize - a[1].totalSize).filter((el, ind) => ind === 0).forEach(dataSet => {
            console.log(`Data Set: ${dataSet[0]}, Total Size: ${dataSet[1].totalSize}`);
            dataSet[1].datakeys.forEach(key => console.log(`$.${key}`));
        })
    }
}
anonymosCashe(['Users',
    'BankAccounts',
    'ADDB444 -> 23111 | BankAccounts',
    'Students -> 2000 | Users',
    'Workers -> 24233 | Users',
    'thetinggoesskrra'
])
anonymosCashe(['Cars',
    'Car1 -> 233333 | Cars',
    'Car23 -> 266666 | Cars',
    'Warehouse2 -> 10000 | Buildings',
    'Warehouse3 -> 480000 | Buildings',
    'Warehouse5 -> 100000 | Buildings',
    'Buildings',
    'thetinggoesskrra'
])
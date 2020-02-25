function makeADictionary(input) {
    let dictionary = [];

    for (let i = 0; i < input.length; i++) {
        let key = String((Object.keys(input[i])));
        let value = String((Object.values(input[i])));
        dictionary.push([key, value]);
    }
    dictionary.sort((a, b) => a[0].localeCompare(b[0]));

    let dictionary1 = {}

    dictionary.forEach(element => {
        Object.defineProperty(dictionary1, element[0], {
            value: element[1]
        })
    });
    let a=Object.values(dictionary1.Coffee);
    console.log(a);
    
    
    // console.log(`Term: ${element[0]} => Definition: ${element[1]}`)
}
makeADictionary([{
        "Coffee": "A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."
    },
    {
        "Bus": "A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."
    },
    {
        "Boiler": "A fuel-burning apparatus or container for heating water."
    },
    {
        "Tape": "A narrow strip of material, typically used to hold or fasten something."
    },
    {
        "Microphone": "An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."
    }
]);
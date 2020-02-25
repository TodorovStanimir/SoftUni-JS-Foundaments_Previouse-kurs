function secuences(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        let currentElement = (JSON.parse(input[i])).sort((a, b) => b - a);
        let isNotConsistCurrentElement = true;
        for (let y = 0; y < output.length; y++) {
            if (currentElement.join('') === output[y].join('')) {
                isNotConsistCurrentElement = false;
                break;
            }
        }
        if (isNotConsistCurrentElement) {
            output.push(currentElement);
        }
    }
    output.sort((a, b) => a.length - b.length);
    for (let i = 0; i < output.length; i++) {
        console.log(`[${output[i].join(', ')}]`);
    }
}
secuences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]",
    "[10, 1, -17, 0, 2, 1]",
]);
secuences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
])

function sequences(input) {
    let output = []
    for (let line of input) {
        let lineInput = JSON.parse(line).sort((a, b) => b - a);
        let lineInputMachOtput = false;
        for (lineOutput of output) {
            if (lineInput.join('').match(lineOutput.join(''))) {
                lineInputMachOtput = true;
            }
        }
        if (lineInputMachOtput === false) {
            output.push(lineInput);
        }
    }
    output.sort((a, b) => a.length - b.length);
    output.forEach(element => {
        console.log(`[${element.join(', ')}]`);
    });
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]);
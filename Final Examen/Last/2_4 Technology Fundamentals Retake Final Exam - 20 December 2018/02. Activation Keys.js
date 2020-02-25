function activationKeys(input) {

    let arrayKeys = input[0].split('&');
    let output = [];
    let pattern1 = /\b[\a-z\d\s]{16}\b/gi;
    let pattern2 = /\b[\a-z\d\s]{25}\b/gi;
    arrayKeys.forEach(key => {
        if (key.length === 16 && key.match(pattern1)) {
            let newKey = [];
            for (i = 0; i < 16; i += 4) {
                newKey.push(key.substr(i, 4));
            }
            output.push(newKey.join('-'));
        } else if (key.length === 25 && key.match(pattern2)) {
            let newKey = [];
            for (i = 0; i < 25; i += 5) {
                newKey.push(key.substr(i, 5));
            }
            output.push(newKey.join('-'));
        }
    });
    for (let line = 0; line < output.length; line++) {
        let currentKey = output[line].split('');
        for (let index = 0; index < currentKey.length; index++) {
            if (String(Number(currentKey[index]))!=='NaN') {
                currentKey[index] = 9 - Number(currentKey[index]);
            } else {
                currentKey[index] = currentKey[index].toUpperCase();
            }
        }
        currentKey = currentKey.join('');
        output[line] = currentKey;
    }
    console.log(output.join(', '));
}
activationKeys(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs']);
activationKeys(['xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS'])
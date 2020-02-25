function activationKeys(input) {
    let keys = [];
    let pattern1 = /^([a-z0-9]{16})$/gi;
    let pattern2 = /^([a-z0-9]{25})$/gi;
    let arrKeys = input[0].split('&');
    for (let key of arrKeys) {
        if (key.match(pattern1)) {
            let newKey = '';
            for (let i = 0; i < 16; i += 4) {
                i < 12 ? newKey += key.substring(i, i + 4) + '-' : newKey += key.substring(i, i + 4)
            }
            newKey = newKey.split('').map(el => {
                if (el >= 'a' && el <= 'z') {
                    return el.toUpperCase()
                } else if (el >= 0 && el <= 9) {
                    return 9 - Number(el)
                } else {
                    return el
                }
            }).join('');
            keys.push(newKey);
        }
        if (key.match(pattern2)) {
            let newKey = '';
            for (let i = 0; i < 25; i += 5) {
                i < 20 ? newKey += key.substring(i, i + 5) + '-' : newKey += key.substring(i, i + 5)
            }
            newKey = newKey.split('').map(el => {
                if (el >= 'a' && el <= 'z') {
                    return el.toUpperCase()
                } else if (el >= 0 && el <= 9) {
                    return 9 - Number(el)
                } else {
                    return el
                }
            }).join('');
            keys.push(newKey);
        }
    }
    console.log(keys.join(', '));
}
activationKeys(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs']);
activationKeys(['xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS'])
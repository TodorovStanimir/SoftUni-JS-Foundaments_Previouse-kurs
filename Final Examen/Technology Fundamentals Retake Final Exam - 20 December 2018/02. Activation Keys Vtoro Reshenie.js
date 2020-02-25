function activationKeys([input]) {
    let result = [];
    input.split('&').forEach(element => {
        if (element.match(/^[\da-z]{16}|[\da-z]{25}$/gi)) {
            let key = element.split('').map(char => {
                return ('0' <= char && char <= '9') ? 9 - Number(char) : char.toUpperCase()
            });
            let y = key.length % 4; // y = 0 if length === 16 or y = 1 if length === 25
            for (let i = 12 + 8 * y; i > 0; i -= 4 + y) {
                key.splice(i, 0, '-');
            }
            result.push(key.join(''));
        }
    });
    console.log(result.join(', '));
}
activationKeys(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs']);
activationKeys(['xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS'])

// Result:
// T8KJZ-U235Z-IME3D-L0RYD-9G8U1, RG06-BXGK-MILW-811M, KROG-F8PR-UDXD-A5LN, U6WH-0KXP-Y9SN-CCFS
// XPT1V-YHUDA-LILWL-VB3UM-SGEEF, Y3FT-4EGF-GZHQ-LFIS
function partyTime(input) {

    let output = new Map();
    output.set("VIP", []);
    output.set("regular", [])
    let gestComming = false;

    for (let currentOperation of input) {
        if (currentOperation === 'PARTY') {
            gestComming = true;
        } else {
            if (gestComming === false) {
                if (48 <= currentOperation.charCodeAt(0) && currentOperation.charCodeAt(0) <= 57) {
                    output.get('VIP').push(currentOperation);
                } else {
                    output.get('regular').push(currentOperation);
                }
            } else {
                if (48 <= currentOperation.charCodeAt(0) && currentOperation.charCodeAt(0) <= 57) {
                    output.get('VIP').splice(output.get('VIP').indexOf(currentOperation), 1);
                } else {
                    output.get('regular').splice(output.get('regular').indexOf(currentOperation), 1);
                }
            }
        }
    }
    let sorted=output.get('VIP').concat(output.get('regular'));

    console.log(sorted.length);
    for (let guest of sorted){
        console.log(guest);
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)
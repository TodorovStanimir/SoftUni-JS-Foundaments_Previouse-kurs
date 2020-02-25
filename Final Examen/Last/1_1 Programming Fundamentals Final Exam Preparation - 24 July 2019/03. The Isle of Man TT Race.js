function theIsleOfManTTRace(input) {
    let pattern = /^([#$%*&]{1})(?<name>[a-z]+)\1=(?<len>[\d]+)!!(?<geohash>[\w\W]+)$/gi;
    for (let line of input) {
        let isNotValid = true
        if (line.match(pattern)) {
            let matched = pattern.exec(line);
            if (Number(matched.groups.len) === matched.groups.geohash.length) {
                let decreptedGeohash = matched.groups.geohash.split('')
                    .map(el => String.fromCharCode(el.charCodeAt() + Number(matched.groups.len)))
                    .join('')
                console.log(`Coordinates found! ${matched.groups.name} -> ${decreptedGeohash}`);
                break;
            }
        }
        isNotValid
        console.log('Nothing found!');
    }
}

theIsleOfManTTRace(['%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S']);
theIsleOfManTTRace(['Ian6Hutchinson=7!!\\(58ycb4',
    '#MikeHailwood#!!\'gfzxgu6768=11',
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    '*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
    'RichardQ^uayle=16!!fr5de5kd']);
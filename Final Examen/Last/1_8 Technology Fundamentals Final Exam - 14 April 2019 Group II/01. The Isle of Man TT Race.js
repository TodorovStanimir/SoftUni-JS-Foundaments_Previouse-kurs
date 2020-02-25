function theIsleOfManTTRace(input) {
    const pattern = /([#$%\*&])(?<name>[a-z]+)\1=(?<len>\d+)!!(?<geohash>.+)/gi;
    for (checkedRacer of input) {
        if (checkedRacer.match(pattern)) {
            let racer = pattern.exec(checkedRacer);
            let lengthGeohash = Number(racer.groups.len);
            if (lengthGeohash === racer.groups.geohash.length) {
                let geohashcode = racer.groups.geohash
                    .split('')
                    .map(char => String.fromCharCode(char.charCodeAt() + lengthGeohash))
                    .join('')
                console.log(`Coordinates found! ${racer.groups.name} -> ${geohashcode}`);
                break;
            }
        }
        console.log('Nothing found!');
    }
}
theIsleOfManTTRace(['%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'])
theIsleOfManTTRace(['Ian6Hutchinson=7!!\\(58ycb4',
    '#MikeHailwood#!!\'gfzxgu6768=11',
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    '*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
    'RichardQ^uayle=16!!fr5de5kd'])
function arrivingInKathmandu(input) {
    while ((line = input.shift()) !== 'Last note') {

        let [rawName, length, geohash] = line.split(/[\=\<<]/).filter(x => x !== '');
        rawName = rawName.split(/[\!\@\#\$\?]/).join('');
        let name = rawName.match(new RegExp('[A-Za-z0-9]', 'gi')).join('');

        if (name !== undefined && length !== undefined && geohash !== undefined && name === rawName
            && Number(length) === geohash.length && Number(length) !== undefined) {
            console.log(`Coordinates found! ${name} -> ${geohash}`);
        } else {
            console.log('Nothing found!');
        }
    }
}
arrivingInKathmandu(['!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note'
]);
arrivingInKathmandu(['Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
    '=9Cho?@#Oyu<<thvb7ydht',
    'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
    'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
    'Last note'

]);
function arrivingInKathmandu(input) {
    let pattern = /^(?<name>[A-Za-z0-9!@#$?]+)=(?<len>[\d]+)<<(?<geocode>[\w\W]+)$/g;
    while ((line = input.shift()) !== 'Last note') {
        let messageIsNotCorrect = true;
        if (line.match(pattern)) {
            let tokens = pattern.exec(line);
            let name = tokens.groups.name.split(/[\!\@\#\$\?]/).join('')
            if (Number(tokens.groups.len) === tokens.groups.geocode.length) {
                console.log(`Coordinates found! ${name} -> ${tokens.groups.geocode}`);
                messageIsNotCorrect = false;
            }
        }
        if (messageIsNotCorrect)
            console.log('Nothing found!');
    }
}
arrivingInKathmandu(['!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note']);
arrivingInKathmandu(['Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
    '=9Cho?@#Oyu<<thvb7ydht',
    'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
    'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
    'Last note']);
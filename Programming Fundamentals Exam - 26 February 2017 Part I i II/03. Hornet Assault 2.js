hornetAssault = (arr) => {
    let beehives = arr[0].split(' ').map(Number);
    let hornets = arr[1].split(' ').map(Number)
    beehives = beehives.map(beehive => {
        let poweredHornets = hornets.reduce((a, b) => a + b, 0);
        if (beehive < poweredHornets) {
            return 0;
        } else {
            hornets.shift();
            return beehive - poweredHornets;
        }
    });
    beehives = beehives.filter(el => el !== 0);
    console.log(beehives.length ? `${beehives.join(' ')}` : `${hornets.join(' ')}`);
}
hornetAssault(['20 10 20 30', '5 10 5 3', '']);
hornetAssault(['10 20 10 15', '5 6 7', ''])
hornetAssault(['20 100 40 45 20 10', '40 10 5 40 5', ''])
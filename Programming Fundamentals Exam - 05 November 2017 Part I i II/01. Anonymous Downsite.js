anonymousDownsite = (input) => {
    let numberSites = parseInt(input.shift());
    let key = (input.shift());
    let affectedSites = [];
    let totalSiteLoss = 0;
    let siteLoss = 0;
    let z = 0
    for (let i = 0; i < numberSites; i++) {
        let siteLoss = 0;

        if (input[i].match(/www.[\w]+[.][a-z]+[\s][\d]+[\s][\d.]+/gi)) {
            let [siteName, siteVisits, sitePrice] = input[i].split(' ');
            siteVisits = parseInt(siteVisits);
            sitePrice = parseFloat(sitePrice);

            affectedSites.push(siteName);
            let additional = (sitePrice - parseInt(sitePrice)) * 10000;
            if (additional !== 0) {
                let lastDigitOfAdditional = 1000 - additional % 10000;
                additional = additional + lastDigitOfAdditional;
                let a = additional * siteVisits;
                siteLoss = parseInt(sitePrice) * siteVisits;
                siteLoss += a;

            } else {
                siteLoss = sitePrice * siteVisits;
            }
            totalSiteLoss += siteLoss;
        }

    }
    let text = String(totalSiteLoss).split('.')[1];
    text = text.concat('0'.repeat(20 - text.length));
    let text1 = String(totalSiteLoss).split('.')[0] + '.';
    totalSiteLoss = text1.concat(text);

    console.log(affectedSites.join('\n'));
    console.log(`Total Loss: ${totalSiteLoss}`);
    console.log(`Security Token: ${key**numberSites}`)


}
// 2147483648

anonymousDownsite([3,
    8,
    'www.google.com 122300 94',
    'www.abv.bg 2333 11',
    'www.kefche.com 12322 23.3222'
]);
anonymousDownsite([1,
    1,
    'www.facebook.com 100000 10.45'
])
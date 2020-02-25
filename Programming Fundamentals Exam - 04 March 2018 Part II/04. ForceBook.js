forceBook = (input) => {
    let sheetSites = new Map();
    let arraySites = [];
    let arrayUsers = []
    while ((line = input.shift()) !== 'Lumpawaroo') {
        if (line.includes(' | ')) {
            let [nameSite, nameUser] = line.split(' | ');
            if (!arrayUsers.includes(nameUser)) {
                if (!arraySites.includes(nameSite)) {
                    sheetSites.set(nameSite, [nameUser])
                    arraySites.push(nameSite);
                    arrayUsers.push(nameUser);
                } else {
                    sheetSites.get(nameSite).push(nameUser);
                    arrayUsers.push(nameUser);
                }
            }
        } else if (line.includes(' -> ')) {
            let [nameUser, nameSite] = line.split(' -> ');
            if (arrayUsers.includes(nameUser)) {
                for (site of arraySites) {
                    if (sheetSites.get(site).includes(nameUser) && site !== nameSite) {
                        sheetSites.get(site).splice(sheetSites.get(site).indexOf(nameUser), 1);
                        if (!arraySites.includes(nameSite)) {
                            sheetSites.set(nameSite, [nameUser])
                            arraySites.push(nameSite);
                        } else {
                            sheetSites.get(nameSite).push(nameUser); 
                        }
                        console.log(`${nameUser} joins the ${nameSite} side!`);
                        break;
                    }
                }
            } else {
                if (!arraySites.includes(nameSite)) {
                    sheetSites.set(nameSite, [nameUser])
                    arraySites.push(nameSite);
                    arrayUsers.push(nameUser);
                    console.log(`${nameUser} joins the ${nameSite} side!`);
                } else {
                    sheetSites.get(nameSite).push(nameUser);
                    arrayUsers.push(nameUser);
                    console.log(`${nameUser} joins the ${nameSite} side!`);
               }
            }
        }
    }
    let result = [...sheetSites.entries()];
    result.sort((a, b) => {
        if (a[1].length > b[1].length || a[1].length < b[1].length) {
            return b[1].length - a[1].length
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    result.forEach(site => {
        site[1].sort((a, b) => a.localeCompare(b));
    });
    result.forEach(site => {
        if (site[1].length > 0) {
            console.log(`Side: ${site[0]}, Members: ${site[1].length}`);
            site[1].forEach(user => console.log(`! ${user}`));
        }
    })
}
forceBook(['Light | Gosho',
    'Dark | Pesho',
    'Lumpawaroo'
]);
forceBook(['Lighter | Royal',
    'Darker | DCay',
    'Ivan Ivanov -> Lighter',
    'DCay -> Lighter',
    'Lumpawaroo'
])
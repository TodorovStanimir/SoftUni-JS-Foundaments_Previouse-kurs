forceBook = (input) => {
    let users = [];
    let sites = {};
    while ((line = input.shift()) !== 'Lumpawaroo') {
        if (line.includes(' | ')) {
            let [site, user] = line.split(' | ');
            if (!users.includes(user)) {
                addSiteAndUserToIt(site, user);
                users.push(user);
            }
        } else {
            let [user, site] = line.split(' -> ');
            if (!users.includes(user)) {
                addSiteAndUserToIt(site, user);
                users.push(user);
            } else {
                for (let checkedSite in sites) {
                    if (sites[checkedSite].users.includes(user)) {
                        sites[checkedSite].users.splice(sites[checkedSite].users.indexOf(user), 1);
                        sites[checkedSite].members--;
                        addSiteAndUserToIt(site, user);
                        break;
                    }
                }
            }
            console.log(`${user} joins the ${site} side!`);
        }
    }
    Object.entries(sites).filter(site => site[1].members !== 0).sort((a, b) => b[1].members - a[1].members || a[0].localeCompare(b[0]))
        .forEach(site => {
            console.log(`Side: ${site[0]}, Members: ${site[1].members}`);
            site[1].users.sort((a, b) => a.localeCompare(b)).forEach(user => console.log(`! ${user}`));
        });

    function addSiteAndUserToIt(site, user) {
        if (!(site in sites)) {
            sites[site] = { members: 0, users: [] }
        }
        sites[site].members++;
        sites[site].users.push(user);
    }
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
// Results:
// Side: Dark, Members: 1
// ! Pesho
// Side: Light, Members: 1
// ! Gosho
// Ivan Ivanov joins the Lighter side!
// DCay joins the Lighter side!
// Side: Lighter, Members: 3
// ! DCay
// ! Ivan Ivanov
// ! Royal
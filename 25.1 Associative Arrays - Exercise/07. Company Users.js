function companyUsers(input) {
    let companyUsers = new Map();
    for (let curUser of input) {
        let [company, user] = curUser.split(' -> ');
        if (companyUsers.has(company)) {
            if (!companyUsers.get(company).includes(user)) {
                companyUsers.get(company).push(user);
            }
        } else {
            companyUsers.set(company, [user]);
        }
    }
    let output = [...(companyUsers.entries())]

    output.sort((a, b) => a[0].localeCompare(b[0]));

    // Програмен код за сортиране на стойностите, които са в масив
    // for (let row in output) {
    //     let users = output[row][1]
    //     users.sort((a, b) => a.localeCompare(b));
    //     output[row].splice(1, 1, users);
    // }

    for (let company of output) {
        console.log(company[0]);
        company[1].forEach(element => {
            console.log(`-- ${element}`);
        });
    }
}
companyUsers(['SoftUni -> AB12345',
    'SoftUni -> AA12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
companyUsers(['SoftUni -> CC12344',
    'SoftUni -> AA12345',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111',
    'SoftUni -> AC54312',
    'SoftUni -> AA12345',
    'SoftUni -> AA54321',
    'SoftUni -> AA54322'
])
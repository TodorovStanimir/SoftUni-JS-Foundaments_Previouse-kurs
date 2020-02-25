function softUniCoursePlaning(input) {
    let initialCours = input.shift().split(', ');

    while ((line = input.shift()) !== 'course start') {
        let [command, title, other] = line.split(':');
        if (command === 'Add' && !initialCours.includes(title)) {
            initialCours.push(title);
        } else if (command === 'Insert' && !initialCours.includes(title) && 0 <= Number(other) && Number(other) <= initialCours.length) {
            initialCours.splice(Number(other), 0, title);
        } else if (command === 'Remove' && initialCours.includes(title)) {
                initialCours.splice(initialCours.indexOf(title), 1);
            if (initialCours.includes(`${title}-Exercise`)) {
                initialCours.splice(initialCours.indexOf(`${title}-Exercise`), 1);
            }
        } else if (command === 'Swap') {
            let title2 = other;
            if (initialCours.includes(title) && initialCours.includes(title2)) {
                let index1 = initialCours.indexOf(title);
                let index2 = initialCours.indexOf(title2);
                initialCours[index1] = title2;
                initialCours[index2] = title;
            }
            if (initialCours.includes(`${title}-Exercise`) && initialCours.includes(`${title2}-Exercise`)) {
                initialCours[index1 + 1] = `${title2}-Exercise`;
                initialCours[index2 + 1] = `${title}-Exercise`;
            } else if (initialCours.includes(`${title}-Exercise`)) {
                initialCours.splice(initialCours.indexOf(`${title}-Exercise`), 1);
                initialCours.splice(initialCours.indexOf(title) + 1, 0, `${title}-Exercise`)
            } else if (initialCours.includes(`${title2}-Exercise`)) {
                initialCours.splice(initialCours.indexOf(`${title2}-Exercise`), 1);
                initialCours.splice(initialCours.indexOf(title2) + 1, 0, `${title2}-Exercise`)
            }
        } else if (command === 'Exercise') {
            if (initialCours.includes(title)) {
                if (!initialCours.includes(`${title}-Exercise`)) {
                    initialCours.splice(initialCours.indexOf(title) + 1, 0, `${title}-Exercise`);
                }
            } else {
                initialCours.push(title);
                initialCours.push(`${title}-Exercise`);
            }
        }
    }
    initialCours.forEach((el, ind) => {
        console.log(`${ind + 1}.${el}`)
    });
}
// softUniCoursePlaning(['Data Types, Objects, Lists',
//     'Add:Databases',
//     'Insert:Arrays:0',
//     'Remove:Lists',
//     'course start'
// ]);
softUniCoursePlaning(['Arrays, Lists, Methods',
    'Swap:Arrays:Methods',
    'Exercise:Databases',
    'Swap:Lists:Databases',
    'Insert:Arrays:0',
    'course start'
]);
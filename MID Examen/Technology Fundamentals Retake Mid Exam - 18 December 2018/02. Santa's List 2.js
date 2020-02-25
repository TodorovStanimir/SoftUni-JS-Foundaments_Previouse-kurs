function santasList(input) {
    let noisyKids = input.shift().split('&');

    while ((line = input.shift()) !== 'Finished!') {
        line = line.split(' ');
        let command = line.shift();

        if (command === 'Bad') {
            let kidName = line.shift();
            if (noisyKids.indexOf(kidName) === -1) {
                noisyKids.unshift(kidName);
            }
        } else if (command === 'Good') {
            let kidName = line.shift();
            if (noisyKids.indexOf(kidName) !== -1) {
                noisyKids.splice(noisyKids.indexOf(kidName), 1);
            }
        } else if (command === 'Rename') {
            let oldName = line.shift();
            let newName = line.shift();

            if (noisyKids.indexOf(oldName) !== -1) {
                noisyKids[noisyKids.indexOf(oldName)] = newName;
            }
        } else if (command === 'Rearrange') {
            let kidName = line.shift();
            if (noisyKids.indexOf(kidName) !== -1) {
                noisyKids.splice(noisyKids.indexOf(kidName), 1);
                noisyKids.push(kidName);
            }
        }
    }
    console.log(noisyKids.join(', '));
}
santasList(['Peter&George&Mike', 'Bad Joshua', 'Good Peter', 'Finished!']);
santasList(['Joshua&Aaron&Walt&Dustin&William',
    'Good Walt',
    'Bad Jon',
    'Rename Aaron Paul',
    'Rearrange Jon',
    'Rename Peter George',
    'Finished!'
]);
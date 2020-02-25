function santasList(input) {
    let list = input.shift().split('&');
    let command = input.shift().split(' ');

    while (command[0] !== 'Finished!') {

        if (command[0] === 'Bad') {
            if (!list.includes(command[1])) {
                list.unshift(command[1]);
            }
        } else if (command[0] === 'Good') {
            if (list.includes(command[1])) {
                list.splice(list.indexOf(command[1]), 1);
            }
        } else if (command[0] === 'Rename') {
            if (list.includes(command[1])) {
                list.splice(list.indexOf(command[1]), 1, command[2]);
            }
        } else if (command[0] === 'Rearrange') {
            if (list.includes(command[1])) {
                list.splice(list.indexOf(command[1]), 1);
                list.push(command[1]);
            }
        }


        command = input.shift().split(' ');
    }
    console.log(list.join(', '));
}
santasList(['Peter&George&Mike',
    'Bad Joshua',
    'Good Peter',
    'Finished!',
]);
santasList(['Joshua&Aaron&Walt&Dustin&William', 'Good Walt', 'Bad Jon', 'Rename Aaron Paul', 
'Rearrange Jon', 'Rename Peter George', 'Finished!']);


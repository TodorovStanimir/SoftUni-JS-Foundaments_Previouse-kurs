function questsJournal(input) {
    let output = input.shift().split(', ');
    let command = input.shift().split(' - ');
    while (command[0] !== 'Retire!') {
        if (command[0] === 'Start') {
            if (!output.includes(command[1])) {
                output.push(command[1]);
            }
        } else if (command[0] === 'Complete') {
            if (output.includes(command[1])) {
                output.splice(output.indexOf(command[1]), 1);
            }
        } else if (command[0] === 'Side Quest') {
            let [quest, sideQuest] = command[1].split(':');
            if (output.includes(quest) && !output.includes(sideQuest)) {
                output.splice((output.indexOf(quest) + 1), 0, sideQuest);
            }
        } else if (command[0] === 'Renew') {
            if (output.includes(command[1])) {
                output.splice(output.indexOf(command[1]), 1);
                output.push(command[1]);
            }
        }
        command = input.shift().split(' - ');
    }
    console.log(output.join(', '));
}
questsJournal(['Hello World, For loop, If else', 'Start - While loop', 'Complete - For loop', 'Retire!']);
questsJournal(['Hello World, If else', 'Complete - Homework', 'Side Quest - If else:Switch', 'Renew - Hello World', 'Retire!']);
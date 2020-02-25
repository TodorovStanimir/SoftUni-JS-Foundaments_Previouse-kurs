function questsJournal(input) {
    let result = input.shift().split(', ');

    while ((line = input.shift()) !== 'Retire!') {
        let [command, quest] = line.split(' - ');
        if (command === 'Start') {
            if (!result.includes(quest)) {
                result.push(quest);
            }
        } else if (command === 'Complete') {
            if (result.indexOf(quest) !== -1) {
                result.splice(result.indexOf(quest), 1)
            };
        } else if (command === 'Side Quest') {
            let [nameQuest, sideQuest] = quest.split(':');
            if (result.indexOf(nameQuest) !== -1 && result.indexOf(sideQuest) === -1) {
                result.splice(result.indexOf(nameQuest) + 1, 0, sideQuest)
            }
        } else if (command === 'Renew') {
            if (result.indexOf(quest) !== -1){
                result.splice(result.indexOf(quest),1);
                result.push(quest);
            }
        }
    }
    console.log(result.join(', '));
}
questsJournal(['Hello World, For loop, If else', 'Start - While loop', 'Complete - For loop', 'Retire!']);
questsJournal(['Hello World, If else', 'Complete - Homework', 'Side Quest - If else:Switch', 'Renew - Hello World', 'Retire!']);
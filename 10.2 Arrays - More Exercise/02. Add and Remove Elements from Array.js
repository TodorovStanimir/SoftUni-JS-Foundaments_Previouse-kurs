function addAndRemoveElements(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            output.push(i+1);
        } else {
            output.pop();
        }
    }
    if (output.length===0){
        console.log('Empty');
    }
    console.log(output.join(' '));
}
addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);
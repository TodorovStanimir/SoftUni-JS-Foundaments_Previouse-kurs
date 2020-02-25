function passwordGenerator(input) {
    let output = input[0].concat(input[1]).split('');
    let code = input[2].toUpperCase().split('');
    let indexOfCode = 0;
    for (index in output) {
        let vowel = output[index].toLowerCase();
        if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
            output[index] = code[indexOfCode];
            if (indexOfCode === (code.length - 1)) {
                indexOfCode = 0;
            } else {
                indexOfCode++;
            }
        }
    }
    output = output.reverse().join('');
    console.log(`Your generated password is ${output}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'])
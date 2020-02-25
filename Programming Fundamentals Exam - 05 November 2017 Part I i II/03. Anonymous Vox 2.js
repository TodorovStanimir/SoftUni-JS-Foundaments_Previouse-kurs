anonimousVox = ([textinput, placeholdersInput]) => {
    let patternPlaceholder = /([A-Za-z]+)(?<placeholder>.+)\1/g;
    let arrplaceholdersInput = placeholdersInput.match(/(?<={)([^{}]+)(?=})/g);
    let text = textinput;

    while ((placeholder = patternPlaceholder.exec(textinput)) !== null) {
        text = text.replace(placeholder.groups.placeholder, arrplaceholdersInput.shift());
    }
    console.log(text);
}
anonimousVox(['Hello_mister,_Hello', '{ Jack }', '']);
anonimousVox(['ASD___asdfffasd', '{this}{exam}{problem}{is}{boring}', '']);
anonimousVox(['Whatsup_ddd_sup', '{Dude}']);
anonimousVox(['HeypalHey______how_ya_how_doin_how', '{first}{second}']);
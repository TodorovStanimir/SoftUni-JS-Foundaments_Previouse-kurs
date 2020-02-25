anonimousVox = ([textinput, placeholdersinput]) => {
    let pattern = /([A-Za-z]+)(?<name>.+)(\1)/g
    placeholders = placeholdersinput.match(/(?<={)([\w\s]+)(?=})/gi);
    let text = textinput;
    let index = 0;

    while ((word = pattern.exec(textinput)) !== null) {
        text = text.replace(word.groups['name'], placeholders[index++]);
    }
    console.log(text);
}
anonimousVox(['Hello_mister,_Hello', '{ Jack }', '']);
anonimousVox(['ASD___asdfffasd', '{this}{exam}{problem}{is}{boring}', '']);
anonimousVox(['Whatsup_ddd_sup', '{Dude}']);
anonimousVox(['HeypalHey______how_ya_how_doin_how', '{first}{second}']);
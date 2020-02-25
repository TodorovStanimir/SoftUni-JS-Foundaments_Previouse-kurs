anonymousVox = (arr) => {
    let encodedText = arr[0];
    let output = encodedText;
    let value = arr[1];
    let valueArray = []
    let pattern = /([A-Za-z]+)(?<name>[\w\s\.!"#$%&'()*+,\-./:;<>?@[\\\]^_`{|}`]*)\1/g;
    let pattern1 = /{([\w\s\d]+)}/g;

    while ((values = (pattern1.exec(value))) !== null) {
        valueArray.push(values[1]);
    }
    let index = 0;
    while ((placeholder = (pattern.exec(encodedText))) !== null) {
        let result = placeholder[0].replace(placeholder[2], valueArray[index])
        if (index === valueArray.length - 1) {
            index = 0;
        } else {
            index++;
        }
        output = output.replace(placeholder[0], result);
    }
    console.log(output);
}
anonymousVox(['Hello_mister,_Hello',
    '{ Jack }'
])
anonymousVox(['ASD___asdfffasd',
    '{this}{exam}{problem}{is}{boring}'
])
anonymousVox(['Whatsup_ddd_sup',
    '{Dude}'
])
anonymousVox(['HeypalHey______how_ya_how_doin_how',
    '{first}{second}'
])
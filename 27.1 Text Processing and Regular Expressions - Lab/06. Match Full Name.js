function matchFullName(params) {
    let pattern = /\b[A-Z][a-z]+[ ]+[A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;

    while ((validName = pattern.exec(params)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}
matchFullName("Steven Son, Steven son, steven Son, STeven Son, Michael Braun, MichaelBraun");
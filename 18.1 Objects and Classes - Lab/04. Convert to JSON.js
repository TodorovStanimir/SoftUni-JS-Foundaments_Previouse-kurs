function convertToJson(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }
    let output = JSON.stringify(person);

    console.log(output);
}
convertToJson('George', 'Jones', 'Brown');
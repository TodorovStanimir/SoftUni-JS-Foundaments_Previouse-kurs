function convertToObject(jsonString) {
    let person = JSON.parse(jsonString);

    for (let key in person){
        console.log(`${key}: ${person[key]}`)
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
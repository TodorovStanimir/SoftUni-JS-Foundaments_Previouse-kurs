function matchPhoneNumber(params) {
    let output = [];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    while((validName=pattern.exec(params))!==null){
        output.push(validName[0])
    }
    console.log(output.join(', '));
}
matchPhoneNumber("+359 2 222 2222, 359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");
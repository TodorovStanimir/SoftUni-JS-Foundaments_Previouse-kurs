function RightPlace(str, char, result) {
    let res = str.replace('_', char);
    let output = res === result ? 'Matched' : 'Not Matched';
    console.log(output);
}
RightPlace('Str_ng', 'I', 'Strong')
RightPlace('Str_ng', 'i', 'String')
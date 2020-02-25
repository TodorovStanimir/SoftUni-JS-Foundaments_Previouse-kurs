function solve(country) {
    let output = 'unknown';
    if (country == 'USA' || country == 'England') {
        output = 'English';
    } else if (country == 'Spain' || country == 'Argentina' || country == 'Mexico') {
        output = 'Spanish';
    }
    console.log(output);
}
solve('USA')
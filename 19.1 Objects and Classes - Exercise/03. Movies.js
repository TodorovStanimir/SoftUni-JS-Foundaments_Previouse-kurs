function movies(commands) {
    let movies = {};
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        let operation = String(commands[i]);
        if (operation.includes('addMovie')) {
            let name = operation.substr(9)
            if (!movies.hasOwnProperty(name)) {
                movies[name] = {};
                movies[name].name = name;
            }
        } else if (operation.includes(' directedBy ')) {
            let [name, director] = operation.split(' directedBy ');
            if (movies.hasOwnProperty(name)) {
                    movies[name].director = director;
            }
        } else if (operation.includes(' onDate ')) {
            let [name, date] = operation.split(' onDate ');
            if (movies.hasOwnProperty(name)) {
                    movies[name].date = date;
            }
        }
    }
    for (name of Object.keys(movies)) {
        if (movies[name].director !== undefined && movies[name].date !== undefined) {
            result.push(movies[name])
        }
    }
    result.forEach(film => console.log(JSON.stringify(film)));
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])
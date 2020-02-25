function movies(commands) {
    let movies = {};
    for (let i = 0; i < commands.length; i++) {
        let operation = commands[i];
        if (operation.includes('add movie')) {
            let name = operation.substr(10)
            movies[name] = {
                name: name,
                director: '',
                date: ''
            };
        } else if (operation.includes(' directed by ')) {
            let [name, director] = operation.split(' directed by ');
            if (movies.hasOwnProperty(name)) {
                movies[name].director = director;
            }
        } else if (operation.includes(' on date ')) {
            let [name, date] = operation.split(' on date ');
            if (movies.hasOwnProperty(name)) {
                movies[name].date = date;
            }
        }
    }

    for (name of Object.keys(movies)) {
        if (movies[name][name] !== '' && movies[name].director !== '' && movies[name].date !== '') {
            console.log(JSON.stringify(movies[name]));
        }

    }
}
movies(['add movie Fast and Furious',
    'add movie Godfather',
    'Inception directed by Christopher Nolan',
    'Godfather directed by Francis Ford Coppola',
    'Godfather on date 29.07.2018',
    'Fast and Furious on date 30.07.2018',
    'Batman on date 01.08.2018',
    'Fast and Furious directed by Rob Cohen'
])
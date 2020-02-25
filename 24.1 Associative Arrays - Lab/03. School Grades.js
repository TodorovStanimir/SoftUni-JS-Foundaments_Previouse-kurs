function schoolGrades(input) {
    let listStudents = new Map;

    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(' ');
        let nameStudent = token[0];
        let grades = token.splice(1, token.length).map(Number);

        if (!listStudents.has(nameStudent)) {
            listStudents.set(nameStudent, grades);
        } else {
            newGrades = listStudents.get(nameStudent).concat(grades);
            listStudents.set(nameStudent, newGrades);
        }
    }

    let sorted = Array.from(listStudents.entries());

    sorted.sort((a, b) => a[1].reduce((accumulator, currentValue) => (accumulator + currentValue)) / a[1].length - b[1].reduce((accumulator, currentValue) => (accumulator + currentValue)) / b[1].length);
    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);
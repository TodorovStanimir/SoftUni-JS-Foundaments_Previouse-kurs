function proba(students) {
    for (let student of students) {
        console.log(student);
    }
    for (let index in students) {
        console.log(students[index]);
    }
}
proba(['aa', 'bb', 'cc', 'dd', 'ee', 'ff']);
function schoolRegister(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        let a = input[i].split(', ');
        let name = String(a[0].split(': ')[1]);
        let grade = Number(a[1].split(': ')[1]);
        let averageScore = Number(a[2].split(': ')[1]);

        let isGradeNotExist = true;
        for (let y = 0; y < output.length; y++) {
            if (averageScore >= 3 && output[y].Grade === grade) {
                output[y]["List of students"] = output[y]["List of students"] + ', ' + name;
                output[y]["Average annual grade from last year"] = ((output[y]["Average annual grade from last year"] * (output[y]["List of students"].split(', ').length - 1)) + averageScore) / (output[y]["List of students"].split(', ').length);
                isGradeNotExist = false;
                break;
            }
        }
        if (averageScore >= 3 && isGradeNotExist === true) {
            output.push({
                Grade: grade,
                'List of students': name,
                'Average annual grade from last year': averageScore
            });
        }
    }
    output.sort((a, b) => a.Grade - b.Grade);
    console.log(output)

    for (let i = 0; i < output.length; i++) {
        console.log(`${output[i].Grade+1} Grade `);
        console.log(`List of students: ${output[i]['List of students']}`);
        console.log(`Average annual grade from last year: ${output[i]['Average annual grade from last year'].toFixed(2)}`);
        console.log();
    }
}
schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])

function schoolRegister(input) {
    let listStudents = {};
    for (let line of input) {
        let [name, grade, averageScore] = line.split(', ');
        name = name.split(': ')[1];
        grade = grade.split(': ').map(Number)[1] + 1;
        averageScore = averageScore.split(': ').map(Number)[1];
        if (!(grade in listStudents) && averageScore >= 3) {
            listStudents[grade] = [
                [], 0
            ];
        }
        if (averageScore >= 3) {
            listStudents[grade][1] = (listStudents[grade][1] * listStudents[grade][0].length + averageScore) / (listStudents[grade][0].length + 1)
            listStudents[grade][0].push(name);
        }
    }
    listStudents = Object.entries(listStudents);
    listStudents.sort((a, b) => a[0] - b[0]);
    listStudents.forEach(element => {
        console.log(`${element[0]} Grade`);
        console.log(`List of students: ${element[1][0].join(', ')}`);
        console.log(`Average annual grade from last year: ${element[1][1].toFixed(2)}`);
        console.log();
        
    });
}
schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])
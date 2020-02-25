function bonusSystem(input) {
    let countOfStudents = parseInt(input.shift());
    let countOfLectures = parseInt(input.shift());
    let additionalBonus = parseInt(input.shift());
    let maximumBonusScore = 0;
    let maximumAttend = 0;
    for (let student = 1; student <= countOfStudents; student++) {
        let attendOfCurrentStudent = input.shift();
        let bonusOfCurrentStudent = attendOfCurrentStudent / countOfLectures * (5 + additionalBonus);
        if (bonusOfCurrentStudent > maximumBonusScore) {
            maximumBonusScore = bonusOfCurrentStudent;
            maximumAttend = attendOfCurrentStudent
        }
    }
    console.log(`The maximum bonus score for this course is ${maximumBonusScore.toFixed(0)}.The student has attended ${maximumAttend} lectures.`);
}
bonusSystem([5, 24, 30, 12, 19, 24, 16, 20]);
bonusSystem([10, 30, 14, 8, 23, 27, 28, 15, 17, 25, 26, 5, 18])
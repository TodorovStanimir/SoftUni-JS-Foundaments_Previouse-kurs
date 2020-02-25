function softUniReception(input) {
    let studentsPerHour = 0;
    for (let i=0;i<3;i++){
        studentsPerHour+=parseInt(input.shift());
    }
    let studentCount = input.shift();
    let time = 0;

    while (studentCount > 0) {
        time++;
        if (time % 4 !== 0) {
            studentCount -= studentsPerHour
            if (studentCount < 0) {
                studentCount = 0;
            }
        }
    }
    console.log(`Time needed: ${time}h.`);
}
softUniReception([5, 6, 4, 20]);
softUniReception([1, 2, 3, 45]);
softUniReception([3, 2, 5, 40]);
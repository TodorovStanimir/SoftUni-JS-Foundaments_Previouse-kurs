function softUniReception(input) {
    let count1 = parseInt(input.shift());
    let count2 = parseInt(input.shift());
    let count3 = parseInt(input.shift());
    let studentCount = parseInt(input.shift());
    let hours = 0;
    while (studentCount > 0) {
        hours++;
        if (hours % 4 !== 0) {
            studentCount -= (count1 + count2 + count3);
        }
    }
    console.log(`Time needed: ${hours}h.`)
}
softUniReception([5, 6, 4, 20]);
softUniReception([1, 2, 3, 45]);
softUniReception([3, 2, 5, 40]);
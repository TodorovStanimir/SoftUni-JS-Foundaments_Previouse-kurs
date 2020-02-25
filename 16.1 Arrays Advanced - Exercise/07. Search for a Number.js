function searchForANumber(output, commands) {

    let counterNumber=0;
    let result=output.splice(0,commands[0]);

    result.splice(0,commands[1]);

    for (let index of result){
        if (index===commands[2]){
            counterNumber++;
        }
    }
    console.log(`Number ${commands[2]} occurs ${counterNumber} time.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
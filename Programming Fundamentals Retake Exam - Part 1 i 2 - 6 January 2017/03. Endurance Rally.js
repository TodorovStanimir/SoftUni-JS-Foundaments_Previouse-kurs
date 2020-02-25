function enduranceRally(input) {
    let participants = input[0].split(' ');
    let trackLayout = input[1].split(' ').map(Number);
    let checkPointsIndexes = input[2].split(' ').map(Number);

    participants
        .map(el => el.charCodeAt(0))
        .forEach((element, index) => {
            let fuelParticipiant = element;
            let rechedTrackPoint = 0;
            let isFinished = true;
            trackLayout.forEach((trackPoint, indexTrackPoint) => {
                (isFinished && checkPointsIndexes.includes(indexTrackPoint))
                    ? fuelParticipiant += trackPoint
                    : fuelParticipiant -= trackPoint
                if (isFinished && fuelParticipiant <= 0) {
                    rechedTrackPoint = indexTrackPoint;
                    isFinished = false;
                }
            });
            (isFinished)
                ? console.log(`${participants[index]} - fuel left ${fuelParticipiant.toFixed(2)}`)
                : console.log(`${participants[index]} - reached ${rechedTrackPoint}`)

        });
}
enduranceRally(['Garry Clark', '69 1 15 5', '1 2']);
enduranceRally(['Garry Clark Larry', '4 5 12 0 8 7 13 22 5.5 26', '0 3 5 8']);
enduranceRally(['Garry', '-29 -5.0 -5.0', '1 2'])
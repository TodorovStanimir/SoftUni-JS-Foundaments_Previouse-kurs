function enduranceRally(input) {
    let participants = input[0].split(' ');
    let trackLayout = input[1].split(' ').map(Number);
    let checkpoints = input[2].split(' ').map(Number);

    participants.forEach(participant => {
        let fuel = participant.charCodeAt(0);
        let richedSector = 0;
        let isFinished = true;
        trackLayout.forEach((sector, ind) => {
            (isFinished && checkpoints.includes(ind)) ? fuel += sector : fuel -= sector;
            if (isFinished && fuel <= 0) {
                richedSector = ind;
                isFinished=false;
            }
        })
        console.log(isFinished ? `${participant} - fuel left ${fuel.toFixed(2)}` : `${participant} - reached ${richedSector}`)
    });
}
enduranceRally(['Garry Clark', '69 1 15 5', '1 2']);
enduranceRally(['Garry Clark Larry', '4 5 12 0 8 7 13 22 5.5 26', '0 3 5 8']);
enduranceRally(['Garry', '-29 -5.0 -5.0', '1 2'])
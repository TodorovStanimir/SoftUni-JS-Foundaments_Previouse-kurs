function winningTicket(input) {
    let tickets = String(input).split(',').map(el => el.trim());
    let pattern = /@{6,10}|#{6,10}|\${6,10}|\^{6,10}/
    for (let ticket of tickets) {
        if (ticket.length !== 20) {
            console.log('invalid ticket');
            continue;
        }
        let firstHalf = (ticket.substring(0, 10).match(pattern));
        let secondHalf = (ticket.substring(10).match(pattern));
        if (!firstHalf || !secondHalf || firstHalf[0][0] !== secondHalf[0][0]) {
            console.log(`ticket "${ticket}" - no match`);
        } else {
            if (firstHalf[0].length === 10 && secondHalf[0].length === 10) {
                console.log(`ticket "${ticket}" - 10${firstHalf[0].substring(0, 1)} Jackpot!`);
            } else {
                let symbol = firstHalf[0][0];
                if (firstHalf[0].length < secondHalf[0].length) {
                    symbol = secondHalf[0][0];
                }
                console.log(`ticket "${ticket}" - ${Math.min(firstHalf[0].length, secondHalf[0].length)}${symbol}`);
            }
        }
    }
}
winningTicket('Cash$$$$$$Ca$$$$$$sh');
winningTicket('$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ay');
winningTicket('validticketnomatch:(')
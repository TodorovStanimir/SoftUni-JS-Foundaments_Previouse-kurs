function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let isFiftRow = 0;
    let finalheigh = 0;
    for (let i = base; i >= 1; i -= 2) {
        isFiftRow++;
        finalheigh++;
        if (isFiftRow != 5) {
            marble += (4 * i - 4) * increment;
            stone += (i * i - (4 * i - 4)) * increment;
        } else {
            lapisLazuli += (4 * i - 4) * increment;
            stone += (i * i - (4 * i - 4)) * increment;
            isFiftRow = 0;
        }
    }
    if (base % 2 == 0) {
        if (base % 5 == 0) {
            gold = 4 * increment;
            lapisLazuli -= gold;
        } else {
            gold = 4 * increment;
            marble -= gold;
        }
    } else {
        gold = 1 * increment;
        stone -= gold;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(Number(finalheigh)*increment)}`);
}
//thePyramidOfKingDjoser(11, 1)
//thePyramidOfKingDjoser(11, 0.75)
//thePyramidOfKingDjoser(12, 1)
thePyramidOfKingDjoser(23,0.5)
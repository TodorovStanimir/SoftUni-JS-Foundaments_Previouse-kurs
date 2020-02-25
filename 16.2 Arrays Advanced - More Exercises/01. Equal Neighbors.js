function equalNeighbors(inputArrays) {
    let countEqualNeighbors=0;
    let moddifiedArray=[];
    let step=1;

    for (let item of inputArrays){
        moddifiedArray.push(item);
    }
    if (moddifiedArray.length===2){
        for (let row=0;row<1;row++){
            for (let column=0;column<moddifiedArray[row].length;column++) {
                if (moddifiedArray[row][column]===moddifiedArray[row+step][column]){
                    countEqualNeighbors++;
                }

            }
        }
    } else if (moddifiedArray.length>2){
        for (let row=0;row<moddifiedArray.length;row++){
            if (row===moddifiedArray.length-1){
                step=-row;
            }
            for (let column=0;column<moddifiedArray[row].length;column++) {
                if (moddifiedArray[row][column]===moddifiedArray[row+step][column]){
                    countEqualNeighbors++;
                }

            }
        }
    }
    console.log(countEqualNeighbors);
}
equalNeighbors([['2','3','4','7','0'],['4','0','5','3','4'],['2','3','5','4','2'],['9','8','7','5','4']]);
equalNeighbors([['2','2','5','7','4'],['4','0','5','3','4'],['2','5','5','4','2']]);
equalNeighbors([['test','yes','yo','ho'],['well','done','yo','6'],['not','done','yet','5']]);
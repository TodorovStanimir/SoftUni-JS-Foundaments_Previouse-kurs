function Gramophones(nameBand, nameAlbum, nameSong) {
    
    let songDuration = nameAlbum.toString().length* nameBand.toString().length * nameSong.toString().length / 2;
    let rotation = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotation} times.`);
}
Gramophones('Black Sabbath', 'Paranoid', 'War Pigs')
function songs(array) {
    let countSongs = array.shift();
    let typeListAllSongs = array.pop();
    let arrayOfSongs = []

    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        isSongFromTypeList() {
            if (this.typeList === typeListAllSongs) {
                console.log(`${this.name}`);
            } else if (typeListAllSongs === 'all') {
                console.log(`${this.name}`);
            }
        }
    }
    for (let i = 0; i < countSongs; i++) {
        let currentSong = array[i].split('_');
        [typeList, name, time] = [currentSong[0], currentSong[1], currentSong[2]];
        arrayOfSongs.push(new Songs(typeList, name, time));
    }

    arrayOfSongs.forEach(typeList => typeList.isSongFromTypeList());

}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'all']);
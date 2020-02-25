function songs(arr) {
    let numberSongs = arr.shift();
    let typeList = arr.pop();
    let songs = [];

    class Song {
        constructor(typeList, name, time, price) {
            this.typeList = typeList;
            this.name = String(name);
            this.time = String(time);
            this.price = Number(price);
        }
        isTypeList() {
            if (typeList === 'all') {
                console.log(this.name);
            } else if (this.typeList === typeList) {
                console.log(this.name);
            }
        }

    }

    for (let i = 0; i < arr.length; i++) {
        let song = arr[i].split('_');
        //song[3] = Number(song[3]);
        songs.push(new Song(song[0], song[1], song[2], song[3]));
    }
    songs.forEach(song => song.isTypeList());
    console.log(songs);
}
songs([3,
    'favourite_DownTown_3:14_5.60',
    'favourite_Kiss_4:16_5.70',
    'favourite_Smooth Criminal_4:01_6.60',
    'favourite'
]);
// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater'
// ]);
// songs([2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all'
// ])
function songs(arr) {
    let numberSongs = arr.shift();
    let typeList = arr.pop();
    let songs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
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
        songs.push(new Song(song[0], song[1], song[2]))
    }
    songs.forEach(song => song.isTypeList());
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
])
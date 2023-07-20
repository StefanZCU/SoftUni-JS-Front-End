function filterSongsByType(songData) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const numSongs = parseInt(songData[0]);
    const songs = [];

    for (let i = 1; i <= numSongs; i++) {
        const [typeList, name, time] = songData[i].split('_');
        const song = new Song(typeList, name, time);
        songs.push(song);
    }

    const typeListToFilter = songData[songData.length - 1];
    if (typeListToFilter === "all") {
        songs.forEach(song => console.log(song.name));
    } else {
        const filteredSongs = songs.filter(song => song.typeList === typeListToFilter);
        filteredSongs.forEach(song => console.log(song.name));
    }
}
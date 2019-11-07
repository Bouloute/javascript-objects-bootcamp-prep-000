var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist = Object.assign(playlist, {artistName: songTitle})
}
var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistName, songTitle){
  
  var UpdatedPlaylist = Object.assign(playlist, {artistName: songTitle})
  
  return UpdatedPlaylist
}
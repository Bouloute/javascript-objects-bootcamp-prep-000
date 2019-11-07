var playlist = {artist: 'song'}

function updatePlaylist(playlistToUpdate, artistName, songTitle){
  
  var UpdatedPlaylist = Object.assign({},playlistToUpdate, {[artistName]: songTitle})
  
  return UpdatedPlaylist
}
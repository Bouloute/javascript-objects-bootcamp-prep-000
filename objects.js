var playlist = {artist: 'song'}

function updatePlaylist(playlistToUpdate, artistName, songTitle){
  
  var updatedPlaylist = Object.assign({},playlistToUpdate, {[artistName]: songTitle})
  
  return updatedPlaylist
}
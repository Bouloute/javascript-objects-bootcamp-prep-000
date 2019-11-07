var playlist = {artist: 'song'}

function updatePlaylist(playlistToUpdate, artistName, songTitle){
  
  var updatedPlaylist = Object.assign({}, playlistToUpdate, {[artistName]: songTitle})
  console.log("playlist : " + playlist + "\nupdatedPlaylist : " + updatedPlaylist )
  
  return updatedPlaylist
}



var playlist = {MisterWives: "Reflections"};

function updatePlaylist(playlist, artist, song){
  return Object.assign({}, playlist, {artist: song});
}

function removeFromPlaylist(playlist, name){
  delete playlist.name;
  return playlist;
}
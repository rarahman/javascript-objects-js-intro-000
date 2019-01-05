var playlist = { UVERworld: "Colors of the Heart"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { artistName: songTitle})
}


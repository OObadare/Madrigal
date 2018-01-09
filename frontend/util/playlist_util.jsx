export const submitPlaylist = playlist => {
  return (
    $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: {playlist}
    })
  );
};

export const editPlaylist = playlist => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/playlists/${playlist.id}`,
      data: {playlist}
    })
  );
};

export const fetchPlaylist = playlistid => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/playlists/${playlistid}`,
    })
  );
};

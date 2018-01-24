export const submitPlaylist = formData => {
  return (
    $.ajax({
    method: 'POST',
    url: '/api/playlists',
    contentType: false,
    processData: false,
    data: formData
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

export const fetchAllPlaylists = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/playlists'
    })
  );
};

export const fetchUserPlaylists = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/playlists',
      data: {
        user_id: id
      }
    })
  );
};

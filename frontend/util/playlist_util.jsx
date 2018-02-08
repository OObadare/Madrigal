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

export const submitLike = (userId, playlistId) => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/likes',
      data: {
        user_id: userId,
        playlist_id: playlistId
      }
    })
  );
};

export const deleteLike = (userId, playlistId) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: 'api/likes',
      data: {
        user_id: userId,
        playlist_id: playlistId
      }
    })
  );
};

export const fetchPlaylistLikes = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/likes',
      data: {
        playlist_id: id
      }
    })
  );
};

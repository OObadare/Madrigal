export const submitTrack = formData => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/tracks',
      contentType: false,
      processData: false,
      data: formData
    })
  );
};

export const fetchTracks = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/tracks'
    })
  );
};

export const fetchTrack = trackid => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/tracks/${trackid}`,
    })
  );
};

export const fetchPlaylistTracks = (playlistid) => {
  return (
    $.ajax({
      method:'GET',
      url: `api/playlists/${playlistid}/tracks`,
      data: {
        playlist_id: playlistid
      }
    })
  );
};

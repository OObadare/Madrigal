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
      url: `api/track/${trackid}`,
    })
  );
};

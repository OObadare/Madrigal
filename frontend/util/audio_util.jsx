export const fetchTrack = trackid => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/track/${trackid}`,
    })
  );
};

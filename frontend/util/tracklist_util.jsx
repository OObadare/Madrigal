export const submitTracklist = tracklist => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/tracklists',
      data: { tracklist }
    })
  );
};

export const fetchTracklists = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/tracklists'
    })
  );
};

export const fetchTracklist = tracklistid => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/tracklist/${tracklistid}`,
    })
  );
};

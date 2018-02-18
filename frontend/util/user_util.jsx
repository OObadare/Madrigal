export const fetchUser = userId => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}`,
    })
  );
};

export const fetchLikedPlaylists = (userid) => {
  return (
    $.ajax({
      method:'GET',
      url: `api/users/${userid}/playlists`,
      data: {
        userid: userid
      }
    })
  );
};

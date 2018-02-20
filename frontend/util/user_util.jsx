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
        like: true
      }
    })
  );
};

export const fetchLikes = (userid) => {
  return (
    $.ajax({
      method:'GET',
      url: `api/likes`,
      data: {
        user_id: userid
      }
    })
  );
};

export const fetchPlaylists = (userid) => {
  return (
    $.ajax({
      method:'GET',
      url: `api/playlists`,
      data: {
        user_id: userid
      }
    })
  );
};

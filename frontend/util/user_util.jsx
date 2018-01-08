export const fetch = userId => (
  $.ajax({
    method: 'GET',
    url: `/user/${userId}`,
  })
);

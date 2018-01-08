

export const FETCH_USER = "FETCH_USER";

const fetchUser = (user) => {
  return ({
    type:FETCH_USER,
    user: user.id
  })
};

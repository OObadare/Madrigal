import * as TrackUtil from "../util/track_util";

export const SUBMIT_TRACK = "SUBMIT_TRACK";
export const FETCH_TRACK = "FETCH_TRACK";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

export const receiveTrack = (track) => {
  return ({
    type: RECEIVE_TRACK,
    track: track
  });
};

export const receiveTracks = (tracks) => {
  return ({
    type: RECEIVE_TRACKS,
    tracks: tracks
  });
};

export const createTrack = (formData) => (dispatch) => {
  return (
    TrackUtil.submitTrack(formData).then((track)=> (
      dispatch(receiveTrack(track))
    )
  ));
};

export const getTrack = (id) => (dispatch) => {
  return (
    TrackUtil.fetchTrack(id).then((tracks) => (
      dispatch(receiveTracks(tracks))
    ))
  );
};

export const getTracks = () => (dispatch) => {
  return (
    TrackUtil.fetchTracks().then((tracks) => (
      dispatch(receiveTracks(tracks))
    ))
  );
};

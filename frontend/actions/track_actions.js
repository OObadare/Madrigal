import * as TrackUtil from "../util/track_util";

export const SUBMIT_TRACK = "SUBMIT_TRACK";
export const FETCH_TRACK = "FETCH_TRACK";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_AUDIO = "RECEIVE_AUDIO";
export const LOAD_NOW = "LOAD_NOW";
export const UNLOAD = "UNLOAD";

export const loadNow = () => {
  return ({
    type: LOAD_NOW
  });
};

export const unload = () => {
  return ({
    type: UNLOAD
  });
};

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

export const receiveAudio = (track) => {
  return ({
    type: RECEIVE_AUDIO,
    track: track
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

export const getPlaylistTracks = (playlistid) => (dispatch) => {
  return (
    TrackUtil.fetchPlaylistTracks(playlistid).then((tracks) => (
      dispatch(receiveTracks(tracks))
    ))
  );
};

// export const getAudio = (id) => (dispatch) => {
//   return (
//     TrackUtil.fetchTrack(id).then((track) => (
//       dispatch(receiveAudio(track))
//     ))
//   );
// };

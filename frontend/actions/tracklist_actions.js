import * as TracklistUtil from "../util/tracklist_util";

export const SUBMIT_TRACKLIST = "SUBMIT_TRACKLIST";
export const FETCH_TRACKLIST = "FETCH_TRACKLIST";
export const RECEIVE_TRACKLIST = "RECEIVE_TRACKLIST";
export const RECEIVE_TRACKLISTS = "RECEIVE_TRACKLISTS";
export const RECEIVE_ID = "RECEIVE_ID";

export const receiveId = (id) => {
  return ({
    type: RECEIVE_ID,
    id: id
  });
};

export const receiveTracklist = (tracklist) => {
  return ({
    type: RECEIVE_TRACKLIST,
    tracklist: tracklist
  });
};

export const receiveTracklists = (tracklists) => {
  return ({
    type: RECEIVE_TRACKLISTS,
    tracklists: tracklists
  });
};

export const createTracklist = (tracklist) => (dispatch) => {
  return (
    TracklistUtil.submitTracklist(tracklist).then((tracklist)=> (
      dispatch(receiveTracklist(tracklist))
    )
  ));
};

export const getTracklist = (id) => (dispatch) => {
  return (
    TracklistUtil.fetchTracklist(id).then((tracklists) => (
      dispatch(receiveTracklists(tracklists))
    ))
  );
};

export const fetchPlaylistTracklists = (playlistId) => (dispatch) => {
  return (
    TracklistUtil.fetchTracklists(playlistId).then((tracklists) => (
      dispatch(receiveTracklists(tracklists))
    ))
  );
};

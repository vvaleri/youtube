const defaultState = {
  video: [],
  results: false,
  isActive: false,
  errorSearch: false
};

const SEARCH_VIDEO = 'SEARCH_VIDEO';
const GET_ERROR_SEARCH = 'GET_ERROR_SEARCH';
const DELETE_VIDEO = 'DELETE_VIDEO';
const RESETE_VIDEO_STATE = 'RESETE_VIDEO_STATE';

export const videoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_VIDEO:
      return {
        ...state,
        video: [...state.video, ...action.payload],
        results: true,
        isActive: true,
        errorSearch: false
      };

    case DELETE_VIDEO:
      return {
        ...state,
        video: []
      };

    case RESETE_VIDEO_STATE:
      return {
        ...state,
        video: [],
        results: false,
        isActive: false,
        errorSearch: false
      };

    case GET_ERROR_SEARCH:
      return {
        ...state,
        errorSearch: true
      };

    default:
      return state;
  }
};

export const getAllVideo = payload => ({ type: SEARCH_VIDEO, payload });
export const showErrorSearch = () => ({ type: GET_ERROR_SEARCH });
export const resetResultVideo = () => ({ type: DELETE_VIDEO });
export const resetVideoState = () => ({ type: RESETE_VIDEO_STATE });

const defaultState = {
  video: []
};

const SEARCH_VIDEO = 'SEARCH_VIDEO';

export const videoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_VIDEO:
      return { ...state, video: [...state.video, ...action.payload] };

    default:
      return state;
  }
};

export const getAllVideo = payload => ({ type: SEARCH_VIDEO, payload });

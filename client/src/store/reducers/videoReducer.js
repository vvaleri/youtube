const defaultState = {
  video: [],
  results: false,
  isActive: false
};

const SEARCH_VIDEO = 'SEARCH_VIDEO';

export const videoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_VIDEO:
      return {
        ...state,
        video: [...state.video, ...action.payload],
        results: true,
        isActive: true
      };

    default:
      return state;
  }
};

export const getAllVideo = payload => ({ type: SEARCH_VIDEO, payload });
